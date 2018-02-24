import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    Image,
    ScrollView
} from 'react-native';
import Header from '../../component/header';
import BackIcon from '../../common/BackArrow';
import List from '../../component/list';

const MESSAGE = require('../../image/mark.png');
const MY = require('../../image/my.png');

export default class ListExample extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: ['A']
        }
    }

    render() {
        const {navigate, goBack} = this.props.navigation;
        const leftContent = <View style = {styles.leftIcon} >
            <Image source = {MESSAGE} style = {{width: 18, height: 18, tintColor: 'white'}} />
        </View>
        const contacts = <View style = {styles.contacts} >
            <Image source = {MY} style = {{width: 30, height: 30, tintColor: 'white'}} />
        </View>
        return (
            <View style = {{flex: 1}} >
                <Header
                    title = {'列表'}
                    leftBtn = {<BackIcon goBack = {goBack} />}
                    containerStyle = {{backgroundColor: '#f0eded'}}
                    titleStyle = {{color: '#333333'}}
                />
                <ScrollView scrollEnabled = {this.state.scrollable} >
                    <Text style = {styles.title} >基本</Text>
                    <List title = {'最基本的列表组件'} listStyle = {{marginBottom: 15}} />
                    <List
                        title = {'自定义右侧内容'}
                        listStyle = {{marginBottom: 15}}
                        rightContent = {<Text>额外的内容</Text>}
                    />
                    <List
                        title = {'隐藏右侧图标'}
                        listStyle = {{marginBottom: 15}}
                        rightContent = {<Text>额外的内容</Text>}
                        showRightIcon = {false}
                    />
                    <List
                        title = {'点击事件'}
                        listStyle = {{marginBottom: 15}}
                        touchOpacity = {0.6}
                        onPress = {() => alert('你点击了List')}
                    />
                    <List title = {'自定义左侧内容'} leftContent = {leftContent} />

                    <Text style = {styles.title} >多行列表</Text>
                    <List title = {'这是一个一级标题'} listStyle = {{marginBottom: 15}} >
                        <Text style = {{fontSize: 15}} >这是一个二级标题</Text>
                        <Text style = {{fontSize: 14}} >这是一个三级标题</Text>
                    </List>
                    <List
                        title = {'控制左右内容的对齐方式'}
                        showRightIcon = {false}
                        leftContent = {contacts}
                        rightContent = {<Text>12:00</Text>}
                        rightContentFlex = {'flex-start'}
                        listStyle = {{marginBottom: 15}}
                    >
                        <Text style = {{fontSize: 15}} >左侧内容居中于List</Text>
                        <Text style = {{fontSize: 14}} >右侧内容上对齐于List</Text>
                    </List>

                    <Text style = {styles.title} >滑动按钮</Text>
                    <List
                        title = {'左滑显示删除'}
                        showRightIcon = {false}
                        btnConfig = {[{
                            text: '删除',
                            onPress: () => alert('您点击了删除按钮')
                        }]}
                        listStyle = {{marginBottom: 15}}
                    />
                    <List
                        title = {'灰色置顶'}
                        listStyle = {{marginBottom: 20}}
                        showRightIcon = {false}
                        btnConfig = {[{
                            text: '置顶',
                            width: 60,
                            backgroundColor: 'gray',
                            onPress: () => alert('您点击了置顶按钮')
                        }, {
                            text: '提醒',
                            width: 60,
                            backgroundColor: '#c4af00',
                            onPress: () => alert('您点击了提醒按钮')
                        }, {
                            text: '删除',
                            width: 60,
                            onPress: () => alert('您点击了删除按钮')
                        }]}
                    >
                        <Text style = {{fontSize: 15}} >黄色提醒</Text>
                        <Text style = {{fontSize: 14}} >红色删除</Text>
                    </List>
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
        fontWeight: 'bold',
        marginLeft: 15
    },
    introduction: {
        marginBottom: 20,
        fontSize: 15,
    },
    innerText: {
        fontSize: 15,
        marginBottom: 15,
        marginHorizontal: 15
    },
    leftIcon: {
        padding: 4,
        backgroundColor: '#00e626',
        borderRadius: 5,
        marginRight: 10
    },
    contacts: {
        padding: 4,
        backgroundColor: '#9c9c9c',
        borderRadius: 30,
        marginRight: 15
    }
})
