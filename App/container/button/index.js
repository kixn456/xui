import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    ScrollView
} from 'react-native';
import Header from '../../component/header';
import BackIcon from '../../common/BackArrow';
import Button, {BUTTON_SIZE, BUTTON_TYPE} from '../../component/button';
import Icon from '../../component/icon';

export default class ButtonExample extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const {navigate, goBack} = this.props.navigation;
        return (
            <View style = {{flex: 1}} >
                <Header
                    title = {'按钮'}
                    containerStyle = {{backgroundColor: '#f0eded'}}
                    leftBtn = {<BackIcon goBack = {goBack} />}
                    titleStyle = {{color: '#333333'}}
                />
                <ScrollView>
                    <Text style = {styles.title} >块级按钮（默认）</Text>
                    <View style = {styles.container} >
                        <Button>块级按钮</Button>
                        <Button buttonStyle = {{marginTop: 10}} buttonColor = {'#108EE9'} >块级按钮</Button>
                        <Button buttonStyle = {{marginTop: 10}} buttonColor = {'#01DD9B'} >块级按钮</Button>
                        <Button buttonStyle = {{marginTop: 10}} buttonColor = {'white'} textStyle = {{color: '#333333'}} >块级按钮</Button>
                        <Button buttonStyle = {{marginTop: 10}} disabled >禁用</Button>
                    </View>
                    <Text style = {styles.title} >行内按钮</Text>
                    <View style = {styles.container} >
                        <View style = {{flexDirection: 'row'}} >
                            <Button inline size = {BUTTON_SIZE.SMALL} >small</Button>
                            <Button
                                inline
                                size = {BUTTON_SIZE.SMALL}
                                type = {BUTTON_TYPE.GHOST}
                                buttonStyle = {{marginLeft: 10}}
                            >small</Button>
                        </View>

                        <View style = {{flexDirection: 'row', marginTop: 10}} >
                            <Button inline size = {BUTTON_SIZE.MIDDLE} buttonColor = {'#108EE9'} >middle</Button>
                            <Button
                                inline
                                size = {BUTTON_SIZE.MIDDLE}
                                type = {BUTTON_TYPE.GHOST}
                                buttonStyle = {{marginLeft: 10}}
                                buttonColor = {'#108EE9'}
                            >middle</Button>
                        </View>

                        <View style = {{flexDirection: 'row', marginTop: 10}} >
                            <Button inline size = {BUTTON_SIZE.BIG} buttonColor = {'#01DD9B'} >big</Button>
                            <Button
                                inline
                                size = {BUTTON_SIZE.BIG}
                                type = {BUTTON_TYPE.GHOST}
                                buttonStyle = {{marginLeft: 10}}
                                buttonColor = {'#01DD9B'}
                            >big</Button>
                        </View>
                    </View>

                    <Text style = {styles.title} >加载中</Text>
                    <View style = {styles.container} >
                        <Button inline size = {BUTTON_SIZE.SMALL} loading >small</Button>
                        <Button
                            inline
                            size = {BUTTON_SIZE.MIDDLE}
                            buttonStyle = {{marginTop: 10}}
                            buttonColor = {'#108EE9'}
                            loading
                        >middle</Button>
                        <Button
                            inline
                            size = {BUTTON_SIZE.BIG}
                            buttonStyle = {{marginTop: 10}}
                            buttonColor = {'#01DD9B'}
                            loading
                        >big</Button>
                    </View>

                    <Text style = {styles.title} >图标</Text>
                    <View style = {[styles.container, {marginBottom: 20}]} >
                        <Button
                            inline
                            size = {BUTTON_SIZE.SMALL}
                            icon = {<Icon name = {'ios-close-circle'} color = {'white'} size = {14} />}
                        >small</Button>
                        <Button
                            inline
                            size = {BUTTON_SIZE.MIDDLE}
                            buttonStyle = {{marginTop: 10}}
                            buttonColor = {'#108EE9'}
                            icon = {<Icon name = {'ios-add-circle'} color = {'white'} size = {16} />}
                        >middle</Button>
                        <Button
                            inline
                            size = {BUTTON_SIZE.BIG}
                            buttonStyle = {{marginTop: 10}}
                            buttonColor = {'#01DD9B'}
                            icon = {<Icon name = {'ios-checkmark-circle'} color = {'white'} size = {22} />}
                        >big</Button>
                    </View>
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
    container: {
        paddingHorizontal: 15
    }
})
