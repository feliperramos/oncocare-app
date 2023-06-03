import React, { FC } from 'react';
import VectorImage from 'react-native-vector-image';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Feed, Profile, Help } from '../../modules';


const TabMenu: FC = () => {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator screenOptions={({ }) => ({ tabBarActiveTintColor: '#53DC98' })}>
      <Tab.Screen
        name="Feed"
        component={Feed}
        options={{
          //title: 'My profile',
          tabBarIcon: ({ size, focused, color }) => {
            return (
              <VectorImage source={require('../../assets/icons/Vector.svg')} />
            );
          },
        }}
      />
      <Tab.Screen
        name="Help"
        component={Help}
        options={{
          //title: 'My profile',
          tabBarIcon: ({ size, focused, color }) => {
            return (
              <VectorImage source={require('../../assets/icons/Help.svg')} />
            );
          },
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          //title: 'My profile',
          tabBarIcon: ({ size, focused, color }) => {
            return (
              <VectorImage source={require('../../assets/icons/Profile.svg')} />
            );
          },
        }}
      />
    </Tab.Navigator>
  )
}

export default TabMenu;
