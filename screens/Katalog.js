import React, { useState, useRef, useEffect } from 'react';
import { HeaderKatalog } from '../components';
import {
  GluestackUIProvider,
  Image,
  FlatList,
  SafeAreaView,
  Heading,
  Box,
  Text,
  ScrollView,
  HStack,
  VStack,
} from "@gluestack-ui/themed";
import Carousel, { ParallaxImage } from 'react-native-snap-carousel';
import { Dimensions, StyleSheet, TouchableOpacity, View, Platform } from 'react-native';
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
const ENTRIES2 = [
  {
    id: '1',
    title: 'Baju Game',
    subtitle: 'Lorem ipsum dolor sit amet et nuncat mergitur',
    illustration: 'https://cdn.dribbble.com/users/1070235/screenshots/3972823/juggernaut_dota_2.png ',
  },
  {
    id: '2',
    title: 'Baju Perang',
    subtitle: 'Lorem ipsum dolor sit amet',
    illustration: 'https://steamuserimages-a.akamaihd.net/ugc/616166913242053508/B53302A3EE0104ADB6347A74F309D66E0476C3BD/?imw=512&&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false',
  },
  {
    id: '3',
    title: 'Baju Wibu',
    subtitle: 'Lorem ipsum dolor sit amet et nuncat ',
    illustration: 'https://ae01.alicdn.com/kf/Sa6a1a7d75991407fb655297f32e642ebS/Baju-Seragam-Cosplay-Anime-YouTuber-Vumbi-Hololive-Mayuni-Fuyuko-Pakaian-Seragam-Kostum-Cosplay-Kustom-Permainan-Pakaian.jpg',
  },
  {
    id: '4',
    title: 'Baju Partai',
    subtitle: 'Lorem ipsum dolor sit amet',
    illustration: 'https://asset.kompas.com/crops/U3mPvwHDHwgEp47O5qdnXpa0USg=/0x0:779x519/780x390/data/photo/2021/10/15/61698c7aece86.jpg',
  },
];


const { width: screenWidth } = Dimensions.get('window');

const Katalog = () => {
  const [searchText, setSearchText] = useState('');

  const Itemku = ({ item }) => {
    const { title, subtitle, illustration } = item;

    const isMatch =
      title.toLowerCase().includes(searchText.toLowerCase()) ||
      subtitle.toLowerCase().includes(searchText.toLowerCase());

    return isMatch ? (
      <Box backgroundColor='white' width={'95%'} marginBottom={8} rounded={3} marginLeft={4} marginRight={10} >
        <Image alt='gambar' resizeMode='cover' width={'100%'} height={150} source={item.illustration} />
        <Text fontSize={16} fontWeight='bold' marginLeft={5} marginVertical={8}>{item.title}</Text>
        <Text fontSize={12} color={'#777'} paddingHorizontal={10} marginBottom={8}>{item.subtitle}</Text>
        <Text marginLeft={5} marginVertical={8} color={'#DF9B52'}>Rp 400000</Text>
      </Box>
    ) : null;
  };
  return (
    <Box>
      <ScrollView bgColor='#f5f5f5'>
        <HeaderKatalog searchText={searchText} setSearchText={setSearchText} />
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

export default Katalog;

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