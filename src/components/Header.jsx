import trollFace from "../assets/troll-face.png"

export default function Header() {
    return (
        <header className="header">
            <img src={trollFace} alt="troll face" className="header--image" />
            <h2 className="header--title">Meme Generator</h2>
            <h4 className="header--title2">React Course - Project 3</h4>
        </header>
    )
}