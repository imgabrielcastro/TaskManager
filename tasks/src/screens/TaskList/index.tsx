import React from "react";
import { View, StyleSheet, FlatList, ImageBackground } from "react-native";
import VStack from "../../components/Stacks/VStack";
import { theme } from "../../themes/theme";
import { Button, Text } from "react-native-paper";
import Task from "../../components/Task";
import moment from "moment";
import "moment/locale/pt-br";
import commonStyles from "../../constants/commonStyles";
import todayImage from "../../assets/imgs/today.jpg";
import mockData from "../../data/mockTasks.json";

export default function TaskList() {
  const today = moment().locale("pt-br").format("ddd, D [de] MMMM [de] YYYY");
  const todayCapitalized = today.charAt(0).toUpperCase() + today.slice(1);
  const tasks = mockData?.tasks || [];

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
        <FlatList
          data={tasks}
          keyExtractor={(item) => item.desc.toString()}
          renderItem={({ item }) => (
            <Task
              desc={item.desc}
              estimateAt={new Date(item.estimateAt)}
              doneAt={item.doneAt ? new Date(item.doneAt) : null}
            />
          )}
        />
      </View>
    </VStack>
  );
}
