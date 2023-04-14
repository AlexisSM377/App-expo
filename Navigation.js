import React from 'react';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";

//screen

import HomeScreen from "./screens/HomeScreen";
import SettingScreen from './screens/SettingsScreen';
import StackScreen from './screens/StackScreen';
import GraphScreen from './screens/GraphScreen';
import RecordsScreen from './screens/RecordsScreen';

//icons

import { MaterialCommunityIcons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

function MyTabs() {
    return (
        <Tab.Navigator
            initialRouteName='Home'
            screenOptions={{
                tabBarActiveTintColor: 'purple',
            }}
        >
            <Tab.Screen 
                name="Usuarios" 
                component={HomeScreen}
                options={{
                    tabBarLabel: 'Usuarios',
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="account-circle" size={24} color={color} />
                    ),
                    
                }} 
            />
            <Tab.Screen 
                name="Registros"
                component={RecordsScreen}
                options={{
                    tabBarLabel: 'Productos',
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="air-filter" size={24} color={color} />
                    ),
                    
                }} 
            />
            
            <Tab.Screen 
                name="Peceras" 
                component={SettingScreen}
                options={{
                    tabBarLabel: 'Peceras',
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="application" size={24} color={color} />
                    ),
                    
                }} 
            />
            <Tab.Screen 
                name="Fish" 
                component={GraphScreen}
                options={{
                    tabBarLabel: 'Fish',
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="graph" size={24} color={color} />
                    ),
                    
                }} 
            />
        </Tab.Navigator>
    );
}

export default function Navigation() {
    return (
        <NavigationContainer>
            <MyTabs />
        </NavigationContainer>
    );
}