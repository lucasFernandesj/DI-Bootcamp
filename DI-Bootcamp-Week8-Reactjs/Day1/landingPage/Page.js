import FooterPage from './FooterPage';
import FormPage from './FormPage';
import Section from './Section';
import Header from './Header';
import './style.css'

// import '../../../style/landingPage.css'
import React from 'react'
import Footer from './FooterPage';
// import './style.css'

class Page extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <>
                <Header />
                <Section />
                <Footer />
                <FormPage />
            </>
        )
    }
}

export default Page