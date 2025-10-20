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
  const today = moment().locale("pt-br").format("ddd, D [de] MMMM [de] YYYY");
  const todayCapitalized = today.charAt(0).toUpperCase() + today.slice(1);
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
          <Text
            variant="displayLarge"
            style={{
              fontFamily: commonStyles.fontFamily,
              color: theme.colors.text,
              marginBottom: 20,
              marginLeft: 20,
            }}
          >
            Hoje
          </Text>
          <Text
            variant="titleLarge"
            style={{
              color: theme.colors.text,
              fontFamily: commonStyles.fontFamily,
              marginLeft: 20,
              marginBottom: 30,
            }}
          >
            {todayCapitalized}
          </Text>
        </VStack>
      </ImageBackground>

      <View style={{ flex: 7 }}>
        <Text
          style={{
            fontSize: 24,
            color: theme.colors.background,
            fontFamily: commonStyles.fontFamily,
          }}
        >
          Task List
        </Text>
        
      </View>
    </VStack>
  );
}
