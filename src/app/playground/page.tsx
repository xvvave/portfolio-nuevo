"use client";

import Navbar from "../../components/1 Navbar/Navbar";
import Footer from "../../components/5 Footer/Footer";
import Playground from "../../components/Playground";

export default function PlaygroundPage() {
  return (
    <div className="page-transition">
      <Navbar />
      <main className="min-h-screen pt-16 md:pt-20 lg:pt-24">
        <Playground />
      </main>
      <Footer />
    </div>
  );
} 