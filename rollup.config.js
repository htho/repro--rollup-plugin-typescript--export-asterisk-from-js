import typescript from '@rollup/plugin-typescript';

export default {
	input: "./src/dummy.ts",
	output: { dir: "dist", format: "esm", sourcemap: true },
	plugins: [typescript({
		tsconfig: false,
	})]
};