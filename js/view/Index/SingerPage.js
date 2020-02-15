'use strict'

import * as React from 'react'
import {View, Text, SafeAreaView,StyleSheet,} from 'react-native'
import {flex,row,center} from '../../styles/constants'

export default class SingerPage extends React.Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Text>歌手列表</Text>
      </SafeAreaView>
    )
  } 
}

const styles = StyleSheet.create({
  container: {
    flex: flex,
  }
})
