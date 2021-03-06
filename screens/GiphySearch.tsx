import * as React from 'react';
import { StyleSheet } from 'react-native';

import GiphySearchArea from '@/components/GiphySearchArea';
import GiphySearchResult from '@/components/GiphySearchResult';

import { Text, View } from '@/components/Themed'
import { RootTabScreenProps } from '../types';

export default function GiphySearch({ navigation }: RootTabScreenProps<'GiphySearch'>) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Giphy</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <GiphySearchArea />
      <GiphySearchResult />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 30
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
