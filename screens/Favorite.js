import React, { useState, useRef, useEffect } from 'react';
import {
  GluestackUIProvider,
  Image,
  Heading,
  Box,
  Text,
  ScrollView,
  Input,
  InputSlot,
  InputIcon,
  SearchIcon,
  InputField,
  Icon,
  TrashIcon,
} from "@gluestack-ui/themed";
import { Dimensions, StyleSheet, Platform } from 'react-native';
import MasonryList from '@react-native-seoul/masonry-list';

const ENTRIES1 = [
  {
    id: '1',
    title: 'Baju',
    subtitle: 'Lorem ipsum dolor sit amet et nuncat mergitur',
    illustration: 'https://s1.bukalapak.com/img/61981045003/s-463-463/data.jpeg.webp',
  },
  {
    id: '2',
    title: 'Baju Ara Ara johanes',
    subtitle: 'Lorem ipsum dolor sit amet et nuncat mergitur',
    illustration: 'https://imgx.parapuan.co/crop/0x0:0x0/x/photo/2023/05/13/rekomendasi-kostum-cosplayjpg-20230513023735.jpg',
  },
  {
    id: '3',
    title: 'White Pocket Sunset',
    subtitle: 'Lorem ipsum dolor sit amet et nuncat ',
    illustration: 'https://ae01.alicdn.com/kf/Sa6a1a7d75991407fb655297f32e642ebS/Baju-Seragam-Cosplay-Anime-YouTuber-Vumbi-Hololive-Mayuni-Fuyuko-Pakaian-Seragam-Kostum-Cosplay-Kustom-Permainan-Pakaian.jpg',
  },
  {
    id: '4',
    title: 'Acrocorinth, Greece',
    subtitle: 'Lorem ipsum dolor sit amet et nuncat mergitur',
    illustration: 'https://i.imgur.com/KZsmUi2l.jpg',
  },
  {
    id: '5',
    title: 'Baju Japir',
    subtitle: 'Lorem ipsum dolor sit amet',
    illustration: 'https://i.imgur.com/2nCt3Sbl.jpg',
  },
];


const { width: screenWidth } = Dimensions.get('window');

const Favorite = (props) => {
  const [entries, setEntries] = useState(ENTRIES1);
  // const fontColor = "#313C47"
  const Itemku = ({ item }) => (
    <Box backgroundColor='white' width={'95%'} marginBottom={8} rounded={3} marginLeft={4} marginRight={10} >
      <Image role='img' alt='gambar' resizeMode='cover' width={'100%'} height={150} source={item.illustration} />
      <Text fontSize={16} fontWeight='bold' marginLeft={5} marginVertical={8}>{item.title}</Text>
      <Text fontSize={12} color={'#777'} paddingHorizontal={10} marginBottom={8}>{item.subtitle}</Text>

      <Box flex={1} flexDirection='row'>
        <Text flex={3} marginLeft={5} marginVertical={8} color={'#DF9B52'}>Rp 400000</Text>
        <Icon flex={1} marginTop={12} marginRight={5} color='red' as={TrashIcon} size="md" />
      </Box>

    </Box>
  );

  useEffect(() => {
    setEntries(ENTRIES1);
  }, []);
  return (
    <Box>
      <ScrollView bgColor='#f5f5f5'>
        <Box bgColor='white' paddingVertical={10} rounded={5} >
          <Heading flex={1} marginStart={30} color={'#DF9B52'}>FAVORITE</Heading>
        </Box>

        <Box alignItems='center' padding={10}>
          <Input width={"80%"} borderColor='orange'>
            <InputSlot pl='$3'>
              <InputIcon as={SearchIcon} />
            </InputSlot>
            <InputField
              placeholder="Search..."
            />
          </Input>
        </Box>
        <MasonryList

          data={ENTRIES1}
          keyExtractor={(item) => item.id}
          numColumns={2}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => <Itemku item={item} />}
          onRefresh={() => refetch({ first: ITEM_CNT })}
          onEndReachedThreshold={0.1}
          onEndReached={() => loadNext(ITEM_CNT)}
        />
      </ScrollView>
    </Box>

  );
};

export default Favorite;

const styles = StyleSheet.create({
  imageContainer: {
    flex: 1,
    marginBottom: Platform.select({ ios: 0, android: 1 }),
    backgroundColor: 'white',
    borderRadius: 8,
  },
  image: {
    ...StyleSheet.absoluteFillObject,

  },
});