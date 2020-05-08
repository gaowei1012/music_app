import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Video from 'react-native-video';
import {mvUrl} from '../../expand/api';
import {connect} from 'react-redux';
import actions from '../../redux/actions';
import {screentWidth, screentHeight} from '../../utils/screenUtil';
import { px2dp } from '../../utils/px2dp';

class VideoPalyer extends React.PureComponent {
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
        const {onLoadMvUrl} = this.props;
        const id = this.props.navigation.state.params.id;
        const url = `${mvUrl}?id=${id}`;
        onLoadMvUrl(url);
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
        const videoUrl = this.props.mvUrl.item;
        if (!videoUrl) return 
        const url = videoUrl.url;
        const {rate, muted, resizeMode} = this.state;
        return (
            <View style={{backgroundColor: 'rgb(0, 0, 0)'}}>
                <Video
                    style={{width: screentWidth, height: screentHeight}}
                    source={{uri: url}}
                    rate={rate}
                    muted={muted}
                    resizeMode={resizeMode}
                    onLoad={this.onLoad}
                    onEnd={this.onEnd}
                    onAudioBecomingNoisy={this.onAudioBecomingNoisy}
                    onAudioFocusChanged={this.onAudioFocusChanged}
                    repeat={false}
                />
            </View>
        )
    }
}

const mapStateToProps = state => ({
    mvUrl: state.mvUrl
})

const mapDispatchToProps = dispatch => ({
    onLoadMvUrl: url => dispatch(actions.onLoadMvUrl(url))
})

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(VideoPalyer)

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})