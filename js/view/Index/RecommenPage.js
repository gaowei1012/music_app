import * as React from 'react';
import {View, Text, StyleSheet, SafeAreaView} from 'react-native';
import {flex, center, row} from '../../styles/constants';
import {screentWidth} from '../../utils/screenUtil';
import {connect} from 'react-redux';
import actions from '../../redux/actions/index';
import {personalizedDjprogram} from '../../expand/api';

class RecommenPage extends React.Component {
  componentDidMount() {
    this.getData();
  }
  getData() {
    const {onLoadRecommendData} = this.props;
    onLoadRecommendData(personalizedDjprogram);
  }
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Text>推荐</Text>
      </SafeAreaView>
    );
  }
}

const mapStateToProps = state => ({
  djprogram: state.djprogram,
});

const mapDispatchToProps = dispatch => ({
  onLoadDjprogramData: url => dispatch(actions.onLoadDjprogramData(url)),
});

export default connect(mapStateToProps, mapDispatchToProps)(RecommenPage);

const styles = StyleSheet.create({
  container: {
    flex: flex,
  },
});
