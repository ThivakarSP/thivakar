import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import portraitImg from "@/assets/portrait.jpg";
import resumePdf from "@/assets/Thivakar_Resume.pdf.asset.json";
import {
  motion,
  useMotionValue,
  useScroll,
  useSpring,
  useTransform,
  AnimatePresence,
  useInView,
} from "motion/react";
import {
  ArrowUpRight,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Download,
  ExternalLink,
  Plus,
  Menu,
  X,
  Copy,
  Check,
  Phone,
  ArrowUp,
  Code2,
  Database,
  Cloud,
  Wrench,
  Cpu,
  Layers,
  Trophy,
  Award,
  GraduationCap,
  Sparkles,
} from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "S.P. Thivakar — Software Engineer & Backend Developer" },
      {
        name: "description",
        content:
          "S.P. Thivakar — Backend & Java developer from Coimbatore. Building scalable software, solving 350+ DSA problems, open to SDE internships and full-time roles.",
      },
      { property: "og:title", content: "S.P. Thivakar — Software Engineer & Backend Developer" },
      {
        property: "og:description",
        content: "S.P. Thivakar — Backend & Java developer from Coimbatore. Building scalable software, solving 350+ DSA problems, open to SDE internships and full-time roles.",
      },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          name: "S.P. Thivakar",
          jobTitle: "Software Engineer",
          email: "hello.thivakar@gmail.com",
          telephone: "+91 7845109983",
          address: {
            "@type": "PostalAddress",
            addressLocality: "Coimbatore",
            addressRegion: "Tamil Nadu",
            addressCountry: "IN",
          },
          sameAs: [
            "https://github.com/ThivakarSP",
            "https://linkedin.com/in/thivakarparthiban",
          ],
        }),
      },
    ],
  }),
  component: Portfolio,
});

// ---------- Data ----------

const NAV = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "achievements", label: "Achievements" },
  { id: "certifications", label: "Certifications" },
  { id: "experience", label: "Experience" },
  { id: "contact", label: "Contact" },
];

const ROLES = ["Software Engineer", "Backend Developer", "Java Developer", "Problem Solver"];

const SKILL_GROUPS = [
  { icon: Code2, title: "Languages", items: ["Java", "JavaScript", "SQL"] },
  { icon: Layers, title: "Frameworks", items: ["Spring Boot", "React.js"] },
  { icon: Sparkles, title: "Libraries", items: ["Tailwind CSS"] },
  { icon: Cloud, title: "Cloud", items: ["AWS"] },
  { icon: Wrench, title: "Tools", items: ["Git", "Docker", "GitHub", "REST APIs"] },
  { icon: Database, title: "Database", items: ["MySQL"] },
  {
    icon: Cpu,
    title: "Core CS",
    items: ["DSA", "OOP", "DBMS", "Operating Systems", "Computer Networks"],
  },
];

const PROJECTS = [
  {
    id: "P-001",
    name: "CodeTrail",
    tagline: "LeetCode → GitHub Synchronizer",
    description:
      "A browser extension that automatically synchronizes solved LeetCode problems to GitHub repositories with a modular, maintainable architecture.",
    stack: ["JavaScript", "REST APIs", "GitHub API", "Browser Extension"],
    features: ["Automatic syncing", "REST API integration", "Modular architecture", "Easy maintenance"],
    github: "https://github.com/ThivakarSP",
    live: null,
  },
  {
    id: "P-002",
    name: "Student Result Management",
    tagline: "Academic Records System",
    description:
      "A system to manage student academic records and examination results with a secure MySQL backend and clean Java service layer.",
    stack: ["Java", "MySQL", "JDBC"],
    features: ["Student management", "Marks management", "Result generation", "Secure database"],
    github: "https://github.com/ThivakarSP",
    live: null,
  },
  {
    id: "P-003",
    name: "In Progress",
    tagline: "Something scalable is brewing",
    description:
      "A new backend project focused on distributed design and clean APIs — details drop soon.",
    stack: ["Coming Soon"],
    features: [],
    github: null,
    live: null,
    upcoming: true,
  },
];

const HACKATHONS = [
  "Smart India Hackathon",
  "MSME Hackathon",
  "Adobe India Hackathon",
  "Amazon HackOn",
  "SAP Hackathon",
];

const CERTS = [
  { name: "AWS Certified Cloud Practitioner", issuer: "Amazon Web Services", year: "2025" },
  { name: "Google AI Essentials", issuer: "Google", year: "2024" },
  { name: "SQL (Basic)", issuer: "HackerRank", year: "2024" },
];

const TIMELINE = [
  {
    year: "2023",
    title: "Started B.Tech Information Technology",
    place: "Sri Krishna College of Engineering & Technology",
  },
  { year: "2024", title: "Deep dive into DSA & Backend", place: "350+ problems solved" },
  { year: "2025", title: "Cloud & Systems focus", place: "AWS Cloud Practitioner" },
  { year: "Now", title: "Building projects & preparing for SDE roles", place: "Open to opportunities" },
];

// ---------- Root ----------

function Portfolio() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(t);
  }, []);

  return (
    <>
      <AnimatePresence>{loading && <Loader />}</AnimatePresence>
      {!loading && (
        <div className="relative min-h-screen overflow-x-hidden bg-background text-foreground">
          <BackgroundFX />
          <ScrollProgress />
          <Nav />
          <main className="relative">
            <Hero />
            <About />
            <Skills />
            <Projects />
            <Achievements />
            <Certifications />
            <Experience />
            <Contact />
          </main>
          <Footer />
          <BackToTop />
        </div>
      )}
    </>
  );
}

// ---------- Loader ----------

function Loader() {
  return (
    <motion.div
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-background"
    >
      <div className="relative">
        <motion.div
          initial={{ scale: 0.6, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex items-baseline gap-1"
        >
          <span className="font-display text-7xl font-bold text-gold">S</span>
          <span className="font-display text-7xl font-bold text-foreground">.</span>
          <span className="font-display text-7xl font-bold text-gold">P</span>
        </motion.div>
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{ duration: 1.3, ease: "easeInOut" }}
          className="mt-4 h-[2px] bg-gold"
        />
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mt-3 text-center font-mono text-[11px] uppercase tracking-[0.3em] text-muted-foreground"
        >
          Building scalable software
        </motion.p>
      </div>
    </motion.div>
  );
}

// ---------- Background ----------

function BackgroundFX() {
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  useEffect(() => {
    const on = (e: MouseEvent) => {
      mx.set(e.clientX);
      my.set(e.clientY);
    };
    window.addEventListener("mousemove", on);
    return () => window.removeEventListener("mousemove", on);
  }, [mx, my]);
  const bg = useTransform(
    [mx, my],
    ([x, y]: number[]) =>
      `radial-gradient(600px circle at ${x}px ${y}px, oklch(0.82 0.16 80 / 0.08), transparent 60%)`,
  );
  return (
    <>
      <motion.div style={{ background: bg }} className="pointer-events-none fixed inset-0 z-0" />
      <div className="pointer-events-none fixed inset-0 z-0 opacity-40">
        <div className="absolute -top-40 -left-40 h-[500px] w-[500px] rounded-full bg-gold/10 blur-[120px]" />
        <div className="absolute top-1/2 -right-40 h-[500px] w-[500px] rounded-full bg-gold/5 blur-[140px]" />
      </div>
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 z-0 opacity-[0.025]"
        style={{
          backgroundImage:
            "radial-gradient(oklch(0.95 0.01 80) 1px, transparent 1px)",
          backgroundSize: "3px 3px",
        }}
      />
    </>
  );
}

// ---------- Scroll progress ----------

function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const x = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });
  return (
    <motion.div
      style={{ scaleX: x, transformOrigin: "0% 50%" }}
      className="fixed left-0 right-0 top-0 z-[60] h-[2px] bg-gold"
    />
  );
}

// ---------- Nav ----------

function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px" },
    );
    NAV.forEach((n) => {
      const el = document.getElementById(n.id);
      if (el) obs.observe(el);
    });
    return () => obs.disconnect();
  }, []);

  return (
    <>
      <header
        className={`fixed left-0 right-0 top-0 z-50 transition-all duration-500 ${
          scrolled
            ? "border-b border-border/60 bg-background/70 backdrop-blur-xl"
            : "bg-transparent"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <a href="#home" className="flex items-center gap-2 font-mono text-xs tracking-widest">
            <span className="text-gold">S.P</span>
            <span className="text-muted-foreground">/ 2026</span>
          </a>
          <nav className="hidden items-center gap-1 lg:flex">
            {NAV.map((n) => (
              <a
                key={n.id}
                href={`#${n.id}`}
                className={`relative px-3 py-2 text-sm transition-colors ${
                  active === n.id ? "text-gold" : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {n.label}
                {active === n.id && (
                  <motion.span
                    layoutId="nav-dot"
                    className="absolute -bottom-0.5 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-gold"
                  />
                )}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-3">
            <a
              href={resumePdf.url}
              download="Thivakar_Resume.pdf"
              className="hidden items-center gap-2 rounded-full border border-gold/40 bg-gold/10 px-4 py-2 text-xs font-medium text-gold transition-all hover:bg-gold hover:text-primary-foreground md:inline-flex"
            >
              <Download className="h-3.5 w-3.5" /> Resume
            </a>
            <button
              onClick={() => setOpen(true)}
              className="rounded-md border border-border p-2 lg:hidden"
              aria-label="Open menu"
            >
              <Menu className="h-4 w-4" />
            </button>
          </div>
        </div>
      </header>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[70] bg-background/95 backdrop-blur-xl lg:hidden"
          >
            <div className="flex items-center justify-between px-6 py-4">
              <span className="font-mono text-xs text-gold">S.P / 2026</span>
              <button onClick={() => setOpen(false)} className="rounded-md border border-border p-2">
                <X className="h-4 w-4" />
              </button>
            </div>
            <nav className="mt-10 flex flex-col items-center gap-6">
              {NAV.map((n, i) => (
                <motion.a
                  key={n.id}
                  href={`#${n.id}`}
                  onClick={() => setOpen(false)}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05 }}
                  className="font-display text-4xl font-semibold"
                >
                  {n.label}
                </motion.a>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

// ---------- Hero ----------

function Hero() {
  const [roleIdx, setRoleIdx] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setRoleIdx((i) => (i + 1) % ROLES.length), 2400);
    return () => clearInterval(t);
  }, []);

  return (
    <section id="home" className="relative min-h-screen px-6 pt-32 md:pt-36">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 md:grid-cols-[1fr_auto_1fr] md:items-center">
          <div className="order-2 md:order-1">
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="font-mono text-[11px] uppercase tracking-[0.3em] text-muted-foreground"
            >
              Hi, I'm
            </motion.p>
            <h1 className="mt-3 font-display text-6xl font-bold leading-[0.95] text-gold md:text-7xl lg:text-8xl">
              Strategy
              <span className="block text-foreground">Meets</span>
            </h1>
          </div>

          <div className="order-1 mx-auto md:order-2">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7 }}
              className="relative"
            >
              <div className="absolute -inset-4 rounded-2xl bg-gold/10 blur-2xl" />
              <div className="relative aspect-[4/5] w-[260px] overflow-hidden rounded-xl border border-gold/20 md:w-[300px]">
                <img
                  src={portraitImg}
                  alt="S.P. Thivakar"
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
              </div>
            </motion.div>
          </div>

          <div className="order-3 text-right">
            <h1 className="font-display text-6xl font-bold leading-[0.95] md:text-7xl lg:text-8xl">
              <span className="block text-foreground">Software</span>
              <span className="block text-gold">Engineer</span>
            </h1>
          </div>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-3 md:items-end">
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
              S.P. Thivakar
            </p>
            <p className="mt-1 max-w-[220px] text-sm text-muted-foreground">
              Backend Engineering · Java · Problem Solving
            </p>
          </div>

          <div className="flex flex-col items-center gap-3">
            <div className="inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/5 px-3 py-1.5">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-gold opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-gold" />
              </span>
              <span className="text-[11px] font-medium text-gold">
                Open to Internship & Full-Time
              </span>
            </div>
            <AnimatePresence mode="wait">
              <motion.p
                key={roleIdx}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.35 }}
                className="font-mono text-xs tracking-wider text-foreground/80"
              >
                &lt;/&gt; {ROLES[roleIdx]}
              </motion.p>
            </AnimatePresence>
          </div>

          <div className="text-right">
            <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
              Based in Coimbatore
            </p>
            <p className="mt-1 text-sm">
              Building software.
              <br />
              <span className="text-gold">Where logic meets craft.</span>
            </p>
          </div>
        </div>

        {/* Statement */}
        <div className="mt-24">
          <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-gold">About Me</p>
          <div className="mt-6 grid gap-8 md:grid-cols-[1fr_2fr] md:gap-16">
            <div />
            <div>
              <h2 className="font-display text-3xl font-bold leading-tight md:text-5xl">
                S.P. Thivakar is a{" "}
                <span className="text-gold">software engineer</span> building scalable backend
                systems with clean, thoughtful code.
              </h2>
              <p className="mt-6 max-w-md text-sm leading-relaxed text-muted-foreground">
                Shaping software through fundamentals, systems thinking and craft — built to last
                beyond trends.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <MagneticButton href="#projects" variant="primary">
                  View Projects <ArrowUpRight className="h-4 w-4" />
                </MagneticButton>
                <MagneticButton href={resumePdf.url} download="Thivakar_Resume.pdf" variant="ghost">
                  Download Resume <Download className="h-4 w-4" />
                </MagneticButton>
              </div>
              <div className="mt-8 flex items-center gap-4">
                <SocialIcon href="https://github.com/ThivakarSP" icon={Github} label="GitHub" />
                <SocialIcon
                  href="https://linkedin.com/in/thivakarparthiban"
                  icon={Linkedin}
                  label="LinkedIn"
                />
                <SocialIcon href="mailto:hello.thivakar@gmail.com" icon={Mail} label="Email" />
                <span className="ml-auto inline-flex items-center gap-1.5 text-xs text-muted-foreground">
                  <MapPin className="h-3.5 w-3.5" /> Coimbatore, TN
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function SocialIcon({
  href,
  icon: Icon,
  label,
}: {
  href: string;
  icon: typeof Github;
  label: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label={label}
      className="group flex h-10 w-10 items-center justify-center rounded-full border border-border transition-all hover:border-gold hover:bg-gold/10"
    >
      <Icon className="h-4 w-4 text-muted-foreground transition-colors group-hover:text-gold" />
    </a>
  );
}

function MagneticButton({
  href,
  download,
  children,
  variant = "primary",
}: {
  href: string;
  download?: string | boolean;
  children: React.ReactNode;
  variant?: "primary" | "ghost";
}) {
  const ref = useRef<HTMLAnchorElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 200, damping: 15 });
  const sy = useSpring(y, { stiffness: 200, damping: 15 });

  return (
    <motion.a
      ref={ref}
      href={href}
      download={download}
      style={{ x: sx, y: sy }}
      onMouseMove={(e) => {
        const r = ref.current!.getBoundingClientRect();
        x.set((e.clientX - r.left - r.width / 2) * 0.25);
        y.set((e.clientY - r.top - r.height / 2) * 0.25);
      }}
      onMouseLeave={() => {
        x.set(0);
        y.set(0);
      }}
      className={`inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium transition-colors ${
        variant === "primary"
          ? "bg-gold text-primary-foreground hover:bg-gold-soft"
          : "border border-border text-foreground hover:border-gold hover:text-gold"
      }`}
    >
      {children}
    </motion.a>
  );
}

// ---------- About ----------

function About() {
  return (
    <section id="about" className="relative px-6 py-32">
      <div className="mx-auto max-w-7xl">
        <SectionLabel>The Journey</SectionLabel>
        <div className="mt-8 grid gap-16 lg:grid-cols-2">
          <Reveal>
            <h3 className="font-display text-4xl font-bold leading-tight md:text-5xl">
              From <span className="text-gold">curiosity</span> to code —{" "}
              <span className="text-gold">every project</span> a step toward mastery.
            </h3>
            <p className="mt-6 text-base leading-relaxed text-muted-foreground">
              I'm an Information Technology undergraduate passionate about building scalable
              software. I love backend engineering, clean code, and solving real-world problems
              with strong fundamentals in Data Structures, Algorithms, OOP, DBMS, Operating Systems
              and REST APIs.
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              Always learning. Always shipping. Looking for opportunities where I can contribute
              while continuously improving as an engineer.
            </p>
            <div className="mt-8 grid grid-cols-3 gap-4">
              <Stat value={350} suffix="+" label="DSA Problems" />
              <Stat value={5} suffix="+" label="Hackathons" />
              <Stat value={3} suffix="" label="Certifications" />
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <ol className="relative border-l border-border pl-8">
              {TIMELINE.map((t, i) => (
                <li key={i} className="relative pb-10 last:pb-0">
                  <span className="absolute -left-[35px] flex h-4 w-4 items-center justify-center rounded-full border border-gold/50 bg-background">
                    <span className="h-1.5 w-1.5 rounded-full bg-gold" />
                  </span>
                  <p className="font-mono text-[11px] tracking-widest text-gold">{t.year}</p>
                  <h4 className="mt-1 font-display text-xl font-semibold">{t.title}</h4>
                  <p className="mt-1 text-sm text-muted-foreground">{t.place}</p>
                </li>
              ))}
            </ol>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Stat({ value, suffix, label }: { value: number; suffix: string; label: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true });
  const [n, setN] = useState(0);
  useEffect(() => {
    if (!inView) return;
    const dur = 1400;
    const start = performance.now();
    let raf = 0;
    const step = (t: number) => {
      const p = Math.min(1, (t - start) / dur);
      setN(Math.floor(p * value));
      if (p < 1) raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [inView, value]);
  return (
    <div ref={ref}>
      <div className="font-display text-4xl font-bold text-gold">
        {n}
        {suffix}
      </div>
      <div className="mt-1 text-xs uppercase tracking-wider text-muted-foreground">{label}</div>
    </div>
  );
}

// ---------- Skills ----------

function Skills() {
  return (
    <section id="skills" className="relative px-6 py-32">
      <div className="mx-auto max-w-7xl">
        <SectionLabel>The Toolkit</SectionLabel>
        <h3 className="mt-6 font-display text-4xl font-bold md:text-6xl">
          Tools I use to <span className="text-gold">think, build, and ship.</span>
        </h3>
        <div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {SKILL_GROUPS.map((g, i) => (
            <Reveal key={g.title} delay={i * 0.05}>
              <div className="group relative h-full overflow-hidden rounded-xl border border-border bg-card/40 p-6 transition-all hover:border-gold/50 hover:bg-card/70">
                <div className="absolute -right-10 -top-10 h-24 w-24 rounded-full bg-gold/10 blur-2xl opacity-0 transition-opacity group-hover:opacity-100" />
                <div className="relative">
                  <div className="flex items-center gap-3">
                    <span className="flex h-10 w-10 items-center justify-center rounded-lg border border-gold/20 bg-gold/5 text-gold">
                      <g.icon className="h-4 w-4" />
                    </span>
                    <h4 className="font-display text-xl font-semibold">{g.title}</h4>
                  </div>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {g.items.map((it) => (
                      <span
                        key={it}
                        className="rounded-md border border-border bg-background/50 px-2.5 py-1 text-xs text-muted-foreground transition-colors group-hover:text-foreground"
                      >
                        {it}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

// ---------- Projects ----------

function Projects() {
  const [active, setActive] = useState(0);
  return (
    <section id="projects" className="relative px-6 py-32">
      <div className="mx-auto max-w-7xl">
        <SectionLabel>Selected Work</SectionLabel>
        <h3 className="mt-6 font-display text-5xl font-bold leading-[0.95] md:text-7xl">
          Engineering <span className="text-gold">Outcomes</span>
        </h3>

        <div className="mt-14 overflow-hidden rounded-xl border border-border">
          {PROJECTS.map((p, i) => (
            <div
              key={p.id}
              onMouseEnter={() => setActive(i)}
              className={`group relative flex items-center justify-between border-b border-border px-6 py-6 transition-colors last:border-b-0 md:px-8 md:py-8 ${
                active === i ? "bg-gold text-primary-foreground" : "bg-card/30"
              }`}
            >
              <div className="flex items-center gap-6 md:gap-10">
                <span
                  className={`font-mono text-xs ${
                    active === i ? "text-primary-foreground/70" : "text-muted-foreground"
                  }`}
                >
                  {p.id}
                </span>
                <div>
                  <h4 className="font-display text-2xl font-semibold md:text-3xl">{p.name}</h4>
                  <p
                    className={`mt-1 text-sm ${
                      active === i ? "text-primary-foreground/70" : "text-muted-foreground"
                    }`}
                  >
                    {p.tagline}
                  </p>
                </div>
              </div>

              <AnimatePresence>
                {active === i && !p.upcoming && (
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    className="hidden max-w-md text-sm md:block"
                  >
                    <p className="text-primary-foreground/80">{p.description}</p>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {p.stack.map((s) => (
                        <span
                          key={s}
                          className="rounded border border-primary-foreground/30 px-2 py-0.5 text-[10px] uppercase tracking-wider text-primary-foreground/80"
                        >
                          {s}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              <a
                href={p.github ?? "#"}
                target="_blank"
                rel="noreferrer"
                className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-medium transition-colors ${
                  active === i
                    ? "bg-background text-foreground"
                    : "border border-border text-foreground hover:border-gold hover:text-gold"
                }`}
              >
                Explore More <ArrowUpRight className="h-3 w-3" />
              </a>
            </div>
          ))}
        </div>

        {/* Workflow grid */}
        <div className="mt-24 grid gap-6 md:grid-cols-[1fr_1.5fr] md:gap-16">
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-gold">
              My Workflow
            </p>
            <h4 className="mt-4 font-display text-3xl font-bold leading-tight md:text-4xl">
              From <span className="text-gold">insight to execution</span>, each step turns{" "}
              <span className="text-gold">ideas</span> into scalable systems.
            </h4>
          </div>
          <p className="text-sm leading-relaxed text-muted-foreground md:mt-16">
            Each project starts with curiosity, ends with clarity — aligning intent, structure and
            craft into a cohesive whole.
          </p>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {[
            {
              id: "0-001",
              title: "Define",
              body: "Understand the problem, requirements, and constraints before touching a keyboard.",
            },
            {
              id: "0-002",
              title: "Design",
              body: "Translate requirements into structure — data models, APIs, and system boundaries.",
            },
            {
              id: "0-003",
              title: "Develop",
              body: "Write clean, testable code — small commits, clear commits, incremental progress.",
            },
            {
              id: "0-004",
              title: "Deliver",
              body: "Ship, measure, iterate — communicating clearly at every step of the process.",
            },
          ].map((s, i) => (
            <Reveal key={s.id} delay={i * 0.05}>
              <div className="relative aspect-[4/3] overflow-hidden rounded-xl border border-border bg-card/40 p-6 transition-colors hover:border-gold/40">
                <div className="flex items-start justify-between">
                  <span className="font-mono text-xs text-muted-foreground">{s.id}</span>
                  <h5 className="font-display text-2xl font-semibold text-gold">{s.title}</h5>
                </div>
                <div className="mt-6 flex items-center justify-center">
                  <span className="flex h-14 w-14 items-center justify-center rounded-full border border-gold/30 bg-gold/5 text-gold transition-transform hover:rotate-90">
                    <Plus className="h-6 w-6" />
                  </span>
                </div>
                <p className="mt-6 text-center text-sm text-muted-foreground">{s.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

// ---------- Achievements ----------

function Achievements() {
  return (
    <section id="achievements" className="relative px-6 py-32">
      <div className="mx-auto max-w-7xl">
        <SectionLabel>What I've Done</SectionLabel>
        <h3 className="mt-6 font-display text-4xl font-bold md:text-6xl">
          Milestones & <span className="text-gold">momentum.</span>
        </h3>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          <Reveal>
            <div className="rounded-xl border border-gold/30 bg-gold/5 p-8">
              <Trophy className="h-6 w-6 text-gold" />
              <div className="mt-6 font-display text-6xl font-bold text-gold">
                <Stat value={350} suffix="+" label="" />
              </div>
              <p className="mt-2 text-sm text-muted-foreground">
                DSA Problems Solved across LeetCode, HackerRank & GFG.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="col-span-1 rounded-xl border border-border bg-card/40 p-8 md:col-span-2">
              <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-gold">
                Hackathons
              </p>
              <h4 className="mt-3 font-display text-2xl font-semibold">
                Participated in national-level hackathons.
              </h4>
              <ul className="mt-6 grid gap-2 md:grid-cols-2">
                {HACKATHONS.map((h) => (
                  <li key={h} className="flex items-center gap-3 text-sm text-muted-foreground">
                    <span className="h-1.5 w-1.5 rounded-full bg-gold" />
                    {h}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

// ---------- Certifications ----------

function Certifications() {
  return (
    <section id="certifications" className="relative px-6 py-32">
      <div className="mx-auto max-w-7xl">
        <SectionLabel>Credentials</SectionLabel>
        <h3 className="mt-6 font-display text-4xl font-bold md:text-6xl">
          Verified <span className="text-gold">learning</span>.
        </h3>

        <div className="mt-14 grid gap-4 md:grid-cols-3">
          {CERTS.map((c, i) => (
            <Reveal key={c.name} delay={i * 0.05}>
              <div className="group h-full rounded-xl border border-border bg-card/40 p-6 transition-all hover:border-gold/50 hover:bg-card/70">
                <div className="flex items-start justify-between">
                  <Award className="h-6 w-6 text-gold" />
                  <span className="font-mono text-[10px] tracking-widest text-muted-foreground">
                    {c.year}
                  </span>
                </div>
                <h4 className="mt-8 font-display text-xl font-semibold leading-snug">{c.name}</h4>
                <p className="mt-2 text-sm text-muted-foreground">{c.issuer}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

// ---------- Experience ----------

function Experience() {
  return (
    <section id="experience" className="relative px-6 py-32">
      <div className="mx-auto max-w-7xl">
        <SectionLabel>Experience</SectionLabel>
        <h3 className="mt-6 font-display text-4xl font-bold md:text-6xl">
          Ready for the <span className="text-gold">next chapter.</span>
        </h3>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          <div className="rounded-xl border border-border bg-card/40 p-8">
            <GraduationCap className="h-6 w-6 text-gold" />
            <p className="mt-4 font-mono text-[10px] uppercase tracking-widest text-gold">
              2023 — 2027
            </p>
            <h4 className="mt-2 font-display text-2xl font-semibold">
              B.Tech Information Technology
            </h4>
            <p className="mt-1 text-sm text-muted-foreground">
              Sri Krishna College of Engineering & Technology
            </p>
          </div>
          <div className="rounded-xl border border-dashed border-gold/40 bg-gold/5 p-8">
            <Sparkles className="h-6 w-6 text-gold" />
            <p className="mt-4 font-mono text-[10px] uppercase tracking-widest text-gold">
              Open Slot
            </p>
            <h4 className="mt-2 font-display text-2xl font-semibold">Your Company, Next</h4>
            <p className="mt-1 text-sm text-muted-foreground">
              Open to SDE internships and full-time roles. Let's build something great.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

// ---------- Contact ----------

function Contact() {
  const [copied, setCopied] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const copy = async () => {
    await navigator.clipboard.writeText("hello.thivakar@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    setErrorMsg("");
    try {
      await emailjs.send(
        "service_h0qv0d8",
        "template_nn1bwva",
        {
          from_name: form.name,
          from_email: form.email,
          subject: form.subject || "Hello from your portfolio",
          message: form.message,
          reply_to: form.email,
        },
        { publicKey: "-zxuVz1XN5iRR2ejz" },
      );
      setStatus("sent");
      setForm({ name: "", email: "", subject: "", message: "" });
      setTimeout(() => setStatus("idle"), 4000);
    } catch (err: unknown) {
      setStatus("error");
      setErrorMsg(err instanceof Error ? err.message : "Failed to send. Try again.");
    }
  };

  return (
    <section id="contact" className="relative px-6 py-32">
      <div className="mx-auto max-w-7xl">
        <SectionLabel>Get in touch</SectionLabel>
        <h3 className="mt-6 font-display text-5xl font-bold leading-[0.95] md:text-7xl">
          Let's build <span className="text-gold">something great.</span>
        </h3>

        <div className="mt-14 grid gap-10 lg:grid-cols-2">
          <form
            onSubmit={onSubmit}
            className="space-y-4 rounded-xl border border-border bg-card/40 p-6 md:p-8"
          >
            <div className="grid gap-4 md:grid-cols-2">
              <Field
                label="Name"
                value={form.name}
                onChange={(v) => setForm((f) => ({ ...f, name: v }))}
              />
              <Field
                label="Email"
                type="email"
                value={form.email}
                onChange={(v) => setForm((f) => ({ ...f, email: v }))}
              />
            </div>
            <Field
              label="Subject"
              value={form.subject}
              onChange={(v) => setForm((f) => ({ ...f, subject: v }))}
            />
            <div>
              <label className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
                Message
              </label>
              <textarea
                required
                rows={5}
                value={form.message}
                onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
                className="mt-2 w-full resize-none rounded-md border border-border bg-background/50 px-3 py-2.5 text-sm outline-none transition-colors focus:border-gold"
              />
            </div>
            <button
              type="submit"
              disabled={status === "sending"}
              className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-gold px-5 py-3 text-sm font-medium text-primary-foreground transition-transform hover:scale-[1.01] disabled:opacity-60"
            >
              {status === "sending"
                ? "Sending…"
                : status === "sent"
                  ? "Message sent ✓"
                  : "Send Message"}
              {status === "idle" && <ArrowUpRight className="h-4 w-4" />}
            </button>
            {status === "error" && (
              <p className="text-xs text-red-400">{errorMsg}</p>
            )}
            {status === "sent" && (
              <p className="text-xs text-gold">Thanks — I'll get back to you soon.</p>
            )}
          </form>

          <div className="space-y-4">
            <InfoRow
              icon={Mail}
              label="Email"
              value="hello.thivakar@gmail.com"
              action={
                <button
                  onClick={copy}
                  className="inline-flex items-center gap-1.5 text-xs text-gold hover:opacity-80"
                >
                  {copied ? <Check className="h-3.5 w-3.5" /> : <Copy className="h-3.5 w-3.5" />}
                  {copied ? "Copied" : "Copy"}
                </button>
              }
            />
            <InfoRow icon={Phone} label="Phone" value="+91 78451 09983" />
            <InfoRow
              icon={Linkedin}
              label="LinkedIn"
              value="linkedin.com/in/thivakarparthiban"
              href="https://linkedin.com/in/thivakarparthiban"
            />
            <InfoRow
              icon={Github}
              label="GitHub"
              value="github.com/ThivakarSP"
              href="https://github.com/ThivakarSP"
            />
            <InfoRow icon={MapPin} label="Location" value="Coimbatore, Tamil Nadu, India" />
          </div>
        </div>

      </div>
    </section>
  );
}

function Field({
  label,
  value,
  onChange,
  type = "text",
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  type?: string;
}) {
  return (
    <div>
      <label className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
        {label}
      </label>
      <input
        required
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="mt-2 w-full rounded-md border border-border bg-background/50 px-3 py-2.5 text-sm outline-none transition-colors focus:border-gold"
      />
    </div>
  );
}

function InfoRow({
  icon: Icon,
  label,
  value,
  href,
  action,
}: {
  icon: typeof Mail;
  label: string;
  value: string;
  href?: string;
  action?: React.ReactNode;
}) {
  const inner = (
    <div className="group flex items-center justify-between rounded-xl border border-border bg-card/40 p-5 transition-colors hover:border-gold/40">
      <div className="flex items-center gap-4">
        <span className="flex h-10 w-10 items-center justify-center rounded-lg border border-gold/20 bg-gold/5 text-gold">
          <Icon className="h-4 w-4" />
        </span>
        <div>
          <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
            {label}
          </p>
          <p className="mt-0.5 text-sm">{value}</p>
        </div>
      </div>
      {action ?? (href && <ExternalLink className="h-4 w-4 text-muted-foreground group-hover:text-gold" />)}
    </div>
  );
  return href ? (
    <a href={href} target="_blank" rel="noreferrer">
      {inner}
    </a>
  ) : (
    inner
  );
}

// ---------- Footer ----------

function Footer() {
  return (
    <footer className="relative border-t border-border/60 px-6 py-10">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 md:flex-row">
        <p className="font-mono text-[11px] tracking-widest text-muted-foreground">
          © 2026 S.P. THIVAKAR — CRAFTED WITH CLARITY.
        </p>
        <div className="flex items-center gap-4 text-xs text-muted-foreground">
          <a href="#home" className="hover:text-gold">
            Home
          </a>
          <a href="#projects" className="hover:text-gold">
            Projects
          </a>
          <a href="#contact" className="hover:text-gold">
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
}

// ---------- Reusable ----------

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-3">
      <span className="h-px w-8 bg-gold" />
      <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-gold">
        {children}
      </span>
    </div>
  );
}

function Reveal({
  children,
  delay = 0,
}: {
  children: React.ReactNode;
  delay?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

function BackToTop() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const on = () => setShow(window.scrollY > 400);
    window.addEventListener("scroll", on);
    return () => window.removeEventListener("scroll", on);
  }, []);
  return (
    <AnimatePresence>
      {show && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-6 right-6 z-40 flex h-11 w-11 items-center justify-center rounded-full border border-gold/40 bg-background/80 text-gold backdrop-blur hover:bg-gold hover:text-primary-foreground"
          aria-label="Back to top"
        >
          <ArrowUp className="h-4 w-4" />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
