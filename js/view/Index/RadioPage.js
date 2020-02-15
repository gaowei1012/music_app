'use strict'

import * as React from 'react'
import {View,Text,StyleSheet,SafeAreaView} from 'react-native'
import {flex,center,row} from '../../styles/constants'
import {screentWidth} from '../../utils/screenUtil'
import {connect} from 'react-redux'
import actions from '../../redux/actions/index'
import {radio} from '../../expand/api'

class RaioPage extends React.Component {
  componentDidMount() {
    this.getData()
  }
  getData() {
    const {onLoadRadioData} = this.props
    onLoadRadioData(radio)
    console.log('radio', this.props)
  }
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Text>电台</Text>
      </SafeAreaView>
    )
  }
}

const mapStateToProps = state => ({
  radio: state.radio
})

const mapDispatchToProps = dispatch => ({
  onLoadRadioData: url => dispatch(actions.onLoadRadioData(url))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RaioPage)

const styles = StyleSheet.create({
  container: {
    flex: flex,
  }
})