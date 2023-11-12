profile
import React, { useState, useEffect } from 'react';
import { Box, Image, Button, Input, Heading, InputField } from "@gluestack-ui/themed";
import { Alert } from 'react-native';
import { useNavigation } from "@react-navigation/native";

const EditProfile = () => {
  const [fullName, setFullName] = useState("Javier Jibran");
  const [address, setAddress] = useState("Lumajang");
  const [phoneNumber, setPhoneNumber] = useState("081230038908");
  const navigation = useNavigation(); 

  const handleSave = () => {

    console.log("Data saved:", { fullName, address, phoneNumber });


    Alert.alert(
      "Profile Diubah !",
      "Perubahan pada profil Anda telah disimpan.",
      [
        { text: "OK", onPress: () => navigation.navigate('Profile')}
      ],
      { cancelable: false }
    );
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
          role='img'
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
          <InputField placeholder="Username"  />
        </Input>
        <Input
          marginTop={20}
          borderWidth={0}
          onChangeText={(text) => setAddress(text)}
          backgroundColor="#f3f3f3"
          rounded={10}
        >
          <InputField placeholder="Alamat Lengkap"  />
        </Input>
        <Input
          placeholder="Nomor Hp"
          marginTop={20}
          borderWidth={0}
          backgroundColor="#f3f3f3"
          rounded={10}
          onChangeText={(text) => setPhoneNumber(text)}
        >
          <InputField  placeholder="Nomor Hp" />
        </Input>
        <Button marginTop={50} backgroundColor="#DF9B52" rounded={10} onPress={handleSave}>
          <Heading color="white">Save</Heading>
        </Button>
      </Box>
    </Box>
  );
}

export default EditProfile;
