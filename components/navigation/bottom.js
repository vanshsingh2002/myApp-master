import React from 'react';
import { View, TouchableOpacity, StyleSheet, Image } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
export default function BottomNavigation({ selectedTab, setSelectedTab }) {
  const handleTabPress = (tabName) => {
    setSelectedTab(tabName);
  };

  return (
    <View style={styles.bottomNavBar}>
      <TouchableOpacity
        style={styles.tabButton}
        onPress={() => handleTabPress('Home')}
      >
        <Image
          source={require('./../../assets/search.png')} // Replace with the path to your custom home icon
          style={{
            width: 30, // Set the width as per your image dimensions
            height: 30, // Set the height as per your image dimensions
            tintColor: selectedTab === 'Home' ? 'blue' : 'gray', // Color when selected
          }}
        />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.tabButton}
        onPress={() => handleTabPress('Records')}
      >
        <Image
          source={require('./../../assets/folder.png')} // Replace with the path to your custom home icon
          style={{
            width: 30, // Set the width as per your image dimensions
            height: 30, // Set the height as per your image dimensions
            tintColor: selectedTab === 'Records' ? 'blue' : 'gray', // Color when selected
          }}
        />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.tabButton}
        onPress={() => handleTabPress('Application')}
      >
        <Image
          source={require('./../../assets/resume.png')} // Replace with the path to your custom home icon
          style={{
            width: 30, // Set the width as per your image dimensions
            height: 30, // Set the height as per your image dimensions
            tintColor: selectedTab === 'Application' ? 'blue' : 'gray', // Color when selected
          }}
        />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.tabButton}
        onPress={() => handleTabPress('Profile')}
      >
        <Icon name="person" size={30} color={selectedTab === 'Profile' ? 'blue' : 'gray'} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  bottomNavBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: 'white',
    height: 80,
  },
  tabButton: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
