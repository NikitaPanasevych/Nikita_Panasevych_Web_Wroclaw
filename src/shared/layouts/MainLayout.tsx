import React from "react";
import { Header } from "../ui/Header/Header";
import { Footer } from "../ui/Footer/Footer";
import styles from "./MainLayout.module.scss";

interface MainLayoutProps {
  children: React.ReactNode;
}

export const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <div className={styles.layout}>
      <Header />
      <main className={styles.main}>
        <div className={styles.container}>{children}</div>
      </main>
      <Footer />
    </div>
  );
};
