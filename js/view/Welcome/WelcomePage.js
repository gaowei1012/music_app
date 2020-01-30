/*
 * @Author: your name
 * @Date: 2020-01-17 14:29:31
 * @LastEditTime : 2020-01-28 21:23:48
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /music_app/js/view/view/Welcome/WelcomePage.js
 */
import * as React from 'react'
import {View, Text, StyleSheet} from 'react-native'
import NavigationUtil from '../../utils/NavigationUtil'
import {flex, flexDirectionRow, center} from '../../styles/constants'

export default class WeclomePage extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.init();
  }

  // 加载首页初始化
  init() {
    this.timer = setTimeout(() => {
      NavigationUtil.restToHomePage({
        navigation: this.props.navigation,
      });
    }, 300);
  }
  componentWillMount() {
    this.timer && clearTimeout(this.timer);
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.containerBox}>
          <Text>欢迎页</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: flex,
  },
  containerBox: {
    flexDirection: flexDirectionRow,
    alignItems: center,
    justifyContent: center,
    width: '100%',
    height: '100%',
  },
});
