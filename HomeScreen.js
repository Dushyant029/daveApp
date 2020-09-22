import React from 'react';
import { StyleSheet, Text, View,Image} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default class HomeScreen extends React.Component {
    render(){
        this.props.navigation.setOptions({
            headerBackTitle:'',
            headerShown:false,
        })
  return (
    
    <View style={styles.container}>
                      
      <Image
        style={{width:"100%",height:500}} 
        source={require('./assets/images/driving.jpg')}
        resizeMode="center" />
        
       
      <Text 
          style={{fontSize:100,
              fontWeight:"bold",
              color:"#D7E218",
              textAlign:"center",
              paddingBottom:100,
              margin:-100}}>DAVE</Text>

      <Text
         style={{fontSize:16,
              
              color:"gray",
              textAlign:"center",
              
              marginHorizontal:20}}>Welcome to Login Screen!</Text>        
           
      <View style={{flexDirection:"row",margin:20,paddingVertical:20}}>
         <TouchableOpacity
           onPress={() => this.props.navigation.navigate('Login')} 
           style={{backgroundColor:"#D7E218",padding:10,width:150,borderRadius:30,marginHorizontal:10}}>
         <Text style={{textAlign:"center",color:"#fff",fontSize:18}}>Login</Text>
         </TouchableOpacity>     

          
         <TouchableOpacity
           onPress={() => this.props.navigation.navigate('SignUp')} 
           style={{backgroundColor:"#fff",padding:10,width:150,borderRadius:30,marginHorizontal:10,borderWidth:1,borderColor:"#D7E218"}}>
         <Text style={{textAlign:"center",color:"#D7E218",fontSize:18}}>Sign Up</Text>
         </TouchableOpacity>     

      </View>

      <Text style={{fontSize:16,marginTop:10}}>Or via Other</Text>
      
      <View style={{flexDirection:'row',marginTop:20}}>
        
        <View style={{height:50, width:50,borderRadius:50/2,backgroundColor:"#1877F2",alignItems:"center",justifyContent:'center'}}>
         <Text style={{fontSize:20,fontWeight:'bold',color:"#fff"}}>f</Text>
        </View>
        <View style={{height:50, width:50,borderRadius:50/2,backgroundColor:"#db4a39",marginHorizontal:10,alignItems:"center",justifyContent:'center'}}>
         <Text style={{fontSize:20,fontWeight:'bold',color:"#fff"}}>G</Text>
        </View>       
         
      </View>
      
    </View>
    
  );
}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems:'center',
    justifyContent:"flex-start",
  },
   
  
});
