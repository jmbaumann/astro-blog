import { ExternalLink } from 'lucide-react';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from './ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from './ui/carousel';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from './ui/dialog';

import { Button } from './ui/button';
import demoPic1 from '../assets/in-review-1.png';
import demoPic2 from '../assets/in-review-2.png';
import demoPic3 from '../assets/in-review-3.png';
import demoPic4 from '../assets/in-review-4.png';

function InReview() {
  return (
    <Card className="bg-emerald-800 text-white mt-4">
      <CardHeader className="text-xl">
        <CardTitle>Kinda Funny's In Review</CardTitle>
      </CardHeader>
      <CardContent className="text-sm">
        <div className="w-full flex flex-row">
          <div className="flex flex-col">
            <p className="pr-2">
              This is a website I built for{' '}
              <a
                href="https://podcasts.apple.com/us/podcast/in-review-movies-ranked-reviewed-recapped-a-kinda/id1579548228"
                className="underline"
              >
                Kinda Funny's In Review
              </a>{' '}
              podcast. It serves as a hub for all of their episodes as well as
              allows users to rank the movies that they've reviewed & see how it
              compares to the group's rankings along with an average ranking
              from all users.
            </p>

            <hr className="my-4 w-full" />

            <div className="flex flex-row">
              <div className="ml-2">
                <h3 className="text-lg">Stack</h3>
                <ul className="list-disc ml-2">
                  <li>Typescript</li>
                  <li>React (Next.js)</li>
                  <li>Tailwind CSS</li>
                  {/* <li>shadcn/ui</li> */}
                  <li>tRPC</li>
                  <li>Prisma</li>
                  <li>Vercel</li>
                  <li>PlanetScale</li>
                  <li>OMDb API</li>
                </ul>
              </div>
              <Carousel className="w-[400px] ml-auto mr-12">
                <CarouselContent>
                  <CarouselItem>
                    <img src={demoPic1} width={400} />
                  </CarouselItem>
                  <CarouselItem>
                    <img src={demoPic2} width={400} />
                  </CarouselItem>
                  <CarouselItem>
                    <img src={demoPic3} width={400} />
                  </CarouselItem>
                  <CarouselItem>
                    <img src={demoPic4} width={400} />
                  </CarouselItem>
                </CarouselContent>
                <CarouselPrevious className="text-black" />
                <CarouselNext className="text-black" />
              </Carousel>
            </div>
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <Button
          className="bg-white text-emerald-800 hover:text-white"
          onClick={() =>
            window.open('https://kindafunnyinreview.com', '_blank')
          }
        >
          <ExternalLink size={24} className="mr-2 h-4 w-4" />
          Visit site
        </Button>
      </CardFooter>
    </Card>
  );
}

export default InReview;
