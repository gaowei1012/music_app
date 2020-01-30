/*
 * @Author: your name
 * @Date: 2020-01-28 20:11:00
 * @LastEditTime : 2020-01-28 20:33:36
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /music_app/js/common/TopNavigationBar.js
 */
'use strict'

import * as React from 'react'
import {View, Text, StyleSheet, ViewPropTypes, StatusBar} from 'react-native'
import {row, center, spaceBetween, flexStart} from '../styles/constants'
import PropTypes from 'prop-types'

const StatusBarShape = {
  barStyle: PropTypes.oneOf(['light-content', 'default']),
  hidden: PropTypes.bool,
  backgroundColor: PropTypes.string
}

export default class NavigationBar extends React.Component {
  static propTypes = {
    style: ViewPropTypes.style,
    title: PropTypes.string,
    titleView: PropTypes.element,
    titleLayoutStyle: ViewPropTypes.style,
    statusBar: PropTypes.shape(StatusBarShape),
    rightButton: PropTypes.element,
    leftButton: PropTypes.element,
    translucent: PropTypes.bool, // 是否将状态栏设为透明
    color:PropTypes.string,
    fontSize:PropTypes.number,
    animated: PropTypes.bool, // 状态栏动画
  }

  static defaultProps = {
    statusBar: {
      barStyle: 'light-content',
      hidden: false,
      translucent: false,
      animated: true,
    },
    color: '#333',
    fontSize: 16
  }

  render() {
    let {fontSize,color} = this.props
    let statusBar = !this.props.statusBar.hidden ? (
      <View style={styles.statusBar}>
        <StatusBar {...this.props.statusBar}/>
      </View>
    ) : null
    let titleView = this.props.titleView ? (
      this.props.titleView
    ): (
      <Text ellipsizeMode='head' numberOfLines={1} style={[styles.title,{color: color, fontSize: px2dp(fontSize),}]}>
        {this.props.title}
      </Text>
    )
    let content = this.props.hide ? null : (
      <View style={styles.navBar}>
        <View style={styles.leftBtnBox}>
          {this.getButtonElement(this.props.leftButton)}
        </View>
        <View
          style={[styles.navBarTitleContainer, this.props.titleLayoutStyle]}>
          {titleView}
        </View>
        <View style={styles.rightBtnBox}>
          {this.getButtonElement(this.props.rightButton)}
        </View>
      </View>
    )
    return (
      <View style={[styles.container, this.props.style]}>
        {statusBar}
        {content}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  statusBar: {
    flexDirection: row,
    justifyContent: spaceBetween,
    alignItems: center,
    height: 44,
    paddingHorizontal: 15,
  },
  navBar: {
    alignItems: center,
    justifyContent: center,
    flexDirection: row,
  },
  navBarButton: {
    alignItems: center,
  },
  container: {
    backgroundColor: '#85DFD2',
  },
  title: {
    fontWeight: 'bold'
  },
  leftBtnBox:{
    flexDirection: row,
    justifyContent: flexStart,
    alignItems: center,
    width: 50,
    height: 40, // 根据平台设置高度
  },
  rightBtnBox:{
    ...flexRowEnd,
    width:px2dp(50),
    // height: NAV_BAR_H, // 根据平台设置高度
  }
})