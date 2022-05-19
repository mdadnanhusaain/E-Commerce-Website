const createFooter = () => {
    let footer = document.querySelector('footer');

    footer.innerHTML = `
    <div class="footer-content">
        <img src="img/light-logo.png" class="logo" alt="">
        <div class="footer-ul-container">
            <ul class="category">
                <li class="category-title">men</li>
                <li><a href="#" class="footer-link">t-shirts</a></li>
                <li><a href="#" class="footer-link">sweatshirts</a></li>
                <li><a href="#" class="footer-link">shirts</a></li>
                <li><a href="#" class="footer-link">jeans</a></li>
                <li><a href="#" class="footer-link">trousers</a></li>
                <li><a href="#" class="footer-link">shoes</a></li>
                <li><a href="#" class="footer-link">casuals</a></li>
                <li><a href="#" class="footer-link">formals</a></li>
                <li><a href="#" class="footer-link">sports</a></li>
                <li><a href="#" class="footer-link">watch</a></li>
            </ul>
            <ul class="category">
                <li class="category-title">women</li>
                <li><a href="#" class="footer-link">t-shirts</a></li>
                <li><a href="#" class="footer-link">sweatshirts</a></li>
                <li><a href="#" class="footer-link">shirts</a></li>
                <li><a href="#" class="footer-link">jeans</a></li>
                <li><a href="#" class="footer-link">trousers</a></li>
                <li><a href="#" class="footer-link">shoes</a></li>
                <li><a href="#" class="footer-link">casuals</a></li>
                <li><a href="#" class="footer-link">formals</a></li>
                <li><a href="#" class="footer-link">sports</a></li>
                <li><a href="#" class="footer-link">watch</a></li>
            </ul>
        </div>
    </div>
    <p class="footer-title">About Company</p>
    <p class="info">This website is a business website. In this website we are selling products for men, women, kids and also the accessories required for the uses of people.</p>
    <p class="info">Support Emails - vedansh19singh@gmail.com, mdadnanhusaain@gmail.com, gautammakharia36@gmail.com</p>
    <p class="info">Mobile No.: - 6377257467, 9523870330, 7733061728</p>
    <div class="footer-social-container">
        <div>
            <a href="https://flowcv.me/mdadnanhusaain" class="social-link">Md Adnan Hussain</a>
            <a href="https://flowcv.me/gautamkumar" class="social-link">Gautam Kumar</a>
            <a href="https://www.linkedin.com/in/vedansh19singh" class="social-link">Vedansh Singh</a>
        </div>
    </div>
    <p class="footer-credit">Modern House, Best apparels online store</p>
    `;
}

createFooter();