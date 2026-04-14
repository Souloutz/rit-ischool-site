"use client";

import Filters from "./Filters";
import { type Faculty, type Staff, type People } from "@/lib/definitions";
import { useState } from "react";
import { AnimatePresence } from "motion/react";
import { motion } from "motion/react";
import Image from "next/image";
import PeopleModal from "./PeopleModal";
import { SortLogic, type SortType } from "@/lib/utils";

export default function PeopleDashboard({
  data,
}: {
  data: People;
}) {
  const [activeTab, setActiveTab] = useState<"faculty" | "staff">("faculty");
  const [selectedPerson, setSelectedPerson] = useState<Faculty | Staff | null>(null);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [sortFilter, setSortFilter] = useState<SortType>("DEFAULT");

  const peopleList = activeTab === "faculty" ? data?.faculty : data?.staff;

  return (
    <>
      <div className="relative flex flex-col md:flex-row gap-8 flex-1">
        <Filters 
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          handleSearch={setSearchTerm}
          activeFilter={sortFilter}
          handleFilter={setSortFilter}
        />

        <div className="flex-1 min-h-125">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {peopleList.toSorted(SortLogic[sortFilter])?.
              filter((person) => 
                person.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                person.title.toLowerCase().includes(searchTerm.toLowerCase()),
              ).
              map((person, index) => (
                <motion.button
                  key={person.username || index}
                  onClick={() => setSelectedPerson(person)}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -4, scale: 1.04, transition: {
                    type: "spring", stiffness: 600, damping: 15, mass: 1,
                  } }}
                  transition={{ type: "tween", ease: "easeIn", duration: 0.4, delay: 0.1 }}
                  className="bg-card border border-border p-6 flex flex-col items-center text-center group shadow-sm hover:border-primary hover:shadow-md focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                >
                  <div className="w-24 h-24 rounded-full bg-muted mb-4 overflow-hidden border-2 border-transparent transition-colors relative">
                    {person.imagePath ? (
                      <Image
                        src={person.imagePath} 
                        alt={person.name} 
                        className="w-full h-full object-cover"
                        width={160}
                        height={192}
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-4xl text-muted-foreground font-bold uppercase">
                        {person.name.charAt(0)}
                      </div>
                    )}
                  </div>
                  <h3 className="font-bold text-lg text-foreground group-hover:text-primary transition-colors">{person.name}</h3>
                  <p className="text-xs text-muted-foreground mt-2 uppercase tracking-wider line-clamp-1">{person.title}</p>
                </motion.button>
              ))}
          </div>
        </div>
      </div>

      <AnimatePresence>
        <PeopleModal 
          selectedPerson={selectedPerson}
          setSelectedPerson={setSelectedPerson}
        />
      </AnimatePresence>
    </>
  );
}