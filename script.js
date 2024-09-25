document.addEventListener("DOMContentLoaded", function () {
  function showSlidesAfterLoading() {
    document.querySelector(".loading-container").style.display = "none";
    document.querySelector(".container").style.display = "block";
    document.getElementById("slide1").classList.add("active");
  }

  setTimeout(showSlidesAfterLoading, 3000);
});

// btns//
document.addEventListener("DOMContentLoaded", function () {
  const slides = document.querySelectorAll(".slide");
  let currentSlide = 0;

  // Function to show a specific slide
  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.style.display = i === index ? "block" : "none";

      // Toggle 'required' attribute based on visibility
      slide.querySelectorAll("input, textarea, select").forEach((input) => {
        if (i === index) {
          input.setAttribute("required", "true");
        } else {
          input.removeAttribute("required");
        }
      });
    });
  }

  // Initialize the first slide
  showSlide(currentSlide);

  // Function to go to the next slide
  function nextSlide() {
    if (currentSlide < slides.length - 1) {
      currentSlide++;
      showSlide(currentSlide);
    }
  }

  // Function to go to the previous slide
  function prevSlide() {
    if (currentSlide > 0) {
      currentSlide--;
      showSlide(currentSlide);
    }
  }

  // Event listeners for the buttons
  document.querySelectorAll(".btns").forEach((button) => {
    button.addEventListener("click", function (event) {
      event.preventDefault(); // Prevent form submission and page refresh

      if (this.textContent.trim() === "NEXT") {
        nextSlide();
      } else if (this.textContent.trim() === "PREV") {
        prevSlide();
      } else if (this.textContent.trim() === "START") {
        nextSlide();
      } else if (this.textContent.trim() === "Submit") {
        alert("Form submitted!");
      }
    });
  });
});

// Show the next slide and hide the current slide
// function nextSlide() {
//     if (currentSlide < slides.length - 1) {
//         slides[currentSlide].querySelectorAll('input, textarea, select').forEach(input => {
//             input.removeAttribute('required');
//         });
//         currentSlide++;
//         showSlide(currentSlide);
//         slides[currentSlide].querySelectorAll('input, textarea, select').forEach(input => {
//             input.setAttribute('required', 'true');
//         });
//     }
// }

// slide 2//
function updateValue(value) {
  const emojis = ["👶", "🎓", "💼", "🏆", "🎉"];
  const labels = document.querySelectorAll(".range-label");

  labels.forEach((label, index) => {
    if (index == value) {
      label.classList.add("active");
    } else {
      label.classList.remove("active");
    }
  });

  // Display selected emoji or do something with the value
  console.log("Selected age group emoji:", emojis[value]);
}
function updateValue(value) {
  // Remove active class from all labels
  const labels = document.querySelectorAll(".range-label");
  labels.forEach((label) => label.classList.remove("active"));

  // Add active class to the selected label
  const activeLabel = document.getElementById(`label-${value}`);
  if (activeLabel) {
    activeLabel.classList.add("active");
  }
}

// slide 3 //
function toggleOtherField(show) {
  var otherTextField = document.getElementById("otherTextField");
  if (show) {
    otherTextField.style.display = "block";
  } else {
    otherTextField.style.display = "none";
  }
}

// slide5//

var stateObject = {
  India: {
    "Tamil Nadu": [
      "Chennai",
      "Coimbatore",
      "Madurai",
      "Tiruchirappalli",
      "Salem",
      "Tirunelveli",
      "Tiruppur",
      "Ranipet",
      "Nagercoil",
      "Thanjavur",
      "Vellore",
      "Kancheepuram",
      "Erode",
      "Tiruvannamalai",
      "Pollachi",
      "Rajapalayam",
      "Sivakasi",
      "Pudukkottai",
      "Neyveli (TS)",
      "Nagapattinam",
      "Viluppuram",
      "Tiruchengode",
      "Vaniyambadi",
      "Theni Allinagaram",
      "Udhagamandalam",
      "Aruppukkottai",
      "Paramakudi",
      "Arakkonam",
      "Virudhachalam",
      "Srivilliputhur",
      "Tindivanam",
      "Virudhunagar",
      "Karur",
      "Valparai",
      "Sankarankovil",
      "Tenkasi",
      "Palani",
      "Pattukkottai",
      "Tirupathur",
      "Ramanathapuram",
      "Udumalaipettai",
      "Gobichettipalayam",
      "Thiruvarur",
      "Thiruvallur",
      "Panruti",
      "Namakkal",
      "Thirumangalam",
      "Vikramasingapuram",
      "Nellikuppam",
      "Rasipuram",
      "Tiruttani",
      "Nandivaram-Guduvancheri",
      "Periyakulam",
      "Pernampattu",
      "Vellakoil",
      "Sivaganga",
      "Vadalur",
      "Rameshwaram",
      "Tiruvethipuram",
      "Perambalur",
      "Usilampatti",
      "Vedaranyam",
      "Sathyamangalam",
      "Puliyankudi",
      "Nanjikottai",
      "Thuraiyur",
      "Sirkali",
      "Tiruchendur",
      "Periyasemur",
      "Sattur",
      "Vandavasi",
      "Tharamangalam",
      "Tirukkoyilur",
      "Oddanchatram",
      "Palladam",
      "Vadakkuvalliyur",
      "Tirukalukundram",
      "Uthamapalayam",
      "Surandai",
      "Sankari",
      "Shenkottai",
      "Vadipatti",
      "Sholingur",
      "Tirupathur",
      "Manachanallur",
      "Viswanatham",
      "Polur",
      "Panagudi",
      "Uthiramerur",
      "Thiruthuraipoondi",
      "Pallapatti",
      "Ponneri",
      "Lalgudi",
      "Natham",
      "Unnamalaikadai",
      "P.N.Patti",
      "Tharangambadi",
      "Tittakudi",
      "Pacode",
      "O' Valley",
      "Suriyampalayam",
      "Sholavandan",
      "Thammampatti",
      "Namagiripettai",
      "Peravurani",
      "Parangipettai",
      "Pudupattinam",
      "Pallikonda",
      "Sivagiri",
      "Punjaipugalur",
      "Padmanabhapuram",
      "Thirupuvanam",
    ],

    Kerala: [
      "Thiruvananthapuram",
      "Kochi",
      "Kozhikode",
      "Kollam",
      "Thrissur",
      "Palakkad",
      "Alappuzha",
      "Malappuram",
      "Ponnani",
      "Vatakara",
      "Kanhangad",
      "Taliparamba",
      "Koyilandy",
      "Neyyattinkara",
      "Kayamkulam",
      "Nedumangad",
      "Kannur",
      "Tirur",
      "Kottayam",
      "Kasaragod",
      "Kunnamkulam",
      "Ottappalam",
      "Thiruvalla",
      "Thodupuzha",
      "Chalakudy",
      "Changanassery",
      "Punalur",
      "Nilambur",
      "Cherthala",
      "Perinthalmanna",
      "Mattannur",
      "Shoranur",
      "Varkala",
      "Paravoor",
      "Pathanamthitta",
      "Peringathur",
      "Attingal",
      "Kodungallur",
      "Pappinisseri",
      "Chittur-Thathamangalam",
      "Muvattupuzha",
      "Adoor",
      "Mavelikkara",
      "Mavoor",
      "Perumbavoor",
      "Vaikom",
      "Palai",
      "Panniyannur",
      "Guruvayoor",
      "Puthuppally",
      "Panamattom",
    ],
    Karnataka: [
      "Bengaluru",
      "Hubli-Dharwad",
      "Belagavi",
      "Mangaluru",
      "Davanagere",
      "Ballari",
      "Mysore",
      "Tumkur",
      "Shivamogga",
      "Raayachuru",
      "Robertson Pet",
      "Kolar",
      "Mandya",
      "Udupi",
      "Chikkamagaluru",
      "Karwar",
      "Ranebennuru",
      "Ranibennur",
      "Ramanagaram",
      "Gokak",
      "Yadgir",
      "Rabkavi Banhatti",
      "Shahabad",
      "Sirsi",
      "Sindhnur",
      "Tiptur",
      "Arsikere",
      "Nanjangud",
      "Sagara",
      "Sira",
      "Puttur",
      "Athni",
      "Mulbagal",
      "Surapura",
      "Siruguppa",
      "Mudhol",
      "Sidlaghatta",
      "Shahpur",
      "Saundatti-Yellamma",
      "Wadi",
      "Manvi",
      "Nelamangala",
      "Lakshmeshwar",
      "Ramdurg",
      "Nargund",
      "Tarikere",
      "Malavalli",
      "Savanur",
      "Lingsugur",
      "Vijayapura",
      "Sankeshwara",
      "Madikeri",
      "Talikota",
      "Sedam",
      "Shikaripur",
      "Mahalingapura",
      "Mudalagi",
      "Muddebihal",
      "Pavagada",
      "Malur",
      "Sindhagi",
      "Sanduru",
      "Afzalpur",
      "Maddur",
      "Madhugiri",
      "Tekkalakote",
      "Terdal",
      "Mudabidri",
      "Magadi",
      "Navalgund",
      "Shiggaon",
      "Shrirangapattana",
      "Sindagi",
      "Sakaleshapura",
      "Srinivaspur",
      "Ron",
      "Mundargi",
      "Sadalagi",
      "Piriyapatna",
      "Adyar",
    ],
  },
  Australia: {
    "South Australia": ["Dunstan", "Mitchell"],
    Victoria: ["Altona", "Euroa"],
  },
  Canada: {
    Alberta: ["Acadia", "Bighorn"],
    Columbia: ["Washington", ""],
  },
};
window.onload = function () {
  var countySel = document.getElementById("countySel"),
    stateSel = document.getElementById("stateSel"),
    districtSel = document.getElementById("districtSel");
  for (var country in stateObject) {
    countySel.options[countySel.options.length] = new Option(country, country);
  }
  countySel.onchange = function () {
    stateSel.length = 1; // remove all options bar first
    districtSel.length = 1; // remove all options bar first
    if (this.selectedIndex < 1) return; // done
    for (var state in stateObject[this.value]) {
      stateSel.options[stateSel.options.length] = new Option(state, state);
    }
  };
  countySel.onchange(); // reset in case page is reloaded
  stateSel.onchange = function () {
    districtSel.length = 1; // remove all options bar first
    if (this.selectedIndex < 1) return; // done
    var district = stateObject[countySel.value][this.value];
    for (var i = 0; i < district.length; i++) {
      districtSel.options[districtSel.options.length] = new Option(
        district[i],
        district[i]
      );
    }
  };
};

// slide7//
// document.addEventListener('DOMContentLoaded', function() {
//     const funSlider = document.getElementById('fun-slider');
//     const emojiLabels = document.querySelectorAll('.emoji-labels span');

//     funSlider.addEventListener('input', function() {
//         const value = parseInt(funSlider.value);
//         emojiLabels.forEach((emoji, index) => {
//             if (index + 1 === value) {
//                 emoji.style.fontSize = '2em';
//             } else {
//                 emoji.style.fontSize = '1.5em';
//             }
//         });
//     });
// });
// function updateEmojiValue() {
//     var slider = document.getElementById("fun-slider");
//     var emojiDisplay = document.getElementById("emoji-display");
//     var emojiText = document.getElementById("emoji-text");

//     // Define emojis and text labels based on slider values
//     var emojiMap = {
//         1: { emoji: "😐", text: "Dull" },
//         2: { emoji: "😕", text: "Slightly Enjoy" },
//         3: { emoji: "😊", text: "Enjoyed" },
//         4: { emoji: "😄", text: "Very Enjoy" },
//         5: { emoji: "🎉", text: "Blasted" }
//     };

//     emojiDisplay.textContent = emojiMap[slider.value].emoji;
//     emojiText.textContent = emojiMap[slider.value].text;
// }

// updateEmojiValue();
// Function to show the meaning of the selected emoji
function updateSlider(value) {
  // Clear previous selections
  const allWrappers = document.querySelectorAll(".emoji-wrapper");
  allWrappers.forEach((wrapper) => {
    wrapper.classList.remove("active");
  });

  // Show the value under the clicked emoji
  const selectedWrapper = document.querySelector(
    `#emoji-value-${value}`
  ).parentElement;
  selectedWrapper.classList.add("active"); // Make the clicked emoji's value visible

  // Update the hidden input with the selected value
  document.getElementById("fun-meter-value").value = value;

  // Display the selected value (linear scale) for user feedback
  document.getElementById(
    "slider-value-display"
  ).innerText = `Selected Value: ${value}`;
}

// slide8//

function updateRelatabilitySlider(value) {
  // Set the value of the hidden input field
  document.getElementById("meter-value").value = value;

  // Hide all text-emojis
  const textEmojis = document.querySelectorAll(".text-emojis");
  textEmojis.forEach((text) => {
    text.style.display = "none";
  });

  // Show the selected text-emoji
  const selectedText = document.getElementById(`value-${value}`);
  if (selectedText) {
    selectedText.style.display = "block";
  }
}

// Optional: Add some CSS to initially hide the text-emojis except the first one
document.addEventListener("DOMContentLoaded", function () {
  const textEmojis = document.querySelectorAll(".text-emojis");
  textEmojis.forEach((text, index) => {
    // Hide all except the first
    if (index !== 0) {
      text.style.display = "none";
    }
  });
});

// slide9//
// Function to update the slider value display
// Get references to the slider and the display elements
const learningImpactSlider = document.getElementById('learning-impact');
const learningImpactValue = document.getElementById('learning-impact-value');

// Function to update the displayed value and emoji based on the slider position
function updateLearningImpact() {
    const value = parseInt(learningImpactSlider.value);
    
    // Update the text based on the slider value
    if (value < 33) {
        learningImpactValue.innerText = 'not useful'; // or adjust as needed
    } else if (value < 66) {
        learningImpactValue.innerText = 'moderate';
    } else {
        learningImpactValue.innerText = 'very useful';
    }
}

// Initial update to set the correct value on page load
updateLearningImpact();

// Event listener for when the slider value changes
learningImpactSlider.addEventListener('input', updateLearningImpact);


// slide10//
// JavaScript to handle star rating
document.querySelectorAll(".stars .fa-star").forEach((star) => {
  star.addEventListener("click", () => {
    let value = star.getAttribute("data-value");
    highlightStars(value);
    // Store the rating value if needed
    console.log("Rating:", value);
  });
});

function highlightStars(rating) {
  document.querySelectorAll(".stars .fa-star").forEach((star) => {
    if (star.getAttribute("data-value") <= rating) {
      star.classList.add("checked");
    } else {
      star.classList.remove("checked");
    }
  });
}

// function updateFunMeter(value) {

//     document.getElementById('selected-fun-level').value = value;

//     const emojis = document.querySelectorAll('.emoji-labeler .emoji-label');

//     emojis.forEach((emoji, index) => {

//         if (index + 1 == value) {
//             emoji.classList.add('highlighted');
//         } else {
//             emoji.classList.remove('highlighted');
//         }
//     });
// }
const emojiMeanings = {
  1: "Very Boring",
  2: "Not Engaging",
  3: "Somewhat Engaging",
  4: "Very Engaging",
  5: "Extremely Fun",
};

function updateFunMeter(value) {
  showEmojiMeaning(value);
}

function showEmojiMeaning(value) {
  const meaningDiv = document.getElementById("emoji-meaning");
  const allEmojis = document.querySelectorAll(".emoji-label");

  // Remove active class from all emojis
  allEmojis.forEach((emoji) => emoji.classList.remove("active"));

  // Add active class to the clicked emoji
  const activeEmoji = document.querySelector(
    `.emoji-label[data-value="${value}"]`
  );
  activeEmoji.classList.add("active");

  // Update and animate the meaning
  meaningDiv.textContent = emojiMeanings[value]; // Display emoji meaning
  meaningDiv.setAttribute("data-value", value); // Apply styling for each value

  // Show the meaning with animation
  meaningDiv.classList.add("show");
}
// slide11//
function updateQualityEmoji() {
  var slider = document.getElementById("quality");
  var emojiDisplay = document.getElementById("label_called");
  var emojiText = document.getElementById("texting");

  // Define emojis and text labels based on slider values
  var emojiMap = {
    1: { emoji: "😟", text: "Poor" },
    2: { emoji: "😕", text: "Fair" },
    3: { emoji: "😐 ", text: "Neutral" },
    4: { emoji: "😃", text: "Good" },
    5: { emoji: "🌟 ", text: "Excellent" },
  };

  // Update the emoji and text based on the current slider value
  emojiDisplay.textContent = emojiMap[slider.value].emoji;
  emojiText.textContent = emojiMap[slider.value].text;
}

updateQualityEmoji();

// slide13//
// Function to show and hide the contact details
document
  .getElementById("contact-consent")
  .addEventListener("change", function () {
    const contactDetails = document.getElementById("contact-details");
    if (this.checked) {
      contactDetails.style.display = "block";
    } else {
      contactDetails.style.display = "none";
    }
  });

// Function to show the toast message on form submission
document
  .querySelector('.btns[type="submit"]')
  .addEventListener("click", function (event) {
    event.preventDefault(); // Prevent form from submitting for demo purpose
    const toast = document.getElementById("toast");
    toast.className = "toast show";

    // Hide the toast after 3 seconds
    setTimeout(function () {
      toast.className = toast.className.replace("show", "");
    }, 3000);
  });

// Navigation button functionality (prev button for example)
document
  .querySelector('.btns[type="prev"]')
  .addEventListener("click", function () {
    // logic for navigating to the previous slide
  });
