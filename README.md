## Udemy React-Native course code example

### Guess A Number

This Repo is for the "Guess A Number" mobile-app that I am creating for a Udemy course.

The Udemy course is [React Native - The Practical Guided 2020](https://www.udemy.com/course/react-native-the-practical-guide)

[Watch a demo video](https://drive.google.com/file/d/1SeJfxqBMY-8pkCQyChsT7u3kki4yyjGh/view?usp=sharing)

I am not using "Expo CLI" for my development, but rather I created the app using the React CLI.

All the code in the `src` folder is almost entirely written by me from scratch - it isn't just copied from the course examples.

I am currently working through "Section 5: Responsive & Adaptive User Interfaces and Apps".

Please keep in mind that this code is in flux, and doesn't always represent my best coding efforts, since it is a course that I am studying.
On the other hand, I do try to go beyond the course examples and code in a re-usable and well-engineered way.

Other than layout, I am not putting a lot of time/effort into design (colors, fonts, branding, etc).

### My Notes:

Adding Fonts:  See https://medium.com/@mehran.khan/ultimate-guide-to-use-custom-fonts-in-react-native-77fcdf859cf4

Using React Native Icons: 
- Install them: `yarn add react-native-vector-icons`
- IOS: Goto ios folder and `pod install`
- Add asset to `react-native.config.js` file: `assets: ['react-native-vector-icons']`
- Add new asset to linking: `yarn react-native link`
Custom Icons info:  https://www.reactnative.guide/12-svg-icons-using-react-native-vector-icons/12.1-creating-custom-iconset.html
