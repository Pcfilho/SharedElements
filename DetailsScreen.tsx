import Animated, { FadeIn } from "react-native-reanimated";
import { View, Pressable, Text } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { StackParamList, gallery } from "./App";
import { styles } from "./styles";

type Props = NativeStackScreenProps<StackParamList, 'Details'>;

export function DetailsScreen({
  route,
  navigation,
}: Props) {
  const { tag } = route.params;

  return (
    <View style={styles.detailContainer}>
      <Animated.Image
        sharedTransitionTag={tag}
        source={gallery[tag].image}
        style={[styles.detailsImage, { backgroundColor: gallery[tag].color }]}
      />
      <View
        style={styles.wrapper}>
        <Animated.Text
          entering={FadeIn.delay(150).duration(1000)}
          style={[styles.header, styles.font28]}>
          {gallery[tag].title}
        </Animated.Text>
        <Animated.Text
          entering={FadeIn.delay(300).duration(1000)}
          style={styles.text}>
          {gallery[tag].description}
        </Animated.Text>
        <Animated.View
          entering={FadeIn.delay(500).duration(1000)}
          style={styles.callToActionWrapper}>
          <Pressable
            style={styles.callToAction}
            onPress={() => navigation.goBack()}>
            <Text style={styles.callToActionText}>Go back!</Text>
          </Pressable>
        </Animated.View>
      </View>
    </View>
  );
}