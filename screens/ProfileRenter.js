// Impor komponen yang diperlukan dari react dan react-native
import React from 'react';
import { View, Text } from 'react-native';

// Data dummy statis untuk profil penyewa dan daftar kostum yang disewa
const renter = {
  name: 'Japir Jibran',
  location: 'Lumajang',
  bio: 'Saya suka menyewa kostum unik',
  costumes: ['Kostum Spiderman', 'Kostum Batman', 'Kostum Superman']
};

// Definisikan komponen ProfileRenter
const ProfileRenter = () => {
  return (
    <View>
      {/* Tampilkan nama penyewa */}
      <Text>{renter.name}</Text>
      {/* Tampilkan lokasi penyewa */}
      <Text>{renter.location}</Text>
      {/* Tampilkan bio penyewa */}
      <Text>{renter.bio}</Text>
      {/* Tampilkan daftar kostum yang disewa */}
      {renter.costumes.map((costume, index) => (
        <Text key={index}>{costume}</Text>
      ))}
    </View>
  );
};

// Ekspor komponen ProfileRenter agar dapat digunakan di bagian lain dari aplikasi Anda
export default ProfileRenter;
