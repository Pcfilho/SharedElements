# 📸 Shared Elements Transition in React Native

🔥 **Amazing transitions in React Native with Shared Elements from Reanimated!**  

This project demonstrates how to create smooth screen transition animations using **Shared Elements** from Reanimated. Inspired by the **Zoom Navigation Transition** in SwiftUI on iOS 18, I explored how we can achieve a similar effect in **React Native**. The result? A more natural and engaging navigation experience! 🚀  

## 🎥 Demo  
Check out the smooth screen transition in the video I shared on my [LinkedIn](#).  

## ✨ How it works?  
Unlike standard transitions, where a new screen simply appears, **Shared Elements** allow an **element from screen A to transform into screen B**, making the experience more fluid and seamless.  

🔹 **Practical example:** In this project, images of tourist destinations expand from a **list** to a **details screen**, creating a more natural and pleasant navigation flow.  

## ✅ Advantages of Shared Elements  
✔️ Smooth and realistic animations  
✔️ More immersive experience without losing context  
✔️ Works on **iOS and Android**  

## 🛠️ How to implement in React Native?  
Here are the key steps to replicate this effect:  

1️⃣ **Install dependencies**  
```sh
npm install react-native-reanimated react-navigation react-native-gesture-handler
```  
2️⃣ **Set up React Navigation**  
In the `App.tsx` file, we use `createNativeStackNavigator` to define the screens:  

```tsx
<Stack.Navigator screenOptions={{ headerShown: false }}>
  <Stack.Screen name="Home" component={HomeScreen} />
  <Stack.Screen name="Details" component={DetailsScreen} />
</Stack.Navigator>
```  

3️⃣ **Add the sharedTransitionTag**  
In `HomeScreen.tsx`, we define tags to link elements between screens:  

```tsx
<Animated.Image
  sharedTransitionTag={'rio'}
  source={gallery['rio'].image}
  style={styles.imageOne}
/>
```  

And in `DetailsScreen.tsx`, we bind the same tag to ensure a smooth transition:  

```tsx
<Animated.Image
  sharedTransitionTag={tag}
  source={gallery[tag].image}
  style={[styles.detailsImage, { backgroundColor: gallery[tag].color }]}
/>
```  

## 🚀 Project Setup  
To run this project on your local machine, follow these steps:  

1️⃣ **Ensure you have an up-to-date Expo environment** → [Get Started with Expo](https://docs.expo.dev/get-started/installation/)  
2️⃣ **Clone the project**  
```sh
git clone https://github.com/Pcfilho/SharedElements.git
```  
3️⃣ **Navigate to the project directory**  
```sh
cd SharedElements
```  
4️⃣ **Install dependencies**  
```sh
npm install
```  
5️⃣ **Run Expo prebuild**  
```sh
npx expo prebuild
```  
6️⃣ **Run the project on a device**  
For iOS:
```sh
npx expo run:ios
```
For Android:
```sh
npx expo run:android
```  

## 🚀 Project Structure  
📂 **src/**  
 ┣ 📄 `App.tsx` → React Navigation setup  
 ┣ 📄 `HomeScreen.tsx` → List of images with transitions  
 ┣ 📄 `DetailsScreen.tsx` → Details screen with animations  
 ┗ 📄 `styles.ts` → Styles for screens  

## 💬 Want to discuss animations in React Native?  
If you have already tested **Shared Elements**, share your experience in the comments! Let's exchange ideas! 😃  

