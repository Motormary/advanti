"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import Button from "../custom-button";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Checkbox } from "../ui/checkbox";

const contactSchema = z.object({
  name: z.string().min(1, { message: "Navn er påkrevd" }),
  phone: z.string().min(8, { message: "Telefonnummer er påkrevd" }),
  email: z.string().email({ message: "Gyldig e-post er påkrevd" }),
  tos: z.boolean().refine((val) => val === true, {
    message: "Bekreft at du har lest og godkjent vilkårene",
  }),
  body: z.string().min(1, "Skriv kort om hva det gjelder"),
});

export default function ContactForm() {
  const form = useForm<z.infer<typeof contactSchema>>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      phone: "",
      email: "",
      tos: false,
      body: "",
    },
  });

  async function onSubmit(data: z.infer<typeof contactSchema>) {
    console.log(data);
    form.reset();
  }

  return (
    <Form {...form}>
      <form
        id="kontakt"
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-8 rounded-sm max-w-[40rem] scroll-mt-40"
      >
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="sr-only">Fornavn</FormLabel>
              <FormControl>
                <Input className="rounded-sm" placeholder="Navn *" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="phone"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="sr-only">Telefonnummer</FormLabel>
              <FormControl>
                <Input
                  className="rounded-sm"
                  placeholder="Telefonnummer *"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="sr-only">E-post</FormLabel>
              <FormControl>
                <Input
                  className="rounded-sm"
                  placeholder="E-post *"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="body"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="sr-only">Melding</FormLabel>
              <FormControl>
                <Textarea
                  rows={10}
                  className="rounded-sm"
                  placeholder="Melding *"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="tos"
          render={() => (
            <FormItem>
              <div className="flex gap-2">
                <FormControl>
                  <Checkbox
                    onCheckedChange={(e) => form.setValue("tos", !!e)}
                  />
                </FormControl>
                <FormLabel className="gap-1">
                  <span>Jeg har lest og godkjent</span>
                  <a
                    href="https://partners.no/personvern"
                    target="_blank"
                    rel="noreferrer"
                    className="underline"
                  >
                    vilkårene
                  </a>
                </FormLabel>
              </div>
            </FormItem>
          )}
        />
        <Button
          className="bg-primary w-full md:w-fit text-primary-white"
          type="submit"
        >
          Send inn skjema
        </Button>
      </form>
    </Form>
  );
}
