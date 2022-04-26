import peerDepsExternal from "rollup-plugin-peer-deps-external";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "rollup-plugin-typescript2";
import postcss from "rollup-plugin-postcss-retain-sass-data";
import copy from "rollup-plugin-copy";
import { getFiles } from './scripts/buildUtils';

const extensions = ['.js', '.ts', '.jsx', '.tsx'];

export default {
  input: [
    ...getFiles('./src/components', extensions),
    ...getFiles('./src/icons', extensions),
  ],
  output: {
    dir: 'build',
    format: 'esm',
    preserveModules: true,
    preserveModulesRoot: 'src',
    sourcemap: true,
  },
  plugins: [
    peerDepsExternal(),
    resolve(),
    commonjs(),
    typescript({ useTsconfigDeclarationDir: true }),
    postcss(),
    copy({
      targets: [
        {
          src: "src/styles/*",
          dest: "build/styles/",
        },
      ]
    })
  ],
  external: ['react', 'react-dom'],
};
