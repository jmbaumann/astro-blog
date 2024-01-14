import { ExternalLink } from 'lucide-react';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from './ui/card';
import { Button } from './ui/button';
import demoPic from '../assets/in-review-1.png';

function ThisSite() {
  return (
    <Card className="bg-emerald-800 text-white mt-4">
      <CardHeader className="text-xl">
        <CardTitle>This Site</CardTitle>
      </CardHeader>
      <CardContent className="text-sm">
        <div className="w-full flex flex-row">
          <div className="flex flex-col">
            <p className="pr-2">
              This is a website I built for Kinda Funny's In Review podcast. It
              serves as a hub for all of their episodes as well as allows users
              to rank the movies that they've reviewed & see how it compares to
              the group's rankings along with an average ranking from all users.
            </p>

            <hr className="my-4 w-full" />

            <div className="flex flex-row">
              <div className="ml-2">
                <h3 className="text-lg">Stack</h3>
                <ul className="list-disc ml-2">
                  <li>Typescript</li>
                  <li>Astro + React</li>
                  <li>Tailwind CSS</li>
                  <li>shadcn/ui</li>
                </ul>
              </div>
              <img
                src={demoPic}
                width={400}
                className="aspect-video ml-auto mr-2"
              />
            </div>
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <Button
          className="bg-white text-emerald-800 hover:text-white"
          onClick={() => window.open('https://jeremybaumann.me', '_blank')}
        >
          <ExternalLink size={24} className="mr-2 h-4 w-4" />
          Visit site
        </Button>
      </CardFooter>
    </Card>
  );
}

export default ThisSite;
