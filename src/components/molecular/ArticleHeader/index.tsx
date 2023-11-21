import Typography from "@mui/material/Typography";
import React from 'react'

type ArticleHeaderProps = {
  title: string
}

const ArticleHeader = ({title}: ArticleHeaderProps) => (
  <>
    <Typography variant="h1" color="primary.main">{title}</Typography>
  </>
);


export default ArticleHeader;