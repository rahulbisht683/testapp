import 'react-native-gesture-handler'
import React from 'react'
import {Text} from 'react-native'
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs'
import Chats from './Chats'
import Status from './Status'
import Calls from './Calls'

const Tab = createMaterialTopTabNavigator();

const Tabs = () => {
    return(
        <Tab.Navigator
        tabBarOptions ={{
            labelStyle : {color : 'white'},
            indicatorStyle : {backgroundColor : 'white'},
            style : {backgroundColor : '#115E54'
            
        }
        
            
        }}
        options>
        <Tab.Screen
        name = "Chats"
        component = {Chats}
        ></Tab.Screen>
        <Tab.Screen
        name = "Status"
        component = {Status}
        ></Tab.Screen>
        <Tab.Screen
        name = "Calls"
        component = {Calls}
        ></Tab.Screen>
        </Tab.Navigator>
    )
}
export default Tabs;