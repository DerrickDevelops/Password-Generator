
function Footer() {

    const styles = {
        fontSize: "1.5rem",
        opacity: "75%"
    }

    const links = {
        fontSize: "2rem",
        display: "flex",
        justifyContent: "center",
        gap: "2rem"
    }

    const linkTag = {
        color: "#213547",
        opacity: "75%"
    }

    return(
        <footer>
            <h3 style={styles}>Made By Derrick Develops</h3>
            <div className="contact-links" style={links}>
                <a href="#" className="git-hub" style={linkTag}><i class="fa-brands fa-github"></i></a>
                <a href="#" className="linkedin" style={linkTag}><i class="fa-brands fa-linkedin"></i></a>
                <a href="#" className="personal-website" style={linkTag}><i class="fa-solid fa-globe"></i></a>
            </div>
        </footer>
    )
}

export default Footer