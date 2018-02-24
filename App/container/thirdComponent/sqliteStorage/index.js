import React, {Component} from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    DeviceEventEmitter
} from 'react-native';
import SQLiteStorage from 'react-native-sqlite-storage';
import Header from '../../../component/header';
import BackIcon from '../../../common/BackArrow';
import utils from '../../../common/util';
import {openUrl} from '../../../common/function';
import Button, {BUTTON_TYPE} from '../../../component/button';

const database_name = "XUI.db"; //数据库文件
const database_version = "1.0"; //版本号
const database_displayname = "x-ui"; //生成的db文件名
const database_size = -1;
let db;
const sqlStr = 'create table if not exists user(id integer primary key autoincrement,userId int,userName nvarchar,userInfo nvarchar);';
const USERID  = 1;
const USERNAME = 'XUI';
const USERINFO = 'This is an x-ui information.';
const NEW_USERINFO = 'This is an new x-ui information';
const duration = 1000;

export default class RNSqliteStorage extends Component {
    constructor(props) {
        super(props);
    }
    initDatabase(callback) {
        db = SQLiteStorage.openDatabase(
            database_name,
            database_version,
            database_displayname,
            database_size,
            //在连接数据库之后初始化数据库表
            () => {
                this._successCB('open');
                db.transaction(async(tx) => {
                    await tx.executeSql(sqlStr, [], null, (err) => this._errorCB('create user table', err));
                    this._successCB('init database');
                    callback();
                },
                (err) => { //所有的 transaction都应该有错误的回调方法，在方法里面打印异常信息，不然可能不知道哪里出错了。
                    this._errorCB('transaction', err);
                },
                () => {
                    this._successCB('transaction');
                })
            },
        (err) => {
            this._errorCB('open', err);
        });
        return db;
    }
    insert(userId, userName, userInfo, callBack) {
        this.find(userId).then(data => {
            if(!data){
                const sqlStr = 'insert into user(userId,userName,userInfo) values(?,?,?);';
                db.transaction(
                    (tx) => {
                        tx.executeSql(sqlStr, [userId, userName, userInfo],
                            //插入成功
                            () => {
                                this._successCB('insert succeed');
                                if(callBack) callBack();
                            },
                            //插入失败
                            (err) => {
                                console.log(err);
                            }
                        );
                    },
                    //transaction执行失败
                    (err) => {
                        this._errorCB('transaction', err);
                    },
                    //transaction执行成功
                    () => {
                        this._successCB('transaction insert data');
                    }
                );
            }
            else{
                DeviceEventEmitter.emit('showToast', {
                    content: '无法插入相同的userId',
                    mask: false,
                    duration
                })
            }
        })
    }
    find(userId) {
        return new Promise((resolve, reject) => {
            const sqlStr = 'select * from user where userId=?;';
            db.executeSql(sqlStr, [userId],
                //查找成功
                (results) => {
                    this._successCB('findCollectionByName')
                    if (results.rows.length > 0) {
                        const userName = results.rows.item(0).userName;
                        const userInfo = results.rows.item(0).userInfo;
                        resolve({userName, userInfo});
                    }
                    else {
                        resolve(undefined);
                    }
                },
                //查找失败
                (err) => {
                    reject(err);
                }
            );
        })
    }
    update(userId, userName, userInfo, callBack) {
        const sqlStr = 'update user set userName=?,userInfo=? where userId=?;';
        db.transaction(
            (tx) => {
                tx.executeSql(sqlStr, [userName, userInfo, userId],
                //更新成功
                () => {
                    this._successCB('update succeed');
                    if(callBack) callBack();
                },
                //更新失败
                (err) => {
                    console.log(err);
                });
            },
            //transaction执行失败
            (err) => {
                this._errorCB('transaction', err);
            },
            //transaction执行成功
            () => {
                this._successCB('transaction update data');
            }
        );
    }
    delete(userId, callBack) {
        const sqlStr = 'delete from user where userId=?;';
        db.transaction(
            (tx) => {
                tx.executeSql(sqlStr, [userId],
                //删除成功
                () => {
                    this._successCB('delete succeed');
                    if(callBack) callBack();
                },
                //删除失败
                (err) => {
                    console.log(err);
                }
            );
        },
        //transaction执行失败
        (err) => {
            this._errorCB('transaction', err);
        },
        //transaction执行成功
        () => {
            this._successCB('transaction insert data');
        });
    }
    dropTable(callback) {
        db.transaction(
            (tx) => {
                tx.executeSql('drop table user;', [],
                () => {
                    if(callback) callback();
                    this._successCB('drop table succeed');
                }
            );
        },
        //transaction执行失败
        (err) => {
            this._errorCB('transaction', err);
        },
        //transaction执行成功
        () => {
            this._successCB('transaction drop table');
        });
    }
    //关闭数据库
    close() {
        if (db) {
            this._successCB('close');
            db.close();
        }
        else {
            console.log("SQLiteStorage not open");
        }
        db = null;
    }
    //操作成功的提示
    _successCB(name) {
        console.log("SQLiteStorage " + name + " success");
    }
    //操作失败的提示
    _errorCB(name, err) {
        console.log(name + '---' + err);
    }
    componentWillMount() {
        this.initDatabase(() => {
            DeviceEventEmitter.emit('showToast', {
                content: '数据库初始化成功',
                mask: false,
                duration
            })
        })
    }
    componentWillUnmount() {
        this.dropTable(() => {
            this.close();
        })
    }
    render() {
        const {navigae, goBack} = this.props.navigation;
        return (
            <View style = {{flex: 1}} >
                <Header containerStyle = {{backgroundColor: '#108EE9'}} title = {'react-native-sqlite-storage'} leftBtn = {<BackIcon goBack = {goBack} color = {'white'} />} />
                <View style = {styles.container} >
                    <Text style = {styles.introduction} >SQLite3 Native Plugin for React Native for both Android (Classic and Native) and iOS Foundation of this library is based on Chris Brody's Cordova SQLite plugin.</Text>
                    <TouchableOpacity  style = {{marginTop: 15}} onPress = {() => openUrl('https://github.com/andpor/react-native-sqlite-storage')} >
                        <Text style = {styles.urlStyle} >github地址</Text>
                    </TouchableOpacity>
                    <Text style = {{marginTop: 15}} >{JSON.stringify({userId: USERID, userName: USERNAME, userInfo: USERINFO})}</Text>
                    <View style = {{flexDirection: 'row', marginTop: 20}} >
                        <Button
                            inline
                            type = {BUTTON_TYPE.GHOST}
                            onPress = {() => this.insert(USERID, USERNAME, USERINFO, () => DeviceEventEmitter.emit('showToast', {content: '插入成功', mask: false, duration}))}
                        >插入数据</Button>
                        <Button
                            inline
                            type = {BUTTON_TYPE.GHOST}
                            buttonStyle = {{marginLeft: 15}}
                            buttonColor = {'#018EE9'}
                            onPress = {() => this.find(USERID).then(data => alert(JSON.stringify(data)))}
                        >读取数据</Button>
                    </View>
                    <View style = {{flexDirection: 'row', marginTop: 15}} >
                        <Button
                            inline
                            type = {BUTTON_TYPE.GHOST}
                            buttonColor = {'#01DD9B'}
                            onPress = {() => this.update(USERID, USERNAME, NEW_USERINFO, () => DeviceEventEmitter.emit('showToast', {content: '更新成功', mask: false, duration}))}
                        >更新数据</Button>
                        <Button
                            inline
                            type = {BUTTON_TYPE.GHOST}
                            buttonStyle = {{marginLeft: 15}}
                            buttonColor = {'#01b3ad'}
                            onPress = {() => this.delete(USERID, () => DeviceEventEmitter.emit('showToast', {content: '删除成功', mask: false, duration}))}
                        >删除数据</Button>
                    </View>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 15,
        paddingVertical: 20
    },
    introduction: {
        fontSize: 16,
        textAlign: 'center',
        color: utils.theme.minorColor
    },
    urlStyle: {
        fontSize: 15,
        color: '#018EE9'
    }
})
