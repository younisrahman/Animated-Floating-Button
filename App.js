import { StatusBar } from "expo-status-bar";
import { useRef, useState } from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Animated,
} from "react-native";

export default function App() {
  const animation = useRef(new Animated.Value(0)).current;
  const [isButtonClicked, setisButtonClicked] = useState(false);

  const toggleButton = () => {
    const toValue = isButtonClicked ? 0 : 1;
    Animated.spring(animation, {
      toValue,
      friction: 5,
      useNativeDriver: true,
    }).start();
    setisButtonClicked(!isButtonClicked);
  };

  const rotation = {
    transform: [
      {
        rotate: animation.interpolate({
          inputRange: [0, 1],
          outputRange: ["0deg", "90deg"],
        }),
      },
    ],
  };

  const button1Style = {
    transform: [
      { scale: animation },
      {
        translateY: animation.interpolate({
          inputRange: [0, 1],
          outputRange: [0, -80],
        }),
      },
    ],
  };
  const button2Style = {
    transform: [
      { scale: animation },
      {
        translateY: animation.interpolate({
          inputRange: [0, 1],
          outputRange: [0, -50],
        }),
      },
      {
        translateX: animation.interpolate({
          inputRange: [0, 1],
          outputRange: [0, -80],
        }),
      },
    ],
  };
  const button3Style = {
    transform: [
      { scale: animation },
      {
        translateY: animation.interpolate({
          inputRange: [0, 1],
          outputRange: [0, -50],
        }),
      },
      {
        translateX: animation.interpolate({
          inputRange: [0, 1],
          outputRange: [0, 80],
        }),
      },
    ],
  };

  return (
    <View style={styles.container}>
      <View
        style={{
          position: "absolute",
          bottom: 80,
          alignSelf: "center",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {/* First Button */}
        <TouchableOpacity
          style={{
            position: "absolute",
            bottom: 0,
            marginBottom: 10,
          }}
        >
          <Animated.View
            style={[
              {
                width: 60,
                height: 60,
                borderRadius: 30,
                backgroundColor: "white",
                alignItems: "center",
                backgroundColor: "red",
              },
              button1Style,
            ]}
          >
            <Text
              style={{
                fontSize: 47,
                color: "white",
                textAlign: "center",
              }}
            >
              1
            </Text>
          </Animated.View>
        </TouchableOpacity>

        {/* Second Button */}
        <TouchableOpacity
          style={{
            position: "absolute",
            bottom: 0,
            marginBottom: 10,
          }}
        >
          <Animated.View
            style={[
              {
                width: 60,
                height: 60,
                borderRadius: 30,
                backgroundColor: "white",
                alignItems: "center",
                backgroundColor: "blue",
              },
              button2Style,
            ]}
          >
            <Text
              style={{
                fontSize: 47,
                color: "white",
                textAlign: "center",
              }}
            >
              2
            </Text>
          </Animated.View>
        </TouchableOpacity>

        {/* Third Button */}
        <TouchableOpacity
          style={{
            position: "absolute",
            bottom: 0,
            marginBottom: 10,
          }}
        >
          <Animated.View
            style={[
              {
                width: 60,
                height: 60,
                borderRadius: 30,
                backgroundColor: "white",
                alignItems: "center",
                backgroundColor: "green",
              },
              button3Style,
            ]}
          >
            <Text
              style={{
                fontSize: 47,
                color: "white",
                textAlign: "center",
              }}
            >
              3
            </Text>
          </Animated.View>
        </TouchableOpacity>

        {/* Main Button */}
        <TouchableOpacity
          activeOpacity={1}
          style={{
            position: "absolute",
            bottom: 0,
            marginBottom: 10,
          }}
          onPress={() => toggleButton()}
        >
          <Animated.View
            style={[
              {
                width: 60,
                height: 60,
                borderRadius: 30,
                backgroundColor: "white",
                alignItems: "center",
                backgroundColor: "purple",
              },
              rotation,
            ]}
          >
            <Text
              style={{
                fontSize: 47,
                color: "white",
                textAlign: "center",
              }}
            >
              +
            </Text>
          </Animated.View>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
