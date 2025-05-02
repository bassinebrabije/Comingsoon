'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Icon from '@mdi/react';
import { mdiInstagram, mdiFacebook, mdiTwitter, mdiLinkedin, mdiYoutube } from '@mdi/js';


export default function ComingSoon() {
  const [timeLeft, setTimeLeft] = useState({
    days: 60,
    hours: 23,
    minutes: 59,
    seconds: 52
  });

  useEffect(() => {
    // Set the launch date (2 months from now)
    const launchDate = new Date();
    launchDate.setMonth(launchDate.getMonth() + 2);

    const timer = setInterval(() => {
      const now = new Date();
      const difference = launchDate.getTime() - now.getTime();

      if (difference <= 0) {
        clearInterval(timer);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(timer);
  }, []);


  const currentYear = new Date().getFullYear();

  return (
    <section className="relative h-full lg:h-screen p-10 flex flex-col items-center justify-center bg-fixed bg-no-repeat bg-center bg-cover bg-white" id="home">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-16">
          <div className="flex-wrap flex items-center justify-center md:justify-start sm:hidden ">
            <Link href="/" >
              <Image
                src="/logo.svg"
                alt="Logo"
                width={150}
                height={48}
                className="h-12 w-auto"
              />
            </Link>
          </div>
          <div className="flex-wrap items-center justify-center  sm:pt-2 ">
            <Image
              src="/slashrteam.svg"
              alt="Business"
              width={500}
              height={400}
              className="w-full"
            />
          </div>

          <div className="flex-wrap flex items-center justify-center md:justify-start">
            <Link href="/" className="mb-4 sm:block hidden">
              <Image
                src="/logo.svg"
                alt="Logo"
                width={150}
                height={48}
                className="h-12 w-auto"
              />
            </Link>
            <h1 className="text-3xl md:text-5xl/tight text-black tracking-normal leading-normal font-semibold md:text-start text-center mb-10 sm:mb-4">
              We&apos;re on the verge of our upcoming launch!
            </h1>
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-x-7 sm:gap-x-12 gap-y-6">
              <div className="items-center rounded-lg text-[#2A6171]  inline-flex flex-col">
                <span className="text-3xl lg:text-5xl font-semibold">{timeLeft.days}</span>
                <span className="text-base  sm:text-xl  mt-5">Days</span>
              </div>

              <div className="items-center rounded-lg text-[#2A6171]  inline-flex flex-col">
                <span className="text-3xl lg:text-5xl font-semibold">{timeLeft.hours}</span>
                <span className="text-base  sm:text-xl  mt-5">Hours</span>
              </div>

              <div className="items-center rounded-lg text-[#2A6171]  inline-flex flex-col">
                <span className="text-3xl lg:text-5xl font-semibold">{timeLeft.minutes}</span>
                <span className="text-base  sm:text-xl  mt-5">Minutes</span>
              </div>

              <div className="items-center rounded-lg text-[#2A6171] inline-flex flex-col">
                <span className="text-3xl lg:text-5xl font-semibold">{timeLeft.seconds}</span>
                <span className="text-base  sm:text-xl mt-5">Seconds</span>
              </div>
            </div>
          </div>
        </div>

        <div className="relative mt-16 sm:mt-24 lg:mt-20">
          <h6 className="text-xl text-black  text-center mb-4">Follow Us:</h6>
          <ul className="flex flex-wrap justify-center items-center gap-3">
            {[

              { icon: mdiFacebook, href: "#" },
              { icon: mdiYoutube, href: "#" },
              { icon: mdiInstagram, href: "#" },
              { icon: mdiTwitter, href: "#" },
              { icon: mdiLinkedin, href: "#" },
            ].map(({ icon, href }, i) => (
              <li key={i}>
                <a
                  href={href}
                  target="_blank"
                  className="h-12 w-12 bg-[#e7e8ea] hover:bg-[#2A6171] text-[#2A6171] hover:text-white inline-flex items-center justify-center backdrop-blur-2xl bg-dark/10 text-base rounded-xl transition-all duration-500"
                >
                  <Icon path={icon} size={1} color="currentColor" />
                </a>
              </li>
            ))}
          </ul>

        </div>
      </div>
      <footer className="lg:fixed bottom-0 start-0 end-0 py-7">
        <div className="container mx-auto">
          <p className="text-base font-medium text-center text-black ">
            Copyright © {currentYear} {' '}
            SlasHR, Inc. All rights reserved.
          </p>
        </div>
      </footer>
    </section>
  );
}