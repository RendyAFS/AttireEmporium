import React, { useState, useEffect } from 'react';
import { Box, Image, Button, Heading, Text } from "@gluestack-ui/themed";
import { Pressable, Alert } from 'react-native';
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from '@expo/vector-icons';
import firebase from "../firebase";
import AsyncStorage from "@react-native-async-storage/async-storage";
// Functional
const DetailBarang = ({ route }) => {
  const navigation = useNavigation();
  const data = route.params.item;
  const [userData, setUserData] = useState('');
  const [favorite, setFavorite] = useState(true)
  console.log(data);
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
  // console.log(route)
  console.log(data.costumeId)
  const showFavoritePopup = async () => {
    try {
      const userDataString = await AsyncStorage.getItem("user-data");
      if (userDataString) {
        const userData = JSON.parse(userDataString);
        const uid = userData.credential.user.uid;
        const username = userData.username;

        // Mendapatkan data kostum yang akan ditambahkan ke favorit
        const data = route.params.item;
        const idCostume = data.costumeId
        console.log('idku ' + idCostume)
        // Mengecek apakah kostum sudah ada di daftar favorit
        const isAlreadyFavorite = await checkIfAlreadyFavorite(uid, data.costumeId);

        if (!isAlreadyFavorite) {
          // Menambahkan data kostum ke daftar favorit pengguna
          const database = firebase.database();
          const newFavoriteRef = database.ref(`users/${uid}/favoriteCostumes/${idCostume}`).push({
            isFavorite: true,
          });

          // Tampilkan pesan dan navigasikan ke halaman Favorite
          Alert.alert(
            'Tersimpan di Favorite !',
            'Barang telah ditambahkan ke daftar Favorite',
            [
              {
                text: 'OK',
                onPress: () => console.log('Favorite Popup Closed'),
              },
              {
                text: 'Cek Favorite mu',
                style: 'color = "#02E107"',
                onPress: () => navigation.navigate('Favorite'),
              },
            ],
            { cancelable: false }
          );
        } else {
          // Jika sudah ada, ubah status favorit menjadi false
          const favoriteRef = database.ref(`users/${uid}/favoriteCostumes/${data.costumeId}`);
          favoriteRef.update({
            isFavorite: false,
          });

          // Tampilkan pesan bahwa barang dihapus dari favorit
          Alert.alert(
            'Dihapus dari Favorite !',
            'Barang dihapus dari daftar Favorite',
            [
              {
                text: 'OK',
                onPress: () => console.log('Favorite Popup Closed'),
              },
            ],
            { cancelable: false }
          );
        }
      }
    } catch (error) {
      console.error(error);
    }
  };

  const checkIfAlreadyFavorite = async (uid, costumeId) => {
    try {
      const database = firebase.database();
      const favoriteRef = database.ref(`users/${uid}/favoriteCostumes/${data.costumeId}`);
      const snapshot = await favoriteRef.once('value');
      const favorites = snapshot.val();

      if (favorites) {
        const existingFavorite = Object.values(favorites).find(
          (favorite) => favorite.costumeId === costumeId
        );
        return existingFavorite;
      } else {
        return null;
      }
    } catch (error) {
      console.error('Error checking favorite:', error);
      return null;
    }
  };


  return (
    <Box flex={1} alignItems='center' >
      {/* <Image role='img' resizeMode='contain' source={{ uri: data.image }} alt='gambar barang' width={"100%"} height={300} /> */}
      <Box backgroundColor='white' flex={5} width={"100%"} borderTopStartRadius={30} padding={15}>
        <Heading fontSize={24} marginTop={15} fontWeight="bold">
          {data.costumeName}
        </Heading>
        <Text fontSize={18} color="#777" marginTop={8}>
          Rp {data.rentalPrice}
        </Text>
        <Text fontSize={18} color="#02E107" marginTop={2}>
          Tersedia
        </Text>
        <Box width={'auto'} marginTop={1}>
          <Pressable onPress={() => showFavoritePopup()}>
            <Ionicons name="heart-outline" size={30} color="red" marginBottom={5} />
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
