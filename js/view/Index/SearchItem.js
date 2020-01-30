/*
 * @Author: your name
 * @Date: 2020-01-28 12:25:49
 * @LastEditTime : 2020-01-30 16:34:06
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /music_app/js/view/Index/SearchItem.js
 */
'use strict'

import * as React from 'react'
import {View,TextInput,StyleSheet,Text} from 'react-native'
import {center,row,spaceBetween,flexStart} from '../../styles/constants'

export default class SearchItem extends React.Component {
  renderTextInput() {
    return (
      <TextInput
        placeholder='搜索'
        style={{height: 36, alignSelf: flexStart, width: 260}}
      />
    )
  }
  render() {
    return (
      <View style={styles.container}>
        <View>
          <Text>听</Text>
        </View>
        <View>
          {this.renderTextInput()}
        </View>
        <View>
          <Text>l-icon</Text>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    width: 345,
    height: 46,
    flexDirection: row,
    justifyContent: spaceBetween,
    alignSelf: center,
    alignItems: center
  }
})