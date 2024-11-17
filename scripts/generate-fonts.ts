const fs = require('fs-extra');
const path = require('path');
const glob = require('glob');
const Fontmin = require('fontmin');

const FONT_SRC = path.resolve(__dirname, '../assets/fonts'); // 原始字体文件目录
const OUTPUT_DIR = './src/assets/fonts'; // 输出子集字体目录
const I18N_DIR = './src/locales'; // i18n 目录

// 字体文件配置
const FONT_CONFIG = [
  { input: `${FONT_SRC}/SourceHanSansCN-VF.ttf`, output: 'SourceHanSansCN-VF.woff2', lang: 'zh-Hans' },
  { input: `${FONT_SRC}/SourceHanSansTW-VF.ttf`, output: 'SourceHanSansTW-VF.woff2', lang: 'zh-Hant' },
  { input: `${FONT_SRC}/SourceHanSansJP-VF.ttf`, output: 'SourceHanSansJP-VF.woff2', lang: 'ja' },
  { input: `${FONT_SRC}/SourceHanSansKR-VF.ttf`, output: 'SourceHanSansKR-VF.woff2', lang: 'ko' },
  { input: `${FONT_SRC}/SourceHanSansHW-VF.ttf`, output: 'SourceHanSans.woff2', lang: 'en' },
];

// 提取字形内容
async function extractGlyphs() {
  const glyphs = {};
  FONT_CONFIG.forEach(config => {
    glyphs[config.lang] = new Set();
  });

  const files = glob.sync(`${I18N_DIR}/**/*.{json,md}`);
  for (const file of files) {
    const content = fs.readFileSync(file, 'utf-8');
    for (const config of FONT_CONFIG) {
      if (file.includes(config.lang)) {
        content.split('').forEach(char => glyphs[config.lang].add(char));
      }
    }
  }

  return glyphs;
}

// 生成子集字体
async function generateSubsetFonts(glyphs) {
  fs.ensureDirSync(OUTPUT_DIR);

  for (const config of FONT_CONFIG) {
    const text = Array.from(glyphs[config.lang]).join('');
    const fontmin = new Fontmin()
      .src(config.input)
      .use(Fontmin.glyph({ text })) // 指定字形
      .use(Fontmin.ttf2woff2()) // 转换为 woff2
      .dest(OUTPUT_DIR);

    console.log(`正在处理字体：${config.input}`);
    await new Promise((resolve, reject) => {
      fontmin.run((err, files) => {
        if (err) return reject(err);
        resolve(files);
      });
    });
    console.log(`生成完成：${OUTPUT_DIR}/${config.output}`);
  }
}

// 删除 TTF 文件
function cleanupTTF() {
  console.log('清理 TTF 文件中...');
  const ttfFiles = glob.sync(`${OUTPUT_DIR}/*.ttf`);
  ttfFiles.forEach(file => {
    fs.removeSync(file);
    console.log(`已删除：${file}`);
  });
}

// 主流程
(async () => {
  console.log('提取字形中...');
  const glyphs = await extractGlyphs();

  console.log('生成子集字体中...');
  await generateSubsetFonts(glyphs);

  cleanupTTF(); // 删除 TTF 文件

  console.log('字体生成完成，存放于：', OUTPUT_DIR);
})();
