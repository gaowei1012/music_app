/*
 * @Author: your name
 * @Date: 2020-01-28 21:18:27
 * @LastEditTime : 2020-01-30 11:29:56
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /music_app/js/view/Personal/MyFriend.js
 */
'use strict'

import * as React from 'react'
import {View,Text,StyleSheet,SafeAreaView} from 'react-native'
import {flex,center,iosFontFmily} from '../../styles/constants'

export default class MyFriend extends React.Component {
  render() {
    return (
    <SafeAreaView style={styles.container}>
      <Text>我的好友</Text>
    </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: flex
  }
})