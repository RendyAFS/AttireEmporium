import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, ScrollView } from 'react-native';
import { useTheme, Themed } from "@gluestack-ui/themed";

const CostumeEditMockup = () => {
  // State untuk menyimpan informasi kostum yang akan diedit
  const [costumeName, setCostumeName] = useState('Nama Kostum');
  const [costumeDescription, setCostumeDescription] = useState('Deskripsi Kostum');
  const [rentalPrice, setRentalPrice] = useState('50');
  const [costumeImages, setCostumeImages] = useState([
    'https://example.com/image1.jpg',
    'https://example.com/image2.jpg',
  ]);

  // Fungsi untuk menangani pemilihan gambar kostum
  const handleImageSelection = () => {
    // Simulasi pemilihan gambar (ganti dengan logika sesungguhnya)
    console.log('Memilih gambar untuk diedit...');
  };

  // Fungsi untuk memperbarui postingan kostum
  const handleUpdateCostume = () => {
    // Simulasi memperbarui postingan kostum (ganti dengan logika sesungguhnya)
    console.log('Memperbarui postingan kostum:', {
      costumeName,
      costumeDescription,
      rentalPrice,
      costumeImages,
    });
  };

  // Fungsi untuk membuka drawer (menu samping)
  const openDrawer = () => {
    // Simulasi membuka drawer (ganti dengan logika navigasi sesungguhnya)
    console.log('Membuka drawer...');
  };

  // Access the theme
  const theme = useTheme();

  return (
    <View style={{ ...theme.styles.container, padding: 16 }}>
      {/* Header dengan tombol burger menu */}
      <View style={{ ...theme.styles.header, backgroundColor: theme.colors.black }}>
        <TouchableOpacity onPress={openDrawer} style={theme.styles.menuButton}>
          <Text style={theme.styles.menuIcon}>&#9776;</Text>
        </TouchableOpacity>
        {/* Judul halaman */}
        <Text style={theme.styles.headerTitle}>Edit Your Costume</Text>
        <View style={{ flex: 1 }}></View>
      </View>
      {/* Konten halaman */}
      <ScrollView contentContainerStyle={theme.styles.content}>
        {/* Bagian Detail Kostum */}
        <Text style={theme.styles.title}>Costume Details</Text>
        <TextInput
          style={theme.styles.input}
          placeholder="Costume Name"
          value={costumeName}
          onChangeText={(text) => setCostumeName(text)}
        />
        <TextInput
          style={[theme.styles.input, theme.styles.multilineInput]}
          placeholder="Description"
          value={costumeDescription}
          onChangeText={(text) => setCostumeDescription(text)}
          multiline
        />
        <TextInput
          style={theme.styles.input}
          placeholder="Rental Price (per day)"
          value={rentalPrice}
          onChangeText={(text) => setRentalPrice(text)}
          keyboardType="numeric"
        />
        {/* Bagian Gambar Kostum */}
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {costumeImages.map((image, index) => (
            <Image key={index} source={{ uri: image }} style={theme.styles.imageThumbnail} />
          ))}
        </ScrollView>
        {/* Tombol untuk menambahkan gambar kostum */}
        <TouchableOpacity style={theme.styles.imageButton} onPress={handleImageSelection}>
          <Text style={theme.styles.imageButtonText}>Add Image</Text>
        </TouchableOpacity>
        {/* Tombol untuk memperbarui postingan kostum */}
        <TouchableOpacity style={theme.styles.postButton} onPress={handleUpdateCostume}>
          <Text style={theme.styles.postButtonText}>Update Costume</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

export default CostumeEditMockup;
