import React, { useState, useEffect } from 'react';
import { VStack, Text, Input, InputField, Pressable, Image, ScrollView } from '@gluestack-ui/themed';
import { useTheme } from '@gluestack-ui/themed';
import firebase from "../firebase";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
//definisi create
const Create = () => {
  // State untuk menyimpan informasi kostum yang akan diposting
  const [costumeName, setCostumeName] = useState('');
  const [costumeDescription, setCostumeDescription] = useState('');
  const [rentalPrice, setRentalPrice] = useState('');
  const [costumeImages, setCostumeImages] = useState([]);
  const [userData, setUserData] = useState('');
  const navigation = useNavigation();
  const getUserData = async () => {
    try {
      const userDataString = await AsyncStorage.getItem("user-data");
      console.log("Data from AsyncStorage:", userDataString)
      if (userDataString) {
        const userData = JSON.parse(userDataString);
        setUserData(userData);
        const uid = userData.credential.user.uid;

        // Menampilkan UID ke konsol
        console.log("User UID from AsyncStorage:", uid);
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    // Panggil fungsi untuk mengambil email setiap kali komponen di-mount
    getUserData();
  }, []);
  // Fungsi untuk menangani proses posting kostum
  const handlePostCostume = async () => {
    try {
      const userDataString = await AsyncStorage.getItem("user-data");
      if (userDataString) {
        const userData = JSON.parse(userDataString);
        const uid = userData.credential.user.uid;
        const username = userData.username;

        // Menambahkan UID pengguna ke data kostum
        const database = firebase.database();
        const newCostumeRef = database.ref('costumes/' + userData.credential.user.uid).push({
          costumeName,
          costumeDescription,
          rentalPrice,
          costumeImages,
          uid,
          username,
        });

        console.log('Posted costume with key:', newCostumeRef.key);

        // Reset nilai form setelah posting
        setCostumeName('');
        setCostumeDescription('');
        setRentalPrice('');
        setCostumeImages([]);
        navigation.replace("Tabs");
      }
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    const database = firebase.database();
    // Listen for changes in the 'costumes' node
    const costumesRef = database.ref('costumes');
    costumesRef.on('value', (snapshot) => {
      const costumesData = snapshot.val();
      // Update your component state or perform other actions with the data
    });
    // Cleanup the listener when the component unmounts
    return () => costumesRef.off('value');
  }, []);


  // Fungsi untuk menangani pemilihan gambar kostum
  const handleImageSelection = () => {
    // Simulasi pemilihan gambar (belum ada logika sesungguhnya)
    console.log('Selecting image...');
  };

  // Access the theme
  const theme = useTheme();

  return (
    <VStack flex={1} backgroundColor={theme.backgroundColor} padding={16}>
      {/* Konten halaman */}
      <ScrollView contentContainerStyle={{ padding: 16 }}>
        {/* Bagian Detail Kostum */}
        <Text fontSize={18} fontWeight="bold" marginBottom={8} color={theme.titleColor}>
          Detail Kostum {userData.username}
        </Text>
        <VStack space="md" marginTop={30}>
          <Input
            backgroundColor={theme.inputBackgroundColor}
            rounded={10}
          >
            <InputField
              type="text"
              placeholder="Nama Kostum"
              value={costumeName}
              onChangeText={(text) => setCostumeName(text)}
            />
          </Input>
        </VStack>
        <VStack space="md" marginTop={30}>
          <Input
            backgroundColor={theme.inputBackgroundColor}
            rounded={10}
            height={80}
          >
            <InputField
              type="text"
              placeholder="Deskripsi"
              value={costumeDescription}
              onChangeText={(text) => setCostumeDescription(text)}
              multiline
            />
          </Input>
        </VStack>
        <VStack space="md" marginTop={30}>
          <Input
            backgroundColor={theme.inputBackgroundColor}
            rounded={10}
          >
            <InputField
              type="text"
              placeholder="Harga Rental (per hari)"
              value={rentalPrice}
              onChangeText={(text) => setRentalPrice(text)}
              keyboardType="numeric"
            />
          </Input>
        </VStack>
        {/* Bagian Gambar Kostum */}
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {costumeImages.map((image, index) => (
            <Image key={index} source={{ uri: image }} style={{ width: 100, height: 100, marginRight: 8, borderRadius: 8 }} />
          ))}
        </ScrollView>
        {/* Tombol untuk menambahkan gambar kostum */}
        <Pressable
          justifyContent="center"
          alignItems="center"
          height={50}
          marginTop={10}
          borderRadius={4}
          backgroundColor={'#DF9B52'}
          marginBottom={16}
          onPress={handleImageSelection}
        >
          <Text color={'white'} fontWeight="bold">
            Tambahkan Gambar
          </Text>
        </Pressable>
        {/* Tombol untuk memposting kostum */}
        <Pressable
          justifyContent="center"
          alignItems="center"
          height={50}

          borderRadius={4}
          backgroundColor={'#DF9B52'}
          onPress={handlePostCostume}
        >
          <Text color="white" fontWeight="bold">
            Post Costume
          </Text>
        </Pressable>
      </ScrollView>
    </VStack>
  );
};

export default Create;