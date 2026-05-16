"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactCenter from '@/components/sections/contact/ContactCenter';
import FeatureBento from '@/components/sections/feature/FeatureBento';
import FooterBaseReveal from '@/components/sections/footer/FooterBaseReveal';
import HeroSplitKpi from '@/components/sections/hero/HeroSplitKpi';
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import ProductCardOne from '@/components/sections/product/ProductCardOne';
import SocialProofOne from '@/components/sections/socialProof/SocialProofOne';
import SplitAbout from '@/components/sections/about/SplitAbout';
import TestimonialCardFifteen from '@/components/sections/testimonial/TestimonialCardFifteen';
import { Flame, Pizza, Wine } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="bounce-effect"
        defaultTextAnimation="reveal-blur"
        borderRadius="soft"
        contentWidth="small"
        sizing="mediumLargeSizeLargeTitles"
        background="floatingGradient"
        cardStyle="gradient-mesh"
        primaryButtonStyle="shadow"
        secondaryButtonStyle="radial-glow"
        headingFontWeight="extrabold"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarLayoutFloatingOverlay
      navItems={[
        {
          name: "Home",          id: "#hero"},
        {
          name: "Dining",          id: "#dining"},
        {
          name: "Stay",          id: "#stay"},
        {
          name: "Contact",          id: "#contact"},
      ]}
      brandName="Three Furlongs"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroSplitKpi
      background={{
        variant: "gradient-bars"}}
      title="Three Furlongs: Kaiwaka’s Favourite Destination"
      description="Experience authentic New Zealand hospitality. Join us for a great meal, a comfortable stay, or a refreshing stopover at our legendary Bar, Grill & Hotel."
      kpis={[
        {
          value: "4.5",          label: "Google Rating"},
        {
          value: "20+",          label: "Years Local"},
        {
          value: "Daily",          label: "Open for All"},
      ]}
      enableKpiAnimation={true}
      buttons={[
        {
          text: "Call Now",          href: "tel:094312246"},
        {
          text: "Book Accommodation",          href: "#stay"},
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/close-up-hands-preparing-barbecue_23-2148965334.jpg"
      mediaAnimation="slide-up"
      avatars={[
        {
          src: "http://img.b2bpic.net/free-photo/multiethnic-volunteers-cooking-needy_482257-84793.jpg",          alt: "Happy diner"},
        {
          src: "http://img.b2bpic.net/free-photo/crop-cut-tomatoes-grated-cheese_132075-8848.jpg",          alt: "Satisfied traveler"},
        {
          src: "http://img.b2bpic.net/free-photo/beautiful-african-american-couple-love-having-great-time-together-their-dating-attractive-couple-enjoying-each-other-young-woman-feeding-her-man-restaurant_613910-5616.jpg",          alt: "Couple enjoying dinner"},
        {
          src: "http://img.b2bpic.net/free-photo/female-hand-holding-uncooked-chicken-grilling_23-2147840865.jpg",          alt: "Friendly local"},
        {
          src: "http://img.b2bpic.net/free-photo/stylish-smiling-woman-colorful-outfit-retro-vintage-50-s-cafe-dancing-wearing-jacket-blue-skirt-red-shirt-sunglasses-having-fun-cheerful-mood_285396-10388.jpg",          alt: "Happy hotel guest"},
      ]}
      marqueeItems={[
        {
          type: "text",          text: "Fresh Local Produce"},
        {
          type: "text",          text: "Family Friendly"},
        {
          type: "text",          text: "Open 7 Days"},
        {
          type: "text",          text: "Free WiFi"},
        {
          type: "text",          text: "Ample Parking"},
      ]}
    />
  </div>

  <div id="about" data-section="about">
      <SplitAbout
      textboxLayout="split"
      useInvertedBackground={false}
      title="A Legacy of Local Hospitality"
      description="Located in the heart of Kaiwaka, Three Furlongs serves as a vibrant community hub. Whether you are traveling through Northland or a local friend, we pride ourselves on a warm welcome and professional service."
      bulletPoints={[
        {
          title: "Prime Location",          description: "Conveniently located on SH1, the perfect stopover between Auckland and Northland."},
        {
          title: "Versatile Dining",          description: "Casual restaurant and bar with a wide selection of grill classics, pizzas, and drinks."},
        {
          title: "Comfortable Stay",          description: "Relax in our well-appointed hotel rooms after a long day of driving."},
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/stones-natural-room-interior-design_23-2151890375.jpg"
      mediaAnimation="blur-reveal"
    />
  </div>

  <div id="dining" data-section="dining">
      <FeatureBento
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={true}
      features={[
        {
          title: "Signature Grill",          description: "Steaks, burgers, and classic Kiwi grills cooked to perfection.",          bentoComponent: "reveal-icon",          icon: Flame,
        },
        {
          title: "Stone-Baked Pizzas",          description: "Crispy, delicious pizzas suitable for the whole family.",          bentoComponent: "reveal-icon",          icon: Pizza,
        },
        {
          title: "Bar & Refreshments",          description: "A great selection of wines, beers, and non-alcoholic drinks.",          bentoComponent: "reveal-icon",          icon: Wine,
        },
      ]}
      title="Taste the Grill Experience"
      description="Hearty meals prepared with local flair. Perfect for families, couples, and road trippers alike."
    />
  </div>

  <div id="stay" data-section="stay">
      <ProductCardOne
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="three-columns-all-equal-width"
      useInvertedBackground={false}
      products={[
        {
          id: "1",          name: "King Suite",          price: "$180/night",          imageSrc: "http://img.b2bpic.net/free-photo/old-vase-with-stone-angels_53876-18208.jpg"},
        {
          id: "2",          name: "Family Room",          price: "$210/night",          imageSrc: "http://img.b2bpic.net/free-photo/cutting-board-with-biscuits-near-scarf-kettle_23-2147963568.jpg"},
        {
          id: "3",          name: "Double Room",          price: "$150/night",          imageSrc: "http://img.b2bpic.net/free-photo/interior-hotel-room-residence-is-furnished-modernly-copy-space-background_1258-84783.jpg"},
        {
          id: "4",          name: "Single Room",          price: "$130/night",          imageSrc: "http://img.b2bpic.net/free-photo/decoration-bedroom_74190-5751.jpg"},
        {
          id: "5",          name: "Twin Suite",          price: "$160/night",          imageSrc: "http://img.b2bpic.net/free-photo/interior-modern-comfortable-hotel-room_1232-1822.jpg"},
        {
          id: "6",          name: "Accessible Room",          price: "$170/night",          imageSrc: "http://img.b2bpic.net/free-photo/still-life-cozy-room-with-beautiful-handmade-ceramic-cup_169016-3810.jpg"},
      ]}
      title="Comfortable Overnight Accommodation"
      description="Convenient rooms right where you need them. WiFi, parking, and breakfast options included."
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardFifteen
      useInvertedBackground={true}
      testimonial="An incredible stopover. The food was fantastic and the room was clean and comfortable. Best place to break up the drive North!"
      rating={5}
      author="Sarah M."
      avatars={[
        {
          src: "http://img.b2bpic.net/free-photo/cute-pinup-girl-kitchen_23-2148867261.jpg",          alt: "Sarah M"},
        {
          src: "http://img.b2bpic.net/free-photo/medium-shot-woman-with-delicious-hot-dog_23-2150347894.jpg",          alt: "Diner 1"},
        {
          src: "http://img.b2bpic.net/free-photo/smiling-lady-shirt-sitting-bar-counter-with-soda-water-hand-burger-near-happily-looking-camera-while-spending-time-cafe_574295-329.jpg",          alt: "Diner 2"},
        {
          src: "http://img.b2bpic.net/free-photo/positive-lifestyle-portrait-happy-exited-pretty-woman-with-pink-hairs-having-dinner-vintage-american-cafe-eating-hot-dog-french-fries-mil-shake-junk-food-cheat-meal-pastel-colors_291049-341.jpg",          alt: "Diner 3"},
        {
          src: "http://img.b2bpic.net/free-photo/happy-african-american-family-relaxing-while-talking-dining-table_637285-12669.jpg",          alt: "Diner 4"},
      ]}
      ratingAnimation="slide-up"
      avatarsAnimation="blur-reveal"
    />
  </div>

  <div id="social-proof" data-section="social-proof">
      <SocialProofOne
      textboxLayout="default"
      useInvertedBackground={false}
      names={[
        "TripAdvisor Rated",        "Google Maps",        "NZ Tourism",        "Local Quality",        "Family Friendly",        "Service Award",        "Verified Business"]}
      title="Trusted by Travelers"
      description="Recognized for quality, comfort, and local value."
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactCenter
      useInvertedBackground={true}
      background={{
        variant: "plain"}}
      tag="Plan Your Visit"
      title="Contact Us Today"
      description="Have a function inquiry or need to book a stay? Give us a call or send a message and our team will get right back to you."
      inputPlaceholder="Enter your email"
      buttonText="Send Message"
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterBaseReveal
      logoText="Three Furlongs"
      columns={[
        {
          title: "Location",          items: [
            {
              label: "Kaiwaka, New Zealand",              href: "#"},
            {
              label: "09 431 2246",              href: "tel:094312246"},
          ],
        },
        {
          title: "Links",          items: [
            {
              label: "Dining Menu",              href: "#"},
            {
              label: "Hotel Booking",              href: "#"},
            {
              label: "Contact Us",              href: "#contact"},
          ],
        },
      ]}
      copyrightText="© 2024 Three Furlongs. All rights reserved."
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
