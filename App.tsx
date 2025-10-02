import { StyleSheet, Text, View, ScrollView, Image } from 'react-native'
import React from 'react'

export default function App() {


  const COLOR_FONDO="#121212"
  const COLOR_TITULO="#ffdd99"
  const COLOR_TEXTO_FONDO="#ffffff"


  return (
    <View style={[styles.contenedorPrincipal,{backgroundColor:COLOR_FONDO}]}>
    <ScrollView>
   <Image 
    source={require("./assets/fotos/granada_dark.jpg")} 
    style={{ width: '100%', height: 250 }}
    />

     </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({

contenedorPrincipal:{
 flex:1,
 flexDirection:"column"
}




})