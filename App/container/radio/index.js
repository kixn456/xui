import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    ScrollView
} from 'react-native';
import Header from '../../component/header';
import BackIcon from '../../common/BackArrow';
import Radio from '../../component/radio';

export default class RadioExample extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 'B'
        }
    }

    render() {
        const {navigate, goBack} = this.props.navigation;
        return (
            <View style = {{flex: 1}} >
                <Header
                    title = {'单选框'}
                    leftBtn = {<BackIcon goBack = {goBack} />}
                    containerStyle = {{backgroundColor: '#f0eded'}}
                    titleStyle = {{color: '#333333'}}
                />
                <ScrollView contentContainerStyle = {{paddingHorizontal: 15}} >
                    <Text style = {styles.title} >基本</Text>
                    <Text style = {styles.introduction} >单独的Radio组件，点击后不可修改其状态</Text>
                    <Radio>radio</Radio>

                    <Text style = {styles.title} >受控组件</Text>
                    <Text style = {styles.introduction} >绑定checked属性，其勾选状态由该属性决定</Text>
                    <Radio checked >radio</Radio>

                    <Text style = {styles.title} >单选框组</Text>
                    <Text style = {styles.introduction} >制造一组单选框，在单选框组里，checked属性将会失效</Text>
                    <Radio.Group>
                        <Radio value = {'A'} >A</Radio>
                        <Radio value = {'B'} >B</Radio>
                        <Radio value = {'C'} >C</Radio>
                    </Radio.Group>

                    <Text style = {[styles.introduction, {marginTop: 20}]} >设置defaultValue，指定默认勾选上的按钮</Text>
                    <Radio.Group defaultValue = {'B'} >
                        <Radio value = {'A'} >A</Radio>
                        <Radio value = {'B'} >B</Radio>
                        <Radio value = {'C'} >C</Radio>
                    </Radio.Group>

                    <Text style = {[styles.introduction, {marginTop: 20}]} >设置value，将单选框组变成受控组件，此时defaultValue也会失效，您需要在onChange回调函数中修改value值来更改勾选状态</Text>
                    <Radio.Group value = {this.state.value} onChange = {value => this.setState({value})} >
                        <Radio value = {'A'} >A</Radio>
                        <Radio value = {'B'} >B</Radio>
                        <Radio value = {'C'} >C</Radio>
                    </Radio.Group>

                    <Text style = {styles.title} >禁用</Text>
                    <Text style = {styles.introduction} >禁用单选框，若给单选框组的disabled为true，则会禁用整个单选框组</Text>
                    <Radio disabled >radio</Radio>
                    <Radio.Group defaultValue = {'B'} disabled >
                        <Radio value = {'A'} >A</Radio>
                        <Radio value = {'B'} >B</Radio>
                        <Radio value = {'C'} >C</Radio>
                    </Radio.Group>

                    <Text style = {styles.title} >自定义样式</Text>
                    <Radio.Group defaultValue = {'B'} groupStyle = {{marginBottom: 20, flexDirection: 'row'}} >
                        <Radio value = {'A'} textStyle = {{color: '#ff4f4f', marginRight: 10}} >A</Radio>
                        <Radio value = {'B'} radioColor = {'#108EE9'} textStyle = {{color: '#108EE9', marginRight: 10}} >B</Radio>
                        <Radio value = {'C'} radioColor = {'#01DD9B'} textStyle = {{color: '#01DD9B'}} >C</Radio>
                    </Radio.Group>
                </ScrollView>
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
        marginBottom: 20,
        fontSize: 15,
    },
    innerText: {
        fontSize: 15,
        marginBottom: 15,
        marginHorizontal: 15
    }
})
