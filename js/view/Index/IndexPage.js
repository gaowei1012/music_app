import * as React from 'react';
import {connect} from 'react-redux';
import actions from '../../redux/actions';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  Animated,
  Image,
} from 'react-native';
import {flex, center} from '../../styles/constants';
import {
  banner_url,
  WeatherUrl,
  search,
  topPlaylistHigh,
} from '../../expand/api';
import SwiperItem from './components/Swiper';
import SearchItem from './SearchItem';
import MenuItem from './components/MenuItem';
import {screentWidth} from '../../utils/screenUtil';
import DailyMood from './components/DailyMood';
import GuessLikePage from './components/GuessLike';
import SelectedPlaylist from './components/SelectedPlaylist';
import Swiper from 'react-native-swiper';
import {px2dp} from '../../utils/px2dp';

class IndexPage extends React.Component {
  state = {
    daily_data: [],
    banner: [],
  };
  componentDidMount() {
    this.getData();
    this._mapBanner();
  }
  // 获取数据
  async getData() {
    const {
      onLoadBannerData,
      onLoadWeatherData,
      onLoadSearchData,
      onLoadTopPlayListHigh,
    } = this.props;
    await onLoadBannerData(banner_url);
    await onLoadWeatherData(WeatherUrl);
    let url = search + '海阔天空';
    let player_list_url = topPlaylistHigh + '?' + 'limit=10&order=new';
    await onLoadSearchData(url);
    await onLoadTopPlayListHigh(player_list_url);
  }
  // 处理banner数据
  async _mapBanner() {
    const banner = this.props.banner.item;
    this.setState({banner: banner});
  }
  renderBanner = () => {
    const banner = this.props.banner.item;
    // console.log('banner', banner);
    return (
      <Animated.View style={styles.bannerBox}>
        <Swiper autoplay={true}>
          {banner !== null
            ? banner.map(item => {
                return (
                  <Image
                    style={styles.bannerImage}
                    key={item.id}
                    source={{uri: item.imageUrl}}
                  />
                );
              })
            : undefined}
        </Swiper>
      </Animated.View>
    );
  };
  renderMenuItem = () => {
    return <MenuItem />;
  };
  renderDailyMood = () => {
    return <DailyMood data={this.props.weather} />;
  };
  renderSelectedPlaylists = () => {
    return <SelectedPlaylist play_list={this.props.playHigh} />;
  };
  renderGuessLike = () => {
    return <GuessLikePage />;
  };
  render() {
    console.log('sele data', this.props.playHigh);
    return (
      <SafeAreaView style={styles.container}>
        <SearchItem />
        <ScrollView>
          {this.renderBanner()}
          {this.renderMenuItem()}
          {this.renderDailyMood()}
          {this.renderSelectedPlaylists()}
          {this.renderGuessLike()}
        </ScrollView>
      </SafeAreaView>
    );
  }
}

const mapStateToProps = state => ({
  banner: state.banner,
  weather: state.weather,
  search: state.search,
  playHigh: state.playHigh,
});
const mapDispatchToProps = dispatch => ({
  onLoadBannerData: url => dispatch(actions.onLoadBannerData(url)),
  onLoadWeatherData: url => dispatch(actions.onLoadWeatherData(url)),
  onLoadSearchData: url => dispatch(actions.onLoadSearchData(url)),
  onLoadTopPlayListHigh: url => dispatch(actions.onLoadTopPlayListHigh(url)),
});

export default connect(mapStateToProps, mapDispatchToProps)(IndexPage);

const styles = StyleSheet.create({
  container: {
    flex: flex,
  },
  bannerBox: {
    marginTop: 10,
    width: px2dp(345),
    height: px2dp(120),
    alignSelf: center,
    borderRadius: px2dp(6),
    overflow: 'hidden',
  },
  bannerImage: {
    width: px2dp(345),
    height: px2dp(120),
    borderRadius: px2dp(6),
    overflow: 'hidden',
  },
  shopSwiperBox: {
    width: screentWidth,
    height: px2dp(99),
  },
});
