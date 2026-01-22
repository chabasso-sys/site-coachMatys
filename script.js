window.addEventListener("load", () => {
    const elements = document.querySelectorAll(".reveal");
    console.log("reveal trouvés:", elements.length);
  
    // Si IntersectionObserver n’existe pas, on affiche tout
    if (!("IntersectionObserver" in window)) {
      elements.forEach(el => el.classList.add("show"));
      return;
    }
  
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15 });
  
    elements.forEach(el => observer.observe(el));
  });

const card = document.querySelector(".right");
if (card) {
  card.addEventListener("mousemove", (e) => {
    const r = card.getBoundingClientRect();
    const x = e.clientX - r.left;
    const y = e.clientY - r.top;

    // centre = 0
    const cx = x - r.width / 2;
    const cy = y - r.height / 2;

    const rx = (-cy / r.height) * 10; 
    const ry = (cx / r.width) * 10;   

    card.style.transform = `perspective(900px) rotateX(${rx}deg) rotateY(${ry}deg) translateY(6px)`;
  });

  card.addEventListener("mouseleave", () => {
    card.style.transform = "perspective(900px) rotateX(0deg) rotateY(0deg) translateY(0px)";
  });
}


const btn = document.querySelector("#startBtn");
if (btn) {
  btn.addEventListener("mousemove", (e) => {
    const r = btn.getBoundingClientRect();
    const mx = ((e.clientX - r.left) / r.width) * 100;
    const my = ((e.clientY - r.top) / r.height) * 100;
    btn.style.setProperty("--mx", `${mx}%`);
    btn.style.setProperty("--my", `${my}%`);
  });
}


window.addEventListener("scroll", () => {
  const y = window.scrollY;

  document.body.style.backgroundPosition = `center calc(45% + ${y * 0.04}px)`;
});
const nav = document.querySelector(".nav");
window.addEventListener("scroll", () => {
  nav.classList.toggle("scrolled", window.scrollY > 10);
});
