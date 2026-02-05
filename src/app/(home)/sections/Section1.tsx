import { HeaderBox } from '@/src/ui/HeaderBox';
import { faSmile, IconDefinition } from '@fortawesome/free-regular-svg-icons';
import { faBoltLightning, faGlobe, faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

type Info = {
  icon: IconDefinition;
  title: string;
  paragraph: string;
};

export const Section1 = () => {
  const info: Info[] = [
    {
      icon: faSmile,
      title: 'Thrilling Adventures',
      paragraph:
        'Embark on exciting escapades with Breakout Escapes. Our immersive experiences are designed to challenge your wits and keep you on the edge of your seat. Discover the thrill of our meticulously crafted adventures.',
    },
    {
      icon: faStar,
      title: 'Expert Guidance',
      paragraph:
        'Our team of experienced guides is here to ensure that your experience is seamless and unforgettable. From beginners to seasoned players, our experts will provide the support you need to conquer challenges and make memories.',
    },
    {
      icon: faGlobe,
      title: 'Immersive Storytelling',
      paragraph:
        'Engage with captivating narratives that transport you to different worlds. Our immersive storytelling techniques will make you feel like the hero of your own story. Immerse yourself in the magic of Breakout Escapes.',
    },
    {
      icon: faBoltLightning,
      title: 'Cutting-Edge Technology',
      paragraph:
        'Experience the future of entertainment with our state-of-the-art technology. We are dedicated to pushing boundaries and creating innovative experiences that will leave you in awe. Dive into a world where technology meets adventure.',
    },
  ];

  return (
    <section id="locations" className="flex justify-center w-full">
      <div className="flex flex-col items-center gap-20 w-full max-w-350 p-10">
        <HeaderBox header="GALT GAMES" subtitle="EST. 2015" facebookLink="/" instagramLink="/" />

        <div className="flex w-full pl-42 pb-20">
          <div className="grid grid-cols-2 gap-14">
            {info.map(({ icon, title, paragraph }) => (
              <div key={title} className="flex flex-col gap-2">
                <div className="flex items-center gap-4 text-2xl">
                  <FontAwesomeIcon icon={icon} className="text-brand" />
                  <span className="font-bold">{title}</span>
                </div>

                <p className="pl-12 pr-30">{paragraph}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
