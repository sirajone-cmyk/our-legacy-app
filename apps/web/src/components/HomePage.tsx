import { BookOpen, Clipboard, HeartHandshake, Library, Mail, MapPin, MessageCircle, Phone, Send } from "lucide-react";

type HomePageProps = {
  onBeginReading: () => void;
  onSupport: () => void;
};

type SupportPageProps = Pick<HomePageProps, "onBeginReading"> & {
  onSources: () => void;
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

const appUrl = "https://sirajone-786.web.app/";
const shareText =
  "OUR LEGACY by SirajOne is a Sadaqah Jariyah Sirah reader preserving beneficial Islamic knowledge for families, students, and communities.";

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
        <p className="home-presented-by">Presented by SirajOne</p>
        <p className="home-rights">© 2026 OUR LEGACY. Presented by SirajOne. All rights reserved.</p>
      </section>
    </main>
  );
}

export function SupportPage({ onBeginReading, onSources }: SupportPageProps) {
  const copyProjectLink = async () => {
    await navigator.clipboard.writeText(appUrl);
  };

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
        <p className="content-use-note">
          Content may be shared for personal and educational benefit. Please do not copy, rebrand, or republish this
          project without permission.
        </p>
        <section className="share-project" aria-label="Share this project">
          <p className="home-section-label">Share This Project</p>
          <h3>If this reader benefited you, share it with others.</h3>
          <p>
            Share OUR LEGACY with family, friends, students, or your community so more people can benefit from the
            Sirah and Islamic learning content.
          </p>
          <div className="share-actions">
            <a
              href={`https://wa.me/?text=${encodeURIComponent(`${shareText} ${appUrl}`)}`}
              rel="noreferrer"
              target="_blank"
            >
              <MessageCircle size={18} />
              Share on WhatsApp
            </a>
            <button onClick={copyProjectLink} type="button">
              <Clipboard size={18} />
              Copy Link
            </button>
            <a href={`mailto:?subject=${encodeURIComponent("OUR LEGACY | SirajOne")}&body=${encodeURIComponent(`${shareText}\n\n${appUrl}`)}`}>
              <Mail size={18} />
              Email This Project
            </a>
            <a
              href={`https://wa.me/27676340225?text=${encodeURIComponent("Assalamu alaykum. I would like to give feedback about the OUR LEGACY app.")}`}
              rel="noreferrer"
              target="_blank"
            >
              <Send size={18} />
              Send Feedback
            </a>
          </div>
        </section>
        <div className="home-actions support-actions">
          <button className="home-primary-button" onClick={onBeginReading} type="button">
            <BookOpen size={19} />
            Begin Reading
          </button>
          <button className="home-secondary-button" onClick={onSources} type="button">
            <Library size={19} />
            Sources & Methodology
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
        <p className="home-rights">© 2026 OUR LEGACY. Presented by SirajOne. All rights reserved.</p>
      </section>
    </main>
  );
}

export function SourcesPage({ onBeginReading, onSupport }: HomePageProps) {
  return (
    <main className="home-page support-page">
      <section className="home-section support-section sources-section">
        <DecorativeRule />
        <p className="home-section-label">Sources & Methodology</p>
        <h2>Sources & Methodology</h2>
        <p>
          The content in Our Legacy is compiled from the Noble Qur'an, authentic Ahadith, and reliable classical works
          of Sirah, Islamic history, biography, and scholarship.
        </p>
        <p>
          Our aim is to preserve beneficial Islamic knowledge in a clear, family-friendly, and practical format while
          remaining faithful to authentic sources.
        </p>

        <section className="methodology-panel" aria-label="Major references">
          <h3>Major references include:</h3>
          <ul className="support-list">
            <li>The Noble Qur'an</li>
            <li>Sahih al-Bukhari</li>
            <li>Sahih Muslim</li>
            <li>As-Sirah an-Nabawiyyah of Ibn Hisham</li>
            <li>Al-Bidayah wa an-Nihayah by Ibn Kathir</li>
            <li>Siyar A'lam an-Nubala by Imam adh-Dhahabi</li>
            <li>Other reliable classical works of Sirah, Tarikh, Tabaqat, and Islamic scholarship</li>
          </ul>
        </section>

        <section className="methodology-panel" aria-label="Methodology note">
          <h3>Important methodology note:</h3>
          <p>Qur'anic verses and authentic Ahadith are given priority.</p>
          <p>Historical reports are presented as Sirah and history material.</p>
          <p>
            Where exact authentication is required, Qur'an and authentic Hadith are preferred over weaker historical
            reports.
          </p>
        </section>

        <div className="home-actions support-actions">
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
