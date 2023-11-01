import React from 'react';
import { View, Text, Button, StyleSheet, Alert } from 'react-native';
import CustomButton from './customB';

const UpcomingAppointments = ({ navigation }) => {
  // Sample data for upcoming appointments
  const upcomingAppointments = [
    {
      id: '1',
      doctorName: 'Dr. John Smith',
      date: 'October 15, 2023',
      time: '10:30 AM',
    },
    {
      id: '2',
      doctorName: 'Dr. Emily Davis',
      date: 'October 18, 2023',
      time: '3:00 PM',
    },
    // Add more upcoming appointments as needed
  ];

  return (
    <View style={styles.container}>
      {upcomingAppointments.map((appointment) => (
        <View style={styles.appointmentCard} key={appointment.id}>
          <Text style={styles.doctorName}>{appointment.doctorName}</Text>
          <Text style={styles.dateTime}>
            Date: {appointment.date}, Time: {appointment.time}
          </Text>
          <CustomButton
            title="Views"
            onPress={() => {
              // Navigate to the appointment details screen
              Alert.alert('Feature Coming Soon')
            }}
          />
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  appointmentCard: {
    backgroundColor: 'white',
    padding: 16,
    marginBottom: 16,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#e0e0e0',
  },
  doctorName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  dateTime: {
    fontSize: 16,
    marginBottom: 8,
  },
});

export default UpcomingAppointments;
