//header
const bell = document.querySelector('.notifications');
const body_n = document.querySelector('.body-notifications');

bell.addEventListener('click', () => {
  body_n.classList.toggle('ativo');
  body_profile.classList.remove('ativo');
});

const user = document.querySelector('.profile');
const body_profile = document.querySelector('.body-profile');

user.addEventListener('click', () => {
  body_profile.classList.toggle('ativo');
  body_n.classList.remove('ativo');
});

//Mobile
const burger = document.querySelector('.burger');
const bg = document.querySelector('.bg');

burger.addEventListener("click", () => {
  bg.classList.add('visible');
  if (aside.classList.contains('-translate-x-full'))
      aside.classList.remove('translate-x-full');
      aside.classList.add('translate-x-0');
});

const closeAside = document.getElementById('close');

closeAside.addEventListener("click", () => {
  bg.classList.remove('visible');
  if (aside.classList.contains('translate-x-0'))
      aside.classList.remove('translate-x-0');
      aside.classList.add('-translate-x-full');
});

function toggleResposta(index) {
  const todasPerguntas = document.querySelectorAll('.pergunta');

  todasPerguntas.forEach((pergunta, i) => {
    const seta = pergunta.querySelector('.ico');
    if (i === index) {
      pergunta.classList.toggle('ativa');
      pergunta.classList.toggle('ht');

    if (pergunta.classList.contains('ativa')) {
        seta.style.transform = 'rotate(180deg)';
      } else {
        seta.style.transform = 'rotate(0deg)';
      }
    }
  });
};