import { Layout, Menu } from "antd";
import Link from "next/link";
import { useRouter } from "next/router";
import { forwardRef, useEffect, useState } from "react";
import styles from "./SiteLayout.module.scss";

const MENU_ITEMS = [
  {
    key: "/studio",
    label: menuLabel("In Studio", "/studio"),
    children: [
      {
        key: "/cycling",
        label: menuLabel("Cycling", "/cycling"),
      },
      {
        key: "/boxing",
        label: menuLabel("Boxing", "/boxing"),
      },
    ],
  },
  {
    key: "/online",
    label: "Online",
    children: [
      {
        key: "/live",
        label: menuLabel("Live", "/live"),
      },
      {
        key: "/on-demand",
        label: menuLabel("On Demand", "https://ondemand.electricstudio.ph/", true),
      },
      {
        key: "/workouts",
        label: menuLabel("Our Workouts", "/workouts"),
      },
    ],
  },
  {
    key: "/rates",
    label: menuLabel("Rates", "/rates"),
  },
  {
    key: "/instructors",
    label: menuLabel("Instructors", "/instructors"),
  },
  {
    key: "/shop",
    label: menuLabel("Shop", "https://shop.electricstudio.ph", true),
  },
];

function menuLabel(label: string, link?: string, isExternal?: boolean): JSX.Element {
  return link ? (
    <Link href={link} passHref={isExternal}>
      {isExternal ? (
        <a target="_blank" className="stretched-link">
          {label}
        </a>
      ) : (
        <span className="stretched-link">{label}</span>
      )}
    </Link>
  ) : (
    <span>{link}</span>
  );
}

interface Props {
  theme?: string;
}

export const Header = forwardRef<HTMLElement, Props>(({ theme = "default" }, ref) => {
  const router = useRouter();
  const [selectedTheme, setSelectedTheme] = useState(theme);

  useEffect(() => {
    setSelectedTheme(theme);
    document.querySelector("body")?.classList.remove(styles[`${selectedTheme}-theme`]);
    document.querySelector("body")?.classList.add(styles[`${theme}-theme`]);
  }, [theme]);

  return (
    <Layout.Header className={styles.header} ref={ref}>
      <div className={styles.logo} />
      <Menu
        theme="dark"
        mode="horizontal"
        items={MENU_ITEMS}
        selectable={false}
        selectedKeys={[router.pathname]}
      />
    </Layout.Header>
  );
});
