import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Link } from "react-router-dom";

const timelineEvents = [
  { 
    id: "stone-age",
    year: "10000 BCE - 1700 BCE", 
    title: "Stone Age", 
    description: "Early human settlements in Sweden",
    image: "/images/stone-age.png"
  },
  { 
    id: "bronze-age",
    year: "1700 BCE - 500 BCE", 
    title: "Bronze Age", 
    description: "Introduction of bronze tools and weapons",
    image: "/images/bronze-age.png"
  },
  { 
    id: "iron-age",
    year: "500 BCE - 800 CE", 
    title: "Iron Age", 
    description: "Development of iron technology and Norse culture",
    image: "/images/iron-age.png"
  },
  { 
    id: "viking-age",
    year: "793-1066", 
    title: "Viking Age", 
    description: "Era of Norse expansion and exploration",
    image: "/images/viking-age.png"
  },
  { 
    id: "middle-ages",
    year: "1050-1523", 
    title: "Middle Ages", 
    description: "Formation of the Swedish Kingdom",
    image: "/images/middle-ages.png"
  },
  { 
    id: "vasa-era",
    year: "1523-1611", 
    title: "Vasa Era", 
    description: "Reign of the Vasa dynasty and Protestant Reformation",
    image: "/images/vasa-era.png"
  },
  { 
    id: "swedish-empire",
    year: "1611-1721", 
    title: "Swedish Empire", 
    description: "Period of great power status for Sweden",
    image: "/images/swedish-empire.png"
  },
  { 
    id: "age-of-liberty",
    year: "1718-1772", 
    title: "Age of Liberty", 
    description: "Era of increased parliamentary power",
    image: "/images/age-of-liberty.png"
  },
  { 
    id: "gustavian-era",
    year: "1772-1809", 
    title: "Gustavian Era", 
    description: "Enlightened absolutism under Gustav III",
    image: "/images/gustavian-era.png"
  },
  { 
    id: "swedish-norwegian-union",
    year: "1814-1905", 
    title: "Swedish-Norwegian Union", 
    description: "Personal union between Sweden and Norway",
    image: "/images/swedish-norwegian-union.png"
  },
  { 
    id: "industrialization",
    year: "1870-1914", 
    title: "Industrialization", 
    description: "Rapid industrial and economic growth",
    image: "/images/industrialization.png"
  },
  { 
    id: "modern-sweden",
    year: "1905-Present", 
    title: "Modern Sweden", 
    description: "Development of the modern welfare state",
    image: "/images/modern-sweden.png"
  },
];

const Timeline = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Swedish History Timeline</h1>
      <ScrollArea className="h-[calc(100vh-200px)] pr-4">
        <div className="relative">
          <div className="absolute left-9 top-0 h-full w-0.5 bg-gray-200"></div>
          {timelineEvents.map((event, index) => (
            <div key={index} className="mb-8 flex items-center">
              <div className="flex h-20 w-20 items-center justify-center rounded-full bg-blue-500 text-white text-xs text-center">
                {event.year}
              </div>
              <Link to={`/timeline/${event.id}`} className="ml-4 flex-1">
                <Card className="hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    <CardTitle>{event.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center space-x-4">
                      <img src={event.image} alt={event.title} className="w-24 h-24 object-cover rounded" />
                      <p>{event.description}</p>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            </div>
          ))}
        </div>
      </ScrollArea>
    </div>
  );
};

export default Timeline;