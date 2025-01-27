// Elementos do DOM
const introVideo = document.getElementById('introVideo');
const introSection = document.getElementById('introSection');

// Tenta reproduzir o vídeo automaticamente
function playVideo() {
    introVideo.play()
        .then(() => {
            console.log("Vídeo reproduzido automaticamente.");
        })
        .catch(error => {
            console.error("Erro ao reproduzir o vídeo automaticamente:", error);
            // Se o autoplay falhar, aguarda a primeira interação do usuário
            document.body.addEventListener('click', () => {
                introVideo.play().catch(error => {
                    console.error("Erro ao reproduzir o vídeo após interação:", error);
                });
            }, { once: true }); // Executa apenas uma vez
        });
}

// Tenta reproduzir o vídeo automaticamente ao carregar a página
playVideo();

// Quando o vídeo termina
introVideo.addEventListener('ended', () => {
    console.log("Vídeo terminou. Redirecionando...");
    introSection.classList.add('hidden');

    // Após a transição, redireciona para a página principal
    setTimeout(() => {
        window.location.href = "main.html";
    }, 1000); // Tempo suficiente para completar a animação
});