/**
 * VScodeのバグ対策用ファイル
 */
declare module "console" {
  export = typeof import("console")
}
