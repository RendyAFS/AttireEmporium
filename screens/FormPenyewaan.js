import React, { useState } from "react";
import { GluestackUIProvider, Image, Heading, Textarea, TextareaInput, Box, Text, Input, InputField, Pressable } from "@gluestack-ui/themed";
import { FlatList } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

const datas = [
  {
    id: 1,
    title: "Custom Name 1",
    date: "18-10-2023",
    desc: "Deskripsi Costume Yang Dipesan",
    image: "https://down-id.img.susercontent.com/file/sg-11134201-22100-6riucdxu3livf6",
  },
];

const FormPenyewaan = () => {
  const [pickupDate, setPickupDate] = useState(new Date()); // State untuk tanggal peminjaman
  const [returnDate, setReturnDate] = useState(new Date()); // State untuk tanggal pengembalian
  const [showPickupDatePicker, setShowPickupDatePicker] = useState(false);
  const [showReturnDatePicker, setShowReturnDatePicker] = useState(false);

  const onPickupDateChange = (event, selected) => {
    if (selected) {
      setPickupDate(selected);
      setShowPickupDatePicker(false);
    }
  };

  const onReturnDateChange = (event, selected) => {
    if (selected) {
      setReturnDate(selected);
      setShowReturnDatePicker(false);
    }
  };

  return (
    <Box flex={1} justifyContent="center" bgColor="#F5F5F5" alignItems="center">
      <Heading marginBottom={10}>Konfirmasi Penyewaan barang</Heading>
      <Box width={'90%'}>
        <FlatList
          width={'100%'}
          data={datas}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <Pressable>
              <Box paddingTop={10} marginBottom={20}>
                <Box width={'auto'} height={85} bgColor="white" borderColor="#DF9B52" borderWidth={2} borderRadius={10}>
                  <Box flex={1} flexDirection="row">
                    <Box flex={1} height={85}>
                      <Image
                        source={{ uri: item.image }}
                        width={'auto'} height={80}
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
        <Input
          width={"100%"}
          variant="outline"
          size="sm"
          isDisabled={false}
          isInvalid={false}
          isReadOnly={false}
          backgroundColor="#F5F5F5"
          marginBottom={10}
          borderWidth={1}
          borderColor="black"
        >
          <InputField marginStart={5} placeholder="Nama" />
        </Input>

        <Box flexDirection="row" justifyContent="space-between" marginTop={15}>
          <Box width="48%">
            <Text fontWeight="bold">Tgl Peminjaman:</Text>
            <Pressable onPress={() => setShowPickupDatePicker(true)}>
              <Text padding={8} borderColor="black" borderWidth={1} borderRadius={5} marginBottom={20}>
                {pickupDate.toDateString()}
              </Text>
            </Pressable>
            {showPickupDatePicker && (
              <DateTimePicker
                value={pickupDate}
                mode="date"
                display="calendar"
                onChange={onPickupDateChange}
              />
            )}
          </Box>

          <Box width="48%">
            <Text fontWeight="bold">Tgl Pengembalian:</Text>
            <Pressable onPress={() => setShowReturnDatePicker(true)}>
              <Text padding={8} borderColor="black" borderWidth={1} borderRadius={5} marginBottom={20}>
                {returnDate.toDateString()}
              </Text>
            </Pressable>
            {showReturnDatePicker && (
              <DateTimePicker
                value={returnDate}
                mode="date"
                display="calendar"
                onChange={onReturnDateChange}
              />
            )}
          </Box>
        </Box>

        <Box>
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
            <TextareaInput placeholder="Komentar..." />
          </Textarea>
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

export default FormPenyewaan;
