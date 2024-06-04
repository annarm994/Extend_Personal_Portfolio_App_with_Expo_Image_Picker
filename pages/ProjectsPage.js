import React from 'react';
import { View, Text, Button, StyleSheet, ScrollView } from 'react-native';
import ProjectImageUploader from '../components/ProjectImageUploader';

const ProjectsPage = ({ navigation }) => {
  const projects = [
    { id: 1, name: 'Project One', image: null },
    { id: 2, name: 'Project Two', image: null },
    // Add more projects as needed
  ];

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Projects Page</Text>
      {projects.map(project => (
        <View key={project.id} style={styles.projectContainer}>
          <Text style={styles.projectName}>{project.name}</Text>
          <ProjectImageUploader projectId={project.id} existingImage={project.image} />
        </View>
      ))}
      <Button title="Home" onPress={() => navigation.navigate('Home')} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  projectContainer: {
    marginBottom: 30,
    alignItems: 'center',
  },
  projectName: {
    fontSize: 18,
  },
});

export default ProjectsPage;