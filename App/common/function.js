import {Linking} from 'react-native';
export const cloneObj = (obj) => {
    return JSON.parse(JSON.stringify(obj));
}

export const openUrl = (url) => {
    Linking.canOpenURL(url).then(supported => {
        if(supported) {
            Linking.openURL(url);
        }
    })
}
