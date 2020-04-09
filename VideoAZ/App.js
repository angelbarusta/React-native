import React, {Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Platform,
  View,
  Image,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

// type Props = {};

export default class App extends Component {
  render() {
    return (
      <>
        <View style={styles.container}>
          <Image
            source={require('./assets/az-nuevo_circular.png')}
            style={{width: 300, height: 80}}
          />
          <Text style={styles.HeadText}>HOLA WE</Text>
          <Text>{instructions}</Text>
        </View>
      </>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  HeadText: {
    color: 'blue',
    paddingTop: 10,
  },

  body: {
    backgroundColor: 'white',
  },
});
