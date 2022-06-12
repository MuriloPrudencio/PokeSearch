import { header } from "../components/nav.js";
import { home } from "./home.js";
import { footer } from "../components/footer.js";

const rootContent = document.querySelector(".root");

function root() {
  const nav = header();
  const content = home();
  const foot = footer();

  return (
    rootContent.appendChild(nav),
    rootContent.appendChild(content),
    rootContent.appendChild(foot)
  );
}
