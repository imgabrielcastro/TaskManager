import { StatusBar } from "expo-status-bar";
import TaskList from "./src/screens/TaskList";
import { PaperProvider } from "react-native-paper";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { theme } from "./src/themes/theme";

export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <PaperProvider theme={theme}>
        <TaskList />
        <StatusBar style="light" />
      </PaperProvider>
    </GestureHandlerRootView>
  );
}
