import { UnderlineHeader } from '@/src/components/UnderlineHeader';
import { ChooseLocation } from '@/src/ui/ChooseLocation';

export const Section1 = () => {
  return (
    <section className="flex justify-center w-full">
      <div className="flex flex-col items-center gap-10  w-full max-w-350 p-10 ">
        <h2>
          <UnderlineHeader text="LOCATIONS" level={2} svgClass="mb-4" />
        </h2>

        <div className="h-120 w-full">
          <ChooseLocation />
        </div>
      </div>
    </section>
  );
};
