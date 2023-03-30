import { Alert, Button, Text, View } from "react-native";
import { useDispatch } from 'react-redux';
import { getFetch } from "../redux/api-service";
import { ThunkDispatch } from "@reduxjs/toolkit";
import { useEffect } from 'react';

export default function Test() {
 const dispatch = useDispatch<ThunkDispatch<any, any, any>>();
    useEffect(() => {
    //  

    });
  getFetch()
  return <View>
    <Text>
      тут щось має получитись
    </Text>
     <Button
        title="Press me"
        onPress={() =>dispatch(  getFetch()) }
      />
  </View>
}