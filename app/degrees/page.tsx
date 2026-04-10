import { GraduationCap, Code, Server, Smartphone, BookMarked, Cpu, Network } from "lucide-react";
import { DegreesSchema } from "@/lib/definitions";
import { fetchInitialData } from "@/lib/data";
import { MotionDiv } from "../ui/Motion";
import DataFetchError from "@/app/ui/DataFetchError";


export default async function Page() {
  const { success, data, error } = DegreesSchema.safeParse(await fetchInitialData("/degrees"));
  const icons = [Code, Server, Smartphone, Cpu, BookMarked, Network];

  if (!success) {
    console.error("Failed to parse degrees data:", error);
    return (
      <DataFetchError />
    );
  }

  return (
    <MotionDiv
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="p-6 md:p-12 space-y-16 max-w-7xl mx-auto"
    >
      <div className="space-y-4">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground flex items-center gap-4">
          <GraduationCap className="w-12 h-12 text-primary" />
          School of Information Degrees
        </h1>
        <div className="h-1 w-24 bg-primary rounded-full" />
        <p className="text-muted-foreground text-lg max-w-2xl">
          Explore our undergraduate and graduate programs designed to prepare you for the future of technology.
        </p>
      </div>

      <div className="space-y-16">
        {/* Undergraduate */}
        <div>
          <h2 className="text-3xl font-bold mb-8 text-foreground tracking-tight border-b border-border pb-4">Undergraduate Programs</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {data.undergraduate.map((degree, index) => {
              const Icon = icons[index % icons.length];
              return (
                <MotionDiv
                  key={degree.degreeName}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15 }}
                  whileHover={{ y: -4, scale: 1.01, transition: { duration: 0.3 } }}
                  className="bg-card border border-border p-8 hover:border-primary group shadow-md"
                >
                  <div className="bg-background w-16 h-16 flex items-center justify-center mb-6 group-hover:bg-primary transition-colors">
                    <Icon className="w-8 h-8 text-primary group-hover:text-primary-foreground" />
                  </div>
                  <h3 className="text-2xl font-bold mb-3 text-card-foreground">{degree.title}</h3>
                  <p className="text-muted-foreground mb-6 line-clamp-4">{degree.description}</p>
                  
                  {degree.concentrations && (
                    <div className="flex flex-wrap gap-2 mt-auto">
                      {degree.concentrations.map((concentration) => (
                        <span key={concentration} className="text-xs font-bold px-3 py-1 bg-secondary text-secondary-foreground border border-border">
                          {concentration}
                        </span>
                      ))}
                    </div>
                  )}
                </MotionDiv>
              );
            })}
          </div>
        </div>

        {/* Graduate */}
        <div>
          <h2 className="text-3xl font-bold mb-8 text-foreground tracking-tight border-b border-border pb-4">Graduate Programs</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {data.graduate.map((degree, index) => {
              const Icon = icons[(index + 3) % icons.length];

              if (degree.availableCertificates) {
                return (
                  <MotionDiv
                    key={degree.degreeName}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ y: -4, scale: 1.01, transition: { duration: 0.3 } }}
                    className="bg-card border border-border p-8 hover:border-primary group shadow-md"
                  >
                    <div className="bg-background w-16 h-16 flex items-center justify-center mb-6 group-hover:bg-primary transition-colors">
                      <Icon className="w-8 h-8 text-primary group-hover:text-primary-foreground" />
                    </div>
                    <h3 className="text-2xl font-bold mb-3 text-card-foreground">Graduate Advanced Certificates</h3>
                    <p className="text-muted-foreground mb-6 line-clamp-4">Explore the theories of interactive computing, fundamentals of interactive design, web and multimedia programming, and the impact of networked technologies in web communications.</p>
                    
                    <div className="flex flex-wrap gap-2 mt-auto">
                      {degree.availableCertificates.map((certificate) => (
                        <span key={certificate} className="text-xs font-bold px-3 py-1 bg-secondary text-secondary-foreground border border-border">
                          {certificate.split(",").join(" ").split(" ").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ")}
                        </span>
                      ))}
                    </div>
                  </MotionDiv>
                );
              }

              return (
                <MotionDiv
                  key={degree.degreeName}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -4, scale: 1.01, transition: { duration: 0.3 } }}
                  className="bg-card border border-border p-8 hover:border-primary group shadow-md"
                >
                  <div className="bg-background w-16 h-16 flex items-center justify-center mb-6 group-hover:bg-primary transition-colors">
                    <Icon className="w-8 h-8 text-primary group-hover:text-primary-foreground" />
                  </div>
                  <h3 className="text-2xl font-bold mb-3 text-card-foreground">{degree.title}</h3>
                  <p className="text-muted-foreground mb-8 line-clamp-4">{degree.description}</p>
                  
                  {degree.concentrations && (
                    <div className="flex flex-wrap gap-2 mt-auto">
                      {degree.concentrations.map((concentration) => (
                        <span key={concentration} className="text-xs font-bold px-3 py-1 bg-secondary text-secondary-foreground border border-border">
                          {concentration}
                        </span>
                      ))}
                    </div>
                  )}
                </MotionDiv>
              );
            })}
          </div>
        </div>
      </div>
    </MotionDiv>
  );
}
