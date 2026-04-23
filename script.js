const menuItems =["Latte", "Espresso", "Green Tea", "Iced Coffee", "Pinol", "Café Con Leche", "Milk", "Juice", "Sweet Tea"];

const menuList = document.getElementById("menu-list");

 menuItems.forEach(menuNames => { const newListItem = document.createElement("li");
                         newListItem.innerText = menuNames;
 menuList.appendChild(newListItem);
});

const button = document.getElementById("show-special");
const display = document.getElementById("daily-special");

button.addEventListener("click", () => {
  const randomItem = menuItems[Math.floor(Math.random() * menuItems.length)];
  display.textContent = `Today's Special: ${randomItem}`;
});
const toggleBtn = document.getElementById("toggle-mode");
const body = document.body;
const img = document.getElementById("cafe-img");

toggleBtn.addEventListener("click", () => {
  body.classList.toggle("night-mode");

  if (body.classList.contains("night-mode")) {
    toggleBtn.textContent = "Switch to Day Mode";
    img.src = "https://www.dropbox.com/scl/fi/y0g18tk42rhl1ujvdsm59/cafenight.png?rlkey=zada5cnnnkbj14688rn5iuxzb&st=ektq7uci&raw=1";
  } else {
    toggleBtn.textContent = "Switch to Night Mode";
    img.src = "https://www.dropbox.com/scl/fi/q39vz0meps4agbthtl95t/cafeday.jpg?rlkey=hhcz9whzd6iabzfi0ro6t0uaz&st=o6hxonsq&raw=1";
  }
});

const questions = document.querySelectorAll(".faq-question");

questions.forEach((question) => {
  question.addEventListener("click", () => {
    const answer = question.nextElementSibling;
    answer.classList.toggle("show");
  });
});
