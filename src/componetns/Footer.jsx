import React from 'react'
import './../App.css';

function Footer() {
    return (
        <div>
            <section class="footer">
                <div class="footer-box">
                    <h3>Company</h3>
                    <a href="#">About</a>
                    <a href="#">Features</a>
                    <a href="#">Works</a>
                    <a href="#">Career</a>
                </div>
                <div class="footer-box">
                    <h3>FAQ</h3>
                    <a href="#">Account</a>
                    <a href="#">Features</a>
                    <a href="#">Works</a>
                    <a href="#">Career</a>
                </div>
                <div class="footer-box">
                    <h3>Resources</h3>
                    <a href="#">About</a>
                    <a href="#">Features</a>
                    <a href="#">Works</a>
                    <a href="#">Career</a>
                </div>
                <div class="footer-box">
                    <h3>Social</h3>
                    <div class="social">
                        <a href="#"><i class="ri-facebook-fill"></i></a>
                        <a href="#"><i class="ri-instagram-fill"></i></a>
                        <a href="#"><i class="ri-twitter-fill"></i></a>
                    </div>
                </div>
            </section>



            <div class="copyright">
                <div class="end-text">
                    <p>© CopyRight 2024 By Muhammad Yaseen</p>
                </div>
            </div>
        </div>
    )
}

export default Footer