import { commafy, calcDiscount } from '/assets/js/modules/functions.js';

function courseCardTemplate(item) {
  const discount = commafy(calcDiscount(item.discount, item.price));
  const isFree = (discount === "free") ? true : false;
  const templateFooterDiscount = `<div class="discount">${isFree ? "– رایگان!" : discount}</div>`;

  // price
  if (+item.price === 0 && !discount) {
    item.price = "رایگان!";
  }

  // rating
  let rating = item.rating;
  if (rating > 5) rating = 5;
  else if (rating < 0) rating = 0;

  let ratingTitle = 'هنوز امتیازی ثبت نشده است';
  if (rating > 0 && rating <= 5)
    ratingTitle = `دارای امتیاز ${rating} از 5`;

  // template Course Card
  const templateCourseCard = `
<!-- card -->
<div class="course__card">
  <div class="card__header">
    <!-- card image -->
    <div class="card__image">
      <a href="${item.url}">
        <img src="${item.imageUrl}" alt="${item.imageAlt}">
      </a>
    </div>
    <!-- card icons -->
    <div class="card__icons">
      ${(item.videoUrl) ? `
      <div class="icon video-player" title="نمایش دمو">
        <a href="${item.videoUrl}" rel="nofollow">
          <i class="fas fa-play" aria-hidden="true"></i>
        </a>
      </div>` : ""}
      <div class="icon" title="ثبت نام دوره">
        <a href="?add-to-cart=${item.id}" rel="nofollow">
          <i class="fas fa-user-plus" aria-hidden="true"></i>
        </a>
      </div>
    </div>
    ${discount ? `
    <!--card discount -->
    <div class="card__discount">
      <div class="percent">${item.discount}</div>
      <div class="text">تخفیف</div>
    </div>`: ""}
  </div>

  <div class="card__body">
    <!-- card name -->
    <div class="card__title">
      <a href="${item.url}">${item.title}</a>
    </div>

    <!-- card details -->
    <div class="card__details">
      <!-- rating -->
      <div class="card__rating" title="${ratingTitle}">
        <div class="rating" style="width:${rating * 20}%"></div>
      </div>
      <!-- teacher -->
      <div class="card__teacher">
        <i class="fas fa-chalkboard-teacher" aria-hidden="true"></i>
        <a href="${item.teacherProfile}">${item.teacher}</a>
      </div>
    </div>

    <!-- card footer -->
    <div class="card__footer">
      <!-- card students -->
      <div class="card__students">
        <i class="fas fa-users" aria-hidden="true"></i>
        <span>${commafy(item.students)}</span>
      </div>
      <!-- card price -->
      <div class="card__price${isFree ? " free" : ""}">
        ${discount ? templateFooterDiscount : ""}
        <div class="price">${commafy(item.price)}</div>
      </div>
    </div>
  </div>
</div>
<!--end card-->`;

  return templateCourseCard;
}

export { courseCardTemplate };