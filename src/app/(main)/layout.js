import '../globals.css';

export default function MainLayout({ children }) {
    return <main className="flex w-full flex-col">{children}</main>;
}
