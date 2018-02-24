import React,{Component} from 'react';
import {
	View,
	Text,
	StyleSheet,
	SectionList,
	TouchableOpacity,
	Image,
	FlatList,
	ScrollView,
	InteractionManager,
	ActivityIndicator
} from 'react-native';
import TitleNav from './titleNav';
import utils from '../../common/util';

const VIEW_TYPE = {
	HEADER: 0,
	ITEM: 1
}
const VIEW_INFO = {
	ITEM_HEIGHT: 50,
	HEADER_HEIGHT: 25
}
export default class AreaList extends Component{
	constructor(props){
		super(props);
		this.state = {
			scrollEnable: true,
			screenHeight: 0,
			currentIndex: 0,
			modalVisible: false,
			needLoadMore: false
		};
		this.itemView = [];
	}
	changeScrollEnable(scrollEnable){
		this.setState({
			scrollEnable
		})
	}
	selectCountry(index){
		let code = this.props.countryData[index].code;
		let img = this.props.countryData[index].img;
		let name = this.props.countryData[index].name;
		this.props.changeCountry(code, img, name);
		//if(!this.props.customPop) this.props.navigator.pop();
	}
	componentWillReceiveProps(nextProps) {
		if (JSON.stringify(nextProps.countryData) != JSON.stringify(this.props.countryData)) {
			this.itemView = this._renderData(nextProps.countryData, null, null, true);
			this.forceUpdate();
			this.refs.sectionList.scrollTo({
				animated: false,
				y: 0
			})
		}
	}
	_renderData(areaData, startIndex, endIndex, replace, callback) {
		startIndex = startIndex != null ? startIndex : 0;
		endIndex = endIndex != null ? endIndex : areaData.length;
		let areaList = replace ? [] : this.itemView;
		let oldKey = replace ? '' : areaData[startIndex].key;
		for (let i = startIndex; i < endIndex; i++) {
			if (i >= endIndex) break;
			let itemView = (
				<TouchableOpacity 
					activeOpacity = {1}
					onPress = {() => this.selectCountry(i)} 
					key = {i} 
					style = {{paddingHorizontal: 15, paddingRight: 20, backgroundColor: 'white'}}
				>
					<View style = {styles.areaContainer} >
						<View style = {styles.listLeft} >
							<Image source = {areaData[i].img} style = {styles.countryImg} />
							<Text style = {styles.areaFont} >{areaData[i].name}</Text>
						</View>
						<Text style = {[styles.areaFont, {color: '#999999'}]} >{'+' + areaData[i].code}</Text>
					</View>
					<View style = {styles.verticalLine} ></View>
				</TouchableOpacity>
			)
			if (oldKey == areaData[i].key) {
				areaList.push(itemView);
			}
			else {
				oldKey = areaData[i].key;
				areaList.push(
					<View style = {styles.headerContainer} key = {areaData[i].key + i} >	
		 				<Text style = {styles.headerFont} >{areaData[i].key == '*' ? '常用' : areaData[i].key}</Text>
		 			</View>
				);
				areaList.push(itemView);
			}
		}
		if(callback) callback();
		return areaList;
	}
	scrollToIndex(index) {
		this.setState({
			currentIndex: index
		});
		this.refs.sectionList.scrollTo({
			animated: false,
			y: this.props.offsetList[index]
		})
	}
	componentWillMount() {
			this.itemView = this._renderData(this.props.countryData, 0, null, true, () => {
				// setTimeout(() => {
				// 	this.itemView = this._renderData(this.props.countryData, 40, null, false);
				// 	this.forceUpdate();
				// }, 1200)
			})
	}
	measureView(e) {
		this.setState({
			screenHeight: e.nativeEvent.layout.height
		})
	}
	changeModalVisible(visible) {
		this.setState({
			modalVisible: visible
		})
	}
	render(){
		let modalView = this.state.modalVisible ? (
			<View style = {[styles.modal, {top: this.state.screenHeight / 2}]} >
				<Text style = {{color: 'white', fontSize: 30}} >{this.props.letterList[this.state.currentIndex]}</Text>
			</View>
		) : null;
		return	(
			<View style = {{flex: 1}} > 
				<ScrollView
					ref = 'sectionList'
					scrollEnabled = {this.state.scrollEnable}
					showsVerticalScrollIndicator = {false}
					onLayout = {(e) => this.measureView(e)}
				>
					{this.itemView}	
				</ScrollView>
				{modalView}
				<TitleNav 
					style = {styles.titleContainer}
					letterList = {this.props.letterList} 
					changeScrollEnable = {this.changeScrollEnable.bind(this)} 
					scrollToIndex = {this.scrollToIndex.bind(this)}
					changeModalVisible = {this.changeModalVisible.bind(this)}
				/>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	loading: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	},
	headerContainer: {
		paddingHorizontal: 15,
		//paddingVertical:5,
		height: 25,
		justifyContent: 'center'
	},
	areaContainer: {
		paddingRight: 15,
		//paddingVertical:15,
		height: 50,
		alignItems: 'center',
		flexDirection: 'row',
		justifyContent: 'space-between',
	},
	verticalLine: {
		height: 1,
		backgroundColor: '#f1f1f1'
	},
	headerFont: {
		fontSize: 13
	},
	areaFont: {
		fontSize: 15,
		color: '#333333'
	},
	titleContainer: {
		flex: 1,
		width: 20
	},
	listLeft: {
		flexDirection: 'row'
	},
	countryImg: {
		width: 40,
		height: 25,
		marginRight: 10
	},
	modal: {
		backgroundColor: 'rgba(0,0,0,0.7)',
		position: 'absolute',
		left: utils.window.width / 2,
		marginLeft: -40,
		marginTop: -40,
		width: 80,
		height: 80,
		zIndex: 999,
		justifyContent: 'center',
		alignItems: 'center',
		borderRadius: 6
	}
})