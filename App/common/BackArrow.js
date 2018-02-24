import React, { Component } from 'react';
import {
    Image,
    TouchableOpacity,
    StyleSheet
} from 'react-native';
import Icon from '../component/icon';

export default BackIcon = ({goBack, color}) => {
    const _color = color ? color : '#333333';
    return (
        <TouchableOpacity style = {styles.container} onPress = {() => goBack()}>
            {/*<Image source = {require('../image/back.png')} style = {styles.icon} />*/}
            <Icon name = {'ios-arrow-back'} size = {22} color = {_color} />
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    icon: {
        width: 18,
        height: 18,
        tintColor: 'white'
    },
    container: {
        width: 40,
        height: 40,
        justifyContent: 'center'
    }
})
