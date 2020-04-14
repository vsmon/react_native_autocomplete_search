import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';

import Home from './pages/Home';
import About from './pages/About';
import Tela3 from './pages/Tela3';
import Tela4 from './pages/Tela4';

const Tab = createBottomTabNavigator();

/* export default NavigationContainer(
  createBottomTabNavigator({
    Home,
    About,
  }),
); */

export default function Routes() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Home"
        tabBarOptions={{
          activeTintColor: 'tomato',
          inactiveTintColor: 'gray',
          /* activeBackgroundColor: '#000',
          inactiveBackgroundColor: '#000', */
          style: {backgroundColor: '#000', borderTopColor: '#000'},
        }}>
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="About" component={About} />
        <Tab.Screen name="Tela3" component={Tela3} />
        <Tab.Screen name="Tela4" component={Tela4} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
