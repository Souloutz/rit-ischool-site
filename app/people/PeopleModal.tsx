import { type Faculty, type Staff } from "@/lib/definitions";
import { X, Mail, MapPin, Tag, Globe, Phone } from "lucide-react";
import Image from "next/image";
import { SiX, SiFacebook } from "@icons-pack/react-simple-icons";
import { MotionDiv } from "@/components/Motion";

export default function PeopleModal({
  selectedPerson,
  setSelectedPerson,
}: {
  selectedPerson: Faculty | Staff | null;
  setSelectedPerson: (person: Faculty | Staff | null) => void;
}) {
  return selectedPerson && (
    <>
      <MotionDiv
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={() => setSelectedPerson(null)}
        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
      >
        <MotionDiv
          initial={{ scale: 0.95, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.95, opacity: 0, y: 20 }}
          onClick={(e: React.MouseEvent<HTMLDivElement>) => e.stopPropagation()}
          className="bg-card border border-border w-full max-w-3xl relative overflow-hidden shadow-2xl"
        >
          {/* Close Button */}
          <button
            onClick={() => setSelectedPerson(null)}
            className="absolute top-6 right-6 p-2 bg-transparent text-muted-foreground rounded-full hover:text-foreground hover:bg-secondary transition-colors z-10"
          >
            <X size={20} />
          </button>

          {/* Content */}
          <div className="p-8 md:p-12 flex flex-col md:flex-row gap-10">
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
              
              <div className="flex flex-col gap-4 md:flex md:flex-row md:gap-12">
                <div className="space-y-4">
                  {selectedPerson.interestArea && (
                    <div className="flex gap-4 items-start group">
                      <Tag className="w-5 h-5 text-muted-foreground mt-1 shrink-0 group-hover:text-primary transition-colors" />
                      <div>
                        <div className="text-xs text-muted-foreground uppercase font-bold tracking-widest mb-1">Interest Area</div>
                        <div className="flex flex-col flex-wrap gap-2 md:flex-row text-foreground mt-2">
                          {selectedPerson.interestArea.split(" ").map((word) => {
                            return (
                              <span key={word} className="inline-block bg-muted text-secondary-foreground px-3.5 py-1 rounded-full text-xs font-medium border border-border">
                                {word.toUpperCase()}
                              </span>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                  )}
                  
                  {selectedPerson.email && (
                    <div className="flex gap-4 items-start group">
                      <Mail className="w-5 h-5 text-muted-foreground mt-1 shrink-0 group-hover:text-primary transition-colors" />
                      <div>
                        <div className="text-xs text-muted-foreground uppercase font-bold tracking-widest mb-1">Email</div>
                        <a href={`mailto:${selectedPerson.email}`} className="text-foreground hover:text-primary transition-colors underline decoration-border underline-offset-4">
                          {selectedPerson.email}
                        </a>
                      </div>
                    </div>
                  )}

                  {selectedPerson.phone && (
                    <div className="flex gap-4 items-start group">
                      <Phone className="w-5 h-5 text-muted-foreground mt-1 shrink-0 group-hover:text-primary transition-colors" />
                      <div>
                        <div className="text-xs text-muted-foreground uppercase font-bold tracking-widest mb-1">Phone</div>
                        <a href={`tel:${selectedPerson.phone}`} className="text-foreground hover:text-primary transition-colors underline decoration-border underline-offset-4">
                          {selectedPerson.phone}
                        </a>
                      </div>
                    </div>
                  )}
                  
                  {selectedPerson.office && (
                    <div className="flex gap-4 items-start group">
                      <MapPin className="w-5 h-5 text-muted-foreground mt-1 shrink-0 group-hover:text-primary transition-colors" />
                      <div>
                        <div className="text-xs text-muted-foreground uppercase font-bold tracking-widest mb-1">Office</div>
                        <div className="text-foreground font-mono bg-muted px-3 py-1 border border-border">
                          {selectedPerson.office}
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                <div className="space-y-4">
                  {selectedPerson.website && (
                    <div className="flex gap-4 items-start group">
                      <Globe className="w-5 h-5 text-muted-foreground mt-1 shrink-0 group-hover:text-primary transition-colors" />
                      <div>
                        <div className="text-xs text-muted-foreground uppercase font-bold tracking-widest mb-1">Website</div>
                        <a 
                          href={selectedPerson.website} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-foreground hover:text-primary hover:underline transition-colors underline decoration-border underline-offset-4"
                        >
                          {selectedPerson.website}
                        </a>
                      </div>
                    </div>
                  )}

                  {/* Socials */}
                  {selectedPerson.twitter && (
                    <div className="flex gap-4 items-start group">
                      <SiX className="w-5 h-5 text-muted-foreground mt-1.5 shrink-0 group-hover:text-primary transition-colors" />
                      <div>
                        <div className="text-xs text-muted-foreground uppercase font-bold tracking-widest mb-1">Twitter</div>
                        <a
                          href={`https://x.com/${selectedPerson.twitter}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-foreground hover:text-primary hover:underline transition-colors underline decoration-border underline-offset-4"
                        >
                          {selectedPerson.twitter}
                        </a>
                      </div>
                    </div>
                  )}

                  {selectedPerson.facebook && (
                    <div className="flex gap-4 items-start group">
                      <SiFacebook className="w-5 h-5 text-muted-foreground mt-1.5 shrink-0 group-hover:text-primary transition-colors" />
                      <div>
                        <div className="text-xs text-muted-foreground uppercase font-bold tracking-widest mb-1">Facebook</div>
                        <a
                          href={`https://facebook.com/${selectedPerson.facebook}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-foreground hover:text-primary hover:underline transition-colors underline decoration-border underline-offset-4"
                        >
                          {selectedPerson.facebook}
                        </a>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </MotionDiv>
      </MotionDiv>
    </>
  );
}