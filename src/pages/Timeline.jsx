import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const timelineEvents = [
  { year: "793-1066", title: "Viking Age", description: "Era of Norse expansion and exploration" },
  { year: "1050-1523", title: "Middle Ages", description: "Formation of the Swedish Kingdom" },
  { year: "1611-1721", title: "Swedish Empire", description: "Period of great power status for Sweden" },
  { year: "1718-1809", title: "Age of Liberty", description: "Era of increased parliamentary power" },
  { year: "1814-1905", title: "Swedish-Norwegian Union", description: "Personal union between Sweden and Norway" },
  { year: "1905-Present", title: "Modern Sweden", description: "Development of the modern welfare state" },
];

const Timeline = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Swedish History Timeline</h1>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {timelineEvents.map((event, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle>{event.year}</CardTitle>
            </CardHeader>
            <CardContent>
              <h3 className="text-lg font-semibold mb-2">{event.title}</h3>
              <p>{event.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Timeline;