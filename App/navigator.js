import React from 'react';
import {
    StackNavigator,
    TabNavigator,
    TabBarBottom,
    DrawerNavigator
} from 'react-navigation';
import utils from './common/util';
import Icon from './component/icon';

import MainPage from './index';
import CollapseExample from './container/collapse';
import HeaderExample from './container/header';
import BadgeExample from './container/badge';
import ActionSheetExample from './container/actionSheet';
import ButtonExample from './container/button';
import TabBarExample from './container/tabBar';
import SearchExample from './container/search';
import TimeLineExample from './container/timeLine';
import CardExample from './container/card';
import {Basic, LeftTitle, CustomStyle, UseAnimation} from './container/timeLine/component';
import IndexListExample from './container/indexList';
import ToastExample from './container/toast';
import SliderExample from './container/slider';
import CheckBoxExample from './container/checkbox';
import RadioExample from './container/radio';
import DrawerLayoutExample from './container/drawerLayout';
import FlexExample from './container/flex';
import PaginationExample from './container/pagination';
import ListExample from './container/list';
import IconExample from './container/icon';
import Example from './container/example';
import LinkApplicationExample from './container/linkApplication';
//第三方组件示例
import {RNStackPage, RNTabPage, RNDrawerPage} from './container/thirdComponent/navigation';
import RNSwiper from './container/thirdComponent/swiper';
import RNDeviceInfo from './container/thirdComponent/deviceInfo';
import RNOrientation from './container/thirdComponent/orientation';
import RNPicker from './container/thirdComponent/picker';
import RNSqliteStorage from './container/thirdComponent/sqliteStorage';
import CardStackStyleInterpolator from 'react-navigation/src/views/CardStack/CardStackStyleInterpolator';

const drawer = DrawerNavigator({
    Drawer: {
        screen: RNDrawerPage
    }
}, {
    drawerOpenRoute: 'DrawerOpen',
    drawerCloseRoute: 'DrawerClose',
    drawerToggleRoute: 'DrawerToggle',
    drawerWidth: 200
})

const Tab = TabNavigator({
    RNMain: {
        screen: RNStackPage,
        navigationOptions: () => ({
            tabBarLabel: '导航',
            tabBarIcon: ({focused, tintColor}) => <Icon name = {'ios-globe'} color = {tintColor} size = {30} />
        })
    },
    RNCart: {
        screen: RNTabPage,
        navigationOptions: () => ({
            tabBarLabel: '选项卡',
            tabBarIcon: ({focused, tintColor}) => <Icon name = {'ios-switch'} color = {tintColor} size = {30} />
        })
    },
    RNSetting: {
        screen: drawer,
        navigationOptions: () => ({
            tabBarLabel: '抽屉',
            tabBarIcon: ({focused, tintColor}) => <Icon name = {'ios-filing'} color = {tintColor} size = {30} />
        })
    }
}, {
    tabBarPosition: 'bottom',
    swipeEnabled: false,
    animationEnabled: false,
    tabBarComponent: TabBarBottom,
    backBehavior: 'none',
    tabBarOptions: {
        activeTintColor: utils.theme.mainColor,
        inactiveTintColor: '#666666',
        labelStyle: {
            fontSize: 10
        }
    },
    navigationOptions: ({navigation}) => ({
        tabBarIcon: ({focused, tintColor}) => <Icon color = {tintColor} size = {30} />
    })
})

const Navigator = StackNavigator(
    {
        Home: {screen: MainPage},
        Collapse: {screen: CollapseExample},
        Header: {screen: HeaderExample},
        Badge: {screen: BadgeExample},
        ActionSheet: {screen: ActionSheetExample},
        Button: {screen: ButtonExample},
        TabBar: {screen: TabBarExample},
        Search: {screen: SearchExample},
        TimeLine: {screen: TimeLineExample},
        TimeLineBasic: {screen: Basic},
        TimeLineLeftTitle: {screen: LeftTitle},
        TimeLineCustomStyle: {screen: CustomStyle},
        TimeLineUseAnimation: {screen: UseAnimation},
        Card: {screen: CardExample},
        IndexList: {screen: IndexListExample},
        Toast: {screen: ToastExample},
        Slider: {screen: SliderExample},
        CheckBox: {screen: CheckBoxExample},
        Radio: {screen: RadioExample},
        DrawerLayout: {screen: DrawerLayoutExample},
        Flex: {screen: FlexExample},
        Pagination: {screen: PaginationExample},
        List: {screen: ListExample},
        Icon: {screen: IconExample},
        LinkApplication: {screen: LinkApplicationExample},
        Example: {screen: Example},
        ReactNavigation: {
            screen: Tab
        },
        RNSwiper: {screen: RNSwiper},
        RNDeviceInfo: {screen: RNDeviceInfo},
        RNOrientation: {screen: RNOrientation},
        RNPicker: {screen: RNPicker},
        RNSqliteStorage: {screen: RNSqliteStorage}
    },
    {
        headerMode: 'none',
        transitionConfig: () => ({
            screenInterpolator: CardStackStyleInterpolator.forHorizontal
        })
    }
);

export default Navigator;
