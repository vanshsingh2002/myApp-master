import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import BottomNavigation from './components/navigation/bottom.js'; // Import the BottomNavigation component
import Find from './components/scre/find.js'
import Profile from './components/scre/profile.js'
import Records from './components/scre/record.js'
import Application from './components/scre/application.js'
import Login from './components/login.js'; // Import the Login component

export default function App() {
  const [selectedTab, setSelectedTab] = useState('Home');
  const [userLoggedIn, setUserLoggedIn] = useState(false);

  // Conditionally render the login screen if the user is not logged in
  if (!userLoggedIn) {
    return (
      <Login onLogin={() => setUserLoggedIn(true)} />
    );
  }

  return (
    <View style={styles.container}>
      {selectedTab === 'Home' && <Find />}
      {selectedTab === 'Profile' && <Profile />}
      {selectedTab === 'Records' && <Records />}
      {selectedTab === 'Application' && <Application />}

      {/* Include the bottom navigation bar */}
      <BottomNavigation selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  pageContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
