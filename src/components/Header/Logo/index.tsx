import Image from "next/image";
import Link from "next/link";

export default function Logo() {
  return (
    <>
      <li className="w-24 h-24 hidden lg:inline-flex">
        <Link href="/" className="block relative w-full h-full">
          <Image
            alt="Instagram logo"
            fill
            sizes="(min-width: 1024px) 6rem"
            priority={true}
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/800px-Instagram_logo.svg.png?20160616034027"
            className="object-contain"
          />
        </Link>
      </li>
      <li className="w-10 h-24 lg:hidden">
        <Link href="/" className="block relative w-full h-full">
          <Image
            alt="Instagram logo"
            fill
            sizes="(max-width: 1023px) 2.5rem"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Instagram_logo_2022.svg/1200px-Instagram_logo_2022.svg.png"
            className="object-contain"
          />
        </Link>
      </li>
    </>
  );
}
