
type Element =
    //natural
    | "Air"
    | "Plant"
    | "Earth"
    | "Water"
    | "Cold"
    
    //primordial
    | "Air Primordial"
    | "Plant Primordial"
    | "Earth Primordial"
    | "Water Primordial"
    | "Cold Primordial"
    
    //magic
    | "Psychic"
    | "Bone"
    | "Light"
    | "Faerie"
    
    //ethereal
    | "Plasma"
    | "Shadow"
    | "Mech"
    | "Crystal"
    | "Poison"
    
    //paironormal
    | "Control"
    | "Hoax"
    | "Ruin"
    
    //seasonal
    | "Spooktacle"
    | "Festival of Yay"
    | "Season of Love"
    | "Eggs-travaganza"
    | "Summer Song"
    | "Feast-Ember"
    | "Beat Hereafter"
    | "Echoes of Eco"
    | "Anniversary Month"
    | "Crescendo Moon"
    | "Sky Painting"
    | "Life Formula"
    | "Clover Spell"
    | "Mind Boggle"
    | "Perplexplore"
    
    //mythical
    | "Dream"
    | "Mythical"
    
    //misc
    | "Fire"
    | "Electricity"
    | "Legendary"
    | "Celestial"
    | "Dipster"
    | "Titansoul";


type MonsterClass =
    | "Natural"
    | "Fire"
    | "Seasonal"
    | "Ethereal"
    | "Primordial"
    | "Magical"
    | "Titansoul"
    | "Mythical"
    | "Paironormal"
    | "Legendary"
    | "Shugafam"
    | "Werdos"
    | "Supernatural"
    | "Superethereal"
    | "Celestial"
    | "Spectral"
    | "Dipster"; //not doing rare and epic here

type Island =
    //natural
    | "Plant Island"
    | "Cold Island"
    | "Air Island"
    | "Water Island"
    | "Earth Island"
    | "Shugabush Island"
    | "Gold Island"
    
    //ethereal
    | "Ethereal Island"
    | "Ethereal Workshop"
    | "Plasma Islet"
    | "Mech Islet"
    
    //fire
    | "Fire Haven"
    | "Fire Oasis"
    | "Amber Island"
    
    //celestial/supernatural
    | "Celestial Island"
    | "Wublin Island"
    
    //mythical
    | "Mythical Island"
    
    //magical
    | "Light Island"
    | "Psychic Island"
    | "Faerie Island"
    | "Bone Island"
    | "Magical Sanctum"
    | "Magical Nexus"
    
    //seasonal
    | "Seasonal Shanty"
    
    //special
    | "The Colossingum"
    | "Tribal Island"
    | "Composer Island"
    | "Paironormal Carnival"
    
    //mirror natural
    | "Mirror Plant Island"
    | "Mirror Cold Island"
    | "Mirror Air Island"
    | "Mirror Water Island"
    | "Mirror Earth Island"
    
    //mirror magical
    | "Mirror Light Island"
    | "Mirror Psychic Island"
    | "Mirror Faerie Island"
    | "Mirror Bone Island";
export type Currency = "Shards" | "Coins" | "Diamonds" | "Relics" | "Keys" | "Treats" | "Starpower";

export type Earning = {
    island: Island | "ALL",
    currency: Currency,
    unit: "Minute" | "Hour" | "Week" | "Month",
    level_earnings: {
        amount: number, //at 0% happiness
        level: number,
        maximum: number,
    }[],
};

type BaseMonster = {
    name: string,
    localized_names: {
        language: "en", //add more langs here eventually
        name: string,
    }[],
    beds_required: number,
    rarity: "common" | "rare" | "epic",
    elements: Element[],
    class: MonsterClass,
    
    //wublin/amber/celestial
    eggs_required?: {
        monster_name: string,
        is_rare: boolean,
        rare_type: "", //eventually add this
        count: number,
    }[],
    //need to have a separate island field; some islands, such as gold and nexus, monsters
    //do not produce currency on their own.
    islands: Island[],
    earnings: Earning[],
    synthesize_meebs?: ("Plasma" | "Mech" | "Poison" | "Shadow" | "Crystal")[],
    monster_for_synthesization?: string,
    island_costs: {
        island: Island | "All Islands",
        cost: number,
        unit: Currency,
    }[],
    breeding: {
        island: Island,
        combos: {
            parent_1_name: string, //ex. "toe-jammer"
            parent_2_name: string,
            hide_parent_1_link?: boolean, //hide link (in case p1 name is something like "any quad-element monster")
        }[],
    }[],
    breeding_time: number, //seconds
    island_likes: {
        island: Island | "All Islands",
        likes: {
            type: "decoration" | "monster",
            name: string,
            mystery?: boolean,
        }[],
    }[],
};

export type Monster = BaseMonster;

// const m: Monster = 