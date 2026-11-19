import tailwindcss from "@tailwindcss/vite";
// @ts-check
import { defineConfig, fontProviders } from 'astro/config';

import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  vite: {
      plugins: [tailwindcss()],
	},

  fonts: [{
  provider: fontProviders.local(),
  name: "Barlow",
  cssVariable: "--font-barlow",
  options: {
    variants: [
      { weight: 100, style: "normal", src: ["./src/assets/fonts/Barlow/Barlow-Thin.ttf"] },
      { weight: 100, style: "italic", src: ["./src/assets/fonts/Barlow/Barlow-ThinItalic.ttf"] },
      { weight: 200, style: "normal", src: ["./src/assets/fonts/Barlow/Barlow-ExtraLight.ttf"] },
      { weight: 200, style: "italic", src: ["./src/assets/fonts/Barlow/Barlow-ExtraLightItalic.ttf"] },
      { weight: 300, style: "normal", src: ["./src/assets/fonts/Barlow/Barlow-Light.ttf"] },
      { weight: 300, style: "italic", src: ["./src/assets/fonts/Barlow/Barlow-LightItalic.ttf"] },
      { weight: 400, style: "normal", src: ["./src/assets/fonts/Barlow/Barlow-Regular.ttf"] },
      { weight: 400, style: "italic", src: ["./src/assets/fonts/Barlow/Barlow-Italic.ttf"] },
      { weight: 500, style: "normal", src: ["./src/assets/fonts/Barlow/Barlow-Medium.ttf"] },
      { weight: 500, style: "italic", src: ["./src/assets/fonts/Barlow/Barlow-MediumItalic.ttf"] },
      { weight: 600, style: "normal", src: ["./src/assets/fonts/Barlow/Barlow-SemiBold.ttf"] },
      { weight: 600, style: "italic", src: ["./src/assets/fonts/Barlow/Barlow-SemiBoldItalic.ttf"] },
      { weight: 700, style: "normal", src: ["./src/assets/fonts/Barlow/Barlow-Bold.ttf"] },
      { weight: 700, style: "italic", src: ["./src/assets/fonts/Barlow/Barlow-BoldItalic.ttf"] },
      { weight: 800, style: "normal", src: ["./src/assets/fonts/Barlow/Barlow-ExtraBold.ttf"] },
      { weight: 800, style: "italic", src: ["./src/assets/fonts/Barlow/Barlow-ExtraBoldItalic.ttf"] },
      { weight: 900, style: "normal", src: ["./src/assets/fonts/Barlow/Barlow-Black.ttf"] },
      { weight: 900, style: "italic", src: ["./src/assets/fonts/Barlow/Barlow-BlackItalic.ttf"] }
    ]
  }
}],

  integrations: [icon()]
});