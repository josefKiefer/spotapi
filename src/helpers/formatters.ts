export default function formatTrackUrisForPlaylistCreate(
    trackUris: string[]
): string[] {
    const formattedUris: string[] = [];
    trackUris.forEach((trackUri) => {
        formattedUris.push('spotify:track:' + trackUri);
    });

    return formattedUris;
}
