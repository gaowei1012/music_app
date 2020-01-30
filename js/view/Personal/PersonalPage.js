/*
 * @Author: your name
 * @Date: 2020-01-17 14:37:35
 * @LastEditTime : 2020-01-28 21:25:49
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /music_app/js/view/view/Personal/PersonalPage.js
 */
import * as React from 'react'
import {connect} from 'react-redux'
import actions from '../../redux/actions'
import {View,Text,StyleSheet,SafeAreaView} from 'react-native'
import {flex,defaultBackgroundColor} from '../../styles/constants'
import UserInfo from './UserInfo'

class PersonalPage extends React.Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <UserInfo/>
      </SafeAreaView>
    )
  }
}

const mapStateToProps = state => ({})
const mapDispatchToProps = dispatch => ({})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PersonalPage)

const styles = StyleSheet.create({
  container: {
    flex: flex,
    backgroundColor: defaultBackgroundColor,
  }
})