let menuItems = document.querySelectorAll(".menu-item");


menuItems.forEach(menuItem => {
    menuItem.addEventListener("click", (event) => {
        if(event.target.classList.contains('show-submenu')){
            event.target.classList.toggle('show');
        } else {
            document.querySelector('.menu-item.active').classList.remove('active');
            if(event.target.classList.contains('sub-item')) {
                document.getElementById('link-integrantes').classList.add('active');
            } else {
                event.target.classList.add('active');
            }
            
            document.getElementById('top-menu').classList.remove('show');
            let sectionTarget = event.target.getAttribute('data-section');
            let sectionY = (document.getElementById(sectionTarget).offsetTop) - 75;
    
            window.scrollTo(0, sectionY);
        }
    })
})

document.getElementById("show-menu").addEventListener('click', () => {
    document.getElementById("top-menu").classList.toggle('show');
})

document.querySelector('body').addEventListener('click', (event) => {
    if(!event.target.classList.contains('show-submenu')) {
        document.getElementById('link-integrantes').classList.remove('show')
    }
})

/* DISCOGRAFIA */
function slider(number) {
    let albums = document.querySelectorAll(".album");
    let thumbnails = document.querySelectorAll(".demo")

    albums.forEach(album => {
        album.classList.remove("active")
    })

    thumbnails.forEach(thumbnail => {
        thumbnail.classList.remove("active")
    })

    albums[number].classList.add("active")
    thumbnails[number].classList.add("active")

    let tittle = albums[number].querySelector("img").alt
    let caption = document.getElementById("caption")

    caption.innerHTML = tittle
}

slider(0)

let thumbnails = document.querySelectorAll(".demo");

thumbnails.forEach((thumb, index) => {
    thumb.addEventListener('click', () => {
        slider(index);
    });
})
