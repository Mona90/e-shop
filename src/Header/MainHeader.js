import React from 'react'
import { Image, Text, View, StyleSheet } from 'react-native'

function MainHeader() {
  const imgSrc = "../images/icons/grid.png"
  return (
    <View style={styles.sectionContainer}>
      <View style={styles.gridIconContainer}>
          <Image source={require(imgSrc)} style= {styles.gridIcon}/>
      </View>
        <Text>Ahmed Ali</Text>
        <Image source={require('../images/icons/user.png')} style={{width:40, height:40}} />
    </View>
  )
}
const styles = StyleSheet.create({
  sectionContainer:{
    padding: 20,
    backgroundColor:"#FFF",
   flexDirection:'row',
   justifyContent:"space-between",
   alignItems:"center"

  },
  gridIconContainer:{
    width: 40, 
    height: 40, 
    padding:5, 
    borderRadius: 20, 
    backgroundColor: 'white',
    borderWidth:1,
    borderColor:'#EEE'
  },
  gridIcon:{
    flex:1 , 
    width: undefined, 
    height: undefined, 
    resizeMode: 'contain',
  }
})
export default MainHeader