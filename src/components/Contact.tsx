
import { Phone, MapPin, Mail, Clock } from "lucide-react";

const Contact = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-green-800 to-green-900 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Contact Us
          </h2>
          <p className="text-lg text-green-100 max-w-2xl mx-auto">
            Get in touch with us for all your gardening needs
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-semibold mb-6 text-green-100">
              Get In Touch
            </h3>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <MapPin className="w-6 h-6 text-green-300 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-green-100">Address</h4>
                  <p className="text-green-200">Dhangadi Mai 10, Siraha, Nepal</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <Phone className="w-6 h-6 text-green-300 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-green-100">Phone</h4>
                  <p className="text-green-200">9800985015</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <Mail className="w-6 h-6 text-green-300 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-green-100">Email</h4>
                  <p className="text-green-200">info@kapildevnursery.com</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <Clock className="w-6 h-6 text-green-300 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-green-100">Opening Hours</h4>
                  <p className="text-green-200">
                    Monday - Friday: 6:00 AM - 6:00 PM<br />
                    Saturday - Sunday: 7:00 AM - 5:00 PM
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
            <h3 className="text-2xl font-semibold mb-6 text-green-100">
              Send Message
            </h3>
            <form className="space-y-4">
              <div>
                <label className="block text-green-100 mb-2">Name</label>
                <input 
                  type="text" 
                  className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-green-200 focus:outline-none focus:border-green-300"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block text-green-100 mb-2">Phone</label>
                <input 
                  type="tel" 
                  className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-green-200 focus:outline-none focus:border-green-300"
                  placeholder="Your phone number"
                />
              </div>
              <div>
                <label className="block text-green-100 mb-2">Message</label>
                <textarea 
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-green-200 focus:outline-none focus:border-green-300 resize-none"
                  placeholder="How can we help you?"
                ></textarea>
              </div>
              <button 
                type="submit"
                className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg font-semibold transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
