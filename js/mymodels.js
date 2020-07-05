

// dunyagoz Model
var dunyagozModal = document.getElementById("dunyagozModal");
var dunyagozbtn = document.getElementById("dunyagozbtn");
var dunyagozClosebtn = document.getElementById("dunyagozClosebtn");
dunyagozbtn.onclick = function() {
  dunyagozModal.style.display = "block";
}
dunyagozClosebtn.onclick = function() {
  dunyagozModal.style.display = "none";
}

// Mersin Model
var mersinModal = document.getElementById("mersinModal");
var mersinbtn = document.getElementById("mersinbtn");
var mersinClosebtn = document.getElementById("mersinClosebtn");
mersinbtn.onclick = function() {
  mersinModal.style.display = "block";
}
mersinClosebtn.onclick = function() {
  mersinModal.style.display = "none";
}

// Medicana Model
var medicanaModal = document.getElementById("medicanaModal");
var medicanabtn = document.getElementById("medicanabtn");
var medicanaClosebtn = document.getElementById("medicanaClosebtn");
medicanabtn.onclick = function() {
  medicanaModal.style.display = "block";
}
medicanaClosebtn.onclick = function() {
  medicanaModal.style.display = "none";
}

// Common
window.onclick = function(event) {
  if (event.target == dunyagozModal
    ||event.target == mersinModal
    ||event.target == medicanaModal) {
    dunyagozModal.style.display = "none";
    mersinModal.style.display = "none";
    medicanaModal.style.display = "none";
  }
}
