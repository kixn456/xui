import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    ScrollView
} from 'react-native';
import Header from '../../component/header';
import BackIcon from '../../common/BackArrow';
import Search from '../../component/search';
import Button from '../../component/button';

export default class SearchExample extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: ''
        }
    }

    render() {
        const {navigate, goBack} = this.props.navigation;
        return (
            <View style = {{flex: 1}} >
                <Header
                    title = {'搜索框'}
                    leftBtn = {<BackIcon goBack = {goBack} />}
                    containerStyle = {{backgroundColor: '#f0eded'}}
                    titleStyle = {{color: '#333333'}}
                />
                <ScrollView keyboardShouldPersistTaps = {'always'} >
                    <Text style = {styles.introduction} >由于react-native TextInput的特殊性，若想要实现点击空白处自动失焦，请使用ScrollView将容器包裹。</Text>
                    <Text style = {styles.title} >基本</Text>
                    <Search
                        value = {this.state.value}
                        placeholder = {'输入任何内容'}
                        onChange = {(value) => {this.setState({value})}}
                    />
                    <Text style = {styles.title} >始终显示取消按钮</Text>
                    <Search
                        defaultValue = {'test'}
                        value = {this.state.value}
                        onChange = {(value) => {this.setState({value})}}
                        placeholder = {'输入任何内容'}
                        showCancelButton
                    />
                    <Text style = {styles.title} >附带弹出层</Text>
                    <Search
                        defaultValue = {'test'}
                        value = {this.state.value}
                        onChange = {(value) => {this.setState({value})}}
                        showModal
                        modalComponent = {
                            <View style = {styles.component} >
                                <Text style = {{fontSize: 16}} >您自己的组件</Text>
                            </View>
                        }
                    />
                    <Text style = {styles.title} >手动聚焦和失焦</Text>
                    <Search
                        value = {this.state.value}
                        placeholder = {'输入任何内容'}
                        onChange = {(value) => {this.setState({value})}}
                        ref= {search => this.search = search}
                    />
                    <Button buttonStyle = {{marginHorizontal: 15, marginTop: 10}} onPress = {() => this.search.focus()} >聚焦</Button>
                    <Button buttonColor = {'#108EE9'} buttonStyle = {{marginHorizontal: 15, marginVertical: 10}} onPress = {() => this.search.blur()} >失焦</Button>
                </ScrollView>
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
    introduction: {
        marginHorizontal: 15,
        fontSize: 15,
        marginTop: 20
    },
    component: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 80
    }
})
