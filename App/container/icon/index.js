import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    FlatList,
    TouchableOpacity
} from 'react-native';
import Header from '../../component/header';
import BackIcon from '../../common/BackArrow';
import Icon from '../../component/icon';
import Flex from '../../component/flex';
import {iconList} from './iconList';

export default class IconExample extends Component {
    constructor(props) {
        super(props);
    }
    renderIcon(item, index) {
        let _index = 0;
        let iconGroup = [];
        for(let key in item) {
            iconGroup.push(
                <Flex.Item key = {_index} flexItemStyle = {{justifyContent: 'center', alignItems: 'center'}} >
                    <TouchableOpacity onPress = {() => requestAnimationFrame(() => alert(key))} >
                        <Icon name = {key} size = {30} />
                    </TouchableOpacity>
                </Flex.Item>
            );
            _index++;
        }
        return (
            <Flex key = {index} flexStyle = {{marginTop: 15, marginBottom: index == iconList.length - 1 ? 20 : 0}} >
                {iconGroup}
            </Flex>
        )
    }
    renderHeader() {
        return <Text style = {[styles.introduction, {marginBottom: 0}]} >单独提取react-native-vector-icons的Ionicons，将Ionicons.ttf放到资源文件中即可使用，无需装包和配置。</Text>
    }
    render() {
        const {navigate, goBack} = this.props.navigation;
        return (
            <View style = {{flex: 1}} >
                <Header
                    title = {'图标'}
                    leftBtn = {<BackIcon goBack = {goBack} />}
                    containerStyle = {{backgroundColor: '#f0eded'}}
                    titleStyle = {{color: '#333333'}}
                />
                <FlatList
                   data = {iconList}
                   renderItem = {({item, index}) => this.renderIcon(item, index)}
                   renderHeader = {() => this.renderHeader()}
                   keyExtractor = {(item, index) => index}
                   initialNumToRender = {15}
                   legacyImplementation
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    title: {
        marginVertical: 20,
        color: '#333333',
        fontSize: 16,
        fontWeight: 'bold'
    },
    introduction: {
        marginHorizontal: 15,
        marginVertical: 20,
        fontSize: 15,
    },
    innerText: {
        fontSize: 15,
        marginBottom: 15,
        marginHorizontal: 15
    }
})
