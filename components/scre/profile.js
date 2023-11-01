import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';
import { RadioButton } from 'react-native-paper';
import CustomButton from './customB';

export default function Profile() {
  const [fname, setFName] = useState('');
  const [lname, setLName] = useState('');
  // const [dob, setDOB] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('');
  const [medicalHistory, setMedicalHistory] = useState('');

  const handleSave = () => {
    if (validateFields()) {
        // You can handle saving the patient's details here
      }
      else{
        // Alert.alert('Error')
      }
    // You can handle saving the patient's details here
  };

  const validateFields = () => {
    if (!fname || !dob || !gender || !email || !phone || !age) {
      Alert.alert('Validation Error', 'Please fill in all required fields.');
      return false;
    }

    // Email validation
    const emailPattern = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    if (!emailPattern.test(email)) {
      Alert.alert('Validation Error', 'Please enter a valid email address.');
      return false;
    }

    // Phone number validation (numeric and at least 10 digits)
    const phonePattern = /^[0-9]{10,}$/;
    if (!phonePattern.test(phone)) {
      Alert.alert('Validation Error', 'Please enter a valid phone number (at least 10 digits).');
      return false;
    }

    // Age validation (two-digit number)
    if (!/^\d{2}$/.test(age)) {
      Alert.alert('Validation Error', 'Please enter a valid two-digit age.');
      return false;
    }

    return true;
  };


  return (
    <View style={styles.container}>
      <Text style={styles.header}>Patient Profile</Text>
      <TextInput
        style={styles.input}
        placeholder="First Name"
        value={fname}
        onChangeText={(text) => setFName(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Last Name"
        value={lname}
        onChangeText={(text) => setLName(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={(text) => setEmail(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Phone"
        value={phone}
        onChangeText={(text) => setPhone(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Age"
        value={age}
        onChangeText={(text) => setAge(text)}
      />
      {/* <TextInput
        style={styles.input}
        placeholder="Date of Birth (DOB)"
        value={dob}
        onChangeText={(text) => setDOB(text)}
      /> */}
      <Text style={styles.label}>Gender</Text>
      <View style={styles.radioGroup}>
        <View style={styles.radioItem}>
          <Text>Male</Text>
          <RadioButton
            value="Male"
            status={gender === 'Male' ? 'checked' : 'unchecked'}
            onPress={() => setGender('Male')}
          />
        </View>
        <View style={styles.radioItem}>
          <Text>Female</Text>
          <RadioButton
            value="Female"
            status={gender === 'Female' ? 'checked' : 'unchecked'}
            onPress={() => setGender('Female')}
          />
        </View>
        <View style={styles.radioItem}>
          <Text>Others</Text>
          <RadioButton
            value="Others"
            status={gender === 'Others' ? 'checked' : 'unchecked'}
            onPress={() => setGender('Others')}
          />
        </View>
      </View>
      <TextInput
        style={styles.input}
        placeholder="Gender"
        value={gender}
        onChangeText={(text) => setGender(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Medical History"
        value={medicalHistory}
        onChangeText={(text) => setMedicalHistory(text)}
        multiline={true} // Allow multiple lines for medical history input
        numberOfLines={4} // Specify the number of lines displayed
      />
      <CustomButton
            title="Save"
            onPress={() => {
              // Navigate to the appointment details screen
              handleSave()
            }}
            style = {styles.button}
          />
      
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 16,
    },
    header: {
        marginTop: 50,
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 20,
    },
    input: {
      height: 40,
      
      borderBottomColor: 'gray',
      borderTopColor : 'white',
      borderLeftColor : 'white',
      borderRightColor : 'white',
      borderWidth: 1,
      marginBottom: 25,
      padding: 8,
    },
    label: {
      fontSize: 16,
      fontWeight: 'bold',
      marginBottom: 8,
    },
    radioGroup: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      marginBottom : 15 // Arrange the radio buttons in a horizontal line
    },
    radioItem: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    button: {
        marginTop:40,
      },
  });
