
import { Phone, MapPin, Mail, Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-green-900 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4 text-green-100">
              Kapil Dev Nursery
            </h3>
            <p className="text-green-200 mb-4 leading-relaxed">
              Your trusted partner for creating beautiful gardens and green spaces. 
              We provide quality plants and expert gardening services.
            </p>
            <div className="flex gap-4">
              <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center">
                <Heart className="w-4 h-4" />
              </div>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4 text-green-100">Quick Links</h4>
            <ul className="space-y-2 text-green-200">
              <li><a href="#" className="hover:text-white transition-colors">Home</a></li>
              <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Services</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Gallery</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4 text-green-100">Contact Info</h4>
            <div className="space-y-3 text-green-200">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 flex-shrink-0" />
                <span className="text-sm">Dhangadi Mai 10, Siraha, Nepal</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 flex-shrink-0" />
                <span className="text-sm">9800985015</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 flex-shrink-0" />
                <span className="text-sm">info@kapildevnursery.com</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-green-700 pt-6 text-center">
          <p className="text-green-200">
            © 2024 Kapil Dev Nursery. All rights reserved. Made with{" "}
            <Heart className="w-4 h-4 inline text-red-400" /> for nature lovers.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
