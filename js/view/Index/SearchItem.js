'use strict';

import * as React from 'react';
import {
  View,
  TextInput,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';
import {center, row, spaceBetween} from '../../styles/constants';
import NavigationUtil from '../../utils/NavigationUtil';
import {px2dp} from '../../utils/px2dp';
export default class SearchItem extends React.Component {
  renderTextInput() {
    return <TextInput placeholder="搜索" style={styles.textInput} />;
  }
  goToNoticePage = () => {
    NavigationUtil.goPage({}, '');
  };
  goToMuiscPage = () => {
    NavigationUtil.goPage({}, '');
  };
  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={() => this.goToNoticePage}>
          <Image
            style={styles.notice}
            source={require('../../images/common/notice.png')}
          />
        </TouchableOpacity>
        <View style={styles.inputBox}>{this.renderTextInput()}</View>
        <TouchableOpacity onPress={() => this.goToMuiscPage}>
          <Image
            style={styles.music}
            source={require('../../images/common/topMusic.png')}
          />
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: px2dp(345),
    height: px2dp(46),
    flexDirection: row,
    justifyContent: spaceBetween,
    alignSelf: center,
    alignItems: center,
  },
  notice: {
    width: px2dp(25),
    height: px2dp(25),
  },
  music: {
    width: px2dp(25),
    height: px2dp(25),
  },
  inputBox: {
    width: px2dp(280),
    backgroundColor: '#eee',
    borderRadius: px2dp(36),
  },
  textInput: {
    width: px2dp(260),
    height: px2dp(36),
    marginLeft: px2dp(10),
  },
});
