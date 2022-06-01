import esbuild from 'esbuild';
import { sassPlugin } from 'esbuild-sass-plugin';
import sassGlob from '../index.js';
import { assert } from 'chai';

import path from 'path';
import { fileURLToPath } from 'url';
import { readFileSync } from 'fs';

const __filename = fileURLToPath(import.meta.url);

const __dirname = path.dirname(__filename);
console.log('directory-name 👉️', __dirname);

const TEST_OUT_DIR = './test/testout';

const testAgainstExpected = (compiledContent, expectedContent) => {
	return compiledContent === expectedContent;
};
const CWD = process.cwd();

describe('compile styles', () => {
	it('compile sass', async () => {
		let out = await esbuild.build({
			entryPoints: [__dirname + '/sass/sass.sass'],
			outdir: TEST_OUT_DIR,
			bundle: true,
			minify: true,
			plugins: [
				sassPlugin({
					precompile: sassGlob,
				}),
			],
		});

		assert(
			out.errors.length < 1 && out.warnings.length < 1,
			'Errors or warnings in esbuild'
		);
		assert(
			testAgainstExpected(
				readFileSync(`${CWD}/test/testout/sass.css`, 'utf-8'),
				readFileSync(`${CWD}/test/expect.css`, 'utf-8')
			),
			'Compiled content does not match expected'
		);
	});
	it('compile scss', async () => {
		let out = await esbuild.build({
			entryPoints: [__dirname + '/scss/scss.scss'],
			outdir: TEST_OUT_DIR,
			bundle: true,
			minify: true,
			plugins: [
				sassPlugin({
					precompile: sassGlob,
				}),
			],
		});

		assert(
			out.errors.length < 1 && out.warnings.length < 1,
			'Errors or warnings in esbuild'
		);
		assert(
			testAgainstExpected(
				readFileSync(`${CWD}/test/testout/scss.css`, 'utf-8'),
				readFileSync(`${CWD}/test/expect.css`, 'utf-8')
			),
			'Compiled content does not match expected'
		);
	});
});
