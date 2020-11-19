import {StyleSheet} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';

const styles = StyleSheet.create({
  body: {
    flex: 1,
    marginTop: 25,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 40,
  },
  flexContiainer: {
    flex: 1,
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 75,
  },
  sectionContainer: {
    marginTop: 60,
    marginBottom: 10,
    paddingHorizontal: 24,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  sectionDescription: {
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
    padding: 5,
    marginVertical: 1,
    textAlign: 'center',
  },
  episodeContainer: {
    marginTop: 20,
    marginBottom: 10,
    paddingHorizontal: 24,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 10,
  },
});

export default styles;
