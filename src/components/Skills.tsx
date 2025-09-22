import { Brain, Code, Database, Smartphone, Cloud, Award } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const Skills = () => {
  const skillCategories = [
    {
      icon: Brain,
      title: "AI & Machine Learning",
      skills: [
        { name: "TensorFlow", level: 95 },
        { name: "PyTorch", level: 90 },
        { name: "OpenAI GPT", level: 88 },
        { name: "Computer Vision", level: 85 },
        { name: "NLP", level: 92 },
        { name: "Deep Learning", level: 90 }
      ]
    },
    {
      icon: Code,
      title: "Programming Languages",
      skills: [
        { name: "Python", level: 98 },
        { name: "JavaScript/TypeScript", level: 92 },
        { name: "Java", level: 85 },
        { name: "C++", level: 80 },
        { name: "Go", level: 75 },
        { name: "Rust", level: 70 }
      ]
    },
    {
      icon: Database,
      title: "Backend & Database",
      skills: [
        { name: "Node.js", level: 90 },
        { name: "MongoDB", level: 88 },
        { name: "PostgreSQL", level: 85 },
        { name: "Redis", level: 82 },
        { name: "GraphQL", level: 80 },
        { name: "Microservices", level: 88 }
      ]
    },
    {
      icon: Smartphone,
      title: "Frontend & Mobile",
      skills: [
        { name: "React/Next.js", level: 92 },
        { name: "React Native", level: 88 },
        { name: "Flutter", level: 85 },
        { name: "Vue.js", level: 80 },
        { name: "Tailwind CSS", level: 95 },
        { name: "Three.js", level: 75 }
      ]
    },
    {
      icon: Cloud,
      title: "Cloud & DevOps",
      skills: [
        { name: "AWS", level: 90 },
        { name: "Google Cloud", level: 85 },
        { name: "Docker", level: 88 },
        { name: "Kubernetes", level: 82 },
        { name: "CI/CD", level: 85 },
        { name: "Terraform", level: 78 }
      ]
    }
  ];

  const certifications = [
    {
      title: "IIT Delhi - AI & Data Science",
      issuer: "Indian Institute of Technology",
      year: "2023",
      level: "Advanced Certification"
    },
    {
      title: "IIM Bangalore - Tech Leadership",
      issuer: "Indian Institute of Management",
      year: "2022",
      level: "Executive Program"
    },
    {
      title: "MSME Technology Innovation",
      issuer: "Ministry of MSME, Govt. of India",
      year: "2023",
      level: "Excellence Award"
    },
    {
      title: "AWS Solutions Architect Professional",
      issuer: "Amazon Web Services",
      year: "2023",
      level: "Professional"
    },
    {
      title: "Google AI/ML Certification",
      issuer: "Google Cloud Platform",
      year: "2022",
      level: "Professional"
    },
    {
      title: "Microsoft Azure AI Engineer",
      issuer: "Microsoft Corporation",
      year: "2023",
      level: "Associate"
    }
  ];

  return (
    <section id="skills" className="py-20 section-padding">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Technical <span className="text-gradient">Expertise</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Comprehensive skill set spanning cutting-edge technologies and frameworks, 
            backed by prestigious certifications from leading institutions.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <Card key={index} className="card-premium">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <category.icon className="h-8 w-8 text-primary mr-3" />
                  <h3 className="text-xl font-semibold">{category.title}</h3>
                </div>
                <div className="space-y-4">
                  {category.skills.map((skill, idx) => (
                    <div key={idx}>
                      <div className="flex justify-between mb-2">
                        <span className="text-sm font-medium text-foreground">{skill.name}</span>
                        <span className="text-sm text-muted-foreground">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2">
                        <div 
                          className="bg-gradient-to-r from-primary to-accent h-2 rounded-full transition-all duration-1000 ease-out"
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Certifications */}
        <div className="bg-gradient-to-br from-card to-secondary/30 rounded-2xl p-8">
          <div className="flex items-center mb-8">
            <Award className="h-8 w-8 text-primary mr-3" />
            <h3 className="text-3xl font-bold text-gradient">Certifications & Recognition</h3>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <Card key={index} className="card-project group">
                <CardContent className="p-6">
                  <div className="mb-4">
                    <h4 className="font-semibold text-lg mb-2 text-foreground">{cert.title}</h4>
                    <p className="text-primary font-medium">{cert.issuer}</p>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="px-3 py-1 bg-accent/10 text-accent rounded-full text-sm font-medium">
                      {cert.level}
                    </span>
                    <span className="text-muted-foreground text-sm">{cert.year}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;