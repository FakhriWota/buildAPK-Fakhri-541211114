import {
  Image,
  View,
  Text,
  Button,
  StyleSheet,
  Linking,
} from 'react-native';

import Input from '../components/CustomInput';
import ButtonC from '../components/CustomButton';

export default function Login({ navigation }) {
  const url1 = 'https://myaccount.google.com/'; // Ganti dengan URL yang sesuai
  const openUrl1 = () => {
    Linking.openURL(url1);
  };

  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={require('../assets/logots.png')} />
      <Text style={styles.title}>Hello,</Text>
      <Text style={styles.des}>Silahkan Login Ke Akun Anda</Text>
      <Input placeholder="Email" />
      <Input placeholder="Password" secure="true" />
     
        <View>
          <Text
            style={{ color: 'blue', textDecorationLine: 'underline', textAlign: 'right', marginBottom: 10 }}
            onPress={() => navigation.navigate('UbahPassword')}>
            Lupa Password
          </Text>
        </View>
     
      <ButtonC
        title="LOGIN"
        onPress={() => navigation.navigate('HomeScreen')}
      />
      <Text style={styles.atau}>or</Text>
      <Button title="google" onPress={openUrl1} color="#9DB2BF" />
      <Text style={styles.register}>
        Belum Punya Akun?{' '}
        <Text
          style={{ color: 'blue', textDecorationLine: 'underline' }}
          onPress={() => navigation.navigate('Register')}>
          {' '}
          Daftar Sekarang
        </Text>{' '}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    marginTop: 40,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 1,
  },
  pass: {
    fontSize: 13,
    textAlign: 'right',
    marginBottom: 15,
    color: 'blue',
  },

  logo: {
    height: 50,
    width: 50,
  },

  des: {
    fontSize: 12,
    marginBottom: 30,
    color: '#B4B4B3',
  },
  atau: {
    fontSize: 13,
    textAlign: 'center',
    marginTop: 10,
    marginBottom: 10,
    color: '#B4B4B3',
  },

  register: {
    fontSize: 12,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 10,
    marginBottom: 10,
    color: '#B4B4B3',
  },
});
