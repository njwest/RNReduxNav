'use strict'
import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
export default class TabThreeScreenTwo extends React.Component {
  render(){
    return(
      <View style={{
        flex:1,
        backgroundColor:'red',
        alignItems:'center',
        justifyContent:'center'
      }}>
        <Text>{ 'Tab Three Screen Two' }</Text>
      </View>
    )
  }
}
