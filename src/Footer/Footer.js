import React from 'react'
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {View, StyleSheet} from 'react-native'
function Footer() {
  return (
    <View style={styles.main}>
        <FontAwesome name='home'  style={styles.icon}/>
        <FontAwesome name='search' style={styles.icon}/>
        <FontAwesome name='heart' style={styles.icon}/>
        <FontAwesome name='user-circle' style={styles.icon}/>

    </View>
  )
}
const styles = StyleSheet.create({
   main:{
    backgroundColor:'#FFF',
    padding:15,
    flexDirection:'row',
    justifyContent:'space-between'
   },
   icon:{
    fontSize:20,
    color:'#CCC'
   }
})
export default Footer