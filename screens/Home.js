import React, { useState, useRef, useEffect } from 'react';
import { GluestackUIProvider, Heading, Box, Text, ScrollView, HStack } from "@gluestack-ui/themed";
import Header from '../components/header';
import Carousel, { ParallaxImage } from 'react-native-snap-carousel';
import { Dimensions, StyleSheet, TouchableOpacity, View, Platform } from 'react-native';
import { ViewPropTypes } from 'deprecated-react-native-prop-types';

const ENTRIES1 = [
  {
    title: 'Baju',
    subtitle: 'Lorem ipsum dolor sit amet et nuncat mergitur',
    illustration: 'https://s1.bukalapak.com/img/61981045003/s-463-463/data.jpeg.webp',
  },
  {
    title: 'Baju Ara Ara johanes',
    subtitle: 'Lorem ipsum dolor sit amet',
    illustration: 'https://imgx.parapuan.co/crop/0x0:0x0/x/photo/2023/05/13/rekomendasi-kostum-cosplayjpg-20230513023735.jpg',
  },
  {
    title: 'White Pocket Sunset',
    subtitle: 'Lorem ipsum dolor sit amet et nuncat ',
    illustration: 'https://ae01.alicdn.com/kf/Sa6a1a7d75991407fb655297f32e642ebS/Baju-Seragam-Cosplay-Anime-YouTuber-Vumbi-Hololive-Mayuni-Fuyuko-Pakaian-Seragam-Kostum-Cosplay-Kustom-Permainan-Pakaian.jpg',
  },
  {
    title: 'Acrocorinth, Greece',
    subtitle: 'Lorem ipsum dolor sit amet et nuncat mergitur',
    illustration: 'https://i.imgur.com/KZsmUi2l.jpg',
  },
  {
    title: 'Baju Japir',
    subtitle: 'Lorem ipsum dolor sit amet',
    illustration: 'https://i.imgur.com/2nCt3Sbl.jpg',
  },
];
const ENTRIES2 = [
  {
    title: 'Bajussss',
    subtitle: 'Lorem ipsum dolor sit amet et nuncat mergitur',
    illustration: 'https://s1.bukalapak.com/img/61981045003/s-463-463/data.jpeg.webp',
  },
  {
    title: 'Baju Ara Ara johanesssss',
    subtitle: 'Lorem ipsum dolor sit amet',
    illustration: 'https://imgx.parapuan.co/crop/0x0:0x0/x/photo/2023/05/13/rekomendasi-kostum-cosplayjpg-20230513023735.jpg',
  },
  {
    title: 'White Pocket Sunset asdasd',
    subtitle: 'Lorem ipsum dolor sit amet et nuncat ',
    illustration: 'https://ae01.alicdn.com/kf/Sa6a1a7d75991407fb655297f32e642ebS/Baju-Seragam-Cosplay-Anime-YouTuber-Vumbi-Hololive-Mayuni-Fuyuko-Pakaian-Seragam-Kostum-Cosplay-Kustom-Permainan-Pakaian.jpg',
  },
  {
    title: 'Acrocorinth, Greece adssad',
    subtitle: 'Lorem ipsum dolor sit amet et nuncat mergitur',
    illustration: 'https://i.imgur.com/KZsmUi2l.jpg',
  },
  {
    title: 'Baju Japir asdasd',
    subtitle: 'Lorem ipsum dolor sit amet',
    illustration: 'https://i.imgur.com/2nCt3Sbl.jpg',
  },
];


const { width: screenWidth } = Dimensions.get('window');

const Home = (props) => {
  const [entries, setEntries] = useState(ENTRIES1);
  const [entries2, setEntries2] = useState(ENTRIES2);
  const carouselRef = useRef(null);
  const fontColor = "#313C47"
  const goForward = () => {
    if (carouselRef.current) {
      carouselRef.current.snapToNext();
    }
  };

  const renderItem = ({ item, index }, parallaxProps) => {
    return (
      <View style={styles.item}>
        <ParallaxImage
          source={{ uri: item.illustration }}
          containerStyle={styles.imageContainer}
          style={styles.image}
          parallaxFactor={0.4}
          {...parallaxProps}
          role={'image'}
        />
        <Text style={styles.title} numberOfLines={2}>
          {item.title}
        </Text>
      </View>
    );
  };
  const renderKategori = ({ item, index }, parallaxProps) => {
    return (
      <Box width={screenWidth - 200} height={screenWidth - 200}>
        <ParallaxImage
          source={{ uri: item.illustration }}
          containerStyle={{
            flex: 5,
            marginBottom: Platform.select({ ios: 0, android: 2 }),
            backgroundColor: 'black',
            borderRadius: 8,
          }}
          style={styles.image}
          parallaxFactor={0.2}
          {...parallaxProps}
          role={'image'}
        />
        <Text numberOfLines={2}>
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
    <ScrollView bgColor='#f5f5f5' >
      <Header title={"Header"} />
      <Box bgColor='white' marginTop={10} paddingVertical={10} rounded={5}  >
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
        />
      </Box>
      <Box bgColor='white' marginTop={10} paddingVertical={10} rounded={5} marginBottom={50} >
        <HStack>
          <Heading marginStart={30} marginTop={10} color={'black'}>Categories</Heading>
        </HStack>
        <Carousel
          marginTop={10}
          ref={carouselRef}
          sliderWidth={screenWidth}
          sliderHeight={screenWidth}
          itemWidth={screenWidth - 200}
          data={entries2}
          renderItem={renderKategori}
          hasParallaxImages={true}
          loop={true}
        />
      </Box>
    </ScrollView>
  );
};

export default Home;

const styles = StyleSheet.create({
  item: {
    width: screenWidth - 50,
    height: screenWidth - 100,
  },
  imageContainer: {
    flex: 1,
    marginBottom: Platform.select({ ios: 0, android: 1 }),
    backgroundColor: 'white',
    borderRadius: 8,
  },
  image: {
    ...StyleSheet.absoluteFillObject,
    resizeMode: 'cover',
  },
  title: {
    position: 'absolute',
    bottom: 20,
    left: 10,
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});