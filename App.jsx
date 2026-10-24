import { View, Text } from 'react-native';
import React from 'react';
import { NavigationContainer, StackRouter } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './Screens/Login';
import Dashboard from './Screens/Dashboard';
import AddCourse from './Screens/AddCourse';
import AddClass from './Screens/AddClass';
import AddSchedule from './Screens/AddSchedule';
import MarkAttendance from './Screens/MarkAttendance';
const App = () => {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Login"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen
          name="Login"
          component={Login}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Dashboard"
          component={Dashboard}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="AddCourse" component={AddCourse} />
        <Stack.Screen name="AddClass" component={AddClass} />
        <Stack.Screen name="AddSchedule" component={AddSchedule} />
        <Stack.Screen name="MarkAttendance" component={MarkAttendance} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
