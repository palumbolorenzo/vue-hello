/*

Descrizione:
Stampare a schermo un messaggio all’interno di un h1, utilizzando i data.
Bonus:
Aggiungere alla pagina un’immagine, presa anch’essa da un data.

*/

const root = new Vue (
    {
        el: '#root',
        data: {
            text: 'Random Pic',
            img: 'https://picsum.photos/300/300',
            classe: 'color',
            centro: 'center',
            container: "container d-flex justify-content-center align-center flex-column"
        }
    }
);

