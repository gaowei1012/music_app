'use strict'
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
