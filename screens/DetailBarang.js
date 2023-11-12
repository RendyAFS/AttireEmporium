import React from 'react';
import { Box, Image, Button, Heading, Text } from "@gluestack-ui/themed";
import { Pressable, Alert } from 'react-native';
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from '@expo/vector-icons'; 

const DetailBarang = ({ route }) => {
  const navigation = useNavigation();
  const data = route.params.item;

  const showFavoritePopup = () => {
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
  };

  return (
    <Box flex={1} alignItems='center' >
      <Image role='img' resizeMode='contain' source={{ uri: data.image }} alt='gambar barang' width={"100%"} height={300} />
      <Box backgroundColor='white' flex={5} width={"100%"} borderTopStartRadius={30} padding={15}>
        <Heading fontSize={24} marginTop={15} fontWeight="bold">
          {data.title}
        </Heading>
        <Text fontSize={18} color="#777" marginTop={8}>
          Rp {data.harga}
        </Text>
        <Text fontSize={18} color="#02E107" marginTop={2}>
          Tersedia
        </Text>
        <Box width={'auto'} marginTop={1}>
          <Pressable onPress={() => showFavoritePopup()}>
            <Ionicons name="heart-outline" size={30} color="red" marginBottom={5} />
          </Pressable>
        </Box>
        <Text fontSize={20} marginTop={15} fontWeight="bold">Deskripsi Barang</Text>
        <Text fontSize={16}>
          {data.subtitle}
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
