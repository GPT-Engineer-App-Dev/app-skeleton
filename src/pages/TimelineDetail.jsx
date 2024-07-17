import { useParams, Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

const timelineEvents = [
  { 
    id: "stone-age",
    year: "10000 BCE - 1700 BCE", 
    title: "Stone Age", 
    description: "The Stone Age in Sweden began around 10,000 BCE as the ice from the last glacial period retreated. Early hunter-gatherer societies gradually developed, leaving behind stone tools and rock carvings. This period saw the introduction of agriculture and the domestication of animals, leading to more settled communities.",
    image: "/images/stone-age.png"
  },
  { 
    id: "bronze-age",
    year: "1700 BCE - 500 BCE", 
    title: "Bronze Age", 
    description: "The Bronze Age in Sweden was characterized by the introduction of bronze tools and weapons, which revolutionized agriculture and warfare. This period saw the emergence of a more stratified society, with evidence of long-distance trade networks. Distinctive rock carvings and burial practices from this era provide insights into the beliefs and social structures of the time.",
    image: "/images/bronze-age.png"
  },
  { 
    id: "iron-age",
    year: "500 BCE - 800 CE", 
    title: "Iron Age", 
    description: "The Iron Age in Sweden marked the development of iron technology and the emergence of Norse culture. This period saw significant social and economic changes, including the formation of small kingdoms and the development of runic writing. The later part of this era overlaps with the beginning of the Viking Age.",
    image: "/images/iron-age.png"
  },
  { 
    id: "viking-age",
    year: "793-1066", 
    title: "Viking Age", 
    description: "The Viking Age was a period of Norse military, mercantile, and demographic expansion. Swedish Vikings, known as Varangians, mainly traveled east to Russia, Belarus, Ukraine, and the Byzantine Empire. This era saw the formation of trade networks, the foundation of Russia's first dynasty, and significant cultural exchanges.",
    image: "/images/viking-age.png"
  },
  { 
    id: "middle-ages",
    year: "1050-1523", 
    title: "Middle Ages", 
    description: "The Middle Ages in Sweden began with the country's Christianization and lasted until the coronation of Gustav Vasa. This period saw the consolidation of Sweden as a unified kingdom, the establishment of monasteries and churches, and the development of a feudal system. The Kalmar Union, uniting Sweden with Denmark and Norway, was a significant political development during this time.",
    image: "/images/middle-ages.png"
  },
  { 
    id: "vasa-era",
    year: "1523-1611", 
    title: "Vasa Era", 
    description: "The Vasa Era began with Gustav Vasa's coronation, marking Sweden's independence from the Kalmar Union. This period saw the Protestant Reformation in Sweden, the establishment of a hereditary monarchy, and the beginnings of Sweden's rise as a European power. The era was characterized by centralization of power and economic reforms.",
    image: "/images/vasa-era.png"
  },
  { 
    id: "swedish-empire",
    year: "1611-1721", 
    title: "Swedish Empire", 
    description: "The Swedish Empire was a great power in northern Europe and the Baltic region. Sweden's involvement in the Thirty Years' War led to significant territorial gains. This period, often called the 'Age of Greatness' (Stormaktstiden), saw Sweden control much of the Baltic region. The era ended with the Great Northern War and the death of Charles XII.",
    image: "/images/swedish-empire.png"
  },
  { 
    id: "age-of-liberty",
    year: "1718-1772", 
    title: "Age of Liberty", 
    description: "The Age of Liberty in Sweden was characterized by increased parliamentary power at the expense of the monarchy. This period saw the development of strong political parties (the Hats and Caps) and a flourishing of political debate. Despite its name, this era was marked by corruption and political instability.",
    image: "/images/age-of-liberty.png"
  },
  { 
    id: "gustavian-era",
    year: "1772-1809", 
    title: "Gustavian Era", 
    description: "The Gustavian Era, named after King Gustav III, saw a return to royal absolutism. Gustav III's coup d'état in 1772 ended the Age of Liberty. This period was characterized by enlightened absolutism, with the king promoting arts, literature, and science. The era ended with the Finnish War and the deposition of Gustav IV Adolf.",
    image: "/images/gustavian-era.png"
  },
  { 
    id: "swedish-norwegian-union",
    year: "1814-1905", 
    title: "Swedish-Norwegian Union", 
    description: "The Swedish–Norwegian Union was a personal union between the kingdoms of Sweden and Norway. While sharing a monarch, both countries maintained separate constitutions, laws, and institutions. The union was peacefully dissolved in 1905 following growing Norwegian nationalism and a desire for full independence.",
    image: "/images/swedish-norwegian-union.png"
  },
  { 
    id: "industrialization",
    year: "1870-1914", 
    title: "Industrialization", 
    description: "Sweden's industrialization period saw rapid economic and social changes. The country transformed from an agrarian economy to an industrial one, with significant growth in industries such as timber, mining, and engineering. This era also saw large-scale emigration to North America due to population growth and limited economic opportunities in rural areas.",
    image: "/images/industrialization.png"
  },
  { 
    id: "modern-sweden",
    year: "1905-Present", 
    title: "Modern Sweden", 
    description: "Modern Sweden emerged as a constitutional monarchy and parliamentary democracy. After remaining neutral during both World Wars, Sweden developed the 'Swedish Model' of welfare state. The country is known for its progressive social policies, commitment to sustainability, and innovative technology sector. Sweden joined the European Union in 1995 but remains outside the Eurozone.",
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