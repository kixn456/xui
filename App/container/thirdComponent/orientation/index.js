import React, {Component} from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity
} from 'react-native';
import DeviceInfo from 'react-native-device-info';
import Header from '../../../component/header';
import BackIcon from '../../../common/BackArrow';
import utils from '../../../common/util';
import {openUrl} from '../../../common/function';
import Button, {BUTTON_TYPE} from '../../../component/button';
import Orientation from 'react-native-orientation';

export default class RNOrientation extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {navigae, goBack} = this.props.navigation;
        return (
            <View style = {{flex: 1}} >
                <Header containerStyle = {{backgroundColor: '#108EE9'}} title = {'react-native-orientation'} leftBtn = {<BackIcon goBack = {goBack} color = {'white'} />} />
                <View style = {styles.container} >
                    <Text style = {styles.introduction} >Listen to device orientation changes in React Native applications and programmatically set preferred orientation on a per screen basis. Works on both Android and iOS.</Text>
                    <TouchableOpacity  style = {{marginTop: 15}} onPress = {() => openUrl('https://github.com/yamill/react-native-orientation')} >
                        <Text style = {styles.urlStyle} >github地址</Text>
                    </TouchableOpacity>
                    <View style = {{flexDirection: 'row', marginTop: 20}} >
                        <Button
                            inline
                            type = {BUTTON_TYPE.GHOST}
                            onPress = {() => Orientation.lockToPortrait()}
                        >锁定竖屏</Button>
                        <Button
                            inline
                            type = {BUTTON_TYPE.GHOST}
                            buttonStyle = {{marginLeft: 15}}
                            buttonColor = {'#018EE9'}
                            onPress = {() => Orientation.lockToLandscape()}
                        >锁定横屏</Button>
                    </View>
                    <View style = {{flexDirection: 'row', marginTop: 15}} >
                        <Button
                            inline
                            type = {BUTTON_TYPE.GHOST}
                            buttonColor = {'#01DD9B'}
                            onPress = {() => Orientation.lockToLandscapeLeft()}
                        >锁定左横屏</Button>
                        <Button
                            inline
                            type = {BUTTON_TYPE.GHOST}
                            buttonStyle = {{marginLeft: 15}}
                            buttonColor = {'#01b3ad'}
                            onPress = {() => Orientation.lockToLandscapeRight()}
                        >锁定右横屏</Button>
                    </View>
                    <View style = {{marginTop: 15}} >
                        <Button
                            inline
                            type = {BUTTON_TYPE.GHOST}
                            buttonColor = {'#c4af00'}
                            onPress = {() => Orientation.unlockAllOrientations()}
                        >解除所有锁定</Button>
                    </View>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 15,
        paddingVertical: 20
    },
    introduction: {
        fontSize: 16,
        textAlign: 'center',
        color: utils.theme.minorColor
    },
    urlStyle: {
        fontSize: 15,
        color: '#018EE9'
    }
})
