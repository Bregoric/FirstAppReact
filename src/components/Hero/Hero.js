import styles from './Hero.module.scss';
import PageTitle from "../PageTitle/PageTitle";
import NavBar from "../NavBar/NavBar";
const Hero = () => {

    return (
        <>
        <NavBar />
         <div className = { styles.hero } >
        <PageTitle> My first React App </PageTitle>  
        <p className = { styles.subtitle } > A simple to - do app, with lists, columns and card </p> </div >

        </>
    );
};

export default Hero;