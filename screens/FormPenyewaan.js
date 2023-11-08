import React, { useState } from "react";
import { GluestackUIProvider, Heading, Textarea, TextareaInput, Box, Text, Input, InputField, Pressable } from "@gluestack-ui/themed";

const FormPenyewaan = () => {

  return (
    <Box flex={1} justifyContent="center" bgColor="#F5F5F5" alignItems="center">
      <Heading marginBottom={10}>Form Penyewaan barang</Heading>
      <Box width={300}>
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
        <Input

          borderColor="black"
          width={"100%"}
          variant="outline"
          size="sm"
          isDisabled={false}
          isInvalid={false}
          isReadOnly={false}
          backgroundColor="#F5F5F5"
          marginBottom={10}
          borderWidth={1}
        >
          <InputField marginStart={5} placeholder="Nama Barang" />
        </Input>
        <Textarea
          size="md"
          isReadOnly={false}
          isInvalid={false}
          isDisabled={false}
          borderWidth={1}
          borderColor="black"
          width={'68%'}
          w="$64"
        >
          <TextareaInput placeholder="Your text goes here..." />
        </Textarea>
        <Pressable marginTop={15} alignItems="center">
          <Text padding={10} width={100} backgroundColor="black" color="white" textAlign="center">
            Submit
          </Text>
        </Pressable>
      </Box>
    </Box>
  );
};

export default FormPenyewaan;