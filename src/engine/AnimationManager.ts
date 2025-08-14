import { animations, Animation, getWeatherOverlay } from '../animations';
import { PetState } from './StateManager';
import { config } from '../utils/config';

export class AnimationManager {
  
  // Get mood-based face with breathing variation
  private getMoodFace(state: PetState): string {
    // Map moods to pet faces
    const moodFaces: Record<string, [string, string]> = {
      'normal': ['(◕ᴥ◕)', '(◕ᴗ◕)'],
      'happy': ['(◕‿◕)', '(◕ω◕)'],
      'debugging': ['(◕_◕)', '(◕.◕)'],
      'celebrating': ['(✧ᴥ✧)', '(★ᴥ★)'],
      'tired': ['(◔_◔)', '(◔‸◔)'],
      'focused': ['(◕▿◕)', '(◕ᴗ◕)'],
      'sleeping': ['(-ᴥ-)', '(˘ᴥ˘)'],
      'sad': ['(◕︵◕)', '(◕╭╮◕)'],
      'sick': ['(@_@)', '(x_x)']
    };
    
    // Special states override mood
    let effectiveMood = state.currentMood;
    if (state.isAsleep) effectiveMood = 'sleeping';
    if (state.isSick) effectiveMood = 'sick';
    if (state.hunger < 20) effectiveMood = 'sad';
    
    // Check for pending actions
    if (state.pendingAction) {
      const updateNum = state.pendingAction.updateCount || 0;
      switch (state.pendingAction.type) {
        case 'eating': 
          // Different eating animations based on update count
          if (updateNum % 3 === 0) return '(◕◡◕)'; // Mouth open
          if (updateNum % 3 === 1) return '(◕~◕)'; // Chewing
          return '(◕ᴥ◕)'; // Happy eating
        case 'playing': 
          // Alternating play animations
          if (updateNum % 2 === 0) return '(◕ᴥ◕)ﾉ';
          return '(◕ᴥ◕)/';
        case 'bathing': 
          if (updateNum % 2 === 0) return '(◕△◕)';
          return '(◕▽◕)';
        case 'sleeping':
          if (updateNum % 2 === 0) return '(-ᴥ-)';
          return '(˘ᴥ˘)';
      }
    }
    
    // Get faces for this mood (or default)
    const faces = moodFaces[effectiveMood] || moodFaces['normal'];
    
    // Use breathing state to pick which face (creates subtle animation)
    return state.breathingState ? faces[0] : faces[1];
  }
  
  getFrame(state: PetState): string {
    // Get the mood-based face with breathing animation
    let petDisplay = this.getMoodFace(state);
    
    // Add activity indicators
    if (state.sessionUpdateCount > 100) {
      // Long coding session
      petDisplay = `${petDisplay} 💻`;
    } else if (state.sessionUpdateCount > 0 && state.sessionUpdateCount % 50 === 0) {
      // Milestone indicator
      petDisplay = `${petDisplay} ✨`;
    }
    
    // Add head tilt for questions (microAnimationFrame)
    if (state.microAnimationFrame === 1) {
      petDisplay = petDisplay.replace('◕', '◔'); // Tilt effect
    }
    
    // No accessories - removed feature
    
    // Add weather overlay if enabled
    if (config.enableWeatherEffects) {
      const weatherOverlay = getWeatherOverlay(config.weather);
      if (weatherOverlay) {
        petDisplay = `${petDisplay} ${weatherOverlay}`;
      }
    }
    
    // Debug logging (only if logging is enabled)
    if (config.enableLogging && config.debugMode) {
      const fs = require('fs');
      fs.appendFileSync('/tmp/pet-animation.log', 
        `Mood: ${state.currentMood}, Breathing: ${state.breathingState}, Display: ${petDisplay}\n`);
    }
    
    return petDisplay;
  }
  
  // Check if current animation can be interrupted
  canInterrupt(state: PetState): boolean {
    const nonInterruptible = ['eating', 'playing', 'bathing', 'celebrating'];
    
    if (state.pendingAction && nonInterruptible.includes(state.pendingAction.type)) {
      // Check if action is complete
      const elapsed = Date.now() - state.pendingAction.startTime;
      return elapsed >= state.pendingAction.duration;
    }
    
    return !nonInterruptible.includes(state.currentAnimation);
  }
  
  // Force a specific animation/mood
  setAnimation(state: PetState, animationName: string): void {
    // Map old animation names to moods
    const animationToMood: Record<string, string> = {
      'idle': 'normal',
      'happy': 'happy',
      'sad': 'sad',
      'love': 'happy',
      'celebrating': 'celebrating',
      'tired': 'tired',
      'sick': 'sick',
      'sleeping': 'sleeping',
      'blink': 'normal'
    };
    
    const mood = animationToMood[animationName] || 'normal';
    state.currentMood = mood as any;
    state.currentAnimation = animationName;
    state.animationStartTime = Date.now();
  }
}