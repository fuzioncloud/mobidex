import React, { Component } from "react";
import { TouchableOpacity } from "react-native";
import { Header } from "react-native-elements";
import Icon from "react-native-vector-icons/MaterialIcons";

export default class extends Component {
  render() {
    return (
      <Header
        leftComponent={(
          <TouchableOpacity onPress={() => this.props.navigation.goBack(null)}>
            <Icon name="arrow-back" color="white" />
          </TouchableOpacity>
        )}
        centerComponent={{ text: "Mobidex", style: { color: "white" } }} />
    );
  }
}