"use client";

import { FormEvent, useState } from "react";

type FormValues = {
  name: string;
  email: string;
  service: string;
  brief: string;
};

type FormErrors = Partial<Record<keyof FormValues, string>>;

const WHATSAPP_NUMBER = "201029101204";

const initialValues: FormValues = {
  name: "",
  email: "",
  service: "",
  brief: "",
};

export default function ContactForm() {
  const [values, setValues] = useState<FormValues>(initialValues);
  const [errors, setErrors] = useState<FormErrors>({});

  function updateValue(field: keyof FormValues, value: string) {
    setValues((prev) => ({ ...prev, [field]: value }));
    setErrors((prev) => ({ ...prev, [field]: undefined }));
  }

  function validate(): FormErrors {
    const nextErrors: FormErrors = {};

    if (!values.name.trim()) nextErrors.name = "Please enter your name.";
    if (!values.email.trim()) nextErrors.email = "Please enter your email.";
    if (!values.service.trim()) nextErrors.service = "Please select a service.";
    if (!values.brief.trim()) nextErrors.brief = "Please enter a short project brief.";

    return nextErrors;
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    const message = [
      "New NYX Studio Inquiry",
      "",
      `Name: ${values.name.trim()}`,
      `Email: ${values.email.trim()}`,
      `Service: ${values.service.trim()}`,
      `Project Brief: ${values.brief.trim()}`,
    ].join("\n");

    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank", "noopener,noreferrer");
  }

  return (
    <form className="reveal-up reveal-delay-2 rounded-3xl border border-white/15 bg-white/[0.04] p-6 sm:p-8" onSubmit={handleSubmit} noValidate>
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="space-y-2 text-sm">
          <span className="text-[#e6e9f7]">Name</span>
          <input
            name="name"
            type="text"
            value={values.name}
            onChange={(event) => updateValue("name", event.target.value)}
            className="w-full rounded-xl border border-white/15 bg-black/30 px-4 py-3 text-white placeholder:text-[#9ca3af] focus:border-[#6a80ff] focus:outline-none"
            placeholder="Your name"
          />
          {errors.name ? <p className="text-xs text-[#ffb7c5]">{errors.name}</p> : null}
        </label>
        <label className="space-y-2 text-sm">
          <span className="text-[#e6e9f7]">Email</span>
          <input
            name="email"
            type="email"
            value={values.email}
            onChange={(event) => updateValue("email", event.target.value)}
            className="w-full rounded-xl border border-white/15 bg-black/30 px-4 py-3 text-white placeholder:text-[#9ca3af] focus:border-[#6a80ff] focus:outline-none"
            placeholder="you@brand.com"
          />
          {errors.email ? <p className="text-xs text-[#ffb7c5]">{errors.email}</p> : null}
        </label>
      </div>

      <label className="mt-4 block space-y-2 text-sm">
        <span className="text-[#e6e9f7]">Service</span>
        <select
          name="service"
          value={values.service}
          onChange={(event) => updateValue("service", event.target.value)}
          className="w-full rounded-xl border border-white/15 bg-black/30 px-4 py-3 text-white focus:border-[#6a80ff] focus:outline-none"
        >
          <option value="" disabled>
            Select a focus area
          </option>
          <option>Media Buying</option>
          <option>AI Creative Direction</option>
          <option>Web Development</option>
          <option>AI Automation</option>
          <option>Brand Growth & Strategy</option>
        </select>
        {errors.service ? <p className="text-xs text-[#ffb7c5]">{errors.service}</p> : null}
      </label>

      <label className="mt-4 block space-y-2 text-sm">
        <span className="text-[#e6e9f7]">Project brief</span>
        <textarea
          name="brief"
          rows={5}
          value={values.brief}
          onChange={(event) => updateValue("brief", event.target.value)}
          className="w-full rounded-xl border border-white/15 bg-black/30 px-4 py-3 text-white placeholder:text-[#9ca3af] focus:border-[#6a80ff] focus:outline-none"
          placeholder="Tell us about goals, channels, and timeline."
        />
        {errors.brief ? <p className="text-xs text-[#ffb7c5]">{errors.brief}</p> : null}
      </label>

      <button
        type="submit"
        className="btn-sheen mt-6 rounded-full bg-[#2445ff] px-7 py-3 text-sm font-semibold uppercase tracking-[0.14em] text-white transition-all hover:bg-[#1832d1] hover:shadow-[0_0_30px_rgba(33,67,255,0.45)]"
      >
        Send inquiry
      </button>
    </form>
  );
}
