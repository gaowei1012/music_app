/*
 * @Author: your name
 * @Date: 2020-01-20 16:51:13
 * @LastEditTime : 2020-01-20 17:02:02
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /music_app/js/components/Swiper.js
 */
import * as React from 'react'
import {View, StyleSheet, Image} from 'react-native'
import Swipe from 'react-native-swiper'
import PropTypes from 'prop-types'
import {flex} from '../styles/constants'

export default class MySwipe extends React.Component {
  static propTypes = {
    swipe_data: PropTypes.array,
    imageWidth: PropTypes.number,
    imageHeight: PropTypes.number,
  }
  constructor(props){
    super(props)
  }
  render() {
    return (
      <View style={styles.container}>
        <Swipe
          autoplay={true}
          loop={true}
          horizontal={true}
        >
          {this.props.swipe_data.map(item => {
            return <Image style={[{width: this.props.imageWidth}, {height: this.props.imageHeight}]} key={item.id} source={item.url}/>
          })}
        </Swipe>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: flex,
  }
})