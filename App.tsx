import * as React from 'react';
import { Dimensions } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { DetailsScreen } from './DetailsScreen';
import { styles } from './styles';
import { HomeScreen } from './HomeScreen';

export type StackParamList = {
  Home: undefined;
  Details: { tag: Tag };
};

type Gallery = {
  [key in 'rio' | 'sydney' | 'ny']: {
    color: string,
    title: string,
    description: string,
    image: any,
    style: any
  }
}

const Stack = createNativeStackNavigator<StackParamList>();

export const gallery: Gallery = {
  rio: {
    color: '#FF6347',
    title: 'Vibrant Rio de Janeiro',
    description:
      'Rio de Janeiro is famous for its stunning beaches, lively festivals, and the iconic Christ the Redeemer statue.',
    image: require('./assets/rio.jpg'),
    style: styles.imageOne
  },
  sydney: {
    color: '#1E90FF',
    title: 'Stunning Sydney, Australia',
    description:
      'Sydney captivates with its beautiful harbour, the iconic Opera House, and a vibrant cultural scene.',
    image: require('./assets/sydney.jpg'),
    style: styles.imageTwo
  },
  ny: {
    color: '#696969',
    title: 'The City That Never Sleeps: New York',
    description:
      'New York City is known for its dynamic energy, towering skyscrapers, and diverse cultural offerings.',
    image: require('./assets/ny.jpg'),
    style: styles.imageThree
  },
};

export type Tag = keyof Gallery;

export default function GalleryExample() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

