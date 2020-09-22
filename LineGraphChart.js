import React from 'react';
import {View,Text,StyleSheet,linedata,Dimensions} from 'react-native';
import {
    LineChart
  } from 'react-native-chart-kit';

  
  const line = {
    labels: ['-80','-70','-60','-50','-40','-30','-20','-10','Now'],
    datasets: [
      {
        data: [ 33.0,33.3, 33.6,32.1,32.3, 32.7],
        strokeWidth: 2, // optional
      },
    ],
  };
  
  export default class LineGraphChart extends React.Component {
  
      render(){
          return(
              <View style={styles.container}>
               <View>
  
  <LineChart
    data={line}
    width={380} // from react-native
    height={280}
    yAxisLabel={''}
    yAxisSuffix={" V"}
    chartConfig={{
      backgroundColor: '#D7E218',
      backgroundGradientFrom: '#D7E218',
      backgroundGradientTo: '#bac40c',
      decimalPlaces: 2, // optional, defaults to 2dp
      color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
      style: {
        borderRadius: 16
      }
    }}
    bezier
    style={{
      marginVertical: 2,
      borderRadius: 16
    }}
  />
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
