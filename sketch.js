const candidates = ['Candidate 1', 'Candidate 2'];  // Adicione mais candidatos conforme necessário

function vote(candidateIndex) {
    const password = prompt("Digite a senha GABRIEL:");

    if (password === "GABRIEL") {
        const candidate = candidates[candidateIndex];
        saveVote(candidate);
        alert(`Você votou em ${candidate}`);
        updateResults();
    } else {
        alert("Senha incorreta. Tente novamente.");
    }
}

function saveVote(candidate) {
    const previousVotes = JSON.parse(localStorage.getItem('votes')) || {};
    
    if (previousVotes[candidate]) {
        previousVotes[candidate]++;
    } else {
        previousVotes[candidate] = 1;
    }

    localStorage.setItem('votes', JSON.stringify(previousVotes));
}

function updateResults() {
    const votes = JSON.parse(localStorage.getItem('votes')) || {};
    const resultsContainer = document.getElementById('vote-results');
    resultsContainer.innerHTML = '';

    for (const candidate in votes) {
        if (votes.hasOwnProperty(candidate)) {
            const voteCount = votes[candidate];
            const resultText = `${candidate}: ${voteCount} voto${voteCount !== 1 ? 's' : ''}`;
            const resultElement = document.createElement('p');
            resultElement.textContent = resultText;
            resultsContainer.appendChild(resultElement);
        }
    }
}
