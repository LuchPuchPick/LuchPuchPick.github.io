
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



  $(".burger").click(function () {
    if ($(".check-icon").is(":checked")) {
      $(".logo").css("display", "none");
    } else {
      $(".logo").css("display", "flex");
    }
  });

  //act-btт
  
    $(document).ready(function(){
      let hiddenRow = $(".expandable");
      $(".act-button").click(function(){
        hiddenRow.toggleClass("hidden")
        if (hiddenRow.is(":visible")){
          $(".act-button").html("Свернуть")
        }
        else {
          $(".act-button").html("Развернуть")
        }
      })
    })
    
