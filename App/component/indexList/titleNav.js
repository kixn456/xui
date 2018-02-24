import React,{Component} from 'react';
import {
	View,
	Text,
	TouchableOpacity,
	StyleSheet 
} from 'react-native';

export default class TitleNav extends Component{
	constructor(props){
		super(props);
	}
	getHeadIndexFromY(y) {
		y -= 50;
		//let areaHeight=theme.screenHeight-98;
		let areaTitleHeight = this.viewInfo.height * this.props.letterList.length;
		let gapHeight = (this.scrollBarInfo['height'] - areaTitleHeight) / 2;
		let differValue = y - gapHeight;
		let areaValid = differValue >= 0 && differValue <= areaTitleHeight ? true : false;
		return {
			titleIndex: Math.floor(differValue / this.viewInfo.height),
			areaValid
		}
	}
	detectAndScrollToSection(e, gestureState) {
		this.props.changeModalVisible(true);
		this.props.changeScrollEnable(false);
		this.refs.titleNav.setNativeProps({
			style: {
				backgroundColor: '#e3e3e3'
			}
		})
		let {
			titleIndex,
			areaValid
		} = this.getHeadIndexFromY(e.nativeEvent.pageY);
		//titleIndex=titleIndex>this.props.areaData.length?this.props.areaData.length:titleIndex;
		if (areaValid) {
			//alert(titleIndex);
			this.props.scrollToIndex(titleIndex);
		}
		//this.props.areaData[titleIndex].key;
	}
    resetSection() {
    	this.refs.titleNav.setNativeProps({
    		style: {
    			backgroundColor: 'transparent'
    		}
    	})
    	this.props.changeModalVisible(false);
    	this.props.changeScrollEnable(true);
    }
    measureView(e, index) {
    	if (index == 0) {
    		this.viewInfo = {
    			width: e.nativeEvent.layout.width,
    			height: e.nativeEvent.layout.height
    		}
    	} else if (index == null) {
    		this.scrollBarInfo = {
    			width: e.nativeEvent.layout.width,
    			height: e.nativeEvent.layout.height
    		}
    	}
    }
	render(){
		let titleList = [];
		this.props.letterList.map((item, index) => {
			titleList.push(
				<View onLayout = {(e) => this.measureView(e, index)} style = {styles.titleContainer} key = {index} >
					<Text>{item}</Text>
				</View>
			)
		})
		return (
			<View style = {styles.container} >
				<View
					onStartShouldSetResponder = {() => true}
                    onMoveShouldSetResponder = {() => true}
                    onResponderGrant = {this.detectAndScrollToSection.bind(this)}
                    onResponderMove = {this.detectAndScrollToSection.bind(this)}
                    onResponderRelease = {this.resetSection.bind(this)}
                    style = {{flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'transparent'}}
                    onLayout = {(e) => this.measureView(e, null)}
                    ref = 'titleNav'
				>
					{titleList}
				</View>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	container: {
		width: 30,
		position: 'absolute',
		right: 0,
		top: 0,
		bottom: 0,
		justifyContent: 'center',
		alignItems: 'center'
	},
	titleContainer: {
		paddingVertical: 0,
		width: 30,
		justifyContent: 'center',
		alignItems: 'center'
	}
})