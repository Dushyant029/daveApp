import {View,Text, Button} from 'react-native';
import React from "react";

export default class LogoutScreen extends React.Component{
    render(){

        this.props.navigation.setOptions({
            headerBackTitle:'',
            headerShown: false
        })
        return(
            <View style={{flex:1,alignItems:'center',justifyContent:'center',backgroundColor:"#fff"}}>
               <Text>This is LogoutScreen</Text> 
               <Button title="Logout" onPress={()=> this.props.navigation.navigate('Home')}></Button>   
            </View>
        )
    }

}