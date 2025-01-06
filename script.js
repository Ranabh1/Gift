// PIN System Functionality
const correctPin = "1201";
let enteredPin = "";

// Append digit to PIN
function appendDigit(digit) {
  if (enteredPin.length < 4) {
    enteredPin += digit;
    document.getElementById("pin-input").value = enteredPin;
  }
}

// Clear the PIN input
function clearPin() {
  enteredPin = "";
  document.getElementById("pin-input").value = "";
  document.getElementById("error-message").classList.remove("visible");
}

// Submit the PIN
function submitPin() {
  const errorMessage = document.getElementById("error-message");
  if (enteredPin === correctPin) {
    const overlay = document.getElementById("pin-overlay");
    overlay.style.display = "none";
  } else {
    errorMessage.textContent = "Incorrect pin. Please try again.";
    errorMessage.classList.add("visible");
    clearPin();
  }
}



// Scroll to Section
function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
}


// Bucket List Items
const bucketList = [
  { 
    icon: "💭", 
    title: "Fulfil that dream I saw", 
    description: "This is the moment that I really want to experience. I know it will take time, but still, this has to be the first point in the bucket list for me." 
  },
  { 
    icon: "✈️", 
    title: "Travel to our favourite places together", 
    description: "I want us to experience this world's beauty together. Travelling to different places, making countless memories, having fun, that's what I eagerly look forward to." 
  },
  { 
    icon: "📹", 
    title: "Do Instagram trends together", 
    description: "Well, this has been something that I really wanted to do. Everytime I see a cute trend on insta, I just imagine us doing that trend together one day. I wish we get to do such cute trends together." 
  },
  { 
    icon: "💌", 
    title: "Plan surprise dates", 
    description: "I mean, isn't this the bare minimum? Be ready for many surprise dates in the future<3" 
  },
  { 
    icon: "📸", 
    title: "Take photos together in a photobooth", 
    description: "I have always found the 'taking photos in a photobooth' trend really cute and romantic. I too want to have a photoshoot with you in a photobooth." 
  },
  { 
    icon: "🤝", 
    title: "Hold hands", 
    description: "I remember that you once said that physical touch isn't your love language. But, I can't help but fanatsize about the subtle intimacy and warmth in things like holding hands, giving a hug and all. I think it's really beautiful." 
  },
  { 
    icon: "✍️", 
    title: "Write letters for each other", 
    description: "We already write letters for each other and those letters are really speical to me. I want this tradition to live on between us, forever."
  },
  { 
    icon: "❤️", 
    title: "Always stay there for one another", 
    description: "I mean, this goes without saying. I was, I am, and I will always be there for you. Whether it's a rough time or a happy one, I promise I will stick beside you in every moment of our life."
  },
];

let currentIndex = 0;

function updateBucketItem() {
  const iconElement = document.querySelector(".bucket-item .icon");
  const titleElement = document.getElementById("bucket-title");
  const descriptionElement = document.getElementById("bucket-description");

  iconElement.textContent = bucketList[currentIndex].icon;
  titleElement.textContent = bucketList[currentIndex].title;
  descriptionElement.textContent = bucketList[currentIndex].description;
}

function nextItem() {
  currentIndex = (currentIndex + 1) % bucketList.length;
  updateBucketItem();
}

function previousItem() {
  currentIndex = (currentIndex - 1 + bucketList.length) % bucketList.length;
  updateBucketItem();
}

// Initialize first bucket list item
updateBucketItem();

//Open When
const flipbookMessages = [
  {
    title: "Open when you are happy",
    message: "Always stay happy, love. Cherish every moment of this life and never forget your importance. I love you<3",
  },
  {
    title: "Open when you are sad",
    message: "Talk to me if something is bothering you. There will be ups and downs in everyone's life. What matters is how we deal with them and move on. Remember, it is not just you, I am with you too. If there is some issue, we will solve it together.",
  },
  {
    title: "Open when you want to be loved",
    message: "You are already loved. Not just by me, by a lot of people. I am sorry if you felt you are not loved. I do and will always love you, no matter what.",
  },
  {
    title: "Open when you want to talk with me",
    message: "I am just a text or call away. I am always free to talk with you.",
  },
  {
    title: "Open when you feel you love me",
    message: "Know that I love you more<3",
  },
];

let currentPage = 0;

function updateFlipbook() {
  const titleElement = document.getElementById("open-when-title");
  titleElement.textContent = flipbookMessages[currentPage].title;
}

function flipPage(direction) {
  currentPage += direction;

  if (currentPage < 0) {
    currentPage = flipbookMessages.length - 1;
  } else if (currentPage >= flipbookMessages.length) {
    currentPage = 0;
  }

  updateFlipbook();
}

function revealMessage() {
  const messageElement = document.getElementById("open-when-message");
  const popup = document.getElementById("message-popup");

  messageElement.textContent = flipbookMessages[currentPage].message;
  popup.classList.remove("hidden");
}

function closePopup() {
  const popup = document.getElementById("message-popup");
  popup.classList.add("hidden");
}

// Initialize the first page
document.addEventListener("DOMContentLoaded", updateFlipbook);
