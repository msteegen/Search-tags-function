function filterLinks() {
    const input = document.getElementById('searchInput');
    const filter = input.value.toLowerCase();
    const ul = document.getElementById('linkList');
    const li = ul.getElementsByTagName('li');
    let hasResults = false;

    Array.from(li).forEach(item => {
        const a = item.getElementsByTagName('a')[0];
        const txtValue = a.textContent || a.innerText;
        const isMatch = txtValue.toLowerCase().includes(filter);

        item.style.display = isMatch ? 'block' : 'none';
        hasResults = hasResults || isMatch;
    });

    document.getElementById('errorMessage').style.display = hasResults ? 'none' : 'block';
}

function filterByTag(tag) {
    const input = document.getElementById('searchInput');
    const ul = document.getElementById('linkList');
    const li = ul.getElementsByTagName('li');
    let hasResults = false;

    // Verberg alle items en tags
    Array.from(li).forEach(item => {
        item.style.display = 'none';
    });

    // Toon alleen de items die bij de geselecteerde tag horen
    Array.from(li).forEach(item => {
        const itemTag = item.getAttribute('data-tag');

        if (itemTag === tag) {
            item.style.display = 'block';
            hasResults = true;
        }
    });

    // Toon of verberg het foutbericht op basis van resultaten
    document.getElementById('errorMessage').style.display = hasResults ? 'none' : 'block';

    // Reset het zoekveld als 'Show All' is geselecteerd
    if (tag === 'all') {
        input.value = '';
        Array.from(li).forEach(item => {
            item.style.display = 'block';
        });
    }

    // Hier kun je de nieuwe tags toevoegen die bij de geselecteerde tag horen
    updateTags(tag);
}

function updateTags(selectedTag) {
    const tagContainer = document.getElementById('tagContainer'); // Zorg ervoor dat je een container hebt voor de tags
    tagContainer.innerHTML = ''; // Maak de huidige tags leeg

    let newTags = []; // Hier kun je de nieuwe tags op basis van de geselecteerde tag definiëren

    // Voorbeeld van nieuwe tags op basis van de geselecteerde tag
    if (selectedTag === 'food') {
        newTags = ['gras', 'appels', 'water'];
    } else if (selectedTag === 'kind') {
        newTags = ['bird', 'mammal', 'sea creature'];
    }

    // Voeg de nieuwe tags toe aan de tagContainer
    newTags.forEach(tag => {
        const tagElement = document.createElement('span');
        tagElement.textContent = tag;
        tagElement.className = 'tag'; // Voeg een klasse toe voor styling
        tagContainer.appendChild(tagElement);
    });
}