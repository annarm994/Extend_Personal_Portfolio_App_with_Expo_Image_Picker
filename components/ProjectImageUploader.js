import React, { useState } from 'react';
import { View, Button, Image, Alert, StyleSheet } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

const ProjectImageUploader = ({ projectId, existingImage }) => {
  const [projectImage, setProjectImage] = useState(existingImage);

  const pickImage = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== 'granted') {
      Alert.alert("Permission to access camera roll is required!");
      return;
    }

    const pickerResult = await ImagePicker.launchImageLibraryAsync();
    if (!pickerResult.canceled) {
      setProjectImage(pickerResult.assets[0].uri);
    }
  };

  return (
    <View style={styles.container}>
      <Button title="Select Project Image" onPress={pickImage} />
      {projectImage && (
        <Image
          source={{ uri: projectImage }}
          style={styles.image}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginVertical: 20,
  },
  image: {
    width: 200,
    height: 200,
    marginTop: 20,
  },
});

export default ProjectImageUploader;
