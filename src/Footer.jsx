
function Footer() {

    const styles = {
        fontSize: "clamp(1.2rem, 3vw, 1.5rem)",
        marginTop: "2.5rem",
        color: "#6c757d",
        textAlign: "center",
    }

    const links = {
        fontSize: "clamp(1.7rem, 3vw, 1rem",
        display: "flex",
        justifyContent: "center",
        gap: "2rem",
        marginTop: "1.5rem"
    }

    const linkTag = {
        color: "#6c757d",
        opacity: "75%"
    }

    return(
        <footer>
            <h3 style={styles}>Made By Derrick Develops</h3>
            <div className="contact-links" style={links}>
                <a href="https://github.com/DerrickDevelops/Password-Generator" className="git-hub" style={linkTag}><i class="fa-brands fa-github"></i></a>
                <a href="https://www.linkedin.com/in/derrick-murray-753a66233" className="linkedin" style={linkTag}><i class="fa-brands fa-linkedin"></i></a>
                <a href="https://derrickdevelops.com/" className="personal-website" style={linkTag}><i class="fa-solid fa-globe"></i></a>
            </div>
        </footer>
    )
}

export default Footer