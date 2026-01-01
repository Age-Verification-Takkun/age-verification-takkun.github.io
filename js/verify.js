const agreeBtn = document.getElementById("agree");
const terms = document.getElementById("terms");
const form = document.getElementById("form");
const msg = document.getElementById("msg");

// スクロール確認
terms.addEventListener("scroll", () => {
  if (terms.scrollTop + terms.clientHeight >= terms.scrollHeight - 5) {
    agreeBtn.disabled = false;
  }
});

agreeBtn.onclick = () => {
  form.style.display = "block";
  agreeBtn.style.display = "none";
  terms.style.display = "none";
};

// 生年月日select生成
const y = document.getElementById("year");
const m = document.getElementById("month");
const d = document.getElementById("day");

const now = new Date().getFullYear();
for (let i = now; i >= now - 100; i--) {
  y.add(new Option(i, i));
}
for (let i = 1; i <= 12; i++) {
  m.add(new Option(i, i));
}
for (let i = 1; i <= 31; i++) {
  d.add(new Option(i, i));
}

function checkAge() {
  const yy = parseInt(y.value);
  const mm = parseInt(m.value);
  const dd = parseInt(d.value);

  const today = new Date();
  let age = today.getFullYear() - yy;

  if (
    today.getMonth() + 1 < mm ||
    (today.getMonth() + 1 === mm && today.getDate() < dd)
  ) {
    age--;
  }

  if (age >= 13) {
    localStorage.setItem("_x9A1", "1");
    sessionStorage.setItem("_x9A1", "1");
    location.href = "index.html";
  } else {
    msg.textContent = "13歳未満の方は利用できません。";
  }
}
