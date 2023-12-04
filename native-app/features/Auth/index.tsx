import { useForm, useController } from "react-hook-form";
import { Platform, StyleSheet, View } from "react-native";
import { useTheme, TextInput, Button, Text } from "react-native-paper";

import React, { useEffect } from "react";
import useAuth from "./hooks/useAuth";
import { AuthFormProps } from "./types";
import { router } from "expo-router";

type FormImputProps = {
  name: string;
  label: string;
  error: string;
  control: any;
};

const FormInput = ({ name, control, label, error }: FormImputProps) => {
  const theme = useTheme();
  const { field } = useController({
    name,
    control,
    defaultValue: "",
    rules: {
      required: true,
    },
  });
  return (
    <View style={[styles.formInput]}>
      <Text variant="labelMedium">{label}</Text>
      <TextInput value={field.value} onChangeText={field.onChange} />
      {error && (
        <Text style={{ color: theme.colors.error }} variant="labelMedium">
          {error}
        </Text>
      )}
    </View>
  );
};

const AuthFeature = () => {
  const theme = useTheme();
  const { signIn, loading, user, error } = useAuth();
  const {
    handleSubmit,
    control,
    formState: { errors, isValid },
  } = useForm<AuthFormProps>({
    defaultValues: {
      username: "",
      password: "",
    },
  });

  const onSubmit = (data: AuthFormProps) => {
    signIn(data.username, data.password);
  };

  useEffect(() => {
    if (!loading) {
      if (user) {
        router.replace("/(tabs)/machines");
      } else if (error) {
        console.log("Error:", error);
      }
    }
  }, [loading]);

  return (
    <View style={[styles.container]}>
      <Text variant="headlineLarge">BellSant Code challenges</Text>
      <FormInput
        label="Username"
        name="username"
        control={control}
        error={errors.username?.message ?? ""}
      />
      <FormInput
        label="Password"
        name="password"
        control={control}
        error={errors.password?.message ?? ""}
      />
      <Button
        loading={loading}
        disabled={loading}
        buttonColor={theme.colors.primary}
        textColor="#FFFFFF"
        onPress={handleSubmit(onSubmit)}
        mode="elevated"
        style={{ width: "100%", borderRadius: 4 }}
      >
        Log in
      </Button>
      <View style={[styles.error]}>
        {error && <Text variant="labelSmall">{error.messsage}</Text>}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "flex-start",
    justifyContent: "center",
    gap: 16,
    width: "100%",
    paddingHorizontal: 24,
  },
  error: {
    width: "100%",
    paddingVertical: 8,
  },
  formInput: {
    width: "100%",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});

export default AuthFeature;
