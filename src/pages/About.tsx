import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="container py-12">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold mb-8 text-center">About Me</h1>
          
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Hello, I'm a Developer</CardTitle>
              <CardDescription>Passionate about creating amazing digital experiences</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                I'm a passionate developer with experience in modern web technologies. 
                I love creating clean, efficient, and user-friendly applications that solve real-world problems.
              </p>
              <p className="text-muted-foreground">
                My journey in tech started several years ago, and I've been continuously learning 
                and growing my skills in various programming languages and frameworks.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Skills & Technologies</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                <div className="p-3 bg-muted rounded-lg text-center">React</div>
                <div className="p-3 bg-muted rounded-lg text-center">TypeScript</div>
                <div className="p-3 bg-muted rounded-lg text-center">JavaScript</div>
                <div className="p-3 bg-muted rounded-lg text-center">Node.js</div>
                <div className="p-3 bg-muted rounded-lg text-center">Tailwind CSS</div>
                <div className="p-3 bg-muted rounded-lg text-center">Git</div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default About;