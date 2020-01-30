/*
 * @Author: your name
 * @Date: 2020-01-17 13:51:12
 * @LastEditTime : 2020-01-20 14:45:28
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /music_app/js/App.js
 */
import * as React from 'react'
import store from './redux/store/index'
import {Provider} from 'react-redux'
import {YellowBox} from 'react-native'
import AppNavigation from './navigation/AppNavigation'

export default class App extends React.Component {
  fixViewPagerAndroid = () => {
    // eslint-disable-next-line dot-notation
    YellowBox.ignoreWarnings['ViewPagerAndroid'];
  };
  render() {
    return (
      <Provider store={store}>
        <AppNavigation />
      </Provider>
    )
  }
}
