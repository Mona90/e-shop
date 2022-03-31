import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { ScrollView, TextInput, View, Image, StyleSheet, Text, TouchableOpacity } from 'react-native'
import FontAwesome from 'react-native-vector-icons/FontAwesome';

function Products({ navigation }) {
    const [products, setProducts] = useState()
    useEffect(()=>{
        const getProducts = async () =>{
            try{
               const res = await axios.get('https://fakestoreapi.com/products')
                    setProducts((res.data).slice(0,4))
                    console.log("request", res.data)
        
            }catch(error){
                console.log(error)
            }
        }
        getProducts()
    },[])
    
        return (
      <ScrollView style={{padding:25,paddingBottom: 20}}>
        <View style={{flexDirection:"row",alignItems:'center'}}> 
            <View style={{position:'relative',flexGrow:1}}>
                <TextInput style={styles.input} />
                <Image source={require('../images/icons/search.png')} style={styles.searchIcon} />
            </View>
            <View style={styles.iconContainer}>
            <Image source={require('../images/icons/whitegrid.png')} style={styles.gridIcon}/>
            </View>
        </View>
        <View style={{width:'100%', marginTop:10}}>
        <Image source={require('../images/banner.jpg')} style={styles.bannerImg}/>
        </View>
        
        <View style={styles.row}>
        {products && products.map(product => (
        <TouchableOpacity key={product.id} style={styles.card}  onPress={() =>
                navigation.navigate('Single-product', { 
                    name: product.title, 
                    image: product.image,
                    price: product.price,
                    desc: product.description
                })    
          }>
            <View style={{flexDirection:'column',position:'relative'}} >
                <View style={styles.wishListIcon}>
                   <FontAwesome name='heart' style={{color:'#FFF',fontSize:14}}/>
                </View>
                <View style={{width:'100%', height:120, }}><Image source={{uri:product.image}} style={styles.productImage}/></View>
                <Text style={styles.price}>$ {product.price}</Text>
                <Text style={styles.name} numberOfLines={1}>{product.title}</Text>
            </View>
        </TouchableOpacity>
        ))}
        </View> 
    </ScrollView>
  )
}
 const styles = StyleSheet.create({
     input:{
         padding:5,
         paddingLeft:30,
         backgroundColor:'#FFF',
         height:40,
         borderWidth:1,
         borderColor:"#EEE",
         borderRadius:5
        },
    searchIcon:{
        position:'absolute',
        left:10,
        top:8,
        width:30, 
        height:30, 
        zIndex:2
    },
     iconContainer:{
         backgroundColor:'#ffb1af',
         width:40, 
         height:40,
         borderRadius:5,
         padding:5,
         marginStart:10},
    gridIcon:{
        flex:1 , 
        width: undefined, 
        height: undefined, 
        resizeMode: 'contain',
      },
      bannerImg:{
        width:'100%', 
        height: 150,
        resizeMode: 'contain',
        flexGrow:1 
    },
      row:{
        flex:1, 
        flexDirection:'row',
        flexWrap: "wrap",
        marginVertical:20,
        justifyContent:'space-between'
    },
      card:{
          width: '45%',
          backgroundColor:"#FFF",
          borderRadius:5,
          marginVertical:10,
          height:190,
          padding:5
      },
      wishListIcon:{
          position:'absolute',
          zIndex:3,
          right:10,
          top:10,
          backgroundColor:'#ffb1af',
          width:30,
          height:30,
          borderRadius:15,
          justifyContent:'center',
          alignItems:'center'
      },
      productImage:{
        width: '100%', 
        height: '100%', 
      },
      name:{
        fontWeight:'bold', 
        color:"#000", 
        fontSize:18,
        marginBottom:10
      },
      price:{
        fontWeight:'bold', 
        color:"#ffb1af", 
        fontSize:16, 
        marginVertical:5
      }
 })
export default Products