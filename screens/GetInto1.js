
import React from 'react';
import { Box, Button, ButtonText, Image, Text } from '@gluestack-ui/themed';
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect, useState } from "react";
import firebase from "../firebase";
const GetInto1 = () => {
  const [isLoading, setIsLoading] = useState(true);
  const navigation = useNavigation();
  useEffect(() => {
    getUser();
  }, []);
  const getUser = async () => {
    try {
      // Ambil data dari AsyncStorage
      const userData = await AsyncStorage.getItem("user-data");
      if (userData !== null) {
        // Diarahkan ke Halaman Home
        navigation.replace("Tabs");
      } else {
        setIsLoading(false);
      }
    } catch (e) {
      console.error(e);
    }
  };
  return (
    <Box backgroundColor='#eee' justifyContent='center' alignItems='center'>
      <Box Width={'100%'} marginTop={50} marginBottom={20}>
        <Image role='img' resizeMode='contain' alt='japir' width={200} height={400} source={require('../assets/images/getinto2.png')} />
      </Box>
      <Box width={"80%"}>
        <Text fontSize={22} fontWeight='bold' textAlign='center' >
          Selamat Datang di Attire Emporium
        </Text>
        <Text fontSize={17} textAlign='center' marginTop={10} marginLeft={15} marginRight={15}>
          Tempatnya penyewaan fashion pilihan untuk penampilanmu yang tak terlupakan!
        </Text>
      </Box>
      <Button
        backgroundColor='#313C47'
        onPress={() => navigation.navigate('GetInto2')}
        height={50}
        width={"65%"}
        marginTop={20}
      >
        <ButtonText fontSize={20} fontWeight='bold'>
          Next
        </ButtonText>
      </Button>
    </Box>

  );
};

export default GetInto1;
