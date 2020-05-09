import * as React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
} from 'react-native';
import {
  flex,
  backgroundColor,
  center,
  row,
  fontColor,
  defaultFontSize,
  iosFontFmily,
  defaultBackgroundColor,
} from '../../styles/constants';
import {Input, Button} from 'react-native-elements';
import {connect} from 'react-redux';
import actions from '../../redux/actions/index';
import {login} from '../../expand/api';
import AsyncStorage from '@react-native-community/async-storage';
import NavigationUtil from '../../utils/NavigationUtil';
import {px2dp} from '../../utils/px2dp';

class LoginPage extends React.Component {
  state = {
    count: 60,
    liked: true,
    isLoading: false,
    isWXInstalled: '',
    code: 0, // 验证码
    phone: 0, // 手机号
  };
  // 验证码
  countDown() {
    const {count} = this.state;
    if (count === 1) {
      this.setState({
        count: 60,
        liked: true,
      });
    } else {
      this.setState({
        count: count - 1,
        liked: false,
      });
      setTimeout(this.countDown.bind(this), 1000);
    }
  }

  getData() {
    const {onLoginData} = this.props;
    const phone = '13666683140';
    const password = 'qq12345..**';
    const url = `${login}?phone=${phone}&password=${password}`;
    onLoginData(url);
    const item = this.props.login.item;
    console.log('login--item:', item);
    console.log('login---token:', item.token);
    if (!item) return;
    // 保存token
    AsyncStorage.setItem('token', item.token, err => {
      if (err) err;

      // 登录成功后跳转
      setTimeout(() => {
        // 带参跳转页面
        NavigationUtil.goPage(
          {
            item,
          },
          'PersonalPage',
        );
      }, 1000);
    });
  }
  // 发送验证码
  getCode = () => {
    this.countDown();
  };
  handleSubmit = () => {
    this.getData();
  };
  handleKeyPress = () => {};
  handleCodePress = () => {};
  renderTopTitle() {
    // const {liked, count} = this.state;
    return (
      <View style={styles.titleBox}>
        <Text style={styles.topTitle}>登录</Text>
        <View style={styles.textInputBox}>
          <View style={styles.phoneBox}>
            <Input placeholder="手机号" ref="phone" />
          </View>
          <View style={styles.codeBox}>
            <Input ref="code" placeholder="密码" />
            {/* <TouchableOpacity onPress={this.getCode} style={styles.codeNumBox}>
              <Text style={styles.textInput}>
                {liked ? '获取验证码' : `${count} 秒后重发`}
              </Text>
            </TouchableOpacity> */}
          </View>
        </View>
        <Button
          title="登录"
          onPress={this.handleSubmit}
          buttonStyle={styles.submitBox}
        />
      </View>
    );
  }
  render() {
    return (
      <SafeAreaView style={styles.container}>
        {this.renderTopTitle()}
      </SafeAreaView>
    );
  }
}

const mapStateToProps = state => ({
  login: state.login,
  follow: state.follow,
});

const mapDiaptchToProps = dispacth => ({
  onLoginData: url => dispacth(actions.onLoginData(url)),
  onFollowsData: url => dispacth(actions.onFollowsData(url)),
});

export default connect(
  mapStateToProps,
  mapDiaptchToProps,
)(LoginPage);

const styles = StyleSheet.create({
  container: {
    flex: flex,
    backgroundColor: '#DA3A2F',
  },
  titleBox: {
    marginTop: px2dp(20),
  },
  topTitle: {
    alignSelf: center,
    fontFamily: iosFontFmily,
    fontSize: 18,
    color: fontColor,
    fontWeight: '600',
  },
  textInputBox: {
    marginTop: px2dp(50),
    alignSelf: center,
    width: px2dp(345),
    height: px2dp(140),
  },
  phoneBox: {
    height: px2dp(60),
    marginTop: px2dp(20),
    color: '#fff',
  },
  codeBox: {
    color: '#fff',
  },
  codeNumBox: {
    position: 'absolute',
    top: px2dp(0),
    right: px2dp(10),
    width: px2dp(96),
    height: px2dp(30),
    alignItems: center,
    justifyContent: center,
    borderRadius: px2dp(20),
    borderWidth: px2dp(1),
    borderStyle: 'solid',
    borderColor: '#d5d5d5d5',
  },
  textInput: {
    fontSize: defaultFontSize,
    color: fontColor,
  },
  submitBox: {
    marginTop: px2dp(30),
    alignSelf: center,
    width: px2dp(345),
    height: px2dp(42),
    alignItems: center,
    justifyContent: center,
    borderRadius: px2dp(10),
  },
});
