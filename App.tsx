import { StyleSheet, Text, View, ScrollView, Image } from 'react-native';
import React from 'react';
import { ImageBackground } from 'react-native';
import { useFonts } from 'expo-font';

export default function App() {
  const COLOR_FONDO = "#121212";
  const COLOR_TITULO = "#ffdd99";
  const COLOR_TEXTO_FOTO = "#ffffff";

  const [fontsLoaded] = useFonts({
  bebasNeue: require('./assets/fonts/BebasNeue-Regular.ttf'),
});

if (!fontsLoaded) {
  return null;
}


  return (
    <View style={[styles.contenedorPrincipal, { backgroundColor: COLOR_FONDO }]}>
      <ScrollView>
            <Image
              source={require('./assets/fotos/granada_dark.jpg')}
              style={{ width: '100%', height: 250 }}
              resizeMode="cover"
            />

            <View style={styles.contenedorSecundario}>
              <Text style={[styles.titulo, { color: COLOR_TITULO }]}>
                ¿Qué hacer en Granada?
              </Text>
            </View>

               <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.carrusel}>
                    <Image
                      source={require('./assets/fotos/actividad1.jpg')}
                      style={styles.fotoCarrusel}
                      resizeMode="cover"
                    />
                    <Image
                      source={require('./assets/fotos/actividad2.jpg')}
                      style={styles.fotoCarrusel}
                      resizeMode="cover"
                    />
                    <Image
                      source={require('./assets/fotos/actividad3.jpg')}
                      style={styles.fotoCarrusel}
                      resizeMode="cover"
                    />
                    <Image
                      source={require('./assets/fotos/actividad4.jpg')}
                      style={styles.fotoCarrusel}
                      resizeMode="cover"
                    />
                    <Image
                      source={require('./assets/fotos/actividad5.jpg')}
                      style={styles.fotoCarrusel}
                      resizeMode="cover"
                    />
              </ScrollView>
              <Text style={[styles.titulo, { color: COLOR_TITULO }]}>
                Las mejores rutas</Text>
                    <ImageBackground
                      source={require('./assets/fotos/mejores1.jpg')}
                      style={styles.fotoRuta}
                      resizeMode="cover">
          
                <Text style={[styles.textoFoto, {color:COLOR_TEXTO_FOTO}]}>Albaicín</Text>               


                </ImageBackground>
                    <ImageBackground
                      source={require('./assets/fotos/mejores2.jpg')}
                      style={styles.fotoRuta}
                      resizeMode="cover"
                    />
                    <ImageBackground
                      source={require('./assets/fotos/mejores3.jpg')}
                      style={styles.fotoRuta}
                      resizeMode="cover"
                    />
     
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  contenedorPrincipal: {
    flex: 1,
    flexDirection: 'column',
  },
  contenedorSecundario: {
    flexDirection: 'column',
    marginHorizontal: 10,
    padding: 5,
  },
  titulo: {
    marginVertical: 20,
    fontSize: 24,
    fontStyle: 'italic',
    fontFamily: 'bebasNeue',
  },
  carrusel: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  fotoCarrusel: {
    width: 250,
    height: 300,
    marginRight: 10,
    borderRadius: 10,
  },
  fotoRuta:{
    width:'100%',
    height:250,
    marginVertical:5
  },
  textoFoto:{
    textAlign: 'center',
    
    fontFamily:"bebasNeue",
    fontSize:48,
    elevation:5
  }
});