import { getProviders } from "next-auth/react";
import Image from "next/image";
import SignInButton from "@/components/UI/SignInButton";

export default async function signin() {
  const providers = await getProviders();
  return (
    <section className="lg:col-span-2 flex items-center justify-center space-x-7 ">
      <Image
        src="https://like4like.com/img/hero-x750.png"
        alt="instagram banner"
        width={448}
        height={448}
        style={{ height: "auto" }}
        placeholder="blur"
        blurDataURL="https://like4like.com/img/hero-x750.png"
        className="hidden md:inline-flex object-cover rotate-6"
      />
      <div className="flex flex-col items-center">
        <Image
          src="https://socodigital.com/wp-content/uploads/2021/03/Instagram-300x300.png"
          alt="instagram logo"
          width={128}
          height={128}
          style={{ height: "auto" }}
          placeholder="blur"
          blurDataURL="https://socodigital.com/wp-content/uploads/2021/03/Instagram-300x300.png"
          className="mb-10 object-cover"
        />
        <div className="text-center">
          <p className="italic text-sm mb-10">
            This app is created for learning purposes
          </p>
          {providers &&
            Object.values(providers).map((provider) => (
              <SignInButton key={provider.id} {...provider} />
            ))}
        </div>
      </div>
    </section>
  );
}
