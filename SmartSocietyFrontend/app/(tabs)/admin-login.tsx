import { form_Error } from "@/constants/form-error";
import { router } from "expo-router";
import { Controller, useForm } from "react-hook-form";
import { Text, TextInput, TouchableOpacity, View } from "react-native";

export default function AdminLogin() {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();

  const onSubmit = (data: any) => {
    console.log(data);
  };
  return (
    <View className="bg-[#f5f5f5] h-full flex-1 justify-center items-center p-[20]">
      <Text className="text-2xl font-bold text-center mb-[25]">
        Admin Login
      </Text>

      {/* {email} */}

      <Controller
        control={control}
        name="email"
        rules={{
          required: form_Error.email.required,
          pattern: {
            value: /^\S+@\S+$/i,
            message: form_Error.email.pattern,
          },
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            className="border border-[#d3d0d0] rounded w-full p-[12] mb-[18] bg-[#fff] pl-2"
            onBlur={onBlur}
            onChangeText={(value) => onChange(value)}
            value={value}
            placeholder="Email"
          />
        )}
      />

      {errors.email && (
        <Text className="text-red-500">
          {typeof errors.email.message === "string" ? errors.email.message : ""}
        </Text>
      )}

      {/* {password} */}

      <Controller
        control={control}
        name="password"
        rules={{
          required: form_Error.password.required,
          minLength: {
            value: 6,
            message: form_Error.password.minLength,
          },
          maxLength: {
            value: 10,
            message: form_Error.password.maxLength,
          },
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            className="border border-[#d3d0d0] rounded w-full p-[12] mb-[18] mt-[2] bg-[#fff] pl-2"
            onBlur={onBlur}
            secureTextEntry
            onChangeText={(value) => onChange(value)}
            value={value}
            placeholder="Password"
          />
        )}
      />

      {errors.password && (
        <Text className="text-red-500">
          {typeof errors.password.message === "string"
            ? errors.password.message
            : ""}
        </Text>
      )}

      {/*submit button*/}

      <TouchableOpacity
        onPress={handleSubmit(onSubmit)}
        className="bg-[#4CAF50] p-[10] rounded items-center mt-4 w-full"
      >
        <Text className="text-[#fff] text-lg font-bold">Login</Text>
      </TouchableOpacity>

      <TouchableOpacity
        className="text-[#fff] text-3xl font-bold"
        onPress={() => router.back()}
      >
        <Text className="mt-[15] items-center text-lg text-[#918888]">
          Back
        </Text>
      </TouchableOpacity>
    </View>
  );
}
