import React from "react";
import { FaHome } from "react-icons/fa";

import { navItems } from "../data";
import Hero from "../components/Hero";
import Grid from "../components/Grid";
import RecentProjects from "../components/RecentProjects";
import Recommendation from "../components/Recommendation";
import { FloatingNav } from "../components/ui/FloatingNav";

export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
      <FloatingNav navItems={navItems} />

        <Hero />
        <Grid />
        <RecentProjects />
        <Recommendation />

      </div>
    </main>
  );
}