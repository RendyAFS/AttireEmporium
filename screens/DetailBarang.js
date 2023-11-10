import React from 'react';
import { Pressable, Box, Text, Image, Button, ButtonText, Heading, Icon } from "@gluestack-ui/themed";
import { useNavigation } from "@react-navigation/native";

const DetailBarang = () => {
  // Dummy rating, gantilah dengan rating yang sesuai dengan barang tersebut
  const rating = 4.5;
  const navigation = useNavigation();

  return (
    <Box flex={1} alignItems='center' >
      <Image source={require("../assets/images/getinto2.png")} alt='gambar barang' width={"100%"} height={300} />
      <Box backgroundColor='white' flex={5} width={"100%"} borderTopStartRadius={30} padding={15}>
        <Heading fontSize={24} marginTop={15} fontWeight="bold">
          Nama Barang
        </Heading>
        <Text fontSize={18} color="#777" marginTop={8}>
          Rp.40000
        </Text>

        <Text fontSize={18} color="#02E107" marginBottom={8}>
          Tersedia
        </Text>
        <Text fontSize={16} marginBottom={16}>
          Deskripsi Barang yang cukup panjang sehingga mungkin perlu beberapa baris untuk menjelaskannya dengan baik.
        </Text>
        {/* Menampilkan rating */}
        <Box flexDirection="row" alignItems="center">
          <Icon name="star" color="#FFD700" size={20} />
          <Text fontSize={16} marginLeft={5}>{rating}</Text>
        </Box>
        {/* Akhir bagian menampilkan rating */}
      </Box>

      <Box width={"100%"} alignItems='center' backgroundColor='#313C47' flex={1}>
        <Pressable onPress={() => navigation.navigate('FormPenyewaan')} >
          <Text marginTop={10} backgroundColor='#DF9B52' paddingVertical={10} paddingHorizontal={60} color='white' fontWeight='bold' borderRadius={10}>
            Pesan Sekarang
          </Text>
        </Pressable>
      </Box>
    </Box >
  );
}

export default DetailBarang;
