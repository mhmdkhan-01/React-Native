import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer, StackRouter } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Login from './Screens/Login'
import Dashboard from './Screens/Dashboard'
import AddCourse from './Screens/AddCourse';
const App = () => {
  const Stack=createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Dashboard' screenOptions={{headerShown:false}}>
        <Stack.Screen name='Login' component={Login} options={{headerShown:false}} />
        <Stack.Screen name='Dashboard' component={Dashboard} options={{headerShown:false}}/>
        <Stack.Screen name="AddCourse" component={AddCourse}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App
