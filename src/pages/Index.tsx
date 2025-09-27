import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { ArrowRight, Code, Palette, Zap } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-40 background">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6 text-white">
              Hi, I'm <span className="text-primary text-white">Rachel Coder</span>
            </h1>
            <p className="text-xl text-white mb-8">
              A passionate developer creating beautiful and functional web experiences.
            </p>
            <div className="flex gap-4 justify-center">
              <Button asChild size="lg">
                <Link to="/projects">
                  View My Work
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link to="/contact">Get In Touch</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-muted/50">
        <div className="container">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">What I Do</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card>
                <CardHeader className="text-center">
                  <Code className="w-12 h-12 mx-auto mb-4 text-primary" />
                  <CardTitle>Web Development</CardTitle>
                  <CardDescription>
                    Building responsive and interactive web applications using modern technologies
                  </CardDescription>
                </CardHeader>
              </Card>
              <Card>
                <CardHeader className="text-center">
                  <Palette className="w-12 h-12 mx-auto mb-4 text-primary" />
                  <CardTitle>UI/UX Design</CardTitle>
                  <CardDescription>
                    Creating beautiful and intuitive user interfaces that provide great user experiences
                  </CardDescription>
                </CardHeader>
              </Card>
              <Card>
                <CardHeader className="text-center">
                  <Zap className="w-12 h-12 mx-auto mb-4 text-primary" />
                  <CardTitle>Performance</CardTitle>
                  <CardDescription>
                    Optimizing applications for speed, accessibility, and seamless user interactions
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
