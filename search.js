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

    // Hide all items and tags
    Array.from(li).forEach(item => {
        item.style.display = 'none';
    });

    // Show only the items that belong to the selected tag
    Array.from(li).forEach(item => {
        const itemTag = item.getAttribute('data-tag');

        if (itemTag === tag) {
            item.style.display = 'block';
            hasResults = true;
        }
    });

    // Show or hide the error message based on results
    document.getElementById('errorMessage').style.display = hasResults ? 'none' : 'block';

    // Reset the search field if 'Show All' is selected
    if (tag === 'all') {
        input.value = '';
        Array.from(li).forEach(item => {
            item.style.display = 'block';
        });
    }

    // Here you can add the new tags that belong to the selected tag
    updateTags(tag);
}

function updateTags(selectedTag) {
    const tagContainer = document.getElementById('tagContainer'); // Make sure you have a container for the tags
    tagContainer.innerHTML = ''; // Clear the current tags

    let newTags = []; // Here you can define the new tags based on the selected tag

    // Example of new tags based on the selected tag
    if (selectedTag === 'flamingo') {
        newTags = ['Algae', 'Small Crustaceans', 'Insects'];
    } else if (selectedTag === 'panda') {
        newTags = ['Fruits', 'Leaves', 'Insects'];
    }

    // Add the new tags to the tagContainer
    newTags.forEach(tag => {
        const tagElement = document.createElement('span');
        tagElement.textContent = tag;
        tagElement.className = 'tag'; // Add a class for styling
        tagContainer.appendChild(tagElement);
    });
}
