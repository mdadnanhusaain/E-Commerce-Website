const createFooter = () => {
    let footer = document.querySelector('footer');

    footer.innerHTML = 
    '
    <div class="footer-content">
            <><img src="Assets/Img/Icons/logo_bordered.png" class="logo" alt="">
            <div class="footer-container">
                <ul class="category">
                    <li class="category-title">men</li>
                    <li><a href="#" class="footer-link">t-shirts</a></li>
                    <li><a href="#" class="footer-link">Shirts</a></li>
                    <li><a href="#" class="footer-link">Sweetshirts</a></li>
                    <li><a href="#" class="footer-link">Jeans</a></li>
                    <li><a href="#" class="footer-link">trousers</a></li>
                    <li><a href="#" class="footer-link">Shoes</a></li>
                    <li><a href="#" class="footer-link">casuals</a></li>
                    <li><a href="#" class="footer-link">formals</a></li>
                    <li><a href="#" class="footer-link">Watches</a></li>
                </ul>

                <ul class="category">
                    <li class="category-title">women</li>
                    <li><a href="#" class="footer-link">dresses</a></li>
                    <li><a href="#" class="footer-link">Shorts</a></li>
                    <li><a href="#" class="footer-link">Heels</a></li>
                    <li><a href="#" class="footer-link">Jeans</a></li>
                    <li><a href="#" class="footer-link">Skirts</a></li>
                    <li><a href="#" class="footer-link">Kurtis</a></li>
                    <li><a href="#" class="footer-link">Saree</a></li>
                    <li><a href="#" class="footer-link">Jumpsuits</a></li>
                    <li><a href="#" class="footer-link">jackets</a></li>
                </ul>
                <ul class="category">
                    <li class="category-title">Kids and Accessories</li>
                    <li><a href="#" class="footer-link">Blazer</a></li>
                    <li><a href="#" class="footer-link">Crocks</a></li>
                    <li><a href="#" class="footer-link">Frock</a></li>
                    <li><a href="#" class="footer-link">Shoes</a></li>
                    <li><a href="#" class="footer-link">Bracelet</a></li>
                    <li><a href="#" class="footer-link">Earrings</a></li>
                    <li><a href="#" class="footer-link">Necklace</a></li>
                    <li><a href="#" class="footer-link">Toys</a></li>
                    <li><a href="#" class="footer-link">Handbags</a></li>
                </ul>

            </div>

        </div><p class="footer-title">about company</p><p class="info">This company is working on the trends and fashions day by day.</p><p class="info">support emails - vedansh19singh@gmail.com</p><p class="info">telephone - 6377257467</p><div class="footer-social-container">
                <div>
                    <a href="#" class="social-link">terms & conditions</a>
                    <a href="#" class="social-link">privacy</a>
                </div>
                <div>
                    <a href="#" class="social-link">instagram</a>
                    <a href="#" class="social-link">facebook</a>
                    <a href="#" class="social-link">twitter</a>
                </div>
            </div><p class="footer-credit">Modern house, Best online store</p></>
    ';
}
createFooter()