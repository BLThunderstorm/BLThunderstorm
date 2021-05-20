/**
 * Nefomemes Flavored Markdown
 */

 import remark from "remark";
 import remarkRehype from "remark-rehype";
 import rehypeSanitize from "rehype-sanitize";
 import remarkGFM from "remark-gfm";
 
 function processMarkdown(markdown: string, options: {
     throwError: boolean
 }) : string {
 let result: string;
 // Module '"d:/Projects/BLThunderstorm/node_modules/remark-rehype/types/index"' can only be default-imported using the 'allowSyntheticDefaultImports' flag
 return remark()
   .use(remarkGFM)
   .use(remarkRehype)
   .use(rehypeSanitize)
   .process(this.content, (err, file) => {
    if(file){
        return String(file);
    } else if(err){
        if(options.throwError) throw err;

        return err.stack;
    }  
   });
}