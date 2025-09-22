import { useState } from 'react';
import { Mail, Phone, MapPin, Send, Linkedin, Github, Youtube, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    toast({
      title: "Message sent successfully!",
      description: "I'll get back to you within 24 hours.",
    });
    setFormData({ name: '', email: '', company: '', message: '' });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "ansh.kumar@techmail.com",
      link: "mailto:ansh.kumar@techmail.com"
    },
    {
      icon: Phone,
      title: "Phone",
      value: "+91 98765 43210",
      link: "tel:+919876543210"
    },
    {
      icon: MapPin,
      title: "Location",
      value: "Bangalore, India",
      link: null
    }
  ];

  const socialLinks = [
    {
      icon: Linkedin,
      name: "LinkedIn",
      url: "https://linkedin.com/in/ansh-kumar-tech",
      handle: "@ansh-kumar-tech"
    },
    {
      icon: Github,
      name: "GitHub",
      url: "https://github.com/ansh-kumar",
      handle: "@ansh-kumar"
    },
    {
      icon: Youtube,
      name: "YouTube",
      url: "https://youtube.com/@ansh-tech-innovations",
      handle: "@ansh-tech-innovations"
    }
  ];

  return (
    <section id="contact" className="py-20 section-padding bg-gradient-to-br from-background to-secondary/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Let's Build <span className="text-gradient">Together</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Ready to discuss your next breakthrough project? I'm always excited to collaborate 
            with forward-thinking leaders and innovative teams.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="card-premium">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-6 text-gradient">Send me a message</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Input
                      name="name"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="bg-background/50 border-border focus:border-primary"
                    />
                  </div>
                  <div>
                    <Input
                      name="email"
                      type="email"
                      placeholder="Your Email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="bg-background/50 border-border focus:border-primary"
                    />
                  </div>
                </div>
                <div>
                  <Input
                    name="company"
                    placeholder="Company/Organization"
                    value={formData.company}
                    onChange={handleInputChange}
                    className="bg-background/50 border-border focus:border-primary"
                  />
                </div>
                <div>
                  <Textarea
                    name="message"
                    placeholder="Tell me about your project or idea..."
                    rows={5}
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    className="bg-background/50 border-border focus:border-primary resize-none"
                  />
                </div>
                <Button type="submit" className="btn-hero w-full group">
                  Send Message
                  <Send className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Contact Details */}
            <Card className="card-premium">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6 text-gradient">Get in touch</h3>
                <div className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <div key={index} className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                        <info.icon className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <div className="font-medium text-foreground">{info.title}</div>
                        {info.link ? (
                          <a 
                            href={info.link}
                            className="text-muted-foreground hover:text-primary transition-colors"
                          >
                            {info.value}
                          </a>
                        ) : (
                          <div className="text-muted-foreground">{info.value}</div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Social Media */}
            <Card className="card-premium">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6 text-gradient">Connect with me</h3>
                <div className="space-y-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-4 p-4 rounded-lg hover:bg-primary/10 transition-colors group"
                    >
                      <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20">
                        <social.icon className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <div className="font-medium text-foreground">{social.name}</div>
                        <div className="text-sm text-muted-foreground">{social.handle}</div>
                      </div>
                    </a>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Download Resources */}
            <Card className="card-premium">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6 text-gradient">Resources</h3>
                <div className="space-y-4">
                  <Button className="btn-executive w-full justify-start group">
                    <Download className="mr-3 h-5 w-5" />
                    <div className="text-left">
                      <div className="font-medium">Technical Resume</div>
                      <div className="text-sm text-muted-foreground">Detailed CV with projects</div>
                    </div>
                  </Button>
                  <Button className="btn-executive w-full justify-start group">
                    <Download className="mr-3 h-5 w-5" />
                    <div className="text-left">
                      <div className="font-medium">Pitch Deck</div>
                      <div className="text-sm text-muted-foreground">Innovation portfolio</div>
                    </div>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;