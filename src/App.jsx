import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Import images (ensure filenames match)
import techAthonImg from "./assets/techAthon.jpeg";
import codeQuestImg from "./assets/Codeqs.png";
import editxImg from "./assets/editx.jpeg";
import rideToGloryImg from "./assets/rideToglory.jpeg";
import riddelToRigImg from "./assets/RideltoRig.jpeg";
import startupIonImg from "./assets/startup.jpeg";
import electriviaImg from "./assets/ElectRivia.jpeg";
import recallRushImg from "./assets/recallRush.jpeg";
import survivalArenaImg from "./assets/surArena.jpeg"; 
import tryOGameImg from "./assets/tryogame.jpeg";
import bgmitournamentImg from "./assets/BgmiEE.jpeg";
import pictostageImg from "./assets/pictosstage.jpeg";
import FreefireImg from "./assets/freefire.jpeg"; 
import photographyImg from "./assets/photography.jpeg";
import techhuntImg from "./assets/techhunt.jpeg";
import sitNwinImg from "./assets/sitandwin.jpeg";
import pickActGuessImg from "./assets/pickact.jpeg";
import dhoondBarabarDhoondImg from "./assets/dhond.jpeg";
import whoIsTheKatilImg from "./assets/katil.jpeg";
import techQuizImg from "./assets/techquiz.jpeg";


export default function TechFestApp() {
  const EVENTS = [
    {
      id: "ev1",
      title: "Tech-A-thon",
      dept: "Computer Science",
      short: "4 days team hackathon focused on hardware and software.",
      date: "2025-10-12",
      seats: "infinity",
      googleForm: "https://docs.google.com/forms/d/e/1FAIpQLSdqqZonHyIGQ8JmBta-Y4pr0pGiiMO5OcxTek0vsJLTYai8Cw/viewform",
      whatsappGroup: "https://chat.whatsapp.com/DkoMsbKJtipHD6WJ9yO9lg?mode=ems_copy_t",
      tags: ["Team", "4 days", "Prizes"],
      image: techAthonImg,
    },
    {
      id: "ev2",
      title: "Code Quest",
      dept: "Computer Science",
      short: "Competitive programming contest",
      date: "2025-10-13",
      seats: "infinity",
      googleForm: "https://docs.google.com/forms/d/e/1FAIpQLSc6kKPv-mbw0fMVpBSUarEC_55gkzgV8x5dBeBpxSOX2zZEfw/viewform?usp=dialog",
       whatsappGroup: "https://chat.whatsapp.com/E6HTj17COVw3OlHIOlWebr",
      tags: ["Solo", "Programming"],
      image: codeQuestImg,
    },
    {
      id: "ev3",
      title: "Editx",
      dept: "Mechanical",
      short: "You're doing amazing, keep creating.",
      date: "2025-10-12",
      seats: 60,
      googleForm: "https://forms.gle/example3",
       whatsappGroup: "https://chat.whatsapp.com/yourGroupLink",
      tags: ["Team", "Data"],
      image: editxImg,
    },
    {
      id: "ev4",
      title: "Ride to Glory",
      dept: "Mechanical",
      short: "Triumph present",
      date: "2025-10-14",
      seats: 16,
      googleForm: "https://forms.gle/example4",
       whatsappGroup: "https://chat.whatsapp.com/yourGroupLink",
      tags: ["Team", "Battle"],
      image: rideToGloryImg,
    },
    {
      id: "ev5",
      title: "Riddel to Rig",
      dept: "Mechanical",
      short: "Show creativity",
      date: "2025-10-13",
      seats: 50,
      googleForm: "https://forms.gle/eeb4z77K9Fd1F2jD8",
       whatsappGroup: "https://chat.whatsapp.com/D1ZqOM4QyA8Ic9EbCJy1b9?mode=ems_copy_c",
      tags: ["Team", "Design"],
      image: riddelToRigImg,
    },
    {
      id: "ev6",
      title: "Startup ION",
      dept: "Mechanical",
      short: "Dream it, build it, scale it",
      date: "2025-10-13",
      seats: 50,
      googleForm: "https://docs.google.com/forms/d/e/1FAIpQLSeH2KtRdgmaGDwXpU_OTqCS5hWi_0OrHv883C4r470JC0fROA/viewform?usp=dialog",
       whatsappGroup: "https://chat.whatsapp.com/IySbRbli3NC2EiNsE0gC86?mode=ems_copy_c",
      tags: ["Team", "Design"],
      image: startupIonImg,
    },
    {
      id: "ev7",
      title: "ELECTRIVIA",
      dept: "Electrical",
      short: "Think & Guess",
      date: "2025-10-13",
      seats: 50,
      googleForm: "https://forms.gle/example6",
       whatsappGroup: "https://chat.whatsapp.com/yourGroupLink",
      tags: ["Team", "Electrical"],
      image: electriviaImg,
    },
    {
      id: "ev8",
      title: "Recall Rush",
      dept: "Electrical",
      short: "rush to recall",
      date: "2025-10-13",
      seats: 50,
      googleForm: "https://forms.gle/example6",
       whatsappGroup: "https://chat.whatsapp.com/yourGroupLink",
      tags: ["Team", "Electrical"],
      image: recallRushImg,
    },
    {
      id: "ev9",
      title: "Survival Arena",
      dept: "Electrical",
      short: "who will be the last one standing",
      date: "2025-10-13",
      seats: 50,
      googleForm: "https://forms.gle/example6",
       whatsappGroup: "https://chat.whatsapp.com/yourGroupLink",
      tags: ["Team", "Design"],
      image: survivalArenaImg,
    },
    {
      id: "ev10",
      title: "TRY O GAME S3",
      dept: "Computer Science",
      short: "4 days team hackathon focused on hardware and software.",
      date: "2025-10-12",
      seats: "infinity",
      googleForm: "https://forms.gle/YBCh3X1nvzebrGz76",
      whatsappGroup: "https://chat.whatsapp.com/GII07KrDWdg2fYGAeZUwJM",
      image: tryOGameImg,
    },
    {
      id: "ev11",
      title: "PICTOSTAGE",
      dept: "Computer Science",
      short: "pic to stage ",
      date: "2025-10-12",
      seats: "infinity",
      googleForm: "https://docs.google.com/forms/d/e/1FAIpQLSf0CdMqPty9YVR-tu34eCUwlIpqwij96SK86flNNvPLoPAYrQ/viewform",
      whatsappGroup: "https://chat.whatsapp.com/DoBuvErQ0U81MWKM30EjY4?mode=ems_copy_t",
      image: pictostageImg,
    },
     {
      id: "ev12",
      title: "BGMI Tournament",
      dept: "Electrical",
      short: "",
      date: "2025-10-13",
      seats: 50,
      googleForm: "https://forms.gle/QwBDGxvjJAMedhGr5",
       whatsappGroup: "https://chat.whatsapp.com/K8XGB6HP3D5Ln1R27Qe0KM?mode=ems_copy_t",
      tags: ["Team", "Design"],
      image: bgmitournamentImg,
    },
    {
      id: "ev13",
      title: "PHOTOGRAPHY COMPETITION",
      dept: "Civil Engineering",
      short: "",
      date: "2025-10-13",
      seats: 50,
      googleForm: "https://bit.ly/Photography-Contest-UTKARSHCIVIL",
       
      tags: ["Team", "Design"],
      image: photographyImg,
    },
     {
      id: "ev14",
      title: "Free Fire",
      dept: "Civil Engineering",
      short: "",
      date: "2025-10-13",
      seats: 50,
      whatsappGroup: "https://chat.whatsapp.com/E6z1yiwcPrKBH2NbfUINba",
       googleForm: "https://bit.ly/BGMI-Contest-UTKARSHCIVIL",
      tags: ["Team", "Design"],
      image: FreefireImg,
    },
     {
      id: "ev15",
      title: "Tech Hunt",
      dept: "Central",
      short: "",
      date: "2025-10-13",
      seats: 50,
      whatsappGroup: "https://chat.whatsapp.com/FOxn2GVO6eD2nqck9kdFci?mode=ems_wa_t",
       googleForm: "https://docs.google.com/forms/d/e/1FAIpQLSfMbHXTawNPQJ2SDe3maQFHxfYG6H10VJUa-qxKm0cIt7rrZA/viewform",
      tags: ["Team", "Design"],
      image: techhuntImg,
    },
     {
      id: "ev16",
      title: "Sit & Win",
      dept: "Electronics & communication",
      short: "",
      date: "2025-10-13",
      seats: 50,
      whatsappGroup:"https://chat.whatsapp.com/LrgNwQ8MzJzEifzhHQyUyz?mode=ems_copy_t",
       googleForm: "https://docs.google.com/forms/d/e/1FAIpQLSfwGGiN-NweUOt3mRMaJ5FYTvXPIgKU_jRTwaLDDy9xGSFLDQ/viewform?usp=header",
      tags: ["Team", "Design"],
      image: sitNwinImg,
    },
    {
      id: "ev17",
      title: "PICK, ACT & GUESS",
      dept: "Civil Engineering",
      short: "",
      date: "2025-10-13",
      seats: 50,
      googleForm: "https://bit.ly/PICKACTGUESS-UTKARSHCIVIL",
       whatsappGroup:"https://chat.whatsapp.com/DSSc4lQVw1K85eeYrASqxK",
      tags: ["Team", "Design"],
      image: pickActGuessImg,
    },
    {
      id: "ev18",
      title: "DHOOND BARABAR DHOOND-2.0",
      dept: "Electronics & communication",
      short: "",
      date: "2025-10-13",
      seats: 50,
      whatsappGroup:"https://chat.whatsapp.com/FgPH12farfPEVuHKdzrXFX?mode=ems_copy_t",
       googleForm: "https://forms.gle/invbVMMyifFwswXG9",
      tags: ["Team", "Design"],
      image: dhoondBarabarDhoondImg,
    },
    {
      id: "ev19",
      title: "Who is the  कातिल ?",
      dept: "Electronics & communication",
      short: "",
      date: "2025-10-13",
      seats: 50,
      whatsappGroup:"https://docs.google.com/forms/d/e/1FAIpQLSf2fZm2UR3PCE9Qtr20pSBOHdxsMnOCQfkHuiiPno9_N2FfnQ/viewform?usp=header",
       googleForm: "https://chat.whatsapp.com/GyZTFhNBSnZGxKry8Rezeh?mode=ems_copy_t",
      tags: ["Team", "Design"],
      image: whoIsTheKatilImg,
    },
    {
      id: "ev15",
      title: "Tech Quiz",
      dept: "Central",
      short: "",
      date: "2025-10-13",
      seats: 50,
      whatsappGroup: "https://chat.whatsapp.com/EM0laf0le8WIANIC1wAXpj?mode=ems_copy_t",
       googleForm: "https://docs.google.com/forms/d/e/1FAIpQLSeFqyFdluXWai7r_F4q_IF5bH09Up4VfdmQkM8w9He4qj08xA/viewform?usp=dialog",
      tags: ["Team", "Design"],
      image: techQuizImg,
    },
    
    
  ];

  const DEPARTMENTS = useMemo(() => {
    const set = new Set(EVENTS.map((e) => e.dept));
    return ["All", ...Array.from(set)];
  }, []);

  const [query, setQuery] = useState("");
  const [selectedDept, setSelectedDept] = useState("All");
  const [sortBy, setSortBy] = useState("date");
  const [active, setActive] = useState(null);

  const filtered = useMemo(() => {
  let list = EVENTS.filter((e) => {
    const title = e.title?.toLowerCase() || "";
    const short = e.short?.toLowerCase() || "";
    const tags = Array.isArray(e.tags) ? e.tags.join(" ").toLowerCase() : "";

    return (
      (selectedDept === "All" || e.dept === selectedDept) &&
      (title.includes(query.toLowerCase()) ||
        short.includes(query.toLowerCase()) ||
        tags.includes(query.toLowerCase()))
    );
  });

  if (sortBy === "date") {
    list.sort((a, b) => new Date(a.date) - new Date(b.date));
  } else if (sortBy === "seats") {
    list.sort((a, b) => {
      const seatsA = a.seats === "infinity" ? Infinity : Number(a.seats);
      const seatsB = b.seats === "infinity" ? Infinity : Number(b.seats);
      return seatsB - seatsA;
    });
  } else if (sortBy === "title") {
    list.sort((a, b) => a.title.localeCompare(b.title));
  }

  return list;
}, [query, selectedDept, sortBy]);


  const cardVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.8 },
    enter: { opacity: 1, y: 0, scale: 1, transition: { type: "spring", bounce: 0.4, duration: 0.8 } },
    exit: { opacity: 0, y: -20, scale: 0.9 },
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-100 via-white to-sky-50 p-6">
     {/* Header */}
<motion.header
  className="max-w-6xl mx-auto mb-12 text-center px-4"
  initial={{ y: -50, opacity: 0 }}
  animate={{ y: 0, opacity: 1 }}
  transition={{ type: "spring", bounce: 0.5, duration: 1 }}
>
  <div className="flex flex-col items-center gap-4">
    {/* Institute Logo */}
    <motion.img
      src="tit-logo-1.png"
      alt="Institute Logo"
      className="w-28 h-28 rounded-full shadow-lg"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ type: "spring", bounce: 0.6, duration: 0.8 }}
      whileHover={{ scale: 1.1, rotate: 5 }}
    />

   
  </div>

  {/* Main Title with logo */}
  <motion.div
    className="flex items-center justify-center mt-6 gap-3"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.6, type: "spring", bounce: 0.5 }}
  >
    {/* Small logo in front of text */}
    <img
      src="utkarsh.logo.jpeg" // Replace with the second logo
      alt="Event Logo"
      className="w-20 h-20 rounded-full shadow-md"
    />
    <h1 className="text-5xl sm:text-6xl font-extrabold text-sky-700">
      UTKARSH 4.0 - 2025
    </h1>
  </motion.div>

  {/* Subtitle */}
  <motion.h2
    className="text-xl sm:text-2xl text-sky-500 mt-2 font-semibold"
    initial={{ opacity: 0, y: 10 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.8 }}
  >
    Ignite Ideas • Celebrate Innovation • Build the Future
  </motion.h2>

  {/* Description */}
  <motion.p
    className="text-md sm:text-lg text-slate-600 mt-4 max-w-3xl mx-auto leading-relaxed"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ delay: 1 }}
  >
    UTKARSH 4.0 brings together students from all disciplines to showcase their talents, participate
    in innovative competitions, and experience a celebration of technology, creativity, and collaboration.
    Join us for an unforgettable event filled with workshops, competitions, and exciting projects!
  </motion.p>
</motion.header>


      {/* Department Filter */}
      <div className="flex flex-wrap justify-center gap-3 mb-10">
        {DEPARTMENTS.map((dept) => (
          <button
            key={dept}
            onClick={() => setSelectedDept(dept)}
            className={`px-4 py-2 rounded-full font-medium shadow-md transition ${
              selectedDept === dept ? "bg-sky-600 text-white" : "bg-white text-sky-700 hover:bg-sky-100"
            }`}
          >
            {dept}
          </button>
        ))}
      </div>

      {/* Search */}
      <div className="max-w-md mx-auto mb-10">
        <input
          type="text"
          placeholder="Search events..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="w-full px-4 py-2 border border-sky-200 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-sky-400"
        />
      </div>

      {/* Event Cards */}
      <motion.section
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto"
        initial="hidden"
        animate="enter"
        exit="exit"
      >
        {filtered.map((ev) => (
          <motion.article
            key={ev.id}
            variants={cardVariants}
            onClick={() => setActive(ev)}
            className="cursor-pointer bg-white rounded-2xl shadow hover:shadow-xl transform hover:-translate-y-1 transition overflow-hidden"
          >
            <img
              src={ev.image || "https://via.placeholder.com/400"}
              alt={ev.title}
              className="w-full h-64 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold text-sky-800">{ev.title}</h3>
              <p className="text-xs text-slate-500 mt-1">
                {ev.dept} • {new Date(ev.date).toLocaleDateString()}
              </p>
              <p className="mt-2 text-slate-600 text-sm">{ev.short}</p>
            </div>
          </motion.article>
        ))}
      </motion.section>

      {/* Modal */}
      <AnimatePresence>
        {active && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 overflow-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-white rounded-2xl max-w-3xl w-full p-6 shadow-2xl"
              initial={{ scale: 0.8, y: -50 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
            >
              <img
                src={active.image || "https://via.placeholder.com/400"}
                alt={active.title}
                className="rounded-lg mb-4 w-full max-h-[500px] object-contain"
              />
              <h2 className="text-2xl font-bold text-sky-700">{active.title}</h2>
              <p className="text-sm text-slate-500 mt-1">
                {active.dept} • {new Date(active.date).toLocaleDateString()}
              </p>
              <p className="mt-4 text-slate-600">{active.short}</p>
             <div className="mt-6 flex gap-3">
  {/* Google Form Button */}
  <a
    href={active.googleForm}
    target="_blank"
    rel="noreferrer noopener"
    className="px-4 py-2 rounded-lg bg-sky-600 text-white font-medium shadow hover:bg-sky-700"
  >
    Open Google Form
  </a>

  {/* WhatsApp Group Button */}
  {active.whatsappGroup && (
    <a
      href={active.whatsappGroup}
      target="_blank"
      rel="noreferrer noopener"
      className="px-4 py-2 rounded-lg bg-green-600 text-white font-medium shadow hover:bg-green-700"
    >
      Join WhatsApp Group
    </a>
  )}

  {/* Close Button */}
  <button
    onClick={() => setActive(null)}
    className="ml-auto px-4 py-2 rounded-lg text-sm text-slate-600"
  >
    Close
  </button>
</div>

            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      {/* Add Your Event Section */}
<section className="max-w-4xl mx-auto my-16 bg-white rounded-2xl shadow-lg p-8 text-center">
  <h2 className="text-2xl font-bold text-sky-700 mb-4">Want to Add Your Event?</h2>
  <p className="text-slate-600 mb-6">
    If you’d like to include your event in <strong>Utkarsh 4.0</strong>, kindly contact us with your event details.
  </p>

  <div className="flex flex-col sm:flex-row gap-4 justify-center">
    {/* WhatsApp Button */}
    <a
      href="https://wa.me/7630871689" // 🔹 Replace with your WhatsApp number
      target="_blank"
      rel="noreferrer noopener"
      className="px-6 py-3 rounded-lg bg-green-600 text-white font-medium shadow hover:bg-green-700"
    >
      📲 Contact on WhatsApp
    </a>

    {/* Email Button */}
    <a
      href="mailto:sbk838152@gmail.com" // 🔹 Replace with your email
      className="px-6 py-3 rounded-lg bg-sky-600 text-white font-medium shadow hover:bg-sky-700"
    >
      ✉️ Send Event via Email
    </a>
  </div>
</section>

      {/* Footer */}
<footer className="mt-16 bg-sky-700 text-white py-8">
  <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 gap-8">
    {/* About Section */}
    <div>
      <h3 className="text-lg font-semibold mb-3">About Utkarsh 4.0</h3>
      <p className="text-sm text-sky-100 leading-relaxed">
        Utkarsh 4.0 is our annual Tech Fest bringing together innovation,
        creativity, and collaboration across all departments. Join us for
        an unforgettable journey of learning and fun!
      </p>
    </div>

    {/* Contact Info */}
    <div>
      <h3 className="text-lg font-semibold mb-3">Contact</h3>
      <p className="text-sm">📍 Tripura institute of technolgy, Agartala</p>
      <p className="text-sm">📞0381-2342-330/322/336/249 </p>
      <p className="text-sm">✉️ mail2tit@gmail.com</p>

      
    </div>
  </div>

  {/* Bottom Bar */}
  <div className="mt-8 border-t border-sky-500 pt-4 text-center text-sm text-sky-200">
    © {new Date().getFullYear()} FOSS Club-Tripura institute of technology. All Rights Reserved.
  </div>
</footer>

    </div>
  );
}
