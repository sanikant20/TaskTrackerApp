import React from 'react';

const Footer = () => {
    return (
        <div>
            {/* Footer Section */}
            <footer className="bg-dark text-white text-center py-4">
                <div className="container">
                    <p>
                        <a
                            href="https://github.com/sanikant20"
                            className="text-white"
                            style={{ textDecoration: 'none' }}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <i className="fab fa-github me-2"></i>
                            My GitHub Profile
                        </a>
                    </p>
                    <p>
                        <a
                            href="https://www.linkedin.com/in/sanikant-kushwaha-25617b284"
                            className="text-white"
                            style={{ textDecoration: 'none' }}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <i className="fab fa-linkedin me-2"></i>
                            My LinkedIn Profile
                        </a>
                    </p>
                    <p>
                        <a
                            href="mailto:kushsani508@gmail.com"
                            className="text-white"
                            style={{ textDecoration: 'none' }}
                        >
                            <i className="fas fa-envelope me-2"></i>
                            kushsani508@gmail.com
                        </a>
                    </p>
                    {/* Copyright */}
                    <p>&copy; 2024 Sanikant Kushwaha. All Rights Reserved.</p>
                </div>
            </footer>
        </div>
    );
}

export default Footer;
