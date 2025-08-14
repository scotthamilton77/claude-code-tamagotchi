# Changelog 📝

All the cool stuff we've added to Claude Code Tamagotchi!

## [1.0.0] - 2024-08-14 🎉

### The Birth of Your New Best Friend!

#### ✨ Features
- **Virtual pet that lives in your statusline!** - Never code alone again
- **Activity-based metabolism** - Pet responds to your coding, not just time
- **Breathing animations** - Watch your pet come alive with subtle animations
- **Smart thought system** - Your pet has opinions about your code (and life)
- **12 slash commands** - Feed, play, clean, and more!
- **Session awareness** - Pet knows when you take breaks
- **Customizable personality** - Make your pet chatty or quiet
- **Configurable decay rates** - Casual or hardcore pet parent? You choose!

#### 🎮 Commands Added
- `/pet-pet` - Show your pet some love
- `/pet-feed` - Pizza, cookies, sushi, and more!
- `/pet-play` - Ball, frisbee, puzzle time!
- `/pet-clean` - Squeaky clean pet
- `/pet-sleep` - Nap time for tired pets
- `/pet-wake` - Rise and shine!
- `/pet-status` - Quick status check
- `/pet-stats` - Detailed pet info
- `/pet-name` - Give your pet a name
- `/pet-reset` - Start fresh with a new pet
- `/pet-help` - See all commands

#### 💭 Thought Categories
- **Need-based thoughts** - "My tummy goes hurt hurt!"
- **Coding observations** - "That's a lot of TODO comments..."
- **Random musings** - "Do androids dream of electric sheep?"
- **Mood thoughts** - "I'm so happy right now!"
- **Combo thoughts** - Multiple needs at once

#### ⚙️ Configuration Options
- Environment variables for everything
- Customizable state file location
- Optional directory display
- Optional session counter
- Adjustable decay rates
- Thought frequency controls

#### 🏗️ Technical
- Built with TypeScript and Bun
- State persistence to `~/.claude/pets/`
- Activity-based system (not real-time)
- Session detection with 5-minute gaps
- Atomic file writes for reliability

### Why We Built This
Because coding is better with a friend. Even if that friend occasionally judges your variable names and reminds you that you haven't eaten in 6 hours.

---

*"The best code is written with a pet by your side"* - Ancient Developer Proverb