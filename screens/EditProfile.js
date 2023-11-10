import React, { useState } from 'react';
import { Box, Image, Button, Input, Heading, InputField } from "@gluestack-ui/themed";
import { View } from 'react-native';

const EditProfile = () => {
  const [fullName, setFullName] = useState("Japir Jibran kanibal");
  const [address, setAddress] = useState("Alamat lengkap pengguna");
  const [phoneNumber, setPhoneNumber] = useState("Nomor Hp pengguna");

  const handleSave = () => {
    // Logika penyimpanan data disini
    console.log("Data saved:", { fullName, address, phoneNumber });
  };

  return (
    <Box flex={1} backgroundColor='#021C35'>
      <Box flex={1} alignItems="center">
        <Image
          source={require("../assets/images/avatar.png")}
          width={300}
          height={300}
          borderRadius={150}
          marginBottom={10}
          alt='profile'
          rounded={50}
        />
        <Heading color='white' fontSize={25}>{fullName}</Heading>
      </Box>
      <Box flex={1} padding={20} marginTop={50} width={"100%"} borderTopLeftRadius={50} borderTopRightRadius={50} backgroundColor="white">
        <Input
          marginTop={20}
          borderWidth={0}
          placeholder="Nama Lengkap"
         
          backgroundColor="#f3f3f3"
          rounded={10}
          onChangeText={(text) => setFullName(text)}
        >
          <InputField placeholder="Username"  value={fullName} />
        </Input>
        <Input
          
          marginTop={20}
          borderWidth={0}
          onChangeText={(text) => setAddress(text)}
          backgroundColor="#f3f3f3"
          rounded={10}
        >
          <InputField placeholder="Alamat Lengkap" value={address} />
        </Input>
        <Input
          placeholder="Nomor Hp"
          marginTop={20}
          borderWidth={0}
          backgroundColor="#f3f3f3"
          rounded={10}
          onChangeText={(text) => setPhoneNumber(text)}
        >
          <InputField value={phoneNumber} placeholder="Nomor Hp" />
        </Input>
        <Button marginTop={50} backgroundColor="#DF9B52" rounded={10} onPress={handleSave}>
          <Heading color="white">Save</Heading>
        </Button>
      </Box>
    </Box>
  );
}

export default EditProfile;
