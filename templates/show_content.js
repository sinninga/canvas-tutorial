function showContent() {
  console.log('yoyoyoy');
  var proj = document.getElementById("projects");
  if (proj.style.display === "none") {
    proj.style.display = "block";
  } else {
    proj.style.display = "none";
  }
  var proj = document.getElementById("contact");
  if (proj.style.display === "block") {
    proj.style.display = "none";
  } else {
    proj.style.display = "none";
  }
}

function showContact() {
  console.log('yoyoyoy');
  var proj = document.getElementById("projects");
  if (proj.style.display === "block") {
    proj.style.display = "none";
  } else {
    proj.style.display = "none";
  }
  var proj = document.getElementById("contact");
  if (proj.style.display === "none") {
    proj.style.display = "block";
  } else {
    proj.style.display = "none";
  }
}
