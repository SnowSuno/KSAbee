export const enum Position {
    TOP = 'top',
    JUNGLE = 'jg',
    MID = 'mid',
    BOTTOM = 'bot',
    SUPPORT = 'sup',
}
export type PositionType = typeof Position[keyof typeof Position];


export const enum Tier {
    UNRANKED = 'Unranked',
    IRON1 = 'Iron 1', IRON2 = 'Iron 2', IRON3 = 'Iron 3', IRON4 = 'Iron 4',
    BRONZE1 = 'Bronze 1', BRONZE2 = 'Bronze 2',

}
export type TierType = typeof Tier[keyof typeof Tier]
