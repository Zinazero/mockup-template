import Image from 'next/image';
import Link from 'next/link';
import logoData from '@/src/data/logo.json';

export const Packages = () => {
  return (
    <div className="bg-dark w-full flex flex-col items-center p-10 gap-10">
      <Image
        src={`/logo${logoData.fileExtension}`}
        alt="Logo"
        width={logoData.width}
        height={logoData.height}
        className="cursor-pointer w-40"
        draggable={false}
      />

      <div className="flex flex-col gap-10">
        <h2 className="text-light text-8xl font-bold px-20">PACKAGES</h2>
        <div className="flex w-full gap-4">
          {['Birthday Parties', 'Corporate Groups', 'Large Groups'].map((text) => (
            <Link
              key={text}
              href="/games"
              className="bg-light text-dark rounded-lg p-2 w-1/3 text-center hover:bg-brand-hover hover:text-light transition active:scale-95"
            >
              {text}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};
