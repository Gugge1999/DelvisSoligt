// @ts-check
import esbuild from "esbuild";

esbuild.build({
    entryPoints: ["./wwwroot/Scripts/index.ts"],
    bundle: true,
    minify: true,
    sourcemap: true,
    treeShaking: true,
    outfile: "./wwwroot/dist/scripts.js",
}).then(r => console.log("Build successful!"));
