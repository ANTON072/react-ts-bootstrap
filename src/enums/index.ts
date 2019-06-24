export enum UI {
  // デザインカンプの定義幅
  designWidth = 750,
  // Retinaのベースフォントサイズ
  designBaseFontSize = 20,
  // デザインカンプとフォントサイズの比率
  fontRatio = designWidth / designBaseFontSize,
}

export enum APP_SETTINGS {
  // Axiosの設定
  axiosTimeout = 5000,
  // ポーリングの設定
  pollingInterval = 1000,
  pollingTimeout = 5000,
}

export enum API_ENDPOINT {
  login = "/login",
}
