const Footer = () => {
    return (
        <footer className="bg-gradient-to-r from-blue-900 to-indigo-600 text-white py-6 mt-10">
            <div className="container mx-auto text-center">
                <p className="text-sm">© 2023 Your Company. All rights reserved.</p>
                <div className="flex justify-center space-x-4 mt-4">
                    <a href="#" className="text-slate-200 hover:text-white">Privacy Policy</a>
                    <a href="#" className="text-slate-200 hover:text-white">Terms of Service</a>
                    <a href="#" className="text-slate-200 hover:text-white">Contact Us</a>
                </div>
            </div>
        </footer>
    );
}
export default Footer;