import React, {PureComponent} from 'react'
import TopNavigationBar from '../../common/TopNavigationBar'
import {SafeAreaView, View, Text, StyleSheet, TextInput, ScrollView, TouchableOpacity} from 'react-native'
import actions from '../../redux/actions'
import {connect} from 'react-redux'
import {search} from '../../expand/api'

import {px2dp} from '../../utils/px2dp'
import {GoBack} from '../../utils/GoBack'

class SearchPage extends PureComponent {
    state = {
        data: [
            {id: 112, title: '天堂'},{id: 221, title: '天堂'},{id: 213, title: '天堂'}
        ],
        value: ''
    }

    componentDidMount() {
        const {onLoadSearchData} = this.props;
        const url = search + '海阔天空';
        onLoadSearchData(url);
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

    // 搜索
    onChangeText(value) {
        this.setState({
            value
        })
    }

    render() {
        const {data, value} = this.state;
        const search = this.props.search.item;
        console.log('search', search)
        // if (!search) {
        //     return <View>
        //         <Text>没有相关歌曲</Text>
        //     </View>
        // };
        // 搜索区域
        const searchInput = (
            <TextInput
                style={styles.textInput}
                onChangeText={value => this.onChangeText(value)}
                clearTextOnFocus={true}
                placeholder='搜索'
            />
        )
        // 搜索历史记录
        const searchHistory = (
            <View style={styles.searchHistory}>
                <Text>搜索历史</Text>
                <View style={styles.itemBox}>
                    {data && data.map(item => {
                        return <Text style={styles.item} key={item.id}>{item.title}</Text>
                    })}
                </View>
            </View>
        );

        // 搜索内容展示区
        const searchContent = (
            <View style={styles.searchContentBox}>
                {!search && <Text>数据加载中</Text>}
                {search && search.map(item => (
                    <TouchableOpacity onPress={null} style={styles.searchItemBox} key={item.id}>
                        <Text>{item.name}</Text>
                    </TouchableOpacity>
                ))}
            </View>
        );

        return (
            <SafeAreaView style={styles.container}>
                {this.topnavigationbar()}
                {searchInput}
                {searchHistory}
                <ScrollView>
                    {searchContent}
                </ScrollView>
            </SafeAreaView>
        )
    }
}

const mapStateToProps = state => ({
    search: state.search,
})

const mapDispatchToProps = dispatch => ({
    onLoadSearchData: url => dispatch(actions.onLoadSearchData(url))
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SearchPage)

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
        borderRadius: px2dp(6),
        paddingLeft: px2dp(6),
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
        lineHeight: px2dp(26)
    },
    searchContentBox: {
        width: px2dp(345),
        paddingTop: px2dp(12),
        alignSelf: 'center'
    },
    searchItemBox: {
        marginTop: px2dp(10),
    }

})