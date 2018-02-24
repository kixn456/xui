import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    ScrollView,
    DeviceEventEmitter
} from 'react-native';
import Header from '../../component/header';
import BackIcon from '../../common/BackArrow';
import Toast from '../../component/toast';
import Button from '../../component/button';

export default class ToastExample extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const {navigate, goBack} = this.props.navigation;
        return (
            <View style = {{flex: 1}} >
                <Header
                    title = {'轻提示'}
                    leftBtn = {<BackIcon goBack = {goBack} />}
                    containerStyle = {{backgroundColor: '#f0eded'}}
                    titleStyle = {{color: '#333333'}}
                />
                <ScrollView>
                    <Text style = {styles.introduction} >纯js实现的Toast组件，请确保其父元素的宽和高是占满全屏的，否则会影响其显示位置。我们建议将该组件提升到项目根组件上，并监听DeviceEventEmitter.addListener事件，在每个子组件中通过DeviceEventEmitter.emit来打开Toast（参考自https://github.com/crazycodeboy/react-native-easy-toast/issues/6）。</Text>
                    <View style = {styles.container} >
                        <Text style = {styles.title} >基本使用</Text>
                        <Button onPress = {() => this.toast.show({
                            content: '基本使用'
                        })} >基本使用</Button>

                        <Text style = {styles.title} >持续时间</Text>
                        <Button buttonColor = {'#108EE9'} onPress = {() => this.toast.show({
                            content: '持续时间',
                            duration: 1000
                        })} >持续时间</Button>

                        <Text style = {styles.title} >取消遮罩层</Text>
                        <Button buttonColor = {'#01DD9B'} onPress = {() => this.toast.show({
                            content: '取消遮罩层',
                            mask: false
                        })} >取消遮罩层</Button>

                        <Text style = {styles.title} >全局提示</Text>
                        <Button buttonStyle = {{marginBottom: 20}} buttonColor = {'white'} textStyle = {{color: '#333333'}} onPress = {() => DeviceEventEmitter.emit('showToast', {
                            content: '全局提示',
                            mask: false
                        })} >全局提示</Button>
                    </View>
                </ScrollView>
                <Toast ref = {toast => this.toast = toast} />
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
