import axios from 'axios';
export module api {
    export function getMapsList() {
        return axios({
            method: 'get',
            url: "https://api.mineralcontest.fr" + '/maps.json'
        })
    }

    export function getFilesList() {
        return axios({
            method: 'get',
            url: "https://api.mineralcontest.fr" + '/files.json'
        })
    }

    export function getBlogList() {
        return axios({
            method: 'get',
            url: "https://api.mineralcontest.fr" + '/blog.json'
        })
    }

    export function getArticleContent(title: string) {
        return axios({
            method: 'get',
            url: "https://api.mineralcontest.fr" + '/blog/' + title
        })
    }

    export function getReleasesList() {
        return axios({
            method: 'get',
            url: "https://api.github.com/repos/Synchroneyes/mineralcontest-static-backend/releases"
        })
    }


}