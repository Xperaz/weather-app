"use client";

import { PublicLayout } from "./index";
import Header from "@/components/header/Header";
import WeatherInfo from "@/components/main/WeatherInfo";
import Footer from "@/components/footer/Footer";
import { WeatherProvider } from "@/context/weatherContext";
export default function Home() {
  return (
    <PublicLayout>
      <WeatherProvider>
        <Header />
        <WeatherInfo />
      </WeatherProvider>

      <Footer />
    </PublicLayout>
  );
}
