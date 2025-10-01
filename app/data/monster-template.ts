import type { Monster } from "~/types/monster";

/**
 * Template for adding new monsters
 * Copy this template and fill in the appropriate values
 */
export const monsterTemplate: Monster = {
    name: "Monster Name",
    localized_names: [
        { language: "en", name: "Monster Name" }
        // Add more languages as needed
    ],
    beds_required: 1, // Number of beds this monster takes up
    rarity: "common", // "common" | "rare" | "epic"
    elements: ["Water"], // Array of Element types (e.g., "Water", "Cold", "Plant")
    class: "Natural", // MonsterClass type
    
    // Optional: Only for Wublins, Celestials, etc.
    eggs_required: [
        // {
        //     monster_name: "Toe Jammer",
        //     is_rare: false,
        //     rare_type: "",
        //     count: 2
        // }
    ],
    
    islands: ["Plant Island"], // Array of Island names where this monster can be placed
    
    earnings: [
        {
            island: "Plant Island",
            currency: "Coins",
            unit: "Minute", // "Minute" | "Hour" | "Month"
            level_earnings: [
                { amount: 4, level: 1, maximum: 60 },
                { amount: 6, level: 2, maximum: 90 },
                { amount: 9, level: 3, maximum: 135 },
                // Add more levels...
            ]
        }
        // Add earnings for other islands if applicable
    ],
    
    // Optional: Only for Ethereal monsters
    synthesize_meebs: ["Plasma"], // Array of meeb types this monster can synthesize
    
    // Optional: Only for single/double element monsters
    monster_for_synthesization: "Ghazt", // Name of monster this can help synthesize
    
    island_costs: [
        {
            island: "Plant Island", // or "All Islands"
            cost: 100,
            unit: "Coins" // Currency type
        }
    ],
    
    breeding: [
        {
            island: "Plant Island",
            combos: [
                {
                    parent_1_name: "Parent Monster 1",
                    parent_2_name: "Parent Monster 2",
                    hide_parent_1_link: false // Set to true if parent_1_name is not a real monster
                }
                // Add more combos if there are multiple ways to breed
            ]
        }
        // Add breeding info for other islands if different
    ],
    
    breeding_time: 0, // In seconds (e.g., 3600 = 1 hour, 86400 = 1 day)
    
    island_likes: [
        {
            island: "Plant Island", // or "All Islands"
            likes: [
                { type: "monster", name: "Potbelly" },
                { type: "decoration", name: "Tiki Torch", mystery: false }
                // Add up to 4 likes per island
            ]
        }
    ]
};

/**
 * Quick reference for breeding times:
 * - Instant: 0
 * - 30 seconds: 30
 * - 1 minute: 60
 * - 5 minutes: 300
 * - 10 minutes: 600
 * - 30 minutes: 1800
 * - 1 hour: 3600
 * - 2 hours: 7200
 * - 4 hours: 14400
 * - 6 hours: 21600
 * - 8 hours: 28800
 * - 10 hours: 36000
 * - 12 hours: 43200
 * - 24 hours: 86400
 * - 36 hours: 129600
 * - 48 hours: 172800
 */
