"use client";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowUpRight } from "lucide-react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { FormPlaceholder } from "./contact-form-placeholder";

const contactSchema = z.object({
  name: z.string().min(3, { message: "no mínimo dever have 3 caráteres" }),
  email: z.string().email({ message: "email invalido" }),
  whatsapp: z.string(),
  mensagem: z
    .string()
    .min(10, { message: "no mínimo dever have 10 caráteres" }),
});

export function ContactForm() {
  const form = useForm({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      whatsapp: "",
      mensagem: "",
    },
  });

  const handleSubmit = form.handleSubmit((data) => {});

  return (
    <Form {...form}>
      <form
        onSubmit={handleSubmit}
        className="row-start-3 lg:col-start-2 lg:row-start-2"
      >
        <FormField
          control={form.control}
          name="name"
          render={({ field, fieldState }) => (
            <FormItem className="relative mb-3">
              <FormControl>
                <Input
                  {...field}
                  className="px-4 py-4 h-max rounded-[10px] resize-none placeholder:text-input"
                />
              </FormControl>
              {field.value.length === 0 && !fieldState.error?.message && (
                <FormPlaceholder placeholder="Name" />
              )}
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="email"
          render={({ field, fieldState }) => (
            <FormItem className="relative mb-3">
              <FormControl>
                <Input
                  {...field}
                  className="px-4 py-4 h-max rounded-[10px] resize-none placeholder:text-input"
                />
              </FormControl>
              {field.value.length === 0 && !fieldState.error?.message && (
                <FormPlaceholder placeholder="E-mail" />
              )}
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="whatsapp"
          render={({ field, fieldState }) => (
            <FormItem className="relative mb-3">
              <FormControl>
                <Input
                  {...field}
                  className="px-4 py-4 h-max rounded-[10px] resize-none placeholder:text-input"
                />
              </FormControl>
              {field.value.length === 0 && !fieldState.error?.message && (
                <FormPlaceholder placeholder="Whatsapp" />
              )}
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="mensagem"
          render={({ field, fieldState }) => (
            <FormItem className="relative">
              <FormLabel />
              <FormControl>
                <Textarea
                  {...field}
                  className="px-4 py-4 h-[136px] rounded-[10px] resize-none placeholder:text-input"
                />
              </FormControl>
              {field.value.length === 0 && !fieldState.error?.message && (
                <FormPlaceholder
                  placeholder="Mensagem"
                  className="top-4 -translate-y-0"
                />
              )}
              <FormMessage />
            </FormItem>
          )}
        />

        <Button
          type="submit"
          variant="primary"
          className="!px-6 py-4 h-max rounded-full w-max mt-3 cursor-pointer"
        >
          <span className="text-sm font-bold">Enviar mensagem</span>
          <ArrowUpRight className="size-5 stroke-icon stroke-2" />
        </Button>
      </form>
    </Form>
  );
}
