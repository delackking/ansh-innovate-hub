import { ArrowRight, Download, Mail, Github, Linkedin, Youtube } from 'lucide-react';
import { Button } from '@/components/ui/button';
import anshProfile from '@/assets/ansh-profile.jpg';

const Hero = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center section-padding pt-20">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                Tech <span className="text-gradient">Innovator</span>
                <br />
                Building Tomorrow
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                AI-driven solutions architect creating intelligent systems that solve real-world problems. 
                From Jarvis-like assistants to fraud detection AI, I transform complex challenges into 
                elegant technological solutions.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                onClick={() => scrollToSection('#projects')} 
                className="btn-hero group"
              >
                Explore My Work
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button className="btn-executive group">
                <Download className="mr-2 h-5 w-5" />
                Download Resume
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex space-x-6 pt-4">
              <a 
                href="mailto:ansh@example.com" 
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Email"
              >
                <Mail size={24} />
              </a>
              <a 
                href="https://linkedin.com/in/ansh-kumar" 
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={24} />
              </a>
              <a 
                href="https://github.com/ansh-kumar" 
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="GitHub"
              >
                <Github size={24} />
              </a>
              <a 
                href="https://youtube.com/@ansh-tech" 
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="YouTube"
              >
                <Youtube size={24} />
              </a>
            </div>
          </div>

          {/* Profile Image */}
          <div className="relative">
            <div className="relative z-10 animate-float">
              <img 
                src={anshProfile} 
                alt="Ansh Kumar - Tech Innovator" 
                className="rounded-2xl shadow-premium w-full max-w-md mx-auto"
              />
            </div>
            {/* Decorative Elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/20 rounded-full blur-xl animate-glow"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-accent/20 rounded-full blur-xl animate-glow"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;