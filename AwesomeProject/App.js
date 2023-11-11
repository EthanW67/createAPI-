import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, TextInput,Button, TouchableOpacity, Image} from 'react-native';  

TouchableOpacity.defaultProps = { activeOpacity: 0.8 };
const AppButton = ({ onPress, title }) => (
  <TouchableOpacity onPress={onPress} style={styles.appButtonContainer}>
    <Text style={styles.appButtonText}>{title}</Text>
  </TouchableOpacity>
);
export default function App() {
  return (
    <View style={styles.container}> 
     <View style={styles.screenContainer}>
      <AppButton title="World of health"/>
      </View>  
      <Text style={styles.title}> Uber Eats Orders</Text> 
      <Text style={styles.undertitle}>we are fat</Text>
      <Text style={styles.undertitle}>and we are hungry</Text>
      <Text style={styles.undertitle}>and we are broke</Text>
      <StatusBar style="auto" /> 
      <View style={styles.screenContainer}>
      <AppButton title="World of FatAsses"/>
      </View>  
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#3FC060",
    alignItems: 'center',
    justifyContent: 'center',
    color: "white",
    fontWeight: "bold",
  },
  title: {
    fontWeight: "bold",
    fontSize: 30,
    color: "#162328",
  },
  undertitle: {
    fontSize: 20,
  },   
  screenContainer: {
    flex: 1,
    justifyContent: "center",
    padding: 16
  },
  appButtonContainer: {
    elevation: 8,
    backgroundColor: "#162328",
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 12
  },
  appButtonText: {
    fontSize: 18,
    color: "white",
    fontWeight: "bold",
    alignSelf: "center",
    textTransform: "uppercase"
  }
  });