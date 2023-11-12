// Impor komponen yang diperlukan dari react dan react-native
import React, { useState } from 'react';
import { VStack, Text, TextInput, Button, Image } from "@gluestack-ui/themed";
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';

// Definisikan komponen EditCostume
const EditCostume = ({ costume }) => {
  // Gunakan state untuk menyimpan data inputan
  const [title, setTitle] = useState(costume.title);
  const [description, setDescription] = useState(costume.description);
  const [price, setPrice] = useState(costume.price);
  const [image, setImage] = useState(costume.image);

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
    console.log('Kostum diperbarui:', title, description, price, image);
  };

  return (
    <VStack flex={1} backgroundColor='#FFFFFF' padding={16}>
      {/* Input untuk judul kostum */}
      <Text fontSize={18} fontWeight='bold' marginBottom={8} color='#FF6347'>Judul Kostum:</Text>
      <TextInput
        value={title}
        onChangeText={setTitle}
        placeholder="Perbarui judul kostum"
      />

      {/* Input untuk deskripsi kostum */}
      <Text fontSize={18} fontWeight='bold' marginBottom={8} color='#FF6347'>Deskripsi Kostum:</Text>
      <TextInput
        value={description}
        onChangeText={setDescription}
        placeholder="Perbarui deskripsi kostum"
      />

      {/* Input untuk harga kostum */}
      <Text fontSize={18} fontWeight='bold' marginBottom={8} color='#FF6347'>Harga Kostum:</Text>
      <TextInput
        value={price}
        onChangeText={setPrice}
        placeholder="Perbarui harga kostum"
        keyboardType="numeric"
      />

      {/* Tombol untuk memilih gambar dari kamera */}
      <Button title="Pilih dari Kamera" onPress={selectFromCamera} />

      {/* Tombol untuk memilih gambar dari galeri */}
      <Button title="Pilih dari Galeri" onPress={selectFromGallery} />

      {/* Tampilkan gambar yang dipilih */}
      {image && <Image source={{ uri: image.uri }} style={{ width: 200, height: 200 }} />}

      {/* Tombol untuk submit */}
      <Button title="Perbarui Kostum" onPress={handleSubmit} />
    </VStack>
  );
};

// Ekspor komponen EditCostume agar dapat digunakan di bagian lain dari aplikasi Anda
export default EditCostume;
