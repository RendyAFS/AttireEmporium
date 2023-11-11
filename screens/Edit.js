// Impor komponen yang diperlukan dari react dan react-native
import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';

// Definisikan komponen EditCostume
const Edit = ({ costume }) => {
  // Gunakan state untuk menyimpan data inputan
  const [title, setTitle] = useState(costume.title);
  const [description, setDescription] = useState(costume.description);

  // Fungsi untuk menangani submit
  const handleSubmit = () => {
    // Logika untuk memposting kostum akan ditempatkan di sini
    console.log('Kostum diperbarui:', title, description);
  };

  return (
    <View>
      {/* Input untuk judul kostum */}
      <Text>Judul Kostum:</Text>
      <TextInput
        value={title}
        onChangeText={setTitle}
        placeholder="Perbarui judul kostum"
      />

      {/* Input untuk deskripsi kostum */}
      <Text>Deskripsi Kostum:</Text>
      <TextInput
        value={description}
        onChangeText={setDescription}
        placeholder="Perbarui deskripsi kostum"
      />

      {/* Tombol untuk submit */}
      <Button title="Perbarui Kostum" onPress={handleSubmit} />
    </View>
  );
};

// Ekspor komponen EditCostume agar dapat digunakan di bagian lain dari aplikasi Anda
export default Edit;
