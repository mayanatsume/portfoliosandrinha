// Elementos do DOM
const introVideo = document.getElementById('introVideo');
const introSection = document.getElementById('introSection');
const introScreenMobile = document.getElementById('intro-screen-mobile');

// Função para detectar se é um dispositivo móvel
function isMobileDevice() {
    return /Mobi|Android/i.test(navigator.userAgent);
}

// Lógica para dispositivos móveis
if (isMobileDevice()) {
    console.log("Dispositivo móvel detectado. Exibindo introdução com imagem.");

    // Mostra a introdução com imagem
    introScreenMobile.style.display = 'flex';

    // Redireciona após a animação
    setTimeout(() => {
        introScreenMobile.style.animation = 'fadeOutMobile 2s ease-out forwards';
        setTimeout(() => {
            window.location.href = "main.html";
        }, 2000); // Tempo do fade-out
    }, 3000); // Duração da animação de abertura
} else {
    // Lógica para computadores (vídeo)
    console.log("Computador detectado. Exibindo introdução com vídeo.");

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
}
