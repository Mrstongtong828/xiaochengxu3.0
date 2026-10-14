/**
 * 打包成单文件 HTML（方便微信/邮件发给别人，双击即可打开，不需要带着 data/ 目录）
 * 用法：node tools/bundle.js
 * 输出：广东志愿概率分析-demo-单文件.html
 */
const fs = require('fs');
const path = require('path');
const ROOT = path.join(__dirname, '..');

let html = fs.readFileSync(path.join(ROOT, 'index.html'), 'utf8');

function must(name) {
  const p = path.join(ROOT, name);
  if (!fs.existsSync(p)) throw new Error('缺少文件：' + name);
  return fs.readFileSync(p, 'utf8');
}

const css = must('styles.css');
const linkTag = '<link rel="stylesheet" href="styles.css" />';
if (html.indexOf(linkTag) < 0) throw new Error('index.html 里找不到样式引用');
html = html.replace(linkTag, () => '<style>\n' + css + '\n</style>');

['lib/model.js', 'data/meta.js', 'data/ranks.js', 'data/schools.js', 'app.js'].forEach(f => {
  const tag = '<script src="' + f + '"></script>';
  if (html.indexOf(tag) < 0) throw new Error('index.html 里找不到脚本引用：' + f);
  html = html.replace(tag, () => '<script>\n' + must(f) + '\n</script>');
});

if (html.indexOf('<script src=') >= 0 || html.indexOf('href="styles.css"') >= 0) {
  throw new Error('还有外链资源没内联');
}

const out = path.join(ROOT, '广东志愿概率分析-demo-单文件.html');
fs.writeFileSync(out, html, 'utf8');
console.log('已生成 ' + out + '（' + (fs.statSync(out).size / 1024).toFixed(1) + ' KB）');