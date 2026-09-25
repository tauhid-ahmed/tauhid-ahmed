"use client";
import { useState } from "react";
import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { Send } from "lucide-react";
import Card3D from "@/components/card-3d";
import { useForm } from "react-hook-form";
import { developer } from "@/data/portfolio-data";

import { Heading } from "@/components/heading";
import { InputField } from "@/components/input-field";
import { Form } from "@/components/ui/form";
import { TextAreaField } from "@/components/text-area";
import { contactSchema } from "@/schema";
import { zodResolver } from "@hookform/resolvers/zod";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const form = useForm({
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
    mode: "all",
    reValidateMode: "onChange",
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = (data: { name: string; email: string; message: string }) => {
    // Generate mailto link as reliable client-side contact action
    const subject = encodeURIComponent(`Portfolio Inquiry from ${data.name}`);
    const body = encodeURIComponent(
      `Hi Tauhid,\n\n${data.message}\n\nFrom: ${data.name} (${data.email})`
    );
    window.open(`mailto:${developer.email}?subject=${subject}&body=${body}`, "_blank");
    setSubmitted(true);
    form.reset();
  };

  return (
    <>
      <Form {...form}>
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="order-1 lg:order-2"
          viewport={{ once: true }}
        >
          <Card3D>
            <div className="space-y-6">
              <Heading as="h3" size="h4" align="left">
                Send Me a Message
              </Heading>

              {submitted && (
                <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-600 dark:text-emerald-400 text-sm">
                  ✨ Thank you! Your email client has been opened with your pre-filled message.
                </div>
              )}

              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-6"
              >
                <InputField label="Name" name="name" placeholder="Your name" />

                <InputField
                  label="Email"
                  name="email"
                  placeholder="Your email"
                />

                <TextAreaField
                  label="Message"
                  name="message"
                  placeholder="Your message"
                />

                <Button type="submit" disabled={!form.formState.isValid}>
                  <Send className="h-5 w-5" />
                  Send Message
                </Button>
              </form>
            </div>
          </Card3D>
        </motion.div>
      </Form>
    </>
  );
}
