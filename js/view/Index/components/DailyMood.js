'use strict'

import * as React from 'react'
import PropTypes from 'prop-types'
import { View, StyleSheet, Text } from 'react-native'
import { row, center, spaceBetween, iosFontFmily, defaultFontSize, fontColor } from '../../../styles/constants'
// 首页天气
export default class DailyMood extends React.Component {
  static propTypes = {
    data: PropTypes.object.isRequired, // 必传参数
  }
  state = {
    cond_txt: '',
    fl: '',
    month: 0,
    day: 0
  }
  async componentDidMount() {
    this.filterData()
    this.formData()
  }
  // 对数据处理
  filterData() {
    const now = this.props.data.item[0].now
    const cond_txt_data = now.cond_txt
    const fl_data = now.fl
    this.setState({
      cond_txt: cond_txt_data,
      fl: fl_data
    })
  }
  // 对日期处理
  formData() {
    let date = new Date()
    let new_month = date.getMonth() + 1// 月份
    let new_day = date.getHours()// 日期
    this.setState({
      month: new_month,
      day: new_day,
    }, () => {
      console.log('day', this.state.day)
    })
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.leftBox}>
          <Text style={styles.month}>{this.state.month}月你好!</Text>
          <Text style={styles.weather}>今天天气 {this.state.fl}°C</Text>
        </View>
        <View style={styles.rightBox}>
          <Text style={styles.date}>Nov.{this.state.day}</Text>
          <Text style={styles.weather}>{this.state.cond_txt}</Text>
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