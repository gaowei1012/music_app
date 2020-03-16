'use strict';

import * as React from 'react';
import {View, Text, StyleSheet, SafeAreaView} from 'react-native';
import {flex, center, row} from '../../styles/constants';
import {screentWidth} from '../../utils/screenUtil';
import {connect} from 'react-redux';
import actions from '../../redux/actions/index';
import {topAllList, rakingList} from '../../expand/api';
import TopNavigationBar from '../../common/TopNavigationBar';
import {GoBack} from '../../utils/GoBack';
import {px2dp} from '../../utils/px2dp';

// 排行榜
class RankingPage extends React.Component {
  componentDidMount() {
    this.getData();
  }
  // 获取数据
  getData() {
    const {onLoadTopListData, onLoadListData} = this.props;
    let url = `${rakingList}?idx=${0}`;
    console.log('url', url);
    onLoadTopListData(topAllList);
    onLoadListData(url);
  }
  _renderTopBar = () => {
    let statusbar = {
      backgroundColor: '#ffffff',
      barStyle: 'dark-content',
    };
    return (
      <TopNavigationBar
        title="排行榜"
        statusBar={statusbar}
        style={{backgroundColor: '#ffffff'}}
        leftButton={GoBack(this.props, 'dark')}
      />
    );
  };
  render() {
    return (
      <SafeAreaView style={styles.container}>
        {this._renderTopBar()}
        <Text>排行榜</Text>
      </SafeAreaView>
    );
  }
}

const mapStateToProps = state => ({
  topList: state.topList,
  rankiglist: state.rankiglist,
});

const mapDispatchToProps = dispatch => ({
  onLoadTopListData: url => dispatch(actions.onLoadTopListData(url)),
  onLoadListData: url => dispatch(actions.onLoadListData(url)),
});

export default connect(mapStateToProps, mapDispatchToProps)(RankingPage);

const styles = StyleSheet.create({
  container: {
    flex: flex,
  },
});
