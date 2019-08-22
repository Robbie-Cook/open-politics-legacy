import { DefaultTheme } from "@robbie-cook/react-components"

/** 
 * Taking the default theme from react-components and modifying it 
 */
class MyTheme {
  static textColor = "#ffffff";
  static backgroundColor = "#F58C8C";

  // Link color
  static link = {
    color: "#6385a9",
    colorActive: "#1565c0",
    colorHighlight: "#6385a9"
  };

  static text = {
    color: this.textColor,
    font: "'Roboto', sans-serif",
  };

  static page = {
    backgroundColor: this.backgroundColor,
    secondaryColor: "#EB6D6D" // reddish
  };

  static navbar = {
    backgroundColor: this.backgroundColor,
    height: "60px",
    // Navbar button styles
    button: {
      backgroundColor: this.backgroundColor,
      color: this.textColor,
      borderColor: 'transparent',
      activeColor: this.link.color
    }
  };

  static button = {
    backgroundColor: this.link.color,
    color: this.text.color,
    borderColor: this.textColor
  }
}

export default MyTheme