import {View,Text,StyleSheet} from 'react-native';
import React from 'react';
import { Button } from 'react-native-paper';



export default class DiagnosticsScreen extends React.Component {

    render(){
        return(
            <View style={styles.container}>
                <Text 
          style={{fontSize:100,
              fontWeight:"bold",
              color:"#D7E218",
              textAlign:"center",
              
              }}>DAVE</Text>
            <View style={{margin:20}}>
        <Text style={{color:'#D7E218',fontSize:28,marginVertical:7,}} onPress={()=> this.props.navigation.navigate('Battery')}>1. Battery</Text>
        <Text style={{color:'#D7E218',fontSize:28,marginVertical:7,}}>2. LiDAR</Text>
        <Text style={{color:'#D7E218',fontSize:28,marginVertical:7,}} onPress={()=> this.props.navigation.navigate('Tracking')}>3. GPS</Text>
        <Text style={{color:'#D7E218',fontSize:28,marginVertical:7,}}>4. ESCs</Text>
        <Text style={{color:'#D7E218',fontSize:28,marginVertical:7,}}>5. Motors</Text>
        <Text style={{color:'#D7E218',fontSize:28,marginVertical:7,}}>6. Onboard Computer</Text>
        <Text style={{color:'#D7E218',fontSize:28,marginVertical:7,}}>7. Software Stack</Text> 
     </View> 
     <View>
     <Button  mode="contained" 
            style={{height:45,backgroundColor:"#D7E218",marginVertical:30,borderRadius:60,margin:50}} >
              Run Self Diagnostics
     </Button>
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
    },
    
})