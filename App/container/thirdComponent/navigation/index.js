import React, {Component} from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Linking
} from 'react-native';
import Button from '../../../component/button';
import Icon from '../../../component/icon';
import {NavigationActions} from 'react-navigation';
import utils from '../../../common/util';
import {openUrl} from '../../../common/function';

export class RNStackPage extends Component {
    render() {
        const {navigate} = this.props.navigation;
        return (
            <View style = {styles.container} >
                <Text style = {styles.introduction} >react-navigation，一个取代了react-navigator的全新导航系统，包含了StackNavigator、TabNavigator、DrawerNavigator。</Text>
                <View style = {{flexDirection: 'row', marginTop: 15}} >
                    <TouchableOpacity onPress = {() => openUrl('https://reactnavigation.org/')} >
                        <Text style = {styles.urlStyle} >文档地址</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style = {{marginLeft: 15}} onPress = {() => openUrl('https://github.com/react-navigation/react-navigation')} >
                        <Text style = {styles.urlStyle} >github地址</Text>
                    </TouchableOpacity>
                </View>
                <Text style = {[styles.introduction, {marginTop: 15}]} >StackNavigator，用于页面之间的跳转</Text>
                <Button
                    buttonStyle = {{marginTop: 15}}
                    onPress = {() => navigate('Header')}
                    inline
                >跳转至Header</Button>
                <Button
                    buttonStyle = {{marginTop: 15}}
                    buttonColor = {'#108EE9'}
                    onPress = {() => this.props.navigation.dispatch(NavigationActions.back())}
                    inline
                >返回</Button>
            </View>
        )
    }
}

export class RNTabPage extends Component {
    render() {
        const {navigate} = this.props.navigation;
        return (
            <View style = {styles.container} >
                <Text style = {styles.introduction} >TabNavigator，选项卡组件。点击按钮访问x-ui的TabBar组件以对比二者。</Text>
                <Button
                    buttonStyle = {{marginTop: 15}}
                    inline
                    onPress = {() => navigate('TabBar')}
                >x-ui TabBar</Button>
            </View>
        )
    }
}

export class RNDrawerPage extends Component {
    render() {
        const {navigate} = this.props.navigation;
        return (
            <View style = {styles.container} >
                <Text style = {styles.introduction} >DrawerNavigator，抽屉组件。点击按钮访问x-ui的DrawerLayout组件以对比二者。</Text>
                <Button
                    buttonStyle = {{marginTop: 15}}
                    inline
                    onPress = {() => navigate('DrawerOpen')}
                >打开抽屉</Button>
                <Button
                    buttonStyle = {{marginTop: 15}}
                    buttonColor = {'#108EE9'}
                    inline
                    onPress = {() => navigate('DrawerLayout')}
                >x-ui DrawerLayout</Button>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 15
    },
    introduction: {
        fontSize: 16,
        textAlign: 'center',
        color: utils.theme.minorColor
    },
    urlStyle: {
        fontSize: 15,
        color: '#018EE9'
    }
})
