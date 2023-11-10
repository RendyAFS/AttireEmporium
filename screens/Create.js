import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, ScrollView } from 'react-native';
import { useTheme, Themed } from "@gluestack-ui/themed";

const CreateItem = () => {
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
    // Simulasi pemilihan gambar (ganti dengan logika sesungguhnya)
    console.log('Selecting image...');
  };

  // Fungsi untuk membuka drawer (menu samping)
  const openDrawer = () => {
    // Simulasi membuka drawer (ganti dengan logika navigasi sesungguhnya)
    console.log('Opening drawer...');
  };

  // Access the theme
  const theme = useTheme();

  return (
    <View style={{ ...theme.styles.container, padding: 16 }}>
      <View style={{ ...theme.styles.header, backgroundColor: theme.colors.black }}>
        {/* Tombol untuk membuka drawer */}
        <TouchableOpacity onPress={openDrawer} style={theme.styles.menuButton}>
          <Text style={theme.styles.menuIcon}>&#9776;</Text>
        </TouchableOpacity>
        {/* Judul halaman */}
        <Text style={theme.styles.headerTitle}>Post Your Costume</Text>
        <View style={{ flex: 1 }}></View>
      </View>
      {/* Konten halaman */}
      <ScrollView contentContainerStyle={theme.styles.content}>
        {/* Bagian Detail Kostum */}
        <Text style={theme.styles.title}>Detail Kostum</Text>
        <TextInput
          style={theme.styles.input}
          placeholder="Nama Kostum"
          value={costumeName}
          onChangeText={(text) => setCostumeName(text)}
        />
        <TextInput
          style={[theme.styles.input, theme.styles.multilineInput]}
          placeholder="Deskripsi"
          value={costumeDescription}
          onChangeText={(text) => setCostumeDescription(text)}
          multiline
        />
        <TextInput
          style={theme.styles.input}
          placeholder="Harga Rental (per hari)"
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
          <Text style={theme.styles.imageButtonText}>Tambahkan Gambar</Text>
        </TouchableOpacity>
        {/* Tombol untuk memposting kostum */}
        <TouchableOpacity style={theme.styles.postButton} onPress={handlePostCostume}>
          <Text style={theme.styles.postButtonText}>Post Costume</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

// Styles untuk komponen-komponen dalam halaman
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#FFFFFF',
  },
  header: {
    backgroundColor: '#000000',
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  menuButton: {
    padding: 10,
  },
  menuIcon: {
    fontSize: 24,
    color: '#FF6347',
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFFFFF',
    textAlign: 'center',
  },
  content: {
    padding: 16,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 16,
    color: '#FF6347',
    textAlign: 'center',
  },
  input: {
    height: 40,
    borderColor: '#CCCCCC',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 16,
    paddingHorizontal: 12,
  },
  multilineInput: {
    height: 80,
    textAlignVertical: 'top',
  },
  imageThumbnail: {
    width: 100,
    height: 100,
    borderRadius: 8,
    marginRight: 8,
  },
  imageButton: {
    backgroundColor: '#FF6347',
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 16,
  },
  imageButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  postButton: {
    backgroundColor: '#FF6347',
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  postButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default CreateItem;
