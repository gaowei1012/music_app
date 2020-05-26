import React from 'react'
import {px2dp} from '../../utils/px2dp'
import Slider from '@react-native-community/slider'
import {SafeAreaView,View,Text,StyleSheet,TouchableOpacity,Image} from 'react-native'

export default class Player extends React.PureComponent {

    state = {
        iconItem: [
            {id: 1, icon: require('../../images/player/like.png')},
            {id: 2, icon: require('../../images/player/dowload.png')},
            {id: 3, icon: require('../../images/player/sing.png')},
            {id: 4, icon: require('../../images/player/comment.png')},
            {id: 5, icon: require('../../images/player/more.png')},
        ],
        iconFotter: [
            {id: 11, icon: require('../../images/player/cycle.png')},
            {id: 22, icon: require('../../images/player/prev.png')},
            {id: 33, icon: require('../../images/player/player.png')},
            {id: 44, icon: require('../../images/player/next.png')},
            {id: 55, icon: require('../../images/player/moreIocn.png')}
        ]
    }

    componentDidMount() {
        // song/url?id=33894312
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
                    <TouchableOpacity style={styles.imgBox} activeOpacity={0.8} key={item.id}>
                        <Image style={{width: '100%', height: '100%'}} source={item.icon} />
                    </TouchableOpacity>
                ))}
            </View>
        );
        // 进度条
        const playerSilder = (
            <View style={styles.playerSilderBox}>
                <Text style={styles.playerStart}>00:00</Text>
                <Slider 
                    style={{width: px2dp(240)}}
                    maximumTrackTintColor={'#d5d5d5'}
                />
                <Text style={styles.playerEnd}>04:30</Text>
            </View>
        );
        // 底部播放
        const playerFotter = (
            <View style={styles.playerFooterBox}>
                {iconFotter && iconFotter.map(item => (
                    <TouchableOpacity key={item.id} style={styles.fotterImgBox}>
                        <Image style={{width: '100%', height: '100%'}} source={item.icon}/>
                    </TouchableOpacity>
                ))}
            </View>
        );
        return (
            <SafeAreaView style={styles.container}>
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
        height: px2dp(30)
    }
})