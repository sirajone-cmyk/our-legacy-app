/**
 * FamilyModePlaceholder — Placeholder for the Family Reading Mode tab.
 * Shown while the full family mode feature is being built.
 * Matches the design system aesthetic exactly.
 */

import { BookOpen, Heart, Users } from "lucide-react";

type FamilyModePlaceholderProps = {
  onStartReading: () => void;
};

export function FamilyModePlaceholder({ onStartReading }: FamilyModePlaceholderProps) {
  return (
    <main className="placeholder-screen" id="main-content">
      <div className="placeholder-icon" aria-hidden="true">
        <Users size={48} />
      </div>
      <p className="placeholder-kicker">Coming Soon</p>
      <h1 className="placeholder-heading">Family Reading Mode</h1>
      <p className="placeholder-desc">
        A dedicated mode for family Taʿlīm sessions — larger text, highlighted
        reflection questions, family discussion prompts, and a distraction-free
        reading experience for children and elders alike.
      </p>

      <div className="placeholder-features">
        <div className="placeholder-feature">
          <BookOpen size={18} aria-hidden="true" />
          <span>Larger, child-friendly text size</span>
        </div>
        <div className="placeholder-feature">
          <Heart size={18} aria-hidden="true" />
          <span>Highlighted Duʿāʾ and action points</span>
        </div>
        <div className="placeholder-feature">
          <Users size={18} aria-hidden="true" />
          <span>Family discussion question cards</span>
        </div>
      </div>

      <p className="placeholder-arabic" dir="rtl" lang="ar">
        إِنَّمَا الأَعْمَالُ بِالنِّيَّاتِ
      </p>
      <p className="placeholder-arabic-tr">
        "Actions are by intentions."
      </p>
      <p className="placeholder-ref">Ṣaḥīḥ al-Bukhārī, 1</p>

      <button
        className="placeholder-cta"
        onClick={onStartReading}
        type="button"
      >
        <BookOpen size={16} aria-hidden="true" />
        Start Reading Now
      </button>
    </main>
  );
}
