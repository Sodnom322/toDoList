import React from "react";
import { Film } from "../screens/Films";

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { FavoriteFilms } from "../screens/FavoriteFilms";
import { NavigationContainer } from "@react-navigation/native";


const BottomTab = createBottomTabNavigator()

 const Navigation: React.FC = () => {
     
  return(
    <NavigationContainer>
        <BottomTab.Navigator
        screenOptions ={{
          tabBarAllowFontScaling: true,
          tabBarLabelStyle:{
            fontSize: 22
          },
          tabBarIcon: () => {
            return null
          },
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray',
        }}      
      >
        <BottomTab.Screen name="Films" component={Film} />
        <BottomTab.Screen name="Favorite Films" component={FavoriteFilms} />
      </BottomTab.Navigator>
      </NavigationContainer>
    )
  }


  export {Navigation}
