import { StatusBar } from 'expo-status-bar';
import {ActivityIndicator,Button,FlatList, StyleSheet, Text, View } from 'react-native';
import WebView from 'react-native-webview';
// import Orientation from 'react-native-orientation';


export default function App() {
  return (
      <View style={styles.container}>
        <WebView
          source={{
            uri: 'http://tv.smartup.tv',
            headers: {
              'User-Agent': 'sandroid'
            }
          }}
        />
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    justifyContent: 'center',
  },

  
});
