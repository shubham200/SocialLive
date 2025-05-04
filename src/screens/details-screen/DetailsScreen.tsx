import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../navigation/Types';
import { screenHeight, screenWidth } from '../../utils/utils';

type DetailsScreenRouteProp = RouteProp<RootStackParamList, 'Details'>;
type DetailsScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Details'>;

const DetailsScreen = () => {
    const navigation = useNavigation<DetailsScreenNavigationProp>();
    const route = useRoute<DetailsScreenRouteProp>();
    const { itemId } = route.params;

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Details Screen</Text>
            <Text style={styles.subtitle}>Item ID: {itemId}</Text>
            <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.goBack()}>
                <Text style={styles.buttonText}>Go Back</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        height: screenHeight,
        width: screenWidth,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'black',
        padding: '5%',
    },
    title: {
        color: 'yellow',
        fontSize: 28,
        fontWeight: '600',
        marginBottom: 15,
    },
    subtitle: {
        color: 'yellow',
        fontSize: 18,
        marginBottom: 30,
    },
    button: {
        backgroundColor: '#333',
        paddingVertical: 12,
        paddingHorizontal: 24,
        borderRadius: 8,
    },
    buttonText: {
        color: 'yellow',
        fontSize: 16,
        fontWeight: '500',
    }
});

export default DetailsScreen;