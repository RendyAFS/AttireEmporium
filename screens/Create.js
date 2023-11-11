// Impor komponen yang diperlukan dari react dan react-native
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, ScrollView } from 'react-native';
import { useTheme } from "@gluestack-ui/themed";

// Definisikan komponen CreateCostume
const Create = () => {
  // Gunakan state untuk menyimpan data inputan
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

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

  // Fungsi untuk membuka drawer (menu samping)
  const openDrawer = () => {
    // Simulasi membuka drawer (belum ada logika navigasi sesungguhnya)
    console.log('Opening drawer...');
  };

  // Access the theme
  const theme = useTheme();

  // Define the styles
  const styles = {
    container: {
      flex: 1,
      backgroundColor: '#fff',
    },
    header: {
      flexDirection: 'row',
      alignItems: 'center',
      padding: 16,
      backgroundColor: '#f5f5f5',
    },
    menuButton: {
      marginRight: 16,
    },
    menuIcon: {
      fontSize: 24,
      color: '#DF9B52',
    },
    headerTitle: {
      fontSize: 20,
      fontWeight: 'bold',
      color: '#DF9B52',
    },
    content: {
      padding: 16,
    },
    title: {
      fontSize: 18,
      fontWeight: 'bold',
      marginBottom: 8,
    },
    input: {
      borderWidth: 1,
      borderColor: '#ddd',
      borderRadius: 4,
      padding: 8,
      marginBottom: 16,
    },
    multilineInput: {
      height: 80,
    },
    imageThumbnail: {
      width: 100,
      height: 100,
      marginRight: 8,
    },
    imageButton: {
      justifyContent: 'center',
      alignItems: 'center',
      height: 50,
      borderRadius: 4,
      backgroundColor: '#DF9B52',
      marginBottom: 16,
    },
    imageButtonText: {
      color: '#fff',
      fontWeight: 'bold',
    },
    postButton: {
      justifyContent: 'center',
      alignItems: 'center',
      height: 50,
      borderRadius: 4,
      backgroundColor: '#DF9B52',
    },
    postButtonText: {
      color: '#fff',
      fontWeight: 'bold',
    },
  };

  return (
    <View style={{ ...styles.container, padding: 16 }}>
      <View style={{ ...styles.header, backgroundColor: 'black' }}>
        {/* Tombol untuk membuka drawer */}
        <TouchableOpacity onPress={openDrawer} style={styles.menuButton}>
          <Text style={styles.menuIcon}>☰</Text>
        </TouchableOpacity>
        {/* Judul halaman */}
        <Text style={styles.headerTitle}>Post Your Costume</Text>
        <View style={{ flex: 1 }}></View>
      </View>
      {/* Konten halaman */}
      <ScrollView contentContainerStyle={styles.content}>
        {/* Bagian Detail Kostum */}
        <Text style={styles.title}>Detail Kostum</Text>
        <TextInput
          style={styles.input}
          placeholder="Nama Kostum"
          value={costumeName}
          onChangeText={(text) => setCostumeName(text)}
        />
        <TextInput
          style={[styles.input, styles.multilineInput]}
          placeholder="Deskripsi"
          value={costumeDescription}
          onChangeText={(text) => setCostumeDescription(text)}
          multiline
        />
        <TextInput
          style={styles.input}
          placeholder="Harga Rental (per hari)"
          value={rentalPrice}
          onChangeText={(text) => setRentalPrice(text)}
          keyboardType="numeric"
        />
        {/* Bagian Gambar Kostum */}
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {costumeImages.map((image, index) => (
            <Image key={index} source={{ uri: image }} style={styles.imageThumbnail} />
          ))}
        </ScrollView>
        {/* Tombol untuk menambahkan gambar kostum */}
        <TouchableOpacity style={styles.imageButton} onPress={handleImageSelection}>
          <Text style={styles.imageButtonText}>Tambahkan Gambar</Text>
        </TouchableOpacity>
        {/* Tombol untuk memposting kostum */}
        <TouchableOpacity style={styles.postButton} onPress={handlePostCostume}>
          <Text style={styles.postButtonText}>Post Costume</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

// Ekspor komponen CreateCostume agar dapat digunakan di bagian lain dari aplikasi Anda
export default Create;
