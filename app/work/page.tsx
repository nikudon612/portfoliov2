"use client";

import React, { useEffect } from "react";
import styles from "./work.module.scss";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import Projects from "../../components/projects";
import PageWrapper from "../../components/page-wrapper";

// export const metadata: Metadata = {
//   title: "Nick Bechtel - Work",
//   description: "Nick Bechtel - Software Engineer - Portfolio - Resume",
// };

function page() {
  return (
    <PageWrapper>
      <div className={styles.work}>
        <div className={styles.work_container}>
          <Projects />
        </div>
      </div>
    </PageWrapper>
  );
}

export default page;
