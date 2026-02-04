import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Contact } from '@/components/sections/Contact';

const ContactPage = () => {
    return (
        <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-grow pt-24">
                <Contact />
            </main>
            <Footer />
        </div>
    );
};

export default ContactPage;
