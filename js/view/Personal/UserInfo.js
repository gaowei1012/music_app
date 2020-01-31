
'use strict'

import * as React from 'react'
import {View,Text,StyleSheet,TouchableOpacity,Image,Alert} from 'react-native'
import actions from '../../redux/actions/index'
import {screentHeight,screentWidth} from '../../utils/screenUtil'
import NavigationUtil from '../../utils/NavigationUtil'
import {connect} from 'react-redux'
import {
  row,
  flex,
  defaultFontSize,
  iosFontFmily,
  fontColor,
  center,
  defaultBackgroundColor,
  spaceBetween,
  spaceAround,
  fontSmallSize,
} from '../../styles/constants'
import {
  dailySignin
} from '../../expand/api'


class UserInfo extends React.Component {
  state = {
    avatar_url: 'https://iph.href.lu/60x60',
    username: '执念',
    user_menu: [
      {id:1, title: '我的信息', icon: require('../../images/personal/message.png'), com: 'PersonalInformation'},
      {id:2, title: '我的好友', icon: require('../../images/personal/home.png'), com: 'MyFriend'},
      {id:3, title: '个人主页', icon: require('../../images/personal/hor.png'), com: 'MyPersoanl'},
      {id:4, title: '个性装扮', icon: require('../../images/personal/personalized.png'), com: 'DressedUp'},
    ],
  }
  // 跳转
  handleUserInfo=()=>{
    NavigationUtil.goPage({
      title: '登录页'
    }, 'LoginPage')
  }
  goToPage=(item, title)=> {
    NavigationUtil.goPage({
      title: title
    }, item)
  }
  // 签到
  handeSignin=()=> {
    console.log('签到')
  }
  /* 顶部用户信息栏 */
  renderUserInfoTab(){
    const {user_menu} = this.state
    return <View style={styles.topUserInfoBox}>
          {/* userinfo 头部 */}
          <View style={styles.userTopBox}>
            <View style={styles.avatarBox}>
              <TouchableOpacity
                onPress={this.handleUserInfo}
                style={styles.avatarImageBox}
                activeOpacity={1}
              >
                <Image style={styles.image} source={{uri: this.state.avatar_url}}/>
              </TouchableOpacity>
              <View style={styles.usernameBox}>
                <Text>{this.state.username}</Text>
              </View>
            </View>
            <TouchableOpacity
              onPress={this.handeSignin}
              style={styles.signBox}
              activeOpacity={1}
              >
              <Text style={styles.signText}>签到</Text>
            </TouchableOpacity>
          </View>
          {/* 菜单 */}
          <View style={styles.userMenuBox}>
            {user_menu.map(item=> (
              <TouchableOpacity
                onPress={() => this.goToPage(item.com, item.title)}
                key={item.id}
                style={styles.menuInfo}>
                <Image style={styles.menuImage} source={item.icon}/>
                <Text style={styles.menuText}>{item.title}</Text>
              </TouchableOpacity>
            ))}
          </View>
      </View>
  }
  render() {
    return (
      <View style={styles.container}>
        {this.renderUserInfoTab()}
      </View>
    )
  }
}

const mapStateToProps = state => ({})

const mapDispatchToProps = dispatch => ({})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserInfo)

const styles = StyleSheet.create({
  container: {
    flex: flex,
    backgroundColor: defaultBackgroundColor,
  },
  topUserInfoBox: {
    marginTop: 20,
    width: 345,
    backgroundColor: '#eee',
    height: 120,
    alignSelf: center,
    borderRadius: 10,
  },
  userTopBox: {
    height: 60,
    width: 345,
    borderBottomColor: '#ddd',
    borderStyle: 'solid',
    borderBottomWidth: 0.5,
    flexDirection: row,
    justifyContent: spaceBetween,
  },
  avatarBox: {
    flexDirection: row,
    marginLeft: 10,
    marginTop: 5
  },
  avatarImageBox: {
    width: 48,
    height: 48,
    overflow: 'hidden',
    borderRadius: 25,
  },
  image: {
    width: 50,
    height: 50,
  },
  usernameBox: {
    justifyContent: center,
    marginLeft: 10,
  },
  text: {
    fontSize: defaultFontSize,
    fontFamily: iosFontFmily,
    color: fontColor,
  },
  signBox: {
    marginRight: 10,
    height: 30,
    alignItems: center,
    alignSelf: center,
    justifyContent: center,
    width: 60,
    borderRadius: 15,
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: '#d5d5d5d5',
  },
  signText: {
    fontFamily: iosFontFmily,
    color: fontColor,
    fontSize: defaultFontSize,
  },
  userMenuBox: {
    // backgroundColor: 'red',
    flexDirection: row,
    justifyContent: spaceAround,
    marginTop: 6,
  },
  menuInfo: {
    
  },
  menuImage: {
    width: 24,
    height: 24,
    alignSelf: center,
    marginBottom: 6,
  },
  menuText: {
    fontFamily: iosFontFmily,
    color: fontColor,
    fontSize: fontSmallSize,
  }
})