
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";

const Searchbar = () => {
  return (
    <div className="relative w-full max-w-2xl">
      <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500" />
      <Input
        type="search"
        placeholder="Search doctors by name, specialty..."
        className="pl-10 py-6 bg-white border border-gray-200 rounded-xl shadow-sm focus-visible:ring-primary"
      />
    </div>
  );
};

export default Searchbar;
