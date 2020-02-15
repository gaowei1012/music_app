'use strict'

import * as React from 'react'
import {connect} from 'react-redux'
import {View,Text,StyleSheet,Image,ScrollView,TouchableOpacity} from 'react-native'
import {screentWidth} from '../../../utils/screenUtil'
import actions from '../../../redux/actions/index'
import NavigationUtil from '../../../utils/NavigationUtil'
import {topPlaylistHigh} from '../../../expand/api'
import {flex,row,center,spaceBetween,iosFontFmily,fontColor,defaultFontSize,defaultFontColor, fontSmallSize} from '../../../styles/constants'
// 精选歌单
class SelectedPlaylist extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      playList: [
        {id: 1, uri: 'http://iph.href.lu/100x100', com: 'SingerPage', text: '陈奕迅'},
        {id: 2, uri: 'http://iph.href.lu/100x100', com: 'SingerPage', text: '王力宏'},
        {id: 3, uri: 'http://iph.href.lu/100x100', com: 'SingerPage', text: '周琦'},
        {id: 4, uri: 'http://iph.href.lu/100x100', com: 'SingerPage', text: '周倩倩'},
        {id: 5, uri: 'http://iph.href.lu/100x100', com: 'SingerPage', text: '周倩倩'},
        {id: 6, uri: 'http://iph.href.lu/100x100', com: 'SingerPage', text: '周倩倩'},
        {id: 7, uri: 'http://iph.href.lu/100x100', com: 'SingerPage', text: '周倩倩'},
      ]
    }
  }
  componentDidMount() {
    this.getData()
  }
  getData() {
    const {onLoadTopPlayListHigh} = this.props
    onLoadTopPlayListHigh(topPlaylistHigh)
  }
  goToPage(com) {
    NavigationUtil.goPage({title: 'more'}, com)
  }
  goToMorePage = () => {
    NavigationUtil.goPage({title: '更多歌曲'}, 'MoreSingerPage')
  }
  renderItem() {
    const {playList} = this.state
    return (
      <View style={{flexDirection: row, height: 130}}>
        <ScrollView
          horizontal={true}
          //alwaysBounceVertical={true}
          showsHorizontalScrollIndicator={false}
          >
          {playList.map(item => {
            return <View key={item.id}>
              <TouchableOpacity
                onPress={() => this.goToPage(item.com)}
                style={styles.itemBox}
                activeOpacity={0.8}
                >
                <Image
                  source={{uri: item.uri}}
                  style={styles.playImage}
                  resizeMode='contain'
                />
                {/* 播放数量 */}
                <View style={styles.palyerNumBox}>
                  <Image source={require('../../../images/common/player.png')} style={{width: 10, height: 10}}/>
                  <Text>1212</Text>
                </View>
                {/* 播放icon */}
                <View style={styles.palyerBox}>
                  <Image
                    style={styles.palyerBtn}
                    source={require('../../../images/common/bofang.png')}
                  />
                </View>
              </TouchableOpacity>
              <Text style={styles.itemText}>{item.text}</Text>
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
  topHigh: state.topHigh,
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