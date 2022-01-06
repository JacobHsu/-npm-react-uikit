import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useMatchBreakpoints } from "../../hooks";
import Logo from "./components/Logo";
import { NavProps } from "./types";
import { MENU_HEIGHT } from "./config";

const Wrapper = styled.div`
  position: relative;
  width: 100%;
`;

const StyledNav = styled.nav<{ showMenu: boolean }>`
  position: fixed;
  top: ${({ showMenu }) => (showMenu ? 0 : `-${MENU_HEIGHT}px`)};
  left: 0;
  transition: top 0.2s;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 8px;
  padding-right: 16px;
  width: 100%;
  height: ${MENU_HEIGHT}px;
  background-color: ${({ theme }) => theme.nav.background};
  border-bottom: solid 2px rgba(133, 133, 133, 0.1);
  z-index: 20;
  transform: translate3d(0, 0, 0);
`;

const Menu: React.FC<NavProps> = ({
  // isDark,
  // links,
}) => {
  const { isXl } = useMatchBreakpoints();
  const isMobile = isXl === false;
  const [isPushed, setIsPushed] = useState(!isMobile);
  const [showMenu, setShowMenu] = useState(true);

  useEffect(() => {
  }, []);

  // Find the home link if provided
  // const homeLink = links.find((link) => link.label === "Home");

  return (
    <Wrapper>
      <StyledNav showMenu={showMenu}>
        <Logo
          isPushed={isPushed}
          togglePush={() => setIsPushed((prevState: boolean) => !prevState)}
          // isDark={isDark}
          // href={homeLink?.href ?? "/"}
          href={"/"}
        />
      </StyledNav>
    </Wrapper>
  );
};

export default Menu;
