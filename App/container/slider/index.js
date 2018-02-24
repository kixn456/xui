import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
} from 'react-native';
import Header from '../../component/header';
import BackIcon from '../../common/BackArrow';
import Slider from '../../component/slider';

export default class SliderExample extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const {navigate, goBack} = this.props.navigation;
        return (
            <View style = {{flex: 1}} >
                <Header title = {'滑块'} leftBtn = {<BackIcon goBack = {goBack} />} />
                <Text style = {styles.introduction} >纯js实现的Toast组件，请确保其父元素的宽和高是占满全屏的，否则会影响其显示位置。我们建议将该组件提升到项目根组件上，并监听DeviceEventEmitter.addListener事件，在每个子组件中通过DeviceEventEmitter.emit来打开Toast（参考自https://github.com/crazycodeboy/react-native-easy-toast/issues/6）。</Text>
                <View style = {styles.container} >
                    <Text style = {styles.title} >基本使用</Text>
                    <Slider width = {200} />
                </View>
                
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
    container: {
        paddingHorizontal: 15
    },
    introduction: {
        marginHorizontal: 15,
        fontSize: 15,
        marginTop: 20
    }
})