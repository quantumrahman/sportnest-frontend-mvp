import '../globals.css';
import { Toaster } from 'react-hot-toast';

export default function AuthLayout({ children }) {
    return (
        <main className="min-h-screen w-full">
            {children}
            <Toaster />
        </main>
    );
}
