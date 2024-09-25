"use client";

import { HeroSection } from "../components/hero";
import AIPromoGenerator from '../components/AIPromoGenerator';


export default function Home() {
  return (
    <main className="text-center m-5 p-10">
      <HeroSection />

    <div className="min-h-screen bg-green-200 text-green-900 p-8">
      <AIPromoGenerator />
    </div>
      
    </main>
  );
}
