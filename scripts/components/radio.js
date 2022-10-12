const svg = `
<svg class="radioSVG" viewBox="0 0 512.055 512.055">
    <path class="radioContainer" d="M509.775,481.154L275.109,11.82c-7.862-15.724-30.3-15.724-38.162,0L2.28,481.154
                                    c-7.092,14.185,3.222,30.874,19.081,30.874h469.333C506.553,512.028,516.868,495.338,509.775,481.154z M55.879,469.361
                                    L256.028,69.064l200.149,400.297H55.879z" />
    <polyline class="radioMarker" points="125 125 256 375 490 0" stroke-linecap="round" stroke-linejoin="round" />
</svg>
`;

export default function getRButton(name, topic) {
  const container = document.createElement("div");

  const input = document.createElement("input");
  input.type = "radio";
  input.name = name;
  input.id = topic;
  input.value = topic;
  container.appendChild(input);

  const label = document.createElement("label");
  label.innerHTML = svg;
  label.setAttribute("for", topic);
  label.classList.add("customRadio");

  const title = document.createElement("span");
  title.innerText = topic;
  title.classList.add("radioTitle");
  label.appendChild(title);

  container.appendChild(label);

  return container;
}
