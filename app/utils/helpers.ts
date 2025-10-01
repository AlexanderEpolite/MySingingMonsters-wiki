export function getURLFromName(name: string, icon: boolean, type: "decoration" | "monster"): string {
    // Replace apostrophes with underscore, spaces with hyphens
    name = name.toLowerCase().replaceAll("'", "_").replaceAll(" ", "-");
    if (type === "decoration") {
        return `/images/decorations/${name}.webp`;
    } else {
        // Always use full image, ignore icon parameter
        return `/images/monsters/${name}.webp`;
    }
}

export function getCurrencyImage(currency: string): string {
    const currencyName = currency.toLowerCase();
    // Map common currency names to image files
    const currencyMap: Record<string, string> = {
        'coins': 'coins',
        'coin': 'coins',
        'diamonds': 'diamonds',
        'diamond': 'diamonds',
        'shards': 'shards',
        'shard': 'shards',
        'relics': 'relics',
        'relic': 'relics',
        'starpower': 'starpower',
        'star power': 'starpower',
        'xp': 'xp',
        'experience': 'xp'
    };
    
    const fileName = currencyMap[currencyName] || 'coins';
    return `/images/currency/${fileName}.webp`;
}

export function getIslandImage(islandName: string): string {
    const slug = islandName.toLowerCase().replaceAll(" ", "-");
    return `/images/islands/${slug}.webp`;
}

export function formatTime(seconds: number): string {
    if (seconds === 0) return "Instant";
    
    const days = Math.floor(seconds / 86400);
    const hours = Math.floor((seconds % 86400) / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    
    const parts = [];
    if (days > 0) parts.push(`${days}d`);
    if (hours > 0) parts.push(`${hours}h`);
    if (minutes > 0) parts.push(`${minutes}m`);
    if (secs > 0) parts.push(`${secs}s`);
    
    return parts.join(" ");
}

export function formatNumber(num: number): string {
    return num.toLocaleString();
}

export function getMonsterSlug(name: string): string {
    return name.toLowerCase().replaceAll(" ", "-");
}

export function getIslandSlug(name: string): string {
    return name.toLowerCase().replaceAll(" ", "-");
}
