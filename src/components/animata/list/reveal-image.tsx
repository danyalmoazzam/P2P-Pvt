import { cn } from "@/lib/utils";
import Image from "next/image";

interface ImageSource {
  src: string;
  alt: string;
}

interface ShowImageListItemProps {
  text: string;
  images: [ImageSource, ImageSource];
}

function RevealImageListItem({ text, images }: ShowImageListItemProps) {
  const container = "absolute right-12 -top-8 z-40 h-28 w-24";
  const effect =
    "relative duration-500 delay-100 shadow-none group-hover:shadow-xl scale-0 group-hover:scale-100 opacity-0 group-hover:opacity-100 group-hover:w-full group-hover:h-full w-16 h-16 overflow-hidden transition-all rounded-md";

  return (
    <div className="group relative h-fit w-fit overflow-visible lg:py-7 py-3">
      <ul className="list-disc ml-16 lg:ml-24">
        <li className="text-4xl lg:text-6xl font-bold text-foreground transition-all duration-300 group-hover:opacity-40">
          {text}
        </li>
      </ul>
      <div className={container}>
        <div className={effect}>
          <img
            alt={images[1].alt}
            src={images[1].src}
            className="h-full w-full object-cover"
          />
        </div>
      </div>
      <div
        className={cn(
          container,
          "translate-x-0 translate-y-0 rotate-0 transition-all delay-150 duration-300 group-hover:translate-x-14 group-hover:translate-y-4 group-hover:rotate-12"
        )}
      >
        <div className={cn(effect, "duration-100")}>
          <img
            alt={images[0].alt}
            src={images[0].src}
            className="h-full w-full object-cover"
          />
        </div>
      </div>
    </div>
  );
}

export default function RevealImageList() {
  const items: ShowImageListItemProps[] = [
    {
      text: "NexSkill LMS",
      images: [
        {
          src: "/nexskill-100x100.webp",
          alt: "Image 1",
        },
        {
          src: "/nexskill-100x100.webp",
          alt: "Image 2",
        },
      ],
    },
    {
      text: "CRM Application",
      images: [
        {
          src: "/Navy-blue-Crm-100x100.png.webp",
          alt: "Image 1",
        },
        {
          src: "/Navy-blue-Crm-100x100.png.webp",
          alt: "Image 2",
        },
      ],
    },
    {
      text: "MS Future",
      images: [
        {
          src: "/ms_1-removebg-preview.png.webp",
          alt: "Image 1",
        },
        {
          src: "/ms_1-removebg-preview.png.webp",
          alt: "Image 2",
        },
      ],
    },
  ];
  return (
    <div className="flex relative flex-col gap-1 rounded-sm bg-background px-8 py-4">
      <Image
        className="lg:block hidden absolute lg:opacity-90 lg:-top-32 lg:-left-52 lg:mt-[12.5rem] lg:ml-[46.5rem] "
        src="/arrow.svg"
        width={65}
        height={65}
        alt="arrow"
      />
      <Image
        className="lg:block hidden absolute lg:opacity-90 lg:-top-1 lg:-left-24 lg:mt-[12.5rem] lg:ml-[46.5rem] "
        src="/arrow.svg"
        width={65}
        height={65}
        alt="arrow"
      />
      <Image
        className="lg:block hidden absolute lg:opacity-90 lg:top-32 lg:-left-72 lg:mt-[12.5rem] lg:ml-[46.5rem] "
        src="/arrow.svg"
        width={65}
        height={65}
        alt="arrow"
      />

      {items.map((item, index) => (
        <RevealImageListItem
          key={index}
          text={item.text}
          images={item.images}
        />
      ))}
    </div>
  );
}
