import { GluestackUIProvider, Heading, Box, Text, Pressable, Image, Textarea, TextareaInput } from "@gluestack-ui/themed";
import { FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useState } from "react";

const datas = [
  {
    id: 1,
    title: "Custom Name 1",
    date: "18-10-2023",
    desc: "Deskripsi Costume Yang Dipesan",
    image: "https://down-id.img.susercontent.com/file/sg-11134201-22100-6riucdxu3livf6",
  },
];

const FormPengembalian = () => {
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
      <FlatList
          width={'100%'}
          data={datas}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <Pressable>
              <Box paddingTop={10} marginBottom={20}>
                <Box width={'auto'} height={150} bgColor="white" borderColor="#DF9B52" borderWidth={2} borderRadius={10}>
                  <Box flex={1} flexDirection="row">
                    <Box flex={2}>
                      <Image
                        source={{ uri: item.image }}
                        width={'auto'} height={145}
                        borderTopLeftRadius={8}
                        borderBottomLeftRadius={8}
                        alt="img"
                      />
                    </Box>
                    <Box flex={4} flexDirection="column" padding={5}>
                      <Box flex={1}>
                        <Text fontWeight="bold" fontSize={18}>{item.title}</Text>
                      </Box>
                      <Box flex={2}>
                        <Text fontSize={14}>{item.desc}</Text>
                      </Box>
                      <Box flex={1}>
                        <Text fontSize={14}>{item.date}</Text>
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Pressable>
          )}
        />
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
            <TextareaInput placeholder="Komentar..." role="dialog"/>
          </Textarea>
        </Box>
        <Box flexDirection="row" alignItems="center">
          <Heading marginTop={25} marginStart={20} marginEnd={20}>Rating:</Heading>
          <Box flexDirection="row">{renderStars()}</Box>
        </Box>
        <Pressable marginTop={15} alignItems="center">
          <Text padding={10} width={100} borderRadius={10} backgroundColor="black" color="white" textAlign="center">
            Submit
          </Text>
        </Pressable>
      </Box>
    </Box>
  );
};

export default FormPengembalian;
