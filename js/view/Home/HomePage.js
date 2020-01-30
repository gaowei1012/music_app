/*
 * @Author: your name
 * @Date: 2020-01-20 14:39:30
 * @LastEditTime : 2020-01-20 14:43:50
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /music_app/js/view/Home/HomePage.js
 */
import * as React from 'react'
import {BackHandler, ToastAndroid} from 'react-native'
import NavigationUtil from '../../utils/NavigationUtil'
import DynamicTabNavigator from '../../navigation/DynamicTabNavigator'

export default class HomePage extends React.Component {
  componentDidMount() {
    BackHandler.addEventListener(
      'hardwareBackPress',
      this.onBackButtonPressAndroid,
    );
  }
  // 安卓物理返回键
  onBackButtonPressAndroid = () => {
    if (this.props.navigation.isFocused()) {
      if (this.lastBackPressed && this.lastBackPressed + 2000 >= Date.now()) {
        return false;
      }
      this.lastBackPressed = Date.now();
      ToastAndroid.show('再按一次退出应用', ToastAndroid.SHORT);
      return true;
    }
  };
  componentWillMount() {
    BackHandler.removeEventListener(
      'hardwareBackPress',
      this.onBackButtonPressAndroid,
    );
  }
  render() {
    NavigationUtil.navigation = this.props.navigation;
    return <DynamicTabNavigator />;
  }
}
