import React, { useState, useRef, useEffect } from 'react';
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
  Pressable
} from "@gluestack-ui/themed";
import Header from '../components/header';
import Carousel, { ParallaxImage } from 'react-native-snap-carousel';
import { Dimensions, StyleSheet, TouchableOpacity, View, Platform } from 'react-native';
import MasonryList from '@react-native-seoul/masonry-list';
import { useNavigation } from "@react-navigation/native";

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

const Home = (props) => {
  const navigation = useNavigation();
  const [entries, setEntries] = useState(ENTRIES1);
  const [entries2, setEntries2] = useState(ENTRIES2);
  const carouselRef = useRef(null);
  // const fontColor = "#313C47"
  const goForward = () => {
    if (carouselRef.current) {
      carouselRef.current.snapToNext();
    }
  };
  const Itemku = ({ item }) => (

    <Pressable onPress={() => navigation.navigate('DetailBarang')} backgroundColor='white' width={'95%'} marginBottom={8} rounded={3} marginLeft={4} marginRight={10} >
      <Image alt='gambar' resizeMode='cover' width={'100%'} height={150} source={item.illustration} />
      <Text fontSize={16} fontWeight='bold' marginLeft={5} marginVertical={8}>{item.title}</Text>
      <Text fontSize={12} color={'#777'} paddingHorizontal={10} marginBottom={8}>{item.subtitle}</Text>
      <Text marginLeft={5} marginVertical={8} color={'#DF9B52'}>Rp 400000</Text>
    </Pressable>
  );
  const renderItem = ({ item }, parallaxProps) => {
    return (
      <Box width={screenWidth - 50} height={screenWidth - 100}>
        <ParallaxImage
          source={{ uri: item.illustration }}
          containerStyle={styles.imageContainer}
          style={styles.image}
          parallaxFactor={0.4}
          {...parallaxProps}
          role='img'
        />
        <Text position={'absolute'} bottom={20} left={10} color='white' fontSize={16}
          fontWeight='bold' numberOfLines={2}>
          {item.title}
        </Text>
      </Box>
    );
  };
  const renderKategori = ({ item }, parallaxProps) => {
    return (
      <Box width={screenWidth - 210} height={screenWidth - 210}>
        <ParallaxImage
          source={{ uri: item.illustration }}
          containerStyle={{
            flex: 5,
            marginBottom: Platform.select({ ios: 0, android: 2 }),
            backgroundColor: 'black',
            borderRadius: 8,
          }}
          style={styles.image}
          resizeMode={'cover'}
          parallaxFactor={0.1}
          {...parallaxProps}
          role='img'
        />
        <Text textAlign='center' numberOfLines={2}>
          {item.title}
        </Text>
      </Box>
    );
  };

  useEffect(() => {
    setEntries(ENTRIES1);
  }, []);
  useEffect(() => {
    setEntries2(ENTRIES2);
  }, []);
  return (
    <Box>
      <ScrollView bgColor='#f5f5f5'>
        <Header title={"Header"} />

        <Box bgColor='white' marginTop={10} paddingVertical={10} rounded={5}>
          <Carousel
            marginTop={10}
            ref={carouselRef}
            sliderWidth={screenWidth}
            sliderHeight={screenWidth}
            itemWidth={screenWidth - 50}
            data={entries}
            renderItem={renderItem}
            hasParallaxImages={true}
            autoplay={true}
            loop={true}
            role='carousel'
          />
        </Box>

        <Box bgColor='white' marginTop={10} paddingVertical={10} rounded={5} marginBottom={9}>
          <HStack justifyContent="center">
            <Heading flex={1} marginStart={30} marginTop={10} color={'#DF9B52'}>CATEGORIES</Heading>
          </HStack>

          <Carousel
            marginTop={13}
            ref={carouselRef}
            sliderWidth={screenWidth}
            sliderHeight={screenWidth}
            itemWidth={screenWidth - 210}
            data={entries2}
            renderItem={renderKategori}
            hasParallaxImages={true}
            role='carousel'
          />
        </Box>
        <Box bgColor='white' paddingVertical={10} rounded={5} >
          <Heading flex={1} marginStart={30} color={'#DF9B52'}>RECOMENDATIONS</Heading>
        </Box>
        {/* <Box flex={1} flexDirection='row' marginBottom={15} padding={10}>
        {ENTRIES1.slice(0, 2).map(item => (
          <Itemku key={item.id} item={item} />
        ))}

      </Box> */}
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

export default Home;

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