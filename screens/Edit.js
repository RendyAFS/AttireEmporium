import React, { useState } from 'react';
import { Box, Text, Pressable, Image, ScrollView, VStack, Input, InputField, InputSlot, InputIcon, useTheme } from '@gluestack-ui/themed';

const EditItem = () => {
  const [costumeName, setCostumeName] = useState('');
  const [costumeDescription, setCostumeDescription] = useState('');
  const [rentalPrice, setRentalPrice] = useState('');
  const [costumeImages, setCostumeImages] = useState([]);
  const [showPassword, setShowPassword] = useState(false);

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  const handleEditCostume = () => {
    console.log('Editing costume:', {
      costumeName,
      costumeDescription,
      rentalPrice,
      costumeImages,
    });
  };

  const handleImageSelection = () => {
    console.log('Selecting image...');
  };

  const theme = useTheme();

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
            <Image role='img' key={index} source={{ uri: image }} style={{ width: 100, height: 100, marginRight: 8, borderRadius: 8 }} />
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

export default EditItem;