/* ==========================================================
   Firebase 接続設定
   1. https://console.firebase.google.com でプロジェクトを作成（無料）
   2. 左メニューの「Realtime Database」を作成する
      （ロケーションは asia-southeast1 などお好みで）
   3. 「ルール」タブを以下に変更して公開する：
        {
          "rules": {
            "memodeAR": {
              ".read": true,
              ".write": true
            }
          }
        }
      → memodeAR というパスだけを読み書き自由にし、それ以外は塞ぐ設定です
   4. プロジェクトの「⚙️ プロジェクトの設定」→「全般」タブ下部の
      「マイアプリ」で ウェブアプリ（</>アイコン）を追加すると
      firebaseConfig の値一式が表示されるので、それをそのまま
      下の firebaseConfig にコピーする
   ========================================================== */
   const firebaseConfig = {
    apiKey: "AIzaSyAlsy3UMhCS_Df1GvfmiR65e_m-D_-GEgM",
    authDomain: "memo-de-ar.firebaseapp.com",
    databaseURL: "https://memo-de-ar-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "memo-de-ar",
    storageBucket: "memo-de-ar.firebasestorage.app",
    messagingSenderId: "687777695434",
    appId: "1:687777695434:web:7a1474453130b9e7881633"
  };

firebase.initializeApp(firebaseConfig);
