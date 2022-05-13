/* eslint-disable prettier/prettier */
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import Home from './pages/Home';
import New from './pages/New';
import Settings from './pages/Settings';
import Profile from './pages/Profile';
import Search from './pages/Search';



const Tab = createBottomTabNavigator();

export default function Routes(){
    return (
        <Tab.Navigator
        initialRouteName="Home"
        screenOptions={{
            
            tabBarActiveTintColor: 'rgba(230,48,53,255)',
          
            tabBarItemStyle:{
                paddingBottom: 5,
                paddingTop: 5,
            },
            tabBarStyle:{
                display: 'flex',
            }
            


        }}
        >

            <Tab.Screen
            name="Settings"
            options={{
                tabBarLabel: 'Settings',
                tabBarIcon: ({ color, size }) => (
                  <MaterialCommunityIcons name="cog" color={color} size={size} />
                ),
              }}
            component={Settings}
            

            />

            <Tab.Screen
            name="Home"
            component={Home}
            options={{
                tabBarLabel: 'Home',
                tabBarIcon: ({ color, size }) => (
                  <MaterialCommunityIcons name="home" color={color} size={size} />
                ),
              }}
            />

            <Tab.Screen
            name="Profile"
            component={Profile}
            options={{
                tabBarLabel: 'Profile',
                tabBarIcon: ({ color, size }) => (
                  <MaterialCommunityIcons name="account" color={color} size={size} />
                ),
              }}

            />

        </Tab.Navigator>
    );
}
