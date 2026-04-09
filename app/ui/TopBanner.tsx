const topLinks = [
  { label: "Future Students", link: "https://www.rit.edu/future-students" },
  { label: "Current Students", link: "https://www.rit.edu/current-students" },
  { label: "Parents", link: "https://www.rit.edu/parents-and-families" },
  { label: "Faculty and Staff", link: "https://www.rit.edu/faculty-and-staff" },
  { label: "Alumni", link: "https://www.rit.edu/alumni" },
  { label: "Partners", link: "https://www.rit.edu/partners" }
];

const actionLinks = [
  { label: "Request Info", link: "https://www.rit.edu/request-information" },
  { label: "Visit", link: "https://www.rit.edu/visit" },
  { label: "Apply", link: "https://www.rit.edu/admissions/apply" },
  { label: "Give", link: "https://www.rit.edu/giving" }
];

export default function TopBanner() {
  return (
    <div className="hidden lg:flex w-full bg-black text-white text-[12px] font-bold tracking-wider uppercase">
      <div className="flex-1 flex px-4">
        {topLinks.map(({ label, link }) => (
          <a key={label} href={link} target="_blank" className="py-3 px-3 hover:text-primary transition-colors">
            {label}
          </a>
        ))}
      </div>
      <div className="flex bg-primary">
        {actionLinks.map(({ label, link }) => (
          <a key={label} href={link} target="_blank" className="py-3 px-3 hover:text-black transition-colors">
            {label}
          </a>
        ))}
      </div>
    </div>
  );
}