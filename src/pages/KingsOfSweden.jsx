import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";

const kingsOfSweden = [
  {
    name: "Gustav I (Gustav Vasa)",
    reign: "1523-1560",
    description: "Founder of the Vasa dynasty and considered the father of modern Sweden."
  },
  {
    name: "Eric XIV",
    reign: "1560-1568",
    description: "Son of Gustav Vasa, known for his mental instability and eventual deposition."
  },
  {
    name: "John III",
    reign: "1568-1592",
    description: "Attempted to reconcile Catholicism and Lutheranism in Sweden."
  },
  {
    name: "Sigismund",
    reign: "1592-1599",
    description: "Also King of Poland, deposed from the Swedish throne due to his Catholicism."
  },
  {
    name: "Charles IX",
    reign: "1604-1611",
    description: "Youngest son of Gustav Vasa, established Lutheranism as the state religion."
  },
  {
    name: "Gustav II Adolf (Gustavus Adolphus)",
    reign: "1611-1632",
    description: "Known as the 'Lion of the North', led Sweden to military greatness during the Thirty Years' War."
  },
  {
    name: "Christina",
    reign: "1632-1654",
    description: "Daughter of Gustav II Adolf, abdicated and converted to Catholicism."
  },
  {
    name: "Charles X Gustav",
    reign: "1654-1660",
    description: "Expanded the Swedish Empire through successful military campaigns."
  },
  {
    name: "Charles XI",
    reign: "1660-1697",
    description: "Established absolute monarchy in Sweden and improved the country's economy."
  },
  {
    name: "Charles XII",
    reign: "1697-1718",
    description: "Known as the 'Swedish Meteor', his military campaigns led to the decline of the Swedish Empire."
  },
  {
    name: "Ulrika Eleonora",
    reign: "1718-1720",
    description: "Sister of Charles XII, abdicated in favor of her husband."
  },
  {
    name: "Frederick I",
    reign: "1720-1751",
    description: "First king of the Age of Liberty, with reduced monarchical power."
  },
  {
    name: "Adolf Frederick",
    reign: "1751-1771",
    description: "Known as the 'King of the Dumplings', had limited political influence."
  },
  {
    name: "Gustav III",
    reign: "1771-1792",
    description: "Enlightened despot who restored royal autocracy and was a patron of the arts."
  },
  {
    name: "Gustav IV Adolf",
    reign: "1792-1809",
    description: "Deposed after the loss of Finland to Russia."
  },
  {
    name: "Charles XIII",
    reign: "1809-1818",
    description: "Adopted Jean-Baptiste Bernadotte as heir due to lack of issue."
  },
  {
    name: "Charles XIV John (Karl Johan)",
    reign: "1818-1844",
    description: "Born Jean-Baptiste Bernadotte, founder of the current royal house of Sweden."
  },
  {
    name: "Oscar I",
    reign: "1844-1859",
    description: "Liberal monarch who initiated many reforms."
  },
  {
    name: "Charles XV",
    reign: "1859-1872",
    description: "Known as a champion of Scandinavism."
  },
  {
    name: "Oscar II",
    reign: "1872-1907",
    description: "Last king of the Swedish-Norwegian personal union."
  },
  {
    name: "Gustav V",
    reign: "1907-1950",
    description: "Reigned during both World Wars, maintaining Sweden's neutrality."
  },
  {
    name: "Gustav VI Adolf",
    reign: "1950-1973",
    description: "Known for his interest in archaeology and efforts to modernize the monarchy."
  },
  {
    name: "Carl XVI Gustaf",
    reign: "1973-present",
    description: "Current king of Sweden, known for his environmental advocacy."
  }
];

const KingsOfSweden = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredKings = kingsOfSweden.filter(king =>
    king.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    king.reign.includes(searchTerm) ||
    king.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Kings of Sweden</h1>
      <Input
        type="text"
        placeholder="Search kings..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="mb-6"
      />
      <ScrollArea className="h-[calc(100vh-250px)]">
        <div className="space-y-4">
          {filteredKings.map((king, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle>{king.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="font-semibold">Reign: {king.reign}</p>
                <p>{king.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </ScrollArea>
    </div>
  );
};

export default KingsOfSweden;