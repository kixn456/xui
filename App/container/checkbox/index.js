import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    ScrollView
} from 'react-native';
import Header from '../../component/header';
import BackIcon from '../../common/BackArrow';
import Checkbox from '../../component/checkbox';

export default class CheckBoxExample extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: ['A']
        }
    }

    render() {
        const {navigate, goBack} = this.props.navigation;
        return (
            <View style = {{flex: 1}} >
                <Header
                    title = {'多选框'}
                    leftBtn = {<BackIcon goBack = {goBack} />}
                    containerStyle = {{backgroundColor: '#f0eded'}}
                    titleStyle = {{color: '#333333'}}
                />
                <ScrollView contentContainerStyle = {{paddingHorizontal: 15}} >
                    <Text style = {styles.title} >基本</Text>
                    <Text style = {styles.introduction} >单独的Checkbox组件，可切换勾选状态</Text>
                    <Checkbox>checkbox</Checkbox>

                    <Text style = {styles.title} >受控组件</Text>
                    <Text style = {styles.introduction} >绑定checked属性，其勾选状态由该属性决定</Text>
                    <Checkbox checked >checkbox</Checkbox>

                    <Text style = {styles.title} >多选框组</Text>
                    <Text style = {styles.introduction} >制造一组多选框，在多选框组里，checked属性将会失效</Text>
                    <Checkbox.Group>
                        <Checkbox value = {'A'} >A</Checkbox>
                        <Checkbox value = {'B'} >B</Checkbox>
                        <Checkbox value = {'C'} >C</Checkbox>
                    </Checkbox.Group>

                    <Text style = {[styles.introduction, {marginTop: 20}]} >设置defaultValue，指定默认勾选上的按钮，value为一个数组</Text>
                    <Checkbox.Group defaultValue = {['B']} >
                        <Checkbox value = {'A'} >A</Checkbox>
                        <Checkbox value = {'B'} >B</Checkbox>
                        <Checkbox value = {'C'} >C</Checkbox>
                    </Checkbox.Group>

                    <Text style = {[styles.introduction, {marginTop: 20}]} >设置value，将多选框组变成受控组件，此时defaultValue也会失效，您需要在onChange回调函数中修改value值来更改勾选状态，value为一个数组</Text>
                    <Checkbox.Group value = {this.state.value} onChange = {value => this.setState({value})} >
                        <Checkbox value = {'A'} >A</Checkbox>
                        <Checkbox value = {'B'} >B</Checkbox>
                        <Checkbox value = {'C'} >C</Checkbox>
                    </Checkbox.Group>

                    <Text style = {styles.title} >禁用</Text>
                    <Text style = {styles.introduction} >禁用多选框，若给多选框组的disabled为true，则会禁用整个多选框组</Text>
                    <Checkbox disabled >checkbox</Checkbox>
                    <Checkbox.Group defaultValue = {['B']} disabled >
                        <Checkbox value = {'A'} >A</Checkbox>
                        <Checkbox value = {'B'} >B</Checkbox>
                        <Checkbox value = {'C'} >C</Checkbox>
                    </Checkbox.Group>

                    <Text style = {styles.title} >自定义样式</Text>
                    <Checkbox.Group defaultValue = {['B']} groupStyle = {{marginBottom: 20, flexDirection: 'row'}} >
                        <Checkbox value = {'A'} textStyle = {{color: '#ff4f4f', marginRight: 10}} >A</Checkbox>
                        <Checkbox value = {'B'} checkboxColor = {'#108EE9'} textStyle = {{color: '#108EE9', marginRight: 10}} >B</Checkbox>
                        <Checkbox value = {'C'} checkboxColor = {'#01DD9B'} textStyle = {{color: '#01DD9B'}} >C</Checkbox>
                    </Checkbox.Group>
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
