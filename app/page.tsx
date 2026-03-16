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

const photos = [
  {
    src: "/press-kit/2025-12-29-22-31-08-761.jpg",
    alt: "Sly'D behind the decks",
    size: "md:col-span-2 md:row-span-2",
  },
  {
    src: "/press-kit/20250719_192423.jpg",
    alt: "Studio portrait",
    size: "md:col-span-1",
  },
  {
    src: "/press-kit/1000019881.jpg",
    alt: "Urban portrait",
    size: "md:col-span-1",
  },
  {
    src: "/press-kit/DSC01685.JPG",
    alt: "Live performance",
    size: "md:col-span-2",
  },
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
  hidden: { opacity: 0, y: 35 },
  show: { opacity: 1, y: 0 },
};

export default function Home() {
  return (
    <main className="bg-[#050505] text-white selection:bg-[#B51F24] selection:text-white">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-black/55 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 md:px-6">
          <Link href="#home" className="flex items-center gap-3">
            <img
              src="/press-kit/logo-slyd.png"
              alt="Sly'D logo"
              className="h-10 w-auto md:h-12"
            />
            <div className="hidden text-[11px] uppercase tracking-[0.28em] text-white/50 md:block">
              DJ • Producer • International Energy
            </div>
          </Link>

          <nav className="hidden items-center gap-6 text-xs font-medium uppercase tracking-[0.24em] text-white/70 md:flex">
            <a href="#about" className="transition hover:text-white">About</a>
            <a href="#clubs" className="transition hover:text-white">Clubs</a>
            <a href="#sound" className="transition hover:text-white">Sound</a>
            <Link href="/gallery" className="transition hover:text-white">Gallery</Link>
            <a href="#spotify" className="transition hover:text-white">Spotify</a>
            <a href="#contact" className="transition hover:text-white">Contact</a>
          </nav>

          <a
            href="#contact"
            className="rounded-full border border-[#B51F24]/40 bg-[#B51F24] px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-white transition hover:scale-[1.02] hover:bg-[#c52227]"
          >
            Booking
          </a>
        </div>
      </header>

      <section
        id="home"
        className="relative isolate flex min-h-screen items-center overflow-hidden pt-28 md:pt-32"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(181,31,36,0.25),transparent_35%),radial-gradient(circle_at_20%_50%,rgba(255,255,255,0.06),transparent_30%),radial-gradient(circle_at_80%_80%,rgba(181,31,36,0.16),transparent_28%)]" />
        <div className="absolute inset-0 opacity-20 [background-image:linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] [background-size:40px_40px]" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black" />

        <div className="mx-auto grid w-full max-w-7xl items-center gap-10 px-4 pb-16 md:grid-cols-[1.05fr_0.95fr] md:px-6 md:pb-24">
          <motion.div
            initial="hidden"
            animate="show"
            variants={reveal}
            transition={{ duration: 0.7 }}
            className="relative z-10"
          >
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-[11px] uppercase tracking-[0.28em] text-white/70 backdrop-blur-sm">
              <Disc3 className="h-3.5 w-3.5 text-[#B51F24]" />
              Press kit cinematic experience
            </div>

            <img
              src="/press-kit/logo-slyd.png"
              alt="Sly'D signature logo"
              className="mb-5 h-16 w-auto md:h-24"
            />

            <h1 className="max-w-4xl text-5xl font-black uppercase leading-[0.88] tracking-tight md:text-7xl xl:text-[7rem]">
              DJ energy
              <span className="mt-2 block text-[#B51F24]">the eclectic</span>
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-7 text-white/72 md:text-lg">
              Hip-hop, RnB, afro, baile funk, future beats and club-ready transitions. A premium open-format identity designed for nightlife, lifestyle events and high-energy bookings.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#contact"
                className="rounded-full bg-[#B51F24] px-6 py-3 text-sm font-semibold uppercase tracking-[0.22em] text-white transition hover:-translate-y-0.5"
              >
                Book now
              </a>
              <Link
                href="/gallery"
                className="rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold uppercase tracking-[0.22em] text-white transition hover:border-white/30 hover:bg-white/10"
              >
                Open gallery
              </Link>
            </div>

            <div className="mt-10 grid gap-4 md:grid-cols-3">
              <div className="rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm">
                <div className="text-xl font-black uppercase text-[#B51F24] md:text-2xl">17+</div>
                <div className="mt-2 text-sm uppercase tracking-[0.18em] text-white/55">years of career</div>
              </div>
              <div className="rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm">
                <div className="text-xl font-black uppercase text-[#B51F24] md:text-2xl">FR + INTL</div>
                <div className="mt-2 text-sm uppercase tracking-[0.18em] text-white/55">bookings</div>
              </div>
              <div className="rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm">
                <div className="text-xl font-black uppercase text-[#B51F24] md:text-2xl">Open Format</div>
                <div className="mt-2 text-sm uppercase tracking-[0.18em] text-white/55">signature sound</div>
              </div>
            </div>

            <a href="#about" className="mt-10 inline-flex items-center gap-2 text-xs uppercase tracking-[0.28em] text-white/45 transition hover:text-white/80">
              Scroll the experience
              <ChevronDown className="h-4 w-4" />
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="relative"
          >
            <div className="absolute -left-8 top-12 h-32 w-32 rounded-full bg-[#B51F24]/25 blur-3xl" />
            <div className="absolute -right-6 bottom-8 h-40 w-40 rounded-full bg-white/10 blur-3xl" />

            <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 p-3 shadow-2xl shadow-black/40 backdrop-blur-sm">
              <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-transparent to-transparent" />
              <img
                src="/press-kit/2025-12-29-22-31-08-761.jpg"
                alt="Sly'D hero"
                className="h-[68svh] w-full rounded-[1.4rem] object-cover object-center md:h-[76svh]"
              />
              <div className="absolute inset-x-8 bottom-8 rounded-[1.5rem] border border-white/10 bg-black/45 p-5 backdrop-blur-md">
                <div className="text-[11px] uppercase tracking-[0.28em] text-[#ff7a7e]">DJ • Producer • Curator</div>
                <div className="mt-2 text-2xl font-black uppercase md:text-3xl">Paris to international stages</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <motion.section
        id="about"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        variants={reveal}
        transition={{ duration: 0.7 }}
        className="relative mx-auto max-w-7xl px-4 py-24 md:px-6 md:py-32"
      >
        <div className="grid gap-12 md:grid-cols-[0.85fr_1.15fr] md:gap-16">
          <div>
            <div className="mb-4 text-xs font-semibold uppercase tracking-[0.35em] text-[#B51F24]">About</div>
            <h2 className="text-3xl font-black uppercase leading-tight md:text-5xl">
              Cinematic presence. Club precision. Premium atmosphere.
            </h2>
          </div>

          <div className="space-y-6 text-base leading-7 text-white/75">
            <p>
              SLY'D builds high-impact sets across hip-hop, RnB, afrobeat, baile funk, future beats and Caribbean influences, with smooth transitions and a strong sense of crowd reading.
            </p>
            <p>
              From Paris to international dates, the project sits between nightlife culture, curated events and elevated party experiences.
            </p>
            <p>
              The vision is simple: make the room move fast, keep the energy premium, and turn every booking into a real musical moment.
            </p>
          </div>
        </div>
      </motion.section>

      <section id="clubs" className="relative overflow-hidden border-y border-white/8 bg-white/[0.03] py-24 md:py-32">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(181,31,36,0.18),transparent_25%)]" />
        <div className="relative mx-auto max-w-7xl px-4 md:px-6">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            variants={reveal}
            className="mb-12 flex flex-col gap-5 md:flex-row md:items-end md:justify-between"
          >
            <div>
              <div className="mb-4 text-xs font-semibold uppercase tracking-[0.35em] text-[#B51F24]">Club journey</div>
              <h2 className="text-3xl font-black uppercase md:text-5xl">Animated club section</h2>
            </div>
            <div className="max-w-xl text-sm leading-6 text-white/65 md:text-base">
              France and international references displayed as moving premium cards with a nightlife-inspired rhythm.
            </div>
          </motion.div>

          <div className="grid gap-6 md:grid-cols-2">
            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.15 }}
              variants={reveal}
              className="rounded-[2rem] border border-white/10 bg-black/40 p-7 backdrop-blur-sm"
            >
              <div className="mb-6 flex items-center gap-3">
                <MapPin className="h-5 w-5 text-[#B51F24]" />
                <h3 className="text-2xl font-black uppercase">France</h3>
              </div>
              <div className="grid gap-3 md:grid-cols-2">
                {france.map((club, index) => (
                  <motion.div
                    key={club}
                    initial={{ opacity: 0, y: 18 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    className="rounded-2xl border border-white/8 bg-white/[0.03] px-4 py-3 text-sm uppercase tracking-[0.1em] text-white/85 transition hover:-translate-y-1 hover:border-[#B51F24]/40 hover:bg-white/[0.06]"
                  >
                    {club}
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.15 }}
              variants={reveal}
              transition={{ delay: 0.08 }}
              className="rounded-[2rem] border border-white/10 bg-black/40 p-7 backdrop-blur-sm"
            >
              <div className="mb-6 flex items-center gap-3">
                <Globe2 className="h-5 w-5 text-[#B51F24]" />
                <h3 className="text-2xl font-black uppercase">International</h3>
              </div>
              <div className="grid gap-3 md:grid-cols-2">
                {international.map((club, index) => (
                  <motion.div
                    key={club}
                    initial={{ opacity: 0, y: 18 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    className="rounded-2xl border border-white/8 bg-white/[0.03] px-4 py-3 text-sm uppercase tracking-[0.1em] text-white/85 transition hover:-translate-y-1 hover:border-[#B51F24]/40 hover:bg-white/[0.06]"
                  >
                    {club}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section id="gallery" className="mx-auto max-w-7xl px-4 py-24 md:px-6 md:py-32">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={reveal}
          className="mb-12 flex flex-col gap-5 md:flex-row md:items-end md:justify-between"
        >
          <div>
            <div className="mb-4 text-xs font-semibold uppercase tracking-[0.35em] text-[#B51F24]">Gallery</div>
            <h2 className="text-3xl font-black uppercase md:text-5xl">Clickable visual grid</h2>
          </div>
          <Link href="/gallery" className="inline-flex items-center gap-2 text-sm uppercase tracking-[0.22em] text-white/70 transition hover:text-white">
            Open full gallery <ArrowUpRight className="h-4 w-4" />
          </Link>
        </motion.div>

        <div className="grid auto-rows-[260px] grid-cols-1 gap-4 md:grid-cols-4 md:auto-rows-[220px]">
          {photos.map((photo, index) => (
            <motion.div
              key={photo.src}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.18 }}
              transition={{ duration: 0.55, delay: index * 0.06 }}
              className={`${photo.size}`}
            >
              <Link href="/gallery" className="group relative block h-full overflow-hidden rounded-[2rem] border border-white/10 bg-white/5">
                <img
                  src={photo.src}
                  alt={photo.alt}
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                <div className="absolute inset-x-4 bottom-4 flex items-end justify-between gap-4">
                  <div className="text-sm font-medium uppercase tracking-[0.2em] text-white/88">{photo.alt}</div>
                  <div className="rounded-full border border-white/15 bg-black/35 p-2 backdrop-blur-sm">
                    <ArrowUpRight className="h-4 w-4 text-white/85" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      <section id="sound" className="border-y border-white/8 bg-[#090909] px-4 py-24 md:px-6 md:py-32">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={reveal}
          className="mx-auto max-w-7xl"
        >
          <div className="mb-10 text-xs font-semibold uppercase tracking-[0.35em] text-[#B51F24]">Sound</div>
          <div className="grid gap-8 md:grid-cols-[0.9fr_1.1fr] md:items-center">
            <div>
              <h2 className="text-3xl font-black uppercase leading-tight md:text-5xl">
                Integrated SoundCloud player
              </h2>
              <p className="mt-5 max-w-xl text-base leading-7 text-white/68">
                Add your latest mixes, edits or live recordings directly on the site to turn the press kit into a real listening experience.
              </p>
            </div>

            <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 p-3 backdrop-blur-sm">
              <iframe
  title="Sly'D SoundCloud Player"
  width="100%"
  height="166"
  scrolling="no"
  frameBorder="no"
  allow="autoplay"
  src="https://w.soundcloud.com/player/?url=https%3A//soundcloud.com/dj-slyd&color=%23b51f24&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"
  className="rounded-2xl"
/>
            </div>
          </div>
        </motion.div>
      </section>

      <section id="spotify" className="border-y border-white/8 bg-[#070707] px-4 py-24 md:px-6 md:py-32">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={reveal}
          className="mx-auto max-w-7xl"
        >
          <div className="mb-12 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
            <div>
              <div className="mb-4 text-xs font-semibold uppercase tracking-[0.35em] text-[#B51F24]">Spotify</div>
              <h2 className="text-3xl font-black uppercase md:text-5xl">Playlist selection</h2>
            </div>
            <div className="max-w-xl text-sm leading-6 text-white/65 md:text-base">
              Curated playlists to extend the musical universe beyond the club and give partners, media and bookers a better feel for the sound.
            </div>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            {spotifyPlaylists.map((playlist, index) => (
              <motion.div
                key={playlist.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: index * 0.06 }}
                className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 p-3 backdrop-blur-sm"
              >
                <div className="mb-4 px-2 pt-2 text-sm font-semibold uppercase tracking-[0.2em] text-white/75">
                  {playlist.title}
                </div>
                <iframe
                  title={playlist.title}
                  src={playlist.embedUrl}
                  width="100%"
                  height="352"
                  frameBorder="0"
                  allowFullScreen={false}
                  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                  loading="lazy"
                  className="rounded-[1.25rem]"
                />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      <section id="brands" className="relative overflow-hidden px-4 py-24 md:px-6 md:py-32">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(181,31,36,0.12),transparent_24%),radial-gradient(circle_at_85%_80%,rgba(255,255,255,0.05),transparent_20%)]" />
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={reveal}
          className="relative mx-auto max-w-7xl"
        >
          <div className="mb-12 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
            <div>
              <div className="mb-4 text-xs font-semibold uppercase tracking-[0.35em] text-[#B51F24]">Collabs & brands</div>
              <h2 className="text-3xl font-black uppercase md:text-5xl">Brand-safe. Culture-led. Premium-ready.</h2>
            </div>
            <div className="max-w-xl text-sm leading-6 text-white/65 md:text-base">
              Positioned for fashion, sportswear, media and lifestyle activations, with an image that can move from club energy to polished brand experience.
            </div>
          </div>

          <div className="mb-8 flex flex-wrap gap-3">
            <div className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-[11px] uppercase tracking-[0.28em] text-white/60">Fashion</div>
            <div className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-[11px] uppercase tracking-[0.28em] text-white/60">Sportswear</div>
            <div className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-[11px] uppercase tracking-[0.28em] text-white/60">Media</div>
            <div className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-[11px] uppercase tracking-[0.28em] text-white/60">Premium events</div>
          </div>

          <div className="grid gap-5 lg:grid-cols-[1.15fr_0.85fr]">
            <div className="grid gap-4 sm:grid-cols-2">
              {brands.map((brand, index) => (
                <motion.div
                  key={brand}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ delay: index * 0.06 }}
                  className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 p-8 backdrop-blur-sm transition hover:-translate-y-1 hover:border-[#B51F24]/40 hover:bg-white/[0.08]"
                >
                  <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-[#B51F24]/10 blur-2xl transition group-hover:bg-[#B51F24]/20" />
                  <div className="relative">
                    <div className="text-xs uppercase tracking-[0.3em] text-white/35">Brand / Media</div>
                    <div className="mt-8 text-3xl font-black uppercase tracking-tight text-white transition group-hover:text-[#ff7a7e]">
                      {brand}
                    </div>
                    <div className="mt-4 h-px w-full bg-gradient-to-r from-[#B51F24]/60 to-transparent" />
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: 0.12 }}
              className="rounded-[2rem] border border-white/10 bg-gradient-to-br from-[#130406] via-[#0c0c0c] to-[#111111] p-8 backdrop-blur-sm"
            >
              <div className="text-xs uppercase tracking-[0.3em] text-[#ff7a7e]">Why it fits</div>
              <h3 className="mt-4 text-2xl font-black uppercase leading-tight">
                A strong crossover between nightlife credibility and brand elegance.
              </h3>
              <div className="mt-8 space-y-4 text-sm leading-6 text-white/70">
                <p>• Curated image with premium visual identity.</p>
                <p>• Open-format sets adaptable to public and private formats.</p>
                <p>• Strong fit for launch parties, in-store events, media activations and cultural collaborations.</p>
                <p>• Able to bridge street culture, lifestyle positioning and elevated event atmospheres.</p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      <section id="contact" className="bg-black px-4 py-24 md:px-6 md:py-32">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={reveal}
          className="mx-auto max-w-7xl"
        >
          <div className="mb-10 text-xs font-semibold uppercase tracking-[0.35em] text-[#B51F24]">Contact</div>
          <div className="grid gap-8 md:grid-cols-[1fr_0.9fr] md:items-start">
            <div>
              <h2 className="max-w-3xl text-3xl font-black uppercase leading-tight md:text-5xl">
                Ready to move the room?
              </h2>
              <p className="mt-5 max-w-2xl text-base leading-7 text-white/68">
                For booking inquiries, private events, club nights or branded experiences, contact SLY'D directly.
              </p>
            </div>

            <div className="grid gap-4">
              <a href="mailto:dj-slyd@hotmail.com" className="rounded-[1.5rem] border border-white/10 bg-white/5 p-5 transition hover:border-[#B51F24]/40 hover:bg-white/[0.07]">
                <div className="flex items-center gap-4">
                  <div className="rounded-2xl bg-[#B51F24]/15 p-3 text-[#ff7a7e]"><Mail className="h-5 w-5" /></div>
                  <div>
                    <div className="text-xs uppercase tracking-[0.25em] text-white/45">Mail</div>
                    <div className="mt-1 text-xl font-black uppercase">dj-slyd@hotmail.com</div>
                  </div>
                </div>
              </a>

              <a href="tel:+33663907888" className="rounded-[1.5rem] border border-white/10 bg-white/5 p-5 transition hover:border-[#B51F24]/40 hover:bg-white/[0.07]">
                <div className="flex items-center gap-4">
                  <div className="rounded-2xl bg-[#B51F24]/15 p-3 text-[#ff7a7e]"><Phone className="h-5 w-5" /></div>
                  <div>
                    <div className="text-xs uppercase tracking-[0.25em] text-white/45">Bookings</div>
                    <div className="mt-1 text-xl font-black uppercase">+33 6 63 90 78 88</div>
                  </div>
                </div>
              </a>

              <div className="grid gap-4 sm:grid-cols-2">
                <a href="https://instagram.com/djslyd" target="_blank" rel="noreferrer" className="rounded-[1.5rem] border border-white/10 bg-white/5 p-5 transition hover:border-white/25 hover:bg-white/[0.07]">
                  <div className="flex items-center gap-3">
                    <Instagram className="h-5 w-5 text-[#ff7a7e]" />
                    <span className="text-sm font-semibold uppercase tracking-[0.2em]">Instagram</span>
                  </div>
                </a>

                <a href="#sound" className="rounded-[1.5rem] border border-white/10 bg-white/5 p-5 transition hover:border-white/25 hover:bg-white/[0.07]">
                  <div className="flex items-center gap-3">
                    <Music2 className="h-5 w-5 text-[#ff7a7e]" />
                    <span className="text-sm font-semibold uppercase tracking-[0.2em]">SoundCloud</span>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </section>
    </main>
  );
}
