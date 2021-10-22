export default class ApiMorty {

    async getData(pUrl) {
        let response = await fetch(pUrl, { method: 'GET' });
        if (response.status === 200) {
            let data = await response.json();
            return data;
        }
        return response.statusText;

    }


    printCharacters(pCharacterList, pSection) {
        pSection.innerHTML = "";
        pCharacterList.forEach(character => this.printCharacter(character, pSection));
    }

    printCharacter(pCharacter, pSection) {
        let article = document.createElement('article');
        article.innerHTML = `<figure>
                            <img src="${pCharacter.image}" alt="${pCharacter.name}">
                        </figure>
                        <h3>${pCharacter.name}</h3>
                        <ul>
                            <li>Estado: ${pCharacter.status}</li>
                            <li>Especie: ${pCharacter.species}</li>
                        </ul>`;

        pSection.appendChild(article);

    }

    printEpisodes(pEpisodesList, pSection) {
        pSection.innerHTML = "";
        pEpisodesList.forEach(episode => this.printEpisode(episode, pSection));
    }

    printEpisode(pEpisode, pSection) {
        let article = document.createElement('article');
        article.innerHTML = `<h3>${pEpisode.name}</h3>
                        <ul>
                            <li>Estreno: ${pEpisode.air_date}</li>
                            <li>Numero: ${pEpisode.episode}</li>
                        </ul>`;
        pSection.appendChild(article);
    }

}