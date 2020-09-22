import {View,Text,FlatList,StyleSheet} from 'react-native';
import React from 'react';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import DonutChart from './DonutChart';
import { Button } from 'react-native-paper';

const data =[
  
    {
      percentage:66,
      color:'#D7E218',
      max:100,
      radius:140,
      strokeWidth:30
    },
  ];
export default class DashboardScreen extends React.Component {
    
    render(){
        
        return(
            <View style={styles.container}>
                
                <Text 
          style={{fontSize:100,
              fontWeight:"bold",
              color:"#D7E218",
              textAlign:"center",
              paddingBottom:10,
              }}>DAVE</Text>

              <View 
                style={{
                  flexDirection:'row',
                  justifyContent:'space-evenly',
                  flexWrap:'wrap',
                  alignItems:'center'
              }}>
                {data.map((p, i)=>{
                  return <DonutChart key={i} percentage={p.percentage} color={p.color} radius={p.radius}delay={1000} max={p.max} strokeWidth={p.strokeWidth}/>
                })}
              </View>
              <View style={{flexDirection:'row',textAlign:"center",justifyContent:"center"}}>
              <Text 
                style={{fontSize:30,color:"#D7E218"}}
                >
                    Range </Text>
              <Text 
                style={{fontSize:25,color:"gray"}}>
              7.8 kms
              </Text>
              </View>

              <View style={{marginVertical:30}}>  
        <View>
          <Button  icon ="map-search" mode="contained" 
            onPress={()=> this.props.navigation.navigate('Tracking')} style={{backgroundColor:"#D7E218",marginVertical:5,borderRadius:60,margin:40}} >
              Tracking
          </Button>
          <Button icon ="stethoscope" mode="contained" 
            onPress={()=> this.props.navigation.navigate('Diagnostics')} style={{backgroundColor:"#D7E218",marginVertical:5,borderRadius:60,margin:40}} >
              Diagnostics
          </Button>
        </View>
        <View> 
          <Button icon ="chart-bar" mode="contained" 
            onPress={()=> this.props.navigation.navigate('Battery')} style={{backgroundColor:"#D7E218",marginVertical:5,borderRadius:60,margin:40}}>
              Performance
          </Button>
          <Button icon ="android-debug-bridge" mode="contained" 
            style={{backgroundColor:"#D7E218",marginVertical:5,borderRadius:60,margin:40}}>
              Manual Override
          </Button>
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


