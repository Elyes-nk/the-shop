import React from 'react';
import Title from '../../components/ui/title/Title'
import about from '../../../public/about.jpeg'

const Index = () => {

    return (
        <>
        <Title title="The shop, un des leaders mondiaux de la vente en ligne d’art"/>
        <img src={about.src} alt="shop" />

        </>
    );
}

export default Index;
