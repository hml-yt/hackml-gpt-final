import { VueShowdownPlugin } from "vue-showdown";
import showdownHighlight from "showdown-highlight";

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(VueShowdownPlugin, {
    // set default flavor of showdown
    flavor: "github",
    // set default options of showdown (will override the flavor options)
    options: {
      highlight: true,
      emoji: false,
    },

    extensions: [
      showdownHighlight({
        // Whether to add the classes to the <pre> tag, default is false
        pre: true,
        // Whether to use hljs' auto language detection, default is true
        auto_detection: true,
      }),
    ],
  });
});
