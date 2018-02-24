import React, {Component} from 'react';
import {
    View,
    ScrollView
} from 'react-native';
import Header from '../../component/header';
import BackIcon from '../../common/BackArrow';
import TimeLine from '../../component/timeLine';

export class Basic extends Component{
    constructor(props){
        super(props);
    }
    render(){
        const {navigate, goBack} = this.props.navigation;
        return (
            <View>
                <Header title = {'基本'} leftBtn = {<BackIcon goBack = {goBack} />} />
                <ScrollView contentContainerStyle = {{marginTop: 15, paddingHorizontal: 15}} >
                    <TimeLine data = {
                        [
                            {title: '基本', content: '这是一个最基本的时间轴组件使用方法，仅仅配置了data属性。'},
                            {title: 'data属性', content: 'data为一个对象数组，每个对象均包含title和content，代表时间轴右侧容器的标题和内容。'},
                            {title: '自适应', content: '时间轴的时间线会根据容器的高度自动填充。这是一个很长的内容这是一个很长的内容这是一个很长的内容这是一个很长的内容这是一个很长的内容这是一个很长的内容。这是一个很长的内容这是一个很长的内容这是一个很长的内容。'},
                            {title: 'ScrollView', content: '时间轴内部没有使用滚动视图，这是为了防止出现滚动嵌套。因此，当时间轴超过屏幕宽度时，请用ScrollView将其包裹。'}
                        ]
                    }
                    />
               </ScrollView>
            </View>
        )
    }
}

export class LeftTitle extends Component{
    constructor(props){
        super(props);
    }
    render(){
        const {navigate, goBack} = this.props.navigation;
        return (
            <View style = {{flex: 1}} >
                <Header title = {'左侧标题'} leftBtn = {<BackIcon goBack = {goBack} />} />
                <ScrollView contentContainerStyle = {{paddingTop: 15, paddingHorizontal: 15}} >
                    <TimeLine data = {
                        [
                            {title: '左侧标题', content: '您可以在data属性中添加header配置项，为每一个时间点添加左侧标题。', header: '12:30'},
                            {title: '偏移', content: '由于左侧标题长短不一会导致时间轴错乱，请务必配置headerWidth属性指定标题容器的宽度，它的默认值为0，此时左侧标题不占据任何空间。'},
                            {title: '分割线', content: '通过将showSeparator设为true来显示分割线。', header: '13:20'}
                        ]
                    }
                        headerWidth = {55}
                        showSeparator
                    />
               </ScrollView>
            </View>
        )
    }
}

export class CustomStyle extends Component{
    constructor(props){
        super(props);
    }
    render(){
        const {navigate, goBack} = this.props.navigation;
        return (
            <View style = {{flex: 1}} >
                <Header title = {'自定义样式'} leftBtn = {<BackIcon goBack = {goBack} />} />
                <ScrollView>
                    <TimeLine data = {
                        [
                            {title: '自定义左侧标题样式', content: '配置headerContainerStyle和headerTextStyle来修改左侧标题容器和字体的样式。', header: '12:30', lineColor: '#2399DA', circleColor: '#2399DA'},
                            {title: '时间轴颜色', content: '配置timeLineColor来修改时间轴的时间线和时间点的颜色，配置timeLineBackgroundColor来修改时间轴的整体背景色。您还可以在data中设置lineColor和circleColor设置每一个时间点、时间线的颜色。', header: '13:20'},
                            {title: '右侧标题与内容', content: '配置itemContainerStyle、itemTitleStyle、itemContentStyle来修改右侧容器、标题、内容的样式。', header: '14:15'},
                            {title: '嵌套时间轴', content:
                                <TimeLine
                                    data = {[{title:'嵌套', content: '这是一个嵌套时间轴，timeLineSize为10'}, {title:'嵌套', content: '这是一个嵌套时间轴，timeLineSize为10'}]}
                                    timeLineSize = {9}
                                    timeLineContainerStyle = {{marginTop: 5}}
                                    showSeparator
                                />,
                                header: '17:50',
                                lineColor: '#2399DA'
                            },
                            {title: '内嵌圆', content: '将innerCircle设置为true即可显示时间点的内嵌圆，您还可以配置innerCircleColor来修改其颜色。', header: '18:23', circleColor: '#2399DA'},
                        ]
                    }
                        headerWidth = {55}
                        headerContainerStyle = {{backgroundColor: '#FD9797'}}
                        headerTextStyle = {{color: 'white'}}
                        timeLineColor = {'#199687'}
                        timeLineBackgroundColor = {'white'}
                        showSeparator
                        timeLineContainerStyle =  {{padding: 15}}
                        itemContainerStyle = {{backgroundColor: '#BBDAFF', padding: 10}}
                        innerCircle
                    />
               </ScrollView>
            </View>
        )
    }
}

export class UseAnimation extends Component{
    constructor(props){
        super(props)
    }
    render(){
        const {navigate, goBack} = this.props.navigation;
        return (
            <View style = {{flex: 1}} >
                <Header 
                    title = {'使用动画'} 
                    leftBtn = {<BackIcon goBack = {goBack} />} 
                    containerStyle = {{backgroundColor: '#e4e1e1'}}
                    titleStyle = {{color: '#333333'}}
                />
                <ScrollView>
                    <TimeLine data = {
                        [
                            {title: '使用动画', content: '由于绘制时间轴需要事先知道容器的高度，因此时间轴的初始化是在布局完成后才开始的。您可能会看到有闪烁的现象，使用useAnimation开启动画效果进行视觉优化。', header: '12:30'},
                            {title: '背景色', content: '您可以配置maskColor来修改遮罩层的背景色，当其为transparent时将会失效。建议将timeLineBackgroundColor和maskColor设置为相同颜色。', header: '13:20'},
                            {title: '右侧标题与内容', content: '配置itemContainerStyle、itemTitleStyle、itemContentStyle来修改右侧容器、标题、内容的样式。', header: '14:15'},
                            {title: '内嵌圆', content: '将innerCircle设置为true即可显示时间点的内嵌圆，您还可以配置innerCircleColor来修改其颜色。', header: '18:23'},
                        ]
                    }
                        headerWidth = {55}
                        headerContainerStyle = {{backgroundColor: '#FD9797'}}
                        headerTextStyle = {{color: 'white'}}
                        timeLineColor = {'#199687'}
                        timeLineBackgroundColor = {'white'}
                        showSeparator
                        timeLineContainerStyle =  {{padding: 15}}
                        itemContainerStyle = {{backgroundColor: '#BBDAFF', padding: 10}}
                        innerCircle
                        useAnimation
                    />
                </ScrollView>
            </View>
        )
    }
}
