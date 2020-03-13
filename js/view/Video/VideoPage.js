'use strict';
import * as React from 'react';
import {StyleSheet, Text, SafeAreaView} from 'react-native';
import {flex, row, center} from '../../styles/constants';
import {View, Button} from 'react-native-ui-lib';
import PlayerVideo from '../../components/PlayerVideo';
import TopNavigationBar from '../../common/TopNavigationBar';
import {connect} from 'react-redux';
import actions from '../../redux/actions/index';
import {topMv} from '../../expand/api';

class VideoPage extends React.Component {
  componentDidMount() {
    this.getData();
  }
  getData() {
    const {onLoadMv} = this.props;
    const url = topMv + '港台';
    onLoadMv(url);
  }
  _renderTopBar = () => {
    let statusbar = {
      backgroundColor: '#ffffff',
      barStyle: 'dark-content',
    };
    return (
      <TopNavigationBar
        title="视频"
        statusBar={statusbar}
        style={{backgroundColor: '#ffffff'}}
      />
    );
  };
  render() {
    return (
      <SafeAreaView style={styles.container}>
        {this._renderTopBar()}
        <PlayerVideo data_list={this.props.mv} />
      </SafeAreaView>
    );
  }
}

const mapStateToProps = state => ({
  mv: state.mv,
});

const mapDispatchToProps = dispatch => ({
  onLoadMv: url => dispatch(actions.onLoadMv(url)),
});

export default connect(mapStateToProps, mapDispatchToProps)(VideoPage);

const styles = StyleSheet.create({
  container: {
    flex: flex,
  },
});
