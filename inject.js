document.addEventListener(
  "copy",
  e => {
    const selection = window.getSelection();
    window.seletedText = selection.baseNode.data.slice(
      selection.baseOffset,
      selection.extentOffset
    );
    console.log(window.seletedText);
    e.stopPropagation();
  },
  true
);

console.log("成功注入 xcopy");
