import ButtonGroup from "@/components/Home/ButtonGroup";
import LottiePlayer from "@/components/lottie/LottiePlayer";
import animationData from "@/assets/animation.json";
import Card from "@/components/Home/Card";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-linear-to-br from-indigo-50 via-purple-50 to-white overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-200/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-200/20 rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 md:px-8 py-20 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            
            {/* Left Content */}
            <div className="flex flex-col gap-8 z-10">
              <div className="flex flex-col gap-6">
                <div className="inline-block w-fit">
                  <span className="px-4 py-2 rounded-full bg-indigo-100 text-indigo-700 text-sm font-semibold">✨ Welcome to Premium Shopping</span>
                </div>
                
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-linear-to-r from-indigo-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent leading-tight">
                  Timeless Elegance, Woven In Tradition
                </h1>
                
                <p className="text-lg text-gray-600 leading-relaxed">
                  Discover the perfect blend of classic design and modern functionality. Shop our curated collection of premium products designed for your lifestyle.
                </p>
              </div>
              
              <div>
                <ButtonGroup/>
              </div>
              
              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 pt-8 border-t border-gray-200">
                <div className="flex flex-col">
                  <span className="text-2xl md:text-3xl font-bold text-indigo-600">10k+</span>
                  <span className="text-sm text-gray-600">Happy Customers</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-2xl md:text-3xl font-bold text-purple-600">500+</span>
                  <span className="text-sm text-gray-600">Products</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-2xl md:text-3xl font-bold text-indigo-600">24/7</span>
                  <span className="text-sm text-gray-600">Support</span>
                </div>
              </div>
            </div>
            
            {/* Right Animation */}
            <div className="hidden lg:flex justify-center items-center">
              <div className="relative w-full h-full min-h-96">
                <div className="absolute inset-0 bg-linear-to-r from-indigo-200/20 to-purple-200/20 rounded-3xl blur-2xl"></div>
                <LottiePlayer animationData={animationData}/>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-white py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="flex flex-col items-center text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">Why Choose DigiCommerce?</h2>
            <p className="text-lg text-gray-600 max-w-2xl">Experience shopping like never before with our exceptional service and premium products</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card type="Handshake" title="Trustworthy" />
            <Card type="Trophy" title="Premium Quality" />
            <Card type="Truck" title="Fast Delivery" />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-linear-to-r from-indigo-600 via-purple-600 to-indigo-700 py-20 lg:py-32">
        <div className="max-w-4xl mx-auto px-4 md:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Ready to Explore?</h2>
          <p className="text-xl text-indigo-100 mb-10">Browse through our exclusive collection of premium products</p>
          <button className="px-10 py-4 bg-white text-indigo-600 font-bold rounded-xl shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 cursor-pointer">
            Start Shopping Now
          </button>
        </div>
      </section>
    </>
  );
}
