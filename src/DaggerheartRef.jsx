import { useState, useEffect } from "react";

const data = [
  {
    category: "🧭 Character Creation",
    color: "#f59e0b",
    questions: [
      {
        q: "Step 1 — Choose a Class & Subclass",
        a: `Pick one of 9 classes (Bard, Druid, Guardian, Ranger, Rogue, Seraph, Sorcerer, Warrior, Wizard). Each class gives you access to 2 domains, a class feature, a Hope feature (costs 3 Hope), starting Evasion, starting HP, and a class item.\n\nThen pick one of your class's 2 subclasses. This gives you a Spellcast trait and a Foundation feature right away (Specialization and Mastery come later via leveling).`
      },
      {
        q: "Step 2 — Choose Heritage (Ancestry + Community)",
        a: `Ancestry = your species/lineage. Pick one of 18 ancestries. You get 2 ancestry features.\n\nCommunity = your cultural background. Pick one of 9 communities. You get 1 community feature.\n\nFor mixed ancestry: take the 1st feature from one ancestry and the 2nd feature from another.`
      },
      {
        q: "Step 3 — Assign Traits",
        a: `6 traits: Agility, Strength, Finesse, Instinct, Presence, Knowledge.\n\nDistribute these modifiers however you want: +2, +1, +1, +0, +0, −1.`
      },
      {
        q: "Step 4 — Record Starting Stats",
        a: `• Level: 1\n• Evasion: from your class\n• Hit Points: from your class\n• Stress: 6 slots (everyone)\n• Hope: start with 2 (max 6)\n• Proficiency: 1 at Level 1`
      },
      {
        q: "Step 5 — Choose Equipment",
        a: `Weapons: Either 1 two-handed weapon OR 1 one-handed + 1 secondary. Pick from Tier 1 tables. Damage = [Proficiency]×[weapon dice]+modifier.\n\nArmor: Pick from Tier 1 table. Thresholds = armor base + your level. Armor Score = armor base score + bonuses.\n\nInventory: Torch, 50ft rope, basic supplies, 1 handful of gold, 1 Minor Health or Stamina Potion, class item, spell focus (if applicable).`
      },
      {
        q: "Step 6 — Background & Connections",
        a: `Answer the background questions on your character guide — no mechanical effect, but shapes your character and helps GM prep. You can leave it vague and discover through play.\n\nThen describe your character to the table and use the connection questions to establish relationships between PCs. Suggest at least 1 connection per other PC. Anyone can reject a suggested connection.`
      },
      {
        q: "Step 7 — Create Experiences",
        a: `Pick 2 Experiences, each at +2. An Experience is a word or phrase (e.g. "Pirate", "Silver Tongue", "Hold the Line"). Spend 1 Hope to add its modifier to a relevant roll.\n\nCan't be too broad ("Lucky") or grant abilities ("Flight"). Must declare before rolling.`
      },
      {
        q: "Step 8 — Choose 2 Domain Cards",
        a: `Pick 2 Level 1 cards from your class's two domains. Can be from the same domain or one each. These go in your loadout (max 5 cards active at once).\n\nDomain cards grant abilities or spells. You'll gain more as you level up.`
      },
      {
        q: "Quick checklist before Session 1",
        a: `✓ Class + subclass chosen, features noted\n✓ Ancestry + community chosen, features noted\n✓ Traits assigned (+2, +1, +1, +0, +0, −1)\n✓ Starting stats recorded (Evasion, HP, Stress, Hope, Prof)\n✓ Weapons + armor picked from Tier 1\n✓ 2 Experiences written (each +2)\n✓ 2 domain cards in loadout\n✓ Background questions answered\n✓ At least 1 connection per other PC`
      }
    ]
  },
  {
    category: "⚔️ Classes & Subclasses",
    color: "#dc2626",
    questions: [
      {
        q: "Bard — Codex & Grace",
        a: `Evasion 10 | HP 5 | Role: Support/social\n\nRally: Once/session, give party Rally Dice (d6, d8 at L5). Anyone can spend one to add to a roll, add to damage, or clear Stress.\nHope: Make a Scene — Spend 3 Hope to distract a target, giving −2 to their Difficulty on next attack against them.\n\n• Troubadour (Presence): Songs — Relaxing (clear 1 HP), Epic (make target Vulnerable), Heartbreaking (party gains Hope). 1 each per long rest.\n• Wordsmith (Presence): Rousing Speech clears 2 Stress on allies. Heart of a Poet adds d4 to social rolls for 1 Hope.`
      },
      {
        q: "Druid — Arcana & Sage",
        a: `Evasion 10 | HP 6 | Role: Shapeshifter/caster\n\nBeastform: Mark Stress to transform (tier-locked forms). Can't use weapons/spells in form but keep other features. Gain the form's Evasion bonus, traits, and attacks.\nWildtouch: Harmless nature effects at will.\nHope: Evolution — Spend 3 Hope to transform without marking Stress + boost 1 trait by +1.\n\n• Warden of Elements (Instinct): Channel Fire/Earth/Water/Air for combat buffs. Later gain auras and elemental dominion.\n• Warden of Renewal (Instinct): Clarity of Nature clears Stress. Regeneration (3 Hope) clears 1d4 HP on touch.`
      },
      {
        q: "Guardian — Blade & Valor",
        a: `Evasion 9 | HP 7 | Role: Tank/frontline\n\nUnstoppable: Once/long rest, enter Unstoppable mode with a growing die (d4, d6 at L5). Physical damage reduced by one threshold, immune to being moved. Die grows as you deal HP damage.\nHope: Frontline Tank — Spend 3 Hope to clear 2 Armor Slots.\nUnyielding (Hope Feature): On marking Armor Slot, roll d6 — on 5+, reduce severity by one threshold without marking.\n\n• Stalwart: +1 to damage thresholds (Foundation), scaling to +5 total at Mastery. Iron Will marks extra Armor Slots to reduce. Partners-in-Arms protects nearby allies.\n• Vengeance: At Ease (extra Stress slot), Revenge (mark 2 Stress when hit in Melee → attacker marks 1 HP). Nemesis lets you Prioritize a target and swap Hope/Fear dice vs them.`
      },
      {
        q: "Ranger — Bone & Sage",
        a: `Evasion 12 | HP 6 | Role: Striker/tracker\n\nRanger's Focus: Spend Hope + attack. On success, target becomes Focus — you always know direction, they mark Stress on your damage, you can end Focus to reroll a failed attack.\nHope: Hold Them Off — Spend 3 Hope on a successful weapon attack to use the same roll against 2 additional targets in range.\n\n• Beastbound (Instinct): Animal companion with its own sheet, Evasion 10, shared Experiences. Levels up with you. Companion can act independently.\n• Wayfinder (Agility): Enhanced Focus hunting. Features boost tracking and lethal strikes against your Focus target.`
      },
      {
        q: "Rogue — Midnight & Grace",
        a: `Evasion 12 | HP 6 | Role: Stealth striker\n\nCloaked: Upgraded Hidden — you stay unseen even if an enemy moves to your spot (while stationary). Broken by attacking or ending move in line of sight.\nSneak Attack: +[tier]d6 damage when Cloaked or ally is in Melee with target.\nHope: Rogue's Dodge — Spend 3 Hope for +2 Evasion until next hit or next rest.\n\n• Nightwalker (Finesse): Shadow Stepper — mark Stress to teleport between shadows within Far range, arriving Cloaked. Dark Cloud blocks all vision in an area.\n• Syndicate (Presence): Contacts Everywhere — 2×/session, call in a contact for a favor (gold, tools, combat advantage, sniper damage). Reliable Backup at Mastery = 3×/session with stronger options.`
      },
      {
        q: "Seraph — Splendor & Valor",
        a: `Evasion 9 | HP 7 | Role: Divine fighter/healer\n\nPrayer Dice: Start of session, roll [Spellcast trait] d4s. Spend anytime on self/ally within Far range to reduce damage, add to rolls, or gain Hope. Clear unspent at end of session.\nHope: Life Support — Spend 3 Hope to clear 1 HP on ally within Close range.\n\n• Divine Wielder (Strength): Spirit Weapon extends Melee/V.Close weapons to Close range; mark Stress for extra target. Sparing Touch clears 2 HP or 2 Stress 1×/long rest.\n• Winged Sentinel (Strength): Wings of Light — fly, carry allies (mark Stress), spend Hope for +1d8 damage while airborne. Ethereal Visage gives advantage on Presence while flying.`
      },
      {
        q: "Sorcerer — Arcana & Midnight",
        a: `Evasion 10 | HP 6 | Role: Innate magic blaster\n\nArcane Sense: Detect magic within Close range.\nMinor Illusion: Spellcast Roll (10) for a visual illusion.\nChannel Raw Power: 1×/long rest, vault a loadout card to gain Hope = its level OR +2× card level bonus to damage.\nHope: Volatile Magic — Spend 3 Hope to reroll any damage dice on a magic attack.\n\n• Elemental Origin (Instinct): Choose element at creation (air/earth/fire/lightning/water). Shape it freely, spend Hope for +2 to rolls or +3 to damage with it. Natural Evasion (mark Stress + d6 to Evasion). Transcendence at Mastery = full elemental form.\n• Primal Origin (Presence): Channel raw magical energy. Empower spells through primal force and willpower.`
      },
      {
        q: "Warrior — Blade & Bone",
        a: `Evasion 11 | HP 6 | Role: Weapon master\n\nAttack of Opportunity: Reaction roll when adversary tries to leave Melee. On success, choose 1 effect (2 on crit): stop them, deal weapon damage, or move with them.\nCombat Training: Ignore weapon burden. +level bonus to physical damage.\nHope: No Mercy — Spend 3 Hope for +1 to attack rolls until next rest.\n\n• Call of the Brave (Strength): Courage gives Hope when you fail with Fear. Battle Ritual (1×/long rest, before danger) clears 2 Stress + gains 2 Hope. Rise to the Challenge: d20 as Hope Die at ≤2 HP.\n• Call of the Slayer (Agility): Devastating Critical — on crits, add extra dice and clear Stress. Built for maximum damage output.`
      },
      {
        q: "Wizard — Codex & Splendor",
        a: `Evasion 11 | HP 5 | Role: Versatile prepared caster\n\nPrestidigitation: Minor magical effects at will (change color, light candle, float small object, repair, illuminate).\nStrange Patterns: Choose a number 1–12. When you roll it on either Duality Die, gain Hope or clear Stress. Change on long rest.\nHope: Not This Time — Spend 3 Hope to force adversary within Far range to reroll an attack or damage roll.\n\n• School of Knowledge (Knowledge): Prepared gives extra domain card. Adept lets you mark Stress instead of Hope for Experiences (doubled modifier). Eventually gain 3 extra domain cards total + reduced Recall Cost.\n• School of War (Knowledge): Battlemage gives +1 HP slot. Face Your Fear deals bonus magic damage on Success with Fear (d10 → 2d10 → 3d10). Conjure Shield adds Proficiency to Evasion while holding 2+ Hope.`
      },
      {
        q: "Quick class comparison",
        a: `Highest HP (7): Guardian, Seraph — frontline tanks/healers\nHighest Evasion (12): Ranger, Rogue — dodge-based\nLowest HP (5): Bard, Wizard — stay back, support/cast\nBest support: Bard (Rally), Seraph (Prayer Dice + healing)\nBest damage: Rogue (Sneak Attack), Warrior (Combat Training)\nBest utility: Wizard (extra cards), Druid (Beastform versatility)\nBest tank: Guardian (Unstoppable + Armor clearing)\nBest tracker: Ranger (Focus + companion or Wayfinder)`
      }
    ]
  },
  {
    category: "🧬 Ancestries (18)",
    color: "#8b5cf6",
    questions: [
      {
        q: "Clank (mechanical being)",
        a: `Efficient: On a short rest, you can choose a long rest move instead of a short rest move.\n\nHighly customizable appearance — metal, wood, stone. Effectively immortal body, but mind degrades over time.`
      },
      {
        q: "Drakona (dragonborn)",
        a: `Scales: On Severe damage, mark Stress to mark 1 fewer HP.\nElemental Breath: Choose element (fire, ice, lightning, etc.). V.Close Instinct weapon, d8 magic damage × Proficiency.\n\nWingless dragon-humanoids, ~5–7 ft. ~350 year lifespan.`
      },
      {
        q: "Dwarf",
        a: `Thick Skin: On Minor damage, mark 2 Stress instead of 1 HP.\nIncreased Fortitude: Spend 3 Hope to halve incoming physical damage.\n\n~4–5.5 ft, broad, dense. Can embed gems in skin. ~250 years.`
      },
      {
        q: "Elf",
        a: `Quick Reactions: Mark Stress to gain advantage on a reaction roll.\nCelestial Trance: During rest, choose an additional downtime move.\n\n~6–6.5 ft, pointed ears. Trance instead of sleep. ~350 years. May develop mystic form over time.`
      },
      {
        q: "Faerie",
        a: `Luckbender: 1×/session, spend 3 Hope to reroll Duality Dice (you or willing ally in Close range).\nWings: Fly. Mark Stress after an attack against you to gain +2 Evasion against it.\n\n~2–7 ft, insectile features, go through metamorphosis. ~50 years.`
      },
      {
        q: "Faun",
        a: `Caprine Leap: Leap anywhere within Close range as normal movement (vault, jump gaps, scale barriers).\nKick: On Melee hit, mark Stress for +2d6 damage and knock target or self to V.Close range.\n\nGoat-humanoids, ~4–6.5 ft. Horns, hooves. ~225 years.`
      },
      {
        q: "Firbolg (bovine)",
        a: `Charge: Successful Agility Roll to sprint from Far/V.Far into Melee → mark Stress to deal 1d12 physical to all in Melee.\nUnshakable: When marking Stress, roll d6. On a 6, don't mark it.\n\nBovine humanoids (bison, ox, minotaur), ~5–7 ft. ~150 years.`
      },
      {
        q: "Fungril (mushroom)",
        a: `Fungril Network: Instinct Roll (12) to communicate with other fungril across any distance via mycelial array.\nDeath Connection: Touch a recent corpse + mark Stress to extract 1 memory tied to an emotion.\n\nIncredible variety, 2–7 ft. ~300+ years.`
      },
      {
        q: "Galapa (turtle)",
        a: `Shell: +Proficiency bonus to all damage thresholds.\nRetract: Mark Stress to retract into shell. Resistance to physical damage, but disadvantage on actions and can't move.\n\n~4–6 ft, domed shell. ~150 years.`
      },
      {
        q: "Giant",
        a: `Endurance: +1 HP slot at character creation.\nReach: All Melee-range features/weapons become Very Close range.\n\n~6.5–8.5 ft, 1–3 eyes (born sightless). ~75 years.`
      },
      {
        q: "Goblin",
        a: `Surefooted: Ignore disadvantage on Agility Rolls.\nDanger Sense: 1×/rest, mark Stress to force adversary to reroll an attack vs you or ally in V.Close.\n\n~3–4 ft, huge ears and eyes. See in the dark. ~100 years.`
      },
      {
        q: "Halfling",
        a: `Luckbringer: Start of each session, everyone in your party gains a Hope.\nInternal Compass: Reroll any 1 on your Hope Die.\n\n~3–4 ft, large hairy feet. Stay youthful. ~150 years.`
      },
      {
        q: "Human",
        a: `High Stamina: +1 Stress slot at character creation.\nAdaptability: When you fail a roll that used an Experience, mark Stress to reroll.\n\n~5–6.5 ft, highly adaptable. ~100 years.`
      },
      {
        q: "Infernis (tiefling/demon-descended)",
        a: `Fearless: When you roll with Fear, mark 2 Stress to change it to a roll with Hope instead.\nDread Visage: Advantage on rolls to intimidate hostile creatures.\n\nHorns, pointed ears, sharp teeth. Some have tails. ~350 years.`
      },
      {
        q: "Katari (feline)",
        a: `Feline Instincts: On Agility Rolls, spend 2 Hope to reroll Hope Die.\nRetracting Claws: Agility Roll to scratch Melee target → temporarily Vulnerable on success.\n\nRetractable claws, slit pupils. ~3–6.5 ft. ~150 years.`
      },
      {
        q: "Orc",
        a: `Sturdy: At 1 HP remaining, all attacks against you have disadvantage.\nTusks: On Melee hit, spend Hope for extra 1d6 damage.\n\nSquare features, boar tusks, pointed ears. ~5–6.5 ft. ~125 years.`
      },
      {
        q: "Ribbet (frog)",
        a: `Amphibious: Breathe and move naturally underwater.\nLong Tongue: Mark Stress to use tongue as a Close Finesse weapon, d12 physical × Proficiency.\n\nWebbed appendages, protruding eyes. Born as tadpoles. ~3–4.5 ft. ~100 years.`
      },
      {
        q: "Simiah (primate)",
        a: `Natural Climber: Advantage on Agility Rolls for balancing and climbing.\nNimble: Permanent +1 Evasion at character creation.\n\nPrehensile feet (some have tails). Skilled climbers. ~2–6 ft. ~100 years.`
      },
      {
        q: "Mixed Ancestry",
        a: `Take the 1st feature from one ancestry and the 2nd from another. Write your heritage however you like (hybridized term, one ancestry, or invent a new name).\n\nCan represent more than 2 ancestries in appearance/backstory, but mechanically pick features from exactly 2.`
      }
    ]
  },
  {
    category: "🏘️ Communities (9)",
    color: "#0d9488",
    questions: [
      {
        q: "Highborne (wealthy/noble)",
        a: `Privilege: Advantage on rolls to consort with nobles, negotiate prices, or leverage reputation.\n\nPersonality: amiable, candid, conniving, enterprising, ostentatious, unflappable.`
      },
      {
        q: "Loreborne (academic/political)",
        a: `Well-Read: Advantage on rolls involving history, culture, or politics of a prominent person or place.\n\nPersonality: direct, eloquent, inquisitive, patient, rhapsodic, witty.`
      },
      {
        q: "Orderborne (disciplined/faith)",
        a: `Dedicated: Record 3 sayings or values. 1×/rest, when embodying one through your action, roll a d20 as your Hope Die.\n\nPersonality: ambitious, benevolent, pensive, prudent, sardonic, stoic.`
      },
      {
        q: "Ridgeborne (mountain)",
        a: `Steady: Advantage on rolls to traverse cliffs/ledges, navigate harsh environments, or use survival knowledge.\n\nPersonality: bold, hardy, indomitable, loyal, reserved, stubborn.`
      },
      {
        q: "Seaborne (coastal/maritime)",
        a: `Know the Tide: When you roll with Fear, gain a token (max = level). Before an action roll, spend any number for +1 each. Clear unspent at end of session.\n\nPersonality: candid, cooperative, exuberant, fierce, resolute, weathered.`
      },
      {
        q: "Slyborne (criminal/underworld)",
        a: `Scoundrel: Advantage on rolls to negotiate with criminals, detect lies, or find a safe hiding place.\n\nPersonality: calculating, clever, formidable, perceptive, shrewd, tenacious.`
      },
      {
        q: "Underborne (subterranean)",
        a: `Low-Light Living: In low light or heavy shadow, advantage on rolls to hide, investigate, or perceive details.\n\nPersonality: composed, elusive, indomitable, innovative, resourceful, unpretentious.`
      },
      {
        q: "Wanderborne (nomadic)",
        a: `Nomadic Pack: 1×/session, spend Hope to pull a useful mundane item from your pack (work with GM to decide what).\n\nPersonality: inscrutable, magnanimous, mirthful, reliable, savvy, unorthodox.`
      },
      {
        q: "Wildborne (forest/nature)",
        a: `Lightfoot: Your movement is naturally silent. Advantage on rolls to move without being heard.\n\nPersonality: hardy, loyal, nurturing, reclusive, sagacious, vibrant.`
      }
    ]
  },
  {
    category: "🎲 Core Rolls",
    color: "#7c3aed",
    questions: [
      {
        q: "How do action rolls work?",
        a: `Roll 2d12 (Duality Dice) — one Hope die, one Fear die. Sum both + trait modifier. Compare total to the Difficulty set by the GM.\n\nIf total ≥ Difficulty → success.\nIf total < Difficulty → failure.\nWhich die rolled higher determines if you get Hope or generate Fear.`
      },
      {
        q: "What are the 4 outcomes?",
        a: `• Success with Hope — total ≥ Difficulty, Hope die higher. You succeed and gain a Hope.\n• Success with Fear — total ≥ Difficulty, Fear die higher. You succeed but GM gains a Fear (may add complication).\n• Failure with Hope — total < Difficulty, Hope die higher. You fail (minor consequence), gain a Hope, spotlight → GM.\n• Failure with Fear — total < Difficulty, Fear die higher. You fail (major consequence), GM gains a Fear, spotlight → GM.`
      },
      {
        q: "What is a Critical Success?",
        a: `Both Duality Dice show the same number (doubles). You automatically succeed regardless of total, gain a Hope, and clear a Stress. On attack rolls, deal critical damage. Counts as "with Hope." Cannot crit on reaction rolls (doubles have no special effect).`
      },
      {
        q: "How do reaction rolls differ?",
        a: `Reaction rolls respond to attacks or hazards. They work like action rolls EXCEPT: they don't generate Hope or Fear, don't trigger GM moves, and can't be aided by Help an Ally. Doubles on a reaction roll = ignore all effects but no Hope/Stress benefit.`
      },
      {
        q: "Group action rolls?",
        a: `One PC leads, others assist. Leader makes an action roll. Each helper makes a reaction roll using an appropriate trait. Leader gets +1 per helper success and −1 per helper failure.`
      },
      {
        q: "Tag Team rolls?",
        a: `Cost: 3 Hope, once per session per initiator. Two PCs each make separate action rolls, then choose one result for both. On a Tag Team attack, both roll damage and add totals (single source). Hope → all PCs gain Hope. Fear → GM gains one Fear per PC. Counts as one action roll for countdowns.`
      },
      {
        q: "Advantage & Disadvantage?",
        a: `Advantage: roll an extra d6, add to total.\nDisadvantage: roll an extra d6, subtract from total.\nThey cancel 1-for-1 (never roll both). Multiple Help an Ally bonuses don't stack — use the highest d6 only.`
      },
      {
        q: "Help an Ally",
        a: `Spend 1 Hope to give an ally advantage (roll d6, add to their total). Can be used on any action roll you can see, declared before or after the roll but before consequences. Multiple helpers: only the highest d6 applies. Cannot help on reaction rolls.`
      }
    ]
  },
  {
    category: "⚔️ Combat & Damage",
    color: "#e11d48",
    questions: [
      {
        q: "How does attacking work?",
        a: `An attack is an action roll to deal damage. Trait is specified by weapon or spell. Difficulty = target's Evasion (PCs) or Difficulty score (adversaries).\n\nUnarmed: Strength or Finesse, deals [Proficiency]d4 physical damage.`
      },
      {
        q: "Damage thresholds explained",
        a: `Compare total damage to your thresholds:\n• Below Major → 1 HP marked\n• ≥ Major but < Severe → 2 HP marked\n• ≥ Severe → 3 HP marked\n• Reduced to 0 or less → no HP marked\n\nThresholds = armor base + character level. They go up every level.`
      },
      {
        q: "Critical damage",
        a: `On a crit (doubles), roll damage normally then add the max possible dice result on top. Example: 2d8+1 crit = 2d8+1+16.`
      },
      {
        q: "Damage types & resistance",
        a: `Physical (phy) and Magic (mag). Resistance = halve that type before comparing to thresholds. Immunity = ignore it entirely.\n\nDirect damage bypasses Armor Slots. Multiple resistances to the same type don't stack.`
      },
      {
        q: "Armor Slots — how do they work?",
        a: `When taking damage, you can mark Armor Slots to reduce incoming damage by your Armor Score per slot marked. You choose how many to mark. Slots stay marked until repaired during downtime (Repair Armor move).\n\nArmor Score = equipped armor's base score + any bonuses.`
      },
      {
        q: "Range bands",
        a: `• Melee — touch/a few feet\n• Very Close — ~5–10 ft\n• Close — ~10–30 ft\n• Far — ~30–100 ft\n• Very Far — ~100–300 ft\n• Out of Range — beyond V.Far\n\nPCs: free move to Close as part of action. Moving Far/V.Far needs an Agility Roll.\nAdversaries: free move to Close with an action. V.Far is a separate action.`
      },
      {
        q: "Multi-target attacks",
        a: `1 attack roll, 1 damage roll, applied to each target individually. All targets must be within V.Close of a single origin point (not within V.Close of each other).\n\nMultiple damage sources hitting at same time: total all damage first, then compare to thresholds once.`
      },
      {
        q: "Line of sight & cover",
        a: `Need line of sight for ranged attacks. Partial obstruction = cover → disadvantage on the attack. Total obstruction = no line of sight → can't target them.`
      },
      {
        q: "Massive Damage (optional rule)",
        a: `If damage ≥ 2× Severe threshold → mark 4 HP instead of 3. Makes combat deadlier — use at table's discretion.`
      }
    ]
  },
  {
    category: "📦 Resources",
    color: "#2563eb",
    questions: [
      {
        q: "Hope — gaining & spending",
        a: `Start with 2, max 6, carries between sessions.\nGain: roll with Hope, crit, or specific features.\n\nSpend to:\n• Help an Ally (1 Hope) — roll d6 advantage\n• Utilize Experience (1 each) — add modifier to roll\n• Tag Team Roll (3 Hope) — combine with another PC\n• Hope Features — class Hope features cost 3\n\nHope gained on a roll can be spent immediately on that same roll.`
      },
      {
        q: "Fear — the GM's currency",
        a: `GM gains when players roll with Fear. Max 12, carries between sessions. Also gained during rests (1d4 on short, 1d4 + number of PCs on long).\n\nGM spends to: make/enhance GM moves, activate adversary Fear Features, end temporary spell effects, spotlight additional adversaries in a round.`
      },
      {
        q: "Stress — your stamina pool",
        a: `6 slots default (some ancestries/classes add more). Used to fuel abilities, also imposed by GM moves and roll consequences.\n\n• Last Stress marked → you become Vulnerable (until 1+ cleared)\n• Must mark Stress but all full → mark 1 HP instead\n• Can't voluntarily use Stress-cost moves if all slots marked`
      },
      {
        q: "Proficiency — your damage scaling",
        a: `Determines number of damage dice with weapons/spells. Starts at 1 (Level 1). Increases at L2 (Prof 2), L5 (Prof 3), L8 (Prof 4).\n\nMultiplies dice only, NOT flat modifier. Example: Prof 2 with d8+2 weapon = 2d8+2.`
      }
    ]
  },
  {
    category: "🛡️ Conditions & Effects",
    color: "#059669",
    questions: [
      {
        q: "3 standard conditions",
        a: `• Hidden — enemies unaware of you. Attacks against you have disadvantage. Ends when spotted, you enter line of sight, or you attack.\n• Restrained — can't move, can still act from current position.\n• Vulnerable — all rolls targeting you have advantage.`
      },
      {
        q: "Temporary conditions",
        a: `"Temporary" means the target can use a move to try clearing it. PCs need a successful action roll (appropriate trait). Adversaries: GM narrates clearing it — uses their spotlight but no roll needed.`
      },
      {
        q: "Stacking rules",
        a: `Same condition can't apply twice to the same target. All other numerical effects DO stack unless stated otherwise. Advantage/disadvantage cancel 1-for-1 (never roll both together).`
      },
      {
        q: "Ongoing spells & duration",
        a: `If no listed expiration, the effect ends when: you choose to end it, the GM ends it (may cost Fear for temporary effects), or the fiction demands it. You can maintain multiple spell effects simultaneously.`
      }
    ]
  },
  {
    category: "🏕️ Downtime & Death",
    color: "#d97706",
    questions: [
      {
        q: "Short rest (~1 hour)",
        a: `Choose 2 moves:\n• Tend Wounds — clear 1d4+Tier HP\n• Clear Stress — clear 1d4+Tier Stress\n• Repair Armor — restore 1d4+Tier Armor Slots\n• Prepare — gain a Hope (2 if resting with allies)\n\nGM gains 1d4 Fear. Can swap loadout/vault cards at start of rest. 3 short rests in a row → next must be long.`
      },
      {
        q: "Long rest (several hours)",
        a: `Choose 2 moves:\n• Tend ALL Wounds — clear all HP\n• Clear ALL Stress — clear all Stress\n• Repair ALL Armor — restore all Armor Slots\n• Prepare — gain Hope\n• Work on a Project — advance a long-term project\n\nGM gains 1d4 + number of PCs Fear + may advance a countdown. Interrupted long rest = short rest only.`
      },
      {
        q: "Death moves (0 HP)",
        a: `When you mark your last HP, choose one:\n\n• Blaze of Glory — one final auto-crit action, then you die.\n• Avoid Death — drop unconscious (can't act, can't be targeted by adversaries). Revived when ally clears 1+ HP or after long rest. Roll Hope Die: if ≤ level → gain a scar (permanently cross out a Hope slot). Last Hope slot gone → your journey ends.\n• Risk It All — roll Duality Dice. Hope higher → stay up, clear HP and Stress = Hope die value. Fear higher → you die. Doubles → stay up, clear ALL HP and Stress.`
      },
      {
        q: "Work on a Project",
        a: `Long rest only. GM assigns a countdown to the project. Each time you take this move, either auto-advance or make an action roll (GM decides). Useful for crafting, research, deciphering texts, building things.`
      }
    ]
  },
  {
    category: "🎭 Spotlight & GM",
    color: "#be185d",
    questions: [
      {
        q: "Turn order — no initiative",
        a: `No initiative rolls. Spotlight moves organically:\n• Fiction naturally points to someone\n• Someone hasn't had focus in a while\n• A mechanic triggers spotlight shift\n\nOptional structured play: give each PC tokens (e.g. 3). Remove 1 per action. Refill when all spent. Limits how many actions one PC takes before others go.`
      },
      {
        q: "When does the GM act?",
        a: `Consider a GM move when a player: rolls with Fear, fails a roll, does something with logical consequences, gives a golden opportunity, or looks to the GM expectantly.\n\nAfter GM's move → spotlight returns to PCs. The GM should telegraph danger before hitting hard.`
      },
      {
        q: "Adversary turns",
        a: `When spotlighted, one adversary can:\n• Move to Close + standard attack\n• Move to Close + use an adversary action\n• Clear a condition on themselves\n• Sprint to Far or V.Far (no attack)\n• Anything the fiction demands\n\nGM spends additional Fear to spotlight extra adversaries in the same beat.`
      },
      {
        q: "Countdowns",
        a: `Track progress toward events, consequences, or adversary abilities. Die starts at a number and ticks down. Standard countdown ticks when any player makes an action roll.\n\nLoop countdowns reset after triggering. Used for encounter pacing, reinforcements, environmental hazards, charging abilities.`
      },
      {
        q: "Falling & environmental damage",
        a: `• V.Close fall: 1d10+3 physical\n• Close fall: 1d20+5 physical\n• Far/V.Far fall: 1d100+15 or instant death (GM call)\n• Collision at speed: 1d20+5 direct physical\n• Underwater: attacks have disadvantage, breath countdown (3) ticks on action, mark Stress when it expires`
      }
    ]
  },
  {
    category: "📈 Leveling & Advancement",
    color: "#4f46e5",
    questions: [
      {
        q: "Level structure & tiers",
        a: `10 levels, 4 tiers:\n• Tier 1: Level 1\n• Tier 2: Levels 2–4\n• Tier 3: Levels 5–7\n• Tier 4: Levels 8–10\n\nGM decides milestones (roughly every 3 sessions). Whole party levels together. No XP tracking.`
      },
      {
        q: "What happens each level-up?",
        a: `Every level:\n1. Increase all damage thresholds by +1\n2. Gain a new domain card at or below your level\n3. Choose 2 advancements from your tier or any lower tier\n\nAdditional at tier thresholds (L2, L5, L8):\n• +1 Proficiency\n• New Experience at +2\n• At L5 and L8: clear any marked (locked) traits`
      },
      {
        q: "Advancement options",
        a: `Each level, pick 2 from:\n• Increase 2 unmarked traits by +1 (traits lock until next tier)\n• +1 HP slot\n• +1 Stress slot\n• +1 to an Experience modifier\n• Take an additional domain card\n• Gain subclass Specialization or Mastery feature\n• Increase Armor Score by +1\n• Multiclass into another domain\n• Other class-specific options`
      },
      {
        q: "Multiclassing",
        a: `Available as a level-up advancement. Choose a domain from another class. You can select cards at or below half your level from that domain.\n\nDoes NOT grant: class features, subclass features, or Hope features from the other class. Domain cards only.`
      },
      {
        q: "Loadout vs Vault",
        a: `Loadout = up to 5 active domain cards (effects usable).\nVault = stored cards (no effect until swapped in).\n\nSwap freely at start of any rest. Mid-session: mark Stress equal to card's Recall Cost to move a card from vault → loadout.\n\nSubclass, ancestry, and community cards are always active and don't count toward the 5-card limit.`
      }
    ]
  },
  {
    category: "🗡️ Equipment & Loot",
    color: "#78716c",
    questions: [
      {
        q: "Weapon basics",
        a: `Each weapon specifies: range, trait for attacks, damage dice, damage type (phy/mag), and special features.\n\nOne-handed: primary + secondary. Two-handed: primary only.\nDamage = [Proficiency] × [weapon dice] + flat modifier.\n\nSwapping weapons: free during rest or calm. Otherwise mark a Stress.`
      },
      {
        q: "Weapon features",
        a: `• Burden: Weight/requirements — some classes ignore this (Warrior: Combat Training).\n• Cumbersome: Disadvantage in certain situations.\n• Thrown: Can be thrown at listed range.\n• Reach: Extends effective range category.\n• Versatile: Can be used one-handed or two-handed with different stats.\n\nEach weapon may have unique features described in its entry.`
      },
      {
        q: "Armor & thresholds",
        a: `Armor provides: Base Score (damage reduced per Armor Slot marked), Base Thresholds (Major/Severe before adding level), and number of Armor Slots.\n\nThresholds = base + level. Heavier armor = better protection, more slots, but may have burden tradeoffs.\n\nArmor Score can be increased via advancement options.`
      },
      {
        q: "Gold & inventory",
        a: `Gold tracked in "handfuls" — abstract wealth units. Start with 1 handful.\n\nInventory is freeform — track what matters, don't sweat mundane items unless GM says so.\n\nConsumables: max 5 of each type. Potions (clear HP or Stress), poisons, single-use items. Use as an action.`
      },
      {
        q: "Loot tiers",
        a: `Loot scales with party tier (Tier 1–4). Common loot found at camps or shops. Higher tier loot has better stats and unique magical properties.\n\nGM controls loot availability. Some items have unique features not found on base equipment.`
      }
    ]
  },
  {
    category: "✨ Spellcasting",
    color: "#7e22ce",
    questions: [
      {
        q: "Spellcast Rolls",
        a: `A trait roll using your Spellcast trait (defined by subclass). Only triggered when a domain card or feature requires one — not all magic uses Spellcast Rolls.\n\nA damaging Spellcast Roll is also an attack roll (uses same rules for success/fail + damage).`
      },
      {
        q: "Spell duration & maintaining",
        a: `If the spell text specifies when it ends, follow that. Otherwise it lasts until: you choose to end it, a natural story moment occurs, or the GM spends Fear to end a temporary effect.\n\nYou can maintain multiple active spells at once. You can always end your own spells early for free.`
      },
      {
        q: "Grimoire cards (Codex domain)",
        a: `A single card that grants access to a collection of smaller spells rather than one big feature. Codex domain specialty — Bards and Wizards can access these through their domain list.`
      },
      {
        q: "Spell focus",
        a: `Some spells require a spell focus (staff, orb, wand, etc.). This is part of your starting inventory if your class needs one. The focus itself doesn't have stats — it's a narrative requirement.`
      }
    ]
  },
  {
    category: "🔮 Arcana Domain Cards",
    color: "#7c3aed",
    questions: [
      {
        q: "Arcana Domain — overview",
        a: `Arcana is raw magical energy — teleportation, telekinesis, elemental blasts, and reality manipulation. The domain of wizards and sorcerers who channel arcane power directly. Heavy on Spellcast Rolls, often with high damage ceilings and battlefield control. Many cards use token systems that deplete as you act.`
      },
      {
        q: "Rune Ward (Arcana L1, Ability, Recall 0)",
        a: `You have a personal trinket that serves as a protective ward. The holder (you or an ally) can spend a Hope to reduce incoming damage by 1d8. If the d8 rolls an 8, the ward's power ends after reducing damage that turn — recharge it for free on your next rest.`
      },
      {
        q: "Unleash Chaos (Arcana L1, Spell, Recall 1)",
        a: `At session start, place tokens equal to your Spellcast trait on this card. Make a Spellcast Roll against a target within Far range and spend any number of tokens — on success, roll that many d10s for magic damage. Mark a Stress to replenish tokens (up to Spellcast trait). Clear unspent tokens at session end.`
      },
      {
        q: "Wall Walk (Arcana L1, Spell, Recall 1)",
        a: `Spend a Hope to let a creature you touch climb walls and ceilings as easily as walking. Lasts until end of scene or you cast it again.`
      },
      {
        q: "Counterspell (Arcana L2, Spell, Recall 1)",
        a: `Interrupt a magical effect by making a Spellcast reaction roll. On success, the effect stops and consequences are avoided. This card is then placed in your vault.`
      },
      {
        q: "Cinder Grasp (Arcana L2, Spell, Recall 1)",
        a: `Spellcast Roll vs target in Melee. On success: 1d20+3 magic damage, target is temporarily On Fire. While On Fire, they take an extra 2d6 magic damage at the end of each action they take.`
      },
      {
        q: "Floating Eye (Arcana L2, Spell, Recall 0)",
        a: `Spend a Hope to create a small floating orb you can move within Very Far range. You can see/hear through it freely, switching between your senses and the orb's. Ends if the orb takes damage or leaves range.`
      },
      {
        q: "Flight (Arcana L3, Spell, Recall 2)",
        a: `Spellcast Roll (15). On success, place tokens equal to your Agility (min 1). While flying, spend a token each time you make an action roll. After the last token is spent and the action resolves, you descend to the ground below you.`
      },
      {
        q: "Blink Out (Arcana L4, Spell, Recall 1)",
        a: `Spellcast Roll (12). On success, spend a Hope to teleport to a visible point within Far range. Spend an additional Hope per willing creature in Very Close range to bring them along.`
      },
      {
        q: "Preservation Blast (Arcana L4, Spell, Recall 2)",
        a: `Spellcast Roll vs all targets in Melee. Targets you succeed against are forced back to Far range and take d8+3 magic damage (Spellcast trait).`
      },
      {
        q: "Chain Lightning (Arcana L5, Spell, Recall 1)",
        a: `Mark 2 Stress. Spellcast Roll — all targets in Close range must make a Reaction Roll (Difficulty = your Spellcast result). Failures take 2d8+4 magic damage. Then it chains: any untargeted adversary within Close range of a damaged target must also react. Chains until no more valid targets.`
      },
      {
        q: "Premonition (Arcana L5, Spell, Recall 2)",
        a: `Once per long rest, immediately after the GM tells you the consequences of your roll, you can undo everything — rescind the move and consequences entirely, then take a different action instead.`
      },
      {
        q: "Confusing Aura (Arcana L6, Spell, Recall 2)",
        a: `Spellcast Roll (14). Once per long rest, create illusion layers over yourself. Mark any number of Stress for extra layers. When attacked, roll d6s equal to active layers — if any hit 5+, one layer is destroyed and the attack fails. If all are 4 or lower, you take damage and the spell ends.`
      },
      {
        q: "Rift Walker (Arcana L6, Spell, Recall 2)",
        a: `Spellcast Roll (15). On success, place an arcane marking where you stand. Next time you cast Rift Walker, a rift opens providing passage back to the marking. Rift stays open until you close it or cast another spell. You can drop and re-place the marking.`
      },
      {
        q: "Telekinesis (Arcana L6, Spell, Recall 0)",
        a: `Spellcast Roll vs target in Far range. On success, move them anywhere within Far range of their position. You can throw them at a second target — make another Spellcast Roll, dealing d12+4 physical damage (Proficiency) on success. Spell then ends.`
      },
      {
        q: "Cloaking Blast (Arcana L7, Spell, Recall 2)",
        a: `When you succeed on a Spellcast Roll for a different spell, spend a Hope to become Cloaked (unseen while stationary). Moving into an adversary's line of sight or attacking ends the cloak.`
      },
      {
        q: "Arcana-Touched (Arcana L7, Ability, Recall 2)",
        a: `When 4+ Arcana cards are in your loadout: +1 to Spellcast Rolls, and once per rest you can swap the results of your Hope and Fear dice.`
      },
      {
        q: "Arcane Reflection (Arcana L8, Spell, Recall 1)",
        a: `When you'd take magic damage, spend any number of Hope and roll that many d6s. If any roll a 6, the attack is reflected back to the caster — they take the damage instead.`
      },
      {
        q: "Earthquake (Arcana L9, Spell, Recall 2)",
        a: `Spellcast Roll (16). Once per rest, all non-flying targets within Very Far range must Reaction Roll (18). Failures: 3d10+8 physical damage + temporarily Vulnerable. Successes: half damage. All terrain in range becomes difficult; structures may crumble.`
      },
      {
        q: "Sensory Projection (Arcana L9, Spell, Recall 0)",
        a: `Once per rest, Spellcast Roll (15). On success, you enter a vision of any place you've been before — see and hear it in real time. You move freely, unconstrained by physics. Undetectable by any means. Ends on taking damage or casting another spell.`
      },
      {
        q: "Adjust Reality (Arcana L10, Spell, Recall 1)",
        a: `After you or an ally make any roll, spend 5 Hope to change the numerical result to a value of your choice. Must be plausible within the dice range.`
      },
      {
        q: "Falling Sky (Arcana L10, Spell, Recall 1)",
        a: `Spellcast Roll vs all adversaries in Far range. Mark any number of Stress — targets you succeed against take 1d20+2 magic damage per Stress marked.`
      }
    ]
  },
  {
    category: "⚔️ Blade Domain Cards",
    color: "#dc2626",
    questions: [
      {
        q: "Blade Domain — overview",
        a: `Blade is pure martial prowess — hitting harder, surviving longer, and rallying allies through combat excellence. All abilities (no spells), so no Spellcast Rolls needed. Focuses on damage bonuses, crit rewards, self-healing through violence, and armor synergies. The domain for frontline fighters and weapon specialists.`
      },
      {
        q: "Get Back Up (Blade L1, Ability, Recall 1)",
        a: `When you take Severe damage, mark a Stress to reduce the severity by one threshold (Severe → Major).`
      },
      {
        q: "Not Good Enough (Blade L1, Ability, Recall 1)",
        a: `When you roll damage dice, you can reroll any 1s or 2s.`
      },
      {
        q: "Whirlwind (Blade L1, Ability, Recall 0)",
        a: `On a successful attack against a target in Very Close range, spend a Hope to extend the attack to all other targets in Very Close range. Additional targets you succeed against take half damage.`
      },
      {
        q: "A Soldier's Bond (Blade L2, Ability, Recall 1)",
        a: `Once per long rest, when you compliment someone or ask about something they're good at, you both gain 3 Hope.`
      },
      {
        q: "Reckless (Blade L2, Ability, Recall 1)",
        a: `Mark a Stress to gain advantage on an attack.`
      },
      {
        q: "Scramble (Blade L3, Ability, Recall 1)",
        a: `Once per rest, when a creature in Melee range would deal damage to you, avoid the attack entirely and safely move out of Melee range.`
      },
      {
        q: "Versatile Fighter (Blade L3, Ability, Recall 1)",
        a: `You can use a different character trait for a weapon instead of the trait it normally calls for.`
      },
      {
        q: "Deadly Focus (Blade L4, Ability, Recall 2)",
        a: `Once per rest, choose a target. Until you attack another creature, defeat the target, or the battle ends: +1 to your Proficiency.`
      },
      {
        q: "Fortified Armor (Blade L4, Ability, Recall 0)",
        a: `While wearing armor, +2 to your damage thresholds.`
      },
      {
        q: "Champion's Edge (Blade L5, Ability, Recall 1)",
        a: `On a crit attack, spend up to 3 Hope. For each Hope choose one (no repeats): clear a HP, clear an Armor Slot, or force the target to mark an additional HP.`
      },
      {
        q: "Vitality (Blade L5, Ability, Recall 0)",
        a: `Permanently gain two of: one Stress slot, one HP slot, or +2 to damage thresholds. Then this card goes to your vault permanently.`
      },
      {
        q: "Battle-Hardened (Blade L6, Ability, Recall 2)",
        a: `Once per long rest, when you would make a Death Move, spend a Hope to clear a HP instead.`
      },
      {
        q: "Rage Up (Blade L6, Ability, Recall 1)",
        a: `Before an attack, mark a Stress for +2× your Strength to the damage roll. Can Rage Up twice per attack.`
      },
      {
        q: "Blade-Touched (Blade L7, Ability, Recall 1)",
        a: `When 4+ Blade cards in your loadout: +2 to attack rolls, +4 to Severe damage threshold.`
      },
      {
        q: "Glancing Blow (Blade L7, Ability, Recall 1)",
        a: `When you fail an attack, mark a Stress to deal weapon damage using half your Proficiency anyway.`
      },
      {
        q: "Battle Cry (Blade L8, Ability, Recall 2)",
        a: `Once per long rest, while charging into danger: all allies who hear you clear a Stress and gain a Hope. Allies also get advantage on attacks until you or an ally rolls Failure with Fear.`
      },
      {
        q: "Frenzy (Blade L8, Ability, Recall 3)",
        a: `Once per long rest, go Frenzied until no adversaries in sight. While Frenzied: can't use Armor Slots, but +10 to damage rolls and +8 to Severe threshold.`
      },
      {
        q: "Gore and Glory (Blade L9, Ability, Recall 2)",
        a: `On a crit weapon attack: gain an additional Hope or clear an additional Stress. When you defeat an enemy: gain a Hope or clear a Stress.`
      },
      {
        q: "Reaper's Strike (Blade L9, Ability, Recall 3)",
        a: `Once per long rest, spend a Hope to make an attack roll. The GM reveals which targets in range it would succeed against. Choose one — that target marks 5 HP.`
      },
      {
        q: "Battle Monster (Blade L10, Ability, Recall 0)",
        a: `On a successful attack, mark 4 Stress to force the target to mark HP equal to the number of HP you currently have marked (instead of rolling damage).`
      },
      {
        q: "Onslaught (Blade L10, Ability, Recall 3)",
        a: `Successful weapon attacks never deal below Major threshold (target always marks minimum 2 HP). Also, when a creature in weapon range damages an ally (not you), mark a Stress to force a Reaction Roll (15) — on failure, target marks a HP.`
      }
    ]
  },
  {
    category: "🦴 Bone Domain Cards",
    color: "#78716c",
    questions: [
      {
        q: "Bone Domain — overview",
        a: `Bone is tactical combat mastery — evasion, precision, battlefield positioning, and exploiting weaknesses. A mix of abilities focused on dodging, counterattacking, supporting allies through smart play, and dismantling enemies methodically. The domain for rogues, rangers, and anyone who fights with their brain as much as their blade.`
      },
      {
        q: "Deft Maneuvers (Bone L1, Ability, Recall 0)",
        a: `Once per rest, mark a Stress to sprint anywhere within Far range without making an Agility Roll. If you end in Melee with an adversary and immediately attack, +1 to the attack roll.`
      },
      {
        q: "I See It Coming (Bone L1, Ability, Recall 1)",
        a: `When targeted by an attack from beyond Melee range, mark a Stress to roll a d4 and add the result to your Evasion against that attack.`
      },
      {
        q: "Untouchable (Bone L1, Ability, Recall 1)",
        a: `Gain a bonus to your Evasion equal to half your Agility.`
      },
      {
        q: "Ferocity (Bone L2, Ability, Recall 2)",
        a: `When you cause an adversary to mark 1+ HP, spend 2 Hope to increase your Evasion by the number of HP they marked. Lasts until after the next attack against you.`
      },
      {
        q: "Strategic Approach (Bone L2, Ability, Recall 1)",
        a: `After a long rest, place tokens equal to your Knowledge (min 1). First time you move within Close range of an adversary and attack, spend a token for one of: advantage on the attack, clear a Stress on an ally in Melee of the target, or add a d8 to damage. Clear unspent tokens on long rest.`
      },
      {
        q: "Brace (Bone L3, Ability, Recall 1)",
        a: `When you mark an Armor Slot to reduce damage, mark a Stress to mark an additional Armor Slot.`
      },
      {
        q: "Tactician (Bone L3, Ability, Recall 1)",
        a: `When you Help an Ally, they can spend a Hope to add one of your Experiences to their roll alongside your advantage die. On Tag Team Rolls, you can roll a d20 as your Hope Die.`
      },
      {
        q: "Boost (Bone L4, Ability, Recall 1)",
        a: `Mark a Stress to launch off a willing ally within Close range, fling yourself into the air, and attack a target within Far range. Advantage on the attack, add a d10 to damage, end in Melee with the target.`
      },
      {
        q: "Redirect (Bone L4, Ability, Recall 1)",
        a: `When a ranged attack against you fails, roll d6s equal to your Proficiency. If any roll a 6, mark a Stress to redirect the attack to an adversary within Very Close range.`
      },
      {
        q: "Know Thy Enemy (Bone L5, Ability, Recall 1)",
        a: `Instinct Roll vs a target you're observing. On success, spend a Hope and ask the GM one of: unmarked HP/Stress, Difficulty/thresholds, tactics/standard attack damage, or features/Experiences. On success, also mark a Stress to remove a Fear from the GM's pool.`
      },
      {
        q: "Signature Move (Bone L5, Ability, Recall 1)",
        a: `Name and describe a signature combat move. Once per rest, when you perform it, roll a d20 as your Hope Die. On success, clear a Stress.`
      },
      {
        q: "Rapid Riposte (Bone L6, Ability, Recall 0)",
        a: `When a Melee attack against you fails, mark a Stress to deal the weapon damage of one of your active weapons to the attacker.`
      },
      {
        q: "Recovery (Bone L6, Ability, Recall 1)",
        a: `During a short rest, you can choose a long rest downtime move instead. Spend a Hope to let an ally do the same.`
      },
      {
        q: "Cruel Precision (Bone L7, Ability, Recall 1)",
        a: `On a successful weapon attack, add your Finesse or Agility to the damage roll.`
      },
      {
        q: "Bone-Touched (Bone L7, Ability, Recall 2)",
        a: `When 4+ Bone cards in loadout: +1 Agility, and once per rest spend 3 Hope to cause an attack that succeeded against you to fail instead.`
      },
      {
        q: "Breaking Blow (Bone L8, Ability, Recall 3)",
        a: `On a successful attack, mark a Stress — the next successful attack against that same target deals an extra 2d12 damage.`
      },
      {
        q: "Wrangle (Bone L8, Ability, Recall 1)",
        a: `Agility Roll vs all targets in Close range. Spend a Hope to move targets you succeed against (and willing allies in Close range) to another point within Close range.`
      },
      {
        q: "On the Brink (Bone L9, Ability, Recall 1)",
        a: `When you have 2 or fewer HP unmarked, you don't take Minor damage.`
      },
      {
        q: "Splintering Strike (Bone L9, Ability, Recall 3)",
        a: `Spend a Hope, attack all adversaries in weapon range. Once per long rest on success: add up all damage dealt, then redistribute it however you want between targets. Each target you deal damage to also gets an extra damage die added.`
      },
      {
        q: "Deathrun (Bone L10, Ability, Recall 1)",
        a: `Spend 3 Hope to run a straight path to Far range, attacking all adversaries in weapon range along the way. First target: weapon damage +1 Proficiency. Each subsequent target: remove a die from your pool. Can't hit the same target twice.`
      },
      {
        q: "Swift Step (Bone L10, Ability, Recall 2)",
        a: `When an attack against you fails, clear a Stress. If you can't clear a Stress, gain a Hope.`
      }
    ]
  },
  {
    category: "📖 Codex Domain Cards",
    color: "#2563eb",
    questions: [
      {
        q: "Codex Domain — overview",
        a: `Codex is learned magic — grimoires, spellbooks, and scholarly arcana. Each grimoire card contains 2–3 spells in one card (more versatility per slot). Covers utility (portals, locks, illusions, telepathy), offense (fireballs, disintegration), and support (constructs, time manipulation). The domain for wizards who study magic systematically. Higher Recall Costs reflect the complexity.`
      },
      {
        q: "Book of Ava (Codex L1, Grimoire, Recall 2)",
        a: `Power Push: Spellcast Roll vs target in Melee. On success, knocked back to Far + d10+2 magic damage (Proficiency).\nTava's Armor: Spend a Hope to give a touched target +1 Armor Score until next rest or recast.\nIce Spike: Spellcast Roll (12) to summon a large ice spike within Far. As weapon: Spellcast vs Difficulty, d6 physical damage (Proficiency).`
      },
      {
        q: "Book of Illiat (Codex L1, Grimoire, Recall 2)",
        a: `Slumber: Spellcast Roll vs target in Very Close. On success, target is Asleep until damaged or GM spends Fear to clear.\nArcane Barrage: Once per rest, spend any number of Hope — roll that many d6s as magic damage to a target in Close range.`
      },
      {
        q: "Book of Vagras (Codex L1, Grimoire, Recall 2)",
        a: `Runic Lock: Spellcast Roll (15) on an object you touch. Once per rest on success, lock it so only creatures you choose can open it. Can be broken with magic and an hour of study.\nArcane Door: Spellcast Roll (13), no enemies in Melee. Spend a Hope to open a portal to a visible point within Far. Closes after one creature passes through.\nReveal: Spellcast Roll — anything magically hidden within Close is revealed.`
      },
      {
        q: "Book of Sitil (Codex L2, Grimoire, Recall 2)",
        a: `Adjust Appearance: Magically change your appearance and clothing to avoid recognition.\nParallela: Spend 2 Hope on yourself or ally in Close. Their next attack hits an additional target in range it would succeed against. One target at a time.\nIllusion: Spellcast Roll (14). Create a temporary visual illusion (no larger than you) within Close. Holds up until observer is in Melee.`
      },
      {
        q: "Book of Tyfar (Codex L2, Grimoire, Recall 2)",
        a: `Telepathy: Spend a Hope to open mental communication with a visible target. Lasts until next rest or recast.\nMagic Hand: Conjure a magical hand (your size/strength) within Far range.\nMysterious Mist: Spellcast Roll (13). Create thick stationary fog within Very Close. Heavily obscures everything inside.`
      },
      {
        q: "Book of Korvax (Codex L3, Grimoire, Recall 2)",
        a: `Levitation: Spellcast Roll to lift a visible target into the air and move them within Close range of original position.\nRecant: Spend a Hope — target in Melee makes Reaction Roll (15). On failure, they forget the last minute of conversation.\nRune Circle: Mark a Stress to create a magic circle where you stand. Adversaries in Melee (or entering Melee) take 2d12+4 magic damage and are knocked to Very Close.`
      },
      {
        q: "Book of Norai (Codex L3, Grimoire, Recall 2)",
        a: `Wild Flame: Spellcast Roll vs up to 3 adversaries in Melee. Successes take 2d6 magic damage and mark a Stress.\nMystic Tether: Spellcast Roll vs target in Far. On success, temporarily Restrained + mark a Stress. Grounds flying creatures.\nFireball: Spellcast Roll vs target in Very Far. On success, target + all creatures in Very Close of them make Reaction (13). Failures: d20+5 magic damage (Proficiency). Successes: half.`
      },
      {
        q: "Book of Exota (Codex L4, Grimoire, Recall 3)",
        a: `Repudiate: Interrupt a magical effect — Spellcast reaction roll. Once per rest on success, the effect stops and consequences are avoided.\nCreate Construct: Spend a Hope, animate objects into a construct that obeys basic commands. Shares your Evasion/traits, attacks deal 2d10+3 physical. One at a time; falls apart on any damage.`
      },
      {
        q: "Book of Grynn (Codex L4, Grimoire, Recall 2)",
        a: `Arcane Deflection: Once per long rest, spend a Hope to negate damage from an attack targeting you or an ally in Very Close.\nTime Lock: Target an object in Far — it stops in time/space until next rest. Spellcast Roll vs anyone trying to move it.\nWall of Flame: Spellcast Roll (15). Create a fire wall between two points within Far. Anything passing through takes 4d10+3 magic damage.`
      },
      {
        q: "Manifest Wall (Codex L5, Spell, Recall 2)",
        a: `Spellcast Roll (15). Once per rest, spend a Hope to create a temporary wall between two points within Far. Up to 50 ft high, any angle. Creatures/objects in its path shunted to a chosen side. Lasts until next rest or recast.`
      },
      {
        q: "Sigil of Retribution (Codex L5, Spell, Recall 2)",
        a: `Mark an adversary in Close with a sigil. GM gains a Fear. When the marked target damages you/allies, place a d8 on this card (max = your level). On your next successful attack against them, roll all stored d8s and add to damage, then clear. Ends on target defeat or recast.`
      },
      {
        q: "Banish (Codex L6, Spell, Recall 0)",
        a: `Spellcast Roll vs target in Close. Roll d20s equal to Spellcast trait — target reacts vs your highest result. On target's success: mark a Stress. Once per rest on failure: banished from this realm. Each time PCs roll Fear, the banish Difficulty drops by 1 and target gets another reaction roll to return.`
      },
      {
        q: "Teleport (Codex L6, Spell, Recall 2)",
        a: `Once per long rest, teleport yourself + willing targets in Close to a place you've been. Spellcast Roll (16) with modifiers: know it well (+3), visited frequently (+1), infrequently (+0), only once (−2). Failure = off course, severity based on how badly you failed.`
      },
      {
        q: "Book of Homet (Codex L7, Grimoire, Recall 0)",
        a: `Pass Through: Spellcast (13). Once per rest, you + all touching creatures pass through a wall/door within Close.\nPlane Gate: Spellcast (14). Once per long rest, open a gateway to another dimension/plane you've been to. Lasts until next rest.`
      },
      {
        q: "Codex-Touched (Codex L7, Ability, Recall 2)",
        a: `When 4+ Codex cards in loadout: you can mark a Stress to add Proficiency to a Spellcast Roll, and once per rest swap this card with any vault card without paying Recall.`
      },
      {
        q: "Book of Vyola (Codex L8, Grimoire, Recall 2)",
        a: `Memory Delve: Spellcast Roll vs target in Far. On success, peer into their mind — ask the GM a question and they describe relevant memories.\nShared Clarity: Once per long rest, spend a Hope on two willing creatures. When one would mark Stress, the pair chooses who marks it. Lasts until rest.`
      },
      {
        q: "Safe Haven (Codex L8, Spell, Recall 3)",
        a: `With a few minutes of calm, spend 2 Hope to summon an interdimensional home. A magical door appears within Close — only creatures you choose can enter. You can make the entrance invisible. Resting inside grants an additional downtime move.`
      },
      {
        q: "Book of Ronin (Codex L9, Grimoire, Recall 4)",
        a: `Transform: Spellcast (15). Become an inanimate object (up to 2× your size). Lasts until you take damage.\nEternal Enervation: Once per long rest, Spellcast Roll vs target in Close. On success, permanently Vulnerable — can't be cleared by any means.`
      },
      {
        q: "Disintegration Wave (Codex L9, Spell, Recall 4)",
        a: `Spellcast Roll (18). Once per long rest, GM tells you which adversaries in Far range have Difficulty 18 or lower. Mark a Stress for each one you target — they're killed and can't be revived.`
      },
      {
        q: "Book of Yarrow (Codex L10, Grimoire, Recall 2)",
        a: `Timejammer: Spellcast (18). Time halts for everything in Far range except you. Resumes when you make an action roll targeting a creature.\nMagic Immunity: Spend 5 Hope to become immune to magic damage until next rest.`
      },
      {
        q: "Transcendent Union (Codex L10, Spell, Recall 1)",
        a: `Once per long rest, spend 5 Hope on two or more willing creatures. Until next rest, when any connected creature would mark Stress or HP, the group chooses who marks it.`
      }
    ]
  },
  {
    category: "🎭 Grace Domain Cards",
    color: "#ec4899",
    questions: [
      {
        q: "Grace Domain — overview",
        a: `Grace is charm, deception, performance, and social manipulation — plus illusion magic. A blend of abilities and spells focused on controlling people rather than the battlefield. Includes mind reading, disguise, taunting enemies, inspiring allies, and stealing features from other players' cards. The domain for bards, rogues, and anyone who talks their way through problems.`
      },
      {
        q: "Deft Deceiver (Grace L1, Ability, Recall 0)",
        a: `Spend a Hope to gain advantage on a roll to deceive or trick someone into believing a lie.`
      },
      {
        q: "Enrapture (Grace L1, Spell, Recall 0)",
        a: `Spellcast Roll vs target in Close. On success, target is temporarily Enraptured — attention fixed on you, field of view narrowed, only hearing your voice. Once per rest on success, mark a Stress to force the Enraptured target to mark a Stress too.`
      },
      {
        q: "Inspirational Words (Grace L1, Ability, Recall 1)",
        a: `After a long rest, place tokens equal to your Presence. When you speak with an ally, spend a token to: clear their Stress, clear their HP, or give them a Hope. Clear unspent tokens on long rest.`
      },
      {
        q: "Tell No Lies (Grace L2, Spell, Recall 1)",
        a: `Spellcast Roll vs target in Very Close. On success, they can't lie while in Close range (but aren't compelled to speak). If they refuse a question, they mark a Stress and the effect ends. Target is usually unaware of the spell.`
      },
      {
        q: "Troublemaker (Grace L2, Ability, Recall 2)",
        a: `Taunt/provoke a target in Far range — Presence Roll vs them. Once per rest on success, roll d4s equal to Proficiency. Target marks Stress equal to the highest d4 result.`
      },
      {
        q: "Hypnotic Shimmer (Grace L3, Spell, Recall 1)",
        a: `Spellcast Roll vs all adversaries in front of you within Close. Once per rest on success, targets are temporarily Stunned (can't use reactions or take actions until cleared) and mark a Stress.`
      },
      {
        q: "Invisibility (Grace L3, Spell, Recall 1)",
        a: `Spellcast (10). Mark a Stress, choose yourself or an ally in Melee to become Invisible (unseen, attacks against them have disadvantage). Place tokens equal to Spellcast trait — spend one per action. After last token action resolves, effect ends. One target at a time.`
      },
      {
        q: "Soothing Speech (Grace L4, Ability, Recall 1)",
        a: `During a short rest, when you comfort someone while using Tend to Wounds on them, clear an additional HP on that character. You also clear 2 HP on yourself.`
      },
      {
        q: "Through Your Eyes (Grace L4, Spell, Recall 1)",
        a: `Choose a target in Very Far range. See through their eyes and hear through their ears. Switch freely between your senses and theirs. Lasts until you cast another spell or next rest.`
      },
      {
        q: "Thought Delver (Grace L5, Spell, Recall 2)",
        a: `Spend a Hope to read surface thoughts of a target in Far range. Spellcast Roll vs target to delve deeper. On a roll with Fear, the GM may decide the target becomes aware of the intrusion.`
      },
      {
        q: "Words of Discord (Grace L5, Spell, Recall 1)",
        a: `Whisper to an adversary in Melee, Spellcast (13). On success, target marks a Stress and must attack another adversary instead of you/allies. Target realizes what happened afterward — next casting against them has a −5 penalty.`
      },
      {
        q: "Never Upstaged (Grace L6, Ability, Recall 2)",
        a: `When you mark 1+ HP from an attack, mark a Stress to place tokens equal to HP marked. Your next successful attack gets +5 damage per token, then clear all tokens.`
      },
      {
        q: "Share the Burden (Grace L6, Spell, Recall 0)",
        a: `Once per rest, touch a willing creature and take on their Stress. They share an intimate thought/emotion in the process. Transfer any number of their marked Stress to you, then gain a Hope per Stress transferred.`
      },
      {
        q: "Endless Charisma (Grace L7, Ability, Recall 1)",
        a: `After an action roll to persuade, lie, or garner favor, spend a Hope to reroll the Hope or Fear die.`
      },
      {
        q: "Grace-Touched (Grace L7, Ability, Recall 2)",
        a: `When 4+ Grace cards in loadout: you can mark an Armor Slot instead of Stress, and when forcing a target to mark HP you can force Stress instead.`
      },
      {
        q: "Astral Projection (Grace L8, Spell, Recall 0)",
        a: `Once per long rest, mark a Stress to create a copy of yourself anywhere you've been. See/hear through it, affect the world as if you were there. Observers can tell it's magical. Lasts until next rest or the projection takes damage.`
      },
      {
        q: "Mass Enrapture (Grace L8, Spell, Recall 3)",
        a: `Spellcast Roll vs all targets in Far range. Successes are temporarily Enraptured (attention fixed on you). Mark a Stress to force all Enraptured targets to mark a Stress, ending the spell.`
      },
      {
        q: "Copycat (Grace L9, Spell, Recall 3)",
        a: `Once per long rest, mimic the features of another player's domain card (L8 or lower) from their loadout. Spend Hope equal to half the card's level to gain access. Lasts until rest or they vault the card.`
      },
      {
        q: "Master of the Craft (Grace L9, Ability, Recall 0)",
        a: `Gain a permanent +2 to two Experiences or +3 to one Experience. Then this card goes to your vault permanently.`
      },
      {
        q: "Encore (Grace L10, Spell, Recall 1)",
        a: `When an ally in Close deals damage to an adversary, Spellcast Roll vs that target. On success, deal the same damage your ally dealt. If the Spellcast succeeds with Fear, vault this card.`
      },
      {
        q: "Notorious (Grace L10, Ability, Recall 0)",
        a: `People know your reputation. Mark a Stress before rolling to get +10 to the result when leveraging your notoriety. Free food/drinks everywhere; everything else costs 1 bag less (minimum 1 handful). Doesn't count against your 5-card loadout max and can't be vaulted.`
      }
    ]
  },
  {
    category: "🌑 Midnight Domain Cards",
    color: "#4338ca",
    questions: [
      {
        q: "Midnight Domain — overview",
        a: `Midnight is shadow, stealth, and dark magic — infiltration, disguise, ambush, and fear. A mix of spells and abilities for sneaking, silencing, binding with shadow, and terrorizing enemies. Includes teleporting through darkness, reading minds from afar, and becoming spectral. The domain for rogues, assassins, and anyone who operates from the shadows.`
      },
      {
        q: "Pick and Pull (Midnight L1, Ability, Recall 0)",
        a: `Advantage on rolls to pick nonmagical locks, disarm nonmagical traps, or steal items (by stealth or force).`
      },
      {
        q: "Rain of Blades (Midnight L1, Spell, Recall 1)",
        a: `Spend a Hope, Spellcast Roll vs all targets in Very Close. Successes take d8+2 magic damage (Proficiency). If a target is Vulnerable, extra 1d8 damage.`
      },
      {
        q: "Uncanny Disguise (Midnight L1, Spell, Recall 0)",
        a: `With a few minutes to prepare, mark a Stress to take the appearance of any humanoid you can picture. Advantage on Presence Rolls to avoid scrutiny. Place tokens equal to Spellcast trait — spend one per action. Disguise drops after last token.`
      },
      {
        q: "Midnight Spirit (Midnight L2, Spell, Recall 1)",
        a: `Spend a Hope to summon a humanoid-sized spirit until next rest. Can move/carry things for you. For attack: Spellcast Roll vs target in Very Far — on success, spirit moves to Melee, roll d6s equal to Spellcast trait for magic damage, then spirit dissipates. One at a time.`
      },
      {
        q: "Shadowbind (Midnight L2, Spell, Recall 0)",
        a: `Spellcast Roll vs all adversaries in Very Close range. Successes are temporarily Restrained as their shadow binds them.`
      },
      {
        q: "Chokehold (Midnight L3, Ability, Recall 1)",
        a: `Position behind a creature your size, mark a Stress to put them in a chokehold — temporarily Vulnerable. Attacks against a target Vulnerable this way deal extra 2d6 damage.`
      },
      {
        q: "Veil of Night (Midnight L3, Spell, Recall 1)",
        a: `Spellcast (13). Create a curtain of darkness between two points within Far. Only you can see through it. You're Hidden to adversaries on the other side, advantage on attacks through the veil. Lasts until you cast another spell.`
      },
      {
        q: "Stealth Expertise (Midnight L4, Ability, Recall 0)",
        a: `When you roll Fear while sneaking through danger, mark a Stress to change it to a roll with Hope. Same applies: if an ally in Close rolls Fear while sneaking, mark a Stress to flip their result too.`
      },
      {
        q: "Glyph of Nightfall (Midnight L4, Spell, Recall 1)",
        a: `Spellcast Roll vs target in Very Close. On success, spend a Hope to conjure a dark glyph — temporarily reduces the target's Difficulty by your Knowledge (min 1).`
      },
      {
        q: "Hush (Midnight L5, Spell, Recall 1)",
        a: `Spellcast Roll vs target in Close. Spend a Hope to Silence the target + everything in Very Close of them (follows them). Can't make noise, can't cast spells. Lasts until GM spends Fear, you recast, or you take Major damage.`
      },
      {
        q: "Phantom Retreat (Midnight L5, Spell, Recall 2)",
        a: `Spend a Hope to mark your current position. Before next rest, spend another Hope to vanish and reappear at the marked spot. Spell ends after reappearing.`
      },
      {
        q: "Dark Whispers (Midnight L6, Spell, Recall 0)",
        a: `Speak into the mind of anyone you've made physical contact with — they can speak back. Mark a Stress + Spellcast Roll to ask one of: where are they, what are they doing, what do they fear, what do they cherish most.`
      },
      {
        q: "Mass Disguise (Midnight L6, Spell, Recall 0)",
        a: `With a few minutes of silence, mark a Stress to disguise all willing creatures in Close range. Must share general body type. Advantage on Presence to avoid scrutiny. Activate Countdown (8) — ticks as a GM-chosen consequence. Disguise drops when countdown triggers.`
      },
      {
        q: "Midnight-Touched (Midnight L7, Ability, Recall 2)",
        a: `When 4+ Midnight cards in loadout: once per rest, when you have 0 Hope and GM would gain Fear, gain a Hope instead. On successful attacks, mark a Stress to add your Fear die result to damage.`
      },
      {
        q: "Vanishing Dodge (Midnight L7, Spell, Recall 1)",
        a: `When a physical attack against you fails, spend a Hope to become Hidden and teleport to a point within Close of the attacker. Stay Hidden until your next action roll.`
      },
      {
        q: "Shadowhunter (Midnight L8, Ability, Recall 2)",
        a: `While shrouded in low light or darkness: +1 Evasion and advantage on attack rolls.`
      },
      {
        q: "Spellcharge (Midnight L8, Spell, Recall 1)",
        a: `When you take magic damage, place tokens equal to HP marked (max = Spellcast trait). On a successful attack, spend tokens to add a d6 per token to damage.`
      },
      {
        q: "Night Terror (Midnight L9, Spell, Recall 2)",
        a: `Once per long rest, targets in Very Close see you as a nightmare. Reaction Roll (16) — failures are Horrified (Vulnerable). Steal Fear from GM equal to Horrified targets. Roll d6s equal to stolen Fear — deal that total to each Horrified target. Discard stolen Fear.`
      },
      {
        q: "Twilight Toll (Midnight L9, Ability, Recall 1)",
        a: `Choose a target in Far. When you succeed on non-damage action rolls against them, place a token. When you deal damage, spend tokens to add a d12 per token. One target at a time — clear tokens on new target or rest.`
      },
      {
        q: "Eclipse (Midnight L10, Spell, Recall 2)",
        a: `Spellcast (16). Once per long rest, plunge everything in Far range into darkness only you/allies can see through. Attacks targeting you/allies have disadvantage. When you/ally succeed with Hope against an adversary in the shadow, target marks a Stress. Lasts until GM spends Fear or you take Severe damage.`
      },
      {
        q: "Specter of the Dark (Midnight L10, Spell, Recall 1)",
        a: `Mark a Stress to become Spectral until your next action roll targeting a creature. While Spectral: immune to physical damage, can float and pass through solid objects. Still visible.`
      }
    ]
  },
  {
    category: "🌿 Sage Domain Cards",
    color: "#16a34a",
    questions: [
      {
        q: "Sage Domain — overview",
        a: `Sage is nature magic — plants, animals, terrain control, and healing through the natural world. Summon familiars, entangle enemies with vines, grow barriers, forage supplies, and transform into nature spirits. A mix of offensive control (restraining, area damage) and support (healing fields, conjured steeds). The domain for druids and rangers connected to the wild.`
      },
      {
        q: "Gifted Tracker (Sage L1, Ability, Recall 0)",
        a: `While tracking creatures, spend any number of Hope to ask that many questions: direction, how long ago, what they were doing, how many. When you encounter tracked creatures, +1 Evasion against them.`
      },
      {
        q: "Nature's Tongue (Sage L1, Ability, Recall 0)",
        a: `Speak to plants and animals — Instinct Roll (12). On success, they share what they know. On Fear, info may be limited or come at a cost. Also, before a Spellcast Roll in a natural environment, spend a Hope for +2 to the roll.`
      },
      {
        q: "Vicious Entangle (Sage L1, Spell, Recall 1)",
        a: `Spellcast Roll vs target in Far. On success, roots deal 1d8+1 physical damage and temporarily Restrain the target. Spend a Hope to also Restrain another adversary in Very Close of the first.`
      },
      {
        q: "Conjure Swarm (Sage L2, Spell, Recall 1)",
        a: `Armored Beetles: Mark a Stress to conjure beetles around you. Next time you take damage, reduce severity by one threshold. Spend Hope to keep them after absorbing a hit.\nFire Flies: Spellcast Roll vs all adversaries in Close. Spend a Hope to deal 2d8+3 magic damage to targets you succeed against.`
      },
      {
        q: "Natural Familiar (Sage L2, Spell, Recall 1)",
        a: `Spend a Hope to summon a small nature spirit/critter until next rest. Communicate with it, Spellcast to command simple tasks, mark Stress to see through its eyes. Extra Hope for a flying familiar. When you damage an adversary in Melee of your familiar, add a d6 to damage. One at a time.`
      },
      {
        q: "Corrosive Projectile (Sage L3, Spell, Recall 1)",
        a: `Spellcast Roll vs target in Far. Success: d6+4 magic damage (Proficiency). Mark 2+ Stress to make them permanently Corroded — target gets −1 Difficulty per 2 Stress spent. This condition stacks.`
      },
      {
        q: "Towering Stalk (Sage L3, Spell, Recall 1)",
        a: `Once per rest, conjure a thick climbable stalk in Close range, height up to Far. Mark a Stress to use as attack: Spellcast Roll vs adversaries in Close — successes are lifted and dropped for d8 physical damage (Proficiency).`
      },
      {
        q: "Death Grip (Sage L4, Spell, Recall 1)",
        a: `Spellcast Roll vs target in Close. Choose one: pull them to Melee (or yourself to them), constrict (2 Stress on target), or vine whip (adversaries between you and target react (13) or take 3d6+2 physical). On success, target is temporarily Restrained.`
      },
      {
        q: "Healing Field (Sage L4, Spell, Recall 2)",
        a: `Once per long rest, conjure healing plants in Close range. You and all allies in the area clear a HP. Spend 2 Hope to clear 2 HP instead.`
      },
      {
        q: "Thorn Skin (Sage L5, Spell, Recall 1)",
        a: `Once per rest, spend a Hope to sprout thorns. Place tokens = Spellcast trait. When damaged, spend tokens to roll d6s — reduce damage by total. If in Melee of attacker, reflect that amount back to them. Clear tokens on rest.`
      },
      {
        q: "Wild Fortress (Sage L5, Spell, Recall 1)",
        a: `Spellcast (13), spend 2 Hope to grow a dome. You + one ally inside can't be targeted and can't attack. Attacks against the dome auto-succeed. Dome has thresholds 15/30, falls after 3 HP. Track with tokens.`
      },
      {
        q: "Conjured Steeds (Sage L6, Spell, Recall 0)",
        a: `Spend Hope to conjure that many magical mounts until long rest or they take damage. Double land speed while traveling; move within Far without rolling when in danger. Riders: −2 attack, +2 damage.`
      },
      {
        q: "Forager (Sage L6, Ability, Recall 1)",
        a: `Additional downtime move: roll d6 for what you forage (party max 5 foraged items). 1: food (clear 2 Stress), 2: relic (gain 2 Hope), 3: arcane rune (+2 Spellcast), 4: healing vial (clear 2 HP), 5: luck charm (reroll any die), 6: choose.`
      },
      {
        q: "Sage-Touched (Sage L7, Ability, Recall 2)",
        a: `When 4+ Sage cards in loadout: +2 to Spellcast Rolls in natural environments, and once per rest double your Agility or Instinct for one roll (choose before rolling).`
      },
      {
        q: "Wild Surge (Sage L7, Spell, Recall 2)",
        a: `Once per long rest, mark a Stress to enhance yourself. Place a d6 showing 1 on this card. Add its value to every action roll. After each roll, increase the die by 1. When it would exceed 6 or you rest, the form drops and you mark an additional Stress.`
      },
      {
        q: "Forest Sprites (Sage L8, Spell, Recall 2)",
        a: `Spellcast (13). Spend Hope to create that many sprites at chosen points within Far. Benefits: allies get +3 to attacks vs adversaries in Melee of a sprite, and allies marking an Armor Slot near a sprite mark an additional one. Sprites vanish after granting a benefit or taking any damage.`
      },
      {
        q: "Rejuvenation Barrier (Sage L8, Spell, Recall 1)",
        a: `Spellcast (15). Once per rest, create a protective barrier at Very Close range. You and allies inside when cast clear 1d4 HP. While up, resistance to physical damage from outside. Barrier follows you.`
      },
      {
        q: "Fane of the Wilds (Sage L9, Ability, Recall 2)",
        a: `After long rest, place tokens = number of Sage cards in loadout + vault. After a Spellcast Roll, spend tokens for +1 each. On a crit Spellcast for a Sage spell, gain a token. Clear on long rest.`
      },
      {
        q: "Plant Dominion (Sage L9, Spell, Recall 1)",
        a: `Spellcast (18). Once per long rest, reshape all plant life within Far range — grow trees instantly, clear paths through vines, create root walls.`
      },
      {
        q: "Force of Nature (Sage L10, Spell, Recall 2)",
        a: `Mark a Stress to become a hulking nature spirit. On successful attack/Spellcast: +10 to damage. When you defeat a creature in Close, absorb them to clear an Armor Slot. Can't be Restrained. Must spend a Hope before each action roll — revert to normal if you can't.`
      },
      {
        q: "Tempest (Sage L10, Spell, Recall 2)",
        a: `Spellcast Roll vs all targets in Far range. Choose a tempest (lasts until GM spends Fear):\n• Blizzard: 2d20+8 magic damage, targets temporarily Vulnerable\n• Hurricane: 3d10+10 magic damage, choose wind direction — targets can't move against it\n• Sandstorm: 5d6+9 magic damage, attacks from beyond Melee have disadvantage`
      }
    ]
  },
  {
    category: "✨ Splendor Domain Cards",
    color: "#eab308",
    questions: [
      {
        q: "Splendor Domain — overview",
        a: `Splendor is divine and radiant magic — healing, protection, resurrection, and righteous damage. The primary healing domain, with multiple ways to clear HP and Stress on allies. Also includes smiting, protective wards, divination, and resurrection. The domain for seraphs, paladins, and anyone who channels holy or radiant power to support the party.`
      },
      {
        q: "Bolt Beacon (Splendor L1, Spell, Recall 1)",
        a: `Spellcast Roll vs target in Far. On success, spend a Hope for d8+2 magic damage (Proficiency). Target becomes temporarily Vulnerable and glows brightly until cleared.`
      },
      {
        q: "Mending Touch (Splendor L1, Spell, Recall 1)",
        a: `Take a few minutes to channel healing on a creature you touch. Spend 2 Hope to clear a HP or Stress on them. Once per long rest, if you learn something new about them or reveal something about yourself during the healing, clear 2 HP or 2 Stress instead.`
      },
      {
        q: "Reassurance (Splendor L1, Ability, Recall 0)",
        a: `Once per rest, after an ally rolls but before consequences, offer support — the ally can reroll their dice.`
      },
      {
        q: "Final Words (Splendor L2, Spell, Recall 1)",
        a: `Infuse a corpse with life to speak. Spellcast (13). Success with Hope: 3 questions answered. Success with Fear: 1 question. Corpse answers truthfully but only knows what it knew in life. On failure or after answering, the body turns to dust.`
      },
      {
        q: "Healing Hands (Splendor L2, Spell, Recall 1)",
        a: `Spellcast (13) on a creature (not yourself) in Melee. On success, mark a Stress to clear 2 HP or 2 Stress. On failure, mark a Stress to clear 1 HP or 1 Stress. Can't heal the same target again until long rest.`
      },
      {
        q: "Second Wind (Splendor L3, Ability, Recall 1)",
        a: `Once per rest, when you succeed on an attack against an adversary, clear 3 Stress or a HP. On success with Hope, also clear 3 Stress or a HP on an ally within Close.`
      },
      {
        q: "Voice of Reason (Splendor L3, Ability, Recall 2)",
        a: `Advantage on rolls to de-escalate violence or convince someone to follow your lead. Also: when all your Stress slots are marked, +1 Proficiency on damage rolls.`
      },
      {
        q: "Divination (Splendor L4, Spell, Recall 1)",
        a: `Once per long rest, spend 3 Hope to ask one yes/no question about a future event, person, place, or situation. You briefly see the answer.`
      },
      {
        q: "Life Ward (Splendor L4, Spell, Recall 1)",
        a: `Spend 3 Hope on an ally in Close. They're marked with a glowing sigil. When they would make a Death Move, they clear a HP instead. Ends after saving them, targeting someone else, or long rest.`
      },
      {
        q: "Shape Material (Splendor L5, Spell, Recall 1)",
        a: `Spend a Hope to shape natural material you're touching (stone, ice, wood) — area no larger than you. Form tools, doors, etc. Only within Close of where you touch.`
      },
      {
        q: "Smite (Splendor L5, Spell, Recall 2)",
        a: `Once per rest, spend 3 Hope to charge. Your next successful weapon attack: double the damage result. Deals magic damage regardless of weapon type.`
      },
      {
        q: "Restoration (Splendor L6, Spell, Recall 2)",
        a: `After long rest, place tokens = Spellcast trait. Touch a creature and spend tokens: clear 2 HP or 2 Stress per token. Also spend a token to clear Vulnerable or heal a physical/magical ailment (GM may require extra tokens for strong ailments). Clear on long rest.`
      },
      {
        q: "Zone of Protection (Splendor L6, Spell, Recall 2)",
        a: `Spellcast (16). Once per long rest, create a zone at a point within Far. Allies in Very Close range are protected. Place a d6 showing 1. When an ally in the zone takes damage, reduce by the die's value, then increase the die by 1. Ends when die would exceed 6.`
      },
      {
        q: "Healing Strike (Splendor L7, Spell, Recall 1)",
        a: `When you deal damage to an adversary, spend 2 Hope to clear a HP on an ally within Close.`
      },
      {
        q: "Splendor-Touched (Splendor L7, Ability, Recall 2)",
        a: `When 4+ Splendor cards in loadout: +3 to Severe threshold, and once per long rest when damage would make you mark HP, you can mark Stress or spend Hope instead.`
      },
      {
        q: "Shield Aura (Splendor L8, Spell, Recall 2)",
        a: `Mark a Stress to cast on a target in Very Close. When target marks an Armor Slot, reduce severity by an additional threshold. If this causes zero HP to be marked, the spell ends. One target at a time.`
      },
      {
        q: "Stunning Sunlight (Splendor L8, Spell, Recall 2)",
        a: `Spellcast Roll vs all adversaries in front of you within Far. Spend Hope — that many targets make Reaction (14). Successes: 3d20+3 magic damage. Failures: 4d20+5 magic damage + temporarily Stunned.`
      },
      {
        q: "Overwhelming Aura (Splendor L9, Spell, Recall 2)",
        a: `Spellcast (15). Spend 2 Hope to set your Presence = Spellcast trait until long rest. While active, adversaries must mark a Stress when targeting you with an attack.`
      },
      {
        q: "Salvation Beam (Splendor L9, Spell, Recall 2)",
        a: `Spellcast (16). Mark any number of Stress, target a line of allies in Far range. Clear HP on them equal to Stress marked, divided however you choose.`
      },
      {
        q: "Invigoration (Splendor L10, Spell, Recall 3)",
        a: `When you or an ally in Close has used a feature with an exhaustion limit (once per rest, etc.), spend Hope and roll that many d6s. If any roll a 6, the feature refreshes.`
      },
      {
        q: "Resurrection (Splendor L10, Spell, Recall 2)",
        a: `Spellcast (20). Restore a creature dead no more than 100 years to full strength. Then roll d6 — on 5 or lower, vault this card permanently. On failure, can't cast again for a week.`
      }
    ]
  },
  {
    category: "🛡️ Valor Domain Cards",
    color: "#b91c1c",
    questions: [
      {
        q: "Valor Domain — overview",
        a: `Valor is defensive martial might — tanking, protecting allies, armor mastery, and leading by example. All abilities (no spells). Focuses on absorbing damage for others, boosting Armor Score, rallying allies through combat performance, and becoming an immovable wall. The domain for guardians, warriors, and anyone who stands between danger and their party.`
      },
      {
        q: "Bare Bones (Valor L1, Ability, Recall 0)",
        a: `When you don't equip armor, your base Armor Score = 3 + Strength with enhanced thresholds: T1 9/19, T2 11/24, T3 13/31, T4 15/38.`
      },
      {
        q: "Forceful Push (Valor L1, Ability, Recall 0)",
        a: `Attack with primary weapon vs target in Melee. On success: damage + knocked back to Close. On Hope: add a d6 to damage. Spend a Hope to make them temporarily Vulnerable.`
      },
      {
        q: "I Am Your Shield (Valor L1, Ability, Recall 1)",
        a: `When an ally in Very Close would take damage, mark a Stress to intercept — you become the target. When taking the redirected damage, you can mark any number of Armor Slots.`
      },
      {
        q: "Body Basher (Valor L2, Ability, Recall 1)",
        a: `On a successful Melee weapon attack, add your Strength to the damage roll.`
      },
      {
        q: "Bold Presence (Valor L2, Ability, Recall 0)",
        a: `On Presence Rolls, spend a Hope to add your Strength. Also, once per rest when you'd gain a condition, describe how your bold presence aids you and avoid the condition.`
      },
      {
        q: "Lean on Me (Valor L3, Ability, Recall 1)",
        a: `Once per long rest, when you console or inspire an ally who failed a roll, you both clear 2 Stress.`
      },
      {
        q: "Shrug It Off (Valor L3, Ability, Recall 1)",
        a: `When you'd take damage, mark a Stress to reduce severity by one threshold. Then roll d6 — on 3 or lower, vault this card.`
      },
      {
        q: "Goad Them On (Valor L4, Ability, Recall 1)",
        a: `Taunt a target in Close — Presence Roll vs them. On success: target marks a Stress, and next time GM spotlights them, they must attack you with disadvantage.`
      },
      {
        q: "Support Tank (Valor L4, Ability, Recall 2)",
        a: `When an ally in Close fails a roll, spend 2 Hope to let them reroll either their Hope or Fear die.`
      },
      {
        q: "Armorer (Valor L5, Ability, Recall 1)",
        a: `While wearing armor: +1 Armor Score. During a rest, when you repair your armor as a downtime move, your allies also clear an Armor Slot.`
      },
      {
        q: "Rousing Strike (Valor L5, Ability, Recall 1)",
        a: `Once per rest, on a crit attack: you and all allies who can see/hear you clear a HP or 1d4 Stress.`
      },
      {
        q: "Inevitable (Valor L6, Ability, Recall 1)",
        a: `When you fail an action roll, your next action roll has advantage.`
      },
      {
        q: "Rise Up (Valor L6, Ability, Recall 2)",
        a: `+Proficiency to your Severe threshold. When you mark 1+ HP from an attack, clear a Stress.`
      },
      {
        q: "Critical Inspiration (Valor L7, Ability, Recall 1)",
        a: `Once per rest, when you crit on an attack, all allies in Very Close can clear a Stress or gain a Hope.`
      },
      {
        q: "Valor-Touched (Valor L7, Ability, Recall 1)",
        a: `When 4+ Valor cards in loadout: +1 Armor Score, and when you mark 1+ HP without marking an Armor Slot, clear an Armor Slot.`
      },
      {
        q: "Full Surge (Valor L8, Ability, Recall 1)",
        a: `Once per long rest, mark 3 Stress to push to your limits. +2 to all character traits until next rest.`
      },
      {
        q: "Ground Pound (Valor L8, Ability, Recall 2)",
        a: `Spend 2 Hope, Strength Roll vs all targets in Very Close. Successes thrown to Far, must Reaction (17) — failures take 4d10+8 damage, successes take half.`
      },
      {
        q: "Hold the Line (Valor L9, Ability, Recall 1)",
        a: `Describe your stance, spend a Hope. Any adversary moving within Very Close is pulled to Melee and Restrained. Lasts until you move, fail with Fear, or GM spends 2 Fear.`
      },
      {
        q: "Lead by Example (Valor L9, Ability, Recall 3)",
        a: `When you deal damage to an adversary, mark a Stress and encourage allies. The next PC to attack that adversary can clear a Stress or gain a Hope.`
      },
      {
        q: "Unbreakable (Valor L10, Ability, Recall 4)",
        a: `When you mark your last HP, instead of a Death Move, roll d6 and clear that many HP. Then vault this card.`
      },
      {
        q: "Unyielding Armor (Valor L10, Ability, Recall 1)",
        a: `When you'd mark an Armor Slot, roll d6s equal to Proficiency. If any roll a 6, reduce severity by one threshold without marking the slot.`
      }
    ]
  },

  {
    category: "🎲 Running the Game (GM)",
    color: "#b45309",
    questions: [
      {
        q: "Your core tools as GM",
        a: `You have three main levers:\n\n1. The Spotlight — you decide who acts and when. Point it at PCs, adversaries, or the environment.\n2. Fear — your currency. Gain it from player rolls and rests, spend it to make moves, activate features, and escalate tension.\n3. GM Moves — your actions in the fiction. Triggered by player rolls, but you choose what happens. Moves range from soft (new information, foreshadowing) to hard (direct consequences, damage).\n\nYou do NOT roll Duality Dice. You roll a single d20 (the GM's Die) for adversary attacks and occasional adversary action rolls.`
      },
      {
        q: "Setting Difficulty — the benchmark table",
        a: `Attack rolls: Difficulty = adversary's Difficulty score (from stat block).\nOther rolls against adversaries: Difficulty score + relevant adversary Experience (costs a Fear).\n\nFor non-combat action rolls, set Difficulty by the situation:\n• 5 — trivial (lift a chair, hear a loud noise nearby)\n• 10 — simple (break a small table, trick a trusting person)\n• 15 — moderate (break a wooden door, sneak in limited cover, disable a standard trap)\n• 20 — hard (break a stone wall, sneak in shadows, trick a trained courtier)\n• 25 — extreme (subdue a large beast, sneak with minimal cover in light)\n• 30 — legendary (break a god's grip, trick a god)\n\nPrefer granting advantage/disadvantage over shifting Difficulty — it feels more tangible to the player.`
      },
      {
        q: "When to call for a roll",
        a: `Only call for a roll when:\n• The outcome is uncertain\n• Both success and failure lead to interesting results\n• There's meaningful pressure or stakes\n\nIf there's no interesting consequence for failure, or the PC's background/Experiences make success obvious — just let them succeed. Don't roll for mundane actions.\n\nBefore a roll: establish the stakes. Tell the player what success and failure look like so they can make informed choices. Communicate unavoidable consequences upfront ("You can try, but even on a success the bridge will collapse behind you").`
      },
      {
        q: "Resolving rolls — quick phrases",
        a: `Use these to guide your narration:\n\n• Critical Success → "Yes, and then some." Player describes success, you give an extra advantage or opportunity.\n• Success with Hope → "Yes, and..." Player succeeds cleanly. You show how the world reacts positively.\n• Success with Fear → "Yes, but..." Player succeeds, but you take a Fear and introduce a minor complication.\n• Failure with Hope → "No, but..." The PC doesn't get what they want, but gains a Hope. Minor consequence.\n• Failure with Fear → "No, and..." Things go wrong and get worse. You take a Fear and make a harder move.\n\nThe distinction between Hope and Fear results is about severity — Hope results are gentler, Fear results hit harder.`
      },
      {
        q: "GM Moves — what can you do?",
        a: `When it's your turn, pick from this list (or invent your own):\n\n• An adversary attacks or uses an action\n• A PC marks Stress\n• Introduce a new threat or obstacle\n• Raise the stakes of the current conflict\n• Show how the world reacts\n• Ask a question and build on the answer\n• Make an NPC act on their motive\n• Dangle a PC's goals in front of them\n• Signal an off-screen threat approaching\n• Reveal an unwelcome truth\n• Force the group to split up\n• Show collateral damage\n• Shift the environment\n• Capture something important\n• Use a PC's backstory against them\n• Clear an adversary's condition\n• Tell them "everything is fine… for now"\n• Ask the player what happens next`
      },
      {
        q: "Soft moves vs Hard moves",
        a: `Soft moves give new information and let PCs react. Hard moves are direct and immediate — no chance to interrupt or avoid.\n\nGeneral rule:\n• Rolls with Hope → softer moves (warnings, foreshadowing, minor setbacks)\n• Rolls with Fear → harder moves (damage, lost resources, permanent consequences)\n\nFail with Hope is still a failure — something goes wrong, but there's a silver lining. Fail with Fear is where you escalate.`
      },
      {
        q: "Fear — gaining, spending, pacing",
        a: `You start a campaign with 1 Fear per PC.\nGain Fear: every roll with Fear, rests (1d4 short, 1d4+PCs long), specific features.\nMax: 12. Carries between sessions.\n\nSpend 1 Fear to:\n• Interrupt PCs to steal the spotlight and make a move\n• Make an additional GM move on your turn\n• Activate an adversary's Fear Feature\n• Activate an environment's Fear Feature\n• Add an adversary's Experience to a roll\n• End a temporary spell effect on an adversary\n\nKey advice: Don't hoard Fear. Spend it when you have it — the players will always generate more. Unspent Fear is wasted tension.`
      },
      {
        q: "Fear spending by scene intensity",
        a: `Use this as a rough guide for how much Fear to burn per scene:\n\n• Incidental (0–1): Downtime chat, shopping, resting\n• Minor (1–3): Travel encounters, minor skirmishes\n• Standard (2–4): Meaningful battle, tense social scene\n• Major (4–8): Boss fight, character-defining moment, betrayal reveal\n• Climactic (6–12): Arc villain showdown, epic set piece\n\nIf you're sitting on a lot of Fear, consider:\n• Spending often (every time spotlight returns to you)\n• Spending fast (before players can react)\n• Spending big (multiple moves in a row for dramatic escalation)`
      },
      {
        q: "Spotlight management — who goes when?",
        a: `There's no initiative. You direct the spotlight based on:\n• Who the fiction naturally points to\n• Who hasn't acted recently\n• Who a mechanic triggers (e.g. Fear → GM turn)\n\nPractical tips:\n• After a PC acts and generates Fear → your turn. Make a move, then pass back.\n• Spread spotlight evenly. If one player is dominating, actively redirect.\n• When multiple PCs want to act, give it to whoever's action is most urgent or dramatic.\n• If the table stalls, ask "What do you do?" to a specific player.\n\nOptional structure: give each PC 3 tokens per round. Remove one per action. Refill when all are spent.`
      },
      {
        q: "Building encounters — Battle Points",
        a: `Start with (3 × number of PCs) + 2 Battle Points.\n\nAdjustments:\n• −1 for easier/shorter fight\n• −2 if using 2+ Solos\n• −2 if adding +1d4 to all adversary damage\n• +1 if using lower-tier adversaries\n• +1 if no Bruisers, Hordes, Leaders, or Solos\n• +2 for harder/longer fight\n\nSpend points:\n• 1 pt: Social, Support, or 1 group of Minions (= party size)\n• 2 pts: Horde, Ranged, Skulk, or Standard\n• 3 pts: Leader\n• 4 pts: Bruiser\n• 5 pts: Solo\n\nExample: 4 PCs = 14 points. A tough fight (+2 = 16 pts) could be 1 Solo (5) + 1 Leader (3) + 2 Standards (4) + 1 Minion group (1) + 1 Support (1) + 1 Skulk (2) = 16.`
      },
      {
        q: "Adversary types — quick guide",
        a: `• Bruiser (4 pts): High HP, powerful attacks, hard to drop. Frontline anchor.\n• Horde (2 pts): Group acting as one unit. Weakens as HP drops (reduced damage at half HP).\n• Leader (3 pts): Commands others, summons reinforcements. Take them out to disrupt tactics.\n• Minions (1 pt/group): Die in one hit. Dangerous in numbers — for every X damage dealt, kill an additional minion.\n• Ranged (2 pts): Fragile up close, deadly at range. Glass cannons.\n• Skulk (2 pts): Ambushers, flankers. Exploit positioning and surprise.\n• Social (1 pt): Challenge through conversation, not combat. Courtiers, merchants, spies.\n• Solo (5 pts): Designed to fight the whole party. Has Relentless (multiple spotlights per GM turn).\n• Standard (2 pts): Backbone of encounters. Average stats, versatile.\n• Support (1 pt): Buffs allies, debuffs PCs. Disruptive but not directly dangerous.`
      },
      {
        q: "Adversary stat benchmarks by tier",
        a: `Tier 1 (Level 1): ATK +1, Damage 1d6+2 to 1d12+4, Difficulty 11, Thresholds 7/12\nTier 2 (L2–4): ATK +2, Damage 2d6+3 to 2d12+4, Difficulty 14, Thresholds 10/20\nTier 3 (L5–7): ATK +3, Damage 3d8+3 to 3d12+5, Difficulty 17, Thresholds 20/32\nTier 4 (L8–10): ATK +4, Damage 4d8+10 to 4d12+15, Difficulty 20, Thresholds 25/45\n\nIf you need to improvise an adversary mid-session, grab these numbers and bolt on a couple of features.`
      },
      {
        q: "Adversary attacks — how you roll",
        a: `Roll d20 + adversary's Attack Modifier vs the PC's Evasion.\n• Meet or beat = hit. Roll the adversary's damage dice.\n• Natural 20 = crit. Roll damage normally, then add the max possible dice value (not flat modifier). Example: 3d6+2 crits for 18+3d6+2.\n\nBefore rolling, you can:\n• Grant the adversary advantage (roll 2d20, take higher)\n• Impose disadvantage (roll 2d20, take lower)\n• Spend a Fear to add a relevant Experience to the roll\n\nMulti-target attack: one roll, compare to each target's Evasion separately.`
      },
      {
        q: "Adversary actions & reactions",
        a: `When an adversary has the spotlight, they can:\n• Move to Close range + make their standard attack\n• Move to Close range + use an Action feature\n• Clear a condition (no roll needed, just uses their turn)\n• Sprint to Far or V.Far (no attack)\n\nReactions trigger automatically when their condition is met, regardless of spotlight. Example: "Momentum — when this adversary hits a PC, you gain a Fear."\n\nPassives are always active — no trigger, no cost. Example: "Armored Carapace — reduce incoming physical damage by X."\n\nFear Features require spending a Fear on top of any Fear already spent for spotlight. These are your big escalation tools.`
      },
      {
        q: "When adversaries are defeated",
        a: `An adversary that marks their last HP is defeated. What that means is up to you and the table: killed, incapacitated, tied up, fled, surrendered.\n\nYou don't need to always kill enemies — defeated can mean whatever makes narrative sense. Let the players decide when it feels right.`
      },
      {
        q: "Countdowns — pacing tool",
        a: `A countdown is a die or track that starts at a value and ticks down. When it hits 0, its effect triggers.\n\n• Standard countdown: ticks down 1 every time any player makes an action roll.\n• Dynamic countdown: ticks based on roll result:\n  - Fail with Fear → consequence ticks 3 / progress ticks 0\n  - Fail with Hope → consequence ticks 2 / progress ticks 0\n  - Success with Fear → both tick 1\n  - Success with Hope → consequence ticks 0 / progress ticks 2\n  - Crit → consequence ticks 0 / progress ticks 3\n\nAdvanced options: loop (resets after triggering), increasing/decreasing (starting value shifts each loop), linked (progress + consequence advance together), long-term (advances on rests instead of rolls).\n\nTrack with a die on the table — spin it down as it ticks.`
      },
      {
        q: "Running NPCs",
        a: `An NPC only needs: name, description, and motive. Give them a Difficulty only if PCs will roll against them.\n\nDifferentiate NPCs through speech patterns and actions. Let their goals drive behavior — don't play NPCs as obstacles, play them as people with desires.\n\nNPC allies in combat don't need stat blocks. Show what they do narratively. If a PC capitalizes on the NPC's help, give that PC advantage. NPCs without HP/Stress can still be injured or killed if the fiction demands.\n\nFor important NPCs: give them 1–2 features with specific triggers. Example: "Arcane Hold — Choose a favored PC. First time per battle that PC takes damage, reduce it by 1d8.""`
      },
      {
        q: "Giving out gold, equipment, and loot",
        a: `Gold is abstract — tracked in Handfuls, Bags, and Chests.\n\nRough costs:\n• Meals/standard inn room: 1 Handful\n• Luxury room: 1 Bag\n• Tier 1 equipment: 1–5 Handfuls\n• Tier 2 equipment: 1–2 Bags\n• Tier 3 equipment: 5–10 Bags\n• Tier 4 equipment: 1–2 Chests\n\nIf you don't want to track gold at all, just let PCs pick 1–2 items from a short list when they shop. Adjust availability to match your campaign tone.`
      },
      {
        q: "Scaling adversaries to a different tier",
        a: `If you want to use an adversary from a different tier than your party:\n• Use the stat benchmarks table as a guide\n• Adjust ATK modifier, damage dice, Difficulty, and thresholds to match the target tier\n• Keep the adversary's features and flavor — they're what make it interesting\n• The encounter still costs the same Battle Points for its type\n\nYou can also improvise adversaries on the fly: grab tier-appropriate stats, pick a type, add 1–2 features from the example lists, and give it a name and motive.`
      },
      {
        q: "Environments as adversaries",
        a: `Environments can have their own stat blocks with features, Fear Features, and countdowns. A collapsing mine, a magical storm, a flooding chamber — all can mechanically interact with the PCs.\n\nEnvironments can: deal damage, impose conditions, shift terrain, create obstacles, advance countdowns, and have Fear Features you spend Fear to activate.\n\nDesigning one: give it a Difficulty (for rolls to navigate/resist), 1–2 features, and optionally a countdown to track escalation.`
      },
      {
        q: "Pitfalls to avoid",
        a: `• Undermining heroes: If a roll fails, blame the environment or enemy — not the PC's competence.\n• Always dictating the trait: Let players decide how they approach a challenge. If they want to use Presence to intimidate a lock open, hear them out.\n• Letting scenes drag: If energy is flagging, cut away. End scenes when the interesting part is done.\n• Singular solutions: Don't plan for one right answer. Reward creative approaches.\n• Overplanning: Prep situations, not scripts. If players surprise you, take a break to think.\n• Hoarding Fear: Spend it. The players will always generate more.\n• Hiding obvious info: Tell PCs what their characters would know. Don't gate basic scene details behind rolls.`
      },
      {
        q: "GM principles — your north star",
        a: `1. Begin and end with the fiction — mechanics serve the story, not the other way around.\n2. Collaborate, especially during conflict — you and the players are on the same team.\n3. Fill the world with life, wonder, and danger.\n4. Ask questions and incorporate the answers — let players build the world too.\n5. Give every roll impact — only roll when it matters.\n6. Play to find out what happens — be surprised by the story.\n7. Hold on gently — don't be afraid to abandon or alter what came before.\n\nPractices: cultivate curiosity, earn trust, keep things moving, cut to the action, help players use the system, tell them what they'd know, reframe rather than reject, work in moments and montages.`
      },
      {
        q: "Session structure — a practical flow",
        a: `1. Recap last session (let players do this — it shows you what they remember and care about).\n2. Set the scene — describe the situation, establish what's at stake.\n3. Play through scenes using the core loop: describe → questions → action → resolve → repeat.\n4. When combat starts, shift to spotlight-based play. Track Fear, use countdowns, keep adversary turns snappy.\n5. After combat or major scenes, offer a rest if it makes narrative sense.\n6. End the session on a cliffhanger, a revelation, or a moment of calm — whatever lands best.\n\nBetween sessions: note unresolved threads, think about what NPCs are doing off-screen, prep 1–2 situations (not scripts).`
      },
      {
        q: "Rest management — your Fear refill",
        a: `Rests are where you gain Fear:\n• Short rest: you gain 1d4 Fear\n• Long rest: you gain 1d4 + number of PCs Fear, and you may advance a countdown\n\n3 short rests in a row → the next must be a long rest.\nInterrupted long rest → counts as short rest only.\n\nThis means rests have a cost — the party heals, but you power up. Don't remind players of this tension; let them feel it naturally when things escalate after a rest.`
      },
      {
        q: "Leveling the party",
        a: `Leveling is milestone-based — you decide when the party levels up. No XP to track. Roughly every 3 sessions or after a major story beat.\n\nThe whole party levels together. At each level-up:\n• All damage thresholds increase by +1\n• Each PC gains a new domain card\n• Each PC picks 2 advancements\n• At tier thresholds (L2, L5, L8): +1 Proficiency, new Experience\n\nAs PCs grow stronger, scale encounters by: using higher-tier adversaries, spending more Battle Points, adding Fear Features, and introducing environmental hazards.`
      }
    ]
  },
  {
    category: "❓ Edge Cases & Tips",
    color: "#64748b",
    questions: [
      {
        q: "Rounding & fractions",
        a: `Always round up unless stated otherwise. When in doubt, resolve in favor of the PCs.`
      },
      {
        q: "Rerolling dice",
        a: `Always take the new result unless the feature says otherwise. You can't reroll a reroll with the same feature.`
      },
      {
        q: "Can I stack the same feature?",
        a: `No. Can't spend Hope or mark Stress multiple times on the same feature to stack/repeat its effect on one roll — unless the feature explicitly says you can. Different features CAN stack.`
      },
      {
        q: "PvP / conflict between PCs",
        a: `Discuss with both players first — a roll might not be needed. If rolling: attacks use attacker's roll vs defender's Evasion. Other conflicts: instigator makes action roll, target makes reaction roll. Instigator must beat the reaction total.`
      },
      {
        q: "Using features after a roll",
        a: `If a feature says "after the result," you can use it after GM declares success/fail — but NOT after consequences unfold or another roll begins. This matters for Hope-spend features.`
      },
      {
        q: "Fate rolls (optional GM tool)",
        a: `When GM wants pure chance: establish stakes, player rolls one Duality Die, interpret result. Used for random outcomes like fire spreading, crowd reactions, shop inventory.`
      },
      {
        q: "The Golden Rule",
        a: `Make the game your own. Prioritize rulings over rules. The GM has final call on rule interpretation in service of the story. Modify anything with table consent.`
      }
    ]
  }
];

const RULES_MECHANICS = [
  "🎲 Running the Game (GM)",
  "🧭 Character Creation",
  "🎲 Core Rolls",
  "⚔️ Combat & Damage",
  "🛡️ Conditions & Effects",
  "📦 Resources",
  "🏕️ Downtime & Death",
  "🎭 Spotlight & GM",
  "📈 Leveling & Advancement",
  "🗡️ Equipment & Loot",
  "✨ Spellcasting",
  "❓ Edge Cases & Tips",
];

const CARDS_HERITAGE = [
  "⚔️ Classes & Subclasses",
  "🧬 Ancestries (18)",
  "🏘️ Communities (9)",
  "🔮 Arcana Domain Cards",
  "⚔️ Blade Domain Cards",
  "🦴 Bone Domain Cards",
  "📖 Codex Domain Cards",
  "🎭 Grace Domain Cards",
  "🌑 Midnight Domain Cards",
  "🌿 Sage Domain Cards",
  "✨ Splendor Domain Cards",
  "🛡️ Valor Domain Cards",
];

const ALL_CATEGORIES = [...RULES_MECHANICS, ...CARDS_HERITAGE];

const ACTION_PILLS = [
  { label: "Rules & Mechanics", rgb: "196, 150, 60" },
  { label: "Cards, Classes & Heritage", rgb: "150, 120, 195" },
  { label: "Clear Filters", rgb: "85, 170, 150" },
];

const PILL_TINTS = {
  "🎲 Running the Game (GM)": { bg: "rgba(217, 119, 6, 0.08)", border: "rgba(217, 119, 6, 0.25)" },
  "🧭 Character Creation": { bg: "rgba(6, 182, 212, 0.08)", border: "rgba(6, 182, 212, 0.25)" },
  "🎲 Core Rolls": { bg: "rgba(56, 189, 248, 0.08)", border: "rgba(56, 189, 248, 0.25)" },
  "⚔️ Combat & Damage": { bg: "rgba(249, 115, 22, 0.08)", border: "rgba(249, 115, 22, 0.25)" },
  "🛡️ Conditions & Effects": { bg: "rgba(132, 204, 22, 0.08)", border: "rgba(132, 204, 22, 0.25)" },
  "📦 Resources": { bg: "rgba(34, 211, 238, 0.08)", border: "rgba(34, 211, 238, 0.25)" },
  "🏕️ Downtime & Death": { bg: "rgba(180, 83, 9, 0.08)", border: "rgba(180, 83, 9, 0.25)" },
  "🎭 Spotlight & GM": { bg: "rgba(244, 63, 94, 0.08)", border: "rgba(244, 63, 94, 0.25)" },
  "📈 Leveling & Advancement": { bg: "rgba(192, 38, 211, 0.08)", border: "rgba(192, 38, 211, 0.25)" },
  "🗡️ Equipment & Loot": { bg: "rgba(168, 162, 158, 0.08)", border: "rgba(168, 162, 158, 0.25)" },
  "✨ Spellcasting": { bg: "rgba(167, 139, 250, 0.08)", border: "rgba(167, 139, 250, 0.25)" },
  "❓ Edge Cases & Tips": { bg: "rgba(148, 163, 184, 0.08)", border: "rgba(148, 163, 184, 0.25)" },
  "🔮 Arcana Domain Cards": { bg: "rgba(124, 58, 237, 0.08)", border: "rgba(124, 58, 237, 0.25)" },
  "⚔️ Blade Domain Cards": { bg: "rgba(220, 38, 38, 0.08)", border: "rgba(220, 38, 38, 0.25)" },
  "🦴 Bone Domain Cards": { bg: "rgba(120, 113, 108, 0.08)", border: "rgba(120, 113, 108, 0.25)" },
  "📖 Codex Domain Cards": { bg: "rgba(37, 99, 235, 0.08)", border: "rgba(37, 99, 235, 0.25)" },
  "🎭 Grace Domain Cards": { bg: "rgba(236, 72, 153, 0.08)", border: "rgba(236, 72, 153, 0.25)" },
  "🌑 Midnight Domain Cards": { bg: "rgba(67, 56, 202, 0.08)", border: "rgba(67, 56, 202, 0.25)" },
  "🌿 Sage Domain Cards": { bg: "rgba(22, 163, 106, 0.08)", border: "rgba(22, 163, 106, 0.25)" },
  "✨ Splendor Domain Cards": { bg: "rgba(234, 179, 8, 0.08)", border: "rgba(234, 179, 8, 0.25)" },
  "🛡️ Valor Domain Cards": { bg: "rgba(185, 28, 28, 0.08)", border: "rgba(185, 28, 28, 0.25)" },
  "⚔️ Classes & Subclasses": { bg: "rgba(220, 38, 38, 0.07)", border: "rgba(220, 38, 38, 0.22)" },
  "🧬 Ancestries (18)": { bg: "rgba(139, 92, 246, 0.07)", border: "rgba(139, 92, 246, 0.22)" },
  "🏘️ Communities (9)": { bg: "rgba(13, 148, 136, 0.07)", border: "rgba(13, 148, 136, 0.22)" },
};

export default function DaggerheartRef() {
  const [openQ, setOpenQ] = useState(null);
  const [filter, setFilter] = useState(null);
  const [search, setSearch] = useState("");
  const [isTwoColumn, setIsTwoColumn] = useState(() =>
    window.matchMedia("(min-width: 800px)").matches
  );

  useEffect(() => {
    const mql = window.matchMedia("(min-width: 800px)");
    const handler = (e) => setIsTwoColumn(e.matches);
    mql.addEventListener("change", handler);
    return () => mql.removeEventListener("change", handler);
  }, []);

  const toggle = (key) => setOpenQ(openQ === key ? null : key);

  const matchesSearch = (item) => {
    if (!search) return true;
    const s = search.toLowerCase();
    return item.q.toLowerCase().includes(s) || item.a.toLowerCase().includes(s);
  };

  const filtered = data
    .filter(c => filter === null || filter.has(c.category))
    .map(c => ({
      ...c,
      questions: c.questions.filter(matchesSearch)
    }))
    .filter(c => c.questions.length > 0);

  const totalQ = data.reduce((s, c) => s + c.questions.length, 0);

  const orderedFiltered = ALL_CATEGORIES
    .map(cat => filtered.find(f => f.category === cat))
    .filter(Boolean);

  const handlePillClick = (category) => {
    if (filter === null) {
      setFilter(new Set([category]));
    } else if (filter.has(category)) {
      if (filter.size <= 1) {
        setFilter(null);
      } else {
        const next = new Set(filter);
        next.delete(category);
        setFilter(next);
      }
    } else {
      setFilter(new Set([...filter, category]));
    }
    setSearch("");
  };

  const renderPill = (c) => {
    const label = c.category.replace(/^[^\w]*/, "").trim();
    const isActive = filter !== null && filter.has(c.category);
    const tint = PILL_TINTS[c.category];
    return (
      <button
        key={c.category}
        onClick={() => handlePillClick(c.category)}
        style={{
          padding: "4px 10px",
          borderRadius: 20,
          border: "1px solid",
          borderColor: isActive ? c.color : tint ? tint.border : "#444",
          background: isActive ? c.color : tint ? tint.bg : "transparent",
          color: isActive ? "#fff" : "#999",
          fontSize: 11,
          fontWeight: 600,
          cursor: "pointer",
          whiteSpace: "nowrap"
        }}
      >{label}</button>
    );
  };

  const renderCategories = (categories) =>
    categories.map(cat => (
      <div key={cat.category} style={{ marginBottom: 18, breakInside: "avoid" }}>
        <div style={{
          fontSize: 11,
          fontWeight: 700,
          textTransform: "uppercase",
          letterSpacing: "0.1em",
          color: cat.color,
          marginBottom: 6,
          paddingLeft: 4
        }}>
          {cat.category}
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 3 }}>
          {cat.questions.map((item, i) => {
            const key = `${cat.category}-${i}`;
            const isOpen = openQ === key;
            return (
              <div key={key}>
                <button
                  onClick={() => toggle(key)}
                  style={{
                    width: "100%",
                    textAlign: "left",
                    padding: "9px 12px",
                    background: isOpen ? "#1a1a24" : "#15151e",
                    border: "1px solid",
                    borderColor: isOpen ? cat.color + "66" : "#222230",
                    borderRadius: isOpen ? "8px 8px 0 0" : 8,
                    color: isOpen ? "#fff" : "#ccc",
                    fontSize: 13,
                    fontWeight: isOpen ? 600 : 500,
                    cursor: "pointer",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    lineHeight: 1.3
                  }}
                >
                  <span>{item.q}</span>
                  <span style={{
                    fontSize: 16,
                    color: cat.color,
                    transform: isOpen ? "rotate(45deg)" : "none",
                    transition: "transform 0.15s",
                    flexShrink: 0,
                    marginLeft: 8
                  }}>+</span>
                </button>
                {isOpen && (
                  <div style={{
                    padding: "10px 12px",
                    background: "#1a1a24",
                    border: "1px solid " + cat.color + "66",
                    borderTop: "none",
                    borderRadius: "0 0 8px 8px",
                    fontSize: 12.5,
                    lineHeight: 1.6,
                    color: "#c0c0cc",
                    whiteSpace: "pre-line"
                  }}>
                    {item.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    ));

  const renderPillGroup = (columnOrder, groupLabel, labelColor) => {
    const cats = columnOrder.map(cat => data.find(d => d.category === cat)).filter(Boolean);
    return (
      <div>
        <div style={{
          fontSize: 10,
          fontWeight: 700,
          textTransform: "uppercase",
          letterSpacing: "0.12em",
          color: labelColor,
          marginBottom: 8
        }}>
          {groupLabel}
        </div>
        <div style={{
          display: "flex",
          flexWrap: "wrap",
          gap: 5,
          marginBottom: 18
        }}>
          {cats.map(renderPill)}
        </div>
      </div>
    );
  };

  const [flashAction, setFlashAction] = useState(null);

  const handleActionClick = (label) => {
    if (label === "Rules & Mechanics") {
      setFilter(new Set(RULES_MECHANICS));
    } else if (label === "Cards, Classes & Heritage") {
      setFilter(new Set(CARDS_HERITAGE));
    } else {
      setFilter(null);
    }
    setSearch("");
    setFlashAction(label);
    setTimeout(() => setFlashAction(null), 150);
  };

  const renderActionPills = () =>
    ACTION_PILLS.map(({ label, rgb }) => {
      const isFlashing = flashAction === label;
      return (
        <button
          key={label}
          onClick={() => handleActionClick(label)}
          style={{
            padding: "4px 10px",
            borderRadius: 20,
            border: "1px solid",
            borderColor: `rgba(${rgb}, ${isFlashing ? 0.5 : 0.25})`,
            background: `rgba(${rgb}, ${isFlashing ? 0.2 : 0.08})`,
            color: isFlashing ? "#ccc" : "#999",
            fontSize: 11,
            fontWeight: 600,
            cursor: "pointer",
            whiteSpace: "nowrap",
            transition: "all 0.15s ease"
          }}
        >{label}</button>
      );
    });

  return (
    <div style={{
      fontFamily: "'Segoe UI', system-ui, -apple-system, sans-serif",
      maxWidth: isTwoColumn ? 1180 : 540,
      margin: "0 auto",
      padding: "20px 16px",
      background: "transparent",
      minHeight: "100vh",
      color: "#e2e2e8",
      position: "relative",
      zIndex: 1
    }}>
      <div style={{ textAlign: "center", marginBottom: 20 }}>
        <h1 style={{
          fontSize: 22,
          fontWeight: 700,
          color: "#f0f0f5",
          margin: 0,
          letterSpacing: "0.05em",
          textTransform: "uppercase"
        }}>
          ⚔️ Daggerheart Quick Reference
        </h1>
        <p style={{ fontSize: 12, color: "#666", margin: "6px 0 0" }}>
          {totalQ} entries · SRD 1.0 (May 2025) · Tap to expand
        </p>
      </div>

      <div style={{ maxWidth: 540, margin: "0 auto 12px" }}>
        <input
          type="text"
          placeholder="Search rules, classes, ancestries..."
          value={search}
          onChange={e => { setSearch(e.target.value); setFilter(null); }}
          style={{
            width: "100%",
            padding: "9px 14px",
            background: "#1a1a24",
            border: "1px solid #333",
            borderRadius: 8,
            color: "#ddd",
            fontSize: 14,
            outline: "none",
            boxSizing: "border-box"
          }}
        />
      </div>

      {isTwoColumn ? (
        <>
          <div style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
            marginBottom: 18
          }}>
            <div style={{ flex: "1 1 0", maxWidth: 708, minWidth: 0, display: "flex", gap: 24 }}>
              <div style={{ flex: 1, minWidth: 0 }}>
                {renderPillGroup(RULES_MECHANICS, "Rules & Mechanics", "#f59e0b")}
              </div>
              <div style={{ flex: 1, minWidth: 0 }}>
                {renderPillGroup(CARDS_HERITAGE, "Cards, Classes & Heritage", "#8b5cf6")}
              </div>
            </div>
            <div style={{
              flexShrink: 0,
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-end",
              gap: 6,
              marginLeft: 24
            }}>
              {renderActionPills()}
            </div>
          </div>

          <div style={{
            columns: 2,
            columnGap: 40,
            maxWidth: 1120,
            margin: "0 auto"
          }}>
            {renderCategories(orderedFiltered)}
          </div>
        </>
      ) : (
        <>
          <div style={{
            display: "flex",
            gap: 5,
            justifyContent: "center",
            marginBottom: 14
          }}>
            {renderActionPills()}
          </div>

          <div style={{ marginBottom: 18 }}>
            {renderPillGroup(RULES_MECHANICS, "Rules & Mechanics", "#f59e0b")}
            {renderPillGroup(CARDS_HERITAGE, "Cards, Classes & Heritage", "#8b5cf6")}
          </div>

          {renderCategories(orderedFiltered)}
        </>
      )}

      {filtered.length === 0 && (
        <div style={{ textAlign: "center", color: "#555", padding: 40, fontSize: 14 }}>
          No results for "{search}"
        </div>
      )}

      <div style={{
        textAlign: "center",
        fontSize: 10,
        color: "#444",
        marginTop: 20,
        paddingBottom: 16
      }}>
        Daggerheart © 2025 Critical Role LLC · Fan reference tool
      </div>
    </div>
  );
}
