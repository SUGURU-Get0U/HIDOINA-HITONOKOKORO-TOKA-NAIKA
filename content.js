// Its the only file where we can manipulate html <tags> in the user screen

function Naoya_pic_turner() {
    // variable to contain the Naoya images
    const naoya_pool = [
    chrome.runtime.getURL("public/naoya/pic.jpg"),
    chrome.runtime.getURL("public/naoya/lets_larp.jpg")
];
    const page_pics = document.querySelectorAll("img:not([data-naoya])");

    page_pics.forEach((individualImage) => {
        var array_index = Math.floor((Math.random()) * naoya_pool.length)

        individualImage.src = naoya_pool[array_index];
        individualImage.srcset = naoya_pool[array_index];
        individualImage.dataset.naoya = "true";
    })

    const new_selector_page_pics = document.querySelectorAll('xml:not([data-naoya])','svg:not([data-naoya])','div:not([data-naoya]), span:not([data-naoya]), section:not([data-naoya]), a:not([data-naoya])');

    containers.forEach((el) => {
        const style = window.getComputedStyle(el).backgroundImage;
        
        // If the element has a background image that isn't 'none'
        if (style !== 'none' && style.includes("url(")) {
            const randomIndex = Math.floor(Math.random() * naoya_pool.length);
            
            // Override the background image
            el.style.backgroundImage = `url("${naoya_pool[randomIndex]}")`;
            el.style.backgroundSize = "cover"; // Ensure Naoya fits the container
            el.dataset.naoya = "true";
        }
    });
    
};


Naoya_pic_turner();

const observer = new MutationObserver((mutations)=> {
    Naoya_pic_turner()
})

observer.observe(document.body, {
    childList: true, // Watch for new elements being added
    subtree: true    // Watch the entire tree of elements, not just the top layer
})