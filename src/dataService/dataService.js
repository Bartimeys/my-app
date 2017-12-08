// import tabs from 'tabs.json'
const pagesUrl = 'tabs.json';

export const loadTabInfo = () => {
    return fetch(pagesUrl, {
        headers : {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }}).then(resp => resp.json())
};