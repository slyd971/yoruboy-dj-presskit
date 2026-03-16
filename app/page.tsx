"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Instagram,
  Mail,
  Phone,
  Music2,
  Globe2,
  MapPin,
  ChevronDown,
  ArrowUpRight,
  Disc3,
} from "lucide-react";

/* -------------------------------- */
/* DATA                             */
/* -------------------------------- */

const photos = [
  { src: "/press-kit/2025-12-29-22-31-08-761.jpg", alt: "Sly'D Live" },
  { src: "/press-kit/20250719_192423.jpg", alt: "Studio Portrait" },
  { src: "/press-kit/1000019881.jpg", alt: "Urban Portrait" },
  { src: "/press-kit/DSC01685.JPG", alt: "Performance" },
];

const france = [
  "Wanderlust",
  "Palais Maillot",
  "Deflower",
  "Mix Club",
  "Chez Régine",
  "Gypsy Twister",
  "Grey Club",
  "Café Barge",
];

const international = [
  "Singapore",
  "Manchester",
  "Zagreb",
  "Sion",
  "Berlin",
  "Miami",
];

const brands = ["Dior", "Foot Locker", "Airness", "Mouv' Radio"];

const spotifyPlaylists = [
  {
    title: "SLY'D Playlist 01",
    embedUrl:
      "https://open.spotify.com/embed/playlist/5ET5SEt2lhtNVE1qzukYnc",
  },
  {
    title: "SLY'D Playlist 02",
    embedUrl:
      "https://open.spotify.com/embed/playlist/0cxc2fz6YHM3LXh4uxDuiS",
  },
  {
    title: "SLY'D Playlist 03",
    embedUrl:
      "https://open.spotify.com/embed/playlist/1zz1Uo5vfJKrUAlxEp5zJ7",
  },
];

const reveal = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0 },
};

/* -------------------------------- */
/* PAGE                             */
/* -------------------------------- */

export default function Home() {
  return (
    <main className="bg-[#050505] text-white selection:bg-[#B51F24] selection:text-white">

      {/* ----------------------------- */}
      {/* NAVIGATION                    */}
      {/* ----------------------------- */}

      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-black/60 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

          <Link href="#home" className="flex items-center gap-3">
            <img
              src="/press-kit/logo-slyd.png"
              alt="Sly'D"
              className="h-10 w-auto"
            />
          </Link>

          <nav className="hidden md:flex items-center gap-6 text-xs uppercase tracking-[0.25em] text-white/70">
            <a href="#sound">Sound</a>
            <a href="#story">Story</a>
            <a href="#clubs">Clubs</a>
            <a href="#spotify">Spotify</a>
            <a href="#brands">Brands</a>
            <Link href="/gallery">Gallery</Link>
            <a href="#contact">Booking</a>
          </nav>

        </div>
      </header>


      {/* ----------------------------- */}
      {/* HERO                          */}
      {/* ----------------------------- */}

      <section id="home" className="relative flex min-h-screen items-center pt-28">

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(181,31,36,0.3),transparent_60%)]" />

        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-6 md:grid-cols-2">

          <motion.div
            initial="hidden"
            animate="show"
            variants={reveal}
            transition={{ duration: 0.8 }}
          >
            <img
              src="/press-kit/logo-slyd.png"
              alt="SLY'D"
              className="mb-6 h-20"
            />

            <h1 className="text-5xl font-black uppercase leading-tight md:text-7xl">
              The Sound
              <span className="block text-[#B51F24]">of SLY'D</span>
            </h1>

            <p className="mt-6 max-w-xl text-lg text-white/70">
              Hip-Hop, RnB, Afro, Baile Funk and Future Beats blended into
              high‑energy open format DJ sets built for nightlife, fashion
              events and premium brand experiences.
            </p>

            <div className="mt-8 flex gap-4">
              <a
                href="#contact"
                className="rounded-full bg-[#B51F24] px-6 py-3 text-sm uppercase tracking-[0.25em]"
              >
                Book SLY'D
              </a>

              <Link
                href="/gallery"
                className="rounded-full border border-white/20 px-6 py-3 text-sm uppercase tracking-[0.25em]"
              >
                Visuals
              </Link>
            </div>
          </motion.div>


          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <img
              src="/press-kit/2025-12-29-22-31-08-761.jpg"
              className="rounded-3xl object-cover"
            />
          </motion.div>

        </div>

        <a
          href="#story"
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-xs uppercase tracking-[0.3em] text-white/50"
        >
          Scroll
          <ChevronDown className="mx-auto mt-2" />
        </a>
      </section>


      {/* ----------------------------- */}
      {/* STORY / BIO                   */}
      {/* ----------------------------- */}

      <section id="story" className="mx-auto max-w-6xl px-6 py-32">

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={reveal}
        >

          <h2 className="mb-8 text-4xl font-black uppercase md:text-5xl">
            The Story
          </h2>

          <div className="space-y-6 text-lg text-white/75 leading-relaxed">

            <p>
              DJ SLY'D is a Paris‑based DJ known for energetic open format
              sets mixing hip‑hop, RnB, afrobeat, baile funk and club
              classics.
            </p>

            <p>
              Active for more than 17 years, he has built a reputation
              across the Paris nightlife scene while performing
              internationally and collaborating with brands and media
              platforms.
            </p>

            <p>
              His sets combine strong crowd reading, smooth transitions
              and a cultural approach to music selection, making every
              performance both explosive and curated.
            </p>

          </div>

        </motion.div>
      </section>


      {/* ----------------------------- */}
      {/* CLUBS                         */}
      {/* ----------------------------- */}

      <section id="clubs" className="bg-[#0a0a0a] py-32 px-6">

        <div className="mx-auto max-w-7xl grid md:grid-cols-2 gap-16">

          <div>
            <h3 className="text-3xl font-black uppercase mb-6">France</h3>

            <div className="grid grid-cols-2 gap-4 text-white/70">
              {france.map((club) => (
                <div key={club} className="border border-white/10 p-3 rounded-lg">
                  {club}
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-3xl font-black uppercase mb-6">International</h3>

            <div className="grid grid-cols-2 gap-4 text-white/70">
              {international.map((club) => (
                <div key={club} className="border border-white/10 p-3 rounded-lg">
                  {club}
                </div>
              ))}
            </div>

          </div>

        </div>
      </section>


      {/* ----------------------------- */}
      {/* SOUNDCLOUD                    */}
      {/* ----------------------------- */}

      <section id="sound" className="mx-auto max-w-6xl px-6 py-32">

        <h2 className="text-4xl font-black uppercase mb-10">
          Listen
        </h2>

        <iframe
          title="Sly'D SoundCloud"
          width="100%"
          height="166"
          scrolling="no"
          frameBorder="no"
          allow="autoplay"
          src="https://w.soundcloud.com/player/?url=https%3A//soundcloud.com/dj-slyd&color=%23b51f24"
        />

      </section>


      {/* ----------------------------- */}
      {/* SPOTIFY                       */}
      {/* ----------------------------- */}

      <section id="spotify" className="bg-[#0a0a0a] py-32 px-6">

        <div className="mx-auto max-w-7xl">

          <h2 className="text-4xl font-black uppercase mb-12">
            Playlist Universe
          </h2>

          <div className="grid md:grid-cols-3 gap-8">

            {spotifyPlaylists.map((playlist) => (

              <iframe
                key={playlist.title}
                src={playlist.embedUrl}
                width="100%"
                height="352"
                allow="autoplay; clipboard-write; encrypted-media"
                loading="lazy"
              />

            ))}

          </div>

        </div>

      </section>


      {/* ----------------------------- */}
      {/* BRANDS                        */}
      {/* ----------------------------- */}

      <section id="brands" className="mx-auto max-w-7xl px-6 py-32">

        <h2 className="text-4xl font-black uppercase mb-10">
          Selected Collaborations
        </h2>

        <div className="grid md:grid-cols-4 gap-6">

          {brands.map((brand) => (

            <div
              key={brand}
              className="border border-white/10 rounded-xl p-6 text-center text-xl font-bold uppercase"
            >
              {brand}
            </div>

          ))}

        </div>

      </section>


      {/* ----------------------------- */}
      {/* CONTACT                       */}
      {/* ----------------------------- */}

      <section id="contact" className="bg-black py-32 px-6 text-center">

        <h2 className="text-4xl font-black uppercase mb-10">
          Bookings & Inquiries
        </h2>

        <div className="flex flex-wrap justify-center gap-6">

          <a
            href="mailto:dj-slyd@hotmail.com"
            className="border px-6 py-4 rounded-xl"
          >
            <Mail />
          </a>

          <a
            href="tel:+33663907888"
            className="border px-6 py-4 rounded-xl"
          >
            <Phone />
          </a>

          <a
            href="https://instagram.com/djslyd"
            className="border px-6 py-4 rounded-xl"
          >
            <Instagram />
          </a>

        </div>

      </section>


    </main>
  );
}
