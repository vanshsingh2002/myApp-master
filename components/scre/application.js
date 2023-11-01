import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import UpcomingAppointments from '../scre/upcoming'
import PastAppointments from '../scre/past'
import CanceledAppointments from '../scre/cancelled'

const TabNavigator = () => {
  const [selectedTab, setSelectedTab] = useState('Upcoming');

  const handleTabPress = (tabName) => {
    setSelectedTab(tabName);
  };

  return (
    <View style={styles.container}>
      <View style={styles.tabBar}>
        <TouchableOpacity
          style={[
            styles.tabItem,
            selectedTab === 'Upcoming' && styles.selectedTab,
          ]}
          onPress={() => handleTabPress('Upcoming')}
        >
          <Text style={styles.tabText}>Upcoming</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.tabItem,
            selectedTab === 'Past' && styles.selectedTab,
          ]}
          onPress={() => handleTabPress('Past')}
        >
          <Text style={styles.tabText}>Past</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.tabItem,
            selectedTab === 'Canceled' && styles.selectedTab,
          ]}
          onPress={() => handleTabPress('Canceled')}
        >
          <Text style={styles.tabText}>Canceled</Text>
        </TouchableOpacity>
      </View>

      {/* Render the content based on the selected tab */}
      {selectedTab === 'Upcoming' && <UpcomingAppointments />}
      {selectedTab === 'Past' && <PastAppointments />}
      {selectedTab === 'Canceled' && <CanceledAppointments />}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  tabBar: {
    marginTop : 50,
    flexDirection: 'row',
    backgroundColor: 'white',

  },
  tabItem: {
    flex: 1,
    alignItems: 'center',
    padding: 16,
    borderBottomWidth: 2,
    borderBottomColor: 'transparent',
  },
  selectedTab: {
    // borderBottomColor: 'blue',
    backgroundColor:'#e0e0e0'
  },
  tabText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default TabNavigator;
