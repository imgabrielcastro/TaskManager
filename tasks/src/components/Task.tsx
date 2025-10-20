import {theme} from "../themes/theme";
import {Text} from "react-native-paper";
import VStack from "./Stacks/VStack";
import commonStyles from "../constants/commonStyles";
import {StyleSheet} from "react-native";

interface ITaskProps {
    desc: string;
    estimateAt: Date;
    doneAt?: Date | null;
}

export default function Task({ desc, estimateAt, doneAt }: ITaskProps) {
    return (
        <VStack style={{
        }}>
            <Text variant="bodyLarge" style={styles.taskContainer}>{desc}</Text>
            <Text variant="bodyMedium" style={styles.taskContainer}>{estimateAt.toString()}</Text>
            {doneAt && <Text variant="bodyMedium" style={styles.taskContainer}>{doneAt.toString()}</Text>}
        </VStack>
    )
}

const styles = StyleSheet.create({
    taskContainer: {
        fontFamily: commonStyles.fontFamily,
        color: theme.colors.background,
    },
});

