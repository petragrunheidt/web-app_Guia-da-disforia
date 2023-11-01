import React, { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import styles from "./index.module.css";
import Link from "next/link";

type HoverMenuProps = {
  items: { title: string; href: string }[];
};

function HoverMenu({ items }: HoverMenuProps) {
  const [hovering, setHovering] = useState<Boolean | null>(false);

  const handleMouseEnter = () => {
    setHovering(true);
  };

  const handleMouseLeave = () => {
    setHovering(false);
  };

  return (
    <Box
      className={styles.container}
      onMouseOver={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Button>Hover to Open Menu</Button>
      {hovering && (
        <List disablePadding>
          <Box position="absolute" width="100%">
            {items.map((item) => (
              <ListItem key={`Link to ${item.title}`}>
                <ListItemButton>
                  <Link href={item.href}>
                    <ListItemText primary={item.title} />
                  </Link>
                </ListItemButton>
              </ListItem>
            ))}
          </Box>
        </List>
      )}
    </Box>
  );
}

export default HoverMenu;
