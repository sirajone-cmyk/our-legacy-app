/**
 * OUR LEGACY — Map Data
 *
 * Defines the illustrated maps used in reader pages.
 * Coordinates are expressed as percentages of the SVG viewBox (0–100).
 * This allows the same data to render at any map size.
 *
 * IMPORTANT: Location descriptions and Hadith references must be
 * reviewed by a qualified Islamic scholar before publishing.
 */

export type MarkerType =
  | "city"      // major city
  | "event"     // a specific event happened here
  | "start"     // journey origin
  | "end"       // journey destination
  | "camp"      // temporary camp / stop
  | "battle"    // battlefield
  | "sacred";   // Masjid, sacred site

export type RouteStyle = "solid" | "dotted" | "dashed";

export type MapLocation = {
  id: string;
  name: string;
  nameAr?: string;
  description: string;
  reference?: string;
  markerType: MarkerType;
  /** Position as [x%, y%] within the SVG viewBox */
  coords: [number, number];
};

export type MapRoute = {
  fromId: string;
  toId: string;
  style: RouteStyle;
  label?: string;
};

export type ReaderMap = {
  id: string;
  title: string;
  subtitle?: string;
  /** Region this map covers — used to select the correct SVG base */
  region: "arabian-peninsula" | "levant" | "north-africa" | "persia" | "world";
  locations: MapLocation[];
  routes?: MapRoute[];
};

// ── Maps ───────────────────────────────────────────────────────────────────

export const READER_MAPS: ReaderMap[] = [

  // ── Hijrah: Makkah to Madinah ──────────────────────────────────────────
  {
    id: "hijrah-route",
    title: "The Journey of Hijrah",
    subtitle: "From Makkah to Madinah · 622 CE / 1 AH",
    region: "arabian-peninsula",
    locations: [
      {
        id: "makkah",
        name: "Makkah al-Mukarramah",
        nameAr: "مكة المكرمة",
        description:
          "The blessed city of Makkah — birthplace of the Prophet ﷺ and the direction of prayer for every Muslim. It was from here that the Hijrah began.",
        markerType: "sacred",
        coords: [42, 62],
      },
      {
        id: "cave-thawr",
        name: "Cave of Thawr",
        nameAr: "غار ثور",
        description:
          "The Prophet ﷺ and Abū Bakr رضي الله عنه sheltered here for three nights while the Quraysh searched for them. Allāh granted them divine protection.",
        reference: "Sahih al-Bukhari, 3652",
        markerType: "event",
        coords: [41, 65],
      },
      {
        id: "coastal-stop-1",
        name: "Coastal Route",
        description:
          "Guided by ʿAbdullāh ibn Urayqiṭ, they took the less-travelled coastal route along the Red Sea — avoiding the main road watched by Quraysh.",
        markerType: "camp",
        coords: [34, 58],
      },
      {
        id: "quba",
        name: "Qubāʾ",
        nameAr: "قباء",
        description:
          "The first stop on the outskirts of Madinah. The Prophet ﷺ stayed here for a few days and built the first masjid of Islām — Masjid Qubāʾ.",
        reference: "Sahih al-Bukhari, 3906",
        markerType: "sacred",
        coords: [46, 44],
      },
      {
        id: "madinah",
        name: "Madinah al-Munawwarah",
        nameAr: "المدينة المنورة",
        description:
          "The city that welcomed the Prophet ﷺ with love and song. Here, the Islamic state was established, the ummah united, and the foundation of civilisation was laid.",
        markerType: "end",
        coords: [47, 42],
      },
    ],
    routes: [
      { fromId: "makkah", toId: "cave-thawr", style: "dotted", label: "Night departure" },
      { fromId: "cave-thawr", toId: "coastal-stop-1", style: "dashed", label: "3 nights" },
      { fromId: "coastal-stop-1", toId: "quba", style: "solid" },
      { fromId: "quba", toId: "madinah", style: "solid", label: "14 Rabīʿ al-Awwal 1 AH" },
    ],
  },

  // ── Battle of Badr ─────────────────────────────────────────────────────
  {
    id: "battle-badr",
    title: "The Battle of Badr",
    subtitle: "17 Ramaḍān 2 AH / 13 March 624 CE",
    region: "arabian-peninsula",
    locations: [
      {
        id: "madinah-badr",
        name: "Madinah",
        nameAr: "المدينة المنورة",
        description: "The Muslim army of 313 departed from Madinah.",
        markerType: "start",
        coords: [47, 42],
      },
      {
        id: "badr-well",
        name: "Wells of Badr",
        nameAr: "بئر بدر",
        description:
          "The Muslims arrived first and controlled the wells of Badr — a strategic advantage. The Prophet ﷺ positioned his forces wisely before the battle.",
        markerType: "event",
        coords: [43, 50],
      },
      {
        id: "badr-battlefield",
        name: "Battlefield of Badr",
        nameAr: "غزوة بدر",
        description:
          "313 Muslims faced an army of ~1000 Quraysh. Through divine help and the courage of the believers, Islām won its first decisive military victory.",
        reference: "Surah al-Anfal, 8:9",
        markerType: "battle",
        coords: [43, 51],
      },
    ],
    routes: [
      { fromId: "madinah-badr", toId: "badr-well", style: "solid" },
      { fromId: "badr-well", toId: "badr-battlefield", style: "dotted" },
    ],
  },

  // ── Abu Bakr: Ridda Wars ───────────────────────────────────────────────
  {
    id: "ridda-wars",
    title: "The Ridda Wars",
    subtitle: "Abū Bakr al-Ṣiddīq رضي الله عنه · 11–12 AH / 632–633 CE",
    region: "arabian-peninsula",
    locations: [
      {
        id: "madinah-ridda",
        name: "Madinah",
        nameAr: "المدينة المنورة",
        description:
          "From Madinah, Abū Bakr رضي الله عنه dispatched eleven armies to different parts of Arabia to suppress the apostasy and restore the unity of the Muslim ummah.",
        markerType: "start",
        coords: [47, 42],
      },
      {
        id: "najd",
        name: "Najd",
        nameAr: "نجد",
        description:
          "Several tribes of central Arabia including the followers of Musaylimah the Liar rose in apostasy. Khālid ibn al-Walīd was dispatched here.",
        markerType: "event",
        coords: [52, 50],
      },
      {
        id: "yamama",
        name: "Yamāmah",
        nameAr: "اليمامة",
        description:
          "The decisive battle of ʿAqrabāʾ. Musaylimah was defeated and killed here by Waḥshī ibn Ḥarb. Over 1,200 Muslims were martyred — including many Qurʾān memorisers.",
        markerType: "battle",
        coords: [54, 52],
      },
      {
        id: "bahrain",
        name: "Bahrain",
        nameAr: "البحرين",
        description: "Eastern Arabia — apostasy suppressed by ʿAlāʾ ibn al-Haḍramī.",
        markerType: "event",
        coords: [61, 50],
      },
      {
        id: "oman",
        name: "Omān",
        nameAr: "عُمان",
        description: "Apostasy in Omān was suppressed by Ḥudhayfa and ʿArfaja.",
        markerType: "event",
        coords: [68, 57],
      },
      {
        id: "yemen",
        name: "Yemen",
        nameAr: "اليمن",
        description: "Multiple expeditions sent to Yemen to restore Islām across the region.",
        markerType: "event",
        coords: [46, 68],
      },
    ],
    routes: [
      { fromId: "madinah-ridda", toId: "najd", style: "solid" },
      { fromId: "najd", toId: "yamama", style: "solid" },
      { fromId: "madinah-ridda", toId: "bahrain", style: "dashed" },
      { fromId: "madinah-ridda", toId: "oman", style: "dashed" },
      { fromId: "madinah-ridda", toId: "yemen", style: "dashed" },
    ],
  },

];

// ── Helpers ───────────────────────────────────────────────────────────────

export function getMapById(id: string): ReaderMap | undefined {
  return READER_MAPS.find((m) => m.id === id);
}

export function getMarkerColor(type: MarkerType): string {
  const colors: Record<MarkerType, string> = {
    city:    "#b88a32",
    event:   "#2e6f5b",
    start:   "#2e6f5b",
    end:     "#b88a32",
    camp:    "#68726e",
    battle:  "#7a1f2e",
    sacred:  "#12332f",
  };
  return colors[type];
}
