//Importamos los paquetes que requerimos
const express = require('express');
const hbs = require('hbs');

//creamos la aplicacion
const app = express();

//Definimos el motor de plantillas
//No de vamos a emplear MVC (Vista vamos a utiisar HBS)
app.set('view engine', 'hbs');

//Vamos a generar los partials
hbs.registerPartials(__dirname + '/views/partials');

//Generamos el sitio estatico
app.use(express.static(__dirname + '/public'));

//configurar mis rutas
app.get('/', (req, res)=>{
    res.render('index', {
        autor : 'Brenda Garcia',
        year : new Date().getFullYear(),
        title : 'Inicio'
    });
});

app.get('/Leonardo', (req, res)=>{
    res.render('Leonardo da Vinci', {
        autor : 'Brenda Garcia',
        year : new Date().getFullYear(),
        title : 'Leonardo da Vinci',
        Histria : "Pintor, inventor, escultor, arquitecto, ingeniero, astrónomo, clasificar al italiano Leonardo da Vinci es una sola disciplina es una tarea imposible. Su figura encarna perfectamente el ideal del hombre del Renacimiento, y su expresión derivada como sinónimo de polímatía, o sabiduría aplicada a diversos campos del arte y de la ciencia. Como inventor dejó trazadas las ideas de lo que luego serían dispositivos y aparatos tan dispares como el paracaídas, el helicóptero y el tanque, aunque el nivel tecnológico de su época hizo imposible que los viera convertidos en realidad. Sin duda, su legado más universal está en el campo de la pintura. Obras magnas como La última cena o La dama del armiño han quedado relativamente eclipsadas por la dimensión de su cuadro más famoso: la Mona Lisa, o Gioconda, expuesta en el museo del Louvre de París y convertida en un auténtico icono popular."
    });
});

app.get('/salvador', (req, res)=>{
    res.render('dali', {
        autor : 'Brenda Garcia',
        year : new Date().getFullYear(),
        title : 'Salvador Dali',
        Historia: "Desde la desdichada lucha contra el destino del príncipe Segismundo hasta las travesuras shakesperianas del pícaro Puck, el mundo de los sueños siempre ha sido escenario y fuente de inspiración para artes de todo tipo. Tras la Primera Guerra Mundial surgió en Francia el surrealismo, un movimiento cultural (literario al principio) que bebía de las fuentes del psicoanálisis y explotaba todo el potencial del mundo onírico como reflejo del subconsciente y alejado de cualquier realidad física. Fueron muchos los artistas e intelectuales que se unieron a esta nueva corriente pero, entre todos ellos, Salvador Dalí pasó a la historia por haber convertido toda su vida en una obra surrealista.\n" +
            "<br>\n" +
            "        Nacido en el seno de una familia acomodada en 1904, Salvador Dalí destacó desde muy joven por su forma de pensar y de plasmar la realidad a través de la pintura. Si bien se inició con el movimiento impresionista, pronto conocería la obra de  Picasso y se pasaría al cubismo. En 1921 comenzó sus estudios en Madrid, donde entablaría una profunda amistad con Federico García Lorca y Luis Buñuel, pero su verdadero lanzamiento se produciría al visitar París y unirse a la corriente surrealista de Breton. Su obra se caracterizó por explotar al máximo la abstracción y particular simbolismo del artista en claro beneficio de su propio mundo subconsciente frente a la realidad que le tocaba vivir y que tanto parecía aburrirle. Gran parte de su trabajo giraría en torno a la figura de Gala, su esposa y musa indiscutible, y al método paranoico-crítico que él mismo desarrolló.\n" +
            "        <br>\n" +
            "        Si bien su labor como pintor, escultor, escritor o diseñador fue eufóricamente admirada en todo el mundo y a lo largo de toda su carrera, fue la extravagante personalidad del artista la que le hizo destacar todavía más. Su particular aspecto físico, su ropa, su forma de comportarse o su ocelote Babou; Salvador Dalí era capaz de convertir cualquier situación en una parodia ridícula y absurda. El Teatro-Museo Dalí de Figueres, cuya fachada está decorada con huevos y panes, es un ejemplo del esperpento que caracterizó al artista.  \n" +
            "        <br>\n" +
            "        Es innegable que la combinación que el prolífico artista hizo de su obra y vida personal le valió la fama que aún conserva y que le convirtió en uno de los artistas más representativos y afamados del siglo XX. Rostro del surrealismo y sorprendente hasta la saciedad, Salvador Dalí supo plasmar en sus cuadros los rincones más escondidos de su mente."
    });
});

app.get('/Pablo', (req, res)=>{
    res.render('Pablo Ruiz Picasso', {
        autor : 'Brenda Garcia',
        year : new Date().getFullYear(),
        title : 'Pablo Ruiz Picasso',
        historia :"Pablo Ruiz Picasso, arquetipo de «el artista», genio, vital, follador…, creador de estilos, una leyenda ya en vida (que él contribuyó a forjar) y sin duda alguna, uno de los más grandes artistas de la historia.\n" +
            "        Dejó huella en cada una de sus múltiples etapas de sus períodos azul, rosa o blanco y negro, al cubismo que inventó, después al surrealismo, a la abstracción… y por este inconmensurable talento junto a su ingente producción estamos ante el artista más famoso de la historia del arte.\n" +
            "        <br>\n" +
            "        Picasso no pierde vigencia porque fue la figura central de todo el arte del siglo XX, un artista experimental pero ligado al pasado y con una obra que continuamente admite nuevas lecturas. Fue quizás también el artista más influyente. El arte contemporáneo es lo que es gracias (o por culpa) de él.\n" +
            "        <br>\n" +
            "        No podemos hablar de biografía al uso. Estampó su vida en sus lienzos y entre él y sus amigos, la élite cultural del siglo XX, se crearon su propia vida, su propia leyenda. Los detalles biográficos parecen irrelevantes ante la grandiosidad de su obra, aunque está plagados de mitos, desde la bocanada de humo que le dio la vida a un recién nacido artista al robo de la Gioconda en 1911.\n" +
            "        <br>\n" +
            "        No podemos hablar de un estilo concreto. Su libertad estilística hizo que pasara de un estilo a otro sin transición, Su genio fue el material principal de su arte: en apenas segundos podía hacer una obra maestra. Representaba la rama del arte contemporáneo más física, la necesidad de pintar, de crear de forma material.\n" +
            "        <br>\n" +
            "        Fue también celebridad: la fama y el éxito económico, pero también el reconocimiento artístico. Y esto se tradujo en una interminable lista de amantes, esposas, modelos… Es evidente su vinculación entre sexo y arte.\n" +
            "        <br>\n" +
            "        Se calcula que Picasso fue autor de unas 13.500 pinturas y diseños, 100.000 impresiones o grabados, 34.000 ilustraciones para libros y 300 esculturas o cerámicas, además de tener el mayor número de museos con su nombre (Museos Picasso).\n" +
            "        <br>\n" +
            "        El principal enemigo de la creatividad es el buen gusto."
    });
});
app.get('/Claude', (req, res)=>{
    res.render('Claude Monet', {
        autor : 'Brenda Garcia',
        year : new Date().getFullYear(),
        title : 'Claude Monet',
        Historia :"Líder del movimiento de arte impresionista, los cuadros de Monet son reconocidos como los más puros ejemplos de este estilo. Su importancia se refleja en el precio logrado por su óleo \"Le Bassin Aux Nympheas\", vendido el año 2008 en Londres por 40,9 millones de libras esterlinas.\n" +
            "<br>\n" +
            "        Monet sentó las bases de la pintura moderna, su pincel no buscaba comunicar una historia ni dar una instrucción moral al espectador, sino que ponía en el lienzo impresiones en función de las sensaciones experimentadas por el ojo. Las pinceladas puntillistas, que pintó en sus cuadros con propiedad de maestro, son el origen de el arte pictórico moderno."
    });
});

//Arrancamos el servisdor web
app.listen(3000, ()=>{
    console.log('Escuchando el puerto 3000');
});
