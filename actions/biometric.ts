"use server"

import * as z from "zod";

import { BiometricSchema } from "@/schemas";
import { signIn } from "@/auth";
import { DEFAULT_LOGIN_REDIRECT } from "@/routes";
import { AuthError } from "next-auth";

export const biometric = async (values: z.infer<typeof BiometricSchema>) => {
    const validatedFields = BiometricSchema.safeParse(values);

    if(!validatedFields.success){
        return {error: "Invalid fields!"};
    }

    const {biometricKey} = validatedFields.data;
    
    try {
        await signIn("credentials", {
            biometricKey,
            redirectTo: DEFAULT_LOGIN_REDIRECT
        })
    } catch (error) {
        if(error instanceof AuthError){
            switch(error.type){
                case"CredentialsSignin":
                return {error: "Invalid biometric!"}
                default: 
                return {error: "Something went wrong!"}
            }
        }
        throw error;
    }
    
};