import * as WebBrowser from 'expo-web-browser';
import React, { useRef } from 'react';
import { Button, StyleSheet, TextInput } from 'react-native';
import { useRecoilState } from 'recoil'
import { giphyQuery } from '@/state/giphy';

import { MonoText } from './StyledText';
import { View } from './Themed';

export default function GiphySearchArea() {
  const [q, setQ] = useRecoilState(giphyQuery)
  const inputRef = useRef(null)
  const onPress = () => {
    setQ((inputRef.current as any).value)
  }

  return (
    <View style={styles.getStartedContainer}>
      <MonoText>Search keyword</MonoText>
      <View style={styles.search}>
        <TextInput
          ref={inputRef}
          style={styles.textInput}
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
    flexDirection: 'row'
  },
  textInput: {
    backgroundColor: '#eee'
  }
});
