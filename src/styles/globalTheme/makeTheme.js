export const makeTheme = ({ currentTheme, isRTL, isDark }) => {
  return {
    direction: isRTL ? "rtl" : "ltr",
    palette: {
      background: {
        default: "#fff",
      },
      primary: {
        main: currentTheme.elements.colors.primary,
      },
      secondary: {
        main: currentTheme.elements.colors.lightBlue,
      },
      black: {
        main: currentTheme.elements.colors.black,
      },
      gray: {
        main: currentTheme.elements.colors.gray,
      },
      date: {
        main: currentTheme.elements.colors.steel,
      },
    },
    name: currentTheme.name,
    globals: { ...currentTheme.elements, direction: isRTL ? "rtl" : "ltr" },
  };
};
export const darkTheme = ({ currentTheme, isRTL, isDark }) => {
  return {
    direction: isRTL ? "rtl" : "ltr",

    palette: {
      type: "dark",
      background: {
        default: "#0A1929",
      },
      primary: {
        main: currentTheme.elements.colors.dark,
      },
      secondary: {
        main: currentTheme.elements.colors.lightBlue,
      },
      black: {
        main: "#fff",
      },
      gray: {
        main: "#fff",
      },
      date: {
        main: currentTheme.elements.colors.lightBlue,
      },
    },
    globals: {
      ...currentTheme.elements,
      colors: {
        ...currentTheme.elements.colors,
        menuText: "#fff",
        primary: "#0A1929",
        bgWhite: "#0A1929",
        footer: "#0A1929",
        cirecleError: "#E66C6C",
        TabColor: "#86929D",
        backMedia: "#0A1929",
        navBarback: "#132F4C",
        lightBlueBackground: "#63C3EF1A",
        notificationTitle: "#fff",
        tail: "#fff",
        lightBorder: "#EEE0CF",
        dark: "#0A1929",
        darkBlack: "#fff",
        darkTeal: "#244B5A",
        QuickBox: "#F3F8FA",
        sliderdesc: "#fff",
        white: "#0A1929",
        field: "#fff",
        card: "#132F4C",
        buttonDark: "#132F4C",
        label: "#fff",
        lightBlue: "#6BC4E8",
        lightGray: "#fff",
        blackMenu: "#000000",
        blackColor: "#4668c5",
        navBarItem: "#fff",
        darkBlack: "#fff",
        arrowTable: "#fff",
        gray: "#b3b0b0",
        bgGray: "#323232",
        textMed: "#4668c5",
        black: "#fff",
        grayBorder: "#ffffff3b",
        lightGold: "#000",
        lightGoldCard: "#F2ECE0",
        Gold: "#F2ECE0",
        red: "#E51E1E",
        arrowColor: "#fff",
      },
    },
  };
};
export const blindTheme = ({ currentTheme, isRTL }) => {
  return {
    direction: isRTL ? "rtl" : "ltr",
    palette: {
      type: "blind",
      background: {
        default: "#fff",
      },
      primary: {
        main: currentTheme.elements.colors.primary,
      },
      secondary: {
        main: currentTheme.elements.colors.lightBlue,
      },
      black: {
        main: currentTheme.elements.colors.black,
      },
      gray: {
        main: currentTheme.elements.colors.gray,
      },
    },
    globals: { ...currentTheme.elements, direction: isRTL ? "rtl" : "ltr" },
  };
};
