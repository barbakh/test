$(function () {
  $("button").click(function () {
    var font = $(".fontFamily").val();
    var weight = $(".weight").val();
    var color = $(".color").val();
    var back = $(".background").val();
    var border = $(".border").val();
    var padding = $(".padding").val();
    var margin = $(".margin").val();
    var width = $(".width").val();
    var height = $(".height").val();
    var align = $(".align").val();
    var radius = $(".radius").val();
    $(".test").css({
      fontFamily: font,
      fontWeight: weight,
      color: color,
      backgroundColor: back,
      border: border,
      padding: padding,
      margin: margin,
      width: width,
      height: height,
      textAlign: align,
      borderRadius: radius,
    });

    var text1 = $(".fontFamily").val();
    $(".sp1").text("The fontFamily Value: " + text1);

    var text2 = $(".weight").val();
    $(".sp2").text("The fontWeight Value: " + text2);

    var text3 = $(".background").val();
    $(".sp3").text("The backgroundColor Value: " + text3);

    var text4 = $(".color").val();
    $(".sp4").text("The Color Value: " + text4);

    var text5 = $(".width").val();
    $(".sp5").text("The Width Value: " + text5);

    var text6 = $(".height").val();
    $(".sp6").text("The Height Value: " + text6);

    var text7 = $(".padding").val();
    $(".sp7").text("The Padding Value: " + text7);

    var text8 = $(".margin").val();
    $(".sp8").text("The Margin Value: " + text8);

    var text9 = $(".border").val();
    $(".sp9").text("The Border Value: " + text9);

    var text10 = $(".radius").val();
    $(".sp10").text("The borderRadius Value: " + text10);

    var text11 = $(".align").val();
    $(".sp11").text("The textAlign Value: " + text11);

    var newText = $(".changeText").val();
    $(".test").text(newText);

    var text12 = $(".changeText").val();
    $(".sp12").html("The nweText:<br>" + text12);
  });
});
