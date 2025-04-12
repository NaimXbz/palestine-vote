let palestineCount = 1013550;
let israelCount = 34003;
let selectedVote = "";

function selectVote(choice) {
  selectedVote = choice;

  document.querySelectorAll('.vote-option').forEach(btn => {
    btn.classList.remove("selected");
  });

  document.getElementById(`btn-${choice}`).classList.add("selected");
}

function submitVote() {
  const name = document.getElementById("name").value.trim();
  const age = parseInt(document.getElementById("age").value.trim());

  if (!name || isNaN(age) || age < 10) {
    alert("অনুগ্রহ করে সঠিক নাম ও বয়স দিন (১০ বছরের উপরে)");
    return;
  }

  if (!selectedVote) {
    alert("অনুগ্রহ করে একটি পছন্দ নির্বাচন করুন।");
    return;
  }

  if (selectedVote === "palestine") {
    palestineCount++;
    document.getElementById("palestineCount").textContent = palestineCount.toLocaleString();
  } else if (selectedVote === "israel") {
    israelCount++;
    document.getElementById("israelCount").textContent = israelCount.toLocaleString();
  }

  alert("🎉 অভিনন্দন! আপনার ভোট গ্রহণ করা হয়েছে।");

  // Reset
  document.getElementById("name").value = "";
  document.getElementById("age").value = "";
  selectedVote = "";
  document.querySelectorAll('.vote-option').forEach(btn => {
    btn.classList.remove("selected");
  });
}
