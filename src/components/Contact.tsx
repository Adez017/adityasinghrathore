import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Send } from "lucide-react";
import { toast } from "sonner";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const MAX_RETRIES = 3;
    const RETRY_DELAY_MS = 2000;

    const sendEmail = () =>
      emailjs.send(
        "service_kgor9tm",
        "template_4mekvvo",
        {
          from_name: formData.name,
          from_email: formData.email,
          reply_to: formData.email,
          message: `From: ${formData.email}\n\nMessage:\n${formData.message}`,
          to_name: "Aditya Singh Rathore",
        },
        "c_0oKF7Yve2cdV1fz"
      );

    let attempt = 0;
    let lastError: unknown;

    while (attempt < MAX_RETRIES) {
      try {
        await sendEmail();
        toast.success("Message sent! I'll get back to you soon.");
        setFormData({ name: "", email: "", message: "" });
        setIsSubmitting(false);
        return;
      } catch (error) {
        lastError = error;
        attempt++;
        if (attempt < MAX_RETRIES) {
          toast.info(`Sending failed. Retrying… (attempt ${attempt + 1} of ${MAX_RETRIES})`);
          await new Promise((resolve) => setTimeout(resolve, RETRY_DELAY_MS));
        }
      }
    }

    console.error("Failed to send email after retries:", lastError);
    toast.error("Failed to send message after multiple attempts. Please try again later.");
    setIsSubmitting(false);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => setFormData({ ...formData, [e.target.name]: e.target.value });

  return (
    <section id="contact" className="section-padding">
      <h2 className="pb-4 text-3xl font-bold">Contact</h2>

      <form onSubmit={handleSubmit} className="space-y-5 max-w-xl">
        <div>
          <label htmlFor="name" className="mb-1.5 block text-sm font-medium">
            Name
          </label>
          <Input
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your name"
            required
          />
        </div>

        <div>
          <label htmlFor="email" className="mb-1.5 block text-sm font-medium">
            Email
          </label>
          <Input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="your.email@example.com"
            required
          />
        </div>

        <div>
          <label htmlFor="message" className="mb-1.5 block text-sm font-medium">
            Message
          </label>
          <Textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Tell me about your project..."
            rows={5}
            required
          />
        </div>

        <Button type="submit" disabled={isSubmitting} className="group">
          {isSubmitting ? "Sending…" : "Send Message"}
          <Send className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
        </Button>
      </form>
    </section>
  );
};

export default Contact;
