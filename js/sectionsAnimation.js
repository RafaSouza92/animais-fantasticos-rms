export default function sectionsAnimation(){
    const sections = document.querySelectorAll('[data-anime="scroll"]');
    if (sections.length) {
      const halfWindow = window.innerHeight * 0.6;
    
      function animaScroll() {
        sections.forEach((section) => {
          const sectionTop = section.getBoundingClientRect().top;
          const sectionVisible = sectionTop - halfWindow < 0;
          if (sectionVisible) {
            section.classList.add("ativo");
          }
        });
      }
      animaScroll();
      window.addEventListener("scroll", animaScroll);
    }
    };