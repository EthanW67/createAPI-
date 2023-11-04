import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ScrollView, TextInput  } from 'react-native';



export default function App() {
  return (
    <View style={styles.container}>
      <Text> Uber Eats Orders</Text>
      <StatusBar style="auto" />
      <img src="pokemon-logo-png-1446.png"/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
});