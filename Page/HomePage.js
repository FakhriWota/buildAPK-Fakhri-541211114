import { Text, SafeAreaView, StyleSheet, View, TextInput } from 'react-native';
import React from 'react';
import { AntDesign } from '@expo/vector-icons';
import Inputtext from '../components/TextInput'
export default function App({ navigation }) {
    const [text, onChangeText] = React.useState('Nama Siswa');
  return (
    <View>
     <View>
     <Text style= {styles.textawal}>
     Selamat Datang
     </Text>
     </View>
     <Inputtext placeholder="Cari siswa"/>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
      />
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
      />
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
      />
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
      />
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
      />
      
       <AntDesign name="pluscircleo" size={30} color="#000" onPress={() => navigation.navigate('InputScreen')} style={{textAlign: 'right'}}/>
    </View>
    
  );
}

const styles = StyleSheet.create({

  textawal: {
    fontSize : 18,
    fontWeight :'bold',
    textAlign: 'center'
  },

  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 8,
  },
});
