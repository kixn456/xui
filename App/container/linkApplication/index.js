import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet
} from 'react-native';
import Header from '../../component/header';
import BackIcon from '../../common/BackArrow';
import Button, {BUTTON_TYPE} from '../../component/button';
import LinkApplication, {SCHEME} from '../../component/linkApplication';

export default class LinkApplicationExample extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const {navigate, goBack} = this.props.navigation;
        const options = ['option1','option2','option3'];
        return (
            <View style = {{flex: 1}} >
                <Header
                    title = {'唤起应用'}
                    leftBtn = {<BackIcon goBack = {goBack} />}
                    containerStyle = {{backgroundColor: '#f0eded'}}
                    titleStyle = {{color: '#333333'}}
                />

                <Text style = {styles.introduction} >基于Linking的进一步封装，提供了基本的系统级应用的scheme</Text>
                <View style = {{flexDirection: 'row', marginTop: 20}} >
                    <Button
                        inline
                        type = {BUTTON_TYPE.GHOST}
                        buttonStyle = {{marginLeft: 15}}
                        onPress = {() => LinkApplication.canOpenURL(SCHEME.SMS).then(can => alert(can))}
                    >能否唤起短息</Button>
                    <Button
                        inline
                        type = {BUTTON_TYPE.GHOST}
                        buttonStyle = {{marginLeft: 15}}
                        buttonColor = {'#108EE9'}
                        onPress = {() => LinkApplication.openURL(SCHEME.SMS, '10086')}
                    >唤起短信</Button>
                    <Button
                        inline
                        type = {BUTTON_TYPE.GHOST}
                        buttonStyle = {{marginLeft: 15}}
                        buttonColor = {'#01DD9B'}
                        onPress = {() => LinkApplication.getInitialURL().then(url => alert(url))}
                    >获取url</Button>
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
    },
    introduction: {
        marginHorizontal: 15,
        fontSize: 15,
        marginTop: 20
    }
})
