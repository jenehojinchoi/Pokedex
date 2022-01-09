//how to use
// font: ${({ theme }) => theme.font.display1};
// color: ${({ theme }) => theme.color.primary};

const color = {
    primary: "#2475DB",
    red: "#b11c1c",
    skyblue: "#33A2FF",
    background: "#EEEEEE",
    white: "#FFFFFF",
    background2: "#B5DBE5",
    grey: "#C2C2C2",
    lightgrey: "#EEEEEE",
    black: "#111111",
  };
  
  const font = {
    display2: "normal 700 3.5rem/3.5rem 'Press Start 2P'",
    display1: "normal 400 3.5rem/3.5rem 'Press Start 2P'",
    button: "normal 400 1.2rem/1.2rem 'Press Start 2P'",
    cardTitle: "normal 400 1rem/1rem 'Press Start 2P'",
    modalWindow: "normal 400 1.3rem/1.3rem 'Press Start 2P'",
    modalMenu: "normal 400 1.2rem/1.2rem 'Press Start 2P'",
    showLoading: "normal 400 2.0rem/2.0rem 'Press Start 2P'",
  };
  
  const theme = {
    color,
    font,
  };
  
  export default theme;