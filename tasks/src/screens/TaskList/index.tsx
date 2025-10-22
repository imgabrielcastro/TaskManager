import React, { useState, useCallback } from "react";
import { View, FlatList, ImageBackground } from "react-native";
import VStack from "../../components/Stacks/VStack";
import { theme } from "../../themes/theme";
import { Text } from "react-native-paper";
import Task from "../../components/Task";
import moment from "moment";
import "moment/locale/pt-br";
import commonStyles from "../../constants/commonStyles";
import todayImage from "../../assets/imgs/today.jpg";
import mockData from "../../data/mockTasks.json";
import { SCREEN_HEIGHT } from "../../constants";

// ✅ define a interface fora do componente
interface ITask {
  id: number;
  desc: string;
  estimateAt: Date;
  doneAt?: Date | null;
}

export default function TaskList() {
  const today = moment().locale("pt-br").format("ddd, D [de] MMMM [de] YYYY");
  const todayCapitalized = today.charAt(0).toUpperCase() + today.slice(1);

  const [tasks, setTasks] = useState<ITask[]>(
    (mockData?.tasks || []).map((task) => ({
      ...task,
      id: Number(task.id),
      estimateAt: new Date(task.estimateAt),
      doneAt: task.doneAt ? new Date(task.doneAt) : null,
    }))
  );

  const toggleTask = useCallback((taskId: number) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId
          ? { ...task, doneAt: task.doneAt ? null : new Date() }
          : task
      )
    );
  }, []);

  return (
    <VStack style={{ flex: 1, backgroundColor: theme.colors.text }}>
      <ImageBackground source={todayImage} style={{ height: SCREEN_HEIGHT * 0.30 }}>
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

      <View style={{ flex: 1 }}>
        <FlatList
          data={tasks}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <Task
              id={item.id}
              toggleTask={toggleTask}
              desc={item.desc}
              estimateAt={item.estimateAt}
              doneAt={item.doneAt}
            />
          )}
        />
      </View>
    </VStack>
  );
}
