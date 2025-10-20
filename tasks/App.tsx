import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import TaskList from "./src/screens/TaskList";
import { PaperProvider } from "react-native-paper";
import { GestureHandlerRootView } from "react-native-gesture-handler";

export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <PaperProvider>
        <TaskList />
        <StatusBar style="auto" />
      </PaperProvider>
    </GestureHandlerRootView>
  );
}
