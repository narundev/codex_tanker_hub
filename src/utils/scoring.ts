export interface DossierState {
  caseNumber: string;
  buttonsClicked: number;
  distinctInteractions: Set<string>;
  secondsOnSite: number;
  metersScrolled: number;
  clipboardIntercepts: number;
  rightClicksOpened: number;
  faqClicks: number;
  ticketsFiled: number;
  easterEggsFound: number;
  termsScrolled: boolean;
  formsSubmitted: number;
  muteClickedCount: number;
  formalModeToggled: number;
}

export function calculateUselessnessScore(state: DossierState): number {
  const weightedTotal = 
    (state.buttonsClicked * 1.0) +
    (state.distinctInteractions.size * 3.0) +
    (Math.min(state.secondsOnSite, 600) * 0.05) +
    (state.metersScrolled * 0.2) +
    (state.clipboardIntercepts * 2.0) +
    (state.rightClicksOpened * 1.5) +
    (state.faqClicks * 0.5) +
    (state.easterEggsFound * 10.0) +
    (state.termsScrolled ? 5.0 : 0) +
    (state.formsSubmitted * 4.0) +
    (state.muteClickedCount * 1.2) +
    (state.ticketsFiled * 3.5);

  if (weightedTotal === 0) return 0;

  // Formula from PRD section 9: min(99.99, log10(1 + weighted_total) * 22)
  const score = Math.min(99.99, Math.log10(1 + weightedTotal) * 22);
  return Number(score.toFixed(2));
}

export function getBureauRank(score: number): { title: string; subtitle: string } {
  if (score >= 90) {
    return {
      title: "Grand High Undersecretary of Applied Nothing",
      subtitle: "Supreme Administrative Master of Purposeful Vacuum"
    };
  } else if (score >= 75) {
    return {
      title: "Senior Director of Redundant Logistics",
      subtitle: "Chief Overseer of Circular Endeavors"
    };
  } else if (score >= 55) {
    return {
      title: "Deputy Assistant of Cursor Affairs",
      subtitle: "Principal Evaluator of Unnecessary Motion"
    };
  } else if (score >= 30) {
    return {
      title: "Junior Officer of Decorative Inefficiency",
      subtitle: "Certified Inspector of Unproductive Minutes"
    };
  } else {
    return {
      title: "Trainee Idleness Delegate",
      subtitle: "Probationary Clerk for Regrettable Clicks"
    };
  }
}

export const CASE_OFFICER_COMMENTS: { threshold: number; text: string }[] = [
  { threshold: 0, text: "Case File Opened. Subject has arrived at the Bureau. Intent: Suspect." },
  { threshold: 5, text: "Subject has executed 5 unnecessary clicks. Diligence index increasing." },
  { threshold: 15, text: "Case Officer #04 noting: Subject appears committed to accomplishing zero outcomes." },
  { threshold: 30, text: "Warning: Subject has surpassed average productivity loss benchmarks!" },
  { threshold: 50, text: "Notice of Distinction: Subject has discovered multiple obscure Bureau departments." },
  { threshold: 75, text: "High Bureaucratic Honor: Subject is approaching Maximum Permissible Nothingness." },
  { threshold: 90, text: "URGENT: Subject has achieved Absolute Administrative Uselessness! Certificate Authorized." }
];
