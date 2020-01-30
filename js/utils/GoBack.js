/* eslint-disable no-undef */
/*
 * @Author: your name
 * @Date: 2019-12-25 17:19:41
 * @LastEditTime : 2019-12-25 17:32:27
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /v2ex/js/utils/GoBack.js
 */
'use strict';

import React from 'react';
import {View, StyleSheet, Image, TouchableOpacity} from 'react-native';
import NavigationUtil from '../utils/NavigationUtil';

function GoBack(props) {
  return (
    <View style={styles.leftWrapContainer}>
      <TouchableOpacity
        activeOpacity={1}
        onPress={() => NavigationUtil.goBack(props.navigation)}>
        <View style={styles.leftGoBackIcon}>
          <Image
            style={styles.leftImage}
            source={require('../images/common/back.png')}
          />
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  leftWrapContainer: {},
  leftGoBackIcon: {
    padding: 5,
    marginRight: 10,
  },
  leftImage: {
    width: 18,
    height: 18,
  },
});

export default GoBack;
export {GoBack};
