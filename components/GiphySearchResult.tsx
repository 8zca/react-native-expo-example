import * as WebBrowser from 'expo-web-browser';
import React from 'react';
import { StyleSheet, Image, Dimensions, FlatList, ScrollView } from 'react-native';
import { useRecoilValueLoadable } from 'recoil'
import { giphySearchResult } from '@/state/giphy';

import { MonoText } from './StyledText';
import { View } from './Themed';

const ITEM_WIDTH = Dimensions.get('window').width;

export default function GiphySearchArea() {
  const result = useRecoilValueLoadable(giphySearchResult)

  if (result.state === 'loading') return <View><MonoText>...</MonoText></View>
  if (result.state === 'hasError') return <View><MonoText>search failed</MonoText></View>

  return (
    <FlatList
      data={result.contents}
      keyExtractor={(item, index) => index.toString()}
      numColumns={3}
      renderItem={({ item }) => {
        const img = item.images.downsized

        return (
          <View>
            <Image source={{ uri: img.url }} style={styles.imageStyle} />
          </View>
        )
      }}
    />
  );
}

const styles = StyleSheet.create({
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
  },
  imageStyle: {
    width: ITEM_WIDTH / 3,
    height: ITEM_WIDTH / 3,
    margin: 1,
    resizeMode: 'cover',
  }
});
