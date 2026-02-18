import { AlertCircle, Droplets, Thermometer, Trash2, Fish, Anchor } from 'lucide-react';

export default function Conservation() {
  const threats = [
    {
      icon: Thermometer,
      title: 'Climate Change',
      description: 'Rising ocean temperatures are causing coral bleaching and disrupting marine ecosystems worldwide.',
    },
    {
      icon: Trash2,
      title: 'Ocean Pollution',
      description: 'Plastic waste and chemical pollutants are poisoning marine life and destroying habitats.',
    },
    {
      icon: Fish,
      title: 'Overfishing',
      description: 'Unsustainable fishing practices are depleting fish populations and disrupting food chains.',
    },
    {
      icon: Droplets,
      title: 'Ocean Acidification',
      description: 'Increased CO2 absorption is making oceans more acidic, threatening shell-forming organisms.',
    },
    {
      icon: Anchor,
      title: 'Habitat Destruction',
      description: 'Coastal development and destructive fishing methods are destroying critical marine habitats.',
    },
    {
      icon: AlertCircle,
      title: 'Species Extinction',
      description: 'Many marine species face extinction due to human activities and environmental changes.',
    },
  ];

  const solutions = [
    {
      title: 'Marine Protected Areas',
      description: 'Establishing and expanding protected zones where marine life can thrive without human interference.',
    },
    {
      title: 'Coral Reef Restoration',
      description: 'Active restoration projects to rebuild damaged coral reefs and support biodiversity.',
    },
    {
      title: 'Sustainable Fishing',
      description: 'Promoting responsible fishing practices and supporting communities in sustainable methods.',
    },
    {
      title: 'Pollution Reduction',
      description: 'Beach cleanups, plastic reduction initiatives, and advocacy for cleaner oceans.',
    },
  ];

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-primary/10 to-background py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-heading text-5xl md:text-6xl font-bold mb-6 text-foreground">
              Ocean Conservation
            </h1>
            <p className="text-xl text-muted-foreground">
              Understanding the challenges facing our oceans and the urgent need for action to protect marine life
            </p>
          </div>
        </div>
      </section>

      {/* The Crisis Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto mb-16">
            <h2 className="font-heading text-4xl font-bold mb-6 text-foreground">The Crisis We Face</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Our oceans cover 71% of Earth's surface and are home to 80% of all life on the planet. Yet, they face unprecedented threats from human activities. Marine ecosystems are collapsing at an alarming rate, with devastating consequences for both wildlife and humanity.
            </p>
            <div className="bg-destructive/10 border border-destructive/20 rounded-xl p-6">
              <div className="flex items-start gap-4">
                <AlertCircle className="w-6 h-6 text-destructive flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-lg mb-2 text-foreground">Urgent Action Needed</h3>
                  <p className="text-muted-foreground">
                    Scientists warn that without immediate action, we could lose up to 90% of coral reefs by 2050, and many marine species face extinction within our lifetime.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {threats.map((threat, index) => (
              <div
                key={index}
                className="bg-card p-6 rounded-xl border border-border hover:shadow-ocean transition-all"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <threat.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-heading text-xl font-semibold mb-3 text-foreground">{threat.title}</h3>
                <p className="text-muted-foreground">{threat.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto mb-16 text-center">
            <h2 className="font-heading text-4xl font-bold mb-6 text-foreground">Our Solutions</h2>
            <p className="text-lg text-muted-foreground">
              Through targeted conservation efforts and community engagement, we're making a real difference in protecting our oceans
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {solutions.map((solution, index) => (
              <div
                key={index}
                className="bg-card p-8 rounded-2xl border border-border hover:shadow-ocean transition-all"
              >
                <h3 className="font-heading text-2xl font-semibold mb-4 text-foreground">{solution.title}</h3>
                <p className="text-muted-foreground">{solution.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-heading text-4xl font-bold mb-8 text-foreground text-center">Why Your Support Matters</h2>
            
            <div className="space-y-6">
              <div className="bg-card p-6 rounded-xl border border-border">
                <h3 className="font-heading text-xl font-semibold mb-3 text-foreground">Protecting Biodiversity</h3>
                <p className="text-muted-foreground">
                  Marine ecosystems support incredible biodiversity. From microscopic plankton to massive whales, every species plays a crucial role in maintaining ocean health. Your donations help protect these vital ecosystems.
                </p>
              </div>

              <div className="bg-card p-6 rounded-xl border border-border">
                <h3 className="font-heading text-xl font-semibold mb-3 text-foreground">Supporting Coastal Communities</h3>
                <p className="text-muted-foreground">
                  Over 3 billion people depend on marine and coastal biodiversity for their livelihoods. By protecting our oceans, we're also supporting the communities that rely on them.
                </p>
              </div>

              <div className="bg-card p-6 rounded-xl border border-border">
                <h3 className="font-heading text-xl font-semibold mb-3 text-foreground">Fighting Climate Change</h3>
                <p className="text-muted-foreground">
                  Oceans absorb about 30% of carbon dioxide produced by humans. Healthy marine ecosystems are essential in the fight against climate change.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
