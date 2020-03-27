import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, SafeAreaView} from 'react-native';

// 我的私信
export default function MyMessage() {
  const [name, setName] = useState('name');

  const _list = () => {
    return (
      <View>
        <Text>{name}</Text>
      </View>
    );
  };

  return (
    <SafeAreaView>
      <Text>{name}</Text>
    </SafeAreaView>
  );
}
