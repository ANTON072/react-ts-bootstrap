import { toCamel } from "./convertKeys"

test("toCamel Object", () => {
  const obj = {
    hogeHoge: {
      piyo_piyo: "aaaa",
      fuga_fuga: "bbbb",
    },
  }
  const res = {
    hogeHoge: {
      piyoPiyo: "aaaa",
      fugaFuga: "bbbb",
    },
  }
  expect(toCamel(obj)).toEqual(res)
})

test("toCamel Array", () => {
  const obj = {
    hogeHoge: [{ piyo_piyo: "aaaa" }, { fuga_fuga: "bbbb" }],
  }
  const res = {
    hogeHoge: [{ piyoPiyo: "aaaa" }, { fugaFuga: "bbbb" }],
  }
  expect(toCamel(obj)).toEqual(res)
})
