import React from 'react';
import {
  ScrollView,
  ActivityIndicator,
  Image,
  View,
  SafeAreaView,
  Text,
} from 'react-native';
import {theme} from '../../theme/theme';
import styles from './Style';

const DetailsScreen = ({route}) => {
  const {id, image, gender, species, episode} = route?.params || '';

  return (
    <SafeAreaView style={styles.flexContiainer}>
      <View style={styles.flexContiainer}>
        <ScrollView>
          <View style={styles.body}>
            <View>
              {image ? (
                <Image
                  style={styles.image}
                  source={{
                    uri: `${image}`,
                  }}
                />
              ) : (
                <ActivityIndicator
                  size="large"
                  color={theme.colors.headerBackground}
                />
              )}
            </View>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionDescription}>Gender: {gender}</Text>
              <Text style={styles.sectionDescription}>Species: {species}</Text>
              <View>
                <Text style={styles.sectionDescription}>Episode: </Text>
                {episode?.map((e, i) => (
                  <View key={id + i} style={styles.episodeContainer}>
                    <Text style={styles.sectionDescription}>
                      Name: {e.name}
                    </Text>
                    <Text style={styles.sectionDescription}>
                      Date: {e.air_date}
                    </Text>
                  </View>
                ))}
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default DetailsScreen;
