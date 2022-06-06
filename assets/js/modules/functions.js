import { courseCardTemplate } from "/assets/js/modules/template.js";

// formating prices
function commafy(num) {
  if (num === "free" || num === "") return num;

  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  ;
}

// calculate discount
function calcDiscount(discount, price) {
  // if price equal to 0 then it's free
  // check if discount not empty
  if (+price <= 0 || !discount)
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

  // for negative and zero values return empty string
  return "";
}

// courses functions
function courseCards(courseCardsClass, coursesAPI) {
  if (!courseCardsClass) {
    console.log("courseCardsClass is undefined");
    return;
  }

  const courseCardsElm = document.querySelector(courseCardsClass);

  fetch(coursesAPI)
    .then(response => response.json())
    .then(courses => {
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