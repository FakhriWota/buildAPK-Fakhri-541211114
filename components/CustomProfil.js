import { Image, StyleSheet } from 'react-native';

export default function CustomProfile() {
  return (
    <Image source={require('../assets/fotosaya1.png')} style={styles.image} />
  );
}

const styles = StyleSheet.create({
  image: {
    width: 110,
    height: 110,
    marginBottom: 10,
  },
});