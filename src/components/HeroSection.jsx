function Hero() {
    return (
        <section className="hero-section">
            <div className="hero-left">
                <h1 className="hero-title">
                    Moon
                    <em className="line-italic">&amp; Sun</em>
                    Coffee
                </h1>
                <p className="hero-sub">
                    Where every cup is a quiet ceremony — hand-brewed specialty coffee &amp; handcrafted cakes, nestled in Kuching's Old Street.
                </p>
                <p className="hero-address">📍 No. 11, Wayang Street, 93000 Kuching, Sarawak</p>
                <div className="btn-row">
                    <a href="#book" class="btn-primary">Reserve a Table</a>
                    <a href="#menu" class="btn-ghost">View Menu</a>
                </div>
            </div>
            <div className="hero-right">
                <image className="hero-img"
                    src="/assets/hero.png"
                    alt="Speacialty coffee at Moon & Sun Cafe"
                />
            </div>
        </section>
    );
}

export default Hero;