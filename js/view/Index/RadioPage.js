'use strict';

import * as React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Image,
  TouchableOpacity,
  Animated,
  Alert,
  FlatList,
  RefreshControl,
} from 'react-native';
import {flex, center, row} from '../../styles/constants';
import {screentWidth} from '../../utils/screenUtil';
import {connect} from 'react-redux';
import actions from '../../redux/actions/index';
import {radio} from '../../expand/api';
import TopNavigationBar from '../../common/TopNavigationBar';
import {GoBack} from '../../utils/GoBack';
import {px2dp} from '../../utils/px2dp';

const THEME_COLOR = 'red';

class RaioPage extends React.Component {
  componentDidMount() {
    this.getData();
  }
  /**
   * 获取数据
   */
  getData = () => {
    const {onLoadRadioData} = this.props;
    onLoadRadioData(radio);
  };
  /**
   * 跳转对应页
   */
  goToRadioDetail = () => {
    Alert.alert('hhh');
  };
  /**
   * 渲染头部
   */
  _renderTopBar = () => {
    let statusbar = {
      backgroundColor: '#ffffff',
      barStyle: 'dark-content',
    };
    const title = this.props.navigation.state.params.title;
    return (
      <TopNavigationBar
        title={title}
        statusBar={statusbar}
        style={{backgroundColor: '#ffffff'}}
        leftButton={GoBack(this.props, 'dark')}
      />
    );
  };
  /**
   * 渲染列表
   */
  _renderItem = data => {
    const item = data.item;
    return (
      <TouchableOpacity
        onPress={this.goToRadioDetail}
        style={styles.raioBox}
        key={item.id}>
        <Animated.View style={styles.imageBox}>
          <Image source={{uri: item.picUrl}} style={styles.image} />
        </Animated.View>
        <View>
          <Text style={styles.text} numberOfLines={1}>
            {item.name}
          </Text>
        </View>
      </TouchableOpacity>
    );
  };
  render() {
    const radio = this.props.radio.item;
    console.log('radio', radio);
    const isLoading = this.props.radio.isLoading;
    if (!radio) {
      return <Text style={{justifyContent: center}}>加载中...</Text>;
    }
    return (
      <SafeAreaView style={styles.container}>
        {this._renderTopBar()}
        <FlatList
          data={radio}
          renderItem={data => this._renderItem(data)}
          keyExtractor={item => '' + item.id}
          refreshControl={
            <RefreshControl
              tintColor={THEME_COLOR}
              colors={THEME_COLOR}
              refreshing={isLoading}
              onRefresh={this.getData()}
            />
          }
        />
      </SafeAreaView>
    );
  }
}

const mapStateToProps = state => ({
  radio: state.radio,
});

const mapDispatchToProps = dispatch => ({
  onLoadRadioData: url => dispatch(actions.onLoadRadioData(url)),
});

export default connect(mapStateToProps, mapDispatchToProps)(RaioPage);

const styles = StyleSheet.create({
  container: {
    flex: flex,
  },
  raioBox: {
    flexDirection: row,
    width: px2dp(345),
    height: px2dp(80),
    backgroundColor: '#eee',
    alignItems: center,
    marginBottom: px2dp(2),
    alignSelf: center,
    paddingLeft: px2dp(4),
  },
  imageBox: {
    width: px2dp(60),
    height: px2dp(60),
    overflow: 'hidden',
    borderRadius: px2dp(6),
  },
  image: {
    width: px2dp(60),
    height: px2dp(60),
  },
  text: {
    width: px2dp(200),
  },
});
