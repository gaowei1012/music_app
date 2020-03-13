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
    data_list: PropTypes.object,
  };
  playerVideo(id) {
    console.log('id', id);
  }
  render() {
    const data = this.props.data_list.item;
    return (
      <ScrollView style={styles.container}>
        {data == null
          ? null
          : data.map(item => (
              <View key={item.id} style={styles.videoBox}>
                <TouchableOpacity
                  onPress={() => this.playerVideo(item.id)}
                  style={styles.videoContentBox}>
                  <Image style={styles.image} source={{uri: item.cover}} />
                </TouchableOpacity>
                <View style={styles.videoBtnItem}>
                  <Text>{item.name}</Text>
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
