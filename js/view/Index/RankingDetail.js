import * as React from 'react';
import {
  View,
  Image,
  Text,
  SafeAreaView,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {
  flex,
  row,
  center,
  fontColor,
  defaultFontSize,
  spaceBetween,
} from '../../styles/constants';
import actions from '../../redux/actions/index';
import {rakingList} from '../../expand/api';
import {px2dp} from '../../utils/px2dp';
import {connect} from 'react-redux';
import {screentWidth} from '../../utils/screenUtil';

class RankingDetail extends React.Component {
  constructor() {
    super();
    this.state = {
      tracks: [],
      desc: '',
      img: '',
    };
  }
  componentDidMount() {
    this.getData();
  }

  getData() {
    const {onLoadListData} = this.props;
    let idx = this.props.navigation.state.params.idx;
    let url = `${rakingList}?idx=${idx}`;
    onLoadListData(url);
    let tracks = this.props.rankiglist.item.tracks;
    let desc = this.props.rankiglist.item.description;
    let img = this.props.rankiglist.item.creator.backgroundUrl;
    this.setState({
      tracks: tracks,
      desc: desc,
      img: img,
    });
  }
  render() {
    const {tracks, desc, img} = this.state;
    return (
      <SafeAreaView style={styles.rankingDetailBox}>
        <View style={styles.headerBox}>
          <Image
            resizeMode="cover"
            style={styles.headerImage}
            source={{uri: img}}
          />
          <View style={styles.descBox}>
            <Text style={styles.descText}>{desc}</Text>
          </View>
        </View>
        <ScrollView style={styles.scrollBox}>
          {tracks == null
            ? null
            : tracks.map((item, index) => {
                return (
                  <TouchableOpacity key={item.id} style={styles.rankingItemBox}>
                    <View style={styles.nameBox}>
                      <Text style={styles.idx}>{index + 1}</Text>
                      <Text numberOfLines={1} style={styles.name}>
                        {item.name}
                      </Text>
                    </View>
                    <View style={styles.player}>
                      <View style={styles.point}></View>
                      <View style={styles.point}></View>
                      <View style={styles.point}></View>
                    </View>
                  </TouchableOpacity>
                );
              })}
        </ScrollView>
      </SafeAreaView>
    );
  }
}

const mapStateToProps = state => ({
  rankiglist: state.rankiglist,
});

const mapDispatchToProps = dispatch => ({
  onLoadListData: url => dispatch(actions.onLoadListData(url)),
});

export default connect(mapStateToProps, mapDispatchToProps)(RankingDetail);

const styles = StyleSheet.create({
  rankingDetailBox: {
    flex: flex,
  },
  headerBox: {
    width: screentWidth,
    height: px2dp(200),
  },
  headerImage: {
    width: screentWidth,
    height: px2dp(200),
  },
  descBox: {
    position: 'absolute',
    left: px2dp((screentWidth - 345) / 2),
    bottom: px2dp(20),
    width: px2dp(345),
    alignSelf: center,
  },
  descText: {
    fontSize: defaultFontSize,
    lineHeight: px2dp(20),
    textAlign: center,
  },
  scrollBox: {
    borderTopLeftRadius: px2dp(30),
    borderTopRightRadius: px2dp(30),
  },
  rankingItemBox: {
    flexDirection: row,
    width: px2dp(345),
    height: px2dp(30),
    alignSelf: center,
    marginBottom: px2dp(2),
    justifyContent: spaceBetween,
  },
  nameBox: {
    flexDirection: row,
    alignItems: center,
  },
  idx: {
    marginRight: px2dp(6),
    color: 'red',
    fontSize: defaultFontSize,
  },
  name: {
    fontSize: defaultFontSize,
    color: fontColor,
    alignSelf: center,
    marginLeft: px2dp(2),
    width: px2dp(280),
  },
  player: {
    width: px2dp(25),
    height: px2dp(25),
    alignSelf: center,
    // marginRight: px2dp(3),
  },
  point: {
    width: px2dp(2),
    height: px2dp(2),
    backgroundColor: '#999',
    borderRadius: px2dp(1),
    marginTop: px2dp(5),
  },
});
