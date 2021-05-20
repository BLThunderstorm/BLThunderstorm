/**
 * Nefomemes Flavored Markdown
 */

 import * as remark from "remark";
 import * as remarkRehype from "remark-rehype";
 import * as rehypeSanitize from "rehype-sanitize";
 import * as remarkGFM from "remark-gfm";
import { Plugin } from "@nuxt/types";
export type processMarkdownType = (markdown: string, options: {throwError: boolean}) => Promise<string>;

const processMarkdown: processMarkdownType = function processMarkdown(markdown, options) {
 return new Promise(async (resolve, reject) => {
 // Module '"d:/Projects/BLThunderstorm/node_modules/remark-rehype/types/index"' can only be default-imported using the 'allowSyntheticDefaultImports' flag
 return remark()
   .use(remarkGFM)
   .use(remarkRehype)
   .use(rehypeSanitize)
   .process(markdown, (err, file) => {
    if(file){
        resolve(String(file));
    } else if(err){
        if(options.throwError) reject(err);

        resolve(err.stack);
    }  
   });
});
}

declare module 'vue/types/vue' {
    // this.$myInjectedFunction inside Vue components
    interface Vue {
      $markdown: processMarkdownType
    }
  }
  
  declare module '@nuxt/types' {
    // nuxtContext.app.$myInjectedFunction inside asyncData, fetch, plugins, middleware, nuxtServerInit
    interface NuxtAppOptions {
        $markdown: processMarkdownType
    }
    // nuxtContext.$myInjectedFunction
    interface Context {
        $markdown: processMarkdownType
    }
  }
  

const plugin: Plugin = function(ctx, inject){
inject("markdown", processMarkdown);
};

export default plugin;