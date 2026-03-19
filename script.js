// Initialize AOS Animations
AOS.init({
    duration: 800,
    once: true,
    offset: 100,
    easing: 'ease-out-cubic'
});

// 1. WhatsApp Integration
function abrirWhatsApp(plano) {
    const phoneNumber = "5516982622895";
    
    // Mount the message as requested
    const mensagemRef = `Olá, vim pelo site Clube da Obediência!

Tenho interesse no plano: ${plano}

Meus dados:
Nome: 
Nome do cão: 
Raça: 
Sexo (Macho/Fêmea): 

Objetivo com o adestramento: `;

    // Encode URI
    const encodedMessage = encodeURIComponent(mensagemRef);
    
    // Redirect to WhatsApp
    const url = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(url, '_blank');
}

// 2. Countdown Timer Logic
function contadorRegressivo() {
    // Encerramento da turma de inauguração dia 31/03/2026
    const deadline = new Date("2026-03-31T23:59:59").getTime();
    
    const x = setInterval(function() {
        const now = new Date().getTime();
        const distance = deadline - now;
        
        // Time calculations for days, hours, minutes and seconds
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);
        
        // Output the result
        document.getElementById("days").innerHTML = days < 10 ? "0" + days : days;
        document.getElementById("hours").innerHTML = hours < 10 ? "0" + hours : hours;
        document.getElementById("minutes").innerHTML = minutes < 10 ? "0" + minutes : minutes;
        document.getElementById("seconds").innerHTML = seconds < 10 ? "0" + seconds : seconds;
        
        // If the count down is over, change text
        if (distance < 0) {
            clearInterval(x);
            document.getElementById("countdown-title").innerHTML = "👉 Últimas vagas disponíveis";
            document.getElementById("countdown").style.display = "none";
        }
    }, 1000);
}

// 3. Parallax Effect Logic
function parallaxScroll() {
    const parallaxBg = document.getElementById('parallax-bg');
    const blob1 = document.querySelector('.blob-1');
    const blob2 = document.querySelector('.blob-2');
    
    window.addEventListener('scroll', () => {
        const scrolled = window.scrollY;
        
        // Background moves very slowly
        if (parallaxBg) {
            parallaxBg.style.transform = `translateY(${scrolled * 0.15}px)`;
        }
        
        // Blobs move at different speeds for depth
        if (blob1) {
            blob1.style.transform = `translateY(${scrolled * 0.3}px) translateX(${scrolled * -0.1}px)`;
        }
        
        if (blob2) {
            blob2.style.transform = `translateY(${scrolled * 0.2}px) translateX(${scrolled * 0.1}px)`;
        }
    });
}

// Initialize functions when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    contadorRegressivo();
    parallaxScroll();
});
