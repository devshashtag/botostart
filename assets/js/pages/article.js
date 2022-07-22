import sidebarSmoothScroll from '/assets/js/modules/sidebar.js';

// functions
// clear extra indent from code
function clearIndent(code) {
  let codeLines = code.split('\n').filter(item => item.trim());
  let indentLevel = codeLines[0].match(/^ */)[0].length;

  return codeLines.map(line => {
    if (!line.slice(0, indentLevel).trim())
      return line.slice(indentLevel);
    else
      return line.replace(/^ */, '');
  }).join('\n');
}

// remove autofocus attr from elements
function preventAutofocus(code) {
  return code.replaceAll(' autofocus=""', '');
}

// events
window.addEventListener("DOMContentLoaded", function () {
  // sidebar
  const sidebar = document.querySelector('.post-sidebar');
  sidebarSmoothScroll(sidebar);

  const codeExamples = document.querySelectorAll('article.article__post .code-example');

  // display examples, outputs
  for (const code of codeExamples) {
    // skip empty code blocks
    if (!code.innerHTML.trim()) continue;

    const htmlCode = clearIndent(code.innerHTML);
    const htmlSafeCode = preventAutofocus(htmlCode);

    let errorMsg = '';

    if (htmlCode.search('autofocus') != -1) {
      errorMsg = '<p><b>نکته: </b>در این مقاله از autofocus جلو گیری میشود. برای دیدن نتیجه کد را سیستم خودتان امتحان کنید</p>';
    }

    const htmlOutput = `
  <!-- code output -->
  <p>خروجی :</p>

  ${errorMsg}

  <code class="code-output">${htmlSafeCode}</code>`;

    // clear current html
    code.innerHTML = '';
    // convert code to html entities
    code.insertAdjacentText('beforeend', htmlCode);
    // display output after code example
    code.insertAdjacentHTML('afterend', htmlOutput);
  }

  document.body.scrollIntoView();
});