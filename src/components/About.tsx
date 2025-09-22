import { Brain, Shield, Smartphone, Target, Lightbulb, Rocket } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const About = () => {
  const highlights = [
    {
      icon: Brain,
      title: "AI Innovation",
      description: "Developed advanced AI systems including personal assistants and machine learning models"
    },
    {
      icon: Shield,
      title: "Cybersecurity",
      description: "Created sophisticated fraud detection systems protecting users from scams"
    },
    {
      icon: Smartphone,
      title: "Fintech Solutions",
      description: "Built secure, child-friendly payment platforms with parental controls"
    }
  ];

  const achievements = [
    {
      icon: Target,
      metric: "50+",
      label: "AI Models Deployed"
    },
    {
      icon: Lightbulb,
      metric: "15+",
      label: "Patent Applications"
    },
    {
      icon: Rocket,
      metric: "3",
      label: "Successful Startups"
    }
  ];

  return (
    <section id="about" className="py-20 section-padding">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Transforming Ideas Into <span className="text-gradient">Reality</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            I'm a passionate technologist with a proven track record of building AI-driven solutions 
            that solve complex real-world problems. My mission is to democratize artificial intelligence 
            and create technologies that make life better for everyone.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-center mb-16">
          {/* Vision Statement */}
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-gradient">Vision & Ambition</h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              To build the next generation of intelligent systems that seamlessly integrate into our daily lives. 
              I envision a future where AI enhances human capabilities without replacing human creativity and empathy.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              My goal is to lead breakthrough innovations in AI safety, accessibility, and practical applications 
              that create lasting positive impact on society.
            </p>
            <div className="flex flex-wrap gap-3">
              <span className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium">
                AI Safety Advocate
              </span>
              <span className="px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-medium">
                Innovation Leader
              </span>
              <span className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium">
                Tech Entrepreneur
              </span>
            </div>
          </div>

          {/* Key Achievements */}
          <div className="grid grid-cols-3 gap-4">
            {achievements.map((achievement, index) => (
              <Card key={index} className="card-premium text-center">
                <CardContent className="p-6">
                  <achievement.icon className="h-8 w-8 text-primary mx-auto mb-4" />
                  <div className="text-3xl font-bold text-gradient mb-2">
                    {achievement.metric}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {achievement.label}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Key Highlights */}
        <div className="grid md:grid-cols-3 gap-8">
          {highlights.map((highlight, index) => (
            <Card key={index} className="card-project">
              <CardContent className="p-8 text-center">
                <highlight.icon className="h-12 w-12 text-primary mx-auto mb-6" />
                <h3 className="text-xl font-semibold mb-4">{highlight.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {highlight.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;