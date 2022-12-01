import 'react-native-gesture-handler';
import { ScrollView, StyleSheet, Text, View, Image, ActivityIndicator } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import AppStack from './navigation/AppStack';
import AuthStack from './navigation/AuthStack';


export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [userToken, setUserToken] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, [])

  if (isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" color="#80683c" />
      </View>
    )
  }
  return (

    <NavigationContainer>
      {/* <AuthStack /> */}
      <AppStack />
    </NavigationContainer>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
