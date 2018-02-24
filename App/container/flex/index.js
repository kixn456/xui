import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    ScrollView
} from 'react-native';
import Header from '../../component/header';
import BackIcon from '../../common/BackArrow';
import Flex from '../../component/flex';

export default class FlexExample extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {navigate, goBack} = this.props.navigation;
        const flexItemStyle = {
            paddingVertical: 20,
            alignItems: 'center'
        }
        return (
            <View style = {{flex: 1}} >
                <Header
                    title = {'栅格'}
                    leftBtn = {<BackIcon goBack = {goBack} />}
                    containerStyle = {{backgroundColor: '#f0eded'}}
                    titleStyle = {{color: '#333333'}}
                />
                <ScrollView>
                    <View style = {styles.container} >
                        <Text style = {[styles.introduction, {marginBottom: 0}]} >封装flexbox布局，提供Flex和Flex.Item组件。您可以在Flex组件上指定对齐方向、折行模式，在Flex.Item上指定占用比例。每个属性的用法与flexbox完全相同，为了更加方便使用，我们规定flexDirection为row，并将flexWrap的默认值修改为wrap。</Text>
                        <Text style = {styles.title} >基本</Text>
                    </View>
                    <Flex flexStyle = {{marginBottom: 15}} >
                        <Flex.Item>
                            <View style = {[styles.flexItemStyle, {backgroundColor: '#ff4f4f'}]} >
                                <Text style = {styles.flexText} >100%</Text>
                            </View>
                        </Flex.Item>
                    </Flex>

                    <Flex flexStyle = {{marginBottom: 15}} >
                        <Flex.Item>
                            <View style = {[styles.flexItemStyle, {backgroundColor: '#108EE9'}]} >
                                <Text style = {styles.flexText} >50%</Text>
                            </View>
                        </Flex.Item>
                        <Flex.Item>
                            <View style = {[styles.flexItemStyle, {backgroundColor: '#4badf3'}]} >
                                <Text style = {styles.flexText} >50%</Text>
                            </View>
                        </Flex.Item>
                    </Flex>

                    <Flex flexStyle = {{marginBottom: 15}} >
                        <Flex.Item>
                            <View style = {[styles.flexItemStyle, {backgroundColor: '#01DD9B'}]} >
                                <Text style = {styles.flexText} >33.33%</Text>
                            </View>
                        </Flex.Item>
                        <Flex.Item>
                            <View style = {[styles.flexItemStyle, {backgroundColor: '#4adbaf'}]} >
                                <Text style = {styles.flexText} >33.33%</Text>
                            </View>
                        </Flex.Item>
                        <Flex.Item>
                            <View style = {[styles.flexItemStyle, {backgroundColor: '#8fdbc4'}]} >
                                <Text style = {styles.flexText} >33.33%</Text>
                            </View>
                        </Flex.Item>
                    </Flex>

                    <Flex flexStyle = {{marginBottom: 15}} >
                        <Flex.Item>
                            <View style = {[styles.flexItemStyle, {backgroundColor: '#01b3ad'}]} >
                                <Text style = {styles.flexText} >25%</Text>
                            </View>
                        </Flex.Item>
                        <Flex.Item>
                            <View style = {[styles.flexItemStyle, {backgroundColor: '#00c8bc'}]} >
                                <Text style = {styles.flexText} >25%</Text>
                            </View>
                        </Flex.Item>
                        <Flex.Item>
                            <View style = {[styles.flexItemStyle, {backgroundColor: '#48d0cb'}]} >
                                <Text style = {styles.flexText} >25%</Text>
                            </View>
                        </Flex.Item>
                        <Flex.Item>
                            <View style = {[styles.flexItemStyle, {backgroundColor: '#75d9d5'}]} >
                                <Text style = {styles.flexText} >25%</Text>
                            </View>
                        </Flex.Item>
                    </Flex>

                    <Flex>
                        <Flex.Item flex = {1} >
                            <View style = {[styles.flexItemStyle, {backgroundColor: '#c4af00'}]} >
                                <Text style = {styles.flexText} >25%</Text>
                            </View>
                        </Flex.Item>
                        <Flex.Item flex = {3} >
                            <View style = {[styles.flexItemStyle, {backgroundColor: '#e1cd20'}]} >
                                <Text style = {styles.flexText} >75%</Text>
                            </View>
                        </Flex.Item>
                    </Flex>

                    <View style = {styles.container} >
                        <Text style = {[styles.introduction, {marginBottom: 0}]} >Flex组件的子组件并不要求必须是Flex.Item，在这种情况下，折行模式、对齐方式将会生效。</Text>
                        <Text style = {styles.title} >折行模式</Text>
                    </View>
                    <Flex flexStyle = {{marginTop: -15}} >
                    {
                        (function() {
                            return [1,2,3,4,5,6,7,8].map((item, index) => {
                                return (
                                    <View key = {index} style = {[styles.wrapStyle, {backgroundColor: '#ff4f4f'}]} >
                                        <Text style = {styles.flexText} >折行</Text>
                                    </View>
                                )
                            })
                        })()
                    }
                    </Flex>

                    <Flex wrap = {'nowrap'} >
                    {
                        (function() {
                            return [1,2,3,4,5,6,7,8].map((item, index) => {
                                return (
                                    <View key = {index} style = {[styles.wrapStyle, {backgroundColor: '#108EE9'}]} >
                                        <Text style = {styles.flexText} >不折行</Text>
                                    </View>
                                )
                            })
                        })()
                    }
                    </Flex>

                    <View style = {styles.container} >
                        <Text style = {styles.title} >对齐方式</Text>
                    </View>
                    <Flex flexStyle = {{marginTop: -15}} >
                    {
                        (function() {
                            return [1,2,3].map((item, index) => {
                                return (
                                    <View key = {index} style = {[styles.wrapStyle, {backgroundColor: '#01DD9B'}]} >
                                        <Text style = {styles.flexText} >左对齐</Text>
                                    </View>
                                )
                            })
                        })()
                    }
                    </Flex>

                    <Flex justify = {'center'} >
                    {
                        (function() {
                            return [1,2,3].map((item, index) => {
                                let lastViewStyle = {};
                                if(index == 2){
                                    lastViewStyle = {marginRight: 0}
                                }
                                return (
                                    <View key = {index} style = {[styles.wrapStyle, lastViewStyle, {backgroundColor: '#01b3ad'}]} >
                                        <Text style = {styles.flexText} >居中对齐</Text>
                                    </View>
                                )
                            })
                        })()
                    }
                    </Flex>

                    <Flex justify = {'flex-end'} >
                    {
                        (function() {
                            return [1,2,3].map((item, index) => {
                                return (
                                    <View key = {index} style = {[styles.wrapStyle, {marginRight: 0, marginLeft: 10}, {backgroundColor: '#c4af00'}]} >
                                        <Text style = {styles.flexText} >右对齐</Text>
                                    </View>
                                )
                            })
                        })()
                    }
                    </Flex>

                    <Flex justify = {'space-between'} >
                    {
                        (function() {
                            return [1,2,3].map((item, index) => {
                                return (
                                    <View key = {index} style = {[styles.wrapStyle, {marginRight: 0}, {backgroundColor: '#d81475'}]} >
                                        <Text style = {styles.flexText} >两侧对齐</Text>
                                    </View>
                                )
                            })
                        })()
                    }
                    </Flex>

                    <Flex justify = {'space-around'} >
                    {
                        (function() {
                            return [1,2,3].map((item, index) => {
                                return (
                                    <View key = {index} style = {[styles.wrapStyle, {marginRight: 0}, {backgroundColor: '#e95921'}]} >
                                        <Text style = {styles.flexText} >均分对齐</Text>
                                    </View>
                                )
                            })
                        })()
                    }
                    </Flex>

                    <Flex justify = {'flex-end'} align = {'flex-end'} flexStyle = {{marginBottom: 20}} >
                    {
                        (function() {
                            return [1,2,3].map((item, index) => {
                                let secondViewStyle = {};
                                if(index == 1){
                                    secondViewStyle = {
                                        height: 20
                                    }
                                }
                                return (
                                    <View key = {index} style = {[styles.wrapStyle, secondViewStyle, {marginLeft: 10, marginRight: 0}, {backgroundColor: '#8c62f9'}]} >
                                        <Text style = {styles.flexText} >修改次轴</Text>
                                    </View>
                                )
                            })
                        })()
                    }
                    </Flex>
                </ScrollView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 15
    },
    title: {
        marginVertical: 20,
        color: '#333333',
        fontSize: 16,
        fontWeight: 'bold'
    },
    introduction: {
        marginVertical: 15,
        fontSize: 15,
        lineHeight: 25
    },
    innerText: {
        fontSize: 15,
        marginBottom: 15,
        marginHorizontal: 15
    },
    flexText: {
        color: 'white',
        fontSize: 16
    },
    flexItemStyle: {
        paddingVertical: 20,
        alignItems: 'center'
    },
    wrapStyle: {
        width: 80,
        height: 40,
        marginTop: 15,
        marginRight: 10,
        justifyContent: 'center',
        alignItems: 'center'
    }
})
