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
        <View style={styles.image}>
              <View style={styles.picture}>
                <Text style={styles.exercise}>Exercise</Text>
                <Text style={styles.task}>12 tasks</Text>
                <Image source={require('./assets/lady.png')} style={styles.ladyPic} />

              </View>
              <View style={styles.mail}>
                <Text style={styles.exercise}>Study</Text>
                <Text style={styles.task}>12 tasks</Text>
                <Image source={require('./assets/deskLady.png')} style={styles.ladyPic} />

              </View>
         </View>
         <View style={styles.cont}>
          <Text style={styles.word}>Ongoing tasks</Text>
         
        </View>
        <View style={styles.visual}>
          <Text style={styles.verb}>Mobile App development</Text>
         
        </View>
        <View style={styles.visual}>
          <Text style={styles.verb}>Web Development</Text>
         
        </View>
        <View style={styles.visual}>
          <Text style={styles.verb}>Push ups </Text>
         
        </View>


    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7ECE8',
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
    backgroundColor: 'white',
  },
  cont: {
    alignItems: 'left',
  },
  task: {
    fontSize: 10,
    marginLeft: 2,
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
    backgroundColor: 'white',
    color: 'black',
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
    fontWeight: 'bold',
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
  fontWeight: 'bold',
},

picture: {
  marginTop: 20,
  backgroundColor: 'white',
  width: 170,
  borderRadius: 20,
},
exercise: {
  fontSize: 17,
  fontWeight: 'bold',
  marginLeft: 20,

},
task: {
  marginLeft: 20,
  fontSize: 12,
},
ladyPic: {
  width: 90,
    height: 90,
    marginTop: 20,
    marginLeft: 30,
    marginBottom: 10,
   
   
},
image: {
  flexDirection: 'row',
},
mail: {
  marginLeft:30,
  marginTop: 20,
  backgroundColor: 'white',
  width: 250,
  borderRadius: 20,

},
visual: {
  backgroundColor:'#808080',
  alignItems: 'left',
  justifyContent: 'center',
  padding: 10,
  marginTop: 14,
  height: 100,
  borderRadius: 15,
  borderColor:'#E8D1BA',
  borderWidth: 1,
  backgroundColor: 'white',
},
verb: {
  marginBottom: 7,
  fontSize: 17,
  fontWeight:'bold',
},
});
