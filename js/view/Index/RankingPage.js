'use strict'

import * as React from 'react'
import {View,Text,StyleSheet,SafeAreaView} from 'react-native'
import {flex,center,row} from '../../styles/constants'
import {screentWidth} from '../../utils/screenUtil'
import {connect} from 'react-redux'
import actions from '../../redux/actions/index'
import {topList} from '../../expand/api'

// 排行榜
class RankingPage extends React.Component {
  async componentDidMount() {
    this.getData()
  }
  // 获取数据
  getData() {
    const {onLoadTopListData} = this.props
    let url = topList + '0';
    console.log('url-----', url)
    onLoadTopListData(url)
  }
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Text>排行榜</Text>
      </SafeAreaView>
    )
  }
}

const mapStateToProps = state => ({
  top: state.top,
})

const mapDispatchToProps = dispatch => ({
  onLoadTopListData: url => dispatch(actions.onLoadTopListData(url))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RankingPage)

const styles = StyleSheet.create({
  container: {
    flex: flex,
  }
})