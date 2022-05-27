import { Footer } from "./Footer";
import { Header } from "./Header";
import { Layout } from "antd";
import { siteTitle } from "utils";
import { useRef } from "react";
import Head from "next/head";
import styles from "./SiteLayout.module.scss";

interface Props {
  title?: string;
  theme?: Theme;
  children: React.ReactNode;
}

const { Content } = Layout;

export const SiteLayout: React.FC<Props> = ({ title, theme, children }) => {
  const headerRef = useRef<HTMLElement>(null);

  return (
    <Layout className={styles.layout}>
      <Head>
        <title>{siteTitle(title)}</title>
      </Head>

      <Header ref={headerRef} theme={theme} />

      <Content>
        <div
          className={styles.content}
          style={{ marginTop: headerRef.current?.clientHeight || 64 }}
        >
          {children}
        </div>
      </Content>

      <Footer />
    </Layout>
  );
};
