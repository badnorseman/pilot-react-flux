import $ from "jquery";
import expect from "expect";

function fetchAllProducts() {
  return (
    $.ajax({
      url: "http://localhost:3000/api/products",
      dataType: "json",
      type: "GET"
    })
  )
}

describe("misc tests", () => {
  it("should sum 2 and 2", () => {
    const expected = 4;
    expect(2+2).toEqual(expected);
  });
  it("should fetch all products", () => {
    let response = fetchAllProducts();
    console.log(response);
  });
})
