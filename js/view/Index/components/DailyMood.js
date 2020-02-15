'use strict'

import * as React from 'react'
import { View, StyleSheet, Text } from 'react-native'
import { flex, row, center, spaceBetween } from '../../../styles/constants'
import { screentWidth } from '../../../utils/screenUtil'
// 心情签到
export default class DailyMood extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View>
          <Text>hello</Text>
        </View>
        <View>
          <Text>world</Text>
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
  }
})