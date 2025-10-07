import { useColorScheme } from 'react-native';

const TEMA_CLARO = {
  colorFondo: "#FEF9EF",
  colorTitulo: "#2C3E50",
  colorTextoFoto: "#1B5E20",
  logo: require("../assets/fotos/granada_light.jpg"),
};

export { TEMA_CLARO };

const TEMA_OSCURO = {
  colorFondo: "#121212",
  colorTitulo: "#ffdd99",
  colorTextoFoto: "#ffffff",
  logo: require("../assets/fotos/granada_dark.jpg"),
};

export { TEMA_OSCURO };


export const useTemas = () => {
  const scheme = useColorScheme();
  return scheme === 'dark' ? TEMA_OSCURO : TEMA_CLARO;
};
const Temas = {
  light: {
    colorFondo: "#FEF9EF",
    colorTitulo: "#2C3E50",
    colorTextoFoto: "#1B5E20",
    logo: require("../assets/fotos/granada_light.jpg"),
  },
  dark: {
    colorFondo: "#121212",
    colorTitulo: "#ffdd99",
    colorTextoFoto: "#ffffff",
    logo: require("../assets/fotos/granada_dark.jpg"),
  },
};

export { Temas };