import * as WebBrowser from 'expo-web-browser';
import React, { useState } from 'react';
import { Button, StyleSheet, TextInput } from 'react-native';
import { useSetRecoilState } from 'recoil'
import { giphyQuery } from '@/state/giphy';

import { MonoText } from './StyledText';
import { View } from './Themed';

export default function GiphySearchArea() {
  // TODO: useRefで取得する
  const setQ = useSetRecoilState(giphyQuery)
  const [q, setQuery] = useState('')
  const onPress = () => {
    setQ(q)
  }

  return (
    <View style={styles.getStartedContainer}>
      <MonoText>Search keyword</MonoText>
      <View style={styles.search}>
        <TextInput
          onChangeText={setQuery}
          style={styles.textInput}
          value={q}
        />
        <Button onPress={onPress} title='OK' />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
    marginBottom: 30
  },
  search: {
    flexDirection: 'row',
    width: '100%'
  },
  textInput: {
    backgroundColor: '#eee',
    flex: 1
  }
});
