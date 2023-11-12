// Impor komponen yang diperlukan dari react dan react-native
import React, { useState } from 'react';
import { VStack, Text, TextInput, Button, Image } from "@gluestack-ui/themed";
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';

// Definisikan komponen Create
const Create = () => {
  // Gunakan state untuk menyimpan data inputan
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [image, setImage] = useState(null);

  // Fungsi untuk memilih gambar dari kamera
  const selectFromCamera = () => {
    const options = {
      mediaType: 'photo',
      quality: 0.5,
      includeBase64: true,
    };
    launchCamera(options, (response) => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else {
        setImage(response);
      }
    });
  };

  // Fungsi untuk memilih gambar dari galeri
  const selectFromGallery = () => {
    const options = {
      mediaType: 'photo',
      quality: 0.5,
      includeBase64: true,
    };
    launchImageLibrary(options, (response) => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else {
        setImage(response);
      }
    });
  };

  // Fungsi untuk menangani submit
  const handleSubmit = () => {
    // Logika untuk memposting kostum akan ditempatkan di sini
    console.log('Kostum diposting:', title, description, price, image);
  };

  return (
    <VStack flex={1} backgroundColor='#FFFFFF' padding={16}>
      {/* Input untuk judul kostum */}
      <Text fontSize={18} fontWeight='bold' marginBottom={8} color='#FF6347'>Judul Kostum:</Text>
      <TextInput
        value={title}
        onChangeText={setTitle}
        placeholder="Masukkan judul kostum"
      />

      {/* Input untuk deskripsi kostum */}
      <Text fontSize={18} fontWeight='bold' marginBottom={8} color='#FF6347'>Deskripsi Kostum:</Text>
      <TextInput
        value={description}
        onChangeText={setDescription}
        placeholder="Masukkan deskripsi kostum"
      />

      {/* Input untuk harga kostum */}
      <Text fontSize={18} fontWeight='bold' marginBottom={8} color='#FF6347'>Harga Kostum:</Text>
      <TextInput
        value={price}
        onChangeText={setPrice}
        placeholder="Masukkan harga kostum"
        keyboardType="numeric"
      />

      {/* Tombol untuk memilih gambar dari kamera */}
      <Button title="Pilih dari Kamera" onPress={selectFromCamera} />

      {/* Tombol untuk memilih gambar dari galeri */}
      <Button title="Pilih dari Galeri" onPress={selectFromGallery} />

      {/* Tampilkan gambar yang dipilih */}
      {image && <Image source={{ uri: image.uri }} style={{ width: 200, height: 200 }} />}

      {/* Tombol untuk submit */}
      <Button title="Post Kostum" onPress={handleSubmit} />
    </VStack>
  );
};


export default Create;
