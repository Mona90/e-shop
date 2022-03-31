import React from 'react'
import { Text, TouchableOpacity, View,Image, StyleSheet } from 'react-native'

function SingleProduct({ navigation, route }) {
  return (
    <View style={{paddingTop:20}}>
      <Image source={{uri: route.params.image}} style={styles.image}/>
      <View style={styles.descBox} >
          <Text style={styles.name}>{route.params.name}</Text>
          <Text style={styles.price}>$ {route.params.price}</Text>
          <Text numberOfLines={5}>{route.params.desc}</Text>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>ADD To Cart</Text></TouchableOpacity>
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
  image:{width:undefined, height:'50%',resizeMode:'contain'},
  descBox:{
    backgroundColor:'#FFF',
    padding:25, 
    borderTopStartRadius:20
  },
  name:{
    fontWeight:'bold', 
    color:"#000", 
    fontSize:18
  },
  price:{
    fontWeight:'bold', 
    color:"#ffb1af", 
    fontSize:16, 
    marginVertical:10
  },
  button:{
    backgroundColor:'#000',
    paddingHorizontal:20, 
    paddingVertical:10,
    width:150,
    marginTop:15
  },
  buttonText:{
    color:'#FFF',
    textAlign:'center',
    textTransform:'uppercase'
  }
})
export default SingleProduct