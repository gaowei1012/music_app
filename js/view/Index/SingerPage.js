import * as React from 'react';
import {View, Text, SafeAreaView, StyleSheet} from 'react-native';
import {flex, row, center} from '../../styles/constants';
import {connect} from 'react-redux';
import actions from '../../redux/actions/index';
import {resource} from '../../expand/api';

class SingerPage extends React.Component {
  constructor() {
    super();
  }
  componentDidMount() {
    this.getResource();
  }
  getResource() {
    const {onLoadResourceData, resoucre} = this.props;
    onLoadResourceData(resource);
    console.log('resoucre', resoucre);
  }
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Text>每日推荐</Text>
      </SafeAreaView>
    );
  }
}

const mapStateToProps = state => ({
  resoucre: state.resoucre,
});

const mapDispatchToProps = dispatch => ({
  onLoadResourceData: url => dispatch(actions.onLoadResourceData(url)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SingerPage);

const styles = StyleSheet.create({
  container: {
    flex: flex,
  },
});
