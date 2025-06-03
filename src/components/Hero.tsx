
const Hero = () => {
  return (
    <section 
      className="relative min-h-screen bg-cover bg-center bg-no-repeat flex items-center"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')`
      }}
    >
      <div className="container mx-auto px-4 text-center text-white">
        <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
          Welcome to <br />
          <span className="text-green-300">Kapil Dev Nursery</span>
        </h2>
        <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed">
          Bringing nature's beauty to your doorstep with premium plants, 
          expert care, and personalized gardening solutions
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg text-lg font-semibold transition-colors">
            Explore Plants
          </button>
          <button className="border-2 border-white text-white hover:bg-white hover:text-green-800 px-8 py-3 rounded-lg text-lg font-semibold transition-colors">
            Contact Us
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
