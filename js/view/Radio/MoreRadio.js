import React, {PureComponent} from 'react'
import {View, Text, StyleSheet, Image} from 'react-native'
import actions from '../../redux/actions'
import { connect } from 'react-redux'
import {radioDetail} from '../../expand/api'
import { screentWidth } from '../../utils/screenUtil'
import {px2dp} from '../../utils/px2dp'

class MoreRadio extends PureComponent {
  constructor(props) {
    super(props)
  }
  componentDidMount() {
    // 获取到params的id
    const {onRadioDetail} = this.props;
    const id = this.props.navigation.state.params.id;
    const url = `${radioDetail}?rid=${id}`;
    onRadioDetail(url)
  }
  _renderMoreBac=()=> {
    const radioDetail = this.props.radioDetail.item
    if (!radioDetail) return
    const backgroundUrl = radioDetail.dj.backgroundUrl
    const desc = radioDetail.desc
    return <View style={{width: screentWidth, height: 300}}>
      <Image style={{width: screentWidth, height: 300}} source={{uri: backgroundUrl}}/>
      <Text style={styles.desc}>{desc}</Text>
    </View>
  }
  render() {
    return (
      <View>
        {this._renderMoreBac()}
      </View>
    )
  }
}

const mapStateToProps = state => ({
  radioDetail: state.radioDetail,
})

const mapDispatchToProps = dispatch => ({
  onRadioDetail: url => dispatch(actions.onRadioDetail(url))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)( MoreRadio )

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  desc: {
    position: 'absolute',
    lineHeight: px2dp(22),
    bottom: px2dp(4),
    left: 0,
    padding: px2dp(6),
    color: '#fff'
  }
})