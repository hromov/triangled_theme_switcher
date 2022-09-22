/**
 * @jest-environment jsdom
 */
import getRButton from "./radio";

describe("getRButton", () => {
  it("should return radio button", () => {
    const topic = "objects";
    const button = getRButton("topics", topic);
    expect(button).toBeInstanceOf(HTMLDivElement);
    const title = button.getElementsByClassName("radioTitle");
    expect(title.length).toBe(1);
    expect(title[0].innerText).toBe(topic);
    const input = button.getElementsByTagName("input");
    expect(input.length).toBe(1);
    expect(input[0].name).toBe("topics");
    expect(input[0].id).toBe(topic);
    expect(input[0].value).toBe(topic);
    const label = button.getElementsByTagName("label");
    expect(label.length).toBe(1);
    expect(label[0].getAttribute("for")).toBe(topic);
  });
});
