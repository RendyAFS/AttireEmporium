import React, { useEffect, useState } from 'react';
import { Box, Image } from '@gluestack-ui/themed';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import firebase from '../firebase';

const Splash = () => {
    const [isLoading, setIsLoading] = useState(true);
    const navigation = useNavigation();

    useEffect(() => {
        getUser();
    }, []);

    const getUser = async () => {
        try {
            const userData = await AsyncStorage.getItem('user-data');
            if (userData !== null) {
                navigation.replace('Tabs');
            } else {
                setIsLoading(false);
            }
        } catch (e) {
            console.error(e);
        }
    };

    return (
        <Box flex={1} justifyContent="center" alignItems="center" backgroundColor="white">
            <Box width="80%" height={150}>
                <Image
                    role='img'
                    alt='gambar'
                    resizeMode='contain'
                    source={require('../assets/logo.png')}
                    style={{ flex: 1, width: '100%', height: '100%' }}
                />
            </Box>
        </Box>
    );
};

export default Splash;
