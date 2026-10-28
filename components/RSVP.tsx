"use client";

import React, { useState } from "react";
import { CheckCircle2, Loader2 } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { Button } from "./Button";
import { weddingData } from "@/data/wedding";

interface RSVPFormData {
  name: string;
  email: string;
  attending: "yes" | "no" | "";
  guestCount: number;
  dietary: string;
  allergies: string;
  favoriteSong: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  attending?: string;
}

export const RSVP: React.FC = () => {
  const [formData, setFormData] = useState<RSVPFormData>({
    name: "",
    email: "",
    attending: "",
    guestCount: 1,
    dietary: "",
    allergies: "",
    favoriteSong: "",
    message: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [notificationSent, setNotificationSent] = useState(true);
  const [submitError, setSubmitError] = useState("");
  const [submissionId, setSubmissionId] = useState("");
  const [company, setCompany] = useState("");

  const validate = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = weddingData.rsvp.errors.name;
    }

    if (!formData.email.trim()) {
      newErrors.email = weddingData.rsvp.errors.email;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = weddingData.rsvp.errors.email;
    }

    if (!formData.attending) {
      newErrors.attending = weddingData.rsvp.errors.attending;
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const sendRsvp = async (): Promise<boolean> => {
    setIsSubmitting(true);
    setSubmitError("");

    try {
      const currentSubmissionId = submissionId || crypto.randomUUID();
      setSubmissionId(currentSubmissionId);

      const response = await fetch("/api/rsvp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          submissionId: currentSubmissionId,
          company,
        }),
      });

      let result: unknown;
      try {
        result = await response.json();
      } catch {
        result = null;
      }

      if (
        !response.ok ||
        typeof result !== "object" ||
        result === null ||
        !("ok" in result) ||
        result.ok !== true
      ) {
        setSubmitError(weddingData.rsvp.errors.submit);
        return false;
      }

      setNotificationSent(
        "notificationSent" in result && result.notificationSent === true,
      );
      return true;
    } catch {
      setSubmitError(weddingData.rsvp.errors.submit);
      return false;
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validate()) return;
    if (await sendRsvp()) setIsSubmitted(true);
  };

  return (
    <section id="rsvp" className="py-24 md:py-36 px-6 bg-[#F7F2E9]">
      <div className="max-w-3xl mx-auto">
        <SectionHeading
          label={weddingData.rsvp.label}
          title={weddingData.rsvp.heading}
          subtitle={weddingData.rsvp.subtitle}
        />

        {isSubmitted ? (
          /* Confirmation Screen */
          <div className="bg-[#FFFEFC] p-10 sm:p-14 border border-[#E8E0D4] text-center flex flex-col items-center animate-fade-in rounded-sm shadow-sm">
            <div className="w-16 h-16 rounded-full bg-[#FAF8F3] border border-[#C8B79C]/40 text-[#C8B79C] flex items-center justify-center mb-6">
              <CheckCircle2 className="w-8 h-8 stroke-[1.5]" />
            </div>

            <span className="text-xs uppercase tracking-[0.25em] text-[#8F8578] font-medium mb-2">
              {weddingData.rsvp.successLabel}
            </span>

            <h3 className="font-serif text-3xl sm:text-4xl text-[#292724] font-light mb-4">
              {weddingData.rsvp.successThanks}, {formData.name}
            </h3>

            <p className="font-serif italic text-lg sm:text-xl text-[#8F8578] font-light max-w-md mb-8">
              &ldquo;{weddingData.finalMessageText}&rdquo;
            </p>

            {!notificationSent && (
              <div className="max-w-md w-full mb-6">
                <p
                  role="alert"
                  className="text-sm text-red-700 bg-red-50 border border-red-200 p-4"
                >
                  {weddingData.rsvp.notificationWarning}
                </p>
                {submitError && (
                  <p role="alert" className="mt-2 text-sm text-red-700">
                    {submitError}
                  </p>
                )}
                <button
                  type="button"
                  onClick={sendRsvp}
                  disabled={isSubmitting}
                  className="mt-3 text-xs uppercase tracking-widest text-[#8F8578] hover:text-[#292724] underline underline-offset-4 disabled:opacity-50"
                >
                  {isSubmitting
                    ? weddingData.rsvp.submitting
                    : weddingData.rsvp.retryNotification}
                </button>
              </div>
            )}

            <div className="pt-6 border-t border-[#E8E0D4] w-48 flex flex-col items-center">
              <span className="font-serif text-lg tracking-[0.2em] text-[#292724]">
                {weddingData.dateNumbers}
              </span>
              <span className="text-[10px] uppercase tracking-widest text-[#8F8578]">
                {weddingData.locationName}
              </span>
            </div>

            <button
              onClick={() => {
                setIsSubmitted(false);
                setNotificationSent(true);
                setSubmissionId("");
                setSubmitError("");
                setCompany("");
                setFormData({
                  name: "",
                  email: "",
                  attending: "",
                  guestCount: 1,
                  dietary: "",
                  allergies: "",
                  favoriteSong: "",
                  message: "",
                });
              }}
              className="mt-8 text-xs uppercase tracking-widest text-[#8F8578] hover:text-[#292724] underline underline-offset-4 cursor-pointer"
            >
              {weddingData.rsvp.sendAnother}
            </button>
          </div>
        ) : (
          /* RSVP Form */
          <form
            onSubmit={handleSubmit}
            className="bg-[#FFFEFC] p-8 sm:p-12 border border-[#E8E0D4] rounded-sm space-y-8 shadow-xs"
            noValidate
          >
            {/* Nome e Cognome */}
            <div>
              <label
                htmlFor="name"
                className="block text-xs uppercase tracking-[0.2em] font-medium text-[#292724] mb-2"
              >
                {weddingData.rsvp.nameLabel}
              </label>
              <input
                type="text"
                id="name"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                placeholder={weddingData.rsvp.namePlaceholder}
                className={`w-full px-4 py-3.5 bg-[#FAF8F3] border ${
                  errors.name ? "border-red-500" : "border-[#E8E0D4]"
                } text-[#292724] placeholder-[#8F8578]/50 text-sm focus:outline-none focus:border-[#C8B79C] transition-colors`}
              />
              {errors.name && (
                <p className="mt-1.5 text-xs text-red-500 font-light">
                  {errors.name}
                </p>
              )}
            </div>

            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="block text-xs uppercase tracking-[0.2em] font-medium text-[#292724] mb-2"
              >
                {weddingData.rsvp.emailLabel}
              </label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                placeholder={weddingData.rsvp.emailPlaceholder}
                className={`w-full px-4 py-3.5 bg-[#FAF8F3] border ${
                  errors.email ? "border-red-500" : "border-[#E8E0D4]"
                } text-[#292724] placeholder-[#8F8578]/50 text-sm focus:outline-none focus:border-[#C8B79C] transition-colors`}
              />
              {errors.email && (
                <p className="mt-1.5 text-xs text-red-500 font-light">
                  {errors.email}
                </p>
              )}
            </div>

            {/* Parteciperete Radio */}
            <div>
              <span className="block text-xs uppercase tracking-[0.2em] font-medium text-[#292724] mb-3">
                {weddingData.rsvp.attendingLabel}
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <label
                  className={`flex items-center p-4 border cursor-pointer transition-all ${
                    formData.attending === "yes"
                      ? "border-[#C8B79C] bg-[#FAF8F3]"
                      : "border-[#E8E0D4] bg-[#FFFEFC] hover:border-[#C8B79C]/60"
                  }`}
                >
                  <input
                    type="radio"
                    name="attending"
                    value="yes"
                    checked={formData.attending === "yes"}
                    onChange={() =>
                      setFormData({ ...formData, attending: "yes" })
                    }
                    className="w-4 h-4 text-[#C8B79C] accent-[#C8B79C] focus:ring-0"
                  />
                  <span className="ml-3 text-sm text-[#292724] font-medium">
                    {weddingData.rsvp.attendingYes}
                  </span>
                </label>

                <label
                  className={`flex items-center p-4 border cursor-pointer transition-all ${
                    formData.attending === "no"
                      ? "border-[#C8B79C] bg-[#FAF8F3]"
                      : "border-[#E8E0D4] bg-[#FFFEFC] hover:border-[#C8B79C]/60"
                  }`}
                >
                  <input
                    type="radio"
                    name="attending"
                    value="no"
                    checked={formData.attending === "no"}
                    onChange={() =>
                      setFormData({ ...formData, attending: "no" })
                    }
                    className="w-4 h-4 text-[#C8B79C] accent-[#C8B79C] focus:ring-0"
                  />
                  <span className="ml-3 text-sm text-[#292724]">
                    {weddingData.rsvp.attendingNo}
                  </span>
                </label>
              </div>
              {errors.attending && (
                <p className="mt-1.5 text-xs text-red-500 font-light">
                  {errors.attending}
                </p>
              )}
            </div>

            {/* Conditional fields if attending === "yes" */}
            {formData.attending === "yes" && (
              <div className="space-y-6 pt-6 border-t border-[#E8E0D4] animate-fade-in">
                {/* Numero di invitati */}
                <div>
                  <label
                    htmlFor="guestCount"
                    className="block text-xs uppercase tracking-[0.2em] font-medium text-[#292724] mb-2"
                  >
                    {weddingData.rsvp.guestCountLabel}
                  </label>
                  <select
                    id="guestCount"
                    value={formData.guestCount}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        guestCount: parseInt(e.target.value),
                      })
                    }
                    className="w-full px-4 py-3.5 bg-[#FAF8F3] border border-[#E8E0D4] text-[#292724] text-sm focus:outline-none focus:border-[#C8B79C]"
                  >
                    {weddingData.rsvp.guestCountOptions.map((option, i) => (
                      <option key={option} value={i + 1}>
                        {option}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Intolleranze o esigenze alimentari */}
                <div>
                  <label
                    htmlFor="dietary"
                    className="block text-xs uppercase tracking-[0.2em] font-medium text-[#292724] mb-2"
                  >
                    {weddingData.rsvp.dietaryLabel}
                  </label>
                  <textarea
                    id="dietary"
                    rows={2}
                    value={formData.dietary}
                    onChange={(e) =>
                      setFormData({ ...formData, dietary: e.target.value })
                    }
                    placeholder={weddingData.rsvp.dietaryPlaceholder}
                    className="w-full px-4 py-3.5 bg-[#FAF8F3] border border-[#E8E0D4] text-[#292724] placeholder-[#8F8578]/50 text-sm focus:outline-none focus:border-[#C8B79C]"
                  />
                </div>

                {/* Allergie */}
                <div>
                  <label
                    htmlFor="allergies"
                    className="block text-xs uppercase tracking-[0.2em] font-medium text-[#292724] mb-2"
                  >
                    {weddingData.rsvp.allergiesLabel}
                  </label>
                  <textarea
                    id="allergies"
                    rows={2}
                    value={formData.allergies}
                    onChange={(e) =>
                      setFormData({ ...formData, allergies: e.target.value })
                    }
                    placeholder={weddingData.rsvp.allergiesPlaceholder}
                    className="w-full px-4 py-3.5 bg-[#FAF8F3] border border-[#E8E0D4] text-[#292724] placeholder-[#8F8578]/50 text-sm focus:outline-none focus:border-[#C8B79C]"
                  />
                </div>

                {/* Canzone del cuore */}
                <div>
                  <label
                    htmlFor="favoriteSong"
                    className="block text-xs uppercase tracking-[0.2em] font-medium text-[#292724] mb-2"
                  >
                    {weddingData.rsvp.songLabel}
                  </label>
                  <input
                    type="text"
                    id="favoriteSong"
                    value={formData.favoriteSong}
                    onChange={(e) =>
                      setFormData({ ...formData, favoriteSong: e.target.value })
                    }
                    placeholder={weddingData.rsvp.songPlaceholder}
                    className="w-full px-4 py-3.5 bg-[#FAF8F3] border border-[#E8E0D4] text-[#292724] placeholder-[#8F8578]/50 text-sm focus:outline-none focus:border-[#C8B79C]"
                  />
                </div>

                {/* Messaggio per gli sposi */}
                <div>
                  <label
                    htmlFor="message"
                    className="block text-xs uppercase tracking-[0.2em] font-medium text-[#292724] mb-2"
                  >
                    {weddingData.rsvp.messageLabel}
                  </label>
                  <textarea
                    id="message"
                    rows={3}
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    placeholder={weddingData.rsvp.messagePlaceholder}
                    className="w-full px-4 py-3.5 bg-[#FAF8F3] border border-[#E8E0D4] text-[#292724] placeholder-[#8F8578]/50 text-sm focus:outline-none focus:border-[#C8B79C]"
                  />
                </div>
              </div>
            )}

            <div
              aria-hidden="true"
              className="absolute -left-[9999px] h-px w-px overflow-hidden"
            >
              <label htmlFor="company">Company</label>
              <input
                id="company"
                name="company"
                type="text"
                autoComplete="off"
                tabIndex={-1}
                value={company}
                onChange={(e) => setCompany(e.target.value)}
              />
            </div>

            {/* Submit Button */}
            <div className="pt-4">
              {submitError && (
                <p role="alert" className="mb-4 text-sm text-red-700">
                  {submitError}
                </p>
              )}
              <Button
                type="submit"
                variant="primary"
                size="lg"
                className="w-full"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <span className="flex items-center">
                    <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                    {weddingData.rsvp.submitting}
                  </span>
                ) : (
                  weddingData.rsvp.submit
                )}
              </Button>
            </div>
          </form>
        )}
      </div>
    </section>
  );
};
