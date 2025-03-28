import { useState } from "react";
import { FaHandshake, FaSearchLocation, FaHome } from "react-icons/fa";
import Button from '../components/Button';
import Card from '../components/card';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Hero Section */}
      <header className="text-center py-16 bg-blue-600 text-white">
        <h1 className="text-4xl font-bold">Helping the Hidden Homeless</h1>
        <p className="mt-4 text-lg">Find a safe place or offer a helping hand.</p>
        <div className="mt-6 flex justify-center gap-4">
          <Button className="bg-white text-blue-600">Find Shelter</Button>
          <Button className="bg-yellow-400 text-black">Donate a Place</Button>
        </div>
      </header>

      {/* How It Works Section */}
      <section className="py-16 container mx-auto text-center">
        <h2 className="text-2xl font-semibold mb-8">How It Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card>
            <div className="flex flex-col items-center p-6">
              <FaSearchLocation className="text-blue-600 text-4xl" />
              <h3 className="font-bold mt-4">Search for a Place</h3>
              <p className="text-gray-600 text-sm">Browse available spaces from verified donors.</p>
            </div>
          </Card>
          <Card>
            <div className="flex flex-col items-center p-6">
              <FaHandshake className="text-blue-600 text-4xl" />
              <h3 className="font-bold mt-4">Connect Securely</h3>
              <p className="text-gray-600 text-sm">Communicate safely with potential hosts.</p>
            </div>
          </Card>
          <Card>
            <div className="flex flex-col items-center p-6">
              <FaHome className="text-blue-600 text-4xl" />
              <h3 className="font-bold mt-4">Stay Safe</h3>
              <p className="text-gray-600 text-sm">Find a temporary or long-term safe place.</p>
            </div>
          </Card>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-gray-200 text-center">
        <h2 className="text-2xl font-semibold mb-8">What People Say</h2>
        <div className="container mx-auto">
          <p className="italic text-gray-700">"This platform helped me find a safe place when I needed it most. Forever grateful!"</p>
          <p className="mt-4 font-bold">- John D.</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 bg-blue-600 text-white text-center">
        <p>&copy; 2025 Hidden Homeless Project. All rights reserved.</p>
      </footer>
    </div>
  );
}
