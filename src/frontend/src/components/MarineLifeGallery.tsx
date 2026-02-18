const marineSpecies = [
  {
    name: 'Sea Turtles',
    image: '/assets/generated/sea-turtle.dim_800x600.png',
    status: 'Endangered',
    description: 'Ancient mariners facing threats from plastic pollution, fishing nets, and habitat loss. Seven species worldwide need our protection.',
  },
  {
    name: 'Coral Reefs',
    image: '/assets/generated/coral-reef.dim_800x600.png',
    status: 'Critically Threatened',
    description: 'The rainforests of the sea, supporting 25% of all marine life. Climate change and pollution are causing widespread bleaching.',
  },
  {
    name: 'Dolphins',
    image: '/assets/generated/dolphins.dim_800x600.png',
    status: 'Vulnerable',
    description: 'Intelligent and social creatures threatened by fishing practices, pollution, and habitat degradation in coastal waters.',
  },
  {
    name: 'Whales',
    image: '/assets/generated/whale.dim_800x600.png',
    status: 'Endangered',
    description: 'Majestic giants of the ocean facing threats from ship strikes, entanglement, and ocean noise pollution.',
  },
];

export default function MarineLifeGallery() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {marineSpecies.map((species, index) => (
        <div
          key={index}
          className="bg-card rounded-2xl overflow-hidden border border-border hover:shadow-ocean transition-all group"
        >
          <div className="relative h-64 overflow-hidden">
            <img
              src={species.image}
              alt={species.name}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute top-4 right-4">
              <span className={`px-4 py-2 rounded-full text-sm font-semibold ${
                species.status === 'Critically Threatened'
                  ? 'bg-destructive text-destructive-foreground'
                  : species.status === 'Endangered'
                  ? 'bg-destructive/80 text-destructive-foreground'
                  : 'bg-primary/80 text-primary-foreground'
              }`}>
                {species.status}
              </span>
            </div>
          </div>
          <div className="p-6">
            <h3 className="font-heading text-2xl font-semibold mb-3 text-foreground">
              {species.name}
            </h3>
            <p className="text-muted-foreground">
              {species.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
