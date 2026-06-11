// Personal interests — kept light and human.

export interface Interest {
  icon: string;
  name: string;
  note?: string;
}

export const interestsIntro =
  'Beyond the terminal, a few things that keep the mind sharp and the curiosity alive.';

export const interests: Interest[] = [
  { icon: '♟', name: 'Chess' },
  { icon: '⚽', name: 'Soccer' },
  { icon: '📚', name: 'Reading' },
  { icon: '⌚', name: 'Horology & Watch Collecting' },
  // [PLACEHOLDER] Add more as desired
];
