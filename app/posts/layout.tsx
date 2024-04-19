import { Newsletter } from '@/components/newsletter';
import { Sidebar } from '@/components/shared';

export default function PostsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <section className='grid grid-cols-12 gap-5'>
      <div className='mobileS:order-2 mobileS:col-span-12 lg:order-1 lg:col-span-3'>
        <Sidebar />
      </div>
      <div className='space-y-5 mobileS:order-1 mobileS:col-span-12 lg:order-2 lg:col-span-9'>
        {children}
        <Newsletter />
      </div>
    </section>
  );
}
