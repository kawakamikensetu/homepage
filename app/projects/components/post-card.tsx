import { cn } from "@/lib/utils";
import { ProjectGallery } from "@/types/homepage";
import Image from "next/image";

type InstagramIconProps = {
  className?: string;
  [key: string]: any;
};
const Instagram = ({ className, ...props }: InstagramIconProps) => (
  <svg
    stroke="currentColor"
    fill="currentColor"
    strokeWidth="0"
    viewBox="0 0 24 24"
    height="1em"
    width="1em"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    {...props}
  >
    <g>
      <path fill="none" d="M0 0h24v24H0z"></path>
      <path d="M12 2c2.717 0 3.056.01 4.122.06 1.065.05 1.79.217 2.428.465.66.254 1.216.598 1.772 1.153a4.908 4.908 0 0 1 1.153 1.772c.247.637.415 1.363.465 2.428.047 1.066.06 1.405.06 4.122 0 2.717-.01 3.056-.06 4.122-.05 1.065-.218 1.79-.465 2.428a4.883 4.883 0 0 1-1.153 1.772 4.915 4.915 0 0 1-1.772 1.153c-.637.247-1.363.415-2.428.465-1.066.047-1.405.06-4.122.06-2.717 0-3.056-.01-4.122-.06-1.065-.05-1.79-.218-2.428-.465a4.89 4.89 0 0 1-1.772-1.153 4.904 4.904 0 0 1-1.153-1.772c-.248-.637-.415-1.363-.465-2.428C2.013 15.056 2 14.717 2 12c0-2.717.01-3.056.06-4.122.05-1.066.217-1.79.465-2.428a4.88 4.88 0 0 1 1.153-1.772A4.897 4.897 0 0 1 5.45 2.525c.638-.248 1.362-.415 2.428-.465C8.944 2.013 9.283 2 12 2zm0 5a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm6.5-.25a1.25 1.25 0 0 0-2.5 0 1.25 1.25 0 0 0 2.5 0zM12 9a3 3 0 1 1 0 6 3 3 0 0 1 0-6z"></path>
    </g>
  </svg>
);

export const truncate = (str: string | null, length: number) => {
  if (!str || str.length <= length) return str;
  return `${str.slice(0, length - 3)}...`;
};

const Skeleton = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <div
      className={cn("animate-pulse rounded-md bg-primary/10", className)}
      {...props}
    />
  );
};

export const TweetSkeleton = ({
  className,
  ...props
}: {
  className?: string;
  [key: string]: any;
}) => (
  <div
    className={cn(
      "flex h-full max-h-max w-full min-w-[18rem] flex-col gap-2 rounded-lg border p-4",
      className
    )}
    {...props}
  >
    <div className="flex flex-row gap-2">
      <Skeleton className="h-10 w-10 shrink-0 rounded-full" />
      <Skeleton className="h-10 w-full" />
    </div>
    <Skeleton className="h-20 w-full" />
  </div>
);

export const TweetHeader = ({ tweet }: { tweet: any }) => (
  <div className="flex flex-row justify-between tracking-tight">
    <a href={tweet?.url} target="_blank" rel="noreferrer">
      <span className="sr-only">Link to instagram</span>
      <Instagram className="h-5 w-5 items-start text-[#E1306C] transition-all ease-in-out hover:scale-105" />
    </a>
  </div>
);

export const TweetBody = ({ tweet }: { tweet: ProjectGallery }) => (
  <div className="break-words leading-normal tracking-tighter">
    <span
      className="prose text-sm font-normal"
      dangerouslySetInnerHTML={{ __html: tweet.body }}
    />
  </div>
);

export const TweetMedia = ({ tweet }: { tweet: ProjectGallery }) => (
  <div className="flex flex-1 items-center justify-center">
    {/* {tweet?.video && (
      <video
        poster={tweet.video.poster}
        autoPlay
        loop
        muted
        playsInline
        className="rounded-xl border shadow-sm"
      >
        <source src={tweet.video.variants[0].src} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    )} */}
    {tweet.image.src && (
      <div className="relative aspect-video h-64 w-5/6 flex transform-gpu snap-x snap-mandatory gap-4 overflow-x-auto">
        <Image
          src={tweet.image.src}
          alt="実績"
          layout="fill"
          objectFit="cover"
          className="h-64 w-5/6 shrink-0 snap-center snap-always rounded-xl border object-cover shadow-sm"
        />
      </div>
    )}
  </div>
);

export const MagicTweet = ({
  post,
  className,
  ...props
}: {
  post: ProjectGallery;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "relative flex w-full max-w-2xl flex-col gap-2 overflow-hidden rounded-lg border p-4 backdrop-blur-md",
        className
      )}
      {...props}
    >
      <TweetHeader tweet={post} />
      <TweetBody tweet={post} />
      <TweetMedia tweet={post} />
    </div>
  );
};

export const PostCard = ({
  post,
  ...props
}: {
  post: ProjectGallery;
  className?: string;
}) => {
  return <MagicTweet post={post} {...props} />;
};
