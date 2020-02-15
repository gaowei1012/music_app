'use strict'
import * as React from 'react'
import UserInfo from './UserInfo'
import {connect} from 'react-redux'
import actions from '../../redux/actions'
import {View,Text,ScrollView,StyleSheet,SafeAreaView,TouchableOpacity} from 'react-native'
import {flex,row,defaultBackgroundColor, center, iosFontFmily} from '../../styles/constants'
import PersonalItem from './components/PersonlItem'
import {screentWidth} from '../../utils/screenUtil'

class PersonalPage extends React.Component {
  async componentDidMount() {}
  handleExit=()=> {

  }
  // 退出
  _exit() {
    return (
      <TouchableOpacity onPress={this.handleExit} activeOpacity={0.8} style={styles.exitBox}>
        <Text style={styles.exitText}>退出登录</Text>
      </TouchableOpacity>
    )
  }
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <ScrollView>
          <UserInfo/>
          <PersonalItem/>
          {this._exit()}
        </ScrollView>
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
  },
  exitBox: {
    marginTop: 30,
    width: screentWidth,
    flexDirection: row,
    justifyContent: center,
  },
  exitText: {
    fontFamily: iosFontFmily,
    fontSize: 20,
    color: 'red',
  }
})