import { Newsletter } from "@/components/newsletter";
import { Sidebar } from "@/components/shared";

export default function PostsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <section className="grid grid-cols-12 gap-5">
      <div className="col-span-3">
        <Sidebar />
      </div>
      <div className="col-span-9 space-y-5">
        {children}
        <Newsletter />
      </div>
    </section>
  );
}
