/*
 * @Author: your name
 * @Date: 2020-01-30 16:35:23
 * @LastEditTime : 2020-01-30 16:55:07
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /music_app/js/view/Index/components/BannerItem.js
 */
import * as React from 'react'
import PropTypes from 'prop-types'
import {View,StyleSheet,Image} from 'react-native'
import {flex} from '../../../styles/constants'
import Swipe from 'react-native-swiper'

export default class BannerItem extends React.Component {
  static propTypes = {
    imageHeight: PropTypes.number,
    imageWidth: PropTypes.number,
    data: PropTypes.array,
  }
  state = {
    data: [
      {id: 1, image: 'https://iph.href.lu/375x120'},
      {id: 2, image: 'https://iph.href.lu/375x120'},
      {id: 3, image: 'https://iph.href.lu/375x120'},
    ]
  }
  render() {
    // const {data} = this.props
    const {data} = this.state
    const {imageWidth, imageHeight} = this.props
    //console.log('data--data--data', data)
    return (
      <View style={styles.container}>
        <Swipe
          autoplay={true}
          loop={true}
          horizontal={true}
        >
          {data.map(item => (
            <Image style={[{width: imageWidth}, {height: imageHeight}]} key={item.id} source={{uri: item.url}}/>
          ))}
        </Swipe>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
})
