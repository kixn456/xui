import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    Image,
    ScrollView,
    TouchableOpacity
} from 'react-native';
import Header from '../../component/header';
import BackIcon from '../../common/BackArrow';
import IndexList from '../../component/indexList';

export default class IndexListExample extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {navigate, goBack} = this.props.navigation;
        return (
            <View style = {{flex: 1}} >
                <Header title = {'卡片'} leftBtn = {<BackIcon goBack = {goBack} />} />
                <IndexList changeCountry = {() => {}} />
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
    introduction: {
        marginHorizontal: 15,
        fontSize: 15,
        marginTop: 20
    },
    innerText: {
        fontSize: 15,
        marginBottom: 15,
        marginHorizontal: 15
    }
})