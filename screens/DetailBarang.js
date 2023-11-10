import { Pressable, View, } from 'react-native'
import {GluestackUIProvider, Button , Heading, Center, StatusBar, Box, Text, Image, ScrollView, Icon } from "@gluestack-ui/themed";
import React from 'react'

const DetailBarang = () => {
  return (
    <Box>
        <Image source={require("../assets/images/getinto2.png")} alt='gambar barang' width={"70%"} />
        <Text>Nama barang</Text>
        <Text>Harga barang</Text>
        <Text>Deskripsi barang</Text>

        <Pressable>
            <Image source={"../assets/favicon.png"} width={"80%"} bgColor='#aaa' />
        </Pressable>
        


    </Box>
  )
}

export default DetailBarang;