/* 1. příklad */
/* Uložení odkazů na objekty do konstant */
const novy = document.getElementById('novy-element'); // tlačítko Nový
const vyber = document.getElementById('vyber-element'); // Výběrový seznam (select)
const sklad = document.getElementById('sklad'); // div označený id sklad

/* Ošetření události po kliknutí na tlačítko Nový */
novy.addEventListener('click', function() {
    /* Do proměnné tag se uloží hodnota (text) vybrané značky ve výběrovém seznamu.
       V hranatých závorkách se uvádí index právě vybrané položky - indexuje se od nuly.  */
    let tag = vyber.options[vyber.selectedIndex].value;
    /* Do proměnné element se vytvoří nový objekt (HTML prvek) podle uživatelovy volby ve výběrovém seznamu. */
    let element = document.createElement(tag);
    /* Podle zvoleného HTML elementu rozhoduje přepínač switch o způsobu jeho zobrfazení. */
    switch (tag) {
        case 'H1':
            /* Element hlavní nadpis se zobrazí jako HTML se zdůrazněním h1 */
            element.innerHTML = 'Nadpis <code>h1</code>';
            break;
        case 'B':
            /* Do elementu <b> se pouze vloží text 'Tučný text' */
            element.innerText = 'Tučný text';
            break;
        case 'IMG':
            /* Do atributu src elementu <img> se vloží adresa školního loga */
            element.src = "img/logo.png";
    }
    /* Do atributu class nově vytvořeného elementu se přidá nová třída 'new' */
    element.classList.add('new');

    /* K nově vytvořenému elementu se přidá ošetření události dvojklik myší */
    element.addEventListener('dblclick', function() {  
        /* Jestliže uživatel v popup okně confirm() potvrdí odstranění tohoto elementu... */
        if (window.confirm('Chcete opravdu odstranit ' + this)) {
            /* ... bude tento element (objekt) ze stránky odstraněn */
            this.remove();
        }     
    });
    /* Přidá do oddílu s id sklad nového potomka ('děťátko' :-)) - připravený objekt element */
    sklad.appendChild(element);    
});


/* 2. příklad */
/* Uložení odkazů na objekty do konstant */
const nadpis = document.querySelector('#example2 h4'); // vybere právě ten nadpis h4, který je v bloku s id #example2
const tvar = document.querySelector('#example2 img'); // vybere právě ten obrázek img, který je v bloku s id #example2

/* Ošetření události po kliknutí na nadpis */
nadpis.addEventListener('click', function() {
    this.innerText = window.prompt('Zadej text nadpisu', this.innerText);
});

/* Ošetření události po vstupu kurzoru myši do obrázku */
tvar.addEventListener('mouseenter', function() {
    // změní se zdroj obrázku - smějící se smajlík
    this.src = 'img/smile.png';
    // do atributu title obrázku se vypíše text
    this.title = 'Usmívám se';
});

/* Ošetření události kdy kurzor myši opustí obrázek */
tvar.addEventListener('mouseleave', function() {
    // změní se zdroj obrázku - smutný smajlík
    this.src = 'img/sad.png';
});


/* 3. příklad */
/* Uložení odkazů na objekty do konstant */
const styly = document.querySelector('#example3 h4'); // vybere právě ten nadpis h4, který je v bloku s id #example3

/* Funkce zajistí náhodné generování barvy podle modelu RGB */
function randomRGB() {
    /* Generování náhodného čísla do jednotlivých barevných složek:
       Funkce Math.floor() zaokrouhlí na celé číslo směrem dolů
       Funkce Math.random() generuje pseudonáhodné desetinné číslo v rozsahu 0 až 1 
    */
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    /* Funkce vrací výsledek v podobě znakového řetězce (viz temporary literals) */
    return `rgb(${r}, ${g}, ${b})`;
}

/* Funkce zajistí generování náhodného celého čísla v rozsahu zadaném parametry min a max. 
   Oběma parametrům je zde přidána výchozí hodnota - když nejsou zadány, použije se. */
function randomNumber(min = 10, max = 100) {
    /* Funkce Math.round() zaokrohluje číslo běžným matematickým způsobem - od ?.5 nahoru, jinak dolů */
    return Math.round(Math.random() * (max - min)) + min;
}

/* Do konstanty zarovnani se uloží tzv. pole (array) znakových řetězců.
   Jsou indexovány: [0] = 'left', [1] = 'center', [2] = 'right' */
const zarovnani = ['left', 'center', 'right'];

/* Ošetření události pohybu kurzoru myši nad nadpisem */
styly.addEventListener('mousemove', function() {
    this.style.color = randomRGB(); // díky funkci randomRGB() se náhodně změní barva písma nadpisu 
    this.style.backgroundColor = randomRGB(); // díky funkci randomRGB() se náhodně změní barva pozadí nadpisu 
    this.style.fontSize = randomNumber() + 'px'; // díky funkci randomNumber() se náhodně nastaví velikost písma (v rozsahu 10 až 100) 
    /* Díky funkci randomNumber() se náhodně vybere číslo v rozsahu 0 až 2 
       a použije se jako index pro výpis jedné hodnoty z pole zarovnani */
    this.style.textAlign = zarovnani[randomNumber(0,2)]; 
    /* Text nadpisu bude obsahovat aktuální zarovnání a velikost písma. */
    this.innerText = this.style.textAlign + ' | ' + this.style.fontSize;
});

/* 4. příklad */
/* Uložení odkazů na objekty do konstant */
const tridy = document.querySelector('#example4 h4'); // vybere právě ten nadpis h4, který je v bloku s id #example4
const seznam = document.querySelector('#example4 ul'); // vybere právě ten prvek ul, který je v bloku s id #example4

/* Funkce vytvoří nečíslovaný seznam obsahující informace o všech třídách obsažených v atributu class nadpisu h4 */
function generujSeznam() {
    /* Vyprázdní se nečíslovaný seznam, aby se mohl naplnit novými odrážkami */
    seznam.innerText = '';
    /* Cyklus for se opakuje podle počtu tříd obsažených v atributu class */
    for (let i = 0; i < tridy.classList.length; i++) {
        let li = document.createElement('LI'); // Vytvoří se nový element typu odrážka (<li>)
        li.innerText = tridy.classList[i]; // Do nové odrážky se vypíše označení třídy, na níž právě ukazuje index i
        /* Pro nový objekt odrážky se vytvoří ošetření události při kliknutí - slouží k odstranění vybrané třídy */
        li.addEventListener('click', function(){
            /* Odstranění vybrané třídy se seznamu tříd */
            tridy.classList.remove(this.innerText);
            /* Odstranění samotného objektu odrážky */
            this.remove();
        });
        /* Nově vytvořený element se přidá jako potomek seznamu. */
        seznam.appendChild(li);
    }
}

/* Vyvolání funkce při načtení stránky */
generujSeznam();

/* Ošetření události pohybu kurzoru myši nad nadpisem */
tridy.addEventListener('click', function() {
    /* Do atributu class nadpisu se přidá nová třída, kterou uživatel zadá do popup okna prompt() */
    this.classList.add(prompt('Zadej novou třídu - class'));
    /* Funkce aktualizuje seznam tříd */
    generujSeznam();
});

/* 5. příklad */
/* Uložení odkazů na objekty do konstant */
/* Vyvolá se obecná událost při kliknutí na libovolné místo v dokumentu - celé webové stránce*/
document.addEventListener('click', function(e) {
    /* Do proměnné ev se uloží objekt - informace o zachycené události - kliknutí myši */
    let ev = e || window.event;
    /* Do proměnné element se uloží informace o cíli (target) kliknutí myši. 
       Zjistíme tím, který prvek stránky byl kliknutím "postižen". */
    let element = ev.target;
    /* Jen v případě, kdy uživatel při kliknutí držel klávesu CTRL... */
    if (ev.ctrlKey)
        /* ...bude odstraněn "odkliknutý" element. */
        element.remove();
}, false);
