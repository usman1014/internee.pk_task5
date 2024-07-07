import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export const AuthButton = ({ Btncolor, TxtColor, label, width, onPress }) => {
  return (
    <TouchableOpacity
      style={[styles.Btn, { backgroundColor: Btncolor, width: width }]}
      onPress={onPress}
    >
      <Text style={{ color: TxtColor }}>{label}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  Btn: {
    padding: 10,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    marginVertical: '4%',
    borderWidth: 1,
    borderColor: 'green'
  },
});
