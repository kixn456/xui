import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet
} from 'react-native';
import Header from '../../component/header';
import BackIcon from '../../common/BackArrow';
import ActionSheet from '../../component/actionSheet';
import Button from '../../component/button';

export default class ActionSheetExample extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const {navigate, goBack} = this.props.navigation;
        const options = ['option1','option2','option3'];
        return (
            <View style = {{flex: 1}} >
                <Header
                    title = {'动作面板'}
                    leftBtn = {<BackIcon goBack = {goBack} />}
                    containerStyle = {{backgroundColor: '#f0eded'}}
                    titleStyle = {{color: '#333333'}}
                />

                <Text style = {styles.title} >基本</Text>
                <Button
                    onPress = {() => this.ActionSheet1.show()}
                    buttonStyle = {{marginHorizontal: 15}}
                >打开动作面板</Button>
                <ActionSheet
                    ref = {o => this.ActionSheet1 = o}
                    options = {options}
                    showCancelButton = {false}
                    backdropPressToClose = {true}
                    onPress = {(index) => this.ActionSheet1.close()}
                />

                <Text style = {styles.title} >标题和取消</Text>
                <Button
                    onPress = {() => this.ActionSheet2.show()}
                    buttonStyle = {{marginHorizontal: 15}}
                    buttonColor = {'#108EE9'}
                >打开动作面板</Button>
                <ActionSheet
                    ref = {o => this.ActionSheet2 = o}
                    options = {options}
                    title = {'标题和取消'}
                    onPress = {(index) => alert(options[index])}
                />

                <Text style = {styles.title} >自定义组件</Text>
                <Button
                    onPress = {() => this.ActionSheet3.show()}
                    buttonStyle = {{marginHorizontal: 15}}
                    buttonColor = {'#01DD9B'}
                >打开动作面板</Button>
                <ActionSheet
                    ref = {o => this.ActionSheet3 = o}
                    options = {[
                        'option1',
                        <Text style = {{color: '#108EE9', fontSize: 18}} >{'option2'}</Text>,
                        <Text style = {{color: '#ff4f4f', fontSize: 20}} >{'删除'}</Text>
                    ]}
                    title = {'自定义组件'}
                />
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
