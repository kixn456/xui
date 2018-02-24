import React, {Component} from 'react';
import {
    View,
    Text,
    StyleSheet,
    PanResponder,
    ProgressViewIOS,
    ProgressBarAndroid,
    Platform,
    TouchableOpacity,
    Slider
} from 'react-native';
import utils from '../../common/util';
// const totalWidth = utils.window.width;
// export default class Slider extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             progress: 0
//         }
//         this.watcher = null;
//         this.locationX = null;
//         this._onPanResponderGrant = this._onPanResponderGrant.bind(this);
//         this._onPanResponderMove = this._onPanResponderMove.bind(this);
//         this._onPanResponderRelease = this._onPanResponderRelease.bind(this);
//     }
//     componentWillMount() {
//         this.watcher = PanResponder.create({
//             onStartShouldSetPanResponder: () => true,
//             onPanResponderGrant: this._onPanResponderGrant,
//             onPanResponderMove: this._onPanResponderMove,
//             onPanResponderRelease: this._onPanResponderRelease
//         });
//     }
//     _onPanResponderGrant(e, gestureState) {
//         let touchPoinX = e.nativeEvent.locationX;
//         let progress;
//         if(touchPoinX < 20) progress = 0;
//         else{
//             if(touchPoinX > (this.props.width)) progress = 1;
//             else{
//                 progress = (touchPoinX - 10) / (this.props.width - 20);
//             }
//         }
//         this.setState({progress});
//     }
//     _onPanResponderMove(e, gestureState) {
//         let touchPoinX = e.nativeEvent.locationX;
//         console.log(e.nativeEvent.locationX)
//         let progress;
//         if(touchPoinX < 20) progress = 0;
//         else{
//             if(touchPoinX > this.props.width) progress = 1;
//             else progress = (touchPoinX - 20) / (this.props.width - 20);
//         }
//         this.setState({progress});
//     }
//     _onPanResponderRelease(e, gestureState) {
//         this.localX = e.nativeEvent.locationX;
//     }
//     render() {
//         return (
//            <View style = {[styles.container, {width: this.props.width, backgroundColor: 'green'}]} >
//                 {
//                     Platform.OS === 'ios' ?
//                         <ProgressViewIOS style = {[styles.ProgressViewStyle, {width: this.props.width - 20}]} progress = {this.state.progress} /> :
//                         <ProgressBarAndroid style = {[styles.ProgressViewStyle, {width: this.props.width - 20}]} styleAttr = 'Horizontal' indeterminate = {false} progress = {this.state.progress} />
//                 }
//                 <Text style = {styles.textStyle} >
//                     你选择了{Math.round(this.state.progress * 100)}
//                 </Text>
//                 <View style = {[styles.touchViewStyle, {width: this.props.width}]}  >
//                     <View style = {[styles.circle, {left:(this.props.width - 20) * this.state.progress}]} {...this.watcher.panHandlers} ></View>
//                 </View>
//            </View>
//         )
//     }
// }

// const styles = StyleSheet.create({
//     ProgressViewStyle: {
//         width: totalWidth - 40,
//         left: 20,
//         backgroundColor: 'transparent',
//         top: 0
//     },
//     container: {
//         flex: 1
//     },
//     touchViewStyle: {
//         width: totalWidth - 20,
//         height: 40,
//         backgroundColor: 'transparent',
//         position: 'absolute',
//         left: 10,
//         top: 0
//     },
//     textStyle: {
//         fontSize: 20,
//         left: 20,
//         top: 70
//     },
//     circle: {
//         width: 20,
//         height: 20,
//         backgroundColor: 'green',
//         position: 'absolute'
//     }
// })

export default class CooSlider extends Component {
    constructor(props) {
        super(props);
        this.state = {
            v: 0
        }
    }
    render() {
        return (
            <View style = {{height: 50, justifyContent: 'flex-end', backgroundColor: 'red'}} onLayout = {e => this.sliderWidth = e.nativeEvent.layout.width} >
                <Slider onValueChange = {v => this.setState({v})} />
                <View style = {[{width: 20, height: 20, backgroundColor: 'blue', position: 'absolute', top: 0}, {left: (this.sliderWidth - 30) * this.state.v + 10}]} ></View>
            </View>
        )
    }
}