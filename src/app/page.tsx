'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Icon from '@mdi/react';
import { mdiInstagram, mdiFacebook, mdiTwitter, mdiLinkedin, mdiYoutube } from '@mdi/js';

export default function ComingSoon() {
  // Helper to calculate time difference
  const calculateTimeLeft = () => {
    const launchDate = new Date(Date.UTC(2025, 9, 1, 0, 0, 0)); // October 1, 2025, UTC (month is 0-indexed)
    const now = new Date();
    const difference = launchDate.getTime() - now.getTime();

    if (difference <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    return { days, hours, minutes, seconds };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const currentYear = new Date().getFullYear();

  // Helper to pad numbers (e.g., 5 → 05)
  const pad = (num: number) => String(num).padStart(2, '0');

  return (
    <section className="relative h-full lg:h-screen p-10 flex flex-col items-center justify-center bg-fixed bg-no-repeat bg-center bg-cover bg-white" id="home">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-16">
          <div className="flex-wrap flex items-center justify-center md:justify-start sm:hidden">
            <Link href="/">
              <Image src="/logo.svg" alt="Logo" width={150} height={48} className="h-12 w-auto" />
            </Link>
          </div>
          <div className="flex-wrap items-center justify-center sm:pt-2">
            <Image src="/slashrteam.svg" alt="Business" width={500} height={400} className="w-full" />
          </div>
          <div className="flex-wrap flex items-center justify-center md:justify-start">
            <Link href="/" className="mb-4 sm:block hidden">
              <Image src="/logo.svg" alt="Logo" width={150} height={48} className="h-12 w-auto" />
            </Link>
            <h1 className="text-3xl md:text-5xl/tight text-black tracking-normal leading-normal font-semibold md:text-start text-center mb-10 sm:mb-4">
              We&apos;re on the verge of our upcoming launch!
            </h1>
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-x-7 sm:gap-x-12 gap-y-6">
              {[
                { label: 'Days', value: timeLeft.days },
                { label: 'Hours', value: pad(timeLeft.hours) },
                { label: 'Minutes', value: pad(timeLeft.minutes) },
                { label: 'Seconds', value: pad(timeLeft.seconds) },
              ].map(({ label, value }) => (
                <div key={label} className="items-center rounded-lg text-[#2A6171] inline-flex flex-col">
                  <span className="text-3xl lg:text-5xl font-semibold">{value}</span>
                  <span className="text-base sm:text-xl mt-5">{label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="relative mt-16 sm:mt-24 lg:mt-20">
          <h6 className="text-xl text-black text-center mb-4">Follow Us:</h6>
          <ul className="flex flex-wrap justify-center items-center gap-3">
            {[
              { icon: mdiFacebook, href: '#' },
              { icon: mdiYoutube, href: '#' },
              { icon: mdiInstagram, href: '#' },
              { icon: mdiTwitter, href: '#' },
              { icon: mdiLinkedin, href: '#' },
            ].map(({ icon, href }, i) => (
              <li key={i}>
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
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
          <p className="text-base font-medium text-center text-black">
            Copyright © {currentYear} SlasHR, Inc. All rights reserved.
          </p>
        </div>
      </footer>
    </section>
  );
}