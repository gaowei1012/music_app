import * as React from 'react';
import PropTypes from 'prop-types';
import {View, Text, StyleSheet, SafeAreaView} from 'react-native';
import {flex, row, center} from '../styles/constants';
import {screentWidth} from '../utils/screenUtil';
import {px2dp} from '../utils/px2dp';

export default class Player extends React.Component {
  static propTypes = {};
  constructor() {
    super();
    this.state = {
      id: null,
    };
  }

  componentDidMount() {
    this.getData();
  }

  getData() {
    let id = this.props.navigation.state.params.id;
    this.setState({
      id,
    });
  }

  render() {
    return (
      <SafeAreaView style={styles.playerBox}>
        <Text>{this.state.id}</Text>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  playerBox: {
    flex: flex,
  },
});
