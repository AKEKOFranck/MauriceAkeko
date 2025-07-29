import '../styles/Info.css';
import { FaUser } from "react-icons/fa";


export default function Profil() {
    
    return(
        <section className='profil_main'>
            <div className='profil_box'>
                <h5 className='profil_title'>
                    Profil :
Étudiant en droit passionné par les branches droit administratif, international et constitutionnel, avec un fort intérêt pour les technologies (Python, JavaScript, Git/GitHub, Word, Excel) et l'intelligence artificielle (IA).

Objectif :
Combiner expertise juridique et compétences techniques pour :

Automatiser des processus juridiques (analyse de jurisprudence, rédaction automatisée).

Développer des outils d’aide à la décision pour le droit public et international.

Exploiter l’IA pour la recherche juridique, la veille réglementaire ou la modélisation de données.

Créer des solutions innovantes (plateformes collaboratives, bases de données juridiques optimisées).

Vision :
Faire évoluer le domaine juridique grâce à la transformation numérique, en rapprochant le droit des nouvelles technologies pour plus d’efficacité, d’accessibilité et d’innovation.

Motivation :
"Le droit et la tech sont deux leviers puissants pour façonner l’avenir – mon ambition est de les unir pour un impact concret."
                </h5>
            </div>
             <div className='profil_box1'>
                <FaUser className='profil_icon' />
                <h5 className='profil_text'>
                    <p>Nom : AKEKO </p>
                    <p>Prénom : Maurice Franck </p>
                    <p>Age : 22 ans </p>
                    <p>Niveau d'étude : Master 1 en droit public </p>
                    <p>Diplôme 1 : Licence en droit public </p>
                    <p>Diplôme 2 : Certification en python </p>
                    <p>Diplôme 3 : Certification en développement web </p>
                </h5>
            </div>
        </section>
    )
}