import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];
  const linksArr = links.map(item => {
    return <a href={'#' + item} key={item}>{item}</a>
  })

  return <nav>{linksArr}</nav>;
}

export default NavBar;
