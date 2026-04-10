"use client";

import Filters from "./Filters";
import { type Faculty, type Staff, type People } from "@/lib/definitions";
import { useState } from "react";
import { X, Mail, MapPin, Tag } from "lucide-react";
import { AnimatePresence } from "motion/react";
import { motion } from "motion/react";
import Image from "next/image";

export default function PeopleDashboard({
  data
}: {
  data: People
}) {
  const [activeTab, setActiveTab] = useState<"faculty" | "staff">("faculty");
  const [selectedPerson, setSelectedPerson] = useState<Faculty | Staff | null>(null);

  const peopleList = activeTab === "faculty" ? data?.faculty : data?.staff;

  return (
    <>
      <div className="flex flex-col md:flex-row gap-8 flex-1">
        <Filters 
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />

        <div className="flex-1 min-h-125">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {peopleList?.map((person, index) => (
              <motion.button
                key={person.username || index}
                onClick={() => setSelectedPerson(person)}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                whileHover={{ y: -4, scale: 1.04, transition: {
                  type: "spring", stiffness: 600, damping: 15, mass: 1
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

      {/* Dialog Modal */}
      <AnimatePresence>
        {selectedPerson && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedPerson(null)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            >
              <motion.div
                initial={{ scale: 0.95, opacity: 0, y: 20 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.95, opacity: 0, y: 20 }}
                onClick={(e) => e.stopPropagation()}
                className="bg-card border border-border w-full max-w-2xl relative overflow-hidden shadow-2xl"
              >
                {/* Close Button */}
                <button
                  onClick={() => setSelectedPerson(null)}
                  className="absolute top-6 right-6 p-2 bg-muted text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors z-10"
                >
                  <X size={20} />
                </button>

                {/* Dialog Content matching sketch */}
                <div className="p-8 md:p-12 flex flex-col md:flex-row gap-10">
                  {/* Left: Image */}
                  <div className="shrink-0">
                    <div className="w-40 h-48 bg-muted overflow-hidden border border-border shadow-inner relative group">
                       {selectedPerson.imagePath ? (
                          <Image
                            src={selectedPerson.imagePath}
                            alt={selectedPerson.name}
                            className="w-full h-full object-cover"
                            width={160}
                            height={192}
                          />
                        ) : (
                          <div className="w-full h-full flex items-center justify-center text-6xl text-muted-foreground font-bold uppercase">
                            {selectedPerson.name.charAt(0)}
                          </div>
                        )}
                    </div>
                  </div>

                  {/* Right: Details */}
                  <div className="flex-1 space-y-6">
                    <div>
                      <h2 className="text-3xl font-bold tracking-tight text-foreground mb-2 leading-none">
                        {selectedPerson.name}
                      </h2>
                      <div className="text-primary font-bold text-lg tracking-wide uppercase">
                        {selectedPerson.title}
                      </div>
                    </div>
                    
                    <div className="h-px w-full bg-border" />
                    
                    <div className="space-y-4">
                      {selectedPerson.interestArea && (
                        <div className="flex gap-4 items-start group">
                          <Tag className="w-5 h-5 text-muted-foreground mt-1 shrink-0 group-hover:text-primary transition-colors" />
                          <div>
                            <div className="text-xs text-muted-foreground uppercase font-bold tracking-widest mb-1">Interest Area</div>
                            <div className="text-foreground">{selectedPerson.interestArea}</div>
                          </div>
                        </div>
                      )}
                      
                      {selectedPerson.email && (
                        <div className="flex gap-4 items-center group">
                          <Mail className="w-5 h-5 text-muted-foreground shrink-0 group-hover:text-primary transition-colors" />
                          <a href={`mailto:${selectedPerson.email}`} className="text-foreground hover:text-primary transition-colors underline decoration-border underline-offset-4">
                            {selectedPerson.email}
                          </a>
                        </div>
                      )}
                      
                      {selectedPerson.office && (
                        <div className="flex gap-4 items-center group">
                          <MapPin className="w-5 h-5 text-muted-foreground shrink-0 group-hover:text-primary transition-colors" />
                          <div className="text-foreground font-mono bg-muted px-3 py-1 border border-border">
                            {selectedPerson.office}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}