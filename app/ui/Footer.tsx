export default function Footer() {
  return (
    <footer className="bg-black text-white py-16 text-sm">
        <div className="max-w-350 mx-auto px-4 flex flex-col md:flex-row justify-between gap-12">
          <div className="flex flex-col gap-6 max-w-sm">
            <a 
              href="https://www.rit.edu"
              target="_blank"
              className="flex items-center gap-3"
            >
              <span className="text-5xl font-serif font-normal tracking-wide">RIT</span>
              <div className="w-px h-12 bg-zinc-500" />
              <div className="flex flex-col text-xl font-semibold leading-5 tracking-tight text-zinc-200">
                <span>Rochester Institute</span>
                <span>of Technology</span>
              </div>
            </a>
            <div className="text-zinc-400 leading-relaxed">
              <p>1 Lomb Memorial Drive</p>
              <p>Rochester, NY 14623</p>
              <p>585-475-2411</p>
            </div>
          </div>
          
          <div dir="rtl" className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-16 text-zinc-400 font-medium">
            <div dir="ltr" className="flex flex-col gap-3">
              <a href="https://www.rit.edu/about" target="_blank" className="hover:text-white transition-colors text-white font-bold">About</a>
              <a href="https://www.rit.edu/academics" target="_blank" className="hover:text-white transition-colors">Academics</a>
              <a href="https://www.rit.edu/research" target="_blank" className="hover:text-white transition-colors">Research</a>
            </div>
            <div dir="ltr" className="flex flex-col gap-3">
              <a href="https://www.rit.edu/admissions" target="_blank" className="hover:text-white transition-colors text-white font-bold">Admissions</a>
              <a href="https://www.rit.edu/admissions/financial-aid" target="_blank" className="hover:text-white transition-colors">Financial Aid</a>
              <a href="https://www.rit.edu/admissions/apply" target="_blank" className="hover:text-white transition-colors">Apply</a>
            </div>
          </div>
        </div>
        <div className="max-w-350 mx-auto px-4 mt-16 pt-8 border-t-2 border-zinc-800 text-zinc-400 text-xs flex flex-col md:flex-row justify-between gap-4">
          <div className="flex flex-col gap-1 md:flex-row pb-2 md:pb-0">
            <p>Copyright &copy; {new Date().getFullYear()} Rochester Institute of Technology.</p>
            <p>All Rights Reserved.</p>
          </div>
          <div className="flex gap-4">
            <a href="https://www.rit.edu/disclaimer" target="_blank" className="hover:text-white transition-colors">Disclaimer</a>
            <a href="https://www.rit.edu/privacy" target="_blank" className="hover:text-white transition-colors">Privacy Statement</a>
            <a href="https://www.rit.edu/accessibility" target="_blank" className="hover:text-white transition-colors">Accessibility</a>
          </div>
        </div>
      </footer>
  );
}