import { useEffect } from 'react';
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';
import Contact from '@/components/Contact';

const Index = () => {
  useEffect(() => {
    // Update document title and meta description for SEO
    document.title = "Ansh Kumar - Tech Innovator & AI Solutions Architect";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        'content', 
        'Professional portfolio of Ansh Kumar, a leading tech innovator specializing in AI solutions, machine learning, and cutting-edge software development. Explore innovative projects including Jarvis AI assistant, fraud detection systems, and fintech solutions.'
      );
    }
  }, []);

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <Navigation />
      
      {/* Main Content */}
      <main>
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Contact />
      </main>
      
      {/* Footer */}
      <footer className="py-8 border-t border-border section-padding">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-muted-foreground mb-4 md:mb-0">
              © 2024 Ansh Kumar. All rights reserved.
            </div>
            <div className="text-muted-foreground">
              Built with passion for innovation and excellence
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;