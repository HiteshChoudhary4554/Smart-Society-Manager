import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
} from 'react-native';
import { router } from 'expo-router';

export default function CreateSociety() {

  /* ================= USER / ADMIN ================= */

  const [fullName, setFullName] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [bio, setBio] = useState('');

  /* ================= SOCIETY ================= */

  const [name, setName] = useState('');
  const [code, setCode] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [pincode, setPincode] = useState('');
  const [description, setDescription] = useState('');

  /* ================= SUBMIT ================= */

  const submitHandler = () => {

    const data = {

      user: {
        fullname: fullName,
        username,
        email,
        phone,
        password,
        role: 'admin',
        bio,
      },

      society: {
        name,
        code,
        address,
        city,
        state,
        pincode,
        description,
      },
    };

    console.log('Form Data:', data);

    // API call yaha karega later
  };

  return (

    <ScrollView style={styles.container}>

      {/* ================= HEADER ================= */}

      <Text style={styles.header}>Create New Society</Text>

      {/* ================= PART 1 : SOCIETY ================= */}

      <Text style={styles.sectionTitle}>Society Details</Text>

      <TextInput
        style={styles.input}
        placeholder="Society Name"
        value={name}
        onChangeText={setName}
      />

      <TextInput
        style={styles.input}
        placeholder="Society Code"
        value={code}
        onChangeText={setCode}
      />

      <TextInput
        style={styles.input}
        placeholder="Address"
        value={address}
        onChangeText={setAddress}
      />

      <TextInput
        style={styles.input}
        placeholder="City"
        value={city}
        onChangeText={setCity}
      />

      <TextInput
        style={styles.input}
        placeholder="State"
        value={state}
        onChangeText={setState}
      />

      <TextInput
        style={styles.input}
        placeholder="Pincode"
        keyboardType="number-pad"
        value={pincode}
        onChangeText={setPincode}
      />

      <TextInput
        style={[styles.input, styles.textArea]}
        placeholder="Society Description"
        value={description}
        onChangeText={setDescription}
        multiline
      />


        {/* ================= PART 2 : ADMIN ================= */}

      <Text style={styles.sectionTitle}>Admin Details</Text>

      <TextInput
        style={styles.input}
        placeholder="Full Name"
        value={fullName}
        onChangeText={setFullName}
      />

      <TextInput
        style={styles.input}
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
      />

      <TextInput
        style={styles.input}
        placeholder="Email"
        keyboardType="email-address"
        value={email}
        onChangeText={setEmail}
      />

      <TextInput
        style={styles.input}
        placeholder="Phone"
        keyboardType="number-pad"
        value={phone}
        onChangeText={setPhone}
      />

      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />

      <TextInput
        style={[styles.input, styles.textArea]}
        placeholder="Bio (Optional)"
        value={bio}
        onChangeText={setBio}
        multiline
      />



      {/* ================= BUTTON ================= */}

      <TouchableOpacity
        style={styles.button}
        onPress={submitHandler}
      >
        <Text style={styles.buttonText}>Create Society</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.backBtn}
        onPress={() => router.back()}
      >
        <Text style={styles.backText}>Back</Text>
      </TouchableOpacity>

    </ScrollView>
  );
}


/* ================= STYLES ================= */

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: 20,
  },

  header: {
    fontSize: 26,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 25,
    marginTop: 15,
  },

  sectionTitle: {
    fontSize: 20,
    fontWeight: '600',
    marginVertical: 15,
    color: '#333',
  },

  input: {
    backgroundColor: '#fff',
    padding: 12,
    borderRadius: 8,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#ddd',
  },

  textArea: {
    height: 80,
    textAlignVertical: 'top',
  },

  button: {
    backgroundColor: '#4CAF50',
    padding: 15,
    borderRadius: 10,
    marginTop: 20,
    alignItems: 'center',
  },

  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },

  backBtn: {
    marginTop: 15,
    alignItems: 'center',
  },

  backText: {
    color: '#555',
    fontSize: 16,
  },

});
