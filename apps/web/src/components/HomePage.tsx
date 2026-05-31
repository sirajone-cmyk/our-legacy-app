import { BookOpen, HeartHandshake, Mail, MapPin, Phone } from "lucide-react";

type HomePageProps = {
  onBeginReading: () => void;
  onSupport: () => void;
};

const supportItems = [
  "The legacy of Islam",
  "The identity of the Muslim Ummah",
  "The love of Rasulullah sallallahu alayhi wa sallam",
  "The teaching of Sirah",
  "The Sunnah in daily life",
  "Beneficial knowledge for future generations",
  "Zakaat, where eligible and correctly allocated",
  "Lillah contributions for Islamic education and community work"
];

function DecorativeRule() {
  return (
    <div className="home-rule" aria-hidden="true">
      <span />
    </div>
  );
}

export function HomePage({ onBeginReading, onSupport }: HomePageProps) {
  return (
    <main className="home-page">
      <section className="home-hero">
        <DecorativeRule />
        <p className="home-kicker">A Sadaqah Jariyah Sirah Reader</p>
        <h1>OUR LEGACY</h1>
        <p className="home-subtitle">Preserving beneficial knowledge for families, students, and communities.</p>
        <div className="home-actions">
          <button className="home-primary-button" onClick={onBeginReading} type="button">
            <BookOpen size={19} />
            Begin Reading
          </button>
          <button className="home-secondary-button" onClick={onSupport} type="button">
            <HeartHandshake size={19} />
            Support This Work
          </button>
        </div>
      </section>
    </main>
  );
}

export function SupportPage({ onBeginReading }: Pick<HomePageProps, "onBeginReading">) {
  return (
    <main className="home-page support-page">
      <section className="home-section support-section">
        <DecorativeRule />
        <p className="home-section-label">Support Sadaqah Jariyah</p>
        <h2>Spending for the Pleasure of Allah</h2>
        <p>
          This project is not only an app. It is an effort to preserve our Islamic legacy, our Islamic identity, the
          culture of Din, and the beloved Sunnah of Rasulullah sallallahu alayhi wa sallam.
        </p>
        <p>
          When Muslims spend for the pleasure of Allah, they are not losing wealth. They are planting seeds for the
          Akhirah.
        </p>
        <blockquote>
          Allah says in Surah al-Baqarah 2:261 that the example of those who spend in His path is like a seed that grows
          seven ears, and in every ear there are one hundred grains. Allah multiplies for whom He wills.
        </blockquote>
        <blockquote>
          “Allah said: Spend, O son of Adam, and I shall spend on you.”
          <cite>Sahih al-Bukhari, 5352; Sahih Muslim, 993</cite>
        </blockquote>
        <blockquote>
          “Charity does not decrease wealth.”
          <cite>Sahih Muslim, 2588</cite>
        </blockquote>
        <p>
          Every sincere contribution becomes part of a living effort to revive love for Din, strengthen iman, teach the
          Sirah, spread the Sunnah, and reconnect hearts with the life of Rasulullah sallallahu alayhi wa sallam.
        </p>
        <p>
          Support can be given as Lillah for Islamic education, community programs, learning materials, and ongoing
          sadaqah jariyah projects. For Zakaat-related contributions, please contact us first so the funds can be
          checked and allocated correctly according to Islamic requirements.
        </p>
        <ul className="support-list">
          {supportItems.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <p>
          For current donation details, project needs, or sponsorship opportunities, please contact Madrassatu Tahseenil
          Quraan directly before sending funds.
        </p>
        <div className="banking-details-grid" aria-label="Banking details">
          <section className="banking-details">
            <h3>Lillah, Student Sponsorship, and Musjid Upkeep</h3>
            <dl>
              <div>
                <dt>Account Name</dt>
                <dd>Madrasatu Tahseenil Quraan</dd>
              </div>
              <div>
                <dt>Bank</dt>
                <dd>Capitec</dd>
              </div>
              <div>
                <dt>Account Number</dt>
                <dd>1565705759</dd>
              </div>
              <div>
                <dt>Branch Code</dt>
                <dd>470010</dd>
              </div>
              <div>
                <dt>Account Type</dt>
                <dd>Saving</dd>
              </div>
              <div>
                <dt>Reference</dt>
                <dd>Our Legacy Lillah / Student Sponsorship / Musjid Upkeep</dd>
              </div>
            </dl>
          </section>
          <section className="banking-details">
            <h3>Zakaat</h3>
            <dl>
              <div>
                <dt>Account Name</dt>
                <dd>Madrasatu Tahseenil Quraan</dd>
              </div>
              <div>
                <dt>Bank</dt>
                <dd>Absa</dd>
              </div>
              <div>
                <dt>Account Number</dt>
                <dd>9381 5221 58</dd>
              </div>
              <div>
                <dt>Branch Code</dt>
                <dd>632005</dd>
              </div>
              <div>
                <dt>Account Type</dt>
                <dd>Islamic Saving</dd>
              </div>
              <div>
                <dt>Reference</dt>
                <dd>Our Legacy Zakaat</dd>
              </div>
            </dl>
          </section>
        </div>
        <p>
          Please send proof of payment via WhatsApp to +27 67 634 0225. For Zakaat, please contact us first if you need
          help confirming correct allocation.
        </p>
        <p>
          May Allah accept every contribution, purify our intentions, place barakah in our wealth, make this effort a
          means of guidance, and allow it to become a sadaqah jariyah for all who support it. Amin.
        </p>
        <div className="home-actions support-actions">
          <button className="home-primary-button" onClick={onBeginReading} type="button">
            <BookOpen size={19} />
            Begin Reading
          </button>
        </div>
      </section>

      <section className="home-section home-contact">
        <p className="home-section-label">Contact</p>
        <h2>Madrassatu Tahseenil Quraan</h2>
        <a href="mailto:madrassatahseenulquraan@gmail.com">
          <Mail size={18} />
          madrassatahseenulquraan@gmail.com
        </a>
        <a href="tel:+27676340225">
          <Phone size={18} />
          +27 67 634 0225
        </a>
        <a href="https://wa.me/27676340225">
          <Phone size={18} />
          WhatsApp for donation details
        </a>
        <p>
          <MapPin size={18} />
          Overport, Durban, KwaZulu-Natal, South Africa
        </p>
      </section>
    </main>
  );
}
