import MainGrid  from "../src/components/MainGrid";
import Box from '../src/components/Box';
import { ProfileRelationsBoxWrapper } from "../src/components/ProfileRelations";

import { AlurakutMenu, OrkutNostalgicIconSet} from '../src/lib/AlurakutCommons';

/*const Title = styled.h1`
  font-size: 50px;
  color: ${({ theme }) => theme.colors.primary};
`*/
function ProfileSideBar(props){
  return(
    <Box>
      <img src={`https://github.com/${props.imgUser}.png`} alt="Foto de perfil do usuário" style={{borderRadius: '10px'}}/>
    </Box>
  );
}

export default function Home() {
   const imgUser = "DaianeM";
   const pessoasFavoritas = ['juunegreiros', 'omariosouto', 'peas', 'rafaballerini', 'marcobrunodev', 'felipefialho'];

  return(
    <>
      <AlurakutMenu/>
      <MainGrid>
        <div className="profileArea" style={{gridArea: 'profileArea'}}>
        <ProfileSideBar imgUser={imgUser}/>
        </div>
        <div  className="welcomeArea" style={{gridArea: 'welcomeArea'}}>
          <Box>
           <h1 className="title">Bem-Vindo(a)</h1>
           <OrkutNostalgicIconSet/>
          </Box>
        </div>
        <div className="profileRelationsArea" style={{gridArea: 'profileRelationsArea'}}>
          <ProfileRelationsBoxWrapper>
            <h2 className="smalltitle">Pessoas Favoritas ({pessoasFavoritas.length})</h2>
            <ul>
                {pessoasFavoritas.map((pessoaFavorita) => {
                  return (
                    <li>
                      <a href={`/users/${pessoaFavorita}`} key={pessoaFavorita}>
                        <img src={`https://github.com/${pessoaFavorita}.png`} />
                        <span>{pessoaFavorita}</span>
                      </a>
                    </li>
                  )
                })}
              </ul>
            </ProfileRelationsBoxWrapper>
            <Box>
              Comunidade
            </Box>
        </div>
      </MainGrid>
    </>
  );
}
