import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const CustomButton = ({ title, onPress }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    
    backgroundColor: 'blue', // Background color
    padding: 10, // Padding
    borderRadius: 50, // Rounded corners
  },
  buttonText: {
    color: 'white', // Text color
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default CustomButton;
