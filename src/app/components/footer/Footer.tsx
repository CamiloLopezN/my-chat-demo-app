import React from "react";
import footerStyles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={footerStyles.footer}>
      <div className={footerStyles.footerContainer}>
        <div className={footerStyles.footerText}>
          <p>
            Coren.ai <strong>BICODE</strong>
          </p>
          <p>Todos los derechos reservados 2023</p>
        </div>
      </div>
    </footer>
  );
}
