//Testimonial Data
const techQuotes = [
  {
    text: "This smartphone combines elegant design with powerful performance, redefining mobile productivity.",
    name: "Alice Smith",
    age: 28,
    job: "Engineer",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZmFjZXxlbnwwfHwwfHx8Mg%3D%3D",
  },
  {
    text: "The camera on this device captures stunning detail, making it a perfect tool for creators on the go.",
    name: "Bob Doll",
    age: 34,
    job: "Designer",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZmFjZXxlbnwwfHwwfHx8Mg%3D%3D",
  },
  {
    text: "With its intuitive interface, this tablet makes digital art accessible to anyone.",
    name: "Charlie Smyrna",
    age: 25,
    job: "Teacher",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    text: "This smartwatch seamlessly integrates fitness tracking with daily productivity, all in a sleek design.",
    name: "Dana Kosh",
    age: 42,
    job: "Doctor",
    image:
      "https://images.unsplash.com/photo-1506277886164-e25aa3f4ef7f?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    text: "The battery life on this laptop is a game changer for those constantly on the move.",
    name: "Evan Lee Donsh",
    age: 30,
    job: "Chef",
    image:
      "https://images.unsplash.com/photo-1502452213786-a5bc0a67e963?q=80&w=1925&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    text: "These noise-canceling headphones create a truly immersive listening experience.",
    name: "Fiona Johannson",
    age: 27,
    job: "Architect",
    image:
      "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGZhY2V8ZW58MHx8MHx8fDI%3D",
  },
  {
    text: "This new gaming console pushes the boundaries of graphics and performance.",
    name: "George Kapadokulo",
    age: 36,
    job: "Lawyer",
    image:
      "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    text: "The home assistant makes managing my daily tasks so much easier with voice commands.",
    name: "Hannah Doe",
    age: 29,
    job: "Journalist",
    image:
      "https://images.unsplash.com/photo-1468488718849-422a2a5efc03?q=80&w=1624&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    text: "This high-performance router ensures that I stay connected with minimal lag.",
    name: "Ivan Krotski",
    age: 31,
    job: "Software Developer",
    image:
      "https://images.unsplash.com/photo-1504199367641-aba8151af406?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    text: "The new e-reader is perfect for avid readers, with a display that's easy on the eyes.",
    name: "Tom Johnson",
    age: 33,
    job: "Photographer",
    image:
      "https://images.unsplash.com/photo-1715838854648-ea200803934a?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

// Variables
const box = document.querySelector(".testimonial-box");
const textEl = document.querySelector(".testimonial-text");
const authorEl = document.querySelector(".testimonial-author");
const professionEl = document.querySelector(".testimonial-profession");
const imageEl = document.querySelector(".testimonial-image");
const btnRightEl = document.querySelector(".btn-right");
const btnLeftEl = document.querySelector(".btn-left");
let currentPerson = 0;
function showPerson() {
  imageEl.src = techQuotes[currentPerson].image;
  textEl.textContent = techQuotes[currentPerson].text;
  authorEl.innerHTML = `${"&mdash;"} ${techQuotes[currentPerson].name}`;
  professionEl.textContent = techQuotes[currentPerson].job;
}

function animating() {
  box.style.animation = "fading 300ms linear both alternate-reverse";
  setTimeout(() => {
    box.style.animation = "none";
  }, 500);
}

// Default testimonial displayed
showPerson();

// Slider functionality
btnRightEl.addEventListener("click", () => {
  currentPerson++;
  if (currentPerson > techQuotes.length - 1) {
    currentPerson = 0;
  }
  animating();
  showPerson();
});

btnLeftEl.addEventListener("click", () => {
  currentPerson--;
  if (currentPerson < 0) {
    currentPerson = techQuotes.length - 1;
  }
  animating();
  showPerson();
});
