import React, {PureComponent} from 'react'
import TopNavigationBar from '../../common/TopNavigationBar'
import {SafeAreaView, View, Text, StyleSheet, TextInput} from 'react-native'

import {px2dp} from '../../utils/px2dp'
import {GoBack} from '../../utils/GoBack'

export default class SearchPage extends PureComponent {
    state = {
        data: [
            {id: 1, title: '天堂'},{id: 2, title: '天堂'},{id: 3, title: '天堂'}
        ]
    }

    topnavigationbar = () => {
        const statusbar = {
            backgroundColor: '#ffffff',
            barStyle: 'dark-content',
          };
          return (
            <TopNavigationBar
              title={'搜索'}
              statusBar={statusbar}
              style={{backgroundColor: '#ffffff'}}
              leftButton={GoBack(this.props, 'dark')}
            />
        );
    }

    searchHistory = () => {
        const {data} = this.state
        return (
            <View style={styles.searchHistory}>
                <Text>搜索历史</Text>
                <View style={styles.itemBox}>
                    {data && data.map(item => {
                        return <Text style={styles.item} key={item.id}>{item.title}</Text>
                    })}
                </View>
            </View>
        )
    }

    render() {
        return (
            <SafeAreaView style={styles.container}>
               {this.topnavigationbar()}
               <TextInput style={styles.textInput} placeholder='搜索'/>
               {this.searchHistory()}
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    textInput: {
        height: px2dp(36),
        borderWidth:1,
        borderColor: '#eee',
        borderStyle: "solid",
        marginLeft:  px2dp(24),
        marginRight: px2dp(24),
        borderRadius: 6,
        paddingLeft: px2dp(4),
    },
    searchHistory: {
        marginTop: px2dp(20),
        marginLeft:  px2dp(24),
        marginRight: px2dp(24),
    },
    itemBox: {
        marginTop: px2dp(3),
        flexDirection: 'row',
    },
    item: {
        width: px2dp(60),
        height: px2dp(26),
        borderRadius: 3,
        marginLeft: px2dp(6),
        borderWidth:1,
        borderColor: '#eee',
        borderStyle: "solid",
        textAlign: 'center',
    }

})