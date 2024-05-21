import React from "react";
import Footer from "../components/footer/Footer";
import GlobalStats from "../components/global-stats/GlobalStats";
import Hero from "../components/home-hero/Hero";
import CopyrightFooter from "../components/copyright-footer/CopyrightFooter";
import HomeQuote from "../components/home-quote/HomeQuote";
import LatestNews from "../components/latest-news/LatestNews";
import NetcargoWelcome from "../components/netcargo-welcome/NetcargoWelcome";
import OurServices from "../components/our-services/OurServices";
import PrimaryNav from "../components/primary-nav/PrimaryNav";
import SecondaryNav from "../components/secondary-nav/SecondaryNav";
import Testimonials from "../components/testimonials/Testimonials";
import Nav from "../components/nav/Nav";

export default function Home() {
  return (
    <>
      <Nav />

      <Hero />
      <NetcargoWelcome />
      <OurServices />
      <GlobalStats />
      <HomeQuote />
      <Testimonials />
      <LatestNews />
      <Footer />
      <CopyrightFooter />
    </>
  );
}
