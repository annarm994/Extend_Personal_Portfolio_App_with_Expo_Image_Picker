// components/ProfileImageUploader.js
import React, { useState } from 'react';
import { View, Button, Image, Alert, StyleSheet } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

const ProfileImageUploader = () => {
  const [profileImage, setProfileImage] = useState(null);

  const pickImage = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== 'granted') {
      Alert.alert("Permission to access camera roll is required!");
      return;
    }

    const pickerResult = await ImagePicker.launchImageLibraryAsync();
    if (!pickerResult.canceled) {
      setProfileImage(pickerResult.assets[0].uri);
    }
  };

  return (
    <View style={styles.container}>
      <Button title="Select Profile Image" onPress={pickImage} />
      {profileImage && (
        <Image
          source={{ uri: profileImage }}
          style={styles.image}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginTop: 20,
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 100,
    marginTop: 20,
  },
});

export default ProfileImageUploader;