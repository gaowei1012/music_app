import * as React from 'react';
import {connect} from 'react-redux';
import {flex, row, center} from '../../styles/constants';
import TopNavigationBar from '../../common/TopNavigationBar';
import actions from '../../redux/actions/index';
import {topMv} from '../../expand/api';
import {px2dp} from '../../utils/px2dp';
import {
  StyleSheet,
  View,
  Image,
  Text,
  SafeAreaView,
  ScrollView,
} from 'react-native';

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
  render() {
    const mv = this.props.mv.item;
    console.log('mv 排行榜', mv);
    return (
      <SafeAreaView style={styles.container}>
        {this._renderTopBar()}
        <ScrollView>
          <View style={{marginBottom: px2dp(10)}}>
            <View style={styles.videoBox}>
              <Text>hh</Text>
            </View>
            <View style={styles.videoBtnBox}>
              <Text>gg</Text>
            </View>
          </View>
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

export default connect(mapStateToProps, mapDispatchToProps)(VideoPage);

const styles = StyleSheet.create({
  container: {
    flex: flex,
  },
  videoBox: {
    width: px2dp(345),
    height: px2dp(160),
    backgroundColor: '#eee',
    alignSelf: center,
    borderTopLeftRadius: px2dp(10),
    borderTopRightRadius: px2dp(10),
  },
  videoBtnBox: {
    width: px2dp(345),
    height: px2dp(40),
    backgroundColor: 'red',
    alignSelf: center,
  },
});
