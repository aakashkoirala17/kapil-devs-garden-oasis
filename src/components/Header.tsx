
import { Phone, MapPin, Mail } from "lucide-react";

const Header = () => {
  return (
    <header className="bg-green-800 text-white py-4 shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-2 md:mb-0">
            <h1 className="text-2xl md:text-3xl font-bold text-green-100">
              Kapil Dev Nursery
            </h1>
            <p className="text-green-200 text-sm">Your Garden Paradise</p>
          </div>
          <div className="flex flex-col md:flex-row gap-4 text-sm">
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4" />
              <span>9800985015</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              <span>Dhangadi Mai 10, Siraha</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
