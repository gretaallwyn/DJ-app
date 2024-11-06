import * as React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Audio } from 'expo-av';

export default class DJButton extends React.Component {
  constructor(props) {
    super(props);
    this.sound = new Audio.Sound();
    this.state = {
      isSoundLoaded: false,
    };
  }

  playSound = async () => {
    try {
      // Unload any previously loaded sound before playing a new one
      await this.sound.unloadAsync();
      await this.sound.loadAsync(
        { uri: this.props.uri },
        { shouldPlay: true }
      );
      this.setState({ isSoundLoaded: true });
    } catch (error) {
      console.error('Error playing sound:', error);
    }
  };

  stopSound = async () => {
    if (this.state.isSoundLoaded) {
      try {
        await this.sound.stopAsync();
        this.setState({ isSoundLoaded: false });
      } catch (error) {
        console.error('Error stopping sound:', error);
      }
    }
  };

  async componentWillUnmount() {
    if (this.state.isSoundLoaded) {
      await this.sound.unloadAsync();
    }
  }

  render() {
    return (
      <TouchableOpacity
        style={[styles.soundButton, { backgroundColor: this.props.bgcolor }]}
        onPress={this.playSound}
      >
        <Text style={styles.soundButtonText}>{this.props.text}</Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  soundButton: {
    width: 200,
    height: 100,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 3,
    borderColor: 'rgba(0,0,0,0.2)',
  },
  soundButtonText: {
    fontFamily: 'Trebuchet MS',
    fontSize: 20,
  },
});
