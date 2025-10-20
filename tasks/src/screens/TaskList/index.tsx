import React from "react";
import {
  View,
  StyleSheet,
  FlatList,
  ImageBackground,
} from "react-native";
import VStack from "../../components/Stacks/VStack";

import theme from "../../themes/theme";
import { Button, Text } from "react-native-paper";

import moment from "moment";
import "moment/locale/pt-br";

import commonStyles from "../../constants/commonStyles";

import todayImage from "../../assets/imgs/today.jpg";

export default function TaskList() {
  const today = moment().locale("pt-br").format("dddd, D [de] MMMM [de] YYYY");
  return (
    <VStack style={{ flex: 1, backgroundColor: "#fff" }}>
      <ImageBackground source={todayImage} style={{ flex: 3 }}>
        <VStack
          style={{
            flex: 1,
            justifyContent: "flex-end",
            padding: 12,
          }}
        >
          <Text variant="bodyMedium">Hoje</Text>
          <Text style={{ color: theme.colors.background }}>{today}</Text>
        </VStack>
      </ImageBackground>

      <View style={{ flex: 7 }}>
        <Text style={{ fontSize: 24, color: theme.colors.background }}>Task List</Text>
      </View>
    </VStack>
  );
}
