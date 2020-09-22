import {View,Text,StyleSheet} from 'react-native';
import React from 'react';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';

export default class LoginScreen extends React.Component {

    state={
        firstname:'',
        lastname:'',
        email:'',
        password:'',
        confirmpassword:'',
        errMsg:''
    }

    onLogin=()=> {
        if(this.state.firstname=='Dushyant'&&this.state.lastname=='Reddy'&&this.state.email=='dushireddy291@gmail.com'&&this.state.password=='12345'&&this.state.confirmpassword=='12345'){
            this.props.navigation.navigate("Dashboard")
     }else{
         this.setState({errMsg:'Invalid SignUp Details, Try Again!'})
     }
    }
    render(){
        return(
            <View style={styles.container}>
                
                <Text 
          style={{fontSize:100,
              fontWeight:"bold",
              color:"#D7E218",
              textAlign:"center",
              paddingBottom:40,
              }}>DAVE</Text>
            
                <TextInput 
                    style={{marginTop:10,borderBottomColor:'#ddd',borderBottomWidth:1,paddingBottom:10}} placeholder="First Name" onChangeText={(text) => 
                        { 
                            this.setState({errMsg:''}),
                            this.setState({firstname: text})
                        }
                          }
                />
                <TextInput 
                    style={{marginTop:30,borderBottomColor:'#ddd',borderBottomWidth:1,paddingBottom:10}} placeholder="Last Name" onChangeText={(text) => 
                        { 
                            this.setState({errMsg:''}),
                            this.setState({lastname: text})
                        }
                          }
                />
                <TextInput 
                    style={{marginTop:30,borderBottomColor:'#ddd',borderBottomWidth:1,paddingBottom:10}} placeholder="Email" onChangeText={(text) => 
                        { 
                            this.setState({errMsg:''}),
                            this.setState({email: text})
                        }
                          }
                />
                <TextInput    
                    style={{marginTop:30,borderBottomColor:'#ddd',borderBottomWidth:1,paddingBottom:10}} placeholder="Password" secureTextEntry={true} onChangeText={(text) => 
                        {
                            this.setState({errMsg:''}),
                            this.setState({password: text})
                        }
                          }
                />
                <TextInput    
                    style={{marginTop:30,borderBottomColor:'#ddd',borderBottomWidth:1,paddingBottom:10}} placeholder="Confirm Password" secureTextEntry={true} onChangeText={(text) => 
                        {
                            this.setState({errMsg:''}),
                            this.setState({confirmpassword: text})
                        }
                          }
                />

                    <Text style={{color:'red',textAlign:'center',marginTop:10}}>{this.state.errMsg}</Text>

                <View style={{alignItems:'center',justifyContent:'center',marginTop:40}}>
                  <TouchableOpacity 
                      onPress={()=> this.onLogin()}  
                      style={{width:200,backgroundColor:'#D7E218',padding:10,alignItems:'center',justifyContent:'center',borderRadius:40,marginTop:30}}>
                    <Text style={{textAlign:'center',color:'#fff',fontSize:16}}>SignUp Now</Text>
                  </TouchableOpacity>
                                   
                  <View style={{flexDirection:'row',marginTop:40}}>
                    <Text style={{color:'gray'}}>Already have an Account? </Text>
                    <Text style={{fontSize:15,color:"#D7E218",fontWeight:'bold'}} onPress={()=> this.props.navigation.navigate('Login')}>Login</Text>
                  </View>
                </View>

            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"#fff",
        padding:20
    }
})


