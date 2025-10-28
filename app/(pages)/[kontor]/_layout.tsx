import { notFound } from "next/navigation";

type props = {
  children: React.ReactNode;
  params: Promise<{ kontor: string }>;
};

export default async function Layout({ children, params }: props) {
  const { kontor } = await params;

  if (kontor !== "alta" && kontor !== "bodo") return notFound();

  return <>{children}</>;
}
