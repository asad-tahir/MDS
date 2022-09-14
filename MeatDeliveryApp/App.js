import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import store from './src/store/store';
import { Provider } from 'react-redux';
// import Constants from 'expo-constants';
import MyApp from './src/MyApp';
import firebaseConfig from './firebaseConfig';
import { initializeApp } from "firebase/app";
import { initializeFirestore, getFirestore, enableIndexedDbPersistence, CACHE_SIZE_UNLIMITED } from "firebase/firestore";

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

export default function App() {
  return (
    <Provider store={store}>
      <SafeAreaView style={{ flex: 1 }}>
        <NavigationContainer><MyApp /></NavigationContainer>
      </SafeAreaView >
      <StatusBar style="light" />
    </Provider>
  );
}

