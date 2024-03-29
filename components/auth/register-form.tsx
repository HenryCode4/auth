"use client"

import * as z from "zod"
import { useState, useTransition } from "react"
import React from 'react'
import { CardWrapper } from '../../app/auth/_components/card-wrapper'
import {useForm} from "react-hook-form";
import { zodResolver } from '@hookform/resolvers/zod';
import {  RegisterSchema } from "@/schemas";

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
import { register } from "@/actions/register"
import { useRouter } from "next/navigation"


export const RegisterForm = () => {
  const router = useRouter(); 
  const [error, setError] = useState<string | undefined>("")
  const [success, setSuccess] = useState<string | undefined>("")
  const [isPending, startTransition] = useTransition();

  const form = useForm<z.infer<typeof RegisterSchema>>({
    resolver: zodResolver(RegisterSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
    }
  });

  const onSubmit = (values: z.infer<typeof RegisterSchema>) => {
    setError("");
    setSuccess("");

    startTransition(()=> {
       register(values)
       .then((data) => {
        if(data.error){
          setError(data.error)
        } else {
          // If registration successful, redirect to login page
          setSuccess(data.success);
          router.push('/auth/login'); // Redirect to login page
        }
        
       })
    })
    
    
  }
  return (
    <CardWrapper 
    headerLabel='Create an account'
    backButtonLabel="Already have an account?"
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
              name="name"
              render={({field}) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input 
                    {...field}
                    placeholder="Full name"
                    type="text"
                    disabled={isPending}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
              />
              <FormField 
              control={form.control}
              name="email"
              render={({field}) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input 
                    {...field}
                    placeholder="henry@example.com"
                    type="email"
                    disabled={isPending}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
              />
              
              <FormField 
              control={form.control}
              name="password"
              render={({field}) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input 
                    {...field}
                    placeholder="******"
                    type="password"
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
              Create an account
            </Button>
          </form>

        </Form>
    </CardWrapper>
  )
}

