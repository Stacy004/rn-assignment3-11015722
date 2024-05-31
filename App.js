import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput, ScrollView } from 'react-native';

export default function App() {
  const [searchText, setSearchText] = useState('');

  const handleSearch = () => {
    // Perform search with searchText
    console.log('Searching for:', searchText);
    // You can implement your search logic here, e.g., fetch data based on searchText
  };

  return (
    <ScrollView style={styles.container}>
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
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.categoriesScroll}>
        <View style={styles.picture}>
          <Text style={styles.exercise}>Exercise</Text>
          <Text style={styles.task}>12 tasks</Text>
          <Image source={require('./assets/lady.png')} style={styles.ladyPic} />
        </View>
        <View style={styles.picture}>
          <Text style={styles.exercise}>Study</Text>
          <Text style={styles.task}>8 tasks</Text>
          <Image source={require('./assets/deskLady.png')} style={styles.ladyPic} />
        </View>
        <View style={styles.picture}>
          <Text style={styles.exercise}>Work</Text>
          <Text style={styles.task}>10 tasks</Text>
          <Image source={require('./assets/work.png')} style={styles.ladyPic} />
        </View>
        <View style={styles.picture}>
          <Text style={styles.exercise}>Cooking</Text>
          <Text style={styles.task}>5 tasks</Text>
          <Image source={require('./assets/foo.jpg')} style={styles.ladyPic} />
        </View>
        <View style={styles.picture}>
          <Text style={styles.exercise}>Cleaning</Text>
          <Text style={styles.task}>3 tasks</Text>
          <Image source={require('./assets/water.webp')} style={styles.ladyPic} />
        </View>
        <View style={styles.picture}>
          <Text style={styles.exercise}>Reading</Text>
          <Text style={styles.task}>6 tasks</Text>
          <Image source={require('./assets/read.png')} style={styles.ladyPic} />
        </View>
        <View style={styles.picture}>
          <Text style={styles.exercise}>Meditation</Text>
          <Text style={styles.task}>4 tasks</Text>
          <Image source={require('./assets/yoga.webp')} style={styles.ladyPic} />
        </View>
        <View style={styles.picture}>
          <Text style={styles.exercise}>Volunteering</Text>
          <Text style={styles.task}>4 tasks</Text>
          <Image source={require('./assets/volunteer.jpg')} style={styles.ladyPic} />
        </View>
      </ScrollView>
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
        <Text style={styles.verb}>Push ups</Text>
      </View>
      <View style={styles.visual}>
        <Text style={styles.verb}>Assignments</Text>
      </View>
      <View style={styles.visual}>
        <Text style={styles.verb}>Work out</Text>
      </View>
      <View style={styles.visual}>
        <Text style={styles.verb}>Chores</Text>
      </View>
      <View style={styles.visual}>
        <Text style={styles.verb}>Assignments</Text>
      </View>
      <View style={styles.visual}>
        <Text style={styles.verb}>Painting</Text>
      </View>
      <View style={styles.visual}>
        <Text style={styles.verb}>Writing</Text>
      </View>
      <View style={styles.visual}>
        <Text style={styles.verb}>Gardening</Text>
      </View>
      <View style={styles.visual}>
        <Text style={styles.verb}>Travel planning</Text>
      </View>
      <View style={styles.visual}>
        <Text style={styles.verb}>Music practice</Text>
      </View>
      <View style={styles.visual}>
        <Text style={styles.verb}>shopping</Text>
      </View>
      <View style={styles.visual}>
        <Text style={styles.verb}>Pet care</Text>
      </View>
    </ScrollView>
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
    alignItems: 'flex-start',
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
    fontWeight: 'bold',
  },
  settingsImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginLeft: 10,
    
    borderWidth: 2,
  },
  word: {
    fontSize: 20,
    marginTop: 30,
    fontWeight: 'bold',
  },
  categoriesScroll: {
    marginTop: 20,
  },
  picture: {
    marginRight: 10,
    backgroundColor: 'white',
    width: 170,
    borderRadius: 20,
    padding: 10,
    alignItems: 'center',
  },
  exercise: {
    fontSize: 17,
    fontWeight: 'bold',
  },
  ladyPic: {
    width: 90,
    height: 90,
    marginTop: 10,
  },
  visual: {
    backgroundColor: 'white',
    alignItems: 'flex-start',
    justifyContent: 'center',
    padding: 10,
    marginTop: 14,
    height: 100,
    borderRadius: 15,
    borderColor: '#E8D1BA',
    borderWidth: 1,
  },
  verb: {
    marginBottom: 7,
    fontSize: 17,
    fontWeight: 'bold',
  },
});
