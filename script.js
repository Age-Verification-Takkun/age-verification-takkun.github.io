const KEY = "_x9A1";

// すでに認証済みか？
if (
  localStorage.getItem(KEY) === "1" &&
  sessionStorage.getItem(KEY) === "1"
) {
  showContent();
}

// スクロール同意
const terms = document.getElementById("terms");
const agree = document.getElementById("agree");

terms.addEventListener("scroll", () => {
  if (terms.scrollTop + terms.clientHeight >= terms.scrollHeight - 5) {
    agree.disabled = false;
  }
});

agree.onclick = () => {
  document.getElementById("birth").classList.remove("hidden");
  agree.style.display = "none";
  terms.style.display = "none";
};

// 生年月日 select 生成
const y = document.getElementById("year");
const m = document.getElementById("month");
const d = document.getElementById("day");

const now = new Date().getFullYear();
for (let i = now; i >= now - 100; i--) y.add(new Option(i, i));
for (let i = 1; i <= 12; i++) m.add(new Option(i, i));
for (let i = 1; i <= 31; i++) d.add(new Option(i, i));

// 年齢チェック
document.getElementById("check").onclick = () => {
  const yy = +y.value;
  const mm = +m.value;
  const dd = +d.value;

  const today = new Date();
  let age = today.getFullYear() - yy;
  if (
    today.getMonth() + 1 < mm ||
    (today.getMonth() + 1 === mm && today.getDate() < dd)
  ) age--;

  if (age >= 13) {
    localStorage.setItem(KEY, "1");
    sessionStorage.setItem(KEY, "1");
    showContent();
  } else {
    document.getElementById("msg").textContent =
      "13歳未満の方は利用できません。";
  }
};

function showContent() {
  document.getElementById("verify").classList.add("hidden");
  document.getElementById("content").classList.remove("hidden");
}
