import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWater } from "@fortawesome/free-solid-svg-icons";
// import * as Icons from "@fortawesome/fontawesome-free-solid"
import { faGithub, faStackExchange, faStackOverflow } from "@fortawesome/free-brands-svg-icons"

export default function Footer() {
  return (
    <footer>
      <hr />
      <div>
        <p>⚖ MIT 2022</p>
        <FontAwesomeIcon icon={faGithub} />
        <FontAwesomeIcon icon={faStackOverflow} />
        <FontAwesomeIcon icon={faStackExchange} />
      </div>
    </footer>
  );
}
