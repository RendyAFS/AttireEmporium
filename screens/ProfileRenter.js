import React, { useState, useEffect } from 'react';
import { VStack, Text, Image, FlatList } from "@gluestack-ui/themed";

const ProfileRenter = () => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    fetchUserData()
      .then((data) => setUserData(data))
      .catch((error) => console.error(error));
  }, []);

  const fetchUserData = async () => {
    return {
      name: 'Japir',
      profilePicture: '../assets/images/avatar.png',
      email: 'Jibran.Gaming@esport.com',
      rentedCostumes: ['Kuli', 'Kang Nasgor'],
    };
  };

  return (
    <FlatList
      data={[userData]}
      keyExtractor={() => 'profile'} // Assuming there is only one profile
      renderItem={({ item }) => (
        <VStack flex={1} backgroundColor='#FFFFFF' padding={16}>
          <VStack alignItems='center'>
            <Image role='img' source={require('../assets/images/avatar.png')} alt='avatar' width={150} height={150} borderRadius={75} marginBottom={16} borderWidth={5} borderColor='#000000' />
          </VStack>
          <Text fontSize={18} fontWeight='bold' marginBottom={8} color='#FF6347'>Informasi Pengguna</Text>
          {item ? ( // Check if item (userData) is not null
            <>
              <VStack borderBottomWidth={3} borderColor='#DDDDDD' paddingVertical={8}>
                <Text fontSize={16} fontWeight='bold' color='#000000'>Nama:</Text>
                <Text fontSize={16} color='#333333'>{item.name}</Text>
              </VStack>
              <VStack borderBottomWidth={3} borderColor='#DDDDDD' paddingVertical={8}>
                <Text fontSize={16} fontWeight='bold' color='#000000'>Email:</Text>
                <Text fontSize={16} color='#333333'>{item.email}</Text>
              </VStack>
              <Text fontSize={18} fontWeight='bold' marginBottom={8} color='#FF6347'>Kostum yang Disewa</Text>
              <FlatList
                data={item.rentedCostumes}
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
        </VStack>
      )}
    />
  );
};

export default ProfileRenter;
