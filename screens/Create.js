// Impor komponen yang diperlukan dari react dan react-native
import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';

// Definisikan komponen CreateCostume
const Create = () => {
  // Gunakan state untuk menyimpan data inputan
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  // Fungsi untuk menangani submit
  const handleSubmit = () => {
    // Logika untuk memposting kostum akan ditempatkan di sini
    console.log('Kostum diposting:', title, description);
  };

  return (
    <View>
      {/* Input untuk judul kostum */}
      <Text>Judul Kostum:</Text>
      <TextInput
        value={title}
        onChangeText={setTitle}
        placeholder="Masukkan judul kostum"
      />

      {/* Input untuk deskripsi kostum */}
      <Text>Deskripsi Kostum:</Text>
      <TextInput
        value={description}
        onChangeText={setDescription}
        placeholder="Masukkan deskripsi kostum"
      />

      {/* Tombol untuk submit */}
      <Button title="Post Kostum" onPress={handleSubmit} />
    </View>
  );
};

// Ekspor komponen CreateCostume agar dapat digunakan di bagian lain dari aplikasi Anda
export default Create;
