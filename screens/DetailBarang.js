import React, { useEffect, useState } from 'react';
import { Box, Image, Button, Heading, Text } from "@gluestack-ui/themed";
import { Pressable, Alert } from 'react-native';
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from '@expo/vector-icons';
import firebase from "../firebase";
import AsyncStorage from "@react-native-async-storage/async-storage";
// Functional
const DetailBarang = ({ route }) => {
  const navigation = useNavigation();
  const [userDataLoaded, setUserDataLoaded] = useState(false);
  const [userData, setUserData] = useState('');
  const [isCostumeFavorite, setIsCostumeFavorite] = useState(false);
  const data = route.params.item;
  console.log(data)
  const getUserData = async () => {
    try {
      const userDataString = await AsyncStorage.getItem("user-data");
      console.log("Data from AsyncStorage:", userDataString);
      if (userDataString) {
        const userData = JSON.parse(userDataString);
        setUserData(userData);
        setUserDataLoaded(true);  // Set userDataLoaded to true after setting userData
        const uid = userData.credential.user.uid;

        // Menampilkan UID ke konsol
        console.log("User UID from AsyncStorage:", uid);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const checkIsCostumeFavorite = async () => {
    try {
      if (!userDataLoaded) {
        return;  // Wait for userData to be loaded before checking favorite status
      }

      const uid = userData.credential.user.uid;
      const costumeId = data.costumeId;
      const database = firebase.database();

      const favoriteRef = database.ref(`favoriteCostume/${costumeId}`);
      const snapshot = await favoriteRef.once('value');

      setIsCostumeFavorite(snapshot.exists());
    } catch (error) {
      console.error('Error checking if costume is a favorite:', error);
    }
  };

  // useEffect Render GetUserData
  useEffect(() => {
    getUserData();
  }, []);
  // useEffect to check if costume is a favorite
  useEffect(() => {
    checkIsCostumeFavorite();
  }, [userDataLoaded]);


  // const isCostumeFavorite = async () => {
  //   try {
  //     const uid = userData.credential.user.uid;
  //     const costumeId = data.costumeId;
  //     const database = firebase.database();

  //     const favoriteRef = database.ref(`users/${uid}/favoriteCostume/${costumeId}`);
  //     const snapshot = await favoriteRef.once("value");

  //     return snapshot.exists();
  //   } catch (error) {
  //     console.error('Error checking if costume is a favorite:', error);
  //     return false;
  //   }
  // };

  console.log(data)
  console.log(userData)
  const showFavoritePopup = async () => {
    try {
      const uid = userData.credential.user.uid;
      const costumeId = data.costumeId;
      const database = firebase.database();
      const costumeName = data.costumeName;  
      const costumeDescription = data.costumeDescription;
      const costumeCategory = data.costumeCategory;
      const status = data.status;
      const rentalPrice = data.rentalPrice;

      
      const favoriteRef = database.ref(`favoriteCostume/${costumeId}`);
      const snapshot = await favoriteRef.once("value");

      if (snapshot.exists()) {
        // If the costumeId exists, delete it
        favoriteRef.remove();
      } else {
        // If the costumeId doesn't exist, add it
        database.ref(`favoriteCostume/${costumeId}`).set({
          costumeName,
          costumeDescription,
          costumeCategory,
          status,
          rentalPrice,
          uid
        });
      }

      navigation.replace("Tabs");
      // Alert.alert(
      //   'Tersimpan di Favorite!',
      //   'Barang telah ditambahkan ke daftar Favorite',
      //   [
      //     {
      //       text: 'OK',
      //       onPress: () => console.log('Favorite Popup Closed'),
      //     },
      //     {
      //       text: 'Cek Favorite mu',
      //       style: 'color = "#02E107"',
      //       onPress: () => navigation.navigate('Favorite'),
      //     },
      //   ],
      //   { cancelable: false }
      // );
    } catch (error) {
      console.error('Error processing favorite:', error);
    }
    
    checkIsCostumeFavorite();
    navigation.replace("Tabs");
  };


  return (
    <Box flex={1} alignItems='center' >
      <Image role='img' resizeMode='contain' source={{ uri: data.imageUrl }} alt='gambar barang' width={"100%"} height={300} />
      <Box backgroundColor='white' flex={5} width={"100%"} borderTopStartRadius={30} padding={15}>
        <Heading fontSize={24} marginTop={15} fontWeight="bold">
          {data.costumeName}
        </Heading>
        <Text fontSize={18} color="#777" marginTop={8}>
          Rp {data.rentalPrice}
        </Text>
        <Text fontSize={18} color="#02E107" marginTop={2}>
          {data.status}
        </Text>
        <Box width={'auto'} marginTop={1}>
          <Pressable onPress={() => showFavoritePopup()}>
            {isCostumeFavorite ? (
              <Ionicons name="heart" size={30} color="red" marginBottom={5} />
            ) : (
              <Ionicons name="heart-outline" size={30} color="red" marginBottom={5} />
            )}
          </Pressable>
        </Box>
        <Text fontSize={20} marginTop={15} fontWeight="bold">Deskripsi Barang : </Text>
        <Text fontSize={16}>
          {data.costumeDescription}
        </Text>
      </Box>
      <Box width={"100%"} alignItems='center' backgroundColor='#313C47' paddingBottom={20} paddingTop={10}>
        <Pressable onPress={() => navigation.navigate('FormPenyewaan', { data: data })} >
          <Text marginTop={10} backgroundColor='#DF9B52' paddingVertical={10} paddingHorizontal={60} color='white' fontWeight='bold' borderRadius={10}>
            Pesan Sekarang
          </Text>
        </Pressable>
      </Box>
    </Box >
  );
}

export default DetailBarang;
