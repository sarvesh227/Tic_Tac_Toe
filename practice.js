let changeParagraph = () => {
  let abc = document.querySelector('p');
  abc.textContent = "This is final paragraph";
};

document.querySelector('button')
.addEventListener("click", changeParagraph);
