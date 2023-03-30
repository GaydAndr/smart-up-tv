import { StatusBar } from 'expo-status-bar';
import {ActivityIndicator,Button,FlatList, StyleSheet, Text, View } from 'react-native';
import { useDispatch, Provider } from 'react-redux';
import Test from './src/components/Test';
import { store } from './src/redux/store';
import {useEffect, useState} from 'react';
import  axios  from 'axios';

export default function App() {
    // const dispatch = useDispatch();
  const [data, setData] = useState();
  const [isLoading, setLoading] = useState(true);
  const loginObj: {} = {
     email: "galgayand@gmail.com",
    password: "123456789galgayand"
  }
  
  const BACK = axios.create({
    // baseURL: 'http://192.168.1.107:3001',
    baseURL: 'http://smartup.komitex.net',
  });

   // 'Mozilla/5.0 (Linux; Android 12; Pixel 6 Build/SD1A.210817.023; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/94.0.4606.71 Mobile Safari/537.36'
            // 'Mozilla/5.0 (Linux; Android 13) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/111.0.5563.115 Mobile Safari/537.36'
          // '  Mozilla/5.0 (Linux; Android 12; SM-S906N Build/QP1A.190711.020; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/80.0.3987.119 Mobile Safari/537.36'
            // 'host':'000'

  const getMovies = async () => {
    try {
        
      // const response = await BACK.post('/api/auth/login', loginObj, {
        const response = await BACK.get('/', {
        headers:
        {
          'User-Agent': 'sandroid',
          'Content-Type':  'text/html;charset=utf-8;'
        },
      });
      const json = await response.data;
      setData(json);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Provider store={store}>
      <View style={styles.container}>
       <Text>Open up App.tsx to start working on your app!</Text>
        <StatusBar style="auto" />
        {/* <Test /> */}
         <Button
        title="fetch "

          onPress={() => {
            getMovies().then(console.log(data))
            // console.log(999);
            // console.log(data);
          }}
      />
      </View>
      <View style={{flex: 1, padding: 24}}>
         <Text>{data}</Text>
      </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
