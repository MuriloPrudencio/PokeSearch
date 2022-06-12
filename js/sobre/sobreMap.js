import { header } from "../components/nav.js";
import { sobre } from "../sobre/sobre.js";
import { footer } from "../components/footer.js";

const rootContent = document.querySelector(".root");

function root() {
  const nav = header();
  const sobre = sobre();
  const foot = footer();

  return (
    rootContent.appendChild(nav),
    rootContent.appendChild(sobre),
    rootContent.appendChild(foot)
  );
}
