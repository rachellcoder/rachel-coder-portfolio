import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "E-commerce Platform",
      description: "A full-stack e-commerce solution built with React and Node.js",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      title: "Task Management App",
      description: "A collaborative task management application with real-time updates",
      technologies: ["React", "TypeScript", "Socket.io", "PostgreSQL"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      title: "Weather Dashboard",
      description: "A responsive weather dashboard with location-based forecasts",
      technologies: ["React", "API Integration", "Tailwind CSS"],
      liveUrl: "#",
      githubUrl: "#",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <div className="container py-12">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold mb-8 text-center">My Projects</h1>
          <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
            Here are some of the projects I've worked on. Each one represents a different 
            challenge and learning opportunity in my development journey.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <Card key={index} className="flex flex-col">
                <CardHeader>
                  <CardTitle>{project.title}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex-1 flex flex-col justify-between">
                  <div className="mb-4">
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-2 py-1 bg-muted text-muted-foreground text-sm rounded"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm" asChild>
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Live Demo
                      </a>
                    </Button>
                    <Button variant="outline" size="sm" asChild>
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="w-4 h-4 mr-2" />
                        Code
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;