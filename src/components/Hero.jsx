import React from 'react';

const Hero = ({ setCategory }) => {
    return (
        <div className="hero-section">
            <div className="container position-relative z-index-1">
                <div className="row align-items-center justify-content-center text-center text-md-start my-5 py-5">
                    <div className="col-lg-7 mb-5 mb-lg-0">
                        <div className="badge premium-badge mb-3">#1 News Source</div>
                        <h1 className="display-3 fw-bold hero-title mb-4">
                            Stay Ahead with <br />
                            <span className="text-gradient">Stellar News</span>
                        </h1>
                        <p className="lead text-muted mb-5 hero-subtitle">
                            Delivering breaking stories, global insights, and the latest trends tailored exclusively for you. Experience news reimagined.
                        </p>
                        <div className="d-flex flex-wrap gap-3 justify-content-center justify-content-md-start">
                            <button
                                className="btn btn-primary premium-btn hero-btn"
                                onClick={() => setCategory('general')}
                            >
                                Top Headlines
                            </button>
                            <button
                                className="btn btn-outline-light premium-outline-btn hero-btn"
                                onClick={() => setCategory('technology')}
                            >
                                Explore Tech
                            </button>
                        </div>
                    </div>
                    <div className="col-lg-5 d-none d-lg-block">
                        <div className="hero-image-wrapper">
                            <img
                                src="https://images.unsplash.com/photo-1504711434969-e33886168f5c?q=80&w=1000&auto=format&fit=crop"
                                alt="News illustration"
                                className="img-fluid rounded-4 shadow-lg hero-img"
                            />
                            <div className="hero-shape shape-1"></div>
                            <div className="hero-shape shape-2"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
