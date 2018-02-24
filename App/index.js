import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    Button,
    ScrollView,
    Dimensions,
    DrawerLayoutAndroid,
    Platform
} from 'react-native';
import Header from './component/header/index';
import List from './component/list/index';
import Icon from './component/icon/index';

export default class Main extends Component {
    constructor(props) {
        super(props);
        this.navigate = null;
    }

    componentDidMount() {
        const {navigate} = this.props.navigation;
        this.navigate = navigate;
    }

    goToCollapse() {
        this.navigate('Collapse');
    }

    goToHeader() {
        this.navigate('Header');
    }

    render() {
        const {navigate} = this.props.navigation;
        return (
            <View style = {{flex: 1}} >
                <Header
                    containerStyle = {{backgroundColor: '#f0eded'}}
                    title = {'x-ui'}
                    titleStyle = {{color: '#333333'}}
                    leftBtn = {<Icon name = {'ios-apps'} color = {'#018EE9'} size = {20} />}
                    rightBtn = {<Text style = {{color: '#018EE9'}} >关于</Text>}
                />
                <ScrollView>
                    <List title = {'头部'} showLine onPress = {() => this.goToHeader()} />
                    <List title = {'折叠面板'} showLine onPress = {() => this.goToCollapse()} />
                    <List title = {'徽标'} showLine onPress = {() => this.navigate('Badge')} />
                    <List title = {'按钮'} showLine onPress = {() => this.navigate('Button')} />
                    <List title = {'动作面板'} showLine onPress = {() => this.navigate('ActionSheet')} />
                    <List title = {'标签栏'} showLine onPress = {() => this.navigate('TabBar')} />
                    <List title = {'搜索框'} showLine onPress = {() => this.navigate('Search')} />
                    <List title = {'时间轴'} showLine onPress = {() => this.navigate('TimeLine')} />
                    <List title = {'卡片'} showLine onPress = {() => this.navigate('Card')} />
                    {/*<List title = {'索引列表'} onPress = {() => this.navigate('IndexList')} />*/}
                    <List title = {'轻提示'} showLine onPress = {() => this.navigate('Toast')} />
                    {/*<List title = {'滑块'} onPress = {() => this.navigate('Slider')} />*/}
                    <List title = {'多选框'} showLine onPress = {() => this.navigate('CheckBox')} />
                    <List title = {'单选框'} showLine onPress = {() => this.navigate('Radio')} />
                    <List title = {'抽屉'} showLine onPress = {() => this.navigate('DrawerLayout')} />
                    <List title = {'栅格'} showLine onPress = {() => this.navigate('Flex')} />
                    <List title = {'分页'} showLine onPress = {() => this.navigate('Pagination')} />
                    <List title = {'列表'} showLine onPress = {() => this.navigate('List')} />
                    <List title = {'图标'} showLine onPress = {() => this.navigate('Icon')} />
                    <List title = {'唤起应用'} showLine onPress = {() => this.navigate('LinkApplication')} />
                    <Text style = {{margin: 15}} >优秀的第三方组件</Text>
                    <List title = {'react-navigation'} showLine onPress = {() => this.navigate('ReactNavigation')} />
                    <List title = {'react-native-swiper'} showLine onPress = {() => this.navigate('RNSwiper')} />
                    <List title = {'react-native-device-info'} showLine onPress = {() => this.navigate('RNDeviceInfo')} />
                    <List title = {'react-native-orientation'} showLine onPress = {() => this.navigate('RNOrientation')} />
                    <List title = {'react-native-picker'} showLine onPress = {() => this.navigate('RNPicker')} />
                    <List title = {'react-native-sqlite-storage'} showLine onPress = {() => this.navigate('RNSqliteStorage')} />
                </ScrollView>
            </View>
        )
    }
}
