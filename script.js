const q1 = document.querySelector('.q1');
const q2 = document.querySelector('.q2');
const q3 = document.querySelector('.q3');
const q4 = document.querySelector('.q4');
const answer1 = document.getElementById('q1-answer');
const answer2 = document.getElementById('q2-answer');
const answer3 = document.getElementById('q3-answer');
const answer4 = document.getElementById('q4-answer');
const language = document.getElementById('language');
const switchElements = document.querySelectorAll('#switcher');
let isFrench = false;
let langu;
const french = [
    "Bonjour , je suis Mohamed",
    "Acceuil",
    "Projets",
    "FAQ RH",
    "Développeur Front End ",
    "À propos de moi",
    "Je suis Mohamed Fadel, c'est un plaisir de vous rencontrer. Le but de ce site est de servir d'extension à mon CV, de fournir des informations à des employeurs potentiels, tout en démontrant mes compétences en développement Web. Je l'ai fait parce que je cherche un emploi en ce moment. Je pense que cela peut nous faire gagner du temps sur le filtrage des appels et même sur l'entrevue.",
    "compétences",
    "Expérience",
    "Développeur front-end avec un accent principal sur JS",
    "Penetration Testing",
    "Projets",
    "Pour plus de projets, veuillez visiter mon Github",
    "Questions posées par les RH",
    "Informations de base",
    "Nom/prénom: Mohamed Fadel Moumeni",
    "Naissance: 25/01/2002",
    "Nationalité: Marocain",
    "les études: Université Ibnou Zohr",
    "Langues: Français / anglais / arabe",
    "Pourquoi avez-vous décidé de devenir programmeur?",
    " J'ai toujours voulu, j'ai étudié par moi-même et je suis prêt. J'aime résoudre des problèmes logiques, travailler avec des choses qui suivent des règles, être capable de faire quelque chose de précieux à partir de rien.",
    "Avec quelles technologies souhaitez-vous travailler?",
    " React et son écosystème (Redux, etc.), JavaScript partout, Node.js, Firebase .. etc.",
    "Combien de temps pouvez-vous commencer?",
    "Dans les 2 semaines suivant l'acceptation d'une offre. Peut-être plus tôt. Je voudrais commencer dès que possible moi-même."

];
const english = [
    " Hi, I'm Mohamed",
    "Home",
    "Projects",
    "HR FAQ",
    "Front end Developer",
    "About Me",
    "My name is Mohamed Fadel, it's a pleasure to meet you. The purpose of this site is to serve as an extension to my resume, provide information to potential employers, while also demonstrating my web development skills. I made it because I am looking for a job at the moment. I believe it can save us some time on screening calls and even the actual interview.",
    "Skills",
    "Experience",
    "Front-end developer with primary focus on JS",
    "Penetration Testing",
    "Projects",
    "For more projects please visit my Github",
    "Questions HR People Ask",
    "Basic information",
    "Name: Mohamed Fadel Moumeni",
    "Birthday: 25/01/2002",
    "Nationality: Moroccoan",
    "Study: Ibnou Zohr University",
    "Languages: French/English/Arabic",
    "Why have you decided to become a programmer?",
    " I always wanted to , have studied on my own, and I am ready. I like solving logical problems, working with things which follow rules, being able to make something valuable out of nothing.",
    "Which technologies do you want to work with?",
    " React and its ecosystem (Redux, etc), JavaScript everywhere, Node.js, Firebase .. etc",
    "How soon can you start?",
    "Within 2 weeks after accepting an offer. Perhaps sooner. I'd like to start ASAP myself."
];

function frenchStorage() {
    switchElements.forEach((el, index) => el.textContent = french[index]);
    localStorage.setItem('language', 'french');
    langu = "french";
}

function englishStorage() {
    switchElements.forEach((el, index) => el.textContent = english[index]);
    localStorage.setItem('language', 'english');
    langu = "english";
}

function switchLanguage(lang) {
    lang === "french" ? frenchStorage() : englishStorage()
}

function frenchLanguage() {
    isFrench = !isFrench;
    isFrench ? switchLanguage('french') : switchLanguage("english");
    console.log(langu);


}
language.addEventListener('click', frenchLanguage);


class TextScramble {
    constructor(el) {
        this.el = el
        this.chars = '!<>-_\\/[]{}—=+*^?#________'
        this.update = this.update.bind(this)
    }
    setText(newText) {
        const oldText = this.el.innerText
        const length = Math.max(oldText.length, newText.length)
        const promise = new Promise((resolve) => this.resolve = resolve)
        this.queue = []
        for (let i = 0; i < length; i++) {
            const from = oldText[i] || ''
            const to = newText[i] || ''
            const start = Math.floor(Math.random() * 40)
            const end = start + Math.floor(Math.random() * 40)
            this.queue.push({ from, to, start, end })
        }
        cancelAnimationFrame(this.frameRequest)
        this.frame = 0
        this.update()
        return promise
    }
    update() {
        let output = ''
        let complete = 0
        for (let i = 0, n = this.queue.length; i < n; i++) {
            let { from, to, start, end, char } = this.queue[i]
            if (this.frame >= end) {
                complete++
                output += to
            } else if (this.frame >= start) {
                if (!char || Math.random() < 0.28) {
                    char = this.randomChar()
                    this.queue[i].char = char
                }
                output += `<span class="dud">${char}</span>`
            } else {
                output += from
            }
        }
        this.el.innerHTML = output
        if (complete === this.queue.length) {
            this.resolve()
        } else {
            this.frameRequest = requestAnimationFrame(this.update)
            this.frame++
        }
    }
    randomChar() {
        return this.chars[Math.floor(Math.random() * this.chars.length)]
    }
}

// ——————————————————————————————————————————————————
// Example
// ——————————————————————————————————————————————————

const phrases = [
    'Neo,',
    'sooner or later',
    'you\'re going to realize',
    'just as I did',
    'that there\'s a difference',
    'between knowing the path',
    'and walking the path'
]

const el = document.querySelector('.text')
const fx = new TextScramble(el)

let counter = 0
const next = () => {
    fx.setText(phrases[counter]).then(() => {
        setTimeout(next, 800)
    })
    counter = (counter + 1) % phrases.length
}

next()



q1.addEventListener('click', () => {
    answer1.hidden = !answer1.hidden

})
q2.addEventListener('click', () => {
    answer2.hidden = !answer2.hidden
})
q3.addEventListener('click', () => {
    answer3.hidden = !answer3.hidden
})
q4.addEventListener('click', () => {
    answer4.hidden = !answer4.hidden
})

const currentLang = localStorage.getItem('language');
if (currentLang) {
    switchLanguage(currentLang);
}
