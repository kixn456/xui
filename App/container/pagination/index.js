import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    ScrollView
} from 'react-native';
import Header from '../../component/header';
import BackIcon from '../../common/BackArrow';
import Pagination from '../../component/pagination';

export default class PaginationExample extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pageNum: 3
        }
    }

    render() {
        const {navigate, goBack} = this.props.navigation;
        const opacity = this.state.disabled ? 0.6 : 1;
        return (
            <View style = {{flex: 1}} >
                <Header
                    title = {'分页'}
                    leftBtn = {<BackIcon goBack = {goBack} />}
                    containerStyle = {{backgroundColor: '#f0eded'}}
                    titleStyle = {{color: '#333333'}}
                />
                <ScrollView>
                    <View style = {styles.container} >
                        <Text style = {styles.title} >基本</Text>
                        <Pagination pageTotal = {5} />
                        <Text style = {styles.title} >默认值</Text>
                        <Pagination defaultPageNum = {2} pageTotal = {5} />
                        <Text style = {styles.title} >受控分页</Text>
                        <Text style = {styles.introduction} >指定pageNum属性，当前页码将由该属性决定，您需要在onChange中手动修改</Text>
                        <Pagination pageNum = {this.state.pageNum} pageTotal = {5} onChange = {(pageNum) => this.setState({pageNum})} />
                        <Text style = {styles.title} >隐藏页码或按钮</Text>
                        <Pagination pageTotal = {5} hidePage />
                        <Pagination pageTotal = {5} hideButton />
                        <Text style = {styles.title} >禁用</Text>
                        <Pagination disabled />
                        <Text style = {styles.title} >自定义样式</Text>
                        <Pagination
                            pageTotal = {5}
                            previous = {'Previous'}
                            next = {'next'}
                            activePageColor = {'#108EE9'}
                            pageColor = {'#333333'}
                            previousBtnStyle = {{backgroundColor: '#108EE9', borderWidth: 0}}
                            previousTextStyle = {{color: 'white'}}
                            nextBtnStyle = {{backgroundColor: '#108EE9', borderWidth: 0}}
                            nextTextStyle = {{color: 'white'}}
                        />
                    </View>
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
        marginBottom: 20,
        fontSize: 15,
    },
    innerText: {
        fontSize: 15,
        marginBottom: 15,
        marginHorizontal: 15
    }
})
