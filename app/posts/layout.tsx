import { Newsletter } from "@/components/newsletter";
import { Sidebar } from "@/components/shared";

export default function PostsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <section className="grid grid-cols-12 gap-5">
      <div className="lg:col-span-3 lg:order-1 mobileS:order-2 mobileS:col-span-12">
        <Sidebar />
      </div>
      <div className="lg:col-span-9 lg:order-2 mobileS:order-1 mobileS:col-span-12 space-y-5">
        {children}
        <Newsletter />
      </div>
    </section>
  );
}
