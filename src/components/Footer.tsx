// src/components/Footer.tsx

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white py-4">
            <div className="container mx-auto text-center">
                <p className="text-sm">
                    &copy; {new Date().getFullYear()} My Course App. All rights reserved.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
