import { View, } from 'react-native';
import React from 'react';
import { Box, Button, ButtonText, Image, Text, Center } from '@gluestack-ui/themed';
import { useNavigation } from "@react-navigation/native";

const GetInto2 = () => {
  const navigation = useNavigation();
  return (
    <Box backgroundColor='#eee' justifyContent='center' alignItems='center'>
      <Box maxWidth={'100%'} marginBottom={40} marginTop={70}>
        <Image alt='japir' width={340} height={570} source={require('../assets/images/getinto1.png')} />
      </Box>
      <Box width={"80%"}>
          <Text fontSize={18} textAlign='center' marginTop={10}>Attire Emporium hadir untuk menyempurnakan momen-momen istimewamu. Temukan gaya yang sesuai dan buat setiap penampilan berkesan.</Text>
      </Box>
      <Button borderColor='#313C47' borderWidth={2} backgroundColor='#eee' onPress={() => navigation.navigate('Login')} height={50} width={"65%"} marginTop={50}>
        <ButtonText color='#313C47' fontSize={20} fontWeight='bold'>Login</ButtonText></Button>
      <Button backgroundColor='#313C47' onPress={() => navigation.navigate('GetInto2')} height={50} width={"65%"} marginTop={15}><ButtonText fontSize={20} fontWeight='bold'>Start!</ButtonText></Button>
    </Box>
  );
};

export default GetInto2;