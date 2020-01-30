/*
 * @Author: your name
 * @Date: 2020-01-17 14:20:36
 * @LastEditTime : 2020-01-30 16:54:42
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /music_app/js/view/view/Index/IndexPage.js
 */
import * as React from 'react'
import {connect} from 'react-redux'
import actions from '../../redux/actions'
import {View, SafeAreaView,Text, StyleSheet, TouchableOpacity} from 'react-native'
import {flex} from '../../styles/constants'
import {banner_url} from '../../expand/api'
import BannerItem from './components/BannerItem'
import SearchItem from './SearchItem'

class IndexPage extends React.Component {
  constructor(props){
    super(props)
  }
  componentDidMount() {
    this.getBannerData()
  }
  getBannerData() {
    const {onLoadBannerData} = this.props
    onLoadBannerData(banner_url)
    console.log('banner', this.props.banner)
  }
  rederBanner() {
    const {banner} = this.props.banner
    console.log('banner-------------banner', banner)
    return (
      <View>
        <BannerItem
          data={banner}
        />
      </View>
    )
  }
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <SearchItem/>
        {/* {this.rederBanner()} */}
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
    flex:flex
  }
})