import { type Employment } from "@/lib/definitions";
import { Building2, ContactRound, TrendingUp } from "lucide-react";
import { MotionDiv } from "@/components/Motion";
import CoopTable from "./CoopTable";

export default function EmploymentDashboard({
  data,
}: {
  data: Employment,
}) {
  return (
    <>
      {/* Introduction Section */}
      <MotionDiv 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-bold tracking-tight text-foreground mb-10 border-b border-border pb-4">
          {data.introduction.title.split(" ").map((word) => word[0].toUpperCase() + word.slice(1)).join(" ")}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-14">
          {data.introduction.content.map((item, index) => (
            <div key={index} className="space-y-4">
              <h3 className="text-2xl font-bold text-primary uppercase tracking-tight">{item.title}</h3>
              <p className="text-foreground leading-relaxed text-lg">{item.description}</p>
            </div>
          ))}
        </div>
      </MotionDiv>

      {/* Statistics Section */}
      <div className="space-y-8">
        <h2 className="text-3xl font-bold tracking-tight text-foreground border-b border-border pb-4">
          {data.degreeStatistics.title || "Degree Statistics"}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {data.degreeStatistics.statistics.map((stat, index) => (
            <MotionDiv
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, type: "spring" }}
              className="bg-primary text-primary-foreground p-8 border border-border rounded-2xl shadow-lg relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 p-6 opacity-20 group-hover:opacity-40 transition-opacity">
                <TrendingUp className="w-16 h-16" />
              </div>
              <div className="relative z-10">
                <h2 className="text-4xl lg:text-5xl font-bold tracking-tighter mb-4">{stat.value}</h2>
                <p className="font-bold text-sm lg:text-md uppercase tracking-wide leading-normal">{stat.description}</p>
              </div>
            </MotionDiv>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Employers */}
        <MotionDiv
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="bg-card border border-border p-10 shadow-md flex flex-col items-start h-full"
        >
          <div className="flex items-center gap-4 mb-8">
            <Building2 className="w-8 h-8 text-primary" />
            <h3 className="text-3xl font-bold text-foreground tracking-tight">{data.employers.title}</h3>
          </div>
          <p className="text-lg text-foreground mb-8">See some of the companies our graduates have gone on to work for!</p>
          <div className="flex flex-col gap-3">
            {data.employers.employerNames.map((employer, index) => (
              <span
                key={index}
                className="px-4 py-1 bg-muted/50 border border-card-foreground/25 rounded-full max-w-fit text-md text-foreground font-medium tracking-tight"
              >
                {employer}
              </span>
            ))}
          </div>
        </MotionDiv>

        {/* Careers */}
        <MotionDiv
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="bg-card border border-border p-10 shadow-md flex flex-col h-full"
        >
          <div className="flex items-center gap-4 mb-8">
            <ContactRound className="w-8 h-8 text-primary" />
            <h3 className="text-3xl font-bold text-foreground tracking-tight">{data.careers.title}</h3>
          </div>
          <p className="text-lg text-foreground mb-8">Explore some of the various career paths graduates have taken!</p>
          <ul className="space-y-4">
            {data.careers.careerNames.map((career, index) => (
              <li
                key={index}
                className="flex items-center gap-4 border border-transparent"
              >
                <div className="w-2 h-2 bg-primary rounded-full" />
                <span className="text-lg text-foreground font-medium">{career.split(" ").map((word) => word[0].toUpperCase() + word.slice(1).toLowerCase()).join(" ")}</span>
              </li>
            ))}
          </ul>
        </MotionDiv>
      </div>

      <CoopTable data={data} />
    </>
  );
}