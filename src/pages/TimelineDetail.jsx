import { useParams, Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

const timelineEvents = [
  { 
    id: "viking-age",
    year: "793-1066", 
    title: "Viking Age", 
    description: "The Viking Age was a period in European history, especially Northern European and Scandinavian history, spanning the late 8th to late 11th centuries. Scandinavian (Norse) Vikings explored, raided, and traded throughout Europe, and reached North America. This period of Norse military, mercantile, and demographic expansion had a profound impact on the early medieval history of Scandinavia, the British Isles, France, Estonia, Kievan Rus', and Sicily.",
    image: "/images/viking-age.png"
  },
  { 
    id: "middle-ages",
    year: "1050-1523", 
    title: "Middle Ages", 
    description: "The Middle Ages in Sweden began around 1050 with the Christianization of the country and lasted until 1523 when Gustav Vasa became King, marking the foundation of modern Sweden. This period saw the gradual consolidation of Sweden as a unified kingdom, the rise of feudalism, and significant cultural and religious changes brought about by the influence of the Catholic Church.",
    image: "/images/middle-ages.png"
  },
  { 
    id: "swedish-empire",
    year: "1611-1721", 
    title: "Swedish Empire", 
    description: "The Swedish Empire was a European great power that exercised territorial control over much of the Baltic region during the 17th and early 18th centuries. At its height, the Empire encompassed modern Sweden, Finland, Estonia, Latvia, and parts of Norway, Denmark, and Germany. This period, often referred to as Sweden's Age of Greatness (Stormaktstiden), was characterized by Sweden's emergence as one of the most powerful countries in Europe.",
    image: "/images/swedish-empire.png"
  },
  { 
    id: "age-of-liberty",
    year: "1718-1809", 
    title: "Age of Liberty", 
    description: "The Age of Liberty in Sweden was a period of parliamentary governance and increased civil rights, lasting from 1719 to 1772. Following the death of Charles XII, Sweden's parliament (Riksdag) and council gained significant power, reducing the authority of the monarchy. This era saw the development of Sweden's first political parties, the Hats and Caps, and a flourishing of political debate and scientific advancement.",
    image: "/images/age-of-liberty.png"
  },
  { 
    id: "swedish-norwegian-union",
    year: "1814-1905", 
    title: "Swedish-Norwegian Union", 
    description: "The Swedish–Norwegian Union was a personal union between the kingdoms of Sweden and Norway from 1814 to 1905. Following the Napoleonic Wars, Norway was ceded from Denmark to Sweden. The union was peacefully dissolved in 1905 after growing Norwegian nationalism and desire for independence. Despite sharing a monarch, both countries maintained separate constitutions, laws, legislatures, administrations, state churches, armed forces, and currencies throughout the union.",
    image: "/images/swedish-norwegian-union.png"
  },
  { 
    id: "modern-sweden",
    year: "1905-Present", 
    title: "Modern Sweden", 
    description: "Modern Sweden emerged as a constitutional monarchy and parliamentary democracy in the early 20th century. After remaining neutral during both World Wars, Sweden developed a model of welfare state known as the 'Swedish Model', characterized by a high standard of living, extensive social benefits, and a strong emphasis on egalitarianism. Today, Sweden is known for its progressive social policies, commitment to sustainability, and innovative technology sector.",
    image: "/images/modern-sweden.png"
  },
];

const TimelineDetail = () => {
  const { id } = useParams();
  const event = timelineEvents.find(e => e.id === id);

  if (!event) {
    return <div>Event not found</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <Link to="/timeline">
        <Button variant="outline" className="mb-4">
          <ArrowLeft className="mr-2 h-4 w-4" /> Back to Timeline
        </Button>
      </Link>
      <h1 className="text-4xl font-bold mb-4">{event.title}</h1>
      <h2 className="text-2xl font-semibold mb-4">{event.year}</h2>
      <div className="flex flex-col md:flex-row gap-8">
        <img src={event.image} alt={event.title} className="w-full md:w-1/3 h-auto object-cover rounded-lg" />
        <div className="flex-1">
          <p className="text-lg mb-4">{event.description}</p>
        </div>
      </div>
    </div>
  );
};

export default TimelineDetail;