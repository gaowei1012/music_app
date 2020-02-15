'use strict'

import * as React from 'react'
import {View,Text,StyleSheet,SafeAreaView} from 'react-native'
import {flex,center,row} from '../../styles/constants'
import {screentWidth} from '../../utils/screenUtil'
import {connect} from 'react-redux'
import actions from '../../redux/actions/index'

class RecommenPage extends React.Component {
  async componentDidMount() {}
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Text>排行榜</Text>
      </SafeAreaView>
    )
  }
}

const mapStateToProps = state => ({})

const mapDispatchToProps = dispatch => ({})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RecommenPage)

const styles = StyleSheet.create({
  container: {
    flex: flex,
  }
})