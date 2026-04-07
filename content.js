// Its the only file where we can manipulate html <tags> in the user screen


function Naoya_pic_turner() {
    
    // variable to contain the Naoya images
    var naoya_images = chrome.runtime.getURL("./public/naoya/pic.jpg");
    const page_pics = document.querySelectorAll("img:not([data-naoya])");

    page_pics.forEach((individualImage) => {
        individualImage.src = naoya_images;
        individualImage.dataset.naoya = "true";
    })

};


Naoya_pic_turner();

const observer = new MutationObserver(()=> {
    Naoya_pic_turner()
})

observer.observe(document.body, {
    childList: true, // Watch for new elements being added
    subtree: true    // Watch the entire tree of elements, not just the top layer
})