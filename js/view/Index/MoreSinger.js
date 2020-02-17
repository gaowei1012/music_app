'use strict'
import * as React from 'react'
import {connect} from 'react-redux'
import actions from '../../redux/actions/index'
import {View,Text,StyleSheet,SafeAreaView} from 'react-native'
import {flex,center,row,iosFontFmily,defaultFontColor,defaultFontSize} from '../../styles/constants'
import {screentWidth} from '../../utils/screenUtil'
import PlayList from './components/PalyList'


class MorePlayPage extends React.Component {
  state = {
    data: []
  }
  async componentDidMount() {
    let data = this.props.navigation.state.params.list
    this.setState({
      data
    }, () => {
      console.log('component data', this.state.data)
    })
  }
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <PlayList data={this.state.data}/>
      </SafeAreaView>
    )
  }
}

const mapStateToProps = state => ({
  
})

const mapDispatchToProps = dispatch => ({})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MorePlayPage)

const styles = StyleSheet.create({
  container: {
    flex: flex
  }
})