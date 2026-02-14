export enum GamePhase {
  Preparation = 'Preparation',
  Qualification = 'Qualification',
  FinalPreparation = 'Final Preparation',
  Tournament = 'Tournament',
}

export interface EventChoice {
  label: string;
  effect: number; // budget impact in millions
}

export interface GameEvent {
  id: string;
  title: string;
  description: string;
  phase: GamePhase;
  choices: EventChoice[];
}

export interface ActiveEvent extends GameEvent {
  instanceId: string; // unique per occurrence
}

export interface GameState {
  currentMonth: number; // 1-24
  budget: number; // in millions
  phase: GamePhase;
  activeEvents: ActiveEvent[];
  actionsRemaining: number;
  tournamentName: string;
  cycle: number;
  gameOver: boolean;
}
