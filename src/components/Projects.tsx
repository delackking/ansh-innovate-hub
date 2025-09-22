import { ExternalLink, Github, Youtube } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import jarvisProject from '@/assets/jarvis-ai-project.jpg';
import scamDetectorProject from '@/assets/scam-detector-project.jpg';
import kidsUpiProject from '@/assets/kids-upi-project.jpg';

const Projects = () => {
  const projects = [
    {
      title: "JARVIS - AI Personal Assistant",
      description: "Advanced AI assistant with natural language processing, smart home integration, and predictive capabilities. Features voice recognition, contextual understanding, and seamless device control.",
      image: jarvisProject,
      techStack: ["Python", "TensorFlow", "OpenAI GPT", "Speech Recognition", "IoT Integration", "React"],
      demoLink: "https://demo.jarvis-ai.com",
      githubLink: "https://github.com/ansh-kumar/jarvis-ai",
      youtubeLink: "https://youtube.com/watch?v=jarvis-demo",
      highlights: ["90% accuracy in voice commands", "150+ smart home integrations", "Real-time learning capabilities"]
    },
    {
      title: "ScamShield - AI Fraud Detection",
      description: "Real-time fraud detection system using advanced machine learning to identify and prevent phone scams, phishing attempts, and fraudulent transactions with 99.2% accuracy.",
      image: scamDetectorProject,
      techStack: ["Python", "Scikit-learn", "NLP", "Real-time Analytics", "API Integration", "Machine Learning"],
      demoLink: "https://demo.scamshield.tech",
      githubLink: "https://github.com/ansh-kumar/scam-shield",
      youtubeLink: "https://youtube.com/watch?v=scamshield-demo",
      highlights: ["99.2% fraud detection accuracy", "Real-time threat analysis", "Protected 50K+ users"]
    },
    {
      title: "KidsPay - Safe UPI for Children",
      description: "Secure digital payment platform designed for children with comprehensive parental controls, spending limits, educational features, and transaction monitoring.",
      image: kidsUpiProject,
      techStack: ["React Native", "Node.js", "MongoDB", "UPI Integration", "Blockchain Security", "Parental Controls"],
      demoLink: "https://demo.kidspay.app",
      githubLink: "https://github.com/ansh-kumar/kids-pay",
      youtubeLink: "https://youtube.com/watch?v=kidspay-demo",
      highlights: ["Bank-grade security", "Educational gamification", "100K+ active young users"]
    }
  ];

  return (
    <section id="projects" className="py-20 section-padding bg-gradient-to-br from-background to-secondary/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Explore my portfolio of innovative AI solutions that have transformed industries 
            and created meaningful impact for users worldwide.
          </p>
        </div>

        <div className="grid lg:grid-cols-1 gap-16">
          {projects.map((project, index) => (
            <Card key={index} className="card-project overflow-hidden group">
              <div className={`grid lg:grid-cols-2 gap-8 ${index % 2 === 1 ? 'lg:grid-flow-dense' : ''}`}>
                {/* Project Image */}
                <div className={`relative ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-80 lg:h-full object-cover rounded-lg group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent rounded-lg"></div>
                </div>

                {/* Project Details */}
                <CardContent className={`p-8 flex flex-col justify-center ${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                  <h3 className="text-3xl font-bold mb-4 text-gradient">
                    {project.title}
                  </h3>
                  <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Key Highlights */}
                  <div className="mb-6">
                    <h4 className="font-semibold mb-3 text-foreground">Key Achievements:</h4>
                    <ul className="space-y-2">
                      {project.highlights.map((highlight, idx) => (
                        <li key={idx} className="flex items-center text-muted-foreground">
                          <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Tech Stack */}
                  <div className="mb-6">
                    <h4 className="font-semibold mb-3 text-foreground">Technology Stack:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.techStack.map((tech, idx) => (
                        <span 
                          key={idx}
                          className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-wrap gap-4">
                    <Button className="btn-hero group">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Live Demo
                    </Button>
                    <Button className="btn-executive">
                      <Github className="mr-2 h-4 w-4" />
                      Source Code
                    </Button>
                    <Button className="btn-executive">
                      <Youtube className="mr-2 h-4 w-4" />
                      Video Demo
                    </Button>
                  </div>
                </CardContent>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;