import React, {Component} from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet
} from 'react-native';
import Badge from '../component/badge';
import Icon from '../component/icon';
import Button from '../component/button';
import Card from '../component/card';
import CheckBox from '../component/checkbox';
import Collapse from '../component/collapse';
import DrawerLayout from '../component/drawerLayout';
import Flex from '../component/flex';
import Header from '../component/header';
import List from '../component/list';
import Radio from '../component/radio';
import Search from '../component/search';
import TabBar from '../component/tabBar';

export default class Example extends Component{
    constructor(props) {
        super(props);
        this.state = {};
    }
    renderNavigationView() {
        return null;
    }
    render() {
        return (
            <View style = {{flex: 1}} >
                <Header title = {'x-ui'} />
                <DrawerLayout
                    drawerWidth = {200}
                    renderNavigationView = {() => this.renderNavigationView()}
                >

                </DrawerLayout>

            </View>
        )
    }
}

const styles = StyleSheet.create({

})
