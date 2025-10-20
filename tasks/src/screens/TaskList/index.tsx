import React from "react";
import { View, StyleSheet, FlatList, ImageBackground } from "react-native";
import VStack from "../../components/Stacks/VStack";

import { theme } from "../../themes/theme";
import { Button, Text } from "react-native-paper";

import moment from "moment";
import "moment/locale/pt-br";

import commonStyles from "../../constants/commonStyles";

import todayImage from "../../assets/imgs/today.jpg";

export default function TaskList() {
  const today = moment().locale("pt-br").format("dddd, D [de] MMMM [de] YYYY");
  return (
    <VStack style={{ flex: 1, backgroundColor: theme.colors.text }}>
      <ImageBackground source={todayImage} style={{ flex: 3 }}>
        <VStack
          style={{
            flex: 1,
            justifyContent: "flex-end",
            padding: 12,
          }}
        >
          <Text variant="displayLarge" style={{fontFamily: commonStyles.fontFamily, color: theme.colors.text, marginBottom: 20, marginLeft: 4}}>Hoje</Text>
          <Text style={{ color: theme.colors.text }}>{today}</Text>
        </VStack>
      </ImageBackground>

      <View style={{ flex: 7 }}>
        <Text style={{ fontSize: 24, color:  theme.colors.background, fontFamily: commonStyles.fontFamily }}>
          Task List
        </Text>
      </View>
    </VStack>
  );
}
