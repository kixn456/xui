import React, {Component} from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    Image
} from 'react-native';
import Swiper from 'react-native-swiper';
import Header from '../../../component/header';
import BackIcon from '../../../common/BackArrow';
import utils from '../../../common/util';
import {openUrl} from '../../../common/function';

export default class RNSwiper extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const {navigate, goBack} = this.props.navigation;
        return (
            <View style = {{flex: 1}} >
                <Header title = {'react-native-swiper'} containerStyle = {{backgroundColor: '#108EE9'}} leftBtn = {<BackIcon goBack = {goBack} color = {'white'} />} />
                <Swiper showsButtons autoplay >
                    <View style = {styles.wrapperContainer} >
                        <Image source = {require('../../../image/swiper.png')} />
                        <Text style = {[styles.introduction, {marginTop: 15}]} >The best Swiper component for React Native.</Text>
                        <TouchableOpacity  style = {{marginTop: 15}} onPress = {() => openUrl('https://github.com/leecade/react-native-swiper')} >
                            <Text style = {styles.urlStyle} >github地址</Text>
                        </TouchableOpacity>
                    </View>
                    <View style = {[styles.wrapperContainer, {backgroundColor: '#68b1ed'}]} >
                        <Text style = {styles.pureScene} >A pure scene</Text>
                    </View>
                    <View style = {styles.wrapperContainer} >
                        <Image source = {require('../../../image/swiper-bk.jpg')} resizeMode = {'contain'} style = {{width: utils.window.width}} />
                    </View>
                </Swiper>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    wrapperContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    introduction: {
        fontSize: 16,
        textAlign: 'center',
        color: utils.theme.minorColor
    },
    urlStyle: {
        fontSize: 15,
        color: '#018EE9'
    },
    pureScene: {
        color: 'white',
        fontSize: 25,
        fontWeight: 'bold'
    }
})
