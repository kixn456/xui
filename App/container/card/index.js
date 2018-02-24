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
import Card from '../../component/card';

export default class CardExample extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {navigate, goBack} = this.props.navigation;
        return (
            <View style = {{flex: 1}} >
                <Header
                    title = {'卡片'}
                    leftBtn = {<BackIcon goBack = {goBack} />}
                    containerStyle = {{backgroundColor: '#f0eded'}}
                    titleStyle = {{color: '#333333'}}
                />
                <ScrollView>
                    <Text style = {styles.introduction} >简单的卡片组件，包含了Card.Header、Card.Body、Card.Footer三个子组件。规定了基本的样式与布局，您需要手动设置每一个部分的子元素样式。</Text>
                    <Text style = {styles.title} >基本</Text>
                    <Card cardStyle = {{marginHorizontal: 15}} >
                        <Card.Body>
                            <Text>这是一个最简单的卡片使用方法，仅仅使用了Card.Body</Text>
                        </Card.Body>
                    </Card>
                    <Text style = {styles.title} >标题</Text>
                    <Card cardStyle = {{marginHorizontal: 15}} >
                        <Card.Header>
                            <Text>这是一个标题</Text>
                        </Card.Header>
                        <Card.Body>
                            <Text>这是一个同时使用到了Card.Header和Card.Body的卡片。</Text>
                        </Card.Body>
                    </Card>
                    <Text style = {styles.title} >底部</Text>
                    <Card cardStyle = {{marginHorizontal: 15}} >
                        <Card.Header>
                            <Text>这是一个标题</Text>
                        </Card.Header>
                        <Card.Body>
                            <Text>这是一个同时使用到了Card.Header、Card.Body、Card.Footer的卡片。</Text>
                        </Card.Body>
                        <Card.Footer>
                            <Text>底部左侧</Text>
                            <Text>底部右侧</Text>
                        </Card.Footer>
                    </Card>
                    <Text style = {styles.title} >定义样式</Text>
                    <Card cardStyle = {{marginHorizontal: 15, borderRadius: 8}} >
                        <Card.Header>
                            <Text style = {{color: '#333333', fontSize: 16, fontWeight: 'bold'}} >标题</Text>
                        </Card.Header>
                        <Card.Body>
                            <Text style = {{color: '#666666'}} >考虑到卡片的样式因需求的不同而不同，我们没有规定卡片所嵌套的组件的样式，这需要您自己定制。</Text>
                        </Card.Body>
                        <Card.Footer footerStyle = {{paddingVertical: 10}} >
                            <TouchableOpacity>
                                <Text style = {{color: '#68b1ed'}} >喜欢</Text>
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <Text style = {{color: '#68b1ed'}} >更多</Text>
                            </TouchableOpacity>
                        </Card.Footer>
                    </Card>
                    <Text style = {styles.title} >使用图片</Text>
                    <Card cardStyle = {{marginHorizontal: 15, marginBottom: 15}} >
                        <Card.Body>
                            <Image source = {require('../../image/scenery.jpg')} style = {{height: 200}} />
                            <Text style = {{marginTop: 10}} >2018年1月2日</Text>
                            <Text style = {{marginTop: 10, color: '#333333'}} >为了保证图片能够撑满整个卡片宽度，我们对图片样式做了处理，并附加了resizeMode='cover'，您可以修改Image的style和resizeMode属性来覆盖默认设置。</Text>
                        </Card.Body>
                        <Card.Footer footerStyle = {{paddingVertical: 10}} >
                            <TouchableOpacity>
                                <Text style = {{color: '#68b1ed'}} >喜欢</Text>
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <Text style = {{color: '#68b1ed'}} >更多</Text>
                            </TouchableOpacity>
                        </Card.Footer>
                    </Card>
                </ScrollView>
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
