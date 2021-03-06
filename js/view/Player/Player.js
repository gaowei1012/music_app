import React from 'react'
import {px2dp} from '../../utils/px2dp'
import Slider from '@react-native-community/slider'
import Video from 'react-native-video'
import {SafeAreaView,View,Text,StyleSheet,TouchableOpacity,Image} from 'react-native'
import {GoBack} from '../../utils/GoBack'

export default class Player extends React.PureComponent {
    constructor(props) {
        super(props)
        this.state = {
            iconItem: [
                {id: 1, icon: require('../../images/player/like.png')},
                {id: 2, icon: require('../../images/player/dowload.png')},
                {id: 3, icon: require('../../images/player/sing.png')},
                {id: 4, icon: require('../../images/player/comment.png')},
                {id: 5, icon: require('../../images/player/more.png')},
            ],
            iconFotter: [
                {id: 11, icon: require('../../images/player/cycle.png'), className: 'icon'},
                {id: 22, icon: require('../../images/player/prev.png'), className: 'icon'},
                {id: 33, icon: require('../../images/player/player.png'), className: 'icon'},
                {id: 44, icon: require('../../images/player/next.png'), className: 'icon'},
                {id: 55, icon: require('../../images/player/moreIocn.png'), className: 'icon'}
            ],
            url: 'http://m8.music.126.net/20200528094608/8aed0cf62a533d298f057f130d6c87e5/ymusic/0fd6/4f65/43ed/a8772889f38dfcb91c04da915b301617.mp3',
            rate: 1,
            muted: false,
            resizeMode: 'contain',
            duration: 0.0, // 总时长
            currentTime: 0.0, // 当前播放时长
            silderValue: 0, // 当前进度条长度
            paused: true, // 播放暂停
            isFullScreen: false,

        }
    }

    componentDidMount() {
        // song/url?id=33894312
    }

    // 格式化时间
    formatMediaTime(time) {
        let minute = Math.floor(time / 60);
        let second = parseInt(time - minute * 60);
        minute = minute >= 10 ? minute : "0" + minute;
        second = second >= 10 ? second : "0" + second;
        return minute + ":" + second;
    }

    // 获取当前播放时间
    customerOnprogress(e) {
        let time = e.currentTime;
        this.setState({
          currentTime: time,
          sliderValue: time,
        })
      };

    // 处理总时长 并进行格式化
    customerOnload(e) {
        let time = e.duration;
        this.setState({
            duration: time
        })
    }

    // 改变滑块 改变音乐播放进度
    customerSliderValue(value) {
        this.player.seek(value)
      };

    _player=()=> {
        return <Video
            ref={(ref) => {
                this.player = ref
            }}
            source={{uri: this.state.url}}
            rate={this.state.rate}
            muted={this.state.muted}
            resizeMode={this.state.resizeMode}
            onLoad={(e) => this.customerOnload(e)}
            onProgress={(e) => this.customerOnprogress(e)}
            repeat={false}
        />
    }

    render() {
        const {iconItem, iconFotter} = this.state
        const picUrl = 'http://p1.music.126.net/7NRQ7KW3KEGylhIs8kArZg==/109951163940478780.jpg'
        /**
         * 动画:
         *   播放图片， 顺时针旋转
         */
        const playerAndmin = (
            <View style={styles.playerAndminWrap}>
                <View style={styles.playerAndminBox}>
                    <View style={styles.playerAndminBorder}>
                        {/* <Text>播放</Text> */}
                        <Image style={styles.playerAndminImageBox} source={{uri: picUrl}}/>
                    </View>
                </View>
            </View>
        );
        // 播放喜欢列表
        const likeMeunItem = (
            <View style={styles.likeItemBox}>
                {iconItem && iconItem.map(item => (
                    <TouchableOpacity style={styles.imgBox} activeOpacity={1} key={item.id}>
                        <Image style={{width: '100%', height: '100%'}} source={item.icon} />
                    </TouchableOpacity>
                ))}
            </View>
        );
        // 进度条
        const playerSilder = (
            <View style={styles.playerSilderBox}>
                <Text style={styles.playerStart}>{this.formatMediaTime(this.state.currentTime)}</Text>
                <Slider 
                    style={{width: px2dp(240)}}
                    maximumTrackTintColor={'#d5d5d5'}
                    value={this.state.silderValue}
                    maximumValue={this.state.duration}
                    thumbTintColor='#fff'
                    //thumbImage={require('../../images/player/player.png')}
                    step={1}
                    onValueChange={() => {
                        this.customerSliderValue
                    }}
                />
                <Text style={styles.playerEnd}>{this.formatMediaTime(this.state.duration)}</Text>
            </View>
        );
        // 底部播放
        const playerFotter = (
            <View style={styles.playerFooterBox}>
                {iconFotter && iconFotter.map(item => (
                    <TouchableOpacity activeOpacity={.9} key={item.id} style={styles.fotterImgBox}>
                        {
                            item.className == 'icon' ? 
                                <Image style={{width: px2dp(30), height: px2dp(30)}} source={item.icon}/> 
                                :
                                <Image style={{width: px2dp(50), height: px2dp(50)}} source={item.icon}/>
                        }
                    </TouchableOpacity>
                ))}
            </View>
        );
        return (
            <SafeAreaView style={styles.container}>
                {this._player()}
                {playerAndmin}
                {likeMeunItem}
                {playerSilder}
                {playerFotter}
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#5A5464',
    },
    // 音乐播放
    playerAndminWrap: {
        marginTop: px2dp(130),
        alignItems: 'center',
    },
    playerAndminBox: {
        width: px2dp(320),
        height: px2dp(320),
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: px2dp(320/2),
        // borderWidth: px2dp(1),
        backgroundColor: '#606373'
    },
    playerAndminBorder: {
        width: px2dp(320 - 46),
        height: px2dp(320 - 46),
        borderRadius: px2dp(320/2),
        // borderWidth: px2dp(1),
        alignItems: 'center',
        borderColor: '#ddd',
        backgroundColor: '#5A5464'
    },
    playerAndminImageBox: {
        width: '100%',
        height: '100%',
        borderRadius: px2dp(274/2)
    },
    // 播放icon菜单
    likeItemBox: {
        marginTop: px2dp(100),
        width: px2dp(316),
        flexDirection: 'row',
        alignSelf: 'center',
        justifyContent: 'space-between'
    },
    imgBox: {
        width: px2dp(30),
        height: px2dp(30)
    },
    // 进度条
    playerSilderBox: {
        marginTop: px2dp(40),
        width: px2dp(320),
        flexDirection: 'row',
        alignItems: 'center',
        alignSelf: 'center',
        justifyContent: 'space-between',
    },
    playerStart: {
        color: '#d5d5d5'
    },
    playerEnd: {
        color: '#d5d5d5'
    },
    // 底部播放区域
    playerFooterBox: {
        width: px2dp(320),
        marginTop: px2dp(40),
        flexDirection: 'row',
        alignSelf: 'center',
        justifyContent: 'space-between'
    },
    fotterImgBox: {
        width: px2dp(30),
        height: px2dp(60),
    }
})