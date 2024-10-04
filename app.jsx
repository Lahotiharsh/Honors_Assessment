import React, { useState } from 'react';
import { View, Text, TextInput, Button, TouchableOpacity, StyleSheet } from 'react-native';

const AuthScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleLogin = () => {
    // Add login logic here
  };

  const handleSignUp = () => {
    // Add signup logic here
  };

  return (
    <View style={styles.container}>
      <Text style={styles.welcomeBackText}>Welcome Back! You’ve Been Missed!</Text>
      <Text style={styles.discoverText}>Discover Your Dream Job Here</Text>

      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />

      <TouchableOpacity onPress={handleLogin} style={styles.button}>
        <Text style={styles.buttonText}>Sign In</Text>
      </TouchableOpacity>

      <TouchableOpacity>
        <Text style={styles.forgotPasswordText}>Forgot your password?</Text>
      </TouchableOpacity>

      <Text style={styles.orText}>Or continue with</Text>
      <TouchableOpacity style={styles.socialButton}>
        <Text style={styles.socialButtonText}>Login with Google</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.socialButton}>
        <Text style={styles.socialButtonText}>Login with Facebook</Text>
      </TouchableOpacity>

      <Text style={styles.newAccountText}>New to Us? Create a New Account</Text>
      
      <TextInput
        style={styles.input}
        placeholder="Confirm Password"
        value={confirmPassword}
        onChangeText={setConfirmPassword}
        secureTextEntry
      />

      <TouchableOpacity onPress={handleSignUp} style={styles.button}>
        <Text style={styles.buttonText}>Sign Up</Text>
      </TouchableOpacity>

      <TouchableOpacity>
        <Text style={styles.alreadyHaveAccountText}>Already have an account?</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
  },
  welcomeBackText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  discoverText: {
    fontSize: 16,
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 15,
    paddingHorizontal: 10,
  },
  button: {
    backgroundColor: '#007BFF',
    padding: 10,
    alignItems: 'center',
    marginBottom: 15,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
  forgotPasswordText: {
    color: '#007BFF',
    marginBottom: 20,
    textAlign: 'center',
  },
  orText: {
    textAlign: 'center',
    marginVertical: 10,
  },
  socialButton: {
    backgroundColor: '#f0f0f0',
    padding: 10,
    alignItems: 'center',
    marginBottom: 10,
  },
  socialButtonText: {
    color: '#333',
  },
  newAccountText: {
    textAlign: 'center',
    marginVertical: 20,
  },
  alreadyHaveAccountText: {
    textAlign: 'center',
    marginTop: 10,
    color: '#007BFF',
  },
});

export default AuthScreen;
