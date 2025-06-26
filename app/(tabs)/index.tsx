import * as ImagePicker from 'expo-image-picker';
import { useState } from 'react';
import { ImageSourcePropType, View } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";

import Button from "../components/Button";
import CircleButton from '../components/CircleButton';
import EmojiList from '../components/EmojiList';
import EmojiPicker from '../components/EmojiPicker';
import EmojiSticker from '../components/EmojiSticker';
import IconButton from '../components/IconButton';
import ImageViewer from "../components/ImageViewer";

import { styles } from "./styles";
const PlaceholderImage = require("../../assets/images/background-image.png");

export default function Index() {
  const[selectedImage, setSelectedImage] = useState<string | undefined>(undefined);
  const[showAppOptions, setShowAppOptions] = useState<boolean>(false);
  const[isModalVisible, setIsModalVisible] = useState<boolean>(false);
  const[pickedEmoji, setPickedEmoji] = useState<ImageSourcePropType | undefined>(undefined);

  const pickImage = async ()=> {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ['images'],
      allowsEditing: true,
    });

    if(result.canceled) {
      console.log("You did not select any image.");
    }
    else{
      setSelectedImage(result.assets[0].uri);
      setShowAppOptions(true);
      console.log(result);
    }
  }

  const onReset = () => { setShowAppOptions(false);};

  const onAddSticker = () => {
    setIsModalVisible(true);
  };

  const onSaveImageAsync = async () => {};

  const onModalClose = () => {
    setIsModalVisible(false);
  }

  return (
    <GestureHandlerRootView style={styles.container} >
      <View style={styles.imageContainer}>
        <ImageViewer imgSource={PlaceholderImage} selectedImage={selectedImage} />
        {pickedEmoji && <EmojiSticker imageSize={100} stickerSource={pickedEmoji} />}
      </View>
      {showAppOptions ? ( 
        <View style={styles.optionsContainer}>
          <View style={styles.optionsRow}>
            <IconButton icon="refresh" label="Reset" onPress={onReset} />
            <CircleButton onPress={onAddSticker} />
            <IconButton icon="save-alt" label="Save" onPress={onSaveImageAsync} />
          </View>
        </View>
        ) : ( 
        <View style={styles.footerContainer}>
          <Button label="Choose a photo" theme="primary" onPress={pickImage}/>
          <Button label="Use this photo" onPress={() => setShowAppOptions(true)} />
        </View>
      )}
      <EmojiPicker isVisible={isModalVisible} onClose={onModalClose}>
        <EmojiList onSelect={setPickedEmoji} onCloseModal={onModalClose} />
      </EmojiPicker>
    </GestureHandlerRootView>
  );
}