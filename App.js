import * as React from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import DJButton from './DJButton';
import AppHeader from './AppHeader';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.audioButtons = [];
  }

  stopAllAudio = async () => {
    for (const button of this.audioButtons) {
      if (button && button.stopSound) {
        await button.stopSound();
      }
    }
  };

  render() {
    return (
      <View>
        <AppHeader />
        <View style={styles.musicButtonContainer}>
          <DJButton
            ref={(ref) => (this.audioButtons[0] = ref)}
            uri="https://d1490khl9dq1ow.cloudfront.net/audio/music/mp3preview/BsTwCwBHBjzwub4i4/rock-guitar-music-bed_z1y16Brd_NWM.mp3"
            text="Press Me"
            bgcolor="purple"
          />
        </View>

        <View style={styles.musicButtonContainer}>
          <DJButton
            ref={(ref) => (this.audioButtons[1] = ref)}
            uri="https://d1490khl9dq1ow.cloudfront.net/audio/music/mp3preview/BsTwCwBHBjzwub4i4/rock-guitar-underscore-music-bed_MJhF2rB__NWM.mp3"
            text="Press Me"
            bgcolor="yellow"
          />
        </View>

        <View style={styles.musicButtonContainer}>
          <DJButton
            ref={(ref) => (this.audioButtons[2] = ref)}
            uri="https://d1490khl9dq1ow.cloudfront.net/audio/music/mp3preview/BsTwCwBHBjzwub4i4/bright-and-breezy-music-bed_MJA8hSHO_NWM.mp3"
            text="Press Me"
            bgcolor="green"
          />
          <DJButton
            ref={(ref) => (this.audioButtons[3] = ref)}
            uri="http://codeskulptor-demos.commondatastorage.googleapis.com/GalaxyInvaders/player_shoot.wav"
            text="Press Me"
            bgcolor="blue"
          />
        </View>

        <View style={styles.stopButtonContainer}>
          <TouchableOpacity
            style={styles.stopButton}
            onPress={this.stopAllAudio}
          >
            <Text>STOP MUSIC</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  stopButtonContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 40,
  },
  musicButtonContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  stopButton: {
    width: '80%',
    height: 70,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
    backgroundColor: 'red',
    borderWidth: 2,
    borderColor: 'rgba(0,0,0,0.3)',
  },
});
