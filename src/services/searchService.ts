import Fuse from 'fuse.js';
import { VEDAS_DATA } from '../data/vedas';
import { VEDANGAS_DATA } from '../data/vedangas';
import { UPANISHADS_DATA } from '../data/upanishads';
import { GITA_CHAPTERS_DATA } from '../data/bhagavadGita';
import { RAMAYANA_SECTIONS, MAHABHARATA_SECTIONS, MAJOR_EPIC_CHARACTERS } from '../data/epics';
import { PURANAS_DATA } from '../data/puranas';
import { DARSHANAS_DATA } from '../data/darshanas';
import { ACHARYAS_DATA } from '../data/acharyas';
import { SHANKARACHARYA_PEETHAS_DATA } from '../data/peethas';
import { SAINTS_DATA } from '../data/saints';
import { TEMPLES_DATA } from '../data/temples';
import { FESTIVALS_DATA } from '../data/festivals';
import { SANSKRIT_LESSONS_DATA } from '../data/sanskrit';
import { HISTORICAL_TIMELINE_DATA } from '../data/timelines';
import { GENEALOGY_DATA } from '../data/genealogy';
import { ScriptureCategory } from '../types';

export interface SearchResultItem {
  id: string;
  type: ScriptureCategory | 'character' | 'timeline' | 'genealogy' | 'peetha';
  title: string;
  sanskritTitle?: string;
  subtitle?: string;
  snippet: string;
  categoryName: string;
  tags?: string[];
  linkUrl: string;
}

// Compile master index
function compileMasterDataset(): SearchResultItem[] {
  const master: SearchResultItem[] = [];

  // Vedas
  VEDAS_DATA.forEach(v => {
    master.push({
      id: v.id,
      type: 'veda',
      title: v.title,
      sanskritTitle: v.sanskritTitle,
      subtitle: `${v.transliteration} • ${v.historicalPeriod}`,
      snippet: v.summary,
      categoryName: 'Veda',
      tags: v.keyThemes,
      linkUrl: `/library/vedas`
    });

    v.verses?.forEach(verse => {
      master.push({
        id: verse.id,
        type: 'veda',
        title: `${v.title} ${verse.verseNumber}`,
        sanskritTitle: verse.sanskrit.split('\n')[0],
        subtitle: verse.transliteration,
        snippet: verse.translation,
        categoryName: 'Vedic Mantra',
        tags: verse.keyConcepts,
        linkUrl: `/library/vedas`
      });
    });
  });

  // Vedangas
  VEDANGAS_DATA.forEach(v => {
    master.push({
      id: v.id,
      type: 'vedanga',
      title: v.name,
      sanskritTitle: v.sanskritName,
      subtitle: v.meaning,
      snippet: v.description,
      categoryName: 'Vedanga',
      tags: v.keyTexts,
      linkUrl: `/library/vedangas`
    });
  });

  // Upanishads
  UPANISHADS_DATA.forEach(u => {
    master.push({
      id: u.id,
      type: 'upanishad',
      title: u.name,
      sanskritTitle: u.sanskritName,
      subtitle: `${u.associatedVeda} ${u.isPrincipal ? '• Principal Upanishad' : ''}`,
      snippet: u.summary,
      categoryName: 'Upanishad',
      tags: u.keyTeachings,
      linkUrl: `/library/upanishads`
    });
  });

  // Bhagavad Gita
  GITA_CHAPTERS_DATA.forEach(c => {
    master.push({
      id: `gita-ch-${c.chapterNumber}`,
      type: 'gita',
      title: `Bhagavad Gita Chapter ${c.chapterNumber}: ${c.title}`,
      sanskritTitle: c.sanskritTitle,
      subtitle: c.meaning,
      snippet: c.summary,
      categoryName: 'Bhagavad Gita',
      tags: c.keyThemes,
      linkUrl: `/library/gita`
    });

    c.featuredVerses.forEach(fv => {
      master.push({
        id: fv.id,
        type: 'gita',
        title: `Bhagavad Gita ${fv.chapterNumber}.${fv.verseNumber}`,
        sanskritTitle: fv.sanskrit.split('\n')[0],
        subtitle: fv.transliteration,
        snippet: fv.translation,
        categoryName: 'Gita Verse',
        tags: fv.keyConcepts,
        linkUrl: `/library/gita`
      });
    });
  });

  // Ramayana & Mahabharata
  RAMAYANA_SECTIONS.concat(MAHABHARATA_SECTIONS).forEach(s => {
    master.push({
      id: s.id,
      type: 'epic',
      title: `${s.epic}: ${s.sectionName}`,
      sanskritTitle: s.sanskritName,
      subtitle: s.epic,
      snippet: s.summary,
      categoryName: 'Epic Section',
      tags: s.keyEvents,
      linkUrl: `/library/epics`
    });
  });

  MAJOR_EPIC_CHARACTERS.forEach(ch => {
    master.push({
      id: ch.id,
      type: 'character',
      title: ch.name,
      sanskritTitle: ch.sanskritName,
      subtitle: `${ch.epic} • ${ch.lineage}`,
      snippet: ch.bio,
      categoryName: 'Epic Personality',
      tags: ch.keyQualities,
      linkUrl: `/library/epics`
    });
  });

  // Puranas
  PURANAS_DATA.forEach(p => {
    master.push({
      id: p.id,
      type: 'purana',
      title: p.name,
      sanskritTitle: p.sanskritName,
      subtitle: `${p.type} • Deity: ${p.dominantDeity}`,
      snippet: p.synopsis,
      categoryName: 'Purana',
      tags: p.keyTopics,
      linkUrl: `/library/puranas`
    });
  });

  // Darshanas
  DARSHANAS_DATA.forEach(d => {
    master.push({
      id: d.id,
      type: 'darshana',
      title: d.name,
      sanskritTitle: d.sanskritName,
      subtitle: `Founder: ${d.founderOrKeyRishi} • ${d.type}`,
      snippet: d.centralPremise,
      categoryName: 'Philosophical School',
      tags: d.majorCommentators,
      linkUrl: `/philosophy`
    });
  });

  // Acharyas & Saints & Peethas
  ACHARYAS_DATA.forEach(a => {
    master.push({
      id: a.id,
      type: 'acharya',
      title: a.name,
      sanskritTitle: a.sanskritName,
      subtitle: `${a.period} • ${a.tradition}`,
      snippet: a.biography,
      categoryName: 'Acharya',
      tags: a.majorWorks,
      linkUrl: `/acharyas`
    });
  });

  SAINTS_DATA.forEach(s => {
    master.push({
      id: s.id,
      type: 'acharya',
      title: s.name,
      sanskritTitle: s.sanskritName,
      subtitle: `${s.period} • ${s.region}`,
      snippet: s.bio,
      categoryName: 'Saint',
      tags: s.compositionsOrWorks,
      linkUrl: `/acharyas`
    });
  });

  SHANKARACHARYA_PEETHAS_DATA.forEach(p => {
    master.push({
      id: p.id,
      type: 'peetha',
      title: p.name,
      subtitle: `${p.location}, ${p.state} (${p.cardinalDirection})`,
      snippet: p.history,
      categoryName: 'Shankaracharya Matha',
      tags: [p.associatedVeda, p.associatedMahavakya],
      linkUrl: `/acharyas`
    });
  });

  // Temples
  TEMPLES_DATA.forEach(t => {
    master.push({
      id: t.id,
      type: 'temple',
      title: t.name,
      sanskritTitle: t.sanskritName,
      subtitle: `${t.category} • ${t.location}, ${t.state}`,
      snippet: t.scripturalSignificance,
      categoryName: 'Sacred Temple',
      tags: [t.deity, t.architecturalStyle],
      linkUrl: `/geography`
    });
  });

  // Festivals
  FESTIVALS_DATA.forEach(f => {
    master.push({
      id: f.id,
      type: 'festival',
      title: f.name,
      sanskritTitle: f.sanskritName,
      subtitle: `Month: ${f.lunarMonth} • Tithi: ${f.tithi}`,
      snippet: f.significance,
      categoryName: 'Festival & Vrata',
      tags: [f.deityAssociated],
      linkUrl: `/festivals`
    });
  });

  // Sanskrit
  SANSKRIT_LESSONS_DATA.forEach(sl => {
    master.push({
      id: sl.id,
      type: 'sanskrit',
      title: sl.title,
      subtitle: `Level: ${sl.level} • ${sl.category}`,
      snippet: sl.content,
      categoryName: 'Sanskrit Resource',
      linkUrl: `/sanskrit`
    });
  });

  // Timelines
  HISTORICAL_TIMELINE_DATA.forEach(tl => {
    master.push({
      id: tl.id,
      type: 'timeline',
      title: tl.title,
      subtitle: tl.yearBCEorCE,
      snippet: tl.description,
      categoryName: 'Historical Marker',
      tags: tl.keyFigures,
      linkUrl: `/timelines`
    });
  });

  // Genealogy
  GENEALOGY_DATA.forEach(g => {
    master.push({
      id: g.id,
      type: 'genealogy',
      title: g.name,
      sanskritTitle: g.sanskritName,
      subtitle: `Lineage: ${g.lineage}`,
      snippet: g.summary,
      categoryName: 'Genealogy',
      linkUrl: `/genealogy`
    });
  });

  return master;
}

const masterData = compileMasterDataset();

const fuseOptions = {
  keys: [
    { name: 'title', weight: 0.35 },
    { name: 'sanskritTitle', weight: 0.25 },
    { name: 'subtitle', weight: 0.15 },
    { name: 'snippet', weight: 0.15 },
    { name: 'tags', weight: 0.1 }
  ],
  threshold: 0.35,
  includeMatches: true
};

const fuse = new Fuse(masterData, fuseOptions);

export const searchService = {
  search(query: string, categoryFilter?: string): SearchResultItem[] {
    if (!query.trim()) return [];
    
    const results = fuse.search(query.trim());
    let items = results.map(r => r.item);

    if (categoryFilter && categoryFilter !== 'all') {
      items = items.filter(item => item.type === categoryFilter || item.categoryName.toLowerCase().includes(categoryFilter));
    }

    return items.slice(0, 30); // Top 30 matches
  },

  getAllItems(): SearchResultItem[] {
    return masterData;
  }
};
