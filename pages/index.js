import { useState } from 'react';
import MainGrid  from "../src/components/MainGrid";
import Box from '../src/components/Box';
import { ProfileRelationsBoxWrapper } from "../src/components/ProfileRelations";

import { AlurakutMenu, AlurakutProfileSidebarMenuDefault, OrkutNostalgicIconSet} from '../src/lib/AlurakutCommons';

/*const Title = styled.h1`
  font-size: 50px;
  color: ${({ theme }) => theme.colors.primary};
`*/
function ProfileSideBar(props){
  return(
    <Box as="aside">
      <img src={`https://github.com/${props.githubUser}.png`} alt="Foto de perfil do usuário" style={{borderRadius: '10px'}}/>
      <hr/>
      
      <a className="boxLink" href={`https://github.com/${props.githubUser}`}>
        @{props.githubUser}
      </a>
      <hr/>

      <AlurakutProfileSidebarMenuDefault />
    </Box>
  );
}

export default function Home() {
    const githubUser = "DaianeM";
    const pessoasFavoritas = [
      'juunegreiros', 'omariosouto', 
      'peas', 'rafaballerini', 
      'marcobrunodev', 'felipefialho'
    ];

    const [comunidades, setComunidades] = useState([{
      id: "122356564",
      titulo: "Eu odeio acordar cedo",
      imagem: "https://alurakut.vercel.app/capa-comunidade-01.jpg"
    }]);
  
  return(
    <>
      <AlurakutMenu/>
      <MainGrid>
        <div className="profileArea" style={{gridArea: 'profileArea'}}>
        <ProfileSideBar githubUser={githubUser}/>
        </div>
        <div  className="welcomeArea" style={{gridArea: 'welcomeArea'}}>
          <Box>
           <h1 className="title">Bem-Vindo(a)</h1>
           <OrkutNostalgicIconSet/>
          </Box>
          <Box>
            <h2 className="subTitle">O que você deseja fazer?</h2>
            <form onSubmit={function handleCriaComunidade(event){
              event.preventDefault();

              //captura tds os dados do form
              const dadosForm = new FormData(event.target);

              const comunidade = {
                id: new Date().toISOString(),
                titulo: dadosForm.get('title'),
                imagem: dadosForm.get('image')
              }

              setComunidades([...comunidades, comunidade]);
            }}>
              <div>
                <input placeholder="Qual vai ser o nome da sua comunidade?"
                  name="title"
                  aria-label="Qual vai ser o nome da sua comunidade?"
                />
              </div>
              <div>
                <input placeholder="URL para usar como capa"
                  name="image"
                  aria-label="URL para usar como capa"
                />
              </div>
              <button>Criar comunidade</button>
            </form>
          </Box>
        </div>
        <div className="profileRelationsArea" style={{gridArea: 'profileRelationsArea'}}>
          <ProfileRelationsBoxWrapper>
            <h2 className="subTitle">Pessoas da comunidade ({pessoasFavoritas.length})</h2>
            <ul>
                {pessoasFavoritas.map((pessoaFavorita) => {
                  return (
                    <li key={pessoaFavorita}>
                      <a href={`/users/${pessoaFavorita}`} >
                        <img src={`https://github.com/${pessoaFavorita}.png`} />
                        <span>{pessoaFavorita}</span>
                      </a>
                    </li>
                  )
                })}
              </ul>
            </ProfileRelationsBoxWrapper>
            <ProfileRelationsBoxWrapper>
              <h2 className="subTitle">Comunidades ({comunidades.length})</h2>
              <ul>
                  {comunidades.map((comunidade) => {
                    return (
                      <li key={comunidade.id}>
                        <a href={`/users/${comunidade.titulo}`} >
                          <img src={comunidade.imagem} />
                          <span>{comunidade.titulo}</span>
                        </a>
                      </li>
                    )
                  })}
                </ul>
              </ProfileRelationsBoxWrapper>
        </div>
      </MainGrid>
    </>
  );
}
