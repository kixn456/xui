import {Dimensions, NativeModules} from 'react-native';
export default util = {
    window: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
        screenHeight: Dimensions.get('window').height - NativeModules.CooUIModule.statusBarHeight / 2
    },
    theme: {
        mainColor: '#ff4f4f',
        minorColor: '#333333',
        lineColor: '#eeeeee'
    }
}
