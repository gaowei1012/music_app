import react, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, SafeAreaView} from 'react-native';

// 我的私信
export function MyMessage() {
  const [name, setName] = useState('name');

  return (
    <SafeAreaView>
      <Text>{name}</Text>
    </SafeAreaView>
  );
}
