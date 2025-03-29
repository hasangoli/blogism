"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "../ui/form";

const formSchema = z.object({
  email: z
    .string()
    .min(1, { message: "وارد کردن ایمیل الزامی است" })
    .email({ message: "آدرس ایمیل اشتباه است" }),
});

export const NewsLetter = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  return (
    <section className="container md:grid md:grid-cols-2 md:gap-x-8 border-b-[1px] border-border py-12 lg:items-center">
      <div className="flex flex-col items-center text-center md:text-start md:items-start mb-4 md:mb-0">
        <p className="text-2xl font-bold mb-4">عضو خبرنامه شوید</p>
        <p className="md:text-sm">
          برای دریافت آخرین مقالات، آدرس ایمیل خود را وارد کنید
        </p>
      </div>
      <Form {...form}>
        <form
          className="grid grid-cols-1 lg:grid-cols-4 gap-3 lg:items-start"
          onSubmit={form.handleSubmit(onSubmit)}
        >
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem className="lg:col-span-3">
                <FormControl>
                  <Input
                    className="text-left"
                    type="email"
                    placeholder="name@domain.com"
                    autoComplete="off"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" className="w-full">
            عضویت
          </Button>
        </form>
      </Form>
    </section>
  );
};
