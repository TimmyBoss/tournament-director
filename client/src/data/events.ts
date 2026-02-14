import { GameEvent, GamePhase } from '../types/game';

export const preparationEvents: GameEvent[] = [
  {
    id: 'prep-1',
    title: 'City Bid: Metropolis',
    description: 'Metropolis has submitted a bid to host group-stage matches. Their proposed stadium seats 60,000 but needs renovations.',
    phase: GamePhase.Preparation,
    choices: [
      { label: 'Accept bid & fund renovations', effect: -80 },
      { label: 'Accept bid, city pays for renovations', effect: -20 },
      { label: 'Decline bid', effect: 0 },
    ],
  },
  {
    id: 'prep-2',
    title: 'Sponsor Offer: SportsCorp',
    description: 'SportsCorp wants to become an official tournament sponsor. They offer a generous deal but want exclusive advertising rights.',
    phase: GamePhase.Preparation,
    choices: [
      { label: 'Accept exclusive deal', effect: 80 },
      { label: 'Counter with non-exclusive terms', effect: 40 },
      { label: 'Decline offer', effect: 0 },
    ],
  },
  {
    id: 'prep-3',
    title: 'Stadium Construction Delay',
    description: 'The main stadium construction is behind schedule. You can inject funds to accelerate or accept the delay.',
    phase: GamePhase.Preparation,
    choices: [
      { label: 'Fast-track construction', effect: -60 },
      { label: 'Accept delay, adjust schedule', effect: -10 },
    ],
  },
  {
    id: 'prep-4',
    title: 'Transport Infrastructure Plan',
    description: 'The transport ministry proposes a new rail link between host cities. It would improve logistics significantly.',
    phase: GamePhase.Preparation,
    choices: [
      { label: 'Co-fund the rail project', effect: -50 },
      { label: 'Rely on existing transport', effect: 0 },
    ],
  },
  {
    id: 'prep-5',
    title: 'Broadcasting Rights Auction',
    description: 'Multiple broadcasters are bidding for tournament rights. A bidding war has driven prices up.',
    phase: GamePhase.Preparation,
    choices: [
      { label: 'Accept highest bid (exclusive)', effect: 120 },
      { label: 'Split rights across broadcasters', effect: 90 },
    ],
  },
  {
    id: 'prep-6',
    title: 'Training Facility Request',
    description: 'Several teams are requesting upgraded training facilities at their base camps.',
    phase: GamePhase.Preparation,
    choices: [
      { label: 'Build premium facilities', effect: -40 },
      { label: 'Provide basic facilities', effect: -15 },
      { label: 'Teams arrange their own', effect: 0 },
    ],
  },
  {
    id: 'prep-7',
    title: 'Environmental Protest',
    description: 'Environmental groups oppose construction of a venue in a green zone. Media coverage is growing.',
    phase: GamePhase.Preparation,
    choices: [
      { label: 'Relocate venue (costly)', effect: -70 },
      { label: 'Add green initiatives to plan', effect: -25 },
      { label: 'Proceed as planned', effect: 0 },
    ],
  },
  {
    id: 'prep-8',
    title: 'Technology Partnership',
    description: 'A tech company offers to provide VAR and goal-line technology for free in exchange for branding.',
    phase: GamePhase.Preparation,
    choices: [
      { label: 'Accept partnership', effect: 15 },
      { label: 'Purchase technology independently', effect: -30 },
    ],
  },
  {
    id: 'prep-9',
    title: 'Volunteer Program Launch',
    description: 'Time to set up the volunteer program. More investment means better-trained volunteers.',
    phase: GamePhase.Preparation,
    choices: [
      { label: 'Comprehensive program', effect: -20 },
      { label: 'Basic program', effect: -5 },
    ],
  },
  {
    id: 'prep-10',
    title: 'Hotel Capacity Shortage',
    description: 'Host cities report insufficient hotel capacity for expected visitors.',
    phase: GamePhase.Preparation,
    choices: [
      { label: 'Subsidize new hotel construction', effect: -45 },
      { label: 'Partner with rental platforms', effect: -10 },
      { label: 'Leave to market forces', effect: 0 },
    ],
  },
  {
    id: 'prep-11',
    title: 'Mascot Design Competition',
    description: 'The mascot design finalists are in. A famous designer offers a premium option.',
    phase: GamePhase.Preparation,
    choices: [
      { label: 'Hire famous designer', effect: -15 },
      { label: 'Go with competition winner', effect: -3 },
    ],
  },
  {
    id: 'prep-12',
    title: 'Security Assessment',
    description: 'Security consultants recommend a comprehensive upgrade to venue security systems.',
    phase: GamePhase.Preparation,
    choices: [
      { label: 'Full security overhaul', effect: -55 },
      { label: 'Targeted improvements', effect: -25 },
      { label: 'Minimal changes', effect: -5 },
    ],
  },
];

export const qualificationEvents: GameEvent[] = [
  {
    id: 'qual-1',
    title: 'Qualification Draw Ceremony',
    description: 'The qualification draw ceremony needs a venue. A lavish event boosts prestige.',
    phase: GamePhase.Qualification,
    choices: [
      { label: 'Grand ceremony', effect: -30 },
      { label: 'Standard ceremony', effect: -10 },
    ],
  },
  {
    id: 'qual-2',
    title: 'Referee Controversy',
    description: 'A controversial call in qualifiers sparks debate. Investing in referee training could help.',
    phase: GamePhase.Qualification,
    choices: [
      { label: 'Launch referee training program', effect: -20 },
      { label: 'Issue statement, move on', effect: 0 },
    ],
  },
  {
    id: 'qual-3',
    title: 'Streaming Rights Deal',
    description: 'A streaming platform wants rights for qualification matches at a premium price.',
    phase: GamePhase.Qualification,
    choices: [
      { label: 'Accept streaming deal', effect: 60 },
      { label: 'Keep traditional broadcast only', effect: 20 },
    ],
  },
  {
    id: 'qual-4',
    title: 'Team Travel Dispute',
    description: 'Several teams complain about long-distance travel between qualifier venues.',
    phase: GamePhase.Qualification,
    choices: [
      { label: 'Provide charter flights', effect: -35 },
      { label: 'Offer travel subsidies', effect: -15 },
      { label: 'Teams handle own travel', effect: 0 },
    ],
  },
  {
    id: 'qual-5',
    title: 'Match-Fixing Allegations',
    description: 'Reports emerge of potential match-fixing in qualifiers. An investigation is needed.',
    phase: GamePhase.Qualification,
    choices: [
      { label: 'Full independent investigation', effect: -25 },
      { label: 'Internal review only', effect: -5 },
    ],
  },
  {
    id: 'qual-6',
    title: 'Fan Festival Proposal',
    description: 'Local organizers propose fan festivals in host cities during qualification rounds.',
    phase: GamePhase.Qualification,
    choices: [
      { label: 'Fund fan festivals', effect: -20 },
      { label: 'Allow but don\'t fund', effect: 0 },
    ],
  },
  {
    id: 'qual-7',
    title: 'Pitch Quality Concerns',
    description: 'Several qualification venues have poor pitch quality that could affect play.',
    phase: GamePhase.Qualification,
    choices: [
      { label: 'Replace all pitches', effect: -40 },
      { label: 'Repair worst pitches only', effect: -15 },
    ],
  },
  {
    id: 'qual-8',
    title: 'Merchandise Launch',
    description: 'Time to launch official qualification-phase merchandise. Higher investment means better products.',
    phase: GamePhase.Qualification,
    choices: [
      { label: 'Premium merchandise line', effect: -10 },
      { label: 'Basic merchandise', effect: -3 },
    ],
  },
  {
    id: 'qual-9',
    title: 'Media Accreditation Surge',
    description: 'Media interest is higher than expected. More accreditation means more facilities needed.',
    phase: GamePhase.Qualification,
    choices: [
      { label: 'Expand media facilities', effect: -20 },
      { label: 'Cap accreditations', effect: 0 },
    ],
  },
  {
    id: 'qual-10',
    title: 'Sponsorship Renewal',
    description: 'A major sponsor wants to increase their involvement for the qualification phase.',
    phase: GamePhase.Qualification,
    choices: [
      { label: 'Accept expanded deal', effect: 45 },
      { label: 'Keep current terms', effect: 15 },
    ],
  },
];

export const finalPrepEvents: GameEvent[] = [
  {
    id: 'final-1',
    title: 'Opening Ceremony Planning',
    description: 'The opening ceremony needs finalization. A spectacular show costs more but generates excitement.',
    phase: GamePhase.FinalPreparation,
    choices: [
      { label: 'Spectacular ceremony', effect: -60 },
      { label: 'Modest ceremony', effect: -20 },
    ],
  },
  {
    id: 'final-2',
    title: 'Last-Minute Venue Issue',
    description: 'A venue fails its final safety inspection. Emergency repairs are needed.',
    phase: GamePhase.FinalPreparation,
    choices: [
      { label: 'Emergency repairs', effect: -45 },
      { label: 'Switch to backup venue', effect: -25 },
    ],
  },
  {
    id: 'final-3',
    title: 'Ticket Pricing Strategy',
    description: 'Time to finalize ticket prices. Higher prices mean more revenue but less accessibility.',
    phase: GamePhase.FinalPreparation,
    choices: [
      { label: 'Premium pricing', effect: 70 },
      { label: 'Balanced pricing', effect: 40 },
      { label: 'Affordable pricing', effect: 15 },
    ],
  },
  {
    id: 'final-4',
    title: 'Security Threat Assessment',
    description: 'Intelligence reports suggest heightened security concerns. Additional measures are recommended.',
    phase: GamePhase.FinalPreparation,
    choices: [
      { label: 'Maximum security deployment', effect: -50 },
      { label: 'Enhanced security', effect: -30 },
      { label: 'Standard security', effect: -10 },
    ],
  },
  {
    id: 'final-5',
    title: 'Accommodation Crisis',
    description: 'A hotel chain backing out leaves a shortfall in team accommodations.',
    phase: GamePhase.FinalPreparation,
    choices: [
      { label: 'Secure luxury alternatives', effect: -35 },
      { label: 'Find budget alternatives', effect: -15 },
    ],
  },
  {
    id: 'final-6',
    title: 'Weather Contingency Plan',
    description: 'Meteorologists warn of possible extreme weather during the tournament.',
    phase: GamePhase.FinalPreparation,
    choices: [
      { label: 'Install retractable roofs', effect: -55 },
      { label: 'Prepare rain delay protocol', effect: -10 },
    ],
  },
  {
    id: 'final-7',
    title: 'Broadcast Test Run',
    description: 'Broadcasters request a comprehensive test of all camera systems and feeds.',
    phase: GamePhase.FinalPreparation,
    choices: [
      { label: 'Full broadcast rehearsal', effect: -15 },
      { label: 'Basic technical test', effect: -5 },
    ],
  },
  {
    id: 'final-8',
    title: 'VIP Hospitality Packages',
    description: 'Corporate demand for VIP packages is high. Expanding capacity could be lucrative.',
    phase: GamePhase.FinalPreparation,
    choices: [
      { label: 'Expand VIP capacity', effect: 50 },
      { label: 'Keep limited exclusivity', effect: 30 },
    ],
  },
  {
    id: 'final-9',
    title: 'Medical Facilities Review',
    description: 'The medical team requests additional equipment and personnel for the tournament.',
    phase: GamePhase.FinalPreparation,
    choices: [
      { label: 'Full medical upgrade', effect: -25 },
      { label: 'Basic medical setup', effect: -8 },
    ],
  },
  {
    id: 'final-10',
    title: 'Final Sponsorship Push',
    description: 'A last-minute sponsor wants in. The deal is lucrative but requires fast negotiation.',
    phase: GamePhase.FinalPreparation,
    choices: [
      { label: 'Fast-track the deal', effect: 55 },
      { label: 'Decline, too late', effect: 0 },
    ],
  },
];

export const tournamentEvents: GameEvent[] = [
  {
    id: 'tourn-1',
    title: 'Opening Day Success',
    description: 'The tournament has kicked off! Early reports are positive. How do you celebrate?',
    phase: GamePhase.Tournament,
    choices: [
      { label: 'Host gala dinner', effect: -20 },
      { label: 'Modest celebration', effect: -5 },
    ],
  },
  {
    id: 'tourn-2',
    title: 'Surprise Merchandise Demand',
    description: 'Tournament merchandise is selling faster than expected. You can ramp up production.',
    phase: GamePhase.Tournament,
    choices: [
      { label: 'Rush additional stock', effect: 35 },
      { label: 'Sell remaining stock only', effect: 15 },
    ],
  },
  {
    id: 'tourn-3',
    title: 'Pitch Invasion Incident',
    description: 'A fan ran onto the pitch during a match. Security review is needed.',
    phase: GamePhase.Tournament,
    choices: [
      { label: 'Emergency security boost', effect: -30 },
      { label: 'Review and improve protocols', effect: -10 },
    ],
  },
  {
    id: 'tourn-4',
    title: 'Record TV Ratings',
    description: 'TV ratings are breaking records! Broadcasters want to renegotiate for additional content.',
    phase: GamePhase.Tournament,
    choices: [
      { label: 'Negotiate bonus content deal', effect: 50 },
      { label: 'Stick to original agreement', effect: 10 },
    ],
  },
  {
    id: 'tourn-5',
    title: 'Final Match Preparations',
    description: 'The final match venue needs last touches. This is the showpiece event.',
    phase: GamePhase.Tournament,
    choices: [
      { label: 'Spare no expense', effect: -40 },
      { label: 'Standard preparations', effect: -15 },
    ],
  },
];

export const allEvents: GameEvent[] = [
  ...preparationEvents,
  ...qualificationEvents,
  ...finalPrepEvents,
  ...tournamentEvents,
];

export function getEventsForPhase(phase: GamePhase): GameEvent[] {
  switch (phase) {
    case GamePhase.Preparation:
      return preparationEvents;
    case GamePhase.Qualification:
      return qualificationEvents;
    case GamePhase.FinalPreparation:
      return finalPrepEvents;
    case GamePhase.Tournament:
      return tournamentEvents;
  }
}
