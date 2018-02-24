/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    DeviceEventEmitter
} from 'react-native';
import Main from './App/index';
import Navigator from './App/navigator';
import {componentConfig} from './App/config/componentConfig';
import Toast from './App//component/toast';

export default class App extends Component<{}> {
    componentDidMount() {
        DeviceEventEmitter.addListener('showToast', (config) => {
            this.rootToast.show(config);
        })
    }
    render() {
        return (
            <View style = {{flex: 1}} >
                <Navigator />
                <Toast ref = {toast => this.rootToast = toast} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});
