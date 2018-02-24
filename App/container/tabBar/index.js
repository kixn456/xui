import React, { Component } from 'react';
import {
    View,
    StyleSheet
} from 'react-native';
import Header from '../../component/header';
import TabBar from '../../component/tabBar';
import BackIcon from '../../common/BackArrow';
import {Home, Active, Timer, Settings} from './component';
import Icon from '../../component/icon';

export default class TabBarExample extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentTab: 'active'
        }
    }
    renderTabItem(name, title, icon, component) {
        return (
            <TabBar.Item
                selected = {this.state.currentTab === name}
                changeTab = {(tab) => this.setState({currentTab: tab})}
                title = {title}
                name = {name}
                icon = {<Icon name = {icon} size = {25} color = {'#666666'} />}
                selectedIcon = {<Icon name = {icon} size = {25} color = {'#ff4f4f'} />}
                titleStyle = {{fontSize: 12, color: '#666666'}}
                selectedTitleStyle = {{fontSize: 12}}
            >
                {component}
            </TabBar.Item>
        )
    }
    render() {
        const {navigate, goBack} = this.props.navigation;
        return (
            <View style = {{flex: 1}} >
                <Header
                    title = {'标签栏'}
                    leftBtn = {<BackIcon goBack = {goBack} />}
                    containerStyle = {{backgroundColor: '#f0eded'}}
                    titleStyle = {{color: '#333333'}}
                />
                <TabBar hidesTabTouch>
                    {this.renderTabItem('home', '首页', 'ios-home', <Home/>)}
                    {this.renderTabItem('active', '激活', 'ios-bulb', <Active/>)}
                    {this.renderTabItem('timer', '定时器', 'ios-clock', <Timer/>)}
                    {this.renderTabItem('settings', '设置', 'ios-settings', <Settings/>)}
                </TabBar>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    title: {
        marginHorizontal: 15,
        marginVertical: 20,
        color: '#333333',
        fontSize: 16,
        fontWeight: 'bold'
    },
    more: {
        fontSize: 17,
        color: 'white'
    },
    component: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})
