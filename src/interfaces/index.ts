export interface IPokemon {
    name: string;
    url: string;
}

export interface Language {
    name: string;
    url: string;
}

export interface EffectEntry {
    effect: string;
    short_effect: string;
    language: Language;
}

export interface Ability {
    id: number;
    name: string;
    is_main_series: boolean;
    generation: {
        name: string;
        url: string;
    };
    effect_entries: EffectEntry[];
    flavor_text_entries: {
        flavor_text: string;
        language: Language;
        version_group: {
            name: string;
            url: string;
        };
    }[];
}

export interface PokemonDetails {
    id: number;
    name: string;
    height: number;
    weight: number;
    abilities: {
        ability: {
            name: string;
            url: string;
        };
        is_hidden: boolean;
        slot: number;
    }[];
    types: {
        slot: number;
        type: {
            name: string;
            url: string;
        };
    }[];
    sprites: {
        front_default: string;
        front_shiny: string;
        back_default: string;
        back_shiny: string;
    };
}

export interface PokemonList {
    count: number;
    next: string | null;
    previous: string | null;
    results: {
        name: string;
        url: string;
    }[];
}