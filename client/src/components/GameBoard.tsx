import { useGameStore } from '../store/gameStore';
import { GamePhase } from '../types/game';
import { EventCard } from './EventCard';
import styles from './GameBoard.module.css';

const phaseColors: Record<GamePhase, string> = {
  [GamePhase.Preparation]: '#4a90d9',
  [GamePhase.Qualification]: '#e67e22',
  [GamePhase.FinalPreparation]: '#9b59b6',
  [GamePhase.Tournament]: '#27ae60',
};

export function GameBoard() {
  const { currentMonth, phase, activeEvents, actionsRemaining, budget, gameOver, nextMonth, resetGame } =
    useGameStore();
  const color = phaseColors[phase];
  const cssVars = { '--phase-color': color } as React.CSSProperties;

  if (gameOver) {
    const verdict = budget >= 0 ? 'success' : 'failure';
    return (
      <div className={styles.board}>
        <div className={styles.summary}>
          <h2 className={styles.summaryTitle}>Tournament Complete!</h2>
          <p className={styles.summarySubtitle}>Your 24-month journey has come to an end.</p>
          <p className={`${styles.summaryBudget} ${budget >= 0 ? styles.verdictGood : styles.verdictBad}`}>
            &euro;{budget}M
          </p>
          <p className={styles.summaryBudgetLabel}>Final Budget</p>
          <p className={`${styles.summaryVerdict} ${verdict === 'success' ? styles.verdictGood : styles.verdictBad}`}>
            {verdict === 'success'
              ? 'Congratulations! You delivered a successful tournament!'
              : 'The tournament went over budget. Better luck next cycle!'}
          </p>
          <br />
          <button className={styles.resetBtn} onClick={resetGame}>
            Start New Cycle
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.board} style={cssVars}>
      {/* Progress bar */}
      <div className={styles.progressSection}>
        <div className={styles.progressBar}>
          {Array.from({ length: 24 }, (_, i) => (
            <div
              key={i}
              className={`${styles.progressSegment} ${i < currentMonth ? styles.active : ''}`}
            />
          ))}
        </div>
        <div className={styles.progressLabels}>
          <span>Preparation</span>
          <span>Qualification</span>
          <span>Final Prep</span>
          <span>Tournament</span>
        </div>
      </div>

      {/* Actions remaining */}
      <div className={styles.actionsBar}>
        <span className={styles.actionsLabel}>Actions remaining this month</span>
        <div className={styles.actionDots}>
          {Array.from({ length: 3 }, (_, i) => (
            <div key={i} className={`${styles.dot} ${i < actionsRemaining ? styles.filled : ''}`} />
          ))}
        </div>
      </div>

      {/* Events */}
      {activeEvents.length > 0 ? (
        <div className={styles.eventsGrid}>
          {activeEvents.map((event) => (
            <EventCard key={event.instanceId} event={event} />
          ))}
        </div>
      ) : (
        <div className={styles.noEvents}>No events this month. Advance to the next month.</div>
      )}

      {/* Next month button */}
      <button className={styles.nextMonthBtn} onClick={nextMonth}>
        {currentMonth < 24 ? `Advance to Month ${currentMonth + 1}` : 'Complete Tournament'}
      </button>
    </div>
  );
}
