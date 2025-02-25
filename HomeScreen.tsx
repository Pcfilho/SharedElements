import Animated from "react-native-reanimated";
import { Pressable, View } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { gallery, StackParamList, Tag } from "./App";
import { styles } from "./styles";

export function HomeScreen({
  navigation,
}: NativeStackScreenProps<StackParamList, 'Home'>) {
  const goToDetails = (tag: Tag) => {
    navigation.navigate('Details', { tag });
  };

  return (
    <Animated.ScrollView style={styles.homeContainer}>
      <Pressable onPress={() => goToDetails('rio')}>
        <Animated.Image
          sharedTransitionTag={'rio'}
          source={gallery['rio'].image}
          style={styles.imageOne}
        />
      </Pressable>
      <View style={styles.row}>
        <Pressable onPress={() => goToDetails('sydney')}>
          <Animated.Image
            source={gallery['sydney'].image}
            sharedTransitionTag={'sydney'}
            style={styles.imageTwo}
          />
        </Pressable>
        <Pressable onPress={() => goToDetails('ny')}>
          <Animated.Image
            source={gallery['ny'].image}
            sharedTransitionTag={'ny'}
            style={styles.imageThree}
          />
        </Pressable>
      </View>
    </Animated.ScrollView>
  );
}
