import * as React from 'react';
import {
  View,
  Text,
  Image,
  SafeAreaView,
  StyleSheet,
  Animated,
  ScrollView,
  FlatList,
  RefreshControl,
} from 'react-native';
import {
  flex,
  row,
  center,
  defaultBackgroundColor,
} from '../../styles/constants';
import TopNavigationBar from '../../common/TopNavigationBar';
import {connect} from 'react-redux';
import actions from '../../redux/actions/index';
import {personalized} from '../../expand/api';
import {px2dp} from '../../utils/px2dp';
import {GoBack} from '../../utils/GoBack';

const THEME_COLOR = 'red';

class SingerPage extends React.Component {
  state = {
    loading: false,
    title: null,
  };
  componentDidMount() {
    this.getPeraonaliz();
    this.getRouterParams();
    this.animated();
  }
  /**
   * 获取数据
   */
  getPeraonaliz = () => {
    const {onLoadPersonalizData} = this.props;
    onLoadPersonalizData(personalized);
  };
  /**
   * 获取上级传参
   */
  getRouterParams = () => {
    const title = this.props.navigation.state.params.title;
    this.setState({title});
  };
  /**
   * 渲染动画
   */
  animated = () => {};
  /**
   * 渲染头部
   */
  _renderTopBar = () => {
    const statusbar = {
      backgroundColor: '#ffffff',
      barStyle: 'dark-content',
    };
    const {title} = this.state;
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
   * 渲染组件item
   */
  _renderItem = data => {
    const item = data.item;
    return (
      <Animated.View style={styles.personalBox}>
        <View style={styles.imageBox}>
          <Image style={styles.image} source={{uri: item.picUrl}} />
        </View>
        <Text numberOfLines={1} style={styles.name}>
          {item.name}
        </Text>
      </Animated.View>
    );
  };
  render() {
    const personaliz = this.props.personaliz.item;
    return (
      <SafeAreaView style={styles.container}>
        {this._renderTopBar()}
        <FlatList
          data={personaliz}
          horizontal={false}
          renderItem={data => this._renderItem(data)}
          keyExtractor={item => '' + item.id}
          refreshControl={
            <RefreshControl
              title={'loading'}
              tintColor={THEME_COLOR}
              colors={THEME_COLOR}
              refreshin={this.state.loading}
              onRefresh={this.getPeraonaliz()}
            />
          }
        />
      </SafeAreaView>
    );
  }
}

const mapStateToProps = state => ({
  personaliz: state.personaliz,
});

const mapDispatchToProps = dispatch => ({
  onLoadPersonalizData: url => dispatch(actions.onLoadPersonalizData(url)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SingerPage);

const styles = StyleSheet.create({
  container: {
    flex: flex,
  },
  personalBox: {
    width: px2dp(345),
    height: px2dp(60),
    alignSelf: center,
    marginTop: px2dp(4),
    backgroundColor: defaultBackgroundColor,
    marginBottom: px2dp(2),
    flexDirection: row,
    alignItems: center,
    borderRadius: px2dp(6),
  },
  imageBox: {
    width: px2dp(60),
    height: px2dp(60),
    borderRadius: px2dp(6),
    overflow: 'hidden',
  },
  image: {
    width: px2dp(60),
    height: px2dp(60),
  },
  name: {
    marginLeft: px2dp(10),
    width: px2dp(260),
  },
});
