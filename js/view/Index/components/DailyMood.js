'use strict'

import * as React from 'react'
import { View, StyleSheet, Text } from 'react-native'
import { flex, row, center, spaceBetween, iosFontFmily, defaultFontColor, defaultFontSize, fontColor } from '../../../styles/constants'
import { screentWidth } from '../../../utils/screenUtil'
// 心情签到
export default class DailyMood extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.leftBox}>
          <Text style={styles.month}>2月你好!</Text>
          <Text style={styles.weather}>今天天气 10°-20°</Text>
        </View>
        <View style={styles.rightBox}>
          <Text style={styles.date}>Nov.15</Text>
          <Text style={styles.weather}>晴</Text>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 16,
    width: 345,
    height: 60,
    backgroundColor: '#eee',
    alignSelf: center,
    borderRadius: 6,
    flexDirection: row,
    justifyContent: spaceBetween,
    padding: 8,
  },
  leftBox: {

  },
  month: {
    fontFamily: iosFontFmily,
    fontSize: defaultFontSize,
    color: fontColor,
  },
  weather: {
    marginTop: 8,
    fontFamily: iosFontFmily,
    fontSize: defaultFontSize,
    color: fontColor,
  },
  rightBox: {
    alignItems: center
  },
  date: {
    fontFamily: iosFontFmily,
    fontSize: defaultFontSize,
    color: fontColor,
  },
})