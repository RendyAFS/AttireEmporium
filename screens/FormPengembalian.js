import { GluestackUIProvider, Heading, Box, Text, Pressable, Image, Textarea, TextareaInput, Center } from "@gluestack-ui/themed";
import Icon from 'react-native-vector-icons/FontAwesome';
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { config } from "@gluestack-ui/config";


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
    <GluestackUIProvider config={config}>

      <Box flex={1} bgColor="#DF9B52" alignItems="center">
        <Heading marginBottom={10}>Konfirmasi Pengembalian barang</Heading>
        <Box width={'95%'}>

          {/* Layout 2 */}
          <Box width={'auto'} height={300} bgColor="white" borderRadius={10}>
            <Box flex={1} flexDirection="column">
              <Box flex={3}>
                <Image
                  source={{ uri: data.image }}
                  width={'auto'} height={300}
                  borderRadius={10}
                  alt="img"
                  role="img"
                  resizeMode="contain"
                />
              </Box>
              <Box flex={1} flexDirection="column" padding={5} backgroundColor="rgba(255, 255, 255, 0.9)">
                <Text fontWeight="bold" fontSize={18}>{data.title}</Text>
                <Text fontSize={14}>{data.desc}</Text>
                <Text fontSize={14}>{data.date}</Text>
              </Box>
            </Box>
          </Box>


          {/* Layout 2 */}
          <Box paddingHorizontal={10} backgroundColor="white" marginTop={70} height={'100%'} borderTopEndRadius={10} borderTopStartRadius={10}>
            <Textarea
              size="md"
              isReadOnly={false}
              isInvalid={false}
              isDisabled={false}
              borderWidth={1}
              borderColor="black"
              width={'100%'}
              marginTop={30}
            >
              <TextareaInput placeholder="Komentar..." role="dialog" />
            </Textarea>
            <Box flexDirection="row" alignItems="center">
              <Heading marginTop={25} marginStart={20} marginEnd={20}>Rating:</Heading>
              <Box flexDirection="row">{renderStars()}</Box>
            </Box>
            <Box flex={1} flexDirection="row" marginTop={80}>
              <Box flex={1}>
                <Text onPress={handleGoBack}
                  textAlign="center"
                  backgroundColor="#313C47"
                  paddingVertical={10}
                  paddingHorizontal={60}
                  borderRadius={10}
                  color="white"
                  fontWeight="bold"
                  margin={10}
                >
                  Batal
                </Text>
              </Box>
              <Box flex={1}>
                <Text onPress={() => navigation.navigate('History')}
                  textAlign="center"
                  backgroundColor="#DF9B52"
                  paddingVertical={10}
                  paddingHorizontal={40}
                  borderRadius={10}
                  color="white"
                  fontWeight="bold"
                  margin={10}

                >
                  Konfirmasi
                </Text>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </GluestackUIProvider>
  );
};

export default FormPengembalian;
