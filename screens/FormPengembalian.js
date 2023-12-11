import { Heading, Box, Text, Pressable, Image, Textarea, TextareaInput, VStack, HStack } from "@gluestack-ui/themed";
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
        <Pressable key={i} onPress={() => handleStarPress(i)}>
          <Icon
            name={i < rating ? 'star' : 'star-o'}
            size={30}
            color="yellow"
            margin={10}
          />
        </Pressable>
      );
    }
    return stars;
  };

  return (
    <Box flex={1} flexDirection="column" bgColor="#fff" paddingHorizontal={15}>
      <Box flex={1} bgColor="#fff" alignItems="center" marginTop={15}>
        <Box width={'100%'}>
          {/* Layout 2 */}
          <Box width={'auto'} height={300} bgColor="white" borderRadius={10}>
            <Box flex={1} flexDirection="column">
              <Image
                source={{ uri: data.image }}
                width={'auto'} height={300}
                borderRadius={10}
                alt="img"
                role="img"
                resizeMode="cover"
              />
            </Box>
          </Box>
          <Text fontWeight="bold" fontSize={18} marginTop={15}>{data.title}</Text>
          <Text fontSize={14}>Tanggal Peminjaman</Text>
          <HStack justifyContent="center" marginTop={10}>
            <Text fontSize={18} fontWeight="bold">{data.date}</Text>
            <Text fontSize={18} fontWeight="bold"> - </Text>
            <Text fontSize={18} fontWeight="bold">{data.date}</Text>
          </HStack>

          <Box flexDirection="column">
            <Text marginTop={10} fontSize={18} fontWeight="bold">Rating:</Text>
            <Box flexDirection="row" justifyContent="center">{renderStars()}</Box>
          </Box>


          {/* Layout 2 */}
          <Box paddingHorizontal={10} backgroundColor="white" marginTop={0} height={'100%'} borderTopEndRadius={10} borderTopStartRadius={10}>
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
            <Box flex={1} flexDirection="row" marginTop={15}>
              <Box flex={1}>
                <Text onPress={() => navigation.navigate('History')}
                  textAlign="center"
                  backgroundColor="#021C35"
                  paddingVertical={10}
                  paddingHorizontal={40}
                  borderRadius={8}
                  color="white"
                  fontWeight="bold"

                >
                  Konfirmasi
                </Text>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default FormPengembalian;
