
import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';

export default function Home({ navigation }) {
    return (
        <View>
            <Text>Home Screen</Text>
            <TouchableOpacity onPress={() => navigation.navigate('Details')}>
                <Text>Go to Details</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Tournaments')}>
                <Text>Go to Tournaments</Text>
            </TouchableOpacity>
        </View>
    );
}
