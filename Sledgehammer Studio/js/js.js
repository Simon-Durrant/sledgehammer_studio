
  $(document).ready(function() {
    $('.carousel').slick({
      autoplay: true,
      dots: true,
      autoplaySpeed: 3000,
      arrows: false,
      // centerMode: true,
      // appendArrows: $(".carousel"),
      zIndex: 0
    });
  });

  $(document).herbyCookie({
    style: "dark",
    btnText: "Alrighty then!",
    policyText: "Privacy policy",
    text: "Give me cookies!",
    expireDays: 1
  });

  $(".main").tiltedpage_scroll({
      sectionContainer: "> section",     // In case you don't want to use <section> tag, you can define your won CSS selector here
      angle: 25,                         // You can define the angle of the tilted section here. Change this to false if you want to disable the tilted effect. The default value is 50 degrees.
      opacity: true,                     // You can toggle the opacity effect with this option. The default value is true
      scale: true,                       // You can toggle the scaling effect here as well. The default value is true.
      outAnimation: true                 // In case you do not want the out animation, you can toggle this to false. The defaul value is true.
    });
