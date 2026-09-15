import { changePage } from "../model/model.js";

function loadMahPages(){

    changePage("home");

    const navLinks = document.querySelectorAll("nav a");

    navLinks.forEach((link)=>{

        link.addEventListener("click", (e)=>{
            e.preventDefault();

            let pageId = e.currentTarget.id;
            changePage(pageId)
        });
    });


};

loadMahPages();