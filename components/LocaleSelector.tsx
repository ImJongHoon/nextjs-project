"use client";

import { setLocale } from "@/app/actions/locale";
import { useRouter } from "next/navigation";
import { useTransition } from "react";

const locales = [
  { code: "kr", label: "한국어", flag: "🇰🇷" },
  { code: "en", label: "English", flag: "🇺🇸" },
];

export default function LocaleSelector() {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  const handleSelect = (locale: string) => {
    startTransition(async () => {
      await setLocale(locale);
      router.refresh();
    });
  };

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="bg-neutral-800 rounded-xl p-6 w-full max-w-sm mx-4 shadow-2xl">
        <h2 className="text-xl font-semibold text-center mb-2">
          Select Language
        </h2>
        <p className="text-neutral-400 text-sm text-center mb-6">
          언어를 선택해주세요
        </p>
        <div className="flex flex-col gap-3">
          {locales.map((locale) => (
            <button
              key={locale.code}
              onClick={() => handleSelect(locale.code)}
              disabled={isPending}
              className="flex items-center gap-3 w-full p-4 rounded-lg bg-neutral-700 hover:bg-neutral-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <span className="text-2xl">{locale.flag}</span>
              <span className="font-medium">{locale.label}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
