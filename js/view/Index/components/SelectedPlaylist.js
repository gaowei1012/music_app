'use strict'

import * as React from 'react'
import {connect} from 'react-redux'
import {View,Text,StyleSheet,Image,ScrollView,TouchableOpacity} from 'react-native'
import {screentWidth} from '../../../utils/screenUtil'
import actions from '../../../redux/actions/index'
import NavigationUtil from '../../../utils/NavigationUtil'
import {topPlaylistHigh} from '../../../expand/api'
import {row,center,spaceBetween,iosFontFmily,fontColor,defaultFontSize,defaultFontColor,fontSmallSize} from '../../../styles/constants'
// 精选歌单
class SelectedPlaylist extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      playList: [
        {id: 1, uri: 'https://p1.music.126.net/L1u0ZX2IrCRspy1Q_mu3uw==/109951163783547378.jpg', com: 'SingerPage', text: '陈奕迅'},
        {id: 2, uri: 'https://p1.music.126.net/L1u0ZX2IrCRspy1Q_mu3uw==/109951163783547378.jpg', com: 'SingerPage', text: '王力宏'},
        {id: 3, uri: 'https://p1.music.126.net/L1u0ZX2IrCRspy1Q_mu3uw==/109951163783547378.jpg', com: 'SingerPage', text: '周琦'},
        {id: 4, uri: 'https://p1.music.126.net/L1u0ZX2IrCRspy1Q_mu3uw==/109951163783547378.jpg', com: 'SingerPage', text: '周倩倩'},
        {id: 5, uri: 'https://p1.music.126.net/L1u0ZX2IrCRspy1Q_mu3uw==/109951163783547378.jpg', com: 'SingerPage', text: '周倩倩'},
        {id: 6, uri: 'https://p1.music.126.net/L1u0ZX2IrCRspy1Q_mu3uw==/109951163783547378.jpg', com: 'SingerPage', text: '周倩倩'},
        {id: 7, uri: 'https://p1.music.126.net/L1u0ZX2IrCRspy1Q_mu3uw==/109951163783547378.jpg', com: 'SingerPage', text: '周倩倩'},
      ],
      play_list: [], // 渲染数据
    }
  }
  async componentDidMount() {
    this.getData()
  }
  getData() {
    let url = topPlaylistHigh + '?' + 'limit=10&order=new'
    //console.log('url----', url)
    const {onLoadTopPlayListHigh} = this.props
    onLoadTopPlayListHigh(url)
    let list = this.props.playHigh.item
    this.setState({
      play_list: list
    }, () => {
      console.log('----playHigh----', this.state.play_list)
    })
  }
  goToPage(com) {
    //NavigationUtil.goPage({title: 'more'}, com)
  }
  goToMorePage = () => {
    const list = this.props.playHigh.item
    NavigationUtil.goPage({list}, 'MorePlayPage')
  }
  renderItem() {
    const {play_list} = this.state
    return (
      <View style={{flexDirection: row, height: 130}}>
        <ScrollView
          horizontal={true}
          //alwaysBounceVertical={true}
          showsHorizontalScrollIndicator={false}
          >
          {play_list.map(item => {
            return <View key={item.id}>
              <TouchableOpacity
                onPress={() => this.goToPage(item.userId)}
                style={styles.itemBox}
                activeOpacity={0.8}
                >
                <Image
                  source={{uri: item.coverImgUrl}}
                  style={styles.playImage}
                  resizeMode='contain'
                />
                {/* 播放数量 */}
                <View style={styles.palyerNumBox}>
                  <Image source={require('../../../images/common/player.png')} style={{width: 10, height: 10}}/>
                  <Text>{item.trackCount}</Text>
                </View>
                {/* 播放icon */}
                <View style={styles.palyerBox}>
                  <Image
                    style={styles.palyerBtn}
                    source={require('../../../images/common/bofang.png')}
                  />
                </View>
              </TouchableOpacity>
              <Text style={styles.itemText} numberOfLines={1}>{item.name}</Text>
            </View>
          })}
        </ScrollView>
      </View>
    )
  }
  render() {
    return (
      <View style={styles.conatainer}>
        <View style={styles.topBox}>
          <Text style={styles.topTitle}>精选歌单</Text>
          <TouchableOpacity
            style={styles.moreBox}
            onPress={this.goToMorePage}
            activeOpacity={0.8}
          >
            <Text style={styles.topMore}>更多</Text>
            <Image style={styles.arrow} source={require('../../../images/common/arrow.png')}/>
          </TouchableOpacity>
        </View>
        {this.renderItem()}
      </View>
    )
  }
}

const mapStateToProps = state => ({
  playHigh: state.playHigh,
})

const mapDispatchToProps = dispatch => ({
  onLoadTopPlayListHigh: url => dispatch(actions.onLoadTopPlayListHigh(url))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SelectedPlaylist)

const styles = StyleSheet.create({
  conatainer: {
    marginTop: 20,
    width: screentWidth,
    backgroundColor: '#eee',
    height: 170,
  },
  topBox: {
    flexDirection: row,
    justifyContent: spaceBetween,
    padding: 6,
  },
  topTitle: {
    fontFamily: iosFontFmily,
    color: fontColor,
    fontSize: 16,
  },
  moreBox: {
    flexDirection: row,
    alignItems: center,
  },
  topMore: {
    fontFamily: iosFontFmily,
    color: defaultFontColor,
    fontSize: fontSmallSize,
  },
  arrow: {
    width: 15,
    height: 15
  },
  itemBox: {
    marginTop: 4,
    marginLeft: 10,
    width: 100,
    height: 100,
    backgroundColor: '#fff',
    borderRadius: 6,
    overflow: "hidden",
    justifyContent: center,
  },
  playImage: {
    width: 100,
    height: 100,
  },
  itemText: {
    width: 90,
    textAlign: center,
    marginTop: 6,
    marginLeft: 10,
    fontFamily: iosFontFmily,
    fontSize: defaultFontSize,
    color: fontColor,
  },
  // 播放量
  palyerNumBox: {
    position: 'absolute',
    top: 2,
    marginLeft: 2,
    flexDirection: row,
    alignItems: center,
  },
  // 播放
  palyerBox: {
    position: 'absolute',
    height: 25,
    width: 25,
    borderRadius: 4,
    //backgroundColor: 'red',
    alignSelf: center,
  },
  palyerBtn: {
    height: 25,
    width: 25,
  }
})