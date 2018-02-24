import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity
} from 'react-native';
import Header from '../../component/header';
import BackIcon from '../../common/BackArrow';

export default class HeaderExample extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const {navigate, goBack} = this.props.navigation;
        const rightBtn = (
            <TouchableOpacity onPress = {() => alert('更多')} >
                <Text style = {styles.more} >更多</Text>
            </TouchableOpacity>
        )
        return (
            <View style = {{flex: 1}} >
                <Header
                    title = {'头部'}
                    leftBtn = {<BackIcon goBack = {goBack} />}
                    containerStyle = {{backgroundColor: '#f0eded'}}
                    titleStyle = {{color: '#333333'}}
                />
                <Text style = {styles.title} >基本</Text>
                <Header title = {'导航栏'} />
                <Text style = {styles.title} >背景色</Text>
                <Header title = {'导航栏'} containerStyle = {{backgroundColor: '#108EE9'}} />
                <Text style = {styles.title} >按钮</Text>
                <Header title = {'导航栏'}
                    containerStyle = {{backgroundColor: '#01DD9B'}}
                    leftBtn = {<BackIcon color = {'white'} goBack = {goBack} />}
                    rightBtn = {rightBtn}
                />
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
    }
})
