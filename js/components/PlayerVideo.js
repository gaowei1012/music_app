'use strict';

import * as React from 'react';
import PropTypes from 'prop-types';
import Video from 'react-native-video';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
} from 'react-native';
import {
  flex,
  center,
  row,
  defaultFontSize,
  defaultFontColor,
  iosFontFmily,
} from '../styles/constants';

class PlayerVideo extends React.Component {
  constructor() {
    super();
  }
  static propTypes = {
    data_list: PropTypes.array,
  };
  state = {
    data_list: [
      {id: 1, price_url: '', text: 'test'},
      {id: 2, price_url: '', text: 'test'},
      {id: 3, price_url: '', text: 'test'},
      {id: 4, price_url: '', text: 'test'},
      {id: 5, price_url: '', text: 'test'},
    ],
  };
  playerVideo(id) {
    console.log('id', id);
  }
  render() {
    return (
      <ScrollView style={styles.container}>
        {this.state.data_list.map(item => (
          <View key={item.id} style={styles.videoBox}>
            <TouchableOpacity
              onPress={() => this.playerVideo(item.id)}
              style={styles.videoContentBox}>
              <Image
                style={styles.image}
                source={require('../images/common/player.png')}
              />
            </TouchableOpacity>
            <View style={styles.videoBtnItem}>
              <Text>hello</Text>
            </View>
          </View>
        ))}
      </ScrollView>
    );
  }
}

export default PlayerVideo;

const styles = StyleSheet.create({
  container: {},
  videoBox: {
    height: 200,
    width: 345,
    alignSelf: center,
    // borderWidth: 1,
    // borderColor: '#000',
    // borderRadius: 10,
    marginBottom: 10,
  },
  videoContentBox: {
    height: 160,
    width: 345,
    borderRadius: 10,
    backgroundColor: '#eee',
    overflow: 'hidden',
    justifyContent: center,
  },
  image: {
    width: 40,
    height: 40,
    alignSelf: center,
    justifyContent: center,
  },
  videoBtnItem: {
    position: 'absolute',
    left: 0,
    bottom: 0,
    height: 40,
    backgroundColor: 'red',
    width: 345,
  },
});
