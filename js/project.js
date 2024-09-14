import getRandomColor from "./random.js";

const spring = document.getElementById("spring");
const hibernate = document.getElementById("hibernate");
const thymleaf = document.getElementById("thymleaf");
const react = document.getElementById("react");
const servlet = document.getElementById("servlet");
const projects = document.getElementById("projects");

// reading data from data.json file
let data;
let xhr = new XMLHttpRequest();
xhr.open("GET", "./data/project_data/data.json");
xhr.onload = function () {
  if (xhr.status === 200) {
    data = JSON.parse(xhr.responseText);
  }
};
xhr.send();

// filtering data list by project type
function filterData(component, name) {
  console.log("click");

  let list = [];
  for (let i = 0; i < data.length; i++) {
    if (data[i].type == name) {
      list.push(data[i]);
    }
  }

  setAllButtonDefault();
  component.style.color = "white";
  component.style.backgroundColor = "rgb(168 85 247 / var(--tw-bg-opacity))";

  renderList(list);
}

function setAllButtonDefault() {
  spring.style.color = "black";
  spring.style.backgroundColor = "rgb(243 232 255)";
  hibernate.style.color = "black";
  hibernate.style.backgroundColor = "rgb(243 232 255)";
  thymleaf.style.color = "black";
  thymleaf.style.backgroundColor = "rgb(243 232 255)";
  react.style.color = "black";
  react.style.backgroundColor = "rgb(243 232 255)";
  servlet.style.color = "black";
  servlet.style.backgroundColor = "rgb(243 232 255)";
}

function renderList(list) {
  projects.innerHTML = "";
  for (let i = 0; i < list.length; i++) {
    projects.insertAdjacentHTML(
      "beforeend",
      '<div class="bg-purple-50 w-[350px] shadow-lg m-6"><ul class="bg-' +
        getRandomColor() +
        '-300 p-4 pb-0 flex rounded-xl"><li><img class="rounded-t-[10px] h-[340px] w-[320px]" src="./jpg/project/' +
        list[i].image +
        '" alt="project SS"></li></ul><div class="px-8 py-4"><h3 class="font-bold text-xl mt-4">' +
        list[i].name +
        '</h3><p class="my-4">' +
        list[i].about +
        '</p><a class="border-b-[2px]  border-purple-500 pb-1 rounded-[4px]" target="_blank" href="' +
        list[i].code +
        '"><div class="inline font-medium relative top-[1px]">Code</div><img class="inline" src="./svg/Link.svg" alt="click"></a></div></div>'
    );
  }
}

spring.addEventListener("click", () => filterData(spring, "spring"));
hibernate.addEventListener("click", () => filterData(hibernate, "hibernate"));
thymleaf.addEventListener("click", () => filterData(thymleaf, "thymeleaf"));
react.addEventListener("click", () => filterData(react, "react"));
servlet.addEventListener("click", () => filterData(servlet, "servlet"));
