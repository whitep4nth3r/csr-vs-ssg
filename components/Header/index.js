import HeaderStyles from "@styles/Header.module.css";
import Link from "next/link";
import SocialLinks from "@components/SocialLinks";
import { Config } from "@utils/Config";
import Logo from "./svg/Logo";

export default function Header() {
  return (
    <header className={HeaderStyles.header}>
      <div className={HeaderStyles.header__logoContainer}>
        <a href="#main_content" className={HeaderStyles.header__skipToMainContent}>
          Skip to main content
        </a>
        <Link href="/">
          <a className={HeaderStyles.header__logoContainerLink} aria-label="Navigate to home page">
            <Logo />
          </a>
        </Link>
      </div>

      <nav className={HeaderStyles.header__nav} role="navigation">
        <ul className={HeaderStyles.header__navList}>
          {Config.menuLinks.map((link) => {
            return (
              <li key={link.displayName} className={HeaderStyles.header__navListItem}>
                <Link href={link.path}>
                  <a className={HeaderStyles.header__navListItemLink}>{link.displayName}</a>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      <SocialLinks />
    </header>
  );
}
