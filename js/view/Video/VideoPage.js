import * as React from 'react';
import { StyleSheet, View, Image, Text, SafeAreaView, ScrollView, TouchableOpacity} from 'react-native';
import {SceneMap, TabView} from 'react-native-tab-view';
import {connect} from 'react-redux';
import TopNavigationBar from '../../common/TopNavigationBar';
import actions from '../../redux/actions/index';
import {topMv} from '../../expand/api';
import {px2dp} from '../../utils/px2dp';
import {screentWidth} from '../../utils/screenUtil';
import NavigationUtil from '../../utils/NavigationUtil';
import Video from 'react-native-video';

const initRoutres = [
  { key: 'first', title: 'First' },
  { key: 'second', title: 'Second' },
]

class VideoPage extends React.Component {
  state = {
    title: '视频',
  };
  componentDidMount() {
    this.getData();
  }
  getData = () => {
    const {onLoadMv} = this.props;
    const url = topMv + '港台';
    onLoadMv(url);
  };
  _renderTopBar = () => {
    const statusbar = {
      backgroundColor: '#ffffff',
      barStyle: 'dark-content',
    };
    return (
      <TopNavigationBar
        title={this.state.title}
        statusBar={statusbar}
        style={{backgroundColor: '#ffffff'}}
      />
    );
  };
  handleIndexChange=()=> {
    this.setState({
      index: 2,
    })
  }
  _renderHeader=()=> {
    const initialLayout = {width: screentWidth};
    const {index, routes} = this.state;
    return <TabView
      style={styles.tabBox}
      initialLayout={initialLayout}
      renderScene={SceneMap({
        first: FirstRoute,
        second: SecondRoute,
      })}
      onIndexChange={this.handleIndexChange}
      navigationState={{index, routes}}
      // springConfig={}
    />
  }
  // go to player
  goToPlayer = id => {
    NavigationUtil.goPage({id}, 'VideoPalyer')
  }

  _renderVideoContent=()=> {
    const mv = this.props.mv.item;
    const {rate, paused, volume, muted, resizeMode} = this.state;
    if (!mv) return;
    console.log('mv-----', mv)
    return (
      <>
        {mv && mv.map(item => {
          return <TouchableOpacity activeOpacity={0.8} onPress={() => this.goToPlayer(item.id)} key={item.id} style={{marginBottom: px2dp(10)}}>
                <View style={styles.videoBox}>
                  <Image style={{width: '100%', height: '100%'}} source={{uri: item.cover}}/>
                  <View style={styles.paleryBox}>
                    <Image style={{width: px2dp(30), height: px2dp(30)}} source={require('../../images/common/player.png')}/>
                  </View>
                </View>
                <View style={styles.videoBtnBox}>
                  <Text style={{marginRight: px2dp(4), fontSize: 16}}>{item.name}</Text>
                  <Text>-</Text>
                  <Text style={{marginLeft: px2dp(4), fontSize: 12,}}>{item.artistName}</Text>
                </View>
          </TouchableOpacity>
        })}
      </>
      
    )
  }
  render() {
    return (
      <SafeAreaView style={styles.container}>
        {this._renderTopBar()}
        {/* {this._renderHeader()} */}
        <ScrollView>
          {this._renderVideoContent()}
        </ScrollView>
      </SafeAreaView>
    );
  }
}

const mapStateToProps = state => ({
  mv: state.mv,
  mvDetail: state.mvDetail,
});

const mapDispatchToProps = dispatch => ({
  onLoadMv: url => dispatch(actions.onLoadMv(url)),
  onLoadMvDetail: url => dispatch(actions.onLoadMvDetail(url)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(VideoPage);

const FirstRoute = () => (
  <View style={[styles.scene, { backgroundColor: '#ff4081' }]} />
);

const SecondRoute = () => (
  <View style={[styles.scene, { backgroundColor: '#673ab7' }]} />
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  videoBox: {
    width: px2dp(345),
    height: px2dp(160),
    backgroundColor: '#eee',
    alignSelf: 'center',
    borderTopLeftRadius: px2dp(6),
    borderTopRightRadius: px2dp(6),
    overflow: 'hidden'
  },
  videoBtnBox: {
    width: px2dp(345),
    height: px2dp(40),
    paddingLeft: px2dp(3),
    paddingTop: px2dp(6),
    alignSelf: 'center',
    backgroundColor: '#eee',
    flexDirection: 'row',
    alignItems: 'center'
  },
  tabBox: {
    width: screentWidth,
    height: px2dp(40)
  },
  videoPlayer: {

  },
  paleryBox: {
    position: 'absolute',
    left: '50%',
    top: '45%'
  }
});
