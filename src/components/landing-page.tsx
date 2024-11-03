"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Heart,
  Mail,
  MapPin,
  Phone,
  Leaf,
  Shield,
  Dog,
  Menu,
  DollarSign,
} from "lucide-react";
import Link from "next/link";

export function LandingPageComponent() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", { email, message });
    setEmail("");
    setMessage("");
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="bg-primary text-primary-foreground py-4 px-4 md:px-8">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold">
            Animal Husbandry NGO
          </Link>
          <nav className="hidden md:flex space-x-6 items-center">
            <Link href="/" className="hover:underline">
              Home
            </Link>
            <Link href="/about" className="hover:underline">
              About Us
            </Link>

            <Button
              variant="secondary"
              className="bg-yellow-400 text-black hover:bg-yellow-500"
            >
              Donate
            </Button>
          </nav>
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu className="w-6 h-6" />
            <span className="sr-only">Toggle menu</span>
          </button>
        </div>
        {isMenuOpen && (
          <nav className="mt-4 flex flex-col space-y-2 md:hidden">
            <Link href="/" className="hover:underline">
              Home
            </Link>
            <Link href="/about" className="hover:underline">
              About Us
            </Link>

            <Button
              variant="secondary"
              className="bg-yellow-400 text-black hover:bg-yellow-500 w-full"
            >
              Donate
            </Button>
          </nav>
        )}
      </header>

      {/* Hero Section */}
      <section className="relative h-[60vh] overflow-hidden">
        <img
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202024-10-27%20at%209.09.46%20AM-lFCOgWdpD29nAY968FB83g1wiyLpoV.jpeg"
          alt="Cows in shelter"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
              Animal Husbandry NGO
            </h1>
            <p className="text-xl text-white mb-8">
              Caring for farm animals with compassion
            </p>
            <Button size="lg">Learn More</Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 px-4 md:px-8 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">Our Mission</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <Leaf className="w-12 h-12 mx-auto mb-4 text-primary" />
            <h3 className="text-xl font-semibold mb-2">Sustainable Care</h3>
            <p>
              Providing eco-friendly shelter and care for farm animals in need.
            </p>
          </div>
          <div className="text-center">
            <Heart className="w-12 h-12 mx-auto mb-4 text-primary" />
            <h3 className="text-xl font-semibold mb-2">Compassion</h3>
            <p>Treating every animal with kindness and respect.</p>
          </div>
          <div className="text-center">
            <Shield className="w-12 h-12 mx-auto mb-4 text-primary" />
            <h3 className="text-xl font-semibold mb-2">Protection</h3>
            <p>
              Rescuing and rehabilitating abused and neglected farm animals.
            </p>
          </div>
        </div>
      </section>

      {/* Donate Section */}
      <section className="py-16 px-4 md:px-8 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Support Our Cause</h2>
          <p className="mb-8 text-lg">
            Your donation helps us provide better care for farm animals and
            promote sustainable practices.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button
              variant="secondary"
              className="bg-yellow-400 text-black hover:bg-yellow-500"
            >
              <DollarSign className="mr-2 h-4 w-4" />
              Donate $10
            </Button>
            <Button
              variant="secondary"
              className="bg-yellow-400 text-black hover:bg-yellow-500"
            >
              <DollarSign className="mr-2 h-4 w-4" />
              Donate $25
            </Button>
            <Button
              variant="secondary"
              className="bg-yellow-400 text-black hover:bg-yellow-500"
            >
              <DollarSign className="mr-2 h-4 w-4" />
              Donate $50
            </Button>
            <Button
              variant="secondary"
              className="bg-yellow-400 text-black hover:bg-yellow-500"
            >
              Custom Amount
            </Button>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16 px-4 md:px-8 bg-muted">
        <h2 className="text-3xl font-bold mb-8 text-center">Our Animals</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <img
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202024-10-27%20at%209.09.47%20AM%20(2)-AYS2s6YwKWHpSViBBoHTMgwxvggpBK.jpeg"
            alt="Brown cow close-up"
            className="w-full h-48 object-cover rounded-lg"
          />
          <img
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202024-10-27%20at%209.09.47%20AM%20(1)-05JGMYoy4a6xPeUHaYJBRIJXvvw95o.jpeg"
            alt="Brown cow side view"
            className="w-full h-48 object-cover rounded-lg"
          />
          <img
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202024-10-27%20at%209.09.49%20AM%20(1)-OkslaZPM32r2ra8EZ2BeXeuukDTaqy.jpeg"
            alt="Cow and dog interaction"
            className="w-full h-48 object-cover rounded-lg"
          />
          <img
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202024-10-27%20at%209.09.48%20AM-L7UnF8kC7C8J7kuVEqyAIVZfmfcEMF.jpeg"
            alt="Black and white dog"
            className="w-full h-48 object-cover rounded-lg"
          />
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16 px-4 md:px-8 max-w-2xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">Contact Us</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <Input
            type="email"
            placeholder="Your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <Textarea
            placeholder="Your message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          />
          <Button type="submit" className="w-full">
            Send Message
          </Button>
        </form>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-8 px-4 md:px-8">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">Animal Husbandry NGO</h3>
            <p>Dedicated to the welfare of farm animals</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Contact</h3>
            <address className="not-italic">
              <p className="flex items-center mb-2">
                <MapPin className="mr-2" /> 123 Farm Road, Countryside
              </p>
              <p className="flex items-center mb-2">
                <Phone className="mr-2" /> (123) 456-7890
              </p>
              <p className="flex items-center">
                <Mail className="mr-2" /> info@animalhusbandry.org
              </p>
            </address>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <Dog className="w-6 h-6" />
              <Heart className="w-6 h-6" />
              <Leaf className="w-6 h-6" />
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
