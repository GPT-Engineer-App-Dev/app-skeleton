import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";

const timelineEvents = [
  { 
    year: "793-1066", 
    title: "Viking Age", 
    description: "Era of Norse expansion and exploration",
    image: "/images/viking-age.png"
  },
  { 
    year: "1050-1523", 
    title: "Middle Ages", 
    description: "Formation of the Swedish Kingdom",
    image: "/images/middle-ages.png"
  },
  { 
    year: "1611-1721", 
    title: "Swedish Empire", 
    description: "Period of great power status for Sweden",
    image: "/images/swedish-empire.png"
  },
  { 
    year: "1718-1809", 
    title: "Age of Liberty", 
    description: "Era of increased parliamentary power",
    image: "/images/age-of-liberty.png"
  },
  { 
    year: "1814-1905", 
    title: "Swedish-Norwegian Union", 
    description: "Personal union between Sweden and Norway",
    image: "/images/swedish-norwegian-union.png"
  },
  { 
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
              <div className="flex h-20 w-20 items-center justify-center rounded-full bg-blue-500 text-white">
                {event.year}
              </div>
              <Card className="ml-4 flex-1">
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
            </div>
          ))}
        </div>
      </ScrollArea>
    </div>
  );
};

export default Timeline;