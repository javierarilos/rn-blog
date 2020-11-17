# creation
```bash
echo creating with expo, avoid yarn, select blank
expo init rn-blog --npm
```
# add react navigation
```bash
rm -rf node_modules
npm install

npm install @react-navigation/native
expo install react-native-gesture-handler react-native-reanimated react-native-screens react-native-safe-area-context @react-native-community/masked-view
npm install @react-navigation/stack
```