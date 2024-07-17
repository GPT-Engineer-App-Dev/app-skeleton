import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row items-center gap-8">
        <div className="flex-1">
          <h1 className="text-4xl font-bold mb-4">Welcome to Swedish History</h1>
          <p className="text-xl mb-6">
            Explore the rich and fascinating history of Sweden, from the Viking Age to modern times.
          </p>
          <div className="space-x-4">
            <Button size="lg" asChild>
              <Link to="/timeline">Explore Timeline</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link to="/about">Learn More</Link>
            </Button>
          </div>
        </div>
        <div className="flex-1">
          <img 
            src="/images/swedish-history-hero.png" 
            alt="Swedish History Illustration" 
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default Index;