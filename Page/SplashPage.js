import React, { useEffect } from 'react';
import { ActivityIndicator, StyleSheet, View,Text, Image } from 'react-native';

export default function SplashScreen ({navigation}) {
  useEffect(() => {
    // Cek apakah pengguna telah kembali dari halaman login atau keluar dari aplikasi
    const unsubscribe = navigation.addListener('focus', () => {
      // Jika pengguna kembali dari halaman login atau keluar dari aplikasi
      // Tampilkan splash screen dan arahkan ke halaman portofolio setelah beberapa detik
      setTimeout(() => {
        navigation.navigate('Login');
      }, 2000); // Ubah sesuai kebutuhan Anda
    });

    return unsubscribe;
  }, );

  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={require('../assets/logots.png')} />
      <Text style={styles.logo1}>MY PAS 2023</Text>
      <ActivityIndicator size="large" color="blue" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    height : 100,
    width : 100,
    right: 1,
  },
  logo1:{
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom:20,
  }
});
