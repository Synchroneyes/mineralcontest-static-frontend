import axios from 'axios';

const CACHE_KEY = 'github_releases_cache';
const CACHE_DURATION = 1000 * 60 * 60; // 1 heure

export async function getGitHubReleases() {
    const cached = localStorage.getItem(CACHE_KEY);
    const cachedTime = localStorage.getItem(`${CACHE_KEY}_time`);

    // Vérifie si les données sont encore valides
    if (cached && cachedTime && Date.now() - cachedTime < CACHE_DURATION) {
        return JSON.parse(cached);
    }

    try {
        const response = await axios.get(
            'https://api.github.com/repos/Synchroneyes/MineralContest-static-backend/releases?per_page=1000'
        );

        const data = response.data;

        // Met en cache
        localStorage.setItem(CACHE_KEY, JSON.stringify(data));
        localStorage.setItem(`${CACHE_KEY}_time`, Date.now().toString());

        return data;
    } catch (error) {
        console.error('Erreur lors de la récupération des releases GitHub:', error);
        // Fallback: retourne le cache même s’il est expiré
        if (cached) {
            return JSON.parse(cached);
        } else {
            throw error;
        }
    }
}

export async function getGitHubReleaseByTag(tag) {
    let releases = await getGitHubReleases();

    return releases.find(release => release.tag_name === tag);
}

export async function getPluginDownloadCount(tag) {
    let release = await getGitHubReleaseByTag(tag);

    if (release && release.assets) {
        let asset = release.assets.find(asset => asset.name.endsWith('.jar'));
        return asset ? asset.download_count : 0;
    }

    return 0;
}

export async function getMapDownloadCount(tag) {
    let release = await getGitHubReleaseByTag(tag);


    if (release && release.assets) {
        let asset = release.assets.find(asset => asset.name.endsWith('.zip'));
        return asset ? asset.download_count : 0;
    }

    return 0;
}

export async function getTotalPluginDownloadCount() {
    let releases = await getGitHubReleases();

    let total = 0;
    for (let release of releases) {
        if (release.assets) {
            let asset = release.assets.find(asset => asset.name.endsWith('.jar'));
            if (asset) {
                total += asset.download_count;
            }
        }
    }

    return total;
}

export async function getTotalMapDownloadCount() {
    let releases = await getGitHubReleases();

    let total = 0;
    for (let release of releases) {
        if (release.assets) {
            let asset = release.assets.find(asset => asset.name.endsWith('.zip'));
            if (asset) {
                total += asset.download_count;
            }
        }
    }

    return total;
}