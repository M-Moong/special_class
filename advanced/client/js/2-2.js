//  TWO 버튼을 클릭하면 PAGE02 나올 수 있도록.

const pages = ["page01", "page02", "page03"];

const nav = document.querySelector(".nav");
const [one, two, three] = nav.querySelectorAll(".nav li");
const contents = document.querySelector(".contents");

// 동적 랜더링

const createDIV = (data, className) => {
  if (!Array.isArray(data)) {
    let template = `
      <div class="${className}">${data}</div>
    `;
    return template;
  }

  return data.map(
    (item) => /* html */ `<div class="${className}">${item}</div>`
  );
};

const render = (node, data) => {
  node.insertAdjacentHTML("beforeend", data);
};

const div = createDIV(pages, "section");

div.forEach((item) => render(contents, item));

// 1. 태그를 생성  create
// 2. 생성된 태그를 가지고 뿌려줘야함 render

const handleTab = (e) => {
  let target = e.currentTarget;
  let tabIndex = target.dataset.tabIndex;

  for (let i = 0; i < 3; i++) {
    nav.classList.remove(`tab${i + 1}`);
  }

  nav.classList.add(`tab${tabIndex}`);
  contents.style.transform = `translateX(-${33.333 * (tabIndex - 1)}%)`;
};

one.addEventListener("click", handleTab);
two.addEventListener("click", handleTab);
three.addEventListener("click", handleTab);

// navList.forEach((item,index)=>{
//   item.addEventListener('click',()=>{

//     // for(let i = 0; i < 3;  i++){
//     //   nav.classList.remove(`tab${i}`);
//     // }

//     nav.classList.add(`tab${index}`)
//     contents.style.transform = `translateX(-${33.333 * index}%)`;
//   });
// })

// nav.addEventListener('click',(e)=>{
//   console.log( e.target.closest('li') );
// })

// event delegation
