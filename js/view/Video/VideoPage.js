'use strict'
import * as React from 'react'
import {StyleSheet,Text,SafeAreaView} from 'react-native'
import {flex,row,center} from '../../styles/constants'
import {View, Button} from 'react-native-ui-lib'
import PlayerVideo from '../../components/PlayerVideo'

class VideoPage extends React.Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <PlayerVideo/>
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