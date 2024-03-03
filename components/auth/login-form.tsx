"use client";
import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { LoginSchema } from "@/schemas";
import {
  Form,
  FormControl,
  FormLabel,
  FormItem,
  FormMessage,
  FormField,
} from "@/components/ui/form";

import { CardWrapper } from "@/components/auth/card-wrapper";

export const LoginForm = () => {
  const form = useForm<z.infer<typeof LoginSchema>>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });
  return (
    <CardWrapper
      headerLabel="Welcome back"
      backbuttonLabel="Don't have an account?"
      backbuttonHref="auth/register"
      showSocial
    >
      hello
    </CardWrapper>
  );
};
