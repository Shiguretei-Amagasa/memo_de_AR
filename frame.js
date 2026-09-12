/* ==========================================================
   memodeAR 共通フレーム生成スクリプト
   .frame-box クラスを持つ要素に、ロゴと同じ4隅の装飾パーツを
   自動的に追加する（HTML側は class="frame-box" だけでよい）
   ========================================================== */
(function () {
  const PARTS = [
    "corner-tl", "corner-tr", "corner-bl", "corner-br",
    "edge-top", "edge-right", "edge-bottom", "edge-left"
  ];

  function decorate(el) {
    if (el.dataset.framed === "1") return;
    el.dataset.framed = "1";
    PARTS.forEach(p => {
      const span = document.createElement("span");
      span.className = "fb-" + p;
      el.insertBefore(span, el.firstChild);
    });
  }

  function applyFrames(root) {
    const scope = root || document;
    scope.querySelectorAll(".frame-box").forEach(decorate);
  }

  document.addEventListener("DOMContentLoaded", () => applyFrames());
  // 履歴カードなど、後から動的に追加される要素にも使えるようグローバルに公開
  window.applyFrames = applyFrames;
})();
