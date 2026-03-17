"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowLeft, ArrowRight, X } from "lucide-react";

const photos = [
  {
    src: "/press-kit/2025-12-29-22-31-08-761.jpg",
    alt: "Sly'D live performance",
  },
  {
    src: "/press-kit/20250719_192423.jpg",
    alt: "Studio portrait",
  },
  {
    src: "/press-kit/1000019881.jpg",
    alt: "Urban portrait",
  },
  {
    src: "/press-kit/DSC01685.JPG",
    alt: "Club performance",
  },
];

export default function GalleryPage() {
  const [active, setActive] = useState<number | null>(null);

  const close = () => setActive(null);
  const next = () =>
    setActive((prev) => (prev! + 1) % photos.length);
  const prev = () =>
    setActive((prev) => (prev! - 1 + photos.length) % photos.length);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (active === null) return;
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [active]);

  return (
    <main className="min-h-screen bg-black text-white px-6 py-16">

      <div className="max-w-7xl mx-auto">

        {/* HEADER */}

        <div className="flex items-center justify-between mb-16">

          <div>
            <h1 className="text-5xl md:text-6xl font-black">
              Captured in Motion
            </h1>

            <p className="text-gray-400 mt-4 max-w-xl">
              A visual journey through performances, atmosphere and identity.
            </p>
          </div>

          <Link
            href="/"
            className="flex items-center gap-2 border px-5 py-3 rounded-full text-sm uppercase tracking-widest hover:bg-white hover:text-black transition"
          >
            <ArrowLeft size={18} />
            Back
          </Link>

        </div>

        {/* GRID */}

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">

          {photos.map((photo, index) => (
            <div
              key={photo.src}
              onClick={() => setActive(index)}
              className="cursor-pointer group overflow-hidden rounded-2xl border border-white/10"
            >
              <img
                src={photo.src}
                alt={photo.alt}
                className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
              />

              <div className="p-4 text-sm text-gray-400 uppercase tracking-widest border-t border-white/10">
                {photo.alt}
              </div>
            </div>
          ))}

        </div>

      </div>

      {/* LIGHTBOX */}

      {active !== null && (
        <div className="fixed inset-0 bg-black/95 flex items-center justify-center z-50">

          {/* CLOSE */}
          <button
            onClick={close}
            className="absolute top-6 right-6 border p-3 rounded-full hover:bg-white hover:text-black"
          >
            <X />
          </button>

          {/* LEFT */}
          <button
            onClick={prev}
            className="absolute left-6 top-1/2 -translate-y-1/2 border p-3 rounded-full hover:bg-white hover:text-black"
          >
            <ArrowLeft />
          </button>

          {/* IMAGE */}
          <img
            src={photos[active].src}
            className="max-h-[80vh] max-w-full object-contain"
          />

          {/* RIGHT */}
          <button
            onClick={next}
            className="absolute right-6 top-1/2 -translate-y-1/2 border p-3 rounded-full hover:bg-white hover:text-black"
          >
            <ArrowRight />
          </button>

        </div>
      )}

    </main>
  );
}
export default function Home() {
  return (
    <main className="bg-black text-white">

      {/* HERO SPLIT */}

      <section className="min-h-screen grid md:grid-cols-2">

        {/* LEFT */}

        <div className="flex flex-col justify-center px-10 py-20">

          <motion.div
            initial={{opacity:0,y:40}}
            animate={{opacity:1,y:0}}
            transition={{duration:0.8}}
          >
            <h1 className="text-6xl md:text-8xl font-black">
              DJ SLY<span className="text-red-600">'</span>D
            </h1>

            <h2 className="mt-2 text-xl uppercase tracking-[0.3em] text-gray-400">
              The Eclectic
            </h2>

            <p className="mt-6 text-gray-300 max-w-md">
              Hip-Hop • RnB • Afro • Baile Funk • Future Beats
            </p>

            <div className="flex gap-4 mt-10">
              <a
                href="#contact"
                className="bg-red-600 px-6 py-3 rounded-full text-sm uppercase tracking-widest hover:bg-red-700"
              >
                Booking
              </a>

              <Link
                href="/gallery"
                className="border px-6 py-3 rounded-full text-sm uppercase tracking-widest hover:bg-white hover:text-black"
              >
                Gallery
              </Link>
            </div>
          </motion.div>

          {/* STATS */}

          <div className="mt-16 grid grid-cols-3 gap-6 text-center">

            <div>
              <h3 className="text-3xl font-bold text-red-600">17+</h3>
              <p className="text-gray-400 text-sm mt-1">Years</p>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-red-600">INTL</h3>
              <p className="text-gray-400 text-sm mt-1">Bookings</p>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-red-600">Open</h3>
              <p className="text-gray-400 text-sm mt-1">Format</p>
            </div>

          </div>

        </div>

        {/* RIGHT IMAGE */}

        <div className="relative h-[60vh] md:h-full">
          <img
            src="/press-kit/2025-12-29-22-31-08-761.jpg"
            className="w-full h-full object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-l from-black via-black/30 to-transparent" />
        </div>

      </section>

      {/* ABOUT */}

      <section className="max-w-6xl mx-auto py-24 px-6">

        <h2 className="text-4xl font-black mb-8">
          About Me
        </h2>

        <p className="text-gray-300 leading-7 max-w-3xl">
          DJ SLY'D is a Paris-based DJ with over 17 years of experience.
          Known for his eclectic style, he blends hip-hop, RnB, afrobeat,
          baile funk and future beats to create high-energy sets.
          His ability to read the crowd and elevate the atmosphere
          makes every performance unique.
        </p>

      </section>

      {/* CLUBS */}

      <section className="bg-[#0a0a0a] py-24 px-6">

        <div className="max-w-6xl mx-auto">

          <h2 className="text-4xl font-black mb-12">
            Club Journey
          </h2>

          <div className="grid md:grid-cols-2 gap-12">

            <div>
              <h3 className="text-xl mb-4 flex gap-2">
                <MapPin /> France
              </h3>

              {france.map((club)=>(
                <div key={club} className="text-gray-300 mb-2">
                  {club}
                </div>
              ))}
            </div>

            <div>
              <h3 className="text-xl mb-4 flex gap-2">
                <Globe2 /> International
              </h3>

              {international.map((club)=>(
                <div key={club} className="text-gray-300 mb-2">
                  {club}
                </div>
              ))}
            </div>

          </div>

        </div>

      </section>

      {/* GALLERY */}

      <section className="max-w-7xl mx-auto py-24 px-6">

        <h2 className="text-4xl font-black mb-10">
          Captured in Motion
        </h2>

        <div className="grid md:grid-cols-2 gap-6">

          {photos.map((photo)=>(
            <Link key={photo} href="/gallery">
              <img
                src={photo}
                className="rounded-xl hover:scale-105 transition"
              />
            </Link>
          ))}

        </div>

      </section>

      {/* SOUNDCLOUD */}

      <section className="bg-[#0a0a0a] py-24 px-6 text-center">

        <h2 className="text-4xl font-black mb-6">
          SLY'D on SoundCloud
        </h2>

        <p className="text-gray-400 mb-8">
          Listen to SLY'D latest mixes and edits
        </p>

        <iframe
          width="100%"
          height="166"
          scrolling="no"
          frameBorder="no"
          allow="autoplay"
          src="https://w.soundcloud.com/player/?url=https%3A//soundcloud.com/dj-slyd"
        />

      </section>

      {/* SPOTIFY */}

      <section className="py-24 px-6 text-center">

        <h2 className="text-4xl font-black mb-6">
          SLY'D Spotify Playlists
        </h2>

        <p className="text-gray-400 mb-12">
          Discover curated vibes from club energy to smooth sessions
        </p>

        <div className="grid md:grid-cols-3 gap-6">

          <iframe src="https://open.spotify.com/embed/playlist/5ET5SEt2lhtNVE1qzukYnc" height="352" />
          <iframe src="https://open.spotify.com/embed/playlist/0cxc2fz6YHM3LXh4uxDuiS" height="352" />
          <iframe src="https://open.spotify.com/embed/playlist/1zz1Uo5vfJKrUAlxEp5zJ7" height="352" />

        </div>

      </section>

      {/* BRANDS */}

      <section className="bg-[#0a0a0a] py-24 px-6 text-center">

        <h2 className="text-4xl font-black mb-12">
          Collaborations
        </h2>

        <div className="grid md:grid-cols-4 gap-6">

          {brands.map((brand)=>(
            <div key={brand} className="border p-6 rounded-lg">
              {brand}
            </div>
          ))}

        </div>

      </section>

      {/* CONTACT */}

      <section id="contact" className="py-24 px-6 text-center">

        <h2 className="text-4xl font-black mb-10">
          Booking
        </h2>

        <div className="flex justify-center gap-6 flex-wrap">

          <a href="mailto:dj-slyd@hotmail.com" className="border px-6 py-3 rounded-lg">
            <Mail /> Email
          </a>

          <a href="tel:+33663907888" className="border px-6 py-3 rounded-lg">
            <Phone /> Phone
          </a>

          <a href="https://instagram.com/djslyd" className="border px-6 py-3 rounded-lg">
            <Instagram /> Instagram
          </a>

        </div>

      </section>

    </main>
  );
            }
