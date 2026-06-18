"use client";

import Script from "next/script";
import { useEffect, useState } from "react";

type Consent = "accepted" | "declined" | null;

export function GoogleAnalytics({ measurementId }: { measurementId?: string }) {
  const [consent, setConsent] = useState<Consent>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const saved = window.localStorage.getItem("cobo-analytics-consent") as Consent;
    setConsent(saved === "accepted" || saved === "declined" ? saved : null);
    setReady(true);
  }, []);

  if (!measurementId) return null;

  function choose(value: Exclude<Consent, null>) {
    window.localStorage.setItem("cobo-analytics-consent", value);
    setConsent(value);
  }

  return (
    <>
      {consent === "accepted" && (
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${measurementId}`}
            strategy="afterInteractive"
          />
          <Script id="google-analytics" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${measurementId}', { anonymize_ip: true });
            `}
          </Script>
        </>
      )}

      {ready && consent === null && (
        <aside className="fixed inset-x-4 bottom-4 z-[60] mx-auto max-w-3xl border border-white/10 bg-ink p-5 text-white shadow-2xl sm:flex sm:items-center sm:gap-6 sm:p-6" aria-label="Preferências de privacidade">
          <p className="text-xs leading-6 text-white/65">Usamos cookies analíticos opcionais para entender visitas e melhorar o site. Você pode aceitar ou continuar sem medição.</p>
          <div className="mt-4 flex shrink-0 gap-3 sm:mt-0">
            <button type="button" onClick={() => choose("declined")} className="px-4 py-3 text-[0.65rem] font-bold uppercase tracking-[0.14em] text-white/60 transition hover:text-white">Recusar</button>
            <button type="button" onClick={() => choose("accepted")} className="bg-gold-400 px-5 py-3 text-[0.65rem] font-bold uppercase tracking-[0.14em] text-ink transition hover:bg-gold-300">Aceitar</button>
          </div>
        </aside>
      )}
    </>
  );
}
