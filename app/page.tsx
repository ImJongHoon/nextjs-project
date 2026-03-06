import Link from "next/link";
import { useTranslations } from "next-intl";

export default function Home() {
  const t = useTranslations("Home");

  return (
    <div className="flex flex-col items-center justify-between min-h-screen p-6">
      <div className="my-auto flex flex-col items-center gap-2 *:font-medium">
        <h1 className="text-4xl">{t("title")}</h1>
        <h2 className="text-2xl bg-clip-text text-transparent bg-linear-to-tl from-cyan-500 to-white">
          {t("subtitle")}
        </h2>
      </div>
      <div className="flex flex-col items-center gap-3 w-full">
        <Link
          href="/create-account"
          className="w-full bg-cyan-500 text-neutral-900 text-lg font-medium py-2.5 rounded-md text-center hover:bg-cyan-400 transition-colors"
        >
          {t("start")}
        </Link>
        <div className="flex gap-2">
          <span>{t("hasAccount")}</span>
          <Link href="/login" className="hover:underline">
            {t("login")}
          </Link>
        </div>
      </div>
    </div>
  );
}
