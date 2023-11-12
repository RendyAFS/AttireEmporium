import React, { useState } from 'react';
import { VStack, Text, Input, InputField, Pressable, Image, ScrollView } from '@gluestack-ui/themed';
import { useTheme } from '@gluestack-ui/themed';

const Create = () => {
  // State untuk menyimpan informasi kostum yang akan diposting
  const [costumeName, setCostumeName] = useState('');
  const [costumeDescription, setCostumeDescription] = useState('');
  const [rentalPrice, setRentalPrice] = useState('');
  const [costumeImages, setCostumeImages] = useState([]);

  // Fungsi untuk menangani proses posting kostum
  const handlePostCostume = () => {
    // Simulasi posting kostum (ganti dengan logika sesungguhnya)
    console.log('Posting costume:', {
      costumeName,
      costumeDescription,
      rentalPrice,
      costumeImages,
    });

    // Reset nilai form setelah posting
    setCostumeName('');
    setCostumeDescription('');
    setRentalPrice('');
    setCostumeImages([]);
  };

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
          Detail Kostum
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