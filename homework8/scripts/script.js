//dav1

function File() {
    let fileInput = document.getElementById('fileInput');
    let outputDiv = document.getElementById('output');

    let file = fileInput.files[0];
    let reader = new FileReader();
    reader.onload = function (event) {
        let text = event.target.result;
        let totalCharacters = text.length;
        let words = text.split(s).filter(word => word !== '');
        let totalWords = words.length;
        let longestWord = words.reduce((a, b) => a.length >= b.length ? a : b, '');
        let shortestWord = words.reduce((a, b) => a.length <= b.length ? a : b, '');
        let totalWordLength = words.reduce((acc, word) => acc + word.length, 0);
        let averageWordLength = totalWordLength / totalWords;

        outputDiv.innerHTML = `
            <p>Total symbols: ${totalCharacters}</p>
            <p>Total words: ${totalWords}</p>
            <p>Longest Word: ${longestWord}</p>
            <p>Shortest Word: ${shortestWord}</p>
            <p>Average word length: ${averageWordLength}</p>
        `;
    };

    reader.readAsText(file);
}
//dav2

function displayImage() {
    let selectElement = document.getElementById('imageSelect');
    let imageContainer = document.getElementById('imageContainer');
    let selectedValue = selectElement.value;

    if (selectedValue) {
        let imageElement = document.createElement('img');
        imageElement.src = selectedValue;
        imageElement.style.maxWidth = '100%';
        imageContainer.innerHTML = '';
        imageContainer.appendChild(imageElement);
    } else {
        imageContainer.innerHTML = '';
    }
}


document.getElementById('image-selector').addEventListener('change', function (event) {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = function (e) {
        const imagePreview = document.getElementById('image-preview');
        imagePreview.src = e.target.result;
    }

    reader.readAsDataURL(file);
});

