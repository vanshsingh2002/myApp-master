import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const CanceledAppointments = ({ navigation }) => {
  // Sample data for canceled appointments
  const canceledAppointments = [
    {
      id: '5',
      doctorName: 'Dr. Michael Brown',
      date: 'October 3, 2023',
      time: '4:15 PM',
      cDate : 'October 2, 2023',
      cTime : '1.15 PM'
    },
    {
      id: '6',
      doctorName: 'Dr. Lisa Taylor',
      date: 'October 1, 2023',
      time: '9:45 AM',
      cDate : 'Sept 30, 2023',
      cTime : '3.15 PM'
    },
    // Add more canceled appointments as needed
  ];

  return (
    <View style={styles.container}>
      {canceledAppointments.map((appointment) => (
        <View style={styles.appointmentCard} key={appointment.id}>
          <Text style={styles.doctorName}>{appointment.doctorName}</Text>
          <Text style={styles.dateTime}>
            Date: {appointment.date}, Time: {appointment.time}
          </Text>
          <Text style={styles.dateTime}>
            Canceled On: {appointment.cDate},  {appointment.cTime}
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

export default CanceledAppointments;
