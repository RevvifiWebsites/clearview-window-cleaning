window.onload = function () {
  $("#mbar").click(function () {
    $("#mshadow").css("display","block")
    $("#menu").css("display", "block")
    $("#menulinks").css("display", "flex")
    $("#mx").css("display", "block")
    
    $("#mshadow").animate({
      opacity:0.5
    }, 500)
    $("#menu").animate({
      width:300,
      opacity:1,
    }, 500, function () {
      $("#menulinks").animate({
        opacity: 1
      }, 300)
    })
    $("#mx").animate({
      opacity:1,
    }, 500)
  })
  $("#mx").click(function() {
    $("#menulinks").animate({
      opacity: 0
    }, 100, function() {
      $("#menu").animate({
        width: 0,
        opacity: 0,
      }, 400)
       $("#mx").animate({
        opacity: 0,
      }, 400, function() {
        $("#mshadow").css("display", "none")
        $("#menu").css("display", "none")
        $("#menulinks").css("display", "none")
      })
    })
    $("#mshadow").animate({
      opacity: 0
    }, 500)


  })
  $("#nav-icon").click(function() {
    window.location.href="/"

  })
  console.log('ea')
  $(".linkau").click(function() {
    window.location.href="/services.html"
  })
  $(".linkgq").click(function () {
    window.location.href = "/quote.html"
  })
  $(".linkcu").click(function () {
    window.location.href = "/contact.html"
  })
  $(".linkop").click(function () {
    window.location.href = "/process.html"
  })
}