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
import Logo from '../assets/CONSESNSU5-logo';
import roshambodle from '../assets/roshambodle.png';

function Consensu5() {
  return (
    <Card className="bg-emerald-800 text-white mt-4">
      <CardHeader className="text-xl">
        <CardTitle>
          <Logo />
        </CardTitle>
      </CardHeader>
      <CardContent className="text-sm">
        <div className="w-full flex flex-row">
          <div className="flex flex-col w-[70%]">
            <p className="pr-2">Wordle x Family Feud </p>
            <p>
              Guess the top 5 answers to the prompt before guessing 3 incorrect
              answers. Participate in surveys that'll be used in future games
            </p>

            <hr className="my-4 w-[80%]" />

            <h3 className="text-lg">Stack</h3>
            <ul className="list-disc ml-2">
              <li>Typescript</li>
              <li>React (Next.js)</li>
              <li>Tailwind CSS</li>
              <li>shadcn/ui</li>
              <li>tRPC</li>
              <li>zustand</li>
              <li>Prisma</li>
              <li>Vercel</li>
              <li>Supabase</li>
            </ul>
          </div>
          <img src={roshambodle} className="max-w-[200px]" />
        </div>
      </CardContent>
      <CardFooter>
        <Button
          className="bg-white text-emerald-800 hover:text-white"
          onClick={() => window.open('https://consensu5.com', '_blank')}
        >
          <ExternalLink size={24} className="mr-2 h-4 w-4" />
          Visit site
        </Button>
      </CardFooter>
    </Card>
  );
}

export default Consensu5;
