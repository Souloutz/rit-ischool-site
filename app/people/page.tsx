import { MotionDiv } from "@/components/Motion";
import { PeopleSchema } from "@/lib/definitions";
import { fetchInitialData } from "@/lib/data";
import { UsersRound } from "lucide-react";
import DataFetchError from "@/components/DataFetchError";
import PeopleDashboard from "./PeopleDashboard";

export default async function Page() {
  const { success, data, error } = PeopleSchema.safeParse(await fetchInitialData("/people"));

  if (!success) {
    console.error("Failed to parse people data:", error);
    return (
      <DataFetchError />
    );
  }
  
  return (
    <div className="p-6 md:p-12 space-y-16 max-w-7xl mx-auto h-full flex flex-col">
      <MotionDiv
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="space-y-4"
      >
        <h1 className="text-4xl md:text-4xl font-bold tracking-tight text-foreground flex items-center gap-4">
          <UsersRound className="w-10 h-10 text-primary" />
          Faculty and Staff
        </h1>
        <div className="h-1 w-18 bg-primary rounded-full" />
        <p className="text-muted-foreground text-lg max-w-2xl">
          Explore our top faculty and staff members who are dedicated to our students&apos; education and success.
        </p>
      </MotionDiv>

      <PeopleDashboard data={data} />
    </div>
  );
}
//   const [data, setData] = useState<any>(null);
//   const [loading, setLoading] = useState(true);
//   const [activeTab, setActiveTab] = useState<"faculty" | "staff">("faculty");
//   const [selectedPerson, setSelectedPerson] = useState<any>(null);

//   useEffect(() => {
//     fetchApi("people").then((res) => {
//       setData(res);
//       setLoading(false);
//     });
//   }, []);

//   if (loading) {
//     return (
//       <div className="flex items-center justify-center h-full min-h-screen">
//         <motion.div
//           animate={{ rotate: 360 }}
//           transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
//           className="w-12 h-12 border-4 border-[#F76902] border-t-transparent rounded-full"
//         />
//       </div>
//     );
//   }

//   const peopleList = activeTab === "faculty" ? data?.faculty : data?.staff;

//   return (
//     <motion.div 
//       initial={{ opacity: 0, y: 20 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.5 }}
//       className="p-6 md:p-12 space-y-12 max-w-7xl mx-auto h-full flex flex-col"
//     >
//       <div className="space-y-4 shrink-0">
//         <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tight text-white flex items-center gap-4">
//           <Users className="w-12 h-12 text-[#F76902]" />
//           Our People
//         </h1>
//         <div className="h-1 w-24 bg-[#F76902] rounded-full" />
//       </div>

//       <div className="flex flex-col md:flex-row gap-8 flex-1">
//         {/* Sidebar Filters / Tags */}
//         <div className="w-full md:w-64 shrink-0 space-y-4">
//           <div className="flex items-center gap-3 text-zinc-400 mb-6 uppercase font-bold tracking-widest text-sm">
//             <Filter size={16} /> Filter by Group
//           </div>
//           <div className="flex md:flex-col gap-3 overflow-x-auto pb-4 md:pb-0">
//             {["faculty", "staff"].map((tab) => (
//               <button
//                 key={tab}
//                 onClick={() => setActiveTab(tab as any)}
//                 className={cn(
//                   "px-6 py-4 rounded-2xl text-left font-bold uppercase tracking-wider transition-all duration-300 w-full whitespace-nowrap",
//                   activeTab === tab
//                     ? "bg-[#F76902] text-white shadow-[0_4px_20px_rgba(247,105,2,0.4)]"
//                     : "bg-zinc-900 text-zinc-400 hover:bg-zinc-800 hover:text-white"
//                 )}
//               >
//                 {tab}
//               </button>
//             ))}
//           </div>
//         </div>

//         {/* Grid of People */}
//         <div className="flex-1 min-h-[500px]">
//           <motion.div
//             key={activeTab}
//             initial={{ opacity: 0, y: 10 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ staggerChildren: 0.05 }}
//             className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
//           >
//             {peopleList?.map((person: any, i: number) => (
//               <motion.button
//                 key={person.username || i}
//                 onClick={() => setSelectedPerson(person)}
//                 initial={{ opacity: 0, scale: 0.9 }}
//                 animate={{ opacity: 1, scale: 1 }}
//                 whileHover={{ y: -5, scale: 1.05 }}
//                 transition={{ type: "spring", stiffness: 300, damping: 20 }}
//                 className="bg-zinc-900 border border-zinc-800 rounded-3xl p-6 flex flex-col items-center text-center group shadow-xl hover:border-[#F76902]/50 focus:outline-none focus:ring-2 focus:ring-[#F76902]/50"
//               >
//                 <div className="w-24 h-24 rounded-full bg-zinc-800 mb-4 overflow-hidden border-2 border-transparent group-hover:border-[#F76902] transition-colors relative">
//                   {person.imagePath ? (
//                     <img src={person.imagePath} alt={person.name} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
//                   ) : (
//                     <div className="w-full h-full flex items-center justify-center text-4xl text-zinc-600 font-black uppercase">
//                       {person.name.charAt(0)}
//                     </div>
//                   )}
//                 </div>
//                 <h3 className="font-bold text-lg text-zinc-100 group-hover:text-[#F76902] transition-colors">{person.name}</h3>
//                 <p className="text-xs text-zinc-500 mt-2 uppercase tracking-wider line-clamp-1">{person.title}</p>
//               </motion.button>
//             ))}
//           </motion.div>
//         </div>
//       </div>

//       {/* Dialog Modal matching Sketch 4 */}
//       <AnimatePresence>
//         {selectedPerson && (
//           <>
//             <motion.div
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               exit={{ opacity: 0 }}
//               onClick={() => setSelectedPerson(null)}
//               className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
//             >
//               <motion.div
//                 initial={{ scale: 0.95, opacity: 0, y: 20 }}
//                 animate={{ scale: 1, opacity: 1, y: 0 }}
//                 exit={{ scale: 0.95, opacity: 0, y: 20 }}
//                 onClick={(e) => e.stopPropagation()}
//                 className="bg-zinc-900 border-2 border-zinc-800 rounded-[2.5rem] w-full max-w-2xl relative overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.5)]"
//               >
//                 {/* Close Button */}
//                 <button
//                   onClick={() => setSelectedPerson(null)}
//                   className="absolute top-6 right-6 p-2 rounded-full bg-zinc-800 text-zinc-400 hover:text-white hover:bg-zinc-700 transition-colors z-10"
//                 >
//                   <X size={20} />
//                 </button>

//                 {/* Dialog Content matching sketch */}
//                 <div className="p-8 md:p-12 flex flex-col md:flex-row gap-10">
//                   {/* Left: Image (Sketch: rounded rect image placeholder) */}
//                   <div className="shrink-0">
//                     <div className="w-40 h-48 bg-zinc-800 rounded-[2rem] overflow-hidden border-4 border-zinc-950 shadow-inner relative group">
//                        {selectedPerson.imagePath ? (
//                           <img src={selectedPerson.imagePath} alt={selectedPerson.name} className="w-full h-full object-cover" />
//                         ) : (
//                           <div className="w-full h-full flex items-center justify-center text-6xl text-zinc-700 font-black uppercase">
//                             {selectedPerson.name.charAt(0)}
//                           </div>
//                         )}
//                         <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
//                     </div>
//                   </div>

//                   {/* Right: Details (Sketch: NAME, title, interest, email, office) */}
//                   <div className="flex-1 space-y-6">
//                     <div>
//                       <h2 className="text-4xl font-black uppercase tracking-tight text-white mb-2 leading-none">
//                         {selectedPerson.name}
//                       </h2>
//                       <div className="text-[#F76902] font-semibold text-lg tracking-wide uppercase">
//                         {selectedPerson.title}
//                       </div>
//                     </div>
                    
//                     <div className="h-px w-full bg-zinc-800" />
                    
//                     <div className="space-y-4">
//                       {selectedPerson.interestArea && (
//                         <div className="flex gap-4 items-start group">
//                           <Tag className="w-5 h-5 text-zinc-500 mt-1 shrink-0 group-hover:text-[#F76902] transition-colors" />
//                           <div>
//                             <div className="text-xs text-zinc-500 uppercase font-bold tracking-widest mb-1">Interest Area</div>
//                             <div className="text-zinc-200">{selectedPerson.interestArea}</div>
//                           </div>
//                         </div>
//                       )}
                      
//                       {selectedPerson.email && (
//                         <div className="flex gap-4 items-center group">
//                           <Mail className="w-5 h-5 text-zinc-500 shrink-0 group-hover:text-[#F76902] transition-colors" />
//                           <a href={`mailto:${selectedPerson.email}`} className="text-zinc-200 hover:text-white transition-colors underline decoration-zinc-700 underline-offset-4">
//                             {selectedPerson.email}
//                           </a>
//                         </div>
//                       )}
                      
//                       {selectedPerson.office && (
//                         <div className="flex gap-4 items-center group">
//                           <MapPin className="w-5 h-5 text-zinc-500 shrink-0 group-hover:text-[#F76902] transition-colors" />
//                           <div className="text-zinc-200 font-mono bg-zinc-950 px-3 py-1 rounded-md border border-zinc-800">
//                             {selectedPerson.office}
//                           </div>
//                         </div>
//                       )}
//                     </div>
//                   </div>
//                 </div>
//               </motion.div>
//             </motion.div>
//           </>
//         )}
//       </AnimatePresence>
//     </motion.div>
//   );
