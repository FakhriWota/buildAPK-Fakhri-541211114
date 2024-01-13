import {
  ScrollView,
  Image,
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  TouchableOpacity,
  Linking,
} from 'react-native';

import Input from '../components/CustomInput';
import ButtonC from '../components/CustomButton';

export default function UbahPasswordScreen({ navigation }) {
  return (
    <ScrollView>
      <View style={styles.container}>
        <Image style={styles.logo} source={require('../assets/logots.png')} />
        <Text style={styles.title}>Hello,</Text>
        <Text style={styles.des}>Silahkan Ubah Password</Text>
        <Input placeholder="Email" />
        <Input placeholder="Password" secure="true" />
        <Input placeholder="Ulang Password" secure="true" />
        <ButtonC title="Ubah" onPress={() => navigation.navigate('Login')} />
        <Text style={styles.register}>
          Sudah punya akun?{' '}
          <Text
            style={{ color: 'blue', textDecorationLine: 'underline' }}
            onPress={() => navigation.navigate('Login')}>
            {' '}
            Masuk
          </Text>{' '}
        </Text>
      </View>
    </ScrollView>
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
  // input: {
  //   height: 40,
  //   borderColor: 'grey',
  //   borderWidth: 1,
  //   marginBottom: 15,
  //   padding: 8,
  // },

  logo: {
    height: 50,
    width: 50,
  },

  des: {
    fontSize: 12,
    marginBottom: 30,
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