import React from 'react';

import {View,StyleSheet} from 'react-native';
import {NavigationContainer} from "@react-navigation/native";
import {createStackNavigator} from "@react-navigation/stack";
import HomeScreen from './HomeScreen';
import LoginScreen from './LoginScreen';
import DashboardScreen from './DashboardScreen';
import BatteryScreen from './BatteryScreen';
import SignUpScreen from './SignUpScreen';
import TrackingScreen from './TrackingScreen';
import DiagnosticsScreen from './DiagnosticsScreen';
import LogoutScreen from './LogoutScreen';
import DeliveryScreen from './DeliveryScreen';

const Stack= createStackNavigator();


export default class App extends React.Component{
  render(){
    return(
      <View style={styles.container}>
        <NavigationContainer>
          <Stack.Navigator>
          
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="SignUp" component={SignUpScreen} />
            <Stack.Screen name="Dashboard" component={DashboardScreen} />               
            <Stack.Screen name="Tracking" component={TrackingScreen} />
            <Stack.Screen name="Diagnostics" component={DiagnosticsScreen} />
            <Stack.Screen name="Battery" component={BatteryScreen} />
            <Stack.Screen name="Delivery" component={DeliveryScreen} />
            <Stack.Screen name="Logout" component={LogoutScreen} />
            
          </Stack.Navigator>
        </NavigationContainer>
        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
      flex:1,
      backgroundColor:"#fff"

  }
})