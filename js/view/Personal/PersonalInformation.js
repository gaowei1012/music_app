/*
 * @Author: your name
 * @Date: 2020-01-28 21:11:27
 * @LastEditTime : 2020-01-30 11:31:20
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /music_app/js/view/Personal/PersonalInformation.js
 */
'use strict'

import * as React from 'react'
import {View, Text, StyleSheet, SafeAreaView} from 'react-native'
import {flex, center, fontColor, iosFontFmily} from '../../styles/constants'

export default class PersonalInformation extends React.Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Text>个人信息</Text>
      </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: flex,
    alignItems: center,
  }
})
