"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Heart,
  Mail,
  MapPin,
  Phone,
  Leaf,
  Shield,
  Dog,
  Menu,
  Users,
  Award,
  Calendar,
} from "lucide-react";
import Link from "next/link";

export function About() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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

      <main className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-center mb-8">About Us</h1>

        {/* Mission Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-8 text-center">Our Mission</h2>
          <p className="text-lg mb-8 text-center">
            At Animal Husbandry NGO, we are dedicated to improving the lives of
            farm animals through compassionate care, sustainable practices, and
            education. Our mission is to create a world where farm animals are
            treated with respect and kindness, and where sustainable farming
            practices benefit both animals and the environment.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <Leaf className="w-12 h-12 mx-auto mb-4 text-primary" />
              <h3 className="text-xl font-semibold mb-2">Sustainable Care</h3>
              <p>
                Providing eco-friendly shelter and care for farm animals in
                need.
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

        {/* History Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-8 text-center">Our History</h2>
          <div className="bg-muted p-6 rounded-lg">
            <p className="mb-4">
              Founded in 2010 by a group of passionate animal lovers and
              sustainable farming advocates, Animal Husbandry NGO has grown from
              a small local initiative to a nationally recognized organization.
            </p>
            <p>
              Over the years, we've rescued hundreds of animals, partnered with
              dozens of farms to implement humane practices, and educated
              thousands on the importance of ethical animal husbandry.
            </p>
          </div>
        </section>

        {/* Team Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-8 text-center">Our Team</h2>
          <div className="bg-muted p-6 rounded-lg">
            <p className="mb-4">
              Our dedicated team consists of veterinarians, animal welfare
              experts, sustainable farming specialists, and passionate
              volunteers. Together, we work tirelessly to make a difference in
              the lives of farm animals.
            </p>
            <div className="flex items-center justify-center">
              <Users className="w-16 h-16 text-primary" />
              <span className="ml-4 text-xl font-semibold">
                50+ Team Members
              </span>
            </div>
          </div>
        </section>

        {/* Achievements Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-8 text-center">
            Our Achievements
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-muted p-4 rounded-lg flex flex-col items-center text-center">
              <Award className="w-12 h-12 text-primary mb-2" />
              <h3 className="font-semibold mb-2">Best NGO Award 2022</h3>
              <p>
                Recognized for our outstanding contribution to animal welfare
              </p>
            </div>
            <div className="bg-muted p-4 rounded-lg flex flex-col items-center text-center">
              <Calendar className="w-12 h-12 text-primary mb-2" />
              <h3 className="font-semibold mb-2">10 Years of Service</h3>
              <p>A decade of dedication to improving farm animal lives</p>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center">
          <h2 className="text-3xl font-bold mb-4">Join Our Cause</h2>
          <p className="mb-6">
            Help us continue our mission to improve the lives of farm animals.
            Your support makes a difference!
          </p>
          <Button size="lg">Get Involved</Button>
        </section>
      </main>

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
