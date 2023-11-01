import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const PastAppointments = ({ navigation }) => {
  // Sample data for past appointments
  const pastAppointments = [
    {
      id: '3',
      doctorName: 'Dr. Mark Johnson',
      date: 'October 10, 2023',
      time: '2:00 PM',
    },
    {
      id: '4',
      doctorName: 'Dr. Sarah Lee',
      date: 'October 5, 2023',
      time: '11:30 AM',
    },
    // Add more past appointments as needed
  ];

  return (
    <View style={styles.container}>
      {pastAppointments.map((appointment) => (
        <View style={styles.appointmentCard} key={appointment.id}>
          <Text style={styles.doctorName}>{appointment.doctorName}</Text>
          <Text style={styles.dateTime}>
            Date: {appointment.date}, Time: {appointment.time}
          </Text>
          {/* <Button
            title="View"
            onPress={() => {
              // Navigate to the appointment details screen
              navigation.navigate('AppointmentDetails', { appointment });
            }}
          /> */}
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

export default PastAppointments;
