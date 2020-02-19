'use strict'
import * as React from 'react'
import { connect } from 'react-redux'
import actions from '../../redux/actions'
import { View, SafeAreaView, Text, StyleSheet, ScrollView } from 'react-native'
import { flex, center } from '../../styles/constants'
import { banner_url, WeatherUrl, search } from '../../expand/api'
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
    this.state = {
      daily_data: [],
      banner: [],
    }
  }
  async componentDidMount() {
    this.getData()
    this._mapBanner()
  }
  // 获取数据
  getData() {
    const { onLoadBannerData, onLoadWeatherData, onLoadSearchData} = this.props
    onLoadBannerData(banner_url)
    onLoadWeatherData(WeatherUrl)
    let url = search + '海阔天空'
    onLoadSearchData(url)
  }
  // 处理banner数据
  _mapBanner() {
    const banner = this.props.banner.item
    this.setState({banner: banner})
  }
  renderMenuItem() {
    return <MenuItem />
  }
  renderDailyMood() {
    // <DailyMood data={this.props.weather == null ? null : this.props.weather}/>
    return null
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
            {/* <SwiperItem data={this.state.banner}/> */}
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
  weather: state.weather,
  search: state.search,
})
const mapDispatchToProps = dispatch => ({
  onLoadBannerData: url => dispatch(actions.onLoadBannerData(url)),
  onLoadWeatherData: url => dispatch(actions.onLoadWeatherData(url)),
  onLoadSearchData: url => dispatch(actions.onLoadSearchData(url)),
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