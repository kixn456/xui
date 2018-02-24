import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet
} from 'react-native';
import Header from '../../component/header';
import BackIcon from '../../common/BackArrow';
import DrawerLayout from '../../component/drawerLayout';
import Button from '../../component/button';
import List from '../../component/list';

export default class DrawerLayoutExample extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {navigate, goBack} = this.props.navigation;
        var navigationView = (
            <View style={{flex: 1, backgroundColor: '#fff'}} >
                <List title = {'前往商城'} />
                <List title = {'个人中心'} />
                <List title = {'设置'} />
                <Text style={{margin: 10, fontSize: 15, textAlign: 'left'}}>I'm in the Drawer!</Text>
            </View>
          );
        return (
            <View style = {{flex: 1}} >
                <Header
                    title = {'抽屉'}
                    leftBtn = {<BackIcon goBack = {goBack} />}
                    containerStyle = {{backgroundColor: '#f0eded'}}
                    titleStyle = {{color: '#333333'}}
                />

                <DrawerLayout
                    drawerWidth = {200}
                    renderNavigationView = {() => navigationView}
                    onDrawerOpen = {() => console.log('opend')}
                    onDrawerClose = {() => console.log('closed')}
                    onDrawerSlide = {() => console.log('sliding')}
                    ref = {drawer => this.Drawer = drawer}
                >
                    <View style = {styles.container} >
                        <Text style = {styles.introduction} >一个纯JavaScript实现的抽屉组件，具有和React Native的DrawerLayoutAndroid相同的api。我们舍弃了使用率较低的onDrawerStateChanged，并将所有枚举类型单独提取出来。</Text>
                        <Button buttonColor = {'#108EE9'} onPress = {() => this.Drawer.openDrawer()} >打开抽屉</Button>
                    </View>
                </DrawerLayout>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 15
    },
    title: {
        marginVertical: 20,
        color: '#333333',
        fontSize: 16,
        fontWeight: 'bold'
    },
    introduction: {
        marginVertical: 15,
        fontSize: 15,
        lineHeight: 25
    },
    innerText: {
        fontSize: 15,
        marginBottom: 15,
        marginHorizontal: 15
    }
})
