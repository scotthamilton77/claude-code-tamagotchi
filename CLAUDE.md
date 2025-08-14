# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Essential Commands

### Development
```bash
# Run the pet in statusline mode (main entry point)
bun run src/index.ts

# Development mode with auto-reload
bun run dev

# Build for distribution
bun run build

# Reset pet to initial state
bun run reset

# Run demo mode
bun run demo
```

### Installation & Setup
```bash
# Install dependencies
bun install

# Run the setup script (configures Claude Code settings and commands)
./setup.sh

# Global installation
bun add -g github:Ido-Levi/claude-code-tamagotchi
```

### CLI Commands (when installed globally)
```bash
claude-code-tamagotchi <command> [args]
# Commands: feed, play, pet, clean, sleep, wake, stats, status, name, reset, help
```

## Architecture Overview

This is a virtual pet (Tamagotchi) that lives in the Claude Code statusline. The pet responds to user interactions through slash commands and tracks its state persistently.

### Core Components

1. **Entry Point** (`src/index.ts`): Reads stdin from Claude Code, updates pet state, outputs statusline display.

2. **Pet Engine** (`src/engine/PetEngine.ts`): Central orchestrator that manages state updates, animations, and actions. Coordinates between all subsystems.

3. **State Management** (`src/engine/StateManager.ts`): Handles persistent state storage in `~/.claude/pets/claude-pet-state.json`. Tracks stats (hunger, energy, cleanliness, happiness), timestamps, and session data.

4. **Activity System** (`src/engine/ActivitySystem.ts`): Applies activity-based decay to pet stats rather than time-based. Stats decrease based on coding session activity.

5. **Thought System** (`src/engine/ThoughtSystem.ts`): Generates contextual thoughts based on pet mood, needs, and coding activity. Pulls from 200+ thoughts organized by category in `src/engine/thoughts/`.

6. **Command Processing** (`src/commands/CommandProcessor.ts`): Handles slash commands (feed, play, clean, etc.) by writing action files that the pet engine reads on next update.

7. **Animation Manager** (`src/engine/AnimationManager.ts`): Manages pet face animations, breathing effects, and mood-based expressions.

### Data Flow

1. Claude Code calls the pet with statusline update (JSON via stdin)
2. Pet engine loads state, checks for pending actions, applies activity updates
3. Animation and thought systems generate display elements
4. Formatted statusline output sent to stdout
5. State persisted for next update

### Key Environment Variables

The pet is highly configurable through environment variables:
- `PET_STATE_FILE`: State persistence location
- `PET_DECAY_INTERVAL`: Updates between stat decreases  
- `PET_THOUGHT_FREQUENCY`: Updates between thoughts
- `PET_CHATTINESS`: How talkative (quiet/normal/chatty)
- Various decay rates and thresholds for customization

### Claude Code Integration

- **Statusline**: Configured in `~/.claude/settings.json` to run the pet command
- **Slash Commands**: `/pet-*` commands in `~/.claude/commands/` directory
- **Session Awareness**: Tracks update counts and timestamps to detect coding sessions

The pet only updates during active Claude Code conversations, making it activity-driven rather than real-time.