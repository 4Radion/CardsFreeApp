/* eslint-disable prettier/prettier */
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from './pages/Home';
import New from './pages/New';
import Notification from './pages/Notification';
import Profile from './pages/Profile';
import Search from './pages/Search';



const Tab = createBottomTabNavigator();

export default function Routes(){
    return (
        <Tab.Navigator
        tabBarOptions={{
            style:{
                backgroundColor: '#a9a9a9',
                borderTopColor: 'transparent',
            },
            activeTintColor: 'red',
            tabStyle:{
                paddingBottom: 5,
                paddingTop: 5,
            },

        }}
        >

            <Tab.Screen
            name="Home"
            component={Home}
            />

            <Tab.Screen
            name="Search"
            component={Search}
            />

            <Tab.Screen
            name="New"
            component={New}

            />

            <Tab.Screen
            name="Notification"
            component={Notification}

            />

            <Tab.Screen
            name="Profile"
            component={Profile}

            />

        </Tab.Navigator>
    );
}
