export enum UI {
  // デザインカンプの定義幅
  designWidth = 750,
  // Retinaのベースフォントサイズ
  designBaseFontSize = 20,
  // デザインカンプとフォントサイズの比率
  fontRatio = designWidth / designBaseFontSize,
}

export enum APP_SETTINGS {
  axiosTimeout = 5000,
}

export enum API_ENDPOINT {
  login = "/login",
}
