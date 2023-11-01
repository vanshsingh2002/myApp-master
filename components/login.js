import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet,Image } from 'react-native';

export default function Login({ onLogin }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Perform your login logic here (e.g., check credentials)
    // For demonstration purposes, we'll assume login is successful
    // if()
    onLogin();
  };

  return (
    <View style={styles.container}>
      <Image style={styles.img} source={require('./../assets/logo.png')} />
      <Text style={styles.title}>Schedula Pati</Text>
      <TextInput
        style={styles.input}
        placeholder="Mobile Number"
        value={username}
        onChangeText={(text) => setUsername(text)}
      />
      {/* <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry={true}
        value={password}
        onChangeText={(text) => setPassword(text)}
      /> */}
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>SignUp/SignIn</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  img:{
    height:100,
    width:100
  },
  title: {
    fontSize: 42,
    fontWeight:'bold',
    marginBottom: 20,
  },
  input: {
    width: '80%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    paddingLeft: 10,
    marginBottom: 30,
    marginTop:200,
  },
  button: {
    backgroundColor: 'orange',
    width: '80%',
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
  buttonText: {
    color: 'black',
    fontSize: 16,
  },
});
