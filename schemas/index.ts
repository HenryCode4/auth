import * as z from "zod"

const isBiometricKey = (value: string) => {
    // Implement your validation logic for biometric key here
    // Example: Check if the value is a valid format for a biometric key
    // For simplicity, let's assume a biometric key should be a string with a minimum length
    return typeof value === 'string' && value.length >= 8;
  };
  

export const LoginSchema = z.object({
    email: z.string().email({
        message: "Email is required"
    }),
    password: z.string().min(1,({message: "Password is required"})),
});


export const BiometricSchema = z.object({
    biometricKey: z.string().refine(isBiometricKey, {
      message: "Biometric key is invalid",
    }),
  });

  export const RegisterSchema = z.object({
    email: z.string().email({
      message: "Email is required"
    }),
    password: z.string().min(6, {
      message: "Minimum 6 characters required"
    }),
    name: z.string().min(1, {
      message: "Name is required"
    }),
    
  });