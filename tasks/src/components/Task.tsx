import { theme } from "../themes/theme";
import { Text } from "react-native-paper";
import VStack from "./Stacks/VStack";
import commonStyles from "../constants/commonStyles";
import { StyleSheet, View } from "react-native";
import HStack from "./Stacks/HStack";
import Icon from "react-native-vector-icons/FontAwesome";
import { SCREEN_WIDTH, SCREEN_HEIGHT as width } from "../constants";

interface ITaskProps {
  desc: string;
  estimateAt: Date;
  doneAt?: Date | null;
}

export default function Task({ desc, estimateAt, doneAt }: ITaskProps) {
  const doneOrNot = doneAt
    ? { textDecorationLine: "line-through" }
    : { textDecorationLine: "none" };

  function getCheckView(doneAt?: Date | null) {
    if (doneAt != null) {
      return (
        <VStack>
          <Icon name="check-square-o" size={24} color={theme.colors.primary} />
        </VStack>
      );
    } else {
      return (
        <VStack>
          <Icon name="square-o" size={24} color={theme.colors.primary} />
        </VStack>
      );
    }
  }

  return (
    <HStack
      style={{
        borderColor: theme.colors.background,
        borderWidth: 1,
        padding: 12,
        alignItems: "center",
      }}
    >
      <VStack style={{ width: SCREEN_WIDTH * 0.2 }}>
        {getCheckView(doneAt)}
      </VStack>

      <VStack>
        <Text
          variant="bodyMedium"
          style={{
            textDecorationLine: doneAt ? "line-through" : "none",
            color: theme.colors.primary,
          }}
        >
          {desc}
        </Text>
        <Text variant="bodyMedium" style={styles.taskContainer}>
          {estimateAt.toString()}
        </Text>
      </VStack>
    </HStack>
  );
}

const styles = StyleSheet.create({
  taskContainer: {
    fontFamily: commonStyles.fontFamily,
    color: theme.colors.primary,
  },
});
