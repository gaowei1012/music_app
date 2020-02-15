'use strict'

import * as React from 'react'
import { connect } from 'react-redux'
import actions from '../../../redux/actions/index'
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import { screentWidth } from '../../../utils/screenUtil'
import NavigationUtil from '../../../utils/NavigationUtil'
import { flex, row, center, iosFontFmily, defaultFontColor, defaultFontSize, spaceBetween, spaceAround, fontColor, fontSmallSize } from '../../../styles/constants'

class GuessLikePage extends React.Component {
  state = {
    guess_list: [
      {id: 1, title: 'Love Story', url: 'http://iph.href.lu/100x100', des: 'desdesdes'},
      {id: 2, title: 'Love Story', url: 'http://iph.href.lu/100x100', des: 'desdesdes'},
      {id: 3, title: 'Love Story', url: 'http://iph.href.lu/100x100', des: 'desdesdes'},
      {id: 4, title: 'Love Story', url: 'http://iph.href.lu/100x100', des: 'desdesdes'},
      {id: 5, title: 'Love Story', url: 'http://iph.href.lu/100x100', des: 'desdesdes'},
      {id: 6, title: 'Love Story', url: 'http://iph.href.lu/100x100', des: 'desdesdes'}
    ]
  }
  async componentDidMount() {}
  renderTopCom() {
    return <View style={styles.topBox}>
      <Text style={styles.topTitle}>猜你喜欢</Text>
      <View style={styles.topMoreBox}>
        <Text style={styles.moreText}>更多</Text>
        <Image style={styles.arrow} source={require('../../../images/common/arrow.png')}/>
      </View>
    </View>
  }
  goGuessLikePage() {
    NavigationUtil.goPage({title: '猜你喜欢'}, 'GuessLikePage')
  }
  renderGuessLikeItem() {
    const {guess_list} = this.state
    return <View>
      {guess_list.map(item => {
        return <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => this.goGuessLikePage}
          key={item.id} style={styles.guessBox}
          >
          <View style={styles.guessImageBox}>
            <Image source={{uri: item.url}} style={styles.guessImage}/>
          </View>
          <View style={styles.guessDesBox}>
            <Text style={styles.guessTitle}>{item.title}</Text>
            <Text style={styles.guessDes}>{item.des}</Text>
          </View>
        </TouchableOpacity>
      })}
    </View>
  }
  render() {
    return (
      <View style={styles.container}>
        {this.renderTopCom()}
        {this.renderGuessLikeItem()}
      </View>
    )
  }
}

const mapStateToProps = state => ({})

const mapDispatchToProps = dispatch => ({})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GuessLikePage)

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
  },
  topBox: {
    marginLeft: 6,
    marginRight: 6,
    flexDirection: row,
    justifyContent: spaceBetween
  },
  topTitle: {
    fontFamily: iosFontFmily,
    color: fontColor,
    fontSize: 16,
  },
  topMoreBox: {
    flexDirection: row,
    alignItems: center,
  },
  moreText: {
    fontFamily: iosFontFmily,
    color: defaultFontColor,
    fontSize: fontSmallSize,
  },
  arrow: {
    width: 16,
    height: 16,
  },
  guessBox: {
    width: screentWidth,
    height: 120,
    //backgroundColor: '#eee',
    flexDirection: row,
  },
  guessImageBox: {
    width: 100,
    height: 100,
    margin: 10,
    borderRadius: 6,
    overflow: 'hidden'
  },
  guessImage: {
    width: '100%',
    height: '100%',
  },
  guessDesBox: {
    marginLeft: 10,
    alignSelf: center
  },
  guessTitle: {
    fontFamily: iosFontFmily,
    fontSize: 16,
    color: fontColor,
  },
  guessDes: {
    fontFamily: iosFontFmily,
    fontSize: defaultFontSize,
    color: defaultFontColor,
  }
})