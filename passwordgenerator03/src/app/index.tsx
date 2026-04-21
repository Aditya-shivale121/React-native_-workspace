import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  ScrollView,
} from "react-native";

import BouncyCheck from "react-native-bouncy-checkbox";
import * as Yup from "yup";
import { Formik } from "formik";
import { SafeAreaView } from "react-native-safe-area-context";

const passwordSchema = Yup.object().shape({
  passwordLength: Yup.number()
    .min(4, "Min 4 characters")
    .max(16, "Max 16 characters")
    .required("Length is required"),
});

export default function Index() {
  const [password, setPassword] = useState("");
  const [isPassGenerated, setIsPassGenerated] = useState(false);

  const [lowerCase, setLowerCase] = useState(true);
  const [upperCase, setUpperCase] = useState(false);
  const [numbers, setNumbers] = useState(false);
  const [symbols, setSymbols] = useState(false);

  const generatePasswordString = (passwordLength: number) => {
    let characterList = "";

    const upperCaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lowerCaseChars = "abcdefghijklmnopqrstuvwxyz";
    const digits = "0123456789";
    const specialChars = "!@#$%^&*()_+[]{}|;:,.<>?/~`-=";

    if (upperCase) characterList += upperCaseChars;
    if (lowerCase) characterList += lowerCaseChars;
    if (numbers) characterList += digits;
    if (symbols) characterList += specialChars;

    if (characterList.length === 0) return;

    const passwordResult = createPassword(characterList, passwordLength);
    setPassword(passwordResult);
    setIsPassGenerated(true);
  };

  const createPassword = (characters: string, length: number) => {
    let result = "";
    for (let i = 0; i < length; i++) {
      const index = Math.floor(Math.random() * characters.length);
      result += characters[index];
    }
    return result;
  };

  const resetPasswordState = () => {
    setPassword("");
    setIsPassGenerated(false);
    setLowerCase(true);
    setUpperCase(false);
    setNumbers(false);
    setSymbols(false);
  };

  return (
    <ScrollView keyboardShouldPersistTaps="handled">
      <SafeAreaView style={styles.appContainer}>
        <View style={styles.formContainer}>
          <Text style={styles.title}>Password Generator</Text>

          <Formik
            initialValues={{ passwordLength: "" }}
            validationSchema={passwordSchema}
            onSubmit={(values) =>
              generatePasswordString(Number(values.passwordLength))
            }
          >
            {({
              values,
              errors,
              touched,
              isValid,
              handleChange,
              handleSubmit,
              handleReset,
            }) => (
              <>
                {/* Input */}
                <View style={styles.inputWrapper}>
                  <View>
                    <Text style={styles.heading}>Password Length</Text>
                    {touched.passwordLength && errors.passwordLength && (
                      <Text style={styles.errorText}>
                        {errors.passwordLength}
                      </Text>
                    )}
                  </View>

                  <TextInput
                    style={styles.inputStyle}
                    value={values.passwordLength}
                    onChangeText={handleChange("passwordLength")}
                    placeholder="8"
                    keyboardType="numeric"
                  />
                </View>

                {/* Checkboxes */}
                <View style={styles.inputWrapper}>
                  <Text style={styles.heading}>Lowercase</Text>
                  <BouncyCheck
                    isChecked={lowerCase}
                    useBuiltInState={false}
                    onPress={() => setLowerCase(!lowerCase)}
                  />
                </View>

                <View style={styles.inputWrapper}>
                  <Text style={styles.heading}>Uppercase</Text>
                  <BouncyCheck
                    isChecked={upperCase}
                    useBuiltInState={false}
                    onPress={() => setUpperCase(!upperCase)}
                  />
                </View>

                <View style={styles.inputWrapper}>
                  <Text style={styles.heading}>Numbers</Text>
                  <BouncyCheck
                    isChecked={numbers}
                    useBuiltInState={false}
                    onPress={() => setNumbers(!numbers)}
                  />
                </View>

                <View style={styles.inputWrapper}>
                  <Text style={styles.heading}>Symbols</Text>
                  <BouncyCheck
                    isChecked={symbols}
                    useBuiltInState={false}
                    onPress={() => setSymbols(!symbols)}
                  />
                </View>

                {/* Buttons */}
                <View style={styles.formActions}>
                  <TouchableOpacity
                    disabled={!isValid}
                    style={styles.primaryBtn}
                    onPress={handleSubmit as any}
                  >
                    <Text style={styles.primaryBtnTxt}>
                      Generate Password
                    </Text>
                  </TouchableOpacity>

                  <TouchableOpacity
                    style={styles.secondaryBtn}
                    onPress={() => {
                      handleReset();
                      resetPasswordState();
                    }}
                  >
                    <Text style={styles.secondaryBtnTxt}>Reset</Text>
                  </TouchableOpacity>
                </View>

                {/* Output */}
                {isPassGenerated && (
                  <Text style={styles.generatedPassword}>{password}</Text>
                )}
              </>
            )}
          </Formik>
        </View>
      </SafeAreaView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
  },
  formContainer: {
    margin: 10,
    padding: 10,
  },
  title: {
    fontSize: 30,
    fontWeight: "600",
    marginBottom: 15,
  },
  heading: {
    fontSize: 15,
  },
  inputWrapper: {
    marginBottom: 15,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  inputStyle: {
    padding: 8,
    width: "30%",
    borderWidth: 1,
    borderRadius: 4,
  },
  errorText: {
    fontSize: 12,
    color: "red",
  },
  formActions: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 10,
  },
  primaryBtn: {
    padding: 10,
    borderRadius: 8,
    backgroundColor: "#5DA3FA",
    marginHorizontal: 5,
  },
  primaryBtnTxt: {
    color: "#fff",
    fontWeight: "700",
  },
  secondaryBtn: {
    padding: 10,
    borderRadius: 8,
    backgroundColor: "#CAD5E2",
    marginHorizontal: 5,
  },
  secondaryBtnTxt: {
    fontWeight: "500",
  },
  generatedPassword: {
    fontSize: 20,
    textAlign: "center",
    marginTop: 20,
  },
});