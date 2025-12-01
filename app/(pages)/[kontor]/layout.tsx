import { Metadata } from "next";
import { notFound } from "next/navigation";

type props = {
  children: React.ReactNode;
  params: Promise<{ kontor: string }>;
};

export async function generateMetadata({
  params,
}: Pick<props, "params">): Promise<Metadata> {
  const { kontor } = await params;
  const kontorTitle = kontor === "alta" ? "Alta" : "Bodø";
  return {
    title: `Din eiendomsmegler i ${kontorTitle}`,
  };
}

export default async function Layout({ children, params }: props) {
  const { kontor } = await params;

  if (kontor !== "alta" && kontor !== "bodo") return notFound();

  return <>{children}</>;
}
