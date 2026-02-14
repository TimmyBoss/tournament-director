import { useGameStore } from '../store/gameStore';
import { GamePhase } from '../types/game';
import styles from './GameHeader.module.css';

const phaseColors: Record<GamePhase, string> = {
  [GamePhase.Preparation]: '#4a90d9',
  [GamePhase.Qualification]: '#e67e22',
  [GamePhase.FinalPreparation]: '#9b59b6',
  [GamePhase.Tournament]: '#27ae60',
};

export function GameHeader() {
  const { tournamentName, cycle, currentMonth, phase, budget } = useGameStore();
  const color = phaseColors[phase];

  return (
    <header className={styles.header} style={{ '--phase-color': color } as React.CSSProperties}>
      <h1 className={styles.title}>
        {tournamentName} <span className={styles.cycle}>Cycle {cycle}</span>
      </h1>
      <div className={styles.stats}>
        <div className={styles.stat}>
          <div className={styles.statLabel}>Month</div>
          <div className={styles.statValue}>{currentMonth} / 24</div>
        </div>
        <div className={styles.stat}>
          <div className={styles.statLabel}>Phase</div>
          <span className={styles.phaseBadge}>{phase}</span>
        </div>
        <div className={styles.stat}>
          <div className={styles.statLabel}>Budget</div>
          <div className={`${styles.statValue} ${budget >= 0 ? styles.budgetPositive : styles.budgetNegative}`}>
            &euro;{budget}M
          </div>
        </div>
      </div>
    </header>
  );
}
