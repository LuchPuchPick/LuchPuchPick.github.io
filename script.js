
//loadeRRR

let mask = document.querySelector('.mask');

window.addEventListener('load', () => {
setTimeout(() => {
    mask.remove();
}, 1000);
});

//burger!

$(".burger").click(function () {
    if ($(".check-icon").is(":checked")) {
      $(".modal-window").css("display", "flex");
    } else {
      $(".modal-window").css("display", "none");
    }
  });

