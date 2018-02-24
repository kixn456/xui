import React, {Component} from 'react';
import {
    View,
    Text,
    StyleSheet
} from 'react-native';

export class Home extends Component{
    componentDidMount(){
        //alert('Home did mount')
    }
    render(){
        console.log('home render');
        return (
            <View style = {styles.container} >
                <Text style = {styles.textStyle} >首页</Text>
                <Text style = {styles.instroduction} >TabBar组件的子元素只能是TabBar.Item</Text>
                <Text style = {styles.instroduction} >TabBar.Item的子元素为自己定制的页面</Text>
            </View>
        )
    }
}

export class Active extends Component{
    componentDidMount(){
        //alert('Discovery did mount')
    }
    render(){
        console.log('active render');
        return (
            <View style = {styles.container} >
                <Text style = {styles.textStyle} >激活</Text>
                <Text style = {styles.instroduction} >请为每一个TabBar.Item设置name属性，在changeTab的回调函数中将会把激活页的name返回给您，您可以根据该返回值更改selected属性以实现页面切换。</Text>
            </View>
        )
    }
}

export class Timer extends Component{
    constructor(props){
        super(props);
        this.state = {
            count: 0
        }
    }
    componentDidMount(){
        this.timer = setInterval(() => {
            this.setState({
                count: this.state.count + 1
            })
        }, 1000)
    }
    componentWillUnmount(){
        clearInterval(this.timer);
    }
    render(){
        console.log('timer render');
        return (
            <View style = {styles.container} >
                <Text style = {styles.textStyle} >定时器</Text>
                <Text style = {styles.instroduction} >每个页面只会在第一次加载时触发内部render</Text>
                <Text style = {styles.instroduction} >如果您的页面里含有定时器在不断刷新页面，则该页面无论是否处于激活态，始终会不断render</Text>
                <Text>{this.state.count}</Text>
            </View>
        )
    }
}

export class Settings extends Component{
    componentDidMount(){
        //alert('My did mount')
    }
    render(){
        console.log('settings render');
        return (
            <View style = {styles.container} >
                <Text style = {styles.textStyle} >测试页面</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 15
    },
    textStyle: {
        fontSize: 20
    },
    instroduction: {
        textAlign: 'center',
        fontSize: 16,
        lineHeight: 26
    }
})
