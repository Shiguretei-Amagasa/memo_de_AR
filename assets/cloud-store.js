/* ==========================================================
   memodeAR クラウド保存（Firebase Realtime Database）
   入力画面とAR画面、異なる端末どうしでデータを共有するための
   共通の読み書き関数。
   データは常に /memodeAR パスの下に
   { active: {...}|null, history: [...] } の形で保存する。
   ========================================================== */
(function () {
  const PATH = "memodeAR";

  function ref() {
    if (typeof firebase === "undefined" || !firebase.apps.length) {
      throw new Error("Firebaseの初期化に失敗しています。firebase-config.jsの設定を確認してください");
    }
    return firebase.database().ref(PATH);
  }

  async function fetchData() {
    const snapshot = await ref().once("value");
    const data = snapshot.val() || {};
    return {
      active: data.active || null,
      history: Array.isArray(data.history) ? data.history : []
    };
  }

  async function saveData(data) {
    await ref().set(data);
    return data;
  }

  window.memodeCloud = { fetchData, saveData };
})();
