document.addEventListener("DOMContentLoaded", (event) => {

    setTimeout(() => {

        document.querySelector("#load-iframe-map").innerHTML = `
        <iframe class="contact__iframe" frameborder="0" scrolling="no" marginheight="0"
                                marginwidth="0" loading="lazy" referrerpolicy="no-referrer-when-downgrade"
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3156.5176702658005!2d176.1534504757557!3d-37.70752512797355!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6d6dda3595e9b943%3A0x5876c928081046e7!2s94C%20Sixteenth%20Avenue%2C%20Tauranga%20South%2C%20Tauranga%203112!5e0!3m2!1ses-419!2snz!4v1696115899253!5m2!1ses-419!2snz"></iframe>
    `

    }, 500);



})