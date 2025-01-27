// Verifica se é um dispositivo móvel
const isMobile = window.innerWidth <= 768;

if (isMobile) {
    // Comportamento para mobile
    const introVideoMobile = document.getElementById("intro-canva");
    const introContainerMobile = document.getElementById("intro-video-mobile");

    // Tenta reproduzir o vídeo automaticamente
    introVideoMobile.play()
        .then(() => {
            console.log("Vídeo mobile reproduzido automaticamente.");
        })
        .catch(error => {
            console.error("Erro ao reproduzir o vídeo mobile automaticamente:", error);
            // Se o autoplay falhar, aguarda a primeira interação do usuário
            document.body.addEventListener('click', () => {
                introVideoMobile.play().catch(error => {
                    console.error("Erro ao reproduzir o vídeo mobile após interação:", error);
                });
            }, { once: true }); // Executa apenas uma vez
        });

    // Espera 5 segundos e faz o fade-out
    setTimeout(() => {
        introContainerMobile.style.transition = "opacity 1s ease";
        introContainerMobile.style.opacity = "0";

        // Remove o contêiner após o fade-out
        setTimeout(() => {
            introContainerMobile.remove();
        }, 1000); // 1 segundo para o fade-out
    }, 5000); // 5 segundos de vídeo
} else {
    // Comportamento para desktop
    const introVideo = document.getElementById('introVideo');
    const introSection = document.getElementById('introSection');

    // Tenta reproduzir o vídeo automaticamente
    function playVideo() {
        introVideo.play()
            .then(() => {
                console.log("Vídeo desktop reproduzido automaticamente.");
            })
            .catch(error => {
                console.error("Erro ao reproduzir o vídeo desktop automaticamente:", error);
                // Se o autoplay falhar, aguarda a primeira interação do usuário
                document.body.addEventListener('click', () => {
                    introVideo.play().catch(error => {
                        console.error("Erro ao reproduzir o vídeo desktop após interação:", error);
                    });
                }, { once: true }); // Executa apenas uma vez
            });
    }

    // Tenta reproduzir o vídeo automaticamente ao carregar a página
    playVideo();

    // Quando o vídeo termina
    introVideo.addEventListener('ended', () => {
        console.log("Vídeo desktop terminou. Redirecionando...");
        introSection.classList.add('hidden');

        // Após a transição, redireciona para a página principal
        setTimeout(() => {
            window.location.href = "main.html";
        }, 1000); // Tempo suficiente para completar a animação
    });
}