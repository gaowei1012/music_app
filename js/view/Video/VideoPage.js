
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