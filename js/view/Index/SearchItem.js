'use strict'

import * as React from 'react'
import {View,TextInput,StyleSheet,Image,TouchableOpacity} from 'react-native'
import {center,row,spaceBetween} from '../../styles/constants'
import NavigationUtil from '../../utils/NavigationUtil'
export default class SearchItem extends React.Component {
  renderTextInput() {
    return (
      <TextInput
        placeholder='搜索'
        style={styles.textInput}
      />
    )
  }
  goToNoticePage() {
    NavigationUtil.goPage({}, '')
  }
  goToMuiscPage() {
    NavigationUtil.goPage({}, '')
  }
  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={() => this.goToNoticePage} >
          <Image style={styles.notice} source={require('../../images/common/notice.png')} />
        </TouchableOpacity>
        <View style={styles.inputBox}>
          {this.renderTextInput()}
        </View>
        <TouchableOpacity onPress={() => this.goToMuiscPage} >
          <Image style={styles.music} source={require('../../images/common/topMusic.png')}/>
        </TouchableOpacity>
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
    alignItems: center,
  },
  notice: {
    width: 25,
    height: 25,
  },
  music: {
    width: 25,
    height: 25,
  },
  inputBox: {
    width: 280,
    backgroundColor: '#eee',
    borderRadius: 36,
  },
  textInput: {
    width: 260,
    height: 36,
    marginLeft: 10,
  }
})