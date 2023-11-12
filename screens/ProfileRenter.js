import React, { useState, useEffect } from 'react';
import { VStack, Text, Image, ScrollView, FlatList } from "@gluestack-ui/themed";

const ProfileRenter = () => {
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
    <VStack flex={1} backgroundColor='#FFFFFF' padding={16}>
      <ScrollView>
        {userData ? (
          <>
            <VStack alignItems='center'>
              <Image source={require('../assets/images/avatar.png')} alt='avatar' width={150} height={150} borderRadius={75} marginBottom={16} borderWidth={5} borderColor='#000000' />
            </VStack>
            <Text fontSize={18} fontWeight='bold' marginBottom={8} color='#FF6347'>Informasi Pengguna</Text>
            <VStack borderBottomWidth={3} borderColor='#DDDDDD' paddingVertical={8}>
              <Text fontSize={16} fontWeight='bold' color='#000000'>Nama:</Text>
              <Text fontSize={16} color='#333333'>{userData.name}</Text>
            </VStack>
            <VStack borderBottomWidth={3} borderColor='#DDDDDD' paddingVertical={8}>
              <Text fontSize={16} fontWeight='bold' color='#000000'>Email:</Text>
              <Text fontSize={16} color='#333333'>{userData.email}</Text>
            </VStack>
            <Text fontSize={18} fontWeight='bold' marginBottom={8} color='#FF6347'>Kostum yang Disewa</Text>
            <FlatList
              data={userData.rentedCostumes}
              renderItem={({ item }) => (
                <VStack justifyContent='space-between' padding={8} borderBottomWidth={3} borderColor='#DDDDDD'>
                  <Text>{item}</Text>
                </VStack>
              )}
              keyExtractor={(item) => item}
            />
          </>
        ) : (
          <Text fontSize={18} color='#333333'>Loading...</Text>
        )}
      </ScrollView>
    </VStack>
  );
};

export default ProfileRenter