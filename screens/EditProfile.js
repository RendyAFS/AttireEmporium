import { View, } from 'react-native'
import {GluestackUIProvider, Button, TextButton , Heading, Center, StatusBar, Box, Text, Image, ScrollView, Icon } from "@gluestack-ui/themed";
import React from 'react'

const EditProfile = () => {
  return (
    <Box>
        <Image source={"../assets/images/anonim.jpg"} width={300} height={600} />
      <Text>Nama Lengkap</Text>
      <Text>Alamat Lengkap</Text>
      <Text>Nomor Hp</Text>
      <Button><Text>Save</Text></Button>
    </Box>
  )
}

export default EditProfile;