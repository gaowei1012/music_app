import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Video from 'react-native-video';

export default class VideoPalyer extends React.PureComponent {
    state = {
        rate: 1,
        volume: 1,
        muted: false,
        resizeMode: 'contain',
        duration: 0.0,
        currentTime: 0.0,
        paused: true,
    }
    componentDidMount() {
        
    }

    // onLoad 
  onLoad = () => {

  }

  // onProgress
  onProgress = () => {}

  // onEnd
  onEnd  = () => {}

  //onAudioBecomingNoisy
  onAudioBecomingNoisy = () => {}

  // onAudioFocusChanged 
  onAudioFocusChanged = () => {}

    render() {
        return (
            <View>
                <Text>video palyer</Text>
                {/* <Video
                    ref={(ref: Video) => { //方法对引用Video元素的ref引用进行操作
                      this.video = ref
                    }}
                    source={null}
                    style={styles.videoPlayer}
                    rate={rate}//播放速率
                    paused={paused}//暂停
                    volume={volume}//调节音量
                    muted={muted}//控制音频是否静音
                    resizeMode={resizeMode}//缩放模式
                    onLoad={this.onLoad}//加载媒体并准备播放时调用的回调函数。
                    onProgress={this.onProgress}//视频播放过程中每个间隔进度单位调用的回调函数
                    onEnd={this.onEnd}//视频播放结束时的回调函数
                    onAudioBecomingNoisy={this.onAudioBecomingNoisy}//音频变得嘈杂时的回调 - 应暂停视频
                    onAudioFocusChanged={this.onAudioFocusChanged}//音频焦点丢失时的回调 - 如果焦点丢失则暂停
                    repeat={false}//确定在到达结尾时是否重复播放视频。
                  /> */}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})