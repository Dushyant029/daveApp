import {View,Text,StyleSheet} from 'react-native';
import React from 'react';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';

export default class LoginScreen extends React.Component {

    state={
        email:'',
        password:'',
        errMsg:''
    }

    onLogin=()=> {
        if(this.state.email=='dushireddy291@gmail.com'&& this.state.password=='12345'){
            this.props.navigation.navigate("Dashboard")
     }else{
         this.setState({errMsg:'Invalid Login Details, Try Again!'})
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
                    style={{marginTop:40,borderBottomColor:'#ddd',borderBottomWidth:1,paddingBottom:20}} placeholder="Email" onChangeText={(text) => 
                        { 
                            this.setState({errMsg:''}),
                            this.setState({email: text})
                        }
                          }
                />
                <TextInput    
                    style={{marginTop:40,borderBottomColor:'#ddd',borderBottomWidth:1,paddingBottom:20}} placeholder="Password" secureTextEntry={true} onChangeText={(text) => 
                        {
                            this.setState({errMsg:''}),
                            this.setState({password: text})
                        }
                          }
                />

                    <Text style={{color:'red',textAlign:'center',marginTop:10}}>{this.state.errMsg}</Text>

                <View style={{alignItems:'center',justifyContent:'center',marginTop:40}}>
                  <TouchableOpacity 
                      onPress={()=> this.onLogin()}  
                      style={{width:200,backgroundColor:'#D7E218',padding:10,alignItems:'center',justifyContent:'center',borderRadius:40,marginTop:30}}>
                    <Text style={{textAlign:'center',color:'#fff',fontSize:16}}>Login Now</Text>
                  </TouchableOpacity>

                  <Text style={{marginTop:20}}>Forget Password ?</Text>
                  <View style={{flexDirection:'row',marginTop:60}}>
                    <View style={{height:50, width:50,borderRadius:50/2,backgroundColor:"#1877F2",alignItems:"center",justifyContent:'center'}}>
                       <Text style={{fontSize:20,fontWeight:'bold',color:"#fff"}}>f</Text>
                    </View>
                    <View style={{height:50, width:50,borderRadius:50/2,backgroundColor:"#db4a39",marginHorizontal:10,alignItems:"center",justifyContent:'center'}}>
                       <Text style={{fontSize:20,fontWeight:'bold',color:"#fff"}}>G</Text>
                    </View>       
                    
                  </View>
                  <View style={{flexDirection:'row',marginTop:40}}>
                    <Text style={{color:'gray'}}>Don't have an Account? </Text>
                    <Text style={{fontSize:15,color:"#D7E218",fontWeight:'bold'}} onPress={()=> this.props.navigation.navigate('SignUp')}>Sign Up</Text>
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


