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
import roshambodle from '../assets/roshambodle.png';

function Roshambodle() {
  return (
    <Card className="bg-emerald-800 text-white mt-4">
      <CardHeader className="text-xl">
        <CardTitle>roshambodle</CardTitle>
      </CardHeader>
      <CardContent className="text-sm">
        <div className="w-full flex flex-row">
          <div className="flex flex-col w-[70%]">
            <p>A daily game that challenges you to win Rock Paper Scissors</p>

            <hr className="my-4 w-[80%]" />

            <h3 className="text-lg">Stack</h3>
            <ul className="list-disc ml-2">
              <li>React (Next.js)</li>
              <li>Tailwind CSS</li>
            </ul>
          </div>
          <img src={roshambodle} className="max-w-[200px]" />
        </div>
      </CardContent>
      <CardFooter>
        <Button
          className="bg-white text-emerald-800 hover:text-white"
          onClick={() =>
            window.open('https://roshambodle.vercel.app', '_blank')
          }
        >
          <ExternalLink size={24} className="mr-2 h-4 w-4" />
          Visit site
        </Button>
      </CardFooter>
    </Card>
  );
}

export default Roshambodle;
