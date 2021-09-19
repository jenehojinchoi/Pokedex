//how to use
// font: ${({ theme }) => theme.font.display1};
// color: ${({ theme }) => theme.color.primary};

const color = {
    primary: "#2475DB",
    skyblue: "#33A2FF",
    background: "#EEEEEE",
    white: "#FFFFFF",
  };
  
  const font = {
    display2: "normal 900 3.5rem/3.5rem 'Roboto'",
    display1: "normal 400 3.5rem/3.5rem 'Roboto'",
    cardTitle: "normal 400 1.5rem/2.4rem 'Roboto'",
  };
  
  const theme = {
    color,
    font,
  };
  
  export default theme;