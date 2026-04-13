export default function MainHeader() {
  return (
    <header className="w-full bg-background border-b border-border">
      <div className="max-w-350 mx-auto px-4 lg:px-2 py-6 md:py-6 flex flex-col md:flex-row items-between justify-between gap-6">
        <a href="https://www.rit.edu" className="flex justify-center items-center gap-4">
          <span className="text-5xl font-serif font-normal text-primary tracking-wide">RIT</span>
          <div className="w-px h-12 bg-border hidden md:block" />
          <div className="hidden md:flex flex-col text-md font-semibold leading-5 tracking-tight text-foreground">
            <span>Rochester Institute</span>
            <span>of Technology</span>
          </div>
        </a>
        
        <div className="flex flex-col items-center">
          <span className="text-lg text-center font-semibold text-foreground">Golisano College of</span>
          <span className="text-2xl text-center md:text-3xl font-bold text-foreground">Computing and Information Sciences</span>
        </div>

        <div className="hidden lg:flex items-center gap-6 text-sm font-semibold">
          <a href="https://www.rit.edu/computing/news" target="_blank" className="hover:text-primary transition-colors">News</a>
          <a href="https://www.rit.edu/computing/directory" target="_blank" className="hover:text-primary transition-colors">Directory</a>
          <a href="https://www.rit.edu/myrit/" target="_blank" className="hover:text-primary transition-colors">myRIT</a>
        </div>
      </div>
    </header>
  );
}