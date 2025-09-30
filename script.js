// photo drag
const corkboardImages = document.querySelectorAll('.photos img');

corkboardImages.forEach(img => {
    img.style.position = 'absolute'; 
    img.style.cursor = 'grab';

    img.addEventListener('mousedown', (e) => {
        let shiftX = e.clientX - img.getBoundingClientRect().left;
        let shiftY = e.clientY - img.getBoundingClientRect().top;

        img.style.zIndex = 1000;
        img.style.cursor = 'grabbing';

        function moveAt(pageX, pageY) {
            img.style.left = pageX - shiftX + 'px';
            img.style.top = pageY - shiftY + 'px';
        }

        function onMouseMove(e) {
            moveAt(e.pageX, e.pageY);
        }

        document.addEventListener('mousemove', onMouseMove);

        img.onmouseup = () => {
            document.removeEventListener('mousemove', onMouseMove);
            img.onmouseup = null;
            img.style.cursor = 'grab';
        };
    });

    img.ondragstart = () => false; 
});

// hides description for the projecrs
const projects = document.querySelectorAll('.project');

projects.forEach(project => {

    const toggleBtn = document.createElement('button');

    toggleBtn.textContent = "Show/Hide";

    toggleBtn.style.marginBottom = "8px";

    toggleBtn.style.padding = "3px 6px";

    toggleBtn.style.fontSize = "14px";

    toggleBtn.style.cursor = "pointer";

    toggleBtn.style.backgroundColor = "#e88ca1";

    toggleBtn.style.color = "#fff";

    toggleBtn.style.border = "none";

    toggleBtn.style.borderRadius = "4px";

   
    project.insertBefore(toggleBtn, project.firstChild);

   
    const desc = project.querySelector('p');
    const gallery = project.querySelector('.project-gallery');

    
    toggleBtn.addEventListener('click', () => {
        if (desc.style.display === "none") {
            desc.style.display = "block";
        } else {
            desc.style.display = "none";
        }

        if (gallery) {
            if (gallery.style.display === "none") {
                gallery.style.display = "flex";
            } else {
                gallery.style.display = "none";
            }
        }
    });
});


