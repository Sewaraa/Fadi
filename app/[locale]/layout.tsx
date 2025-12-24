export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  params: any;
}) {
  const { locale } = await params;
  const isRTL = locale === "ar";

  return (
    <div lang={locale} dir={isRTL ? "rtl" : "ltr"} className="antialiased bg-black text-white">
      {children}
    </div>
  );
}
