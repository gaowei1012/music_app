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
    let token = this.props.login.item.token;
    console.log('uid', this.props.login.item);
    // 保存token
    AsyncStorage.setItem('token', token, err => {
      if (err) err;
      // 登录成功后跳转
      setTimeout(() => {
        NavigationUtil.goPage({}, 'PersonalPage');
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

export default connect(mapStateToProps, mapDiaptchToProps)(LoginPage);

const styles = StyleSheet.create({
  container: {
    flex: flex,
    backgroundColor: backgroundColor,
  },
  titleBox: {
    marginTop: 20,
  },
  topTitle: {
    alignSelf: center,
    fontFamily: iosFontFmily,
    fontSize: 18,
    color: fontColor,
    fontWeight: '600',
  },
  textInputBox: {
    marginTop: 10,
    alignSelf: center,
    width: 345,
    height: 140,
  },
  phoneBox: {
    height: 60,
    marginTop: 20,
  },
  codeNumBox: {
    position: 'absolute',
    top: 0,
    right: 10,
    width: 96,
    height: 30,
    alignItems: center,
    justifyContent: center,
    borderRadius: 20,
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: '#d5d5d5d5',
  },
  textInput: {
    fontSize: defaultFontSize,
    color: fontColor,
  },
  submitBox: {
    marginTop: 30,
    alignSelf: center,
    width: 345,
    height: 42,
    alignItems: center,
    justifyContent: center,
    borderRadius: 10,
  },
});
