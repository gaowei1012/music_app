'use strict'

import * as React from 'react'
import {View,Text,StyleSheet,SafeAreaView} from 'react-native'
import {flex,center,row} from '../../styles/constants'
import {screentWidth} from '../../utils/screenUtil'
import {connect} from 'react-redux'
import actions from '../../redux/actions/index'
import {topPlaylistHigh} from '../../expand/api'

// 歌单页面
class PlayListPage extends React.Component {
  async componentDidMount() {
    this.getData()
  }
  getData() {
    
  }
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Text>歌单</Text>
      </SafeAreaView>
    )
  }
}

const mapStateToProps = state => ({
  
})

const mapDispatchToProps = dispatch => ({})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PlayListPage)

const styles = StyleSheet.create({
  container: {
    flex: flex,
  }
})