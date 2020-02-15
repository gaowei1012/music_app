'use strict'
import * as React from 'react'
import { connect } from 'react-redux'
import actions from '../../redux/actions'
import { View, SafeAreaView, Text, StyleSheet, ScrollView } from 'react-native'
import { flex, center } from '../../styles/constants'
import { banner_url } from '../../expand/api'
import SwiperItem from './components/Swiper'
import SearchItem from './SearchItem'
import MenuItem from './components/MenuItem'
import { screentWidth } from '../../utils/screenUtil'
import DailyMood from './components/DailyMood'
import GuessLikePage from './components/GuessLike'
import SelectedPlaylist from './components/SelectedPlaylist'

class IndexPage extends React.Component {
  constructor(props) {
    super(props)
  }
  componentDidMount() {
    this.getBannerData()
  }
  // 获取banner数据
  getBannerData() {
    const { onLoadBannerData } = this.props
    onLoadBannerData(banner_url)
    console.log('banner', this.props.banner)
  }
  rederBanner() {
    const { banner } = this.props.banner
    console.log('banner-------------banner', banner)
    return null
  }
  renderMenuItem() {
    return <MenuItem />
  }
  renderDailyMood() {
    return <DailyMood />
  }
  renderSelectedPlaylists() {
    return <SelectedPlaylist />
  }
  renderGuessLike() {
    return <GuessLikePage />
  }
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <SearchItem />
        <ScrollView>
          <View style={{width: screentWidth, height: 90}}>
          <SwiperItem/>
          </View>
          {this.renderMenuItem()}
          {this.renderDailyMood()}
          {this.renderSelectedPlaylists()}
          {this.renderGuessLike()}
        </ScrollView>
      </SafeAreaView>
    )
  }
}

const mapStateToProps = state => ({
  banner: state.banner,
})
const mapDispatchToProps = dispatch => ({
  onLoadBannerData: url => dispatch(actions.onLoadBannerData(url))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(IndexPage)

const styles = StyleSheet.create({
  container: {
    flex: flex
  },
  bannerBox: {
    marginTop: 10,
    //backgroundColor: '#eee',
    width: 345,
    height: 80,
    alignSelf: center,
  },
  shopSwiperBox: {
    width: screentWidth,
    height: 99,
  }
})