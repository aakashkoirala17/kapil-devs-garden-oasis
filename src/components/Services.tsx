
import { Leaf, Scissors, Heart, Truck } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: <Leaf className="w-12 h-12 text-green-600" />,
      title: "Premium Plants",
      description: "Wide variety of indoor and outdoor plants, flowers, and trees"
    },
    {
      icon: <Scissors className="w-12 h-12 text-green-600" />,
      title: "Garden Design",
      description: "Expert landscape design and garden planning services"
    },
    {
      icon: <Heart className="w-12 h-12 text-green-600" />,
      title: "Plant Care",
      description: "Professional plant care tips and maintenance guidance"
    },
    {
      icon: <Truck className="w-12 h-12 text-green-600" />,
      title: "Home Delivery",
      description: "Convenient delivery service to your doorstep"
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-green-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-green-800 mb-4">
            Our Services
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We provide comprehensive nursery services to help you create and maintain your dream garden
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 text-center">
              <div className="flex justify-center mb-4">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold text-green-800 mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
