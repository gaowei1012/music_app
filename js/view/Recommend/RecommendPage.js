/*
 * @Author: your name
 * @Date: 2020-01-17 14:33:21
 * @LastEditTime : 2020-01-17 14:49:46
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /music_app/js/view/view/Recommend/RecommendPage.js
 */
import * as React from 'react'
import {connect} from 'react-redux'
import actions from '../../redux/actions'
import {View, StyleSheet, Text, SafeAreaView} from 'react-native'
import {flex} from '../../styles/constants'

class RecommendPage extends React.Component {
  render() {
    return (
      <SafeAreaView style={styls.container}>
        <Text>热门推荐</Text>
      </SafeAreaView>
    )
  }
}

const mapStateToProps = state => ({})
const mapDispatchToPrpps = dispatch => ({})

export default connect(
  mapStateToProps,
  mapDispatchToPrpps
)(RecommendPage)

const styls = StyleSheet.create({
  container: {
    flex:flex
  }
})