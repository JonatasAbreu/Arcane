import { DefaultUi, Player, Youtube } from "@vime/react";
import React from "react";
import { Container, ContainerItems, PlayerDiv } from './styles'
import '@vime/core/themes/default.css'


function Home() {
    return (
        <Container>
            <h1>Veja alguns vídeos e players <br /> de músicas dessa série incrível</h1>
            <ContainerItems>
                <PlayerDiv>
                    <div>
                        <Player>
                            <Youtube videoId="3MB3OK3Xnvs" />
                            <DefaultUi />
                        </Player>
                    </div>
                    <div>
                        <Player>
                            <Youtube videoId="RAKWlGS-0UY" />
                            <DefaultUi />
                        </Player>
                    </div>
                    <div>
                        <Player>
                            <Youtube videoId="BzmswqAh6dY" />
                            <DefaultUi />
                        </Player>
                    </div>
                    <div>
                        <Player>
                            <Youtube videoId="eXs9JL0j6dY" />
                            <DefaultUi />
                        </Player>
                    </div>
                </PlayerDiv>
                <h1>Comentários</h1>
                <PlayerDiv>
                    <div>
                        <Player>
                            <Youtube videoId="09Yz_AB7nZY" />
                            <DefaultUi />
                        </Player>
                    </div>
                    <div>
                        <Player>
                            <Youtube videoId="RLXy1R_cAXA" />
                            <DefaultUi />
                        </Player>
                    </div>
                    <div>
                        <Player>
                            <Youtube videoId="Xt6pztKK5jk" />
                            <DefaultUi />
                        </Player>
                    </div>
                    <div>
                        <Player>
                            <Youtube videoId="NnWA48Fi0io" />
                            <DefaultUi />
                        </Player>
                    </div>
                </PlayerDiv>
                <h1>Músicas</h1>
                <PlayerDiv>
                    <div>
                        <Player>
                            <Youtube videoId="2Yr3sKPi8mM" />
                            <DefaultUi />
                        </Player>
                    </div>
                    <div>
                        <Player>
                            <Youtube videoId="3jfI-z__GY0" />
                            <DefaultUi />
                        </Player>
                    </div>
                    <div>
                        <Player>
                            <Youtube videoId="omgSWqwVTjY" />
                            <DefaultUi />
                        </Player>
                    </div>
                    <div>
                        <Player>
                            <Youtube videoId="w88d-uKh_Uw" />
                            <DefaultUi />
                        </Player>
                    </div>
                </PlayerDiv>
                <PlayerDiv>
                    <div>
                        <Player>
                            <Youtube videoId="F5tSoaJ93ac" />
                            <DefaultUi />
                        </Player>
                    </div>
                    <div>
                        <Player>
                            <Youtube videoId="pKNEx-9OqRM" />
                            <DefaultUi />
                        </Player>
                    </div>
                    <div>
                        <Player>
                            <Youtube videoId="f_Z1E32mxGg" />
                            <DefaultUi />
                        </Player>
                    </div>
                    <div>
                        <Player>
                            <Youtube videoId="y_fB0IMbq54" />
                            <DefaultUi />
                        </Player>
                    </div>
                </PlayerDiv>
            </ContainerItems>
        </Container>
    )
}

export default Home