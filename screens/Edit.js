// Impor komponen yang diperlukan dari react dan react-native
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, ScrollView } from 'react-native';
import { useTheme } from "@gluestack-ui/themed";

const EditItem = () => {
 // State untuk menyimpan informasi kostum yang akan diedit
 const [costumeName, setCostumeName] = useState('');
 const [costumeDescription, setCostumeDescription] = useState('');
 const [rentalPrice, setRentalPrice] = useState('');
 const [costumeImages, setCostumeImages] = useState([]);

 // Fungsi untuk menangani proses editing kostum
 const handleEditCostume = () => {
   // Simulasi editing kostum (ganti dengan logika sesungguhnya)
   console.log('Editing costume:', {
     costumeName,
     costumeDescription,
     rentalPrice,
     costumeImages,
   });
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
    <Box flex={1} backgroundColor="#1A1A1A" padding={16}>
      <ScrollView contentContainerStyle={{ padding: 16 }}>
        <Text fontSize={18} fontWeight="bold" marginBottom={8} color="#FFD700">
          Costume Details
        </Text>
        <VStack space="md" width="100%">
          <Input backgroundColor="#f3f3f3" borderWidth={0} rounded={10}>
            <InputField
              placeholder="Costume Name"
              value={costumeName}
              onChangeText={(text) => setCostumeName(text)}
            />
          </Input>
        </VStack>
        <VStack space="md" marginTop={20} width="100%">
          <Input backgroundColor="#f3f3f3" borderWidth={0} rounded={10}>
            <InputField
              placeholder="Description"
              value={costumeDescription}
              onChangeText={(text) => setCostumeDescription(text)}
              multiline
            />
          </Input>
        </VStack>
        <VStack space="md" marginTop={20} width="100%">
          <Input borderWidth={0} backgroundColor="#f3f3f3" rounded={10}>
            <InputField
              placeholder="Rental Price (per day)"
              value={rentalPrice}
              onChangeText={(text) => setRentalPrice(text)}
              keyboardType="numeric"
            />
          </Input>
        </VStack>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {costumeImages.map((image, index) => (
            <Image key={index} source={{ uri: image }} style={{ width: 100, height: 100, marginRight: 8, borderRadius: 8 }} />
          ))}
        </ScrollView>
        <Pressable
          marginTop={20}
          justifyContent="center"
          alignItems="center"
          height={50}
          borderRadius={4}
          backgroundColor="#FFD700"
          marginBottom={16}
          onPress={handleImageSelection}
        >
          <Text color="#1A1A1A" fontWeight="bold">
            Add Image
          </Text>
        </Pressable>
        <Pressable
          justifyContent="center"
          alignItems="center"
          height={50}
          borderRadius={4}
          backgroundColor="#FFD700"
          onPress={handleEditCostume}
        >
          <Text color="#1A1A1A" fontWeight="bold">
            Edit Costume
          </Text>
        </Pressable>
      </ScrollView>
    </Box>
  );
};

export default EditItem