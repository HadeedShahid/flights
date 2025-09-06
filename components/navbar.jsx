import { Menu, Moon, Grid3X3, User } from "lucide-react";

const Navbar = () => {
  const navItems = [
    { label: "Travel", active: false, icon: "🧳" },
    { label: "Explore", active: false, icon: "🗺️" },
    { label: "Flights", active: true, icon: "✈️" },
    { label: "Hotels", active: false, icon: "🏨" },
    { label: "Vacation rentals", active: false, icon: "🏠" },
  ];

  return (
    <header className="w-full bg-white sticky top-0 z-50">
      <div className="w-full px-4 breakout border-b border-gray-300 py-4">
        <div className="flex items-center justify-between gap-6">
          {/* Left section - Menu and Google Logo */}
          <div className="flex items-center space-x-4">
              <Menu className="h-5 w-5" />
            
            <div className="flex items-center">
             <img src="/images/google.png"></img>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-2 mx-0 mr-auto">
            {navItems.map((item) => (
              <button
                key={item.label}
                className={`px-4 py-2 transition-colors hover:bg-transparent rounded-full ${
                  item.active 
                    ? "border-primary text-primary font-medium bg-blue-50/20" 
                    : "border border-gray-300"
                }`}
              >
                <span className="mr-2">{item.icon}</span>
                {item.label}
              </button>
            ))}
          </nav>

          {/* Right section - User actions */}
          <div className="flex items-center space-x-2">
            <button variant="ghost" size="sm" className="p-2 hover:bg-muted rounded-full">
              <Moon className="h-5 w-5 text-muted-foreground" />
            </button>
            <button variant="ghost" size="sm" className="p-2 hover:bg-muted rounded-full">
              <Grid3X3 className="h-5 w-5 text-muted-foreground" />
            </button>
            <button variant="ghost" size="sm" className="p-2 hover:bg-muted rounded-full">
              <User className="h-6 w-6 text-muted-foreground bg-muted rounded-full p-1" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;