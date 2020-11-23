import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  Image,
  TouchableOpacity,
  CheckBox,
  Alert,
} from "react-native";
import Axios from "axios";

import { globalStyles as styles } from "../Styles/global";

function LoginForm({ navigation }) {
  const [url, setUrl] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [remember, setRemember] = useState(true);
  const [terms, setTerms] = useState(false);

  const submission = () => {
    if (url == "" || username == "" || password == "") {
      Alert.alert("Please enter values in all fields");
    } else {
      //   let obj = {
      //     username: username,
      //     password: password,
      //     url: url,
      //     multiple_user_login: {
      //       app_version: "1.0",
      //       device_model: "SM-N750",
      //       device_name: "samsung",
      //       device_token: "asdasdasd",
      //       device_type: "android",
      //       device_uid: "5fd489c904abbaee",
      //       device_version: "5.1.1",
      //     },
      //   };
      //   Axios.post("https://devapi.fiiviq.com/users/commonlogin.json", obj)
      //     .then((res) => {
      //       navigation.push("Details");
      //     })
      //     .catch((err) => {
      //       Alert.alert("Something went wrong....");
      //     });
      navigation.push("ReviewDetails");
    }
  };

  return (
    <View>
      <View style={styles.container}>
        <View style={styles.SectionStyle}>
          <Image
            source={require("../../../assets/Images/ic_workshp_url.png")}
            style={styles.ImageStyle}
          />
          <TextInput
            placeholder="Please enter URL here"
            value={url}
            onChangeText={(val) => {
              setUrl(val);
            }}
            maxLength={20}
          />
        </View>
      </View>

      <View style={styles.container}>
        <View style={styles.SectionStyle}>
          <Image
            source={require("../../../assets/Images/ic_user.png")}
            style={styles.ImageStyle}
          />
          <TextInput
            placeholder="Please enter Username here"
            value={username}
            onChangeText={(val) => {
              setUsername(val);
            }}
            maxLength={20}
          />
        </View>
      </View>

      <View style={styles.container}>
        <View style={styles.SectionStyle}>
          <Image
            source={require("../../../assets/Images/ic_password.png")}
            style={styles.ImageStyle}
          />
          <TextInput
            secureTextEntry={true}
            placeholder="Please enter Password here"
            value={password}
            onChangeText={(val) => {
              setPassword(val);
            }}
            maxLength={20}
          />
        </View>
      </View>

      <View style={{ marginTop: 10 }}>
        <View style={styles.checkboxContainer}>
          <CheckBox
            value={remember}
            onValueChange={(val) => {
              setRemember(!val);
            }}
            style={styles.checkbox}
          />
          <Text style={styles.label}>Remember me</Text>
          <Text style={styles.forgotLabel}>Forgot Password?</Text>
        </View>
        <View style={styles.checkboxContainer}>
          <CheckBox
            value={terms}
            onValueChange={(val) => {
              setTerms(!val);
            }}
            style={styles.checkbox}
          />
          <Text style={styles.label}>I accept the Terms & condition</Text>
        </View>
      </View>
      <TouchableOpacity onPress={() => submission()}>
        <View style={styles.ButtonViewStyle}>
          <Text style={{ color: "white" }}>Login</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

export default LoginForm;
