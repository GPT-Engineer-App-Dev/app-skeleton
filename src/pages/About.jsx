const About = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-4">About Swedish History</h1>
      <p className="text-xl mb-6">
        Sweden has a long and diverse history, spanning from prehistoric times to the present day. 
        Key periods include the Viking Age, the formation of the Swedish Kingdom, the Swedish Empire, 
        and the development of modern Sweden as a neutral, prosperous nation.
      </p>
      <h2 className="text-2xl font-semibold mb-2">Key Historical Periods</h2>
      <ul className="list-disc list-inside space-y-2 mb-6">
        <li>Viking Age (793-1066 AD)</li>
        <li>Middle Ages and Kalmar Union (1050-1523)</li>
        <li>Swedish Empire (1611-1721)</li>
        <li>Age of Liberty and Gustavian era (1718-1809)</li>
        <li>Union between Sweden and Norway (1814-1905)</li>
        <li>Modern Sweden (20th century to present)</li>
      </ul>
      <p className="text-lg">
        Explore our timeline to dive deeper into these fascinating periods of Swedish history.
      </p>
    </div>
  );
};

export default About;