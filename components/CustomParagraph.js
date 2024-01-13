import { StyleSheet } from 'react-native'
import { Text } from 'react-native-paper'

export default function CustomParagraph(props) {
  return <Text style={styles.text} {...props} Text/>
}

const styles = StyleSheet.create({
  text: {
    fontSize: 15,
    lineHeight: 21,
    textAlign: 'center',
    marginBottom: 12,
  },
})