import React, {Component} from 'react';
import {
    Linking
} from 'react-native';
import PropTypes from 'prop-types';

export const SCHEME = {
    HTTPS: 'https',
    HTTP: 'http',
    GEO: 'geo',
    TEL: 'tel',
    SMS: 'smsto',
    MAIL: 'mailto'
}

export default LinkApplication = {
    paramsStringify(scheme, url, params) {
        let _url = scheme + ':';
        if(scheme == SCHEME.HTTP || scheme === SCHEME.HTTPS) {
            _url += '//';
        }
        //用户自定义的scheme
        // if(!(scheme in SCHEME)) {
        //     _url = scheme + '://';
        // }
        _url += url;
        let newParmaster = '';
        if(Object.prototype.toString.call(params) === '[object Object]') {
            let findIndex = 0;
            for (let paramsKey in params) {
                if (findIndex == 0) {
                    newParmaster += paramsKey + "=" + params[paramsKey];
                } else {
                    newParmaster += "&" + paramsKey + "=" + params[paramsKey];
                }
                findIndex++;
            }
            if(scheme === SCHEME.HTTP || scheme ===SCHEME.HTTPS){
                newParmaster = '?' + newParmaster;
            }
        }
        else {
            newParmaster = params ? '?' + params : '';
        }
        return _url + newParmaster;
    },
    canOpenURL(scheme) {
        return new Promise((resolve, reject) => {
            Linking.canOpenURL(scheme)
                .then(support => resolve(support))
                .catch(error => reject(error))
        })
    },
    openURL(scheme, url, params) {
        return new Promise((reslove, reject) => {
            Linking.openURL(this.paramsStringify(scheme, url, params)).catch(error => {
                reject(error);
            })
        })
    },
    getInitialURL() {
        return new Promise((resolve, reject) => {
            Linking.getInitialURL()
                .then(url => resolve(url))
                .catch(error => reject(error));
        })
    }
}
