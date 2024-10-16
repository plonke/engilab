export function spanText(str: string): string {
  return str
    .split(" ")
    .map((word) => {
      return `<span class='word whitespace-nowrap overflow-hidden inline-flex'>${[
        ...word,
      ]
        .map((letter) => `<span class="letter">${letter}</span>`)
        .join("")}</span>`;
    })
    .join(" ");
}
