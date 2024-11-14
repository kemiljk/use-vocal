import { Link } from "@nextui-org/link";

import { Button } from "@nextui-org/button";
import { EnvelopeIcon } from "@heroicons/react/24/solid";
import { TopCircleShape, BottomCircleShape } from "@/components/circle-shape";

export default function Home() {
  return (
    <section className="h-full w-full flex flex-col items-center justify-center place-content-center gap-8">
      <TopCircleShape className="absolute top-0 right-0 size-96 md:size-[500px] lg:size-[1024px] mix-blend-color-dodge opacity-5" />
      <BottomCircleShape className="absolute bottom-0 left-0 size-96 md:size-[300px] lg:size-[800px] blur-2xl mix-blend-color-dodge opacity-10" />
      <div className="inline-block max-w-4xl text-center justify-center">
        <h1 className="text-3xl md:text-5xl tracking-tight text-neutral-0">
          Vocal is a secure AI platform for multi-service care providers that
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary-400 to-primary-500 font-bold"> saves costs</span>, makes your team<span className="bg-clip-text text-transparent bg-gradient-to-r from-primary-400 to-primary-500 font-bold"> more productive</span> and gives you <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary-400 to-primary-500 font-bold"> compliance superpowers</span>
        </h1>
      </div>

      <div className="flex gap-3">
        <Button as={Link} isExternal variant="solid" size="lg" className="bg-primary-500" href={`mailto:rowan@usevocal.com?subject=I'm interested in Vocal`} startContent={<EnvelopeIcon width={16} />}>
          Talk to us
        </Button>
      </div>
    </section>
  );
}
