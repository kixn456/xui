import React, {Component} from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity
} from 'react-native';
import Picker from 'react-native-picker';
import Header from '../../../component/header';
import BackIcon from '../../../common/BackArrow';
import utils from '../../../common/util';
import {openUrl} from '../../../common/function';
import Button, {BUTTON_TYPE} from '../../../component/button';

export default class RNPicker extends Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        Picker.init({
            pickerData: [[1,2,3,4], [5,6,7,8]],
            selectedValue: [1, 5]
        });
    }
    render() {
        const {navigae, goBack} = this.props.navigation;
        return (
            <View style = {{flex: 1}} >
                <Header containerStyle = {{backgroundColor: '#108EE9'}} title = {'react-native-picker'} leftBtn = {<BackIcon goBack = {goBack} color = {'white'} />} />
                <View style = {styles.container} >
                    <Text style = {styles.introduction} >A 3D Picker for cross-platform support.</Text>
                    <TouchableOpacity  style = {{marginTop: 15}} onPress = {() => openUrl('https://github.com/beefe/react-native-picker')} >
                        <Text style = {styles.urlStyle} >github地址</Text>
                    </TouchableOpacity>
                    <View style = {{flexDirection: 'row', marginTop: 20}} >
                        <Button
                            inline
                            type = {BUTTON_TYPE.GHOST}
                            onPress = {() => Picker.show()}
                        >打开Picker</Button>
                        <Button
                            inline
                            type = {BUTTON_TYPE.GHOST}
                            buttonColor = {'#018EE9'}
                            buttonStyle = {{marginLeft: 15}}
                            onPress = {() => Picker.hide()}
                        >关闭Picker</Button>
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
