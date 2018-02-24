import React,{Component} from 'react';
import {
	View,
	Text,
	StyleSheet,
	TouchableOpacity,
	TextInput
} from 'react-native';
import AreaList from './sectionList';
import countryData from './countryData';
import utils from '../../common/util';

const VIEW_INFO = {
	ITEM_HEIGHT: 50,
	HEADER_HEIGHT: 25
}
export default class SelectionList extends Component{
	constructor(props){
		super(props);
		this.state = {
			countryText: '',
			countryData: []
		}
		this.letterList = [];
		this.offsetList = [];
	}

	changeCountryText(text){
		this.setState({
			countryText: text
		}, () => this.searchRegion(text));
	}
	searchRegion(region) {
		region = region.toLowerCase();
		let newCountryData = [];
		const _countryData = this.props.fromLanguage ? languageData : countryData;
		_countryData.map((item, index) => {
			let itemName = item.code.toLowerCase();
			if (itemName.indexOf(region) > -1) {
				newCountryData.push(item);
			}
		});
		//this.props.getLetterAndOffset(newCountryData);
		this.getLetterAndOffset(newCountryData);
		this.setState({
			countryData: newCountryData
		})
	}
	getLetterAndOffset(countryData) {
		let letterList = [];
		let offsetList = [];
		let offset = 0;
		countryData.map((item, index) => {
			if (letterList.indexOf(item.key) > -1) {
				offset += VIEW_INFO.ITEM_HEIGHT + 1;
			} else {
				offsetList.push(offset);
				offset += VIEW_INFO.HEADER_HEIGHT + (VIEW_INFO.ITEM_HEIGHT + 1);
				letterList.push(item.key);
			}
		});
		this.letterList = letterList;
		this.offsetList = offsetList;
		this.forceUpdate();
	}
	componentWillMount(){
		const _countryData = this.props.fromLanguage ? languageData : countryData;
		this.setState({
			countryData: _countryData
		}, () => {
			this.getLetterAndOffset(_countryData);
		})
	}
	render(){
		return(
			<View style = {styles.container} >
				<AreaList 
					countryData = {this.state.countryData} 
                    changeCountry = {this.props.changeCountry.bind(this)}
                    letterList = {this.letterList}
                    offsetList = {this.offsetList}
				/>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#f1f1f1'
	},
	title: {
		fontSize: 18,
		color: '#333333'
	},
	topNav: {
		backgroundColor: '#f8f8f8',
		width: utils.window.width,
		height: 50,
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
	},
	backIcon: {
		width: 30,
		height: 30,
		marginLeft: 15,
		justifyContent: 'center'
	},
	rightIcon: {
		marginRight: 15,
		justifyContent: 'center',
		alignItems: 'center',
		width: 30,
		height: 30
	}
})