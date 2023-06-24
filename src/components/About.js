import { Icon, Container, Section, Collapsible, CollapsibleItem, Slider, Slide, Caption } from 'react-materialize';
import { ThemeContext } from './ThemeContext';
import { useContext } from 'react';
export default function About() {
    return (
        <div className="about">
            <Collapsible accordion>
                <CollapsibleItem expanded={false} header="Who are we?" icon={<Icon>groups</Icon>} node="div" style={{ color: 'black', backgroundColor: 'white' }}>
                    CJ CGV is one of the top 5 largest cinema clusters in the world and the largest distributor and cinema complex in Vietnam. Our goal is to become a typical company model contributing to the development of the company. of the Vietnamese film industry. <br />
                    CJ CGV has created a unique concept of transforming a traditional cinema into a cultural complex “Cultureplex”, where audiences not only come to enjoy diverse cinema through advanced technologies such as SCREENX, IMAX , STARIUM, 4DX, Dolby Atmos, as well as enjoy completely new and different cuisine while experiencing the best service at CGV. <br />
                    Through efforts in building the Talented Screenwriter program, CJ Short Film Project, TOTO Filmmaking Class, CGV ArtHouse and sponsoring major domestic film festival activities such as the International Film Festival Hanoi International Film Festival, Vietnam Film Festival, CJ CGV Vietnam wishes to discover and support the development of talented young filmmakers in Vietnam.        </CollapsibleItem>
                <CollapsibleItem expanded={false} header="Our Mission" icon={<Icon>flag</Icon>} node="div" style={{ color: 'black', backgroundColor: 'white' }}>
                    CJ CGV Vietnam also focuses on the audience in areas that do not have much access to cinema, by creating opportunities for them to enjoy high-quality movies through programs. programs for the community such as Laughing Moon and Cinema for Everyone. <br/>
                    CJ CGV Vietnam will continue its persistent journey in contributing to building a stronger and stronger Vietnamese film industry with potential customers, filmmakers, and reputable business partners. , and with society as a whole.                </CollapsibleItem>
                <CollapsibleItem expanded={false} header="Our Major Film Studios Partners" icon={<Icon>apartment</Icon>} node="div" style={{ color: 'black', backgroundColor: 'white' }}        >
                    <Slider>
                        <Slide image={<img className='opa' alt="" src="https://i.ytimg.com/vi/hgs07ztRvFE/maxresdefault.jpg" />}>
                            <Caption placement="left">
                                <h3>
                                    20th Century Studios
                                </h3>
                                <h5 className="light grey-text text-lighten-3">
                                    20th Century Studios is a film studio that is a subsidiary of The Walt Disney Studios, a division of The Walt Disney Company.
                                </h5>
                            </Caption>
                        </Slide>
                        <Slide image={<img className='opa' alt="" src="https://prnewswire2-a.akamaihd.net/p/1893751/sp/189375100/thumbnail/entry_id/0_dikkrqn0/def_height/2700/def_width/2700/version/100012/type/1" />}>
                            <Caption placement="left">
                                <h3>
                                    Paramount Pictures
                                </h3>
                                <h5 className="light grey-text text-lighten-3">
                                    Paramount Pictures Corporation is an American film studio based in Hollywood, California.
                                </h5>
                            </Caption>
                        </Slide>
                        <Slide image={<img className='opa' alt="" src="https://www.universalpictures.com/assets/img/universal-share.jpg" />}>
                            <Caption placement="left">
                                <h3>
                                    Universal Pictures
                                </h3>
                                <h5 className="light grey-text text-lighten-3">
                                    Universal Pictures is an American film studio owned by Comcast through the Universal Filmed Entertainment Group division of its wholly owned subsidiary NBCUniversal.
                                </h5>
                            </Caption>
                        </Slide>
                        <Slide image={<img alt="" className='opa' src="https://www.whats-on-netflix.com/wp-content/uploads/2018/12/Warner-Brothers-Netflix-Content.jpg" />}>
                            <Caption placement="left">
                                <h3>
                                    Warner Bros. Pictures
                                </h3>
                                <h5 className="light grey-text text-lighten-3">
                                    Warner Bros. Pictures is an American film production and distribution studio, a division of Warner Bros. Entertainment.
                                </h5>
                            </Caption>
                        </Slide>
                    </Slider>
                </CollapsibleItem>
            </Collapsible>
        </div>
    );
}