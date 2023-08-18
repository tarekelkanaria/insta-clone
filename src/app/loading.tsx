import Image from "next/image";

export default function loading() {
  return (
    <section className="lg:col-span-2 my-2 p-2 sm:my-10 sm:p-10 flex justify-center items-center">
      <Image
        src="https://socodigital.com/wp-content/uploads/2021/03/Instagram-300x300.png"
        alt="Instagram Logo"
        width={150}
        height={150}
        style={{ width: "auto" }}
        placeholder="blur"
        blurDataURL="https://socodigital.com/wp-content/uploads/2021/03/Instagram-300x300.png"
      />
    </section>
  );
}
