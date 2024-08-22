import { cn } from "@/lib/utils";
interface BlobProps extends React.HTMLAttributes<HTMLDivElement> {
  firstBlobColor: string;
  secondBlobColor: string;
}

export default function BlurryBlob({
  className,
  firstBlobColor,
  secondBlobColor,
}: BlobProps) {
  return (
    <div className="min-w-52 mx-40 items-center justify-center">
      <div className="relative w-full max-w-lg">
        <div
          className={cn(
            "absolute overflow-auto hidden lg:block lg:-right-16 lg:-top-36 h-72 w-80 animate-pop-blob rounded-sm bg-blue-400 p-8 opacity-45 mix-blend-multiply blur-3xl filter",
            className,
            firstBlobColor
          )}
        ></div>
        <div
          className={cn(
            "absolute -left-40 -top-64 h-72 w-72 animate-pop-blob rounded-sm bg-purple-400 p-8 opacity-45 mix-blend-multiply blur-3xl filter",
            className,
            secondBlobColor
          )}
        ></div>
      </div>
    </div>
  );
}
