
import React from 'react';
import { Box, Button, ButtonText, Image, Text } from '@gluestack-ui/themed';
import { useNavigation } from "@react-navigation/native";

const GetInto1 = () => {
  const navigation = useNavigation();
  return (
    <Box backgroundColor='#eee' justifyContent='center' alignItems='center'>
      <Box maxWidth={'100%'} marginBottom={30} marginTop={70}>
        <Image role='img' resizeMode='contain' alt='japir' width={300} height={400} source={require('../assets/images/getinto2.png')} />
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
        borderColor='#313C47'
        borderWidth={2}
        backgroundColor='#eee'
        onPress={() => navigation.navigate('Login')}
        height={50}
        width={"65%"}
        marginTop={60}
      >
        <ButtonText color='#313C47' fontSize={20} fontWeight='bold'>
          Login
        </ButtonText>
      </Button>
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
