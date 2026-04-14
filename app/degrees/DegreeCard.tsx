import { type Graduate, type Undergraduate } from "@/lib/definitions";
import { MotionDiv } from "@/components/Motion";
import { type ForwardRefExoticComponent, type RefAttributes } from "react";
import { type LucideProps } from "lucide-react";

export default function DegreeCard({
  Icon,
  degree,
  index,
}: {
  Icon: ForwardRefExoticComponent<Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>>;
  degree: Undergraduate | Graduate;
  index: number;
}) {
  if ((degree as Graduate).availableCertificates) {
    return (
      <MotionDiv
        key={degree.degreeName}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.15 }}
        whileHover={{ y: -4, scale: 1.01, transition: { duration: 0.3 } }}
        className="relative bg-card border border-border px-8 pt-4 pb-8 hover:border-primary group shadow-md"
      >
        <div className="relative bg-background -left-4 w-16 h-16 flex items-center justify-center mb-2 transition-colors">
          <Icon className="w-8 h-8 text-primary" />
        </div>
        <h3 className="text-2xl font-bold mb-6 text-card-foreground">Graduate Advanced Certificates</h3>
        <p className="text-muted-foreground mb-8 line-clamp-none">Explore the theories of interactive computing, fundamentals of interactive design, web and multimedia programming, and the impact of networked technologies in web communications.</p>
        
        <div className="flex flex-wrap gap-2 mt-auto">
          {(degree as Graduate).availableCertificates?.map((certificate) => (
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
      transition={{ delay: index * 0.15 }}
      whileHover={{ y: -4, scale: 1.01, transition: { duration: 0.3 } }}
      className="relative bg-card border border-border px-8 pt-4 pb-8 hover:border-primary group shadow-md"
    >
      <div className="relative bg-background -left-4 w-16 h-16 flex items-center justify-center mb-2 transition-colors">
        <Icon className="w-8 h-8 text-primary" />
      </div>
      <h3 className="text-2xl font-bold mb-6 text-card-foreground">{degree.title}</h3>
      <p className="text-muted-foreground mb-8 line-clamp-none">{degree.description}</p>
      
      {degree.concentrations && (
        <div className="flex flex-wrap gap-2 mt-auto">
          {degree.concentrations.map((concentration) => (
            <span key={concentration} className="text-xs font-bold px-3 py-1.5 bg-secondary text-secondary-foreground border leading-3 border-border">
              {concentration}
            </span>
          ))}
        </div>
      )}
    </MotionDiv>
  );
}