import { View, } from 'react-native';
import React from 'react';
import { Box, Button, ButtonText, Image, Text, Center } from '@gluestack-ui/themed';

const GetInto1 = () => {
  return (
    <Box flex={1} backgroundColor='#eee' justifyContent='center' alignItems='center'>
      <Box maxWidth={'100%'} marginBottom={40}>
        <Image alt='japir' width={400} height={670} source={require('../assets/images/getinto1.png')} />
      </Box>
      <Box width={"65%"}>
          <Text fontSize={20} textAlign='center' marginTop={40}>Selamat datang di Attire Emporium, tempatnya penyewaan fashion pilihan untuk penampilanmu yang tak terlupakan</Text>
      </Box>
      <Button backgroundColor='#313C47' height={50} width={"65%"} marginTop={50}><ButtonText fontSize={20} fontWeight='bold'>Next</ButtonText></Button>
    </Box>
  );
};

export default GetInto1;
