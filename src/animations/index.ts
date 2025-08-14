export interface AnimationFrame {
  pet: string;
  duration?: number;
}

export interface Animation {
  frames: AnimationFrame[];
  loop: boolean;
  priority?: number;
}

export const animations: Record<string, Animation> = {
  idle: {
    frames: [
      { pet: '(◕ᴥ◕)' },
      { pet: '(◕ᴥ◕)' },
      { pet: '(◔ᴥ◔)' },
      { pet: '(◕ᴥ◕)' },
      { pet: '(◑ᴥ◑)' },
      { pet: '(◕ᴥ◕)' },
      { pet: '(◐ᴥ◐)' },
      { pet: '(◕ᴥ◕)' },
    ],
    loop: true
  },
  
  blink: {
    frames: [
      { pet: '(◕ᴥ◕)' },
      { pet: '(◕ᴥ◕)' },
      { pet: '(－ᴥ－)' },
      { pet: '(◕ᴥ◕)' },
    ],
    loop: false
  },
  
  happy: {
    frames: [
      { pet: '(◕ᴥ◕)' },
      { pet: '(✧ᴥ✧)' },
      { pet: '(◕ᴗ◕)' },
      { pet: '(✧ᴗ✧)' },
      { pet: '\\(◕ᴥ◕)/' },
      { pet: '\\(✧ᴥ✧)/' },
    ],
    loop: true
  },
  
  eating: {
    frames: [
      { pet: '(◕ᴥ◕) 🍪' },
      { pet: '(✧ᴥ✧) 🍪' },
      { pet: '(◕ᴗ◕)🍪' },
      { pet: '(◔ᴗ◔)' },
      { pet: '(◕ᴗ◕)' },
      { pet: '(◔ᴗ◔)' },
      { pet: '(◕ᴥ◕)' },
    ],
    loop: false
  },
  
  sleeping: {
    frames: [
      { pet: '(－ᴥ－)' },
      { pet: '(－ᴥ－) z' },
      { pet: '(－ᴥ－) zz' },
      { pet: '(－ᴥ－) zzZ' },
      { pet: '(－ᴥ－) zzZ' },
      { pet: '(－ᴥ－) zz' },
      { pet: '(－ᴥ－) z' },
      { pet: '(－ᴥ－)' },
    ],
    loop: true
  },
  
  walking: {
    frames: [
      { pet: ' (◕ᴥ◕) ' },
      { pet: 'ƪ(◕ᴥ◕) ' },
      { pet: 'ƪ(◑ᴥ◑)ʃ' },
      { pet: ' (◕ᴥ◕)ʃ' },
      { pet: ' (◐ᴥ◐) ' },
      { pet: 'ƪ(◕ᴥ◕) ' },
    ],
    loop: true
  },
  
  playing: {
    frames: [
      { pet: '(◕ᴥ◕) ⚾' },
      { pet: '\\(◕ᴥ◕) ⚾' },
      { pet: '\\(✧ᴥ✧)/⚾' },
      { pet: '\\(◕ᴥ◕)/' },
      { pet: '(◕ᴥ◕)\\' },
      { pet: '(✧ᴥ✧)' },
    ],
    loop: false
  },
  
  sad: {
    frames: [
      { pet: '(◕ᴥ◕)' },
      { pet: '(◔ᴥ◔)' },
      { pet: '(╥ᴥ╥)' },
      { pet: '(╥﹏╥)' },
    ],
    loop: true
  },
  
  love: {
    frames: [
      { pet: '(◕ᴥ◕)' },
      { pet: '(◕ᴥ◕) ♡' },
      { pet: '(✧ᴥ✧) ♡' },
      { pet: '(♡ᴥ♡)' },
      { pet: '(✧ᴗ✧) ♡' },
    ],
    loop: false
  },
  
  tired: {
    frames: [
      { pet: '(◕ᴥ◕)' },
      { pet: '(◔ᴥ◔)' },
      { pet: '(￣ᴥ￣)' },
      { pet: '(－ᴥ－)' },
      { pet: '(￣ᴥ￣)' },
    ],
    loop: true
  },
  
  sick: {
    frames: [
      { pet: '(×ᴥ×)' },
      { pet: '(×﹏×)' },
      { pet: '(@ᴥ@)' },
      { pet: '(×ᴥ×)' },
    ],
    loop: true
  },
  
  bathing: {
    frames: [
      { pet: '(◕ᴥ◕) 🚿' },
      { pet: '(>ᴥ<) 🚿' },
      { pet: '(~ᴥ~) 🧼' },
      { pet: '(>ᴥ<) 💦' },
      { pet: '(◕ᴥ◕) ✨' },
    ],
    loop: false
  },
  
  celebrating: {
    frames: [
      { pet: '\\(◕ᴥ◕)/' },
      { pet: '\\(✧ᴥ✧)/' },
      { pet: '🎉(◕ᴥ◕)🎉' },
      { pet: '\\(◕ᴗ◕)/' },
      { pet: '✨(✧ᴥ✧)✨' },
    ],
    loop: false
  }
};

// Get weather overlay
export function getWeatherOverlay(weather: string): string {
  const overlays: Record<string, string> = {
    sunny: '☀️',
    rainy: '🌧️',
    snowy: '❄️',
    cloudy: '☁️'
  };
  return overlays[weather] || '';
}

// Accessories feature removed for simplicity