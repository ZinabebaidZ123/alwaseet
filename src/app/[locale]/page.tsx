
import { useTranslations } from "next-intl";
import { useTransition } from "react";
export default function Home() {
  const t = useTranslations('Index')
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">

      <h1 className="text-center bg-indigo-800 text-white font-extrabold p-10 rounded-md">{t('title')}</h1>
     
    </main>
  );
}

