let output = document.querySelector("#output");

let allinput = document.querySelectorAll("textarea");

allinput.forEach((el, index) => {
    el.addEventListener("keyup",() =>{
        if(index == 0 ){
           htmlCode = el.value;
        }
        if(index == 1){
            cssCode = el.value;

        }
        if(index == 2){
            jsCode = el.value;

        }

        output.contentDocument.body.innerHTML = htmlCode;

        output.contentDocument.head.innerHTML = `<style>${cssCode}</style>`;
 
        output.contentWindow.eval(jsCode);
    })
})







let htmlCode , cssCode , jsCode = "";









