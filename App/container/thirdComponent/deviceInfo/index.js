import React, {Component} from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    ScrollView
} from 'react-native';
import DeviceInfo from 'react-native-device-info';
import Header from '../../../component/header';
import BackIcon from '../../../common/BackArrow';
import utils from '../../../common/util';
import {openUrl} from '../../../common/function';
import Flex from '../../../component/flex';

export default class RNDeviceInfo extends Component {
    constructor(props) {
        super(props);
    }
    renderDeviceInfo() {
        const flexItemStyle = {
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'row'
        };
        return [
            {
                name: '应用名称',
                function: DeviceInfo.getApplicationName
            },
            {
                name: '设备品牌',
                function: DeviceInfo.getBrand
            },
            {
                name: '当前国家',
                function: DeviceInfo.getDeviceCountry
            },
            {
                name: '设备ID',
                function: DeviceInfo.getDeviceId
            },
            {
                name: '当前语言',
                function: DeviceInfo.getDeviceLocale
            },
            {
                name: '设备名称',
                function: DeviceInfo.getDeviceName
            },
            {
                name: '生产商',
                function: DeviceInfo.getManufacturer
            },
            {
                name: '应用可读版本',
                function: DeviceInfo.getReadableVersion
            },
            {
                name: '系统名称',
                function: DeviceInfo.getSystemName
            },
            {
                name: '系统版本',
                function: DeviceInfo.getSystemVersion
            },
            {
                name: '当前时区',
                function: DeviceInfo.getTimezone
            },
            {
                name: '设备UID',
                function: DeviceInfo.getUniqueID
            },
            {
                name: '应用版本',
                function: DeviceInfo.getVersion
            },
            {
                name: '24小时制',
                function: DeviceInfo.is24Hour
            },
            {
                name: '模拟器',
                function: DeviceInfo.isEmulator
            },
            {
                name: '平板电脑',
                function: DeviceInfo.isTablet
            }
        ].map((item, index) => {
            return (
                <Flex key = {index} flexStyle = {{marginTop: 15}} >
                    <Flex.Item flexItemStyle = {flexItemStyle} >
                        <Text>{item.name}</Text>
                    </Flex.Item>
                    <Flex.Item flexItemStyle = {flexItemStyle} >
                        <Text>{item.function() + ''}</Text>
                    </Flex.Item>
                </Flex>
            )
        })
    }
    render() {
        const {navigate, goBack} = this.props.navigation;
        const flexItemStyle = {
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'row'
        };
        return (
            <View style = {{flex: 1}} >
                <Header containerStyle = {{backgroundColor: '#108EE9'}} title = {'react-native-device-info'} leftBtn = {<BackIcon goBack = {goBack} color = {'white'} />} />
                <ScrollView contentContainerStyle = {styles.container} >
                    <Text style = {styles.introduction} >Device Information for React Native.</Text>
                    <TouchableOpacity  style = {{marginTop: 15, marginBottom: 5}} onPress = {() => openUrl('https://github.com/rebeccahughes/react-native-device-info')} >
                        <Text style = {styles.urlStyle} >github地址</Text>
                    </TouchableOpacity>
                    {this.renderDeviceInfo()}
                </ScrollView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
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
