'use strict'
import * as React from 'react'
import {connect} from 'react-redux'
import actions from '../../redux/actions/index'
import {View,Text,StyleSheet} from 'react-native'
import {flex,center,row,iosFontFmily,defaultFontColor,defaultFontSize} from '../../styles/constants'
import {screentWidth} from '../../utils/screenUtil'


class MoreSingerPage extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>更多歌手页面</Text>
      </View>
    )
  }
}

const mapStateToProps = state => ({})

const mapDispatchToProps = dispatch => ({})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MoreSingerPage)

const styles = StyleSheet.create({
  container: {
    flex: flex
  }
})