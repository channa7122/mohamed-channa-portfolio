import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mohamed Channa — Data & AI Engineer | ENSA Tétouan",
  description:
    "Portfolio of Mohamed Channa, a Data Engineering & AI student at ENSA Tétouan seeking a PFE internship in Data Engineering, AI/MLOps, or Big Data. Expert in RAG systems, data pipelines, LangChain, and computer vision.",
  keywords: [
    "Mohamed Channa",
    "Data Engineer",
    "AI Engineer",
    "ENSA Tétouan",
    "PFE internship",
    "RAG",
    "LangChain",
    "Snowflake",
    "dbt",
    "Databricks",
    "MLOps",
  ],
  authors: [{ name: "Mohamed Channa" }],
  openGraph: {
    title: "Mohamed Channa — Data & AI Engineer",
    description:
      "End-to-end data systems: from large-scale pipelines to enterprise RAG agents and computer vision.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=JetBrains+Mono:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
