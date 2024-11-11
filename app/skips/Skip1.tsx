import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {RootStackParamList} from "@/lib/navigationTypes";

const WelcomeImage = () => (
    <View style={styles.centerContent}>
      <Image
          source={{ uri: 'https://storage.googleapis.com/a1aa/image/mL1Shxkd2uatKlbMJoOfCwhiADBFKxEOFgR7JIa4A6aQ5c3JA.jpg' }}
          style={styles.image}
          alt="Illustration of a woman with headphones working on a laptop"
      />
    </View>
);

const WelcomeMessage = () => (
    <View style={styles.textCenter}>
      <Text style={styles.titleText}>
        Добре дошли в Gineko!
        {'\n'}
        Запазете час при гинеколог лесно и удобно
      </Text>
    </View>
);

const DotSeparator = () => (
    <View style={styles.dotSeparator}>
      <Text style={styles.dotText}>• • •</Text>
    </View>
);

const NavigationButtons = () => {
    const navigation = useNavigation<NavigationProp<RootStackParamList>>();

    return (
        <View style={styles.navigationButtons}>
            <TouchableOpacity onPress={() => navigation.navigate('Skip2')}>
                <Text style={styles.skipText}>Skip</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.nextButton} onPress={() => navigation.navigate('Skip2')}>
                <Text style={styles.nextButtonText}>→</Text>
            </TouchableOpacity>
        </View>
  );
};
const Skip1Screen = () => {
  return (
      <View style={styles.container}>
        <WelcomeImage />
        <WelcomeMessage />
        <DotSeparator />
        <NavigationButtons />
      </View>
  );
};

export default Skip1Screen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f9fafb',
    paddingHorizontal: 16,
  },
  centerContent: {
    alignItems: 'center',
  },
  image: {
    width: 300,
    height: 300,
    resizeMode: 'cover',
  },
  textCenter: {
    marginTop: 16,
    alignItems: 'center',
  },
  titleText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#000',
    textAlign: 'center',
  },
  dotSeparator: {
    marginTop: 16,
    justifyContent: 'center',
  },
  dotText: {
    color: '#000',
    fontSize: 24,
  },
  navigationButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 16,
    width: '100%',
    paddingHorizontal: 16,
  },
  skipText: {
    color: '#000',
    fontSize: 16,
  },
  nextButton: {
    backgroundColor: '#000',
    borderRadius: 24,
    padding: 12,
  },
  nextButtonText: {
    color: '#fff',
    fontSize: 16,
  },
});
