import React from 'react';
import styled from 'styled-components'
import Menu from './comoponents/Menu'
import Carousel from './comoponents/Carousel'
import dadosIniciais from './data/dados_iniciais.json'
import BannerMain from './comoponents/BannerMain';

function App() {
  return (
    <div style={ {background: "#141414"}}>
      <Menu />

      <BannerMain
        videoTitle={dadosIniciais.categorias[0].videos[0].titulo}
        url={dadosIniciais.categorias[0].videos[0].url}
        videoDescription={"O que é front-end? Trabalhando na área"}
        />

      <Carousel
      ignoreFirstVideo
      category={dadosIniciais.categorias[0]}
      />

      <Carousel
      ignoreFirstVideo
      category={dadosIniciais.categorias[1]}
      />
      
    </div>
  );
}

export default App;
