import React, { useState } from "react";
import { useRouter } from 'next/router';
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Typography from "@mui/material/Typography";
import styles from "./index.module.css";
import Link from "next/link";

type HoverMenuProps = {
  items: { title: string; href: string }[];
};

const HoverMenu = ({ items }: HoverMenuProps) => {
  const router = useRouter();
  const currentUrl = `/${router.query.slug}`

  const [hovering, setHovering] = useState<Boolean | null>(false);

  const handleMouseEnter = () => {
    setHovering(true);
  };

  const handleMouseLeave = () => {
    setHovering(false);
  };

  return (
    <div
      className={styles.container}
      onMouseOver={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <h3>Menu</h3>
      {hovering && (
        <List disablePadding>
          <div className={styles.openMenuContainer}>
            {items.map((item) => (
              <ListItem key={`Link to ${item.title}`}>
                <Link className={styles.link} href={item.href} onClick={() => setHovering(false)}>
                  <ListItemButton>
                    <ListItemText primary={
                      <Typography className={styles.listItem} color={currentUrl== item.href ? 'primary.main' : 'black'}>
                        {item.title}
                      </Typography>}
                    />
                  </ListItemButton>
                </Link>
              </ListItem>
            ))}
          </div>
        </List>
      )}
    </div>
  );
}

export default HoverMenu;
