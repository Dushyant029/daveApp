import {View,Text,StyleSheet,linedata,Dimensions} from 'react-native';
import React,{Component} from 'react';
import DonutChart from './DonutChart';
import LineGraphChart from './LineGraphChart';


const data =[
  
    {
      percentage:73,
      color:'#D7E218',
      max:100,
      radius:45,
      strokeWidth:15
    },
    
  ];
  


export default class BatteryScreen extends React.Component {
    
    render(){
        return(
            <View style={styles.container}>
                
  <View style={{flex:1,alignItems:'center'}}>
  <LineGraphChart />
  </View>
                
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
                
                {data.map((p, i)=>{
                  return <DonutChart key={i} percentage={p.percentage} color={p.color} radius={p.radius}delay={1000} max={p.max} strokeWidth={p.strokeWidth}/>
                })}
              
                {data.map((p, i)=>{
                  return <DonutChart key={i} percentage={p.percentage} color={p.color} radius={p.radius}delay={1000} max={p.max} strokeWidth={p.strokeWidth}/>
                })}
              
                {data.map((p, i)=>{
                  return <DonutChart key={i} percentage={p.percentage} color={p.color} radius={p.radius}delay={1000} max={p.max} strokeWidth={p.strokeWidth}/>
                })}
              </View>
              <View style={{flexDirection:'row',justifyContent:'space-evenly'}}>
                 <Text style={{}}>Cell 1</Text>
                 <Text style={{}}>Cell 2</Text>
                 <Text style={{}}>Cell 3</Text>
                 <Text style={{}}>Cell 4</Text>
              </View>
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
              
                {data.map((p, i)=>{
                  return <DonutChart key={i} percentage={p.percentage} color={p.color} radius={p.radius}delay={1000} max={p.max} strokeWidth={p.strokeWidth}/>
                })}
              
                {data.map((p, i)=>{
                  return <DonutChart key={i} percentage={p.percentage} color={p.color} radius={p.radius}delay={1000} max={p.max} strokeWidth={p.strokeWidth}/>
                })}
              
                {data.map((p, i)=>{
                  return <DonutChart key={i} percentage={p.percentage} color={p.color} radius={p.radius}delay={1000} max={p.max} strokeWidth={p.strokeWidth}/>
                })}
                
              </View>
              <View style={{flexDirection:'row',justifyContent:'space-evenly'}}>
                 <Text style={{}}>Cell 5</Text>
                 <Text style={{}}>Cell 6</Text>
                 <Text style={{}}>Cell 7</Text>
                 <Text style={{}}>Cell 8</Text>
              </View>

            <View style={{marginTop:40,flexDirection:'row'}}>
                <Text style={{color:'#D7E218',fontSize:25,}}>Battery Remaining       </Text>
                <Text style={{fontSize:25,color:"gray"}}>  66%</Text>
              </View>
              <View style={{flexDirection:'row'}}>
                <Text style={{color:'#D7E218',fontSize:25,}}>Range Covered</Text>
                <Text style={{fontSize:25,color:"gray"}}>           2.4 kms</Text>
              </View>
              <View style={{flexDirection:'row'}}>  
                <Text style={{color:'#D7E218',fontSize:25,}}>Range Remaining     </Text>
                <Text style={{fontSize:25,color:"gray"}}> 9.6 kms</Text>
              </View>
              <View style={{flexDirection:'row'}}>  
                <Text style={{color:'#D7E218',fontSize:25,}}>Uptime                     </Text>
                <Text style={{fontSize:25,color:"gray"}}> 1h 23mins</Text>
              </View>
        </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"#fff",
        padding:20,
        
    },
    
})