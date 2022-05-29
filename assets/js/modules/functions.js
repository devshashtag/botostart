import { courseCardTemplate } from "/assets/js/modules/template.js";

// used for formating prices
function commafy(num) {
  if (num === "free") return num;

  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  ;
}

// used for calculate discount
function calcDiscount(discount, price) {
  // if price equal to 0 then it's free
  if (+price <= 0)
    return "free";

  // check if discount not empty
  if (!discount)
    return "";

  // remove % from number: 100% => 100
  let discountNumber = parseInt(discount.slice(0, -1));
  // convert price to number if it's a string
  price = parseInt(price);

  // if number is between 0 to 99 calculate price
  if (discountNumber < 100 && discountNumber > 0) {
    return (price * ((100 - discountNumber) / 100));
  }
  // for 100% discount return free
  else if (discountNumber >= 100) {
    return "free";
  }
  // for negative values return empty string
  return "";
}

// courses functions
function courseCards(courseCardsClass) {
  if (!courseCardsClass) {
    console.log("courseCardsClass is undefined");
    return;
  }

  const courseCardsElm = document.querySelector(courseCardsClass);

  fetch("/assets/js/data/courses.json")
    .then(response => response.json())
    .then(courses => {
      console.log(courses);
      courses.forEach(item => {
        const cardTemplate = courseCardTemplate(item);
        courseCardsElm.insertAdjacentHTML('beforeend', cardTemplate);
      });
    });
}


export {
  commafy,
  calcDiscount,
  courseCards
};