import '../styles/Skills.css';

export default function Skills() {
    const infoData = [
            "Analyse juridique",
            "Maîtrise des textes juridiques",
            "------------------------------",
            "Python :",
            "les bases",
            "numpy",
            "pandas",
            "tkinter",
            "-------------------------------",
            "Maîtrise de logiciel et IA :",
            "Git/Github",
            "Word/Excel(niveau débutant)",
            "DeepSeek/Cursor",
            "--------------------------------",
            "Developpement web :",
            "HMTL/CSS/JS",
            "React.js( niveau debutant)",
    ]
        
        
    return(
        <section className='skill_main'>
            <div className='skill_content'>
                <h3 className='skill_title'>
                    Compétences
                </h3>
                <ul>
                    {infoData.map((items, idx) => (
                        <li className='skill_list' key={idx}>{items}</li>
                    ))}
                </ul>
            </div>
        </section>
    )
}