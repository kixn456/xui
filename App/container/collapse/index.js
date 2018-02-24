import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    ToastAndroid,
    ScrollView
} from 'react-native';
import Header from '../../component/header';
import BackIcon from '../../common/BackArrow';
import Collapse from '../../component/collapse';

export default class CollapseExample extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const {navigate, goBack} = this.props.navigation;
        return (
            <View style = {{flex: 1}} >
                <Header
                    title = {'折叠面板'}
                    leftBtn = {<BackIcon goBack = {goBack} />}
                    containerStyle = {{backgroundColor: '#f0eded'}}
                    titleStyle = {{color: '#333333'}}
                />
                <ScrollView>
                    <Text style = {styles.title} >基本</Text>
                    <Collapse
                        activeKey = {'panel1'}
                    >
                        <Collapse.Panel title = {'标题1'} panelKey = {'panel1'} >
                            <Text style= {styles.panel} >这是一个普通的面板子组件，默认为激活项</Text>
                        </Collapse.Panel>
                        <Collapse.Panel title = {'标题2'} panelKey = {'panel2'} >
                            <Text style= {styles.panel} >这是一个普通的面板子组件</Text>
                        </Collapse.Panel>
                        <Collapse.Panel title = {'标题3'} panelKey = {'panel3'} >
                            <Text style= {styles.panel} >这是一个普通的面板子组件</Text>
                        </Collapse.Panel>
                    </Collapse>

                    <Text style = {styles.title} >手风琴</Text>
                    <Collapse
                        activeKey = {'panel2'}
                        accordion = {true}
                    >
                        <Collapse.Panel title = {'标题1'} panelKey = {'panel1'} >
                            <Text style= {styles.panel} >这是一个手风琴模式的面板子组件</Text>
                        </Collapse.Panel>
                        <Collapse.Panel title = {'标题2'} panelKey = {'panel2'} >
                            <Text style= {styles.panel} >这是一个手风琴模式的面板子组件，默认为激活项</Text>
                        </Collapse.Panel>
                        <Collapse.Panel title = {'标题3'} panelKey = {'panel3'} >
                            <Text style= {styles.panel} >这是一个手风琴模式的面板子组件</Text>
                        </Collapse.Panel>
                    </Collapse>

                    <Text style = {styles.title} >回调</Text>
                    <Collapse
                        accordion = {true}
                        onChange = {(activeKey) => activeKey && ToastAndroid.show(activeKey, ToastAndroid.SHORT)}
                        style = {{marginBottom: 20}}
                    >
                        <Collapse.Panel title = {'标题1'} panelKey = {'panel1'} >
                            <Text style= {styles.panel} >这是一个含有回调函数的手风琴模式的面板子组件</Text>
                        </Collapse.Panel>
                        <Collapse.Panel title = {'标题2'} panelKey = {'panel2'} >
                            <Text style= {styles.panel} >这是一个含有回调函数的手风琴模式的面板子组件</Text>
                        </Collapse.Panel>
                        <Collapse.Panel title = {'标题3'} panelKey = {'panel3'} >
                            <Text style= {styles.panel} >这是一个含有回调函数的手风琴模式的面板子组件</Text>
                        </Collapse.Panel>
                    </Collapse>
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
    panel: {
        marginHorizontal: 15,
        marginVertical: 20
    }
})
