import { commafy, calcDiscount } from '/assets/js/modules/functions.js';

function courseCardTemplate(card) {
  const discount = commafy(calcDiscount(card.discount, card.price));
  const isFree = (discount === "free") ? true : false;
  const templateFooterDiscount = `<div class="discount">${isFree ? "– رایگان!" : discount}</div>`;

  // price
  if (+card.price === 0 && !discount) {
    card.price = "رایگان!";
  }

  // rating
  let rating = card.rating;
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
      <a href="${card.url}">
        <img src="${card.imageUrl}" alt="${card.imageAlt}">
      </a>
    </div>
    <!-- card icons -->
    <div class="card__icons">
      ${(card.videoUrl) ? `
      <div class="icon video-player" title="نمایش دمو">
        <a href="${card.videoUrl}" rel="nofollow">
          <i class="fas fa-play" aria-hidden="true"></i>
        </a>
      </div>` : ""}
      <div class="icon" title="ثبت نام دوره">
        <a href="?add-to-cart=${card.id}" rel="nofollow">
          <i class="fas fa-user-plus" aria-hidden="true"></i>
        </a>
      </div>
    </div>
    ${discount ? `
    <!--card discount -->
    <div class="card__discount">
      <div class="percent">${card.discount}</div>
      <div class="text">تخفیف</div>
    </div>`: ""}
  </div>

  <div class="card__body">
    <!-- card name -->
    <div class="card__title">
      <a href="${card.url}">${card.title}</a>
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
        <a href="${card.teacherProfile}">${card.teacher}</a>
      </div>
    </div>

    <!-- card footer -->
    <div class="card__footer">
      <!-- card students -->
      <div class="card__students">
        <i class="fas fa-users" aria-hidden="true"></i>
        <span>${commafy(card.students)}</span>
      </div>
      <!-- card price -->
      <div class="card__price${isFree ? " free" : ""}">
        ${discount ? templateFooterDiscount : ""}
        <div class="price">${commafy(card.price)}</div>
      </div>
    </div>
  </div>
</div>
<!--end card-->`;

  return templateCourseCard;
}

export { courseCardTemplate };