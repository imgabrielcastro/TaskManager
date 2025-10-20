import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import TaskList from "./src/screens/TaskList";
import { PaperProvider } from "react-native-paper";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { theme } from "./src/themes/theme";

export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <PaperProvider theme={theme}>
        <TaskList />
        <StatusBar style="auto" />
      </PaperProvider>
    </GestureHandlerRootView>
  );
}
