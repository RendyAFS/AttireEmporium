import React, { useState, useEffect } from 'react';
import { View, Text, Image, StyleSheet, ScrollView, FlatList, TouchableOpacity } from 'react-native';

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

  return (
    <View style={styles.container}>
      {/* Header dengan tombol menu burger */}
      <View style={styles.header}>
        <TouchableOpacity onPress={openDrawer} style={styles.menuButton}>
          <Text style={styles.menuIcon}>&#9776;</Text>
        </TouchableOpacity>
        {/* Judul header yang ditempatkan di tengah */}
        <Text style={styles.headerTitle}>Renter Profile</Text>
        <View style={{ flex: 1 }}></View>
      </View>
      {/* Konten utama dalam ScrollView */}
      <ScrollView contentContainerStyle={styles.content}>
        {userData ? (
          <>
            {/* Konten ketika data pengguna tersedia */}
            <View style={styles.centeredContent}>
              <Image source={{ uri: userData.profilePicture }} style={styles.profileImage} />
            </View>
            <Text style={styles.sectionTitle}>Informasi Pengguna</Text>
            <View style={styles.userInfoBox}>
              <Text style={styles.userInfoLabel}>Nama:</Text>
              <Text style={styles.userInfoValue}>{userData.name}</Text>
            </View>
            <View style={styles.userInfoBox}>
              <Text style={styles.userInfoLabel}>Email:</Text>
              <Text style={styles.userInfoValue}>{userData.email}</Text>
            </View>
            <Text style={styles.sectionTitle}>Kostum yang Disewa</Text>
            <FlatList
              data={userData.rentedCostumes}
              renderItem={({ item }) => (
                <View style={styles.rentedCostume}>
                  <Text>{item}</Text>
                </View>
              )}
              keyExtractor={(item) => item}
            />
          </>
        ) : (
          // Konten ketika data pengguna masih diambil
          <Text style={styles.loadingText}>Loading...</Text>
        )}
      </ScrollView>
    </View>
  );
};

// Styles untuk komponen-komponen dalam komponen RenterProfile
const styles = StyleSheet.create({
  container: {
    flex: 1,
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
  centeredContent: {
    alignItems: 'center',
  },
  profileImage: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 16,
    borderWidth: 5,
    borderColor: '#000000', 
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#FF6347', 
  },
  userInfoBox: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomWidth: 3,
    borderColor: '#DDDDDD',
    paddingVertical: 8,
  },
  userInfoLabel: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000000', 
  },
  userInfoValue: {
    fontSize: 16,
    color: '#333333', 
  },
  rentedCostume: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 8,
    borderBottomWidth: 3,
    borderColor: '#DDDDDD',
  },
  loadingText: {
    fontSize: 18,
    color: '#333333',
  },
});

export default RenterProfile;