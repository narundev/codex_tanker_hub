import React, { createContext, useContext, useState, useEffect } from 'react';

export interface EventData {
  id: string;
  title: string;
  poster: string;
  date: string;
  time: string;
  venue: string;
  description: string;
}

export interface FallingCoconut {
  id: number;
  left: number;
  speed: number;
  rotation: number;
  size: number;
}

interface BureauContextType {
  // Mode
  brightMode: number;
  cycleBrightMode: () => void;
  
  // Events
  events: EventData[];
  
  // Coconuts
  coconuts: FallingCoconut[];
  triggerCoconutDrop: () => void;

  // Trackers for Useless Score & Time
  secondsOnSite: number;
  buttonsClicked: number;
  score: number;
  registerAction: () => void;

  // Modals for Gag Buttons
  chairModalOpen: boolean;
  setChairModalOpen: (val: boolean) => void;
  projectsModalOpen: boolean;
  setProjectsModalOpen: (val: boolean) => void;
  contactModalOpen: boolean;
  setContactModalOpen: (val: boolean) => void;
  mouseDistance: number;
  joinModalOpen: boolean;
  setJoinModalOpen: (val: boolean) => void;
  privacyModalOpen: boolean;
  setPrivacyModalOpen: (val: boolean) => void;

  // Member Rank Modal
  loginRankModalOpen: boolean;
  setLoginRankModalOpen: (val: boolean) => void;
  userRankInfo: { memberId: string; status: string } | null;
  generateUserRank: () => void;

  // Certificate Modal & Custom Name
  isCertificateOpen: boolean;
  openCertificate: () => void;
  closeCertificate: () => void;
  customCertificateName: string;
  setCustomCertificateName: (name: string) => void;

  // FAQ
  getFaqAnswer: () => string;
}

const BureauContext = createContext<BureauContextType | undefined>(undefined);

export const BUREAU_EVENTS: EventData[] = [
  {
    id: "code-2-game",
    title: "Code 2 Game: Build Games That Play Themselves",
    poster: "/code 2 game poster.jpeg",
    date: "September 18, 2026",
    time: "4:00 PM IST",
    venue: "TankerHub Sandbox & Virtual Null Void",
    description: "An intensive hands-on hackathon where developers write code that automates playing games without human intervention."
  },
  {
    id: "ippo-sheri",
    title: "Ippo Sheri Aakkam: Bureaucratic Delay Workshop",
    poster: "/ippo sheri poster.jpeg",
    date: "September 22, 2026",
    time: "11:00 AM IST",
    venue: "TankerSpace Main Hall / Procrastination Lounge",
    description: "Learn the ancient art of doing it right away... eventually. A masterclass in peaceful non-action."
  },
  {
    id: "maveli-action",
    title: "Maveli Action: Onam Special Useless Hackathon",
    poster: "/maveli action.jpeg",
    date: "September 26, 2026",
    time: "10:00 AM IST",
    venue: "Auditorium & Payasam Arena",
    description: "Celebrate Onam by building software King Maveli would take one look at and return to the netherworld."
  },
  {
    id: "useless-3",
    title: "Useless Projects 3.0: Flagship Nothingness Summit",
    poster: "/useless poster.jpeg",
    date: "October 05, 2026",
    time: "2:00 PM IST",
    venue: "TankerHub Grand Stage & Global Stream",
    description: "The 3rd national edition of Useless Projects! Gather with makers to showcase solutions to non-existent problems."
  }
];

export const BureauProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [brightMode, setBrightMode] = useState<number>(0);
  const [coconuts, setCoconuts] = useState<FallingCoconut[]>([]);
  const [mouseDistance, setMouseDistance] = useState<number>(482.3);

  // Time & Score tracking
  const [secondsOnSite, setSecondsOnSite] = useState<number>(0);
  const [buttonsClicked, setButtonsClicked] = useState<number>(0);
  const [score, setScore] = useState<number>(12.4);

  // Certificate state
  const [isCertificateOpen, setIsCertificateOpen] = useState<boolean>(false);
  const [customCertificateName, setCustomCertificateName] = useState<string>("Thanishk");

  // Gag Modals state
  const [chairModalOpen, setChairModalOpen] = useState(false);
  const [projectsModalOpen, setProjectsModalOpen] = useState(false);
  const [contactModalOpen, setContactModalOpen] = useState(false);
  const [joinModalOpen, setJoinModalOpen] = useState(false);
  const [privacyModalOpen, setPrivacyModalOpen] = useState(false);

  // Member Rank Modal state
  const [loginRankModalOpen, setLoginRankModalOpen] = useState(false);
  const [userRankInfo, setUserRankInfo] = useState<{ memberId: string; status: string } | null>(null);

  // Timer interval for time wasted & score increase
  useEffect(() => {
    const timer = setInterval(() => {
      setSecondsOnSite(prev => {
        const nextSec = prev + 1;
        // Calculate Uselessness score formula
        const newScore = Math.min(99.99, Number((Math.log10(1 + nextSec * 0.1 + buttonsClicked * 1.5) * 35).toFixed(2)));
        setScore(newScore);
        return nextSec;
      });
    }, 1000);

    const handleMouseMove = (e: MouseEvent) => {
      const dist = Math.hypot(e.clientX - window.innerWidth / 2, e.clientY - (window.innerHeight - 100));
      setMouseDistance(Number(dist.toFixed(1)));
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => {
      clearInterval(timer);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [buttonsClicked]);

  const registerAction = () => {
    setButtonsClicked(prev => prev + 1);
  };

  const cycleBrightMode = () => {
    setBrightMode(prev => (prev + 1) % 3);
    registerAction();
  };

  const triggerCoconutDrop = () => {
    registerAction();
    const newCoconuts: FallingCoconut[] = Array.from({ length: 14 }).map((_, i) => ({
      id: Date.now() + i + Math.random(),
      left: Math.floor(Math.random() * 88) + 4,
      speed: Number((Math.random() * 0.8 + 1.6).toFixed(2)),
      rotation: Math.floor(Math.random() * 360),
      size: Math.floor(Math.random() * 24) + 42
    }));

    setCoconuts(prev => [...prev, ...newCoconuts]);

    setTimeout(() => {
      setCoconuts(prev => prev.filter(c => !newCoconuts.some(nc => nc.id === c.id)));
    }, 3200);
  };

  const generateUserRank = () => {
    registerAction();
    const randomMemberId = Math.floor(1000000 + Math.random() * 9000000).toLocaleString();
    const statuses = ["Probably.", "Unverified Spectator.", "Pending Paperwork since 2018.", "Officially Questionable."];
    const status = statuses[Math.floor(Math.random() * statuses.length)];
    
    setUserRankInfo({ memberId: randomMemberId, status });
    setLoginRankModalOpen(true);
  };

  const openCertificate = () => {
    registerAction();
    setIsCertificateOpen(true);
  };

  const closeCertificate = () => {
    setIsCertificateOpen(false);
  };

  const getFaqAnswer = (): string => {
    registerAction();
    return "“We don't know.”";
  };

  return (
    <BureauContext.Provider value={{
      brightMode,
      cycleBrightMode,
      events: BUREAU_EVENTS,
      coconuts,
      triggerCoconutDrop,
      secondsOnSite,
      buttonsClicked,
      score,
      registerAction,
      chairModalOpen,
      setChairModalOpen,
      projectsModalOpen,
      setProjectsModalOpen,
      contactModalOpen,
      setContactModalOpen,
      mouseDistance,
      joinModalOpen,
      setJoinModalOpen,
      privacyModalOpen,
      setPrivacyModalOpen,
      loginRankModalOpen,
      setLoginRankModalOpen,
      userRankInfo,
      generateUserRank,
      isCertificateOpen,
      openCertificate,
      closeCertificate,
      customCertificateName,
      setCustomCertificateName,
      getFaqAnswer,
    }}>
      {children}
    </BureauContext.Provider>
  );
};

export const useBureau = () => {
  const context = useContext(BureauContext);
  if (!context) {
    throw new Error('useBureau must be used within a BureauProvider');
  }
  return context;
};
