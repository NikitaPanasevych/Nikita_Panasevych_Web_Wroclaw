import React from "react";
import { Link } from "react-router-dom";
import { MainLayout } from "@shared/layouts/MainLayout";
import styles from "./NotFound.module.scss";

const NotFoundPage: React.FC = () => {
  return (
    <MainLayout>
      <div className={styles.notFound}>
        <h1>404</h1>
        <h2>Page Not Found</h2>
        <p>The page you are looking for doesn't exist or has been moved.</p>
        <Link to="/" className={styles.homeButton}>
          Go to Homepage
        </Link>
      </div>
    </MainLayout>
  );
};

export default NotFoundPage;
