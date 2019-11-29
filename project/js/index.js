
function setup() {
  fillTemplate();
  colorTheme();
}

function fillTemplate() {
  let birth = new Date(profile.birth);
  // Profile image
  if (profile.picture != "") {
    $("#profileImg").attr("src", profile.picture);
  }
  $("#profileImg").attr("alt", profile.name);
  // About
  $("#smallName").text(profile.name);
  $("#name")
    .find(".first")
    .text(profile.name.split(" ")[0]);
  $("#name")
    .find(".second")
    .text(
      profile.name
        .split(" ")
        .slice(1)
        .join(" ")
    );
  document.getElementById("location").innerHTML = profile.location;
  document.getElementById(
    "age"
  ).innerHTML = `${birth.getFullYear()} / ${birth.getMonth() +
    1} / ${birth.getDate()}`;
  $("#email")
    .find(".email")
    .text(profile.email);
  document
    .getElementById("email")
    .setAttribute("href", "mailto:" + profile.email);
  $("#description")
    .find(".quote")
    .text(`"${profile.quote}"`);
  $("#description")
    .find(".description")
    .text(profile.description);
  // Social
  document
    .getElementById("linkedin")
    .setAttribute("href", profile.social.linkedin);
  document.getElementById("github").setAttribute("href", profile.social.github);
  document
    .getElementById("twitter")
    .setAttribute("href", profile.social.twitter);
  document
    .getElementById("stackoverflow")
    .setAttribute("href", profile.social.stackoverflow);
  document.getElementById("dev").setAttribute("href", profile.social.dev);
  document.getElementById("bio-text").innerHTML = profile.bio;
  // Experience
  for (var i = 0; i < profile.experience.length; i++) {
    var experienceTemplate = $("#credsTemplate");
    experienceTemplate.find(".mb-0").text(profile.experience[i].title);
    experienceTemplate.find(".mb-3").text(profile.experience[i].company);
    experienceTemplate.find("p").text(profile.experience[i].description);
    experienceTemplate.find(".location").text(profile.experience[i].location);
    experienceTemplate
      .find(".date")
      .text(profile.experience[i].from + " - " + profile.experience[i].to);

    $("#experienceContainer").append(experienceTemplate.html());
    if (i < profile.experience.length - 1)
      $("#experienceContainer").append(document.createElement("hr"));
  }
  // Education
  for (var i = 0; i < profile.education.length; i++) {
    var educationTemplate = $("#credsTemplate");
    educationTemplate.find(".mb-0").text(profile.education[i].school);
    educationTemplate.find(".mb-3").text(profile.education[i].degree);
    educationTemplate.find("p").text(profile.education[i].fieldOfStudy);
    educationTemplate.find(".location").text(profile.education[i].location);
    educationTemplate
      .find(".date")
      .text(profile.education[i].from + " - " + profile.education[i].to);

    $("#educationContainer").append(educationTemplate.html());
    if (i < profile.education.length - 1)
      $("#educationContainer").append(document.createElement("hr"));
  }
  // Skills
  for (var skill in profile.skills) {
    var skillItem = document.createElement("div");
    skillItem.innerHTML = profile.skills[skill];
    skillItem.classList.add("nightsky-skill");
    $("#skillsContainer").append(skillItem);
  }
}

function colorTheme() {
  switch (page.theme) {
    case "nightsky":
      break;

    case "sunset":
      $("#sideNav").css("background", "#c94c4c");
      $("h1").css("color", "#c94c4c");
      $("h2").css("color", "#eea29a");
      $("#email").addClass("sunset-text");
      $(".second").css("color", "#eea29a");
      $(".social-icons > a").addClass("sunset-social");
      $("#skillsContainer > div").addClass("sunset-skill");
      break;

    case "purpledream":
      $("#sideNav").css("background", "#b0aac0");
      $("h1").css("color", "#b0aac0");
      $("h2").css("color", "#c2d4dd");
      $("#email").addClass("purpledream-text");
      $(".second").css("color", "#c2d4dd");
      $(".social-icons > a").addClass("purpledream-social");
      $("#skillsContainer > div").addClass("purpledream-skill");
      break;

    case "cutekitty":
      $("#sideNav").css("background", "#e06377");
      $("h1").css("color", "#e06377");
      $("h2").css("color", "#f9d5e5");
      $("#email").addClass("cutekitty-text");
      $(".second").css("color", "#f9d5e5");
      $(".social-icons > a").addClass("cutekitty-social");
      $("#skillsContainer > div").addClass("cutekitty-skill");
      break;

    default:
      break;
  }
}

(function($) {
  "use strict";

  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (
      location.pathname.replace(/^\//, "") ==
        this.pathname.replace(/^\//, "") &&
      location.hostname == this.hostname
    ) {
      var target = $(this.hash);
      target = target.length ? target : $("[name=" + this.hash.slice(1) + "]");
      if (target.length) {
        $("html, body").animate(
          {
            scrollTop: target.offset().top
          },
          1000,
          "easeInOutExpo"
        );
        return false;
      }
    }
  });

  $(".js-scroll-trigger").click(function() {
    $(".navbar-collapse").addClass("hide");
  });

  $("body").scrollspy({
    target: "#sideNav"
  });
})(jQuery);
