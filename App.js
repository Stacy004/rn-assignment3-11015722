import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
       <View style={styles.content}>
      <Text style={styles.text}>Hello Devs</Text> 
      <Image source={require('./assets/boy.png')} style={styles.profileImage} />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#D52',
    padding: 20,
  },
  text: {
    fontWeight: 'bold',
    fontSize: 24,
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center', // Center items vertically
    justifyContent: 'space-between', // Space evenly along the row
    marginTop: 70, // Increase the margin-top here
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
});