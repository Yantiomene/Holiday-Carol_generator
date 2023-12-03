function generateCarol() {
    // Fetch user input values
    const userName = document.getElementById('name').value;
    const place = document.getElementById('place').value;
    const adjectives = document.getElementById('adjectives').value.split(',').map(adj => adj.trim());
    const idealChristmas = document.getElementById('idealChristmas').value;
    const lavishGift = document.getElementById('lavishGift').value;

    // Ensure adjectives is a string before splitting
    let adjectivesArray = Array.isArray(adjectives) ? adjectives : adjectives.split(',').map(item => item.trim());

    // Create a JSON object with user input
    let userInput = {
	'name': name,
	'place': place,
	'adjectives': adjectivesArray,
	'idealChristmas': idealChristmas,
	'lavishGift': lavishGift
    };

    // Make an AJAX POST request to the Flask backend
    fetch('/generate_carol', {
	method: 'POST',
	headers: {
            'Content-Type': 'application/json'
	},
	body: JSON.stringify(userInput)
    })
    .then(response => response.json())
    .then(data => {
	// Display the generated carol in the output container
	document.getElementById('output-container').innerHTML = '<p>' + data.carol + '</p>';
    })
    .catch(error => console.error('Error:', error));
    
    // Example: Generate a personalized carol
    //const carol = `${userName}, ${adjectives.join(', ')} ${place} for Christmas,`;
    //const chorus = `The ${idealChristmas} season is here, let's celebrate with cheer!`;
    //const giftLine = `A lavish gift of ${lavishGift} is coming your way.`;

    // Display the generated carol
    //const outputContainer = document.getElementById('output-container');
    //outputContainer.innerHTML = `<p>${carol}</p><p>${chorus}</p><p>${giftLine}</p>`;

    // Add logic to play the generated audio (to be implemented later)
}
