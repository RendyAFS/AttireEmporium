import React, { useState, useEffect } from 'react';
import { View, Text, Image, ScrollView, FlatList, TouchableOpacity } from 'react-native';
import { useTheme, Themed } from "@gluestack-ui/themed";

const RenterProfile = () => {
  // State untuk menyimpan data pengguna
  const [userData, setUserData] = useState(null);

  // Menggunakan useEffect untuk menjalankan logika setelah komponen di-mount
  useEffect(() => {
    // Simulasi pengambilan data pengguna dari server
    // Ganti ini dengan logika pengambilan data aktual
    fetchUserData()
      .then((data) => setUserData(data))
      .catch((error) => console.error(error));
  }, []);

  // Fungsi untuk mengambil data pengguna
  const fetchUserData = async () => {
    // Implementasikan logika pengambilan data di sini
    // Kembalikan data pengguna dalam format yang diinginkan
    return {
      name: 'Japir',
      profilePicture: 'https://example.com/profile.jpg',
      email: 'Jibran.Gaming@esport.com',
      rentedCostumes: ['Kuli', 'Kang Nasgor'], // Daftar nama kostum yang disewa
    };
  };

  // Fungsi untuk membuka drawer (simulasi, ganti dengan logika navigasi aktual)
  const openDrawer = () => {
    console.log('Membuka drawer...');
  };

  // Access the theme
  const theme = useTheme();

  return (
    <View style={{ ...theme.styles.container, flex: 1 }}>
      {/* Header dengan tombol menu burger */}
      <View style={{ ...theme.styles.header, backgroundColor: theme.colors.black }}>
        <TouchableOpacity onPress={openDrawer} style={theme.styles.menuButton}>
          <Text style={theme.styles.menuIcon}>&#9776;</Text>
        </TouchableOpacity>
        {/* Judul header yang ditempatkan di tengah */}
        <Text style={theme.styles.headerTitle}>Renter Profile</Text>
        <View style={{ flex: 1 }}></View>
      </View>
      {/* Konten utama dalam ScrollView */}
      <ScrollView contentContainerStyle={theme.styles.content}>
        {userData ? (
          <>
            {/* Konten ketika data pengguna tersedia */}
            <View style={theme.styles.centeredContent}>
              <Image source={{ uri: userData.profilePicture }} style={theme.styles.profileImage} />
            </View>
            <Text style={theme.styles.sectionTitle}>Informasi Pengguna</Text>
            <View style={theme.styles.userInfoBox}>
              <Text style={theme.styles.userInfoLabel}>Nama:</Text>
              <Text style={theme.styles.userInfoValue}>{userData.name}</Text>
            </View>
            <View style={theme.styles.userInfoBox}>
              <Text style={theme.styles.userInfoLabel}>Email:</Text>
              <Text style={theme.styles.userInfoValue}>{userData.email}</Text>
            </View>
            <Text style={theme.styles.sectionTitle}>Kostum yang Disewa</Text>
            <FlatList
              data={userData.rentedCostumes}
              renderItem={({ item }) => (
                <View style={theme.styles.rentedCostume}>
                  <Text>{item}</Text>
                </View>
              )}
              keyExtractor={(item) => item}
            />
          </>
        ) : (
          // Konten ketika data pengguna masih diambil
          <Text style={theme.styles.loadingText}>Loading...</Text>
        )}
      </ScrollView>
    </View>
  );
};

export default RenterProfile;
