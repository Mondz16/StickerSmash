import { Image } from 'expo-image';
import { FlatList, ImageSourcePropType, Platform, Pressable, StyleSheet } from 'react-native';

type Props = {
    onSelect: (image: ImageSourcePropType) => void;
    onCloseModal: () => void;
}

export default function EmojiList({onSelect, onCloseModal}: Props) {
    const emojis = [
        require('../../assets/images/emoji/1.png'),
        require('../../assets/images/emoji/2.png'),
        require('../../assets/images/emoji/3.png'),
        require('../../assets/images/emoji/4.png'),
        require('../../assets/images/emoji/5.png'),
        require('../../assets/images/emoji/6.png'),
    ];

    return (
        <FlatList
            horizontal
            showsHorizontalScrollIndicator={Platform.OS === 'web'}
            contentContainerStyle={styles.listContainer}
            data={emojis}
            renderItem={({item}) => (
                <Pressable onPress={() => {onSelect(item); onCloseModal();}}>
                    <Image source={item} style={styles.image} />
                </Pressable>
            )}
        />
    );
}

const styles = StyleSheet.create({
  listContainer: {
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  image: {
    width: 100,
    height: 100,
    marginRight: 20,
  },
});
