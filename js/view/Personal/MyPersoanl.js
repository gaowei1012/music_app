/*
 * @Author: your name
 * @Date: 2020-01-28 21:29:59
 * @LastEditTime : 2020-01-30 11:30:42
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /music_app/js/view/Personal/MyPersoanl.js
 */
'use strict'

import * as React from 'react'
import {View, Text, StyleSheet, SafeAreaView} from 'react-native'
import {flex, center, iosFontFmily} from '../../styles/constants'

export default class MyPersoanl extends React.Component {
  render() {
    return (
      <SafeAreaView style={styles.conatiner}>
        <Text>个人主页</Text>
      </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({
  conatiner: {
    flex: flex,
  }
})
