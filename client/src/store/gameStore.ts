import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { GamePhase, GameState, ActiveEvent } from '../types/game';
import { getEventsForPhase } from '../data/events';

function getPhaseForMonth(month: number): GamePhase {
  if (month <= 12) return GamePhase.Preparation;
  if (month <= 20) return GamePhase.Qualification;
  if (month <= 23) return GamePhase.FinalPreparation;
  return GamePhase.Tournament;
}

function generateEvents(phase: GamePhase): ActiveEvent[] {
  const pool = getEventsForPhase(phase);
  if (pool.length === 0) return [];

  // Pick 1-2 random events from the pool
  const count = Math.random() < 0.4 ? 2 : 1;
  const shuffled = [...pool].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, count).map((event) => ({
    ...event,
    instanceId: `${event.id}-${Date.now()}-${Math.random().toString(36).slice(2, 7)}`,
  }));
}

interface GameActions {
  nextMonth: () => void;
  handleDecision: (instanceId: string, choiceIndex: number) => void;
  resetGame: () => void;
}

const initialState: GameState = {
  currentMonth: 1,
  budget: 500,
  phase: GamePhase.Preparation,
  activeEvents: [],
  actionsRemaining: 3,
  tournamentName: 'World Cup',
  cycle: 1,
  gameOver: false,
};

export const useGameStore = create<GameState & GameActions>()(
  persist(
    (set, get) => ({
      ...initialState,
      activeEvents: generateEvents(GamePhase.Preparation),

      nextMonth: () => {
        const { currentMonth, gameOver } = get();
        if (gameOver) return;

        if (currentMonth >= 24) {
          set({ gameOver: true });
          return;
        }

        const nextMonth = currentMonth + 1;
        const newPhase = getPhaseForMonth(nextMonth);
        const newEvents = generateEvents(newPhase);

        set({
          currentMonth: nextMonth,
          phase: newPhase,
          activeEvents: newEvents,
          actionsRemaining: 3,
        });
      },

      handleDecision: (instanceId: string, choiceIndex: number) => {
        const { activeEvents, budget, actionsRemaining } = get();
        if (actionsRemaining <= 0) return;

        const event = activeEvents.find((e) => e.instanceId === instanceId);
        if (!event) return;

        const choice = event.choices[choiceIndex];
        if (!choice) return;

        set({
          budget: budget + choice.effect,
          actionsRemaining: actionsRemaining - 1,
          activeEvents: activeEvents.filter((e) => e.instanceId !== instanceId),
        });
      },

      resetGame: () => {
        set({
          ...initialState,
          activeEvents: generateEvents(GamePhase.Preparation),
        });
      },
    }),
    {
      name: 'tournament-director-save',
    }
  )
);
