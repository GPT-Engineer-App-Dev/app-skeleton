import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";

const kingsOfSweden = [
  {
    name: "Erik Segersäll",
    reign: "c. 970-995",
    description: "First king to rule both the Swedes and the Geats."
  },
  {
    name: "Olof Skötkonung",
    reign: "c. 995-1022",
    description: "First Christian king of Sweden, considered the first king of a united Sweden."
  },
  {
    name: "Anund Jakob",
    reign: "1022-1050",
    description: "Son of Olof Skötkonung, known for his attempts to Christianize Sweden."
  },
  {
    name: "Emund den gamle",
    reign: "1050-1060",
    description: "Last king of the Munsö dynasty, had conflicts with the church."
  },
  {
    name: "Stenkil",
    reign: "1060-1066",
    description: "First king of the House of Stenkil, promoted Christianity."
  },
  {
    name: "Eric and Eric",
    reign: "1066-1067",
    description: "Co-rulers who fought each other, leading to both their deaths."
  },
  {
    name: "Halsten Stenkilsson",
    reign: "1067-1070, 1079-1084",
    description: "Son of Stenkil, ruled twice with interruptions."
  },
  {
    name: "Anund Gårdske",
    reign: "1070-1075",
    description: "Elected king but rejected for being pagan."
  },
  {
    name: "Håkan Röde",
    reign: "1075-1079",
    description: "Ruled briefly between Anund Gårdske and Halsten's second reign."
  },
  {
    name: "Inge the Elder",
    reign: "1079-1084, 1087-1105",
    description: "Brother of Halsten, known for his efforts to strengthen Christianity."
  },
  {
    name: "Blot-Sweyn",
    reign: "1084-1087",
    description: "Pagan king who briefly overthrew Inge the Elder."
  },
  {
    name: "Philip",
    reign: "1105-1118",
    description: "Son of Halsten Stenkilsson, co-ruled with Inge the Younger."
  },
  {
    name: "Inge the Younger",
    reign: "1105-1125",
    description: "Son of Halsten Stenkilsson, co-ruled with Philip and then alone."
  },
  {
    name: "Ragnvald Knaphövde",
    reign: "1125-1126",
    description: "Ruled briefly and was killed for not taking hostages in Västergötland."
  },
  {
    name: "Magnus the Strong",
    reign: "1125-1130",
    description: "Ruled in Götaland while Sverker I ruled in Svealand."
  },
  {
    name: "Sverker I",
    reign: "1130-1156",
    description: "First king of the House of Sverker, promoted monasticism."
  },
  {
    name: "Eric IX (Saint Eric)",
    reign: "1156-1160",
    description: "National saint of Sweden, known for his attempts to Christianize Finland."
  },
  {
    name: "Magnus Henriksson",
    reign: "1160-1161",
    description: "Killed Eric IX and briefly took the throne before being killed himself."
  },
  {
    name: "Charles VII",
    reign: "1161-1167",
    description: "Son of Sverker I, continued his father's support of the church."
  },
  {
    name: "Kol",
    reign: "1167-1173",
    description: "Son of Sverker I, little is known about his reign."
  },
  {
    name: "Canute I",
    reign: "1167-1196",
    description: "Son of Eric IX, engaged in power struggles with the Sverker dynasty."
  },
  {
    name: "Sverker II",
    reign: "1196-1208",
    description: "Son of Charles VII, continued dynastic struggles with the Eric dynasty."
  },
  {
    name: "Eric X",
    reign: "1208-1216",
    description: "Son of Canute I, defeated Sverker II in battle."
  },
  {
    name: "John I",
    reign: "1216-1222",
    description: "Son of Sverker II, last king of the House of Sverker."
  },
  {
    name: "Eric XI",
    reign: "1222-1229, 1234-1250",
    description: "Known as 'the Lisp and Lame', had two periods of rule."
  },
  {
    name: "Canute II",
    reign: "1229-1234",
    description: "Son of Holmger Knutsson, ruled between Eric XI's two reigns."
  },
  {
    name: "Valdemar",
    reign: "1250-1275",
    description: "Son of Birger Jarl, his reign saw the rise of the Folkunga dynasty."
  },
  {
    name: "Magnus III",
    reign: "1275-1290",
    description: "Known as 'Ladulås' (Barnlock), strengthened the monarchy and nobility."
  },
  {
    name: "Birger",
    reign: "1290-1318",
    description: "Son of Magnus III, involved in conflicts with his brothers."
  },
  {
    name: "Magnus IV",
    reign: "1319-1364",
    description: "Known as 'Eriksson', also King of Norway, his long reign ended in deposition."
  },
  {
    name: "Eric XII",
    reign: "1356-1359",
    description: "Son of Magnus IV, co-ruler with his father."
  },
  {
    name: "Albert",
    reign: "1364-1389",
    description: "Of Mecklenburg, deposed by Margaret I of Denmark."
  },
  {
    name: "Margaret",
    reign: "1389-1412",
    description: "Ruler of the Kalmar Union, uniting Sweden, Denmark, and Norway."
  },
  {
    name: "Eric of Pomerania",
    reign: "1396-1439",
    description: "Nephew of Margaret, ruler of the Kalmar Union."
  },
  {
    name: "Christopher of Bavaria",
    reign: "1441-1448",
    description: "Nephew of Eric of Pomerania, last ruler of the Kalmar Union to be recognized as king of Sweden."
  },
  {
    name: "Charles VIII",
    reign: "1448-1457, 1464-1465, 1467-1470",
    description: "Known as 'Knutsson', served three separate terms as king."
  },
  {
    name: "Christian I",
    reign: "1457-1464",
    description: "Of Denmark, ruled Sweden during one of Charles VIII's depositions."
  },
  {
    name: "John II",
    reign: "1497-1501",
    description: "Also King of Denmark and Norway, briefly restored the Kalmar Union."
  },
  {
    name: "Sten Sture the Elder",
    reign: "1470-1497, 1501-1503",
    description: "Regent of Sweden, effectively ruled as king without the title."
  },
  {
    name: "Svante Nilsson",
    reign: "1504-1512",
    description: "Regent of Sweden, continued resistance against Danish rule."
  },
  {
    name: "Sten Sture the Younger",
    reign: "1512-1520",
    description: "Last regent before the Stockholm Bloodbath."
  },
  {
    name: "Christian II",
    reign: "1520-1521",
    description: "Of Denmark, known for the Stockholm Bloodbath, which led to Swedish independence."
  },
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