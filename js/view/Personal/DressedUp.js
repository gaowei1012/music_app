/*
 * @Author: your name
 * @Date: 2020-01-28 21:58:03
 * @LastEditTime : 2020-01-30 11:32:17
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /music_app/js/view/Personal/DressedUp.js
 */
'use strict'

import * as React from 'react'
import {View, Text, StyleSheet, SafeAreaView} from 'react-native'
import {flex, center} from '../../styles/constants'

export default class DressedUp extends React.Component {
  render() {
    return (
      <SafeAreaView style={sytles.container}>
        <Text>个性装扮</Text>
      </SafeAreaView>
    )
  }
}

const sytles =StyleSheet.create({
  container: {
    flex: flex,
    alignItems: center,
  }
})