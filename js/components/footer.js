const rootContent = document.querySelector(".root");

export function footer() {
  const footer = document.createElement("footer");
  const footerContent = document.createElement("p");

  footer.setAttribute("class", "footer");
  footerContent.innerHTML = `Poke Search <b>&copy;</b> 2022`;

  footer.appendChild(footerContent);

  return rootContent.appendChild(footer);
}
footer();
