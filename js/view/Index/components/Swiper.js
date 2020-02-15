
import * as React from 'react'
import {View,StyleSheet,TouchableOpacity,Image} from 'react-native'
import Swipe from 'react-native-swiper'
import {screentWidth} from '../../../utils/screenUtil'

export default class SwiperItem extends React.Component {
  constructor(props) {
    super(props)
    this.state={
      horizontal: true,
      autoplay: true
    }
  }
  render() {
    return (
      <View style={styles.container}>
        <Swipe
          horizontal={this.state.horizontal}
          autoplay={this.state.autoplay}
          style={{width: 375, height: 90}}
        >
          <Image styles={styles.image} source={{uri: 'https://iph.href.lu/375x120'}}/>
          <Image styles={styles.image} source={{uri: 'https://iph.href.lu/375x120'}}/>
          <Image styles={styles.image} source={{uri: 'https://iph.href.lu/375x120'}}/>
        </Swipe>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  image: {
    width: screentWidth,
    height: 90,
  }
})