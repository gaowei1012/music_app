
import * as React from 'react'
import PropTypes from 'prop-types'
import {View,StyleSheet,TouchableOpacity,Image} from 'react-native'
import Swipe from 'react-native-swiper'
import {screentWidth} from '../../../utils/screenUtil'

export default class SwiperItem extends React.Component {
  static propTypes = {
    data: PropTypes.array.isRequired,
  }
  state={
      horizontal: true,
      autoplay: true
  }
  async componentDidMount() {
    console.log('this props data', this.props.data)
  }
  render() {
    return <Swipe
          horizontal={this.state.horizontal}
          autoplay={this.state.autoplay}
          style={{width: 375, height: 90}}
        >
          {this.props.data.map(item => (
            <View key={item.targetId}>
              <Image styles={styles.image} source={{uri: item.imageUrl}}/>
            </View>
          ))}
        </Swipe>
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