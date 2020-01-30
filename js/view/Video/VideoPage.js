/*
 * @Author: your name
 * @Date: 2020-01-28 11:37:56
 * @LastEditTime : 2020-01-28 13:11:39
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /music_app/js/view/Video/VideoPage.js
 */
'use strict'

import * as React from 'react'
import {StyleSheet,Text,SafeAreaView} from 'react-native'
import {flex,row,center} from '../../styles/constants'
import {View, Button} from 'react-native-ui-lib'

class VideoPage extends React.Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View>
          <Button
            label='video'
          />
        </View>
      </SafeAreaView>
    )
  }
}

export default VideoPage

const styles = StyleSheet.create({
  container: {
    flex: flex,
  }
})