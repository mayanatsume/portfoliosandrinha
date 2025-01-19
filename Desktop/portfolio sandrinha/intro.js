// Elementos do DOM
const introVideo = document.getElementById('introVideo');
const introSection = document.getElementById('introSection');

// Quando o vídeo termina
introVideo.addEventListener('ended', () => {
    // Adiciona a classe de transição
    introSection.classList.add('hidden');

    // Após a transição, redireciona para a página principal
    setTimeout(() => {
        window.location.href = "main.html";
    }, 1000); // Tempo suficiente para completar a animação
});
