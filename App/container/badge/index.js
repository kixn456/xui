import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet
} from 'react-native';
import Header from '../../component/header';
import BackIcon from '../../common/BackArrow';
import Badge from '../../component/badge';

export default class BadgeExample extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const {navigate, goBack} = this.props.navigation;
        const containerBox = {
            width: 30,
            height: 30,
            backgroundColor: 'gray'
        }
        return (
            <View style = {{flex: 1}} >
                <Header
                    title = {'徽标'}
                    containerStyle = {{backgroundColor: '#f0eded'}}
                    leftBtn = {<BackIcon goBack = {goBack} />}
                    titleStyle = {{color: '#333333'}}
                />
                <Text style = {styles.title} >基本</Text>
                <View style = {styles.container} >
                    <Badge num = {1} style = {{marginRight: 30}} >
                        <View style = {containerBox} ></View>
                    </Badge>
                    <Badge num = {55} style = {{marginRight: 30}} >
                        <View style = {containerBox} ></View>
                    </Badge>
                    <Badge num = {999} style = {{marginRight: 30}} >
                        <View style = {containerBox} ></View>
                    </Badge>
                </View>
                <Text style = {styles.title} >独立</Text>
                <View style = {styles.container} >
                    <Badge num = {99} style = {{marginRight: 30}} />
                    <Badge text = {'new'} defaultBackColor = {'#21b68a'} style = {{marginRight: 30}} />
                    <Badge text = {'减'} defaultBackColor = {'#f96268'} style = {{marginRight: 30}} />
                    <Badge text = {'券'} defaultBackColor = {'#f19736'} />
                </View>
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
        flexDirection: 'row',
        paddingHorizontal: 15
    }
})
