!function(){var t=document.querySelector("button[data-start]"),e=document.querySelector("button[data-stop]"),n=0;function d(){document.body.style.backgroundColor="#".concat(Math.floor(16777215*Math.random()).toString(16).padStart(6,0))}t.addEventListener("click",(function(){n=setInterval(d,1e3),t.disabled=!0,e.disabled=!1})),e.addEventListener("click",(function(){clearInterval(n),t.disabled=!1,e.disabled=!0}));var a=document.createElement("div");a.classList.add("buttons"),a.setAttribute("style","display: flex; gap: 50px; justify-content: center; margin-top: 30px;"),t.style.padding="20px 50px",e.style.padding="20px 50px",a.append(t,e),document.querySelector("body").querySelector("p").insertAdjacentElement("afterend",a)}();
//# sourceMappingURL=01-color-switcher.ad603e2a.js.map