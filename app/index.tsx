import { Text, View } from "react-native";
import Notification from "@/components/notificationPage";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Notification />
    </View>
  );
}
