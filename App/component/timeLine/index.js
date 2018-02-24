import React, {Component} from 'react';
import {
    View,
    Text,
    ART,
    StyleSheet,
    Animated
} from 'react-native';
import PropTypes from 'prop-types';
import utils from '../../common/util';
import {cloneObj} from '../../common/function';

export default class TimeLine extends Component{
/**
 * data: title/content/fill/stroke/header
 * headerWidth为左侧title容器的宽度
 * timeLineSize为时间轴的时间点大小，时间线会根据时间点的大小自动适配
 * 时间轴的默认背景色为透明
 * timeLineColor为时间轴点和时间线的颜色，也可以在data中配置lineColor和circleColor来单独修改某个时间的颜色
 * timeLineContainerStyle为时间轴整体样式
 * itemContainerStyle/itemTitleStyle/itemContentStyle分别代表了右侧容器、标题、内容的样式
 * headerContainerStyle/headerTextStyle为左侧标题容器和标题文本的样式
 * innerCircle为是否显示内部圆，通过innerCircleColor更改其背景色
 * showSeparator为是否在右侧容器底部显示下划线
 * separatorColor为下划线的颜色
 * useAnimation为是否使用动画，时间轴在加载的时候由于要计算高度因此为闪一下，为了防止该现象可以使用动画效果
 * maskColor为动画使用的遮罩层的背景色，注意，maskColor为transparent时没有任何效果，建议将maskColor和timeLineBackgroundColor设置成相同值
*/
    static defaultProps = {
        data: [],
        headerWidth: 0,
        timeLineSize: 12,
        timeLineBackgroundColor: 'transparent',
        timeLineColor: utils.theme.mainColor,
        timeLineContainerStyle: {},
        itemContaienrStyle: {},
        itemTitleStyle: {},
        itemContentStyle: {},
        headerContainerStyle: {},
        headerTextStyle: {},
        innerCircle: false,
        innerCircleColor: 'white',
        showSeparator: false,
        separatorColor: '#98989D',
        useAnimation: false,
        maskColor: 'white'
    }
    static propTypes = {
        data: PropTypes.array,
        headerWidth: PropTypes.number,
        timeLineSize: PropTypes.number,
        timeLineBackgroundColor: PropTypes.string,
        timeLineColor: PropTypes.string,
        timeLineContainerStyle: PropTypes.object,
        itemContaienrStyle: PropTypes.object,
        itemTitleStyle: PropTypes.object,
        itemContentStyle: PropTypes.object,
        headerContainerStyle: PropTypes.object,
        headerTextStyle: PropTypes.object,
        innerCircle: PropTypes.bool,
        innerCircleColor: PropTypes.string,
        showSeparator: PropTypes.bool,
        separatorColor: PropTypes.string,
        useAnimation: PropTypes.bool,
        maskColor: PropTypes.string
    }
    constructor(props){
        super(props);
        this.state = {
            dataLayout: [],
            maskHeight: new Animated.Value(0),
            showMask: true
        }
    }
    componentWillMount(){
        let initLayout = [];
        this.props.data.map(() => {
            initLayout.push({
                x: 0,
                y: 0,
                width: this.props.timeLineSize * 2,
                height: 0
            })
        })
        this.setState({
            dataLayout: initLayout
        })
    }
    renderCircle(x, y, arcX, arcY, radius, color){
        const circle = new ART.Path()
        .moveTo(x, y)
        .arc(arcX, arcY, radius)
        .arc(arcX, -arcY, radius)
        .close();
        const _color = color ? color : this.props.timeLineColor;
        return <ART.Shape d = {circle} stroke = {_color} fill = {_color} strokeWidth = {0} />
    }
    renderLine(x, y, width, height, color){
        const line = new ART.Path()
        .moveTo(x - width, y)
        .lineTo(x + width / 2, y)
        .lineTo(x + width / 2, y + height)
        .lineTo(x - width, y + height)
        .close();
        const _color = color ? color : this.props.timeLineColor;
        return <ART.Shape d = {line} stroke = {_color} fill = {_color} strokeWidth = {0} />
    }
    measureLayout(e, index){
        let _dataLayout = cloneObj(this.state.dataLayout);
        const layout = e.nativeEvent.layout;
        _dataLayout[index] = {
            x: layout.x,
            y: layout.y,
            height: layout.height,
            width: this.props.timeLineSize * 2
        }
        this.setState({
            dataLayout: _dataLayout
        }, () => {
            this.props.useAnimation &&
                Animated.timing(this.state.maskHeight, {
                    toValue: utils.window.height,
                    duration: 500
                }).start(() => {
                    if(this.state.maskHeight._value == utils.window.height){
                        this.setState({
                            showMask: false
                        })
                    }
                })
        })
    }
    renderData(){
        return this.props.data.map((item, index) => {
            const headerPadding = this.props.headerWidth == 0 || item.header == null ? 0 : 5;
            const hiddenHeader = item.header ? {alignItems: 'center'} : {alignItems: 'flex-end', backgroundColor: 'transparent'}
            const size = this.props.timeLineSize;
            return (
                <View key = {index} style = {styles.container}  onLayout = {(e) => this.measureLayout(e, index)} >
                    <View>
                        <View style = {[styles.header, {width: this.props.headerWidth, padding: headerPadding}, this.props.headerContainerStyle, hiddenHeader]} >
                            <Text style = {[styles.headerText, this.props.headerTextStyle]} >{item.header}</Text>
                        </View>
                    </View>
                    <View style = {{zIndex: 999}} >
                    <ART.Surface width = {size * 2} height = {this.state.dataLayout[index].height} >
                        {
                            index != this.props.data.length - 1 ?
                                this.renderLine(size, size, size / 6, this.state.dataLayout[index].height, item.lineColor) : null
                        }
                        {
                            this.renderCircle(size, 0, 0, size * 2, size, item.circleColor)
                        }

                        {
                            this.props.innerCircle ? this.renderCircle(size, size * 0.25, 0, size * 1.5, size * 0.75, this.props.innerCircleColor) : null
                        }
                    </ART.Surface>
                    </View>

                    <View style = {{flex: 1}} >
                        <View style = {[styles.itemContainer, {flex: 1}, this.props.itemContainerStyle]} >
                            <Text style = {[styles.itemTitle, this.props.itemTitleStyle]} >{item.title}</Text>
                            {
                                typeof item.content == 'string' ?
                                <Text style = {[{fontSize: 15}, this.props.itemContentStyle]} >{item.content}</Text>:
                                <View>
                                    {item.content}
                                </View>
                            }
                        </View>
                        {
                            this.props.showSeparator ? <View style = {[styles.separator, {backgroundColor: this.props.separatorColor}]} ></View> : null
                        }
                    </View>
                </View>
            )
        })
    }
    render(){
        return (
            <View style = {[{backgroundColor: this.props.timeLineBackgroundColor}, this.props.timeLineContainerStyle]} >
                {this.renderData()}
                {
                    this.props.useAnimation && this.state.showMask ?
                        <Animated.View style = {[styles.mask, {backgroundColor: this.props.maskColor, transform: [{translateY: this.state.maskHeight}]}]}></Animated.View>: null
                }
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
    },
    itemContainer: {
        minHeight: 50,
        margin: 15,
        padding: 0,
        borderRadius: 10
    },
    itemTitle: {
        fontWeight: 'bold',
        fontSize: 18,
        color: utils.theme.minorColor,
        includeFontPadding: false
    },
    header: {
        borderRadius: 20,
        marginRight: 10
    },
    headerText: {
        fontSize: 15,
        color: utils.theme.minorColor
    },
    separator: {
        height: 1,
        flex: 1,
        marginHorizontal: 15
    },
    mask: {
        position: 'absolute',
        width: utils.window.width,
        height: utils.window.height,
    }
})
