import { GluestackUIProvider, Heading, Box, Text, Pressable, Image, Textarea, TextareaInput } from "@gluestack-ui/themed";
import Icon from 'react-native-vector-icons/FontAwesome';
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";



const FormPengembalian = ({ route }) => {
  const data = (route.params.item);
  console.log(route.params.item)
  const navigation = useNavigation();
  const handleGoBack = () => {
    navigation.goBack();
  };

  const [rating, setRating] = useState(0);

  const handleStarPress = (starIndex) => {
    setRating(starIndex + 1);
  };

  const renderStars = () => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(
        <Pressable key={i} onPress={() => handleStarPress(i)} marginTop={30} marginStart={5}>
          <Icon
            name={i < rating ? 'star' : 'star-o'}
            size={30}
            color="#DF9B52"
          />
        </Pressable>
      );
    }
    return stars;
  };

  return (
    <Box flex={1} justifyContent="center" bgColor="#F5F5F5" alignItems="center">
      <Heading marginBottom={10}>Konfirmasi Pengembalian barang</Heading>
      <Box width={'95%'}>
        <Pressable>
          <Box paddingTop={10} marginBottom={20}>
            <Box width={'auto'} height={150} bgColor="white" borderColor="#DF9B52" borderWidth={2} borderRadius={10}>
              <Box flex={1} flexDirection="row">
                <Box flex={2}>
                  <Image
                    source={{ uri: data.image }}
                    width={'auto'} height={145}
                    borderTopLeftRadius={8}
                    borderBottomLeftRadius={8}
                    alt="img"
                    role="img"
                  />
                </Box>
                <Box flex={4} flexDirection="column" padding={5}>
                  <Box flex={1}>
                    <Text fontWeight="bold" fontSize={18}>{data.title}</Text>
                  </Box>
                  <Box flex={2}>
                    <Text fontSize={14}>{data.desc}</Text>
                  </Box>
                  <Box flex={1}>
                    <Text fontSize={14}>{data.date}</Text>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
        </Pressable>
        <Box paddingHorizontal={10}>
          <Textarea
            size="md"
            isReadOnly={false}
            isInvalid={false}
            isDisabled={false}
            borderWidth={1}
            borderColor="black"
            width={'100%'}
            marginTop={20}
          >
            <TextareaInput placeholder="Komentar..." role="dialog" />
          </Textarea>
        </Box>
        <Box flexDirection="row" alignItems="center">
          <Heading marginTop={25} marginStart={20} marginEnd={20}>Rating:</Heading>
          <Box flexDirection="row">{renderStars()}</Box>
        </Box>
        <Pressable onPress={() => {
          navigation.navigate('Home')
        }}
          marginTop={15} alignItems="center"
        >
          <Text padding={10} width={100} borderRadius={10} backgroundColor="black" color="white" textAlign="center">
            Submit
          </Text>
        </Pressable>
      </Box>
    </Box>
  );
};

export default FormPengembalian;
