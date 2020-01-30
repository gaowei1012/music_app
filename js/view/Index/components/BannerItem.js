/*
 * @Author: your name
 * @Date: 2020-01-30 16:35:23
 * @LastEditTime : 2020-01-30 16:55:07
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /music_app/js/view/Index/components/BannerItem.js
 */
import * as Reacrt from 'react'
import PropTypes from 'prop-types'
import {View,StyleSheet} from 'react-native'
import {flex} from '../../../styles/constants'

export default class BannerItem extends Reacrt.Component {
  static propTypes = {
    imageHeight: PropTypes.number,
    imageWidth: PropTypes.number,
    data: PropTypes.array,
  }
  render() {
    const {data} = this.props
    console.log('data--data--data', data)
    return (
      <View style={styles.container}>
        <Swipe
          autoplay={true}
          loop={true}
          horizontal={true}
        >
          {data.map(item => (
            <Image style={[{width: imageWidth}, {height: imageHeight}]} key={item.id} source={item.url}/>
          ))}
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