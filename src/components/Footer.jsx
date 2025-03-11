import { FaGithub } from "react-icons/fa";
import { TbMailStar } from "react-icons/tb";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <p>Riolu coded&#8480; by </p>
      <a href="https://github.com/lichenhaunt">Lichenhaunt</a>
      <section>
        <a href="https://github.com/lichenhaunt.com">
          <FaGithub />
        </a>
        <a href="mailto:lichenhaunt@yahoo.com">
          <TbMailStar />
        </a>
      </section>
      <p>
        Thank you to every small web coder out there for inspiring this
        site!&lt;3
      </p>
    </footer>
  );
}
