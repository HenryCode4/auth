"use client"

import * as z from "zod"
import { useState, useTransition } from "react"
import React from 'react'
import { CardWrapper } from '../../app/auth/_components/card-wrapper'
import {useForm} from "react-hook-form";
import { zodResolver } from '@hookform/resolvers/zod';
import { BiometricSchema } from "@/schemas";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { FormError } from "../form-error";
import { FormSuccess } from "../form-success";
import { login } from "@/actions/login";
import { biometric } from "@/actions/biometric"


export const BiometricForm = () => {
  const [error, setError] = useState<string | undefined>("")
  const [success, setSuccess] = useState<string | undefined>("")
  const [isPending, startTransition] = useTransition();

  const form = useForm<z.infer<typeof BiometricSchema>>({
    resolver: zodResolver(BiometricSchema),
    defaultValues: {
      biometricKey: "",
    }
  });

  const onSubmit = (values: z.infer<typeof BiometricSchema>) => {
    setError("");
    setSuccess("");

    startTransition(()=> {
       biometric(values)
       .then((data) => {
        setError(data?.error);
       })
    })
    
    
  }
  return (
    <CardWrapper 
    headerLabel='Welcome back'
    backButtonLabel="Back to login page"
    backButtonHref='/auth/login'
    showSocial
    >
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-6"
          >
            <div className="space-y-4">
              <FormField 
              control={form.control}
              name="biometricKey"
              render={({field}) => (
                <FormItem>
                  <FormLabel>Biometric</FormLabel>
                  <FormControl>
                    <Input 
                    {...field}
                    placeholder="biometric data"
                    type="text"
                    disabled={isPending}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
              />
              
            </div>
            <FormError message={error} />
            <FormSuccess message={success} />
            <Button
            type="submit"
            className="w-full"
            disabled={isPending}
            >
              Submit
            </Button>
          </form>

        </Form>
    </CardWrapper>
  )
}

