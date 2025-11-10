import { theme } from "../themes/theme";
import { Text } from "react-native-paper";
import VStack from "./Stacks/VStack";
import commonStyles from "../constants/commonStyles";
import { StyleSheet, TouchableWithoutFeedback, TouchableOpacity } from "react-native";
import HStack from "./Stacks/HStack";
import Icon from "react-native-vector-icons/FontAwesome";
import { SCREEN_WIDTH, SCREEN_HEIGHT } from "../constants";
import moment from "moment";
import "moment/locale/pt-br";

interface ITaskProps {
  desc: string;
  estimateAt: Date;
  doneAt?: Date | null;
  toggleTask: (taskId: number) => void;
  id: number;
}

export default function Task({
  desc,
  estimateAt,
  doneAt,
  toggleTask,
  id,
}: ITaskProps) {
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

  const date = doneAt ? doneAt : estimateAt;
  const formattedDate = moment(date).locale("pt-br").format("ddd, D [de] MMMM");
  const todayCapitalized =
    formattedDate.charAt(0).toUpperCase() + formattedDate.slice(1);

  return (
    <HStack
      style={{
        borderColor: theme.colors.background,
        borderWidth: 0.2,
        borderRadius: 12,
        marginHorizontal: 12,
        padding: 12,
        alignItems: "center",
        marginVertical: 4,
      }}
    >
      <TouchableOpacity
        onPress={() => {
          toggleTask(id);
        }}
      >
        <VStack style={{ width: SCREEN_WIDTH * 0.15 }}>
          {getCheckView(doneAt)}
        </VStack>
      </TouchableOpacity>

      <VStack>
        <Text
          variant="bodyLarge"
          style={{
            textDecorationLine: doneAt ? "line-through" : "none",
            color: theme.colors.primary,
          }}
        >
          {desc}
        </Text>
        <Text
          variant="bodyMedium"
          style={{
            fontFamily: commonStyles.fontFamily,
            color: theme.colors.secondary,
          }}
        >
          {todayCapitalized}
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
