import '../globals.css';

import Footer from '@/components/shared/Footer';

export default function MainLayout({ children }) {
    return (
        <main className="flex w-full flex-col">
            {children}
            <Footer />
        </main>
    );
}
