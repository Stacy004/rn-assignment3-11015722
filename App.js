import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput } from 'react-native';

export default function App() {
  const [searchText, setSearchText] = useState('');

  const handleSearch = () => {
    // Perform search with searchText
    console.log('Searching for:', searchText);
    // You can implement your search logic here, e.g., fetch data based on searchText
  };

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <View style={styles.cont}>
          <Text style={styles.text}>Hello, Devs</Text>
          <Text style={styles.task}>14 tasks today</Text>
        </View>
        <Image source={require('./assets/pp.png')} style={styles.profileImage} />
      </View>
      <View style={styles.searchContainer}>
        <View style={styles.searchBox}>
          <Image source={require('./assets/search.png')} style={styles.searchIcon} />
          <TextInput
            style={styles.searchInput}
            placeholder="Search"
            onChangeText={setSearchText}
            value={searchText}
          />
        </View>
        <Image source={require('./assets/Settings.png')} style={styles.settingsImage} />
      </View>
      <StatusBar style="auto" />
      <View style={styles.cont}>
          <Text style={styles.word}>Categories</Text>
         
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7F0E8',
    padding: 20,
  },
  text: {
    fontWeight: 'bold',
    fontSize: 24,
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 70,
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  cont: {
    alignItems: 'left',
  },
  task: {
    fontSize: 10,
  },
  searchContainer: {
    flexDirection: 'row',
   
    marginTop: 20,
  },
  searchBox: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 10,
    paddingHorizontal: 10,
    width: '80%',
  },
  searchIcon: {
    width: 21,
    height: 21,
    marginRight: 10,
  },
  searchInput: {
    flex: 1, 
    height: 50,
    fontSize: 16,
    marginLeft: 0,
    width: 100,
  },
settingsImage:{

  width: 50,
    height: 50,
    borderRadius: 25,
    marginLeft: 10,
},
word: {
  fontSize: 20,
  marginTop:30,
}
});
