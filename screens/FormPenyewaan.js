import React, { useState } from 'react';
import {
  Heading,
  Box,
  Text,
  Input,
  InputField,
  Pressable, // Ganti Button dengan Pressable
  DatePicker,
  Textarea,
  TextareaInput
} from "@gluestack-ui/themed";

const FormPenyewaan = () => {
  const [nama, setNama] = useState("");
  const [nomorHp, setNomorHp] = useState("");
  const [tanggalPeminjaman, setTanggalPeminjaman] = useState("");
  const [tanggalPengembalian, setTanggalPengembalian] = useState("");
  const [catatanTambahan, setCatatanTambahan] = useState("");
  const [searchKeyword, setSearchKeyword] = useState("");

  const handleSubmit = () => {
    // Handle form submission here
    // You can access the form data using the state variables above
  };

  const handleSearchChange = (text) => {
    setSearchKeyword(text);
    // You can add search functionality here
  };

  return (
    <Box>
      <Heading marginTop={20} fontSize={24}>Form Penyewaan</Heading>

      <Box flex={1} justifyContent='center' bgColor='#F5F5F5' alignItems='center' padding={10}>
        <Input
          marginBottom={10}
          isDisabled={false}
          isInvalid={false}
          isReadOnly={false}
          value={nama}
          onChangeText={(text) => setNama(text)}
        >
          <InputField marginStart={5} placeholder="Nama" />
        </Input>
        <Input
          marginBottom={10}
          isDisabled={false}
          isInvalid={false}
          isReadOnly={false}
          value={nomorHp}
          onChangeText={(text) => setNomorHp(text)}
        >
          <InputField marginStart={5} placeholder="Nomor HP" />
        </Input>
        {/* <DatePicker
        label="Tanggal Peminjaman"
        value={tanggalPeminjaman}
        onChange={(date) => setTanggalPeminjaman(date)}
      />
      <DatePicker
        label="Tanggal Pengembalian"
        value={tanggalPengembalian}
        onChange={(date) => setTanggalPengembalian(date)}
      /> */}

        <Textarea
          marginBottom={10}
          isDisabled={false}
          isInvalid={false}
          isReadOnly={false}
          value={catatanTambahan}
          onChangeText={(text) => setCatatanTambahan(text)}
          placeholder="Catatan Tambahan"
        >
          <TextareaInput
            placeholder="Catatan Tambahan..."
          />
        </Textarea>


        <Pressable onPress={handleSubmit}>
          <Text backgroundColor='#DF9B52' paddingHorizontal={35} paddingVertical={10} color='white' fontWeight='bold' borderRadius={10}>Submit</Text>
        </Pressable>
      </Box>
    </Box>
  );
}

export default FormPenyewaan;
