document.addEventListener(
  "copy",
  e => {
    console.log("document copy");
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

console.log("注册 document copy");
