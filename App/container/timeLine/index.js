import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet
} from 'react-native';
import Header from '../../component/header';
import BackIcon from '../../common/BackArrow';
import Button from '../../component/button';

export default class TimeLineExample extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {navigate, goBack} = this.props.navigation;
        return (
            <View style = {{flex: 1}} >
                <Header
                    title = {'时间轴'}
                    leftBtn = {<BackIcon goBack = {goBack} />}
                    containerStyle = {{backgroundColor: '#f0eded'}}
                    titleStyle = {{color: '#333333'}}
                />
                <View style = {styles.buttonContainer} >
                    <Text style = {{fontSize: 17, lineHeight: 34}} >基于ART绘图库实现的时间轴组件</Text>
                    <Text style = {{fontSize: 17, lineHeight: 34}} >点击以下按钮查看时间轴的不同使用方法</Text>
                </View>
                <View style = {[styles.buttonContainer, {justifyContent: 'flex-start'}]} >
                    <View style = {{flexDirection: 'row'}} >
                        <Button inline onPress = {() => navigate('TimeLineBasic')} >基本</Button>
                        <Button buttonColor = {'#108EE9'} buttonStyle = {{marginLeft: 15}} inline onPress = {() => navigate('TimeLineLeftTitle')} >左侧标题</Button>
                    </View>
                    <View style = {{flexDirection: 'row', marginTop: 15}} >
                        <Button buttonColor = {'#01DD9B'} inline onPress = {() => navigate('TimeLineCustomStyle')} >自定义样式</Button>
                        <Button buttonColor = {'white'} textStyle = {{color: '#333333'}} buttonStyle = {{marginLeft: 15}} inline onPress = {() => navigate('TimeLineUseAnimation')} >使用动画</Button>
                    </View>
                </View>
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
    buttonContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})
