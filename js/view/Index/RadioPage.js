'use strict';

import * as React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Image,
  TouchableOpacity,
} from 'react-native';
import {flex, center, row} from '../../styles/constants';
import {screentWidth} from '../../utils/screenUtil';
import {connect} from 'react-redux';
import actions from '../../redux/actions/index';
import {radio} from '../../expand/api';
import TopNavigationBar from '../../common/TopNavigationBar';
import {GoBack} from '../../utils/GoBack';

class RaioPage extends React.Component {
  componentDidMount() {
    this.getData();
  }
  getData() {
    const {onLoadRadioData} = this.props;
    onLoadRadioData(radio);
    console.log('radio', this.props);
  }
  _renderTopBar = () => {
    let statusbar = {
      backgroundColor: '#ffffff',
      barStyle: 'dark-content',
    };
    const title = this.props.navigation.state.params.title;
    return (
      <TopNavigationBar
        title={title}
        statusBar={statusbar}
        style={{backgroundColor: '#ffffff'}}
        leftButton={GoBack(this.props, 'dark')}
      />
    );
  };
  render() {
    const radio = this.props.radio.item;
    return (
      <SafeAreaView style={styles.container}>
        {this._renderTopBar()}
        <>
          {radio == null
            ? null
            : radio.map(item => {
                return (
                  <View style={styles.raioBox} key={item.id}>
                    <View style={styles.imageBox}>
                      <Image source={{uri: item.picUrl}} style={styles.image} />
                    </View>
                    <View>
                      <Text>{item.name}</Text>
                    </View>
                  </View>
                );
              })}
        </>
      </SafeAreaView>
    );
  }
}

const mapStateToProps = state => ({
  radio: state.radio,
});

const mapDispatchToProps = dispatch => ({
  onLoadRadioData: url => dispatch(actions.onLoadRadioData(url)),
});

export default connect(mapStateToProps, mapDispatchToProps)(RaioPage);

const styles = StyleSheet.create({
  container: {
    flex: flex,
  },
  raioBox: {
    flexDirection: row,
    width: 345,
    height: 80,
    backgroundColor: '#eee',
    alignItems: center,
    marginBottom: 2,
    alignSelf: center,
    paddingLeft: 4,
  },
  imageBox: {
    width: 60,
    height: 60,
    overflow: 'hidden',
    borderRadius: 6,
  },
  image: {
    width: 60,
    height: 60,
  },
});
