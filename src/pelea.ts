import { Character } from "./objects_game/character/Character";

export const peleaPromise = (character1: Character, character2: Character) => {
    return new Promise((resolve: any, reject: any) => {
        while (character1.life >= 0 && character2.life >= 0) {
            setInterval(() => {
                const atack = character1.attack(character2)
                console.log(`El personaje ${character1.name} genero un ataque de ${atack}`);

                const lifeSubtracted: number = character2.defend(atack, character1);
                console.log(`El personaje ${character2.name} quedo con una vida de ${character2.life}/${character2.totalLife} debido al último ataque que le resto ${lifeSubtracted}.`);

                setInterval(() => {
                    const atack = character2.attack(character1)
                    console.log(`El personaje ${character2.name} genero un ataque de ${atack}`);

                    const lifeSubtracted: number = character1.defend(atack, character2);
                    console.log(`El personaje ${character1.name} quedo con una vida de ${character1.life}/${character1.totalLife} debido al último ataque que le resto ${lifeSubtracted}.`);

                }, 200);

            }, 200);
        }
        resolve("Finish")
    })
}

export const pelea = (character1: Character, character2: Character) => {
    while (character1.life >= 0 && character2.life >= 0) {
        setInterval(() => {
            const atack = character1.attack(character2)
            console.log(`El personaje ${character1.name} genero un ataque de ${atack}`);

            const lifeSubtracted: number = character2.defend(atack, character1);
            console.log(`El personaje ${character2.name} quedo con una vida de ${character2.life}/${character2.totalLife} debido al último ataque que le resto ${lifeSubtracted}.`);

            setInterval(() => {
                const atack = character2.attack(character1)
                console.log(`El personaje ${character2.name} genero un ataque de ${atack}`);

                const lifeSubtracted: number = character1.defend(atack, character2);
                console.log(`El personaje ${character1.name} quedo con una vida de ${character1.life}/${character1.totalLife} debido al último ataque que le resto ${lifeSubtracted}.`);

            }, 200);

        }, 200);
    }
}