//how to use
// font: ${({ theme }) => theme.font.display1};
// color: ${({ theme }) => theme.color.primary};

const color = {
    primary: "#2475DB",
    skyblue: "#33A2FF",
    background: "#EEEEEE",
    white: "#FFFFFF",
    background2: "#B5DBE5",
    grey: "#C2C2C2",
    lightgrey: "#EEEEEE",
    black: "#111111",
  };
  
  const font = {
    display2: "normal 700 3.5rem/3.5rem 'Roboto'",
    display1: "normal 400 3.5rem/3.5rem 'Roboto'",
    cardTitle: "normal 400 1.5rem/1.5rem 'Roboto'",
    ModalMenu: "normal 700 1.7rem/1.7rem 'Roboto'",
    showLoading: "normal 700 2.0rem/2.0rem 'Roboto'",
  };
  
  const theme = {
    color,
    font,
  };
  
  export default theme;