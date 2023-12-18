import React, { useState, useEffect } from 'react';
import { VStack, Text, Input, InputField, Pressable, Image, ScrollView, Select, SelectTrigger, SelectInput, SelectIcon, SelectPortal, SelectBackdrop, SelectContent, SelectDragIndicatorWrapper, SelectItem, Box, SelectDragIndicator } from '@gluestack-ui/themed';
import { Entypo, AntDesign } from '@expo/vector-icons';
import { useTheme } from '@gluestack-ui/themed';
import firebase from "../firebase";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import * as ImagePicker from 'expo-image-picker';
//definisi create
const Create = () => {
  // State untuk menyimpan informasi kostum yang akan diposting
  const [costumeName, setCostumeName] = useState('');
  const [costumeDescription, setCostumeDescription] = useState('');
  const [rentalPrice, setRentalPrice] = useState('');
  const [costumeCategory, setCostumeCategory] = useState('');
  const [image, setImage] = useState(null);
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

  const handleSelectChange = (value) => {
    setCostumeCategory(value);

  };
  const pickImage = async () => {

    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };
  console.log('Test' + costumeCategory);
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
        const newCostumeRef = database.ref('costumes/').push({
          costumeName,
          costumeDescription,
          rentalPrice,
          costumeCategory,
          uid,
          image,
          username,
        });

        console.log('Posted costume with key:', newCostumeRef.key);

        // Reset nilai form setelah posting
        setCostumeName('');
        setCostumeDescription('');
        setRentalPrice('');
        setImage('');
        navigation.replace("Tabs");
      }
    } catch (error) {
      console.error(error);
    }
  };
  console.log(image);
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
    <VStack flex={1} backgroundColor={'white'} padding={16}>
      {/* Konten halaman */}
      <ScrollView contentContainerStyle={{ padding: 16 }}>
        {/* Bagian Detail Kostum */}
        <Text fontSize={18} fontWeight="bold" marginBottom={8} color={theme.titleColor}>
          Detail Kostum {userData.username}
        </Text>
        <VStack space="md" marginTop={30}>
          <Input
            backgroundColor={theme.inputBackgroundColor}
            borderBottomWidth={3}
            borderEndWidth={3}
            rounded={7}
            borderColor='#021C35'
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
            borderColor='#021C35'
            height={80}
            borderBottomWidth={3}
            borderEndWidth={3}
            rounded={7}
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
        <VStack space="md" marginTop={20}>
          {/* <Input
            backgroundColor={theme.inputBackgroundColor}
            borderBottomWidth={3}
            borderEndWidth={3}
            rounded={7}
            borderColor='#021C35'
          >
            <InputField
              type="text"
              placeholder="Harga Rental (per hari)"
              value={rentalPrice}
              onChangeText={(text) => setRentalPrice(text)}
              keyboardType="numeric"

            />
          </Input> */}
          <Input
            backgroundColor={theme.inputBackgroundColor}
            borderBottomWidth={3}
            borderEndWidth={3}
            rounded={7}
            borderColor='#021C35'
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
        <Box marginTop={10}>

          <Select
            borderBottomWidth={3}
            borderTopWidth={1}
            borderStartWidth={1}
            borderEndWidth={3}
            rounded={7}
            borderColor='#021C35'
            onValueChange={handleSelectChange}
          >
            <SelectTrigger variant="outline" size="md" >
              <SelectInput placeholder="Pilih Kategori" />
              <SelectIcon mr="$3">
                <Entypo name="chevron-down" size={15} color="black" />
              </SelectIcon>
            </SelectTrigger>
            <SelectPortal>
              <SelectBackdrop />
              <SelectContent>
                <SelectDragIndicatorWrapper>
                  <SelectDragIndicator />
                </SelectDragIndicatorWrapper>
                <SelectItem label="Baju Japir" value="Japir" />
                <SelectItem label="Ara Ara ALbar" value="Albar" />
                <SelectItem
                  label="Cross Platform Development Process"
                  value="Cross Platform Development Process"
                />
                <SelectItem
                  label="UI Designing"
                  value="ui"
                  isDisabled={true}
                />
                <SelectItem
                  label="Backend Development"
                  value="backend"
                />
              </SelectContent>
            </SelectPortal>
          </Select>

        </Box>
        {/* Bagian Gambar Kostum */}
        <Box marginTop={20} justifyContent='center' alignItems='center'>
          {image && <Image source={{ uri: image }} alignItems='center' alt='gambarkostum' style={{ width: 200, height: 200 }} />}

        </Box>


        {/* Tombol untuk menambahkan gambar kostum */}
        <Pressable
          justifyContent="center"
          alignItems="center"
          height={50}
          marginTop={10}
          borderRadius={4}
          backgroundColor={'#DF9B52'}
          marginBottom={16}
          onPress={pickImage}
        >
          <Text color={'white'} fontWeight="bold">
            <AntDesign name="picture" size={24} color="black" /> Tambahkan Gambar
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