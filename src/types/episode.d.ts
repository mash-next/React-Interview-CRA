interface Episode {
    director: string;
    release_date: string;
    producers: string;
    title: string;
    director: string;
    [key: string]: string;
}

interface EpisodeList extends Array<Episode> {}