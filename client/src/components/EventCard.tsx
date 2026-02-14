import { ActiveEvent, GamePhase } from '../types/game';
import { useGameStore } from '../store/gameStore';
import styles from './EventCard.module.css';

const phaseColors: Record<GamePhase, string> = {
  [GamePhase.Preparation]: '#4a90d9',
  [GamePhase.Qualification]: '#e67e22',
  [GamePhase.FinalPreparation]: '#9b59b6',
  [GamePhase.Tournament]: '#27ae60',
};

interface EventCardProps {
  event: ActiveEvent;
}

export function EventCard({ event }: EventCardProps) {
  const { handleDecision, actionsRemaining, phase } = useGameStore();
  const color = phaseColors[phase];

  return (
    <div className={styles.card} style={{ '--phase-color': color } as React.CSSProperties}>
      <h3 className={styles.title}>{event.title}</h3>
      <p className={styles.description}>{event.description}</p>
      <div className={styles.choices}>
        {event.choices.map((choice, idx) => (
          <button
            key={idx}
            className={styles.choiceBtn}
            disabled={actionsRemaining <= 0}
            onClick={() => handleDecision(event.instanceId, idx)}
          >
            <span>{choice.label}</span>
            <span
              className={
                choice.effect > 0
                  ? styles.effectPositive
                  : choice.effect < 0
                  ? styles.effectNegative
                  : styles.effectNeutral
              }
            >
              {choice.effect > 0 ? '+' : ''}
              {choice.effect === 0 ? '--' : `€${choice.effect}M`}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}
