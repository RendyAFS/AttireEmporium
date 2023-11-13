import React, { useState, useRef, useEffect } from 'react';
import {
  Image,
  Heading,
  Box,
  Text,
  ScrollView,
  HStack,
  Pressable
} from "@gluestack-ui/themed";
import Header from '../components/header';
import Carousel, { ParallaxImage } from 'react-native-snap-carousel';
import { Dimensions, StyleSheet, Platform } from 'react-native';
import MasonryList from '@react-native-seoul/masonry-list';
import { useNavigation } from "@react-navigation/native";
import { StatusBar } from 'react-native';
import datas from '../data/datas';


const { width: screenWidth } = Dimensions.get('window');

const Home = () => {
  const navigation = useNavigation();
  const [entries, setEntries] = useState(datas);
  const carouselRef = useRef(null);

  const Itemku = ({ item }) => (

    <Pressable onPress={() => navigation.navigate('DetailBarang', { item: item })} backgroundColor='white' width={'95%'} marginBottom={8} rounded={3} marginLeft={4} marginRight={10} >
      <Image role='img' alt='gambar' resizeMode='cover' width={'100%'} height={150} source={item.image} />
      <Text fontSize={16} fontWeight='bold' marginLeft={5} marginVertical={8}>{item.title}</Text>
      <Text fontSize={12} color={'#777'} paddingHorizontal={10} marginBottom={8}>{item.subtitle}</Text>
      <Text marginLeft={5} marginVertical={8} color={'#DF9B52'}>Rp {item.harga}</Text>
    </Pressable>
  );
  const renderItem = ({ item }, parallaxProps) => {
    return (
      <Pressable onPress={() => navigation.navigate('DetailBarang', { item: item })} width={screenWidth - 50} height={screenWidth - 100}>
        <ParallaxImage
          source={{ uri: item.image }}
          containerStyle={{
            flex: 1,
            marginBottom: Platform.select({ ios: 0, android: 1 }),
            backgroundColor: 'white',
            borderRadius: 8,
          }}
          style={{ ...StyleSheet.absoluteFillObject }}
          parallaxFactor={0.4}
          {...parallaxProps}
        />
        <Text position={'absolute'} bottom={20} left={10} color='white' fontSize={16}
          fontWeight='bold' numberOfLines={2}>
          {item.title}
        </Text>
      </Pressable>
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
          style={{ ...StyleSheet.absoluteFillObject }}
          resizeMode={'cover'}
          parallaxFactor={0.1}
          {...parallaxProps}
        />
        <Text textAlign='center' numberOfLines={2}>
          {item.title}
        </Text>
      </Box>
    );
  };

  useEffect(() => {
    setEntries(datas);
  }, []);
  return (
    <Box>
      <StatusBar backgroundColor={'#ffff'} barStyle={'dark-content'} />
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
          data={datas}
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
