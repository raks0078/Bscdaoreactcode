/* This source code is exported from pxCode, you can get more document from https://www.pxcode.io */
import React from 'react';
import cn from 'classnames';

import section1Styles from './Page1_section1.module.scss';
import styles from './Page1.module.scss';

function renderSection1(props) {
  return (
    <section className={cn(section1Styles.section1, section1Styles.section1_layout)}>
      <div className={cn(section1Styles.box4, section1Styles.box4_layout)} />
      <h3 className={cn(section1Styles.subtitle2, section1Styles.subtitle2_layout)}>
        Presale Phase 1 start soon on 30th of October 2022.
      </h3>

      <div className={cn(section1Styles.group, section1Styles.group_layout22)}>
        <div className={cn(section1Styles.flex, section1Styles.flex_layout10)}>
          <div className={cn(section1Styles.flex, section1Styles.flex_layout9)}>
            <div className={cn(section1Styles.flex, section1Styles.flex_layout)}>
              <div className={cn(section1Styles.flex1, section1Styles.flex1_layout)}>
                <div className={section1Styles.flex1__item}>
                  <h3 className={cn(section1Styles.subtitle2, section1Styles.subtitle2_layout1)}>
                    Presale Phase 1 start soon on 30th of October 2022.
                  </h3>
                </div>
                <div className={section1Styles.flex1__spacer} />
                <div className={section1Styles.flex1__item}>
                  <h3 className={cn(section1Styles.subtitle2, section1Styles.subtitle2_layout1)}>
                    Presale Phase 1 start soon on 30th of October 2022.
                  </h3>
                </div>
              </div>

              <div className={section1Styles.flex__item}>
                <div className={cn(section1Styles.group, section1Styles.group_layout)}>
                  <div className={cn(section1Styles.flex1, section1Styles.flex1_layout3)}>
                    <div className={section1Styles.flex1__item1}>
                      <div className={cn(section1Styles.flex1, section1Styles.flex1_layout1)}>
                        <div className={section1Styles.flex1__item2}>
                          <div className={cn(section1Styles.block7, section1Styles.block7_layout)}>
                            <div
                              style={{
                                '--src': `url(${require('assets/635a433769d5006725a2dcebb6440d45.png').default})`
                              }}
                              className={cn(section1Styles.block8, section1Styles.block8_layout)}>
                              <img
                                src={require('assets/29977a4bd81452da63826c322b51f073.png').default}
                                alt=""
                                className={cn(section1Styles.image25, section1Styles.image25_layout)}
                              />
                            </div>
                          </div>
                        </div>
                        <div className={section1Styles.flex1__spacer1} />
                        <div className={section1Styles.flex1__item3}>
                          <h1 className={cn(section1Styles.big_title, section1Styles.big_title_layout)}>BSCDAO</h1>
                        </div>
                      </div>
                    </div>
                    <div className={section1Styles.flex1__spacer2} />
                    <div className={section1Styles.flex1__item4}>
                      <div className={cn(section1Styles.flex1, section1Styles.flex1_layout2)}>
                        <div className={section1Styles.flex1__item5}>
                          <h4 className={cn(section1Styles.highlights, section1Styles.highlights_layout)}>ABOUT</h4>
                        </div>
                        <div className={section1Styles.flex1__spacer3} />
                        <div className={section1Styles.flex1__item6}>
                          <h4 className={cn(section1Styles.highlights, section1Styles.highlights_layout)}>Products</h4>
                        </div>
                        <div className={section1Styles.flex1__spacer4} />
                        <div className={section1Styles.flex1__item7}>
                          <h4 className={cn(section1Styles.highlights, section1Styles.highlights_layout)}>
                            tokenomics
                          </h4>
                        </div>
                        <div className={section1Styles.flex1__spacer4} />
                        <div className={section1Styles.flex1__item8}>
                          <h4 className={cn(section1Styles.highlights, section1Styles.highlights_layout)}>Roadmaps</h4>
                        </div>
                        <div className={section1Styles.flex1__spacer4} />
                        <div className={section1Styles.flex1__item9}>
                          <h4 className={cn(section1Styles.highlights, section1Styles.highlights_layout)}>
                            whitepaper
                          </h4>
                        </div>
                        <div className={section1Styles.flex1__spacer4} />
                        <div className={section1Styles.flex1__item10}>
                          <h4 className={cn(section1Styles.highlights, section1Styles.highlights_layout)}>social</h4>
                        </div>
                        <div className={section1Styles.flex1__spacer4} />
                        <div className={section1Styles.flex1__item11}>
                          <h4 className={cn(section1Styles.highlights, section1Styles.highlights_layout)}>
                            how to buy
                          </h4>
                        </div>
                      </div>
                    </div>
                    <div className={section1Styles.flex1__spacer5} />
                    <div className={section1Styles.flex1__item12}>
                      <div
                        style={{ '--src': `url(${require('assets/d6534eb0212cca33ce23451b2c06fe49.png').default})` }}
                        className={cn(section1Styles.block, section1Styles.block_layout)}>
                        <h3 className={cn(section1Styles.subtitle, section1Styles.subtitle_layout)}>Daap</h3>
                      </div>
                    </div>
                  </div>

                  <button 
                    style={{ '--src': `url(${require('assets/3c98592cb920aaeefa3f730542c11109.png').default})` }}
                    className={cn(section1Styles.block1, section1Styles.block1_layout)}
                    onClick={() => alert('It is clickable')}>
                    <h6 className={cn(section1Styles.subtitle1, section1Styles.subtitle1_layout)} style={{marginRight:0, marginLeft:0, paddingLeft:9, paddingRight:9}}>Connect Wallet</h6>
                  </button>
                </div>
              </div>
            </div>

            <div className={cn(section1Styles.flex1, section1Styles.flex1_layout11)}>
              <div className={section1Styles.flex1__item13}>
                <div className={cn(section1Styles.flex, section1Styles.flex_layout2)}>
                  <div className={section1Styles.flex__item1}>
                    <div className={cn(section1Styles.group, section1Styles.group_layout1)}>
                      <px-posize
                        area-style='{":before":{"content":"\" \"","display":"inline-block","height":"100%","verticalAlign":"middle"}}'
                        x="604fr 52px 32fr"
                        y="0px minmax(0px, max-content) 82px"
                        absolute>
                        <img
                          className={section1Styles.image2}
                          src={require('assets/da8bf0f090d0603eb40155d61d8c9ec4.png').default}
                          alt="Subtract"
                        />
                      </px-posize>
                      <img
                        src={require('assets/f40b78f1bcf427a37e3103a4b0d1d564.png').default}
                        alt=""
                        className={cn(section1Styles.image3, section1Styles.image3_layout)}
                      />
                      <img
                        src={require('assets/bd037271c5d7f14aeb4088df23843d1d.png').default}
                        alt=""
                        className={cn(section1Styles.image4, section1Styles.image4_layout)}
                      />
                    </div>
                  </div>

                  <div className={cn(section1Styles.block2, section1Styles.block2_layout)}>
                    <div className={cn(section1Styles.group, section1Styles.group_layout2)}>
                      <h1 className={cn(section1Styles.hero_title1, section1Styles.hero_title1_layout)}>
                        World first Daap as a service protocol.
                        <br />
                        {'Introducing BSCDAO protocol redefining Defi '}
                        <br />
                        {'with High APY Yeild.'}
                      </h1>

                      <div className={cn(section1Styles.flex1, section1Styles.flex1_layout4)}>
                        <div className={section1Styles.flex1__item14}>
                          <img
                            src={require('assets/00c7b8aa5644fe89f28ab115c88de2e2.png').default}
                            alt=""
                            className={cn(section1Styles.icon, section1Styles.icon_layout)}
                          />
                        </div>
                        <div className={section1Styles.flex1__spacer6} />
                        <div className={section1Styles.flex1__item15}>
                          <div className={cn(section1Styles.box, section1Styles.box_layout)} />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className={cn(section1Styles.flex1, section1Styles.flex1_layout5)}>
                    <div className={section1Styles.flex1__item16}>
                      <div className={cn(section1Styles.group, section1Styles.group_layout3)}>
                        <div
                          style={{ '--src': `url(${require('assets/5d0ebd208a178a0bb1ebd778f2bd1cda.png').default})` }}
                          className={cn(section1Styles.block5, section1Styles.block5_layout)}
                        />
                        <h2 className={cn(section1Styles.medium_title4, section1Styles.medium_title4_layout)}>
                          Presale
                        </h2>
                      </div>
                    </div>
                    <div className={section1Styles.flex1__spacer7} />
                    <div className={section1Styles.flex1__item16}>
                      <div
                        style={{ '--src': `url(${require('assets/5d0ebd208a178a0bb1ebd778f2bd1cda.png').default})` }}
                        className={cn(section1Styles.block6, section1Styles.block6_layout)}>
                        <h3 className={cn(section1Styles.subtitle3, section1Styles.subtitle3_layout)}>Whitepaper</h3>
                      </div>
                    </div>
                  </div>

                  <div className={cn(section1Styles.flex, section1Styles.flex_layout1)}>
                    <h1 className={cn(section1Styles.big_title1, section1Styles.big_title1_layout)}>
                      Join our community
                    </h1>

                    <div className={cn(section1Styles.flex1, section1Styles.flex1_layout6)}>
                      <div className={section1Styles.flex1__item17}>
                        <div className={cn(section1Styles.block10, section1Styles.block10_layout)}>
                          <img
                            src={require('assets/68b54b892dcaebc92c49a5d924b14f52.png').default}
                            alt=""
                            className={cn(section1Styles.image27, section1Styles.image27_layout)}
                          />
                        </div>
                      </div>
                      <div className={section1Styles.flex1__spacer8} />
                      <div className={section1Styles.flex1__item17}>
                        <div className={cn(section1Styles.block9, section1Styles.block9_layout)}>
                          <img
                            src={require('assets/17b6932bd1088becbc9c288d9ca69561.png').default}
                            alt=""
                            className={cn(section1Styles.image26, section1Styles.image26_layout)}
                          />
                        </div>
                      </div>
                      <div className={section1Styles.flex1__spacer8} />
                      <div className={section1Styles.flex1__item17}>
                        <div className={cn(section1Styles.block11, section1Styles.block11_layout)}>
                          <img
                            src={require('assets/17ac43cb0f1d3e24a79f6d4617410831.png').default}
                            alt=""
                            className={cn(section1Styles.image28, section1Styles.image28_layout)}
                          />
                        </div>
                      </div>
                      <div className={section1Styles.flex1__spacer8} />
                      <div className={section1Styles.flex1__item17}>
                        <div className={cn(section1Styles.block12, section1Styles.block12_layout)}>
                          <img
                            src={require('assets/27a4097013e206ec44953e50ab3047fc.png').default}
                            alt=""
                            className={cn(section1Styles.image29, section1Styles.image29_layout)}
                          />
                        </div>
                      </div>
                      <div className={section1Styles.flex1__spacer8} />
                      <div className={section1Styles.flex1__item17}>
                        <div className={cn(section1Styles.block13, section1Styles.block13_layout)}>
                          <img
                            src={require('assets/e4e635d3643da9178796ed4f471251d5.png').default}
                            alt=""
                            className={cn(section1Styles.image30, section1Styles.image30_layout)}
                          />
                        </div>
                      </div>
                      <div className={section1Styles.flex1__spacer8} />
                      <div className={section1Styles.flex1__item17}>
                        <div className={cn(section1Styles.block14, section1Styles.block14_layout)}>
                          <img
                            src={require('assets/d9135dd5a3873c0acb419200ef36ea2e.png').default}
                            alt=""
                            className={cn(section1Styles.image31, section1Styles.image31_layout)}
                          />
                        </div>
                      </div>
                      <div className={section1Styles.flex1__spacer8} />
                      <div className={section1Styles.flex1__item17}>
                        <div className={cn(section1Styles.block15, section1Styles.block15_layout)}>
                          <div
                            style={{
                              '--src': `url(${require('assets/6a5c2384a0154d5717d172180e98f0ab.png').default})`
                            }}
                            className={cn(section1Styles.block16, section1Styles.block16_layout)}
                          />
                        </div>
                      </div>
                      <div className={section1Styles.flex1__spacer8} />
                      <div className={section1Styles.flex1__item17}>
                        <div className={cn(section1Styles.block17, section1Styles.block17_layout)}>
                          <div
                            style={{
                              '--src': `url(${require('assets/8c55ffac6422a0578a6ae897baa87e65.png').default})`
                            }}
                            className={cn(section1Styles.block18, section1Styles.block18_layout)}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={section1Styles.flex1__spacer9} />
              <div className={section1Styles.flex1__item18}>
                <div className={cn(section1Styles.group, section1Styles.group_layout4)}>
                  <div
                    style={{ '--src': `url(${require('assets/97620aea4483f250024fe4f800155f69.png').default})` }}
                    className={cn(section1Styles.contain_block4, section1Styles.contain_block4_layout)}>
                    <div className={cn(section1Styles.flex, section1Styles.flex_layout3)}>
                      <h1 className={cn(section1Styles.hero_title, section1Styles.hero_title_layout)}>
                        bscdao presale
                      </h1>
                      <h5 className={cn(section1Styles.highlights1, section1Styles.highlights1_layout)}>Current</h5>

                      <div className={cn(section1Styles.flex1, section1Styles.flex1_layout7)}>
                        <div className={section1Styles.flex1__item19}>
                          <h2 className={cn(section1Styles.medium_title, section1Styles.medium_title_layout)}>
                            0.175 ETH
                          </h2>
                        </div>
                        <div className={section1Styles.flex1__spacer10} />
                        <div className={section1Styles.flex1__item20}>
                          <h3 className={cn(section1Styles.subtitle11, section1Styles.subtitle11_layout)}>
                            $1453.65 Usd
                          </h3>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className={cn(section1Styles.block49, section1Styles.block49_layout)}>
                    <div className={cn(section1Styles.group1, section1Styles.group1_layout1)}>
                      <div className={cn(section1Styles.flex1, section1Styles.flex1_layout8)}>
                        <div className={section1Styles.flex1__item21}>
                          <div className={cn(section1Styles.contain_block2, section1Styles.contain_block2_layout)}>
                            <h2 className={cn(section1Styles.medium_title1, section1Styles.medium_title1_layout)}>
                              Presale
                            </h2>
                          </div>
                        </div>
                        <div className={section1Styles.flex1__item22}>
                          <div className={cn(section1Styles.contain_block3, section1Styles.contain_block3_layout)}>
                            <img
                              src={require('assets/4d3033b45748ee788f3dbf0e86efad18.png').default}
                              alt=""
                              className={cn(section1Styles.image5, section1Styles.image5_layout)}
                            />
                          </div>
                        </div>
                      </div>

                      <div className={cn(section1Styles.flex, section1Styles.flex_layout5)}>
                        <div className={cn(section1Styles.flex, section1Styles.flex_layout4)}>
                          <h2 className={cn(section1Styles.medium_title11, section1Styles.medium_title11_layout)}>
                            CALCULATE EARNING
                          </h2>

                          <div className={cn(section1Styles.contain_block, section1Styles.contain_block_layout)}>
                            <div className={cn(section1Styles.flex1, section1Styles.flex1_layout9)}>
                              <div className={section1Styles.flex1__item23}>
                                <h2 className={cn(section1Styles.medium_title12, section1Styles.medium_title12_layout)}>
                                  $
                                </h2>
                              </div>
                              <div className={section1Styles.flex1__spacer11} />
                              <div className={section1Styles.flex1__item24}>
                                <h2 className={cn(section1Styles.medium_title12, section1Styles.medium_title12_layout)}>
                                  100
                                </h2>
                              </div>
                            </div>
                          </div>

                          <div className={cn(section1Styles.flex1, section1Styles.flex1_layout6)}>
                            <div className={section1Styles.flex1__item25}>
                              <h3 className={cn(section1Styles.subtitle21, section1Styles.subtitle21_layout)}>Add:</h3>
                            </div>
                            <div className={section1Styles.flex1__spacer12} />
                            <div className={section1Styles.flex1__item26}>
                              <h3 className={cn(section1Styles.subtitle5, section1Styles.subtitle5_layout)}>+100</h3>
                            </div>
                            <div className={section1Styles.flex1__spacer13} />
                            <div className={section1Styles.flex1__item27}>
                              <h3 className={cn(section1Styles.subtitle5, section1Styles.subtitle5_layout)}>+1000</h3>
                            </div>
                            <div className={section1Styles.flex1__spacer13} />
                            <div className={section1Styles.flex1__item28}>
                              <h3 className={cn(section1Styles.subtitle5, section1Styles.subtitle5_layout)}>+10000</h3>
                            </div>
                          </div>
                        </div>

                        <div className={cn(section1Styles.contain_block1, section1Styles.contain_block1_layout)}>
                          <div
                            style={{
                              '--src': `url(${require('assets/98c1019d37b8ef45d529b91f56f7d6db.png').default})`
                            }}
                            className={cn(section1Styles.block51, section1Styles.block51_layout)}>
                            <div
                              style={{
                                '--src': `url(${require('assets/e0f132bd013309bca5965696266b6169.png').default})`
                              }}
                              className={cn(section1Styles.block52, section1Styles.block52_layout)}
                            />
                          </div>

                          <img
                            src={require('assets/eec3e812143c61efc25879f26c262fe6.png').default}
                            alt=""
                            className={cn(section1Styles.decorator, section1Styles.decorator_layout)}
                          />

                          <div className={cn(section1Styles.flex, section1Styles.flex_layout6)}>
                            <h3 className={cn(section1Styles.subtitle4, section1Styles.subtitle4_layout)}>
                              ESTIMATED EARNINGS
                            </h3>

                            <div className={cn(section1Styles.flex1, section1Styles.flex1_layout10)}>
                              <div className={section1Styles.flex1__item29}>
                                <div className={cn(section1Styles.flex, section1Styles.flex_layout5)}>
                                  <div className={cn(section1Styles.flex1, section1Styles.flex1_layout)}>
                                    <div className={section1Styles.flex1__item30}>
                                      <h1 className={cn(section1Styles.big_title6, section1Styles.big_title6_layout)}>
                                        $0
                                      </h1>
                                    </div>
                                    <div className={section1Styles.flex1__spacer14} />
                                    <div className={section1Styles.flex1__item31}>
                                      <div className={cn(section1Styles.group1, section1Styles.group1_layout)}>
                                        <h1 className={cn(section1Styles.big_title7, section1Styles.big_title7_layout)}>
                                          .00
                                        </h1>
                                        <h1
                                          className={cn(section1Styles.big_title6, section1Styles.big_title6_layout1)}>
                                          $0
                                        </h1>
                                      </div>
                                    </div>
                                  </div>

                                  <h3 className={cn(section1Styles.subtitle6, section1Styles.subtitle6_layout)}>
                                    Per month
                                  </h3>
                                </div>
                              </div>
                              <div className={section1Styles.flex1__spacer15} />
                              <div className={section1Styles.flex1__item32}>
                                <h3 className={cn(section1Styles.subtitle6, section1Styles.subtitle6_layout1)}>
                                  Per year
                                </h3>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className={cn(section1Styles.flex, section1Styles.flex_layout8)} style={{marginRight:30}}>
                          <div className={cn(section1Styles.flex, section1Styles.flex_layout7)}  >
                            <h4 className={cn(section1Styles.highlights3, section1Styles.highlights3_layout)}>
                              Estimated with BSCDAO-BNB pool
                            </h4>
                            <h4 className={cn(section1Styles.highlights3, section1Styles.highlights3_layout1)}>
                              Current apy is: 10211%
                              <br />
                            </h4>
                          </div>

                          <div
                            style={{
                              '--src': `url(${require('assets/e221d6c62b9bbc857e4c2acb12128e36.png').default})`
                            }}
                            className={cn(section1Styles.block50, section1Styles.block50_layout)}>
                            <h2 className={cn(section1Styles.medium_title11, section1Styles.medium_title11_layout1)}><center>GET STARTED</center>
                
                            </h2>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className={cn(section1Styles.group, section1Styles.group_layout15)}>
            <div className={cn(section1Styles.group, section1Styles.group_layout14)}>
              <div className={cn(section1Styles.group1, section1Styles.group1_layout2)}>
                <div
                  style={{ '--src': `url(${require('assets/534ee6ab185a6ccad196cf7ea0e4db3a.png').default})` }}
                  className={cn(section1Styles.block19, section1Styles.block19_layout)}>
                  <div className={cn(section1Styles.flex1, section1Styles.flex1_layout12)}>
                    <div className={section1Styles.flex1__item33}>
                      <img
                        src={require('assets/9775998596bcbf836fedd41c7fbf9b4a.png').default}
                        alt=""
                        className={cn(section1Styles.image33, section1Styles.image33_layout)}
                      />
                    </div>
                    <div className={section1Styles.flex1__spacer16} />
                    <div className={section1Styles.flex1__item34}>
                      <img
                        src={require('assets/a31531ca694d7c6d9ea5ea1cffeedc13.png').default}
                        alt=""
                        className={cn(section1Styles.image35, section1Styles.image35_layout)}
                      />
                    </div>
                    <div className={section1Styles.flex1__spacer17} />
                    <div className={section1Styles.flex1__item35}>
                      <div className={cn(section1Styles.box9, section1Styles.box9_layout)} />
                    </div>
                    <div className={section1Styles.flex1__spacer17} />
                    <div className={section1Styles.flex1__item36}>
                      <img
                        src={require('assets/7216ea151c6879bfef1b6f0e2337ee47.png').default}
                        alt=""
                        className={cn(section1Styles.icon10, section1Styles.icon10_layout)}
                      />
                    </div>
                    <div className={section1Styles.flex1__spacer18} />
                    <div className={section1Styles.flex1__item37}>
                      <img
                        src={require('assets/e167aedde1505cf7d9a9f1c3cd07f8ab.png').default}
                        alt=""
                        className={cn(section1Styles.icon11, section1Styles.icon11_layout)}
                      />
                    </div>
                    <div className={section1Styles.flex1__spacer17} />
                    <div className={section1Styles.flex1__item38}>
                      <img
                        src={require('assets/5ffeaafbaa82a59e0f50b8a8d4bcdc66.png').default}
                        alt=""
                        className={cn(section1Styles.image28, section1Styles.image28_layout1)}
                      />
                    </div>
                    <div className={section1Styles.flex1__spacer19} />
                    <div className={section1Styles.flex1__item37}>
                      <img
                        src={require('assets/a46dcdc13bb3f5ae2a5f01f645f8b664.png').default}
                        alt=""
                        className={cn(section1Styles.image36, section1Styles.image36_layout)}
                      />
                    </div>
                    <div className={section1Styles.flex1__spacer18} />
                    <div className={section1Styles.flex1__item36}>
                      <img
                        src={require('assets/9ff7cff7617d0091effd47b2c4295303.png').default}
                        alt=""
                        className={cn(section1Styles.icon10, section1Styles.icon10_layout)}
                      />
                    </div>
                    <div className={section1Styles.flex1__spacer18} />
                    <div className={section1Styles.flex1__item39}>
                      <img
                        src={require('assets/202a9145419bc25fbd0ae5b052d59f04.png').default}
                        alt=""
                        className={cn(section1Styles.image37, section1Styles.image37_layout)}
                      />
                    </div>
                    <div className={section1Styles.flex1__spacer18} />
                    <div className={section1Styles.flex1__item40}>
                      <img
                        src={require('assets/799ecc5680b199b6660f5833985fa561.png').default}
                        alt=""
                        className={cn(section1Styles.image38, section1Styles.image38_layout)}
                      />
                    </div>
                    <div className={section1Styles.flex1__spacer16} />
                    <div className={section1Styles.flex1__item41}>
                      <img
                        src={require('assets/45ba425ad3683221e52f01a0116efa44.png').default}
                        alt=""
                        className={cn(section1Styles.image39, section1Styles.image39_layout)}
                      />
                    </div>
                    <div className={section1Styles.flex1__spacer16} />
                    <div className={section1Styles.flex1__item42}>
                      <img
                        src={require('assets/379560a2278214cead487f2d3eabcc50.png').default}
                        alt=""
                        className={cn(section1Styles.image40, section1Styles.image40_layout)}
                      />
                    </div>
                    <div className={section1Styles.flex1__spacer16} />
                    <div className={section1Styles.flex1__item43}>
                      <img
                        src={require('assets/8960a78f41b0de6acd4c887e356e2252.png').default}
                        alt=""
                        className={cn(section1Styles.image41, section1Styles.image41_layout)}
                      />
                    </div>
                  </div>
                </div>

                <div className={cn(section1Styles.flex, section1Styles.flex_layout5)}>
                  <h1 className={cn(section1Styles.hero_title3, section1Styles.hero_title3_layout)}>Featured in</h1>

                  <div className={cn(section1Styles.flex1, section1Styles.flex1_layout13)}>
                    <div className={section1Styles.flex1__item44}>
                      <div className={cn(section1Styles.block20, section1Styles.block20_layout)} />
                    </div>
                    <div className={section1Styles.flex1__spacer20} />
                    <div className={section1Styles.flex1__item44}>
                      <div className={cn(section1Styles.block21, section1Styles.block21_layout)}>
                        <div className={cn(section1Styles.group, section1Styles.group_layout7)}>
                          <div className={cn(section1Styles.group, section1Styles.group_layout6)}>
                            <div className={cn(section1Styles.group, section1Styles.group_layout5)}>
                              <div className={cn(section1Styles.flex, section1Styles.flex_layout10)}>
                                <img
                                  src={require('assets/98c3047306281eb3aa9db80e7c6a48d9.png').default}
                                  alt=""
                                  className={cn(section1Styles.image43, section1Styles.image43_layout)}
                                />
                                <h2 className={cn(section1Styles.medium_title2, section1Styles.medium_title2_layout)}>
                                  “By providing liquidity, also known as staking, you earn yield by collecting fees and
                                  getting minted Bscdao as a reward.”
                                </h2>
                                <div
                                  className={cn(section1Styles.contain_block31, section1Styles.contain_block31_layout)}
                                />
                                <h4 className={cn(section1Styles.hero_title6, section1Styles.hero_title6_layout)} style={{fontSize:30}}>
                                  <center>Learn more</center>
                                </h4>
                              </div>

                              <h4 className={cn(section1Styles.highlights2, section1Styles.highlights2_layout)}>
                                Yahoo finance
                              </h4>
                            </div>
                          </div>

                          <hr size={1} className={cn(section1Styles.line1, section1Styles.line1_layout)} />
                          <hr size={1} className={cn(section1Styles.line, section1Styles.line_layout)} />
                        </div>
                      </div>
                    </div>
                    <div className={section1Styles.flex1__spacer20} />
                    <div className={section1Styles.flex1__item44}>
                      <div className={cn(section1Styles.block22, section1Styles.block22_layout)}>
                        <div className={cn(section1Styles.group, section1Styles.group_layout11)}>
                          <div className={cn(section1Styles.group, section1Styles.group_layout10)}>
                            <div className={cn(section1Styles.group, section1Styles.group_layout9)}>
                              <div className={cn(section1Styles.group, section1Styles.group_layout8)}>
                                <img
                                  src={require('assets/72e0f0a1a482079edd6036fae3b62b32.png').default}
                                  alt=""
                                  className={cn(section1Styles.image45, section1Styles.image45_layout)}
                                />
                                <px-posize
                                  area-style='{":before":{"content":"\" \"","display":"inline-block","height":"100%","verticalAlign":"middle"}}'
                                  x="33fr 22px 174fr"
                                  y="0px minmax(0px, max-content) 0px"
                                  absolute>
                                  <img
                                    className={section1Styles.image44}
                                    src={require('assets/92fb62f651b8f5bfadce0cb7a9bba379.png').default}
                                    alt="Vector"
                                  />
                                </px-posize>
                                <px-posize
                                  area-style='{":before":{"content":"\" \"","display":"inline-block","height":"100%","verticalAlign":"middle"}}'
                                  x="57fr 31px 141fr"
                                  y="0px minmax(0px, max-content) 0px"
                                  absolute>
                                  <img
                                    className={section1Styles.icon12}
                                    src={require('assets/1b2ad86be2a95f2b76b8687214b48587.png').default}
                                    alt="Vector"
                                  />
                                </px-posize>
                                <px-posize
                                  area-style='{":before":{"content":"\" \"","display":"inline-block","height":"100%","verticalAlign":"middle"}}'
                                  x="92fr 23px 114fr"
                                  y="0px minmax(0px, max-content) 0px"
                                  absolute>
                                  <img
                                    className={section1Styles.image46}
                                    src={require('assets/c0f8f83653490634bed84b0362f6cbaa.png').default}
                                    alt="Vector"
                                  />
                                </px-posize>
                                <div className={cn(section1Styles.box12, section1Styles.box12_layout)} />
                                <px-posize
                                  area-style='{":before":{"content":"\" \"","display":"inline-block","height":"100%","verticalAlign":"middle"}}'
                                  x="131fr 31px 67fr"
                                  y="0px minmax(0px, max-content) 0px"
                                  absolute>
                                  <img
                                    className={section1Styles.icon12}
                                    src={require('assets/a13b9dc934ac2d00b60c7a4a9c69bfef.png').default}
                                    alt="Vector"
                                  />
                                </px-posize>
                                <px-posize
                                  area-style='{":before":{"content":"\" \"","display":"inline-block","height":"100%","verticalAlign":"middle"}}'
                                  x="166fr 29px 34fr"
                                  y="0px minmax(0px, max-content) 0px"
                                  absolute>
                                  <img
                                    className={section1Styles.image45}
                                    src={require('assets/0b241a8fb1e4494888b3fbceaf0076be.png').default}
                                    alt="Vector"
                                  />
                                </px-posize>
                                <img
                                  src={require('assets/8e7222206171e67cc086f0a13390bc17.png').default}
                                  alt=""
                                  className={cn(section1Styles.icon13, section1Styles.icon13_layout)}
                                />
                              </div>

                              <h2 className={cn(section1Styles.medium_title2, section1Styles.medium_title2_layout1)}>
                                “Bsc Dao Protocol Finance makes it <br />
                                {'easy to buy/sell crypto, invest and '}
                                <br />
                                {'earn revenue directly on the '}
                                <br />
                                {'blockchain.”'}
                              </h2>
                              <div
                                className={cn(section1Styles.contain_block31, section1Styles.contain_block31_layout1)}
                              />
                              <h4 className={cn(section1Styles.highlights2, section1Styles.highlights2_layout1)}>
                                Benzinga
                              </h4>
                              <h1 className={cn(section1Styles.hero_title61, section1Styles.hero_title61_layout)} style={{fontSize:30}}>
                                <center>Learn more</center>
                              </h1>
                            </div>
                          </div>

                          <hr size={1} className={cn(section1Styles.line1, section1Styles.line1_layout1)} />
                          <hr size={1} className={cn(section1Styles.line1, section1Styles.line1_layout2)} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className={cn(section1Styles.block201, section1Styles.block201_layout)} />

              <div className={cn(section1Styles.group, section1Styles.group_layout13)}>
                <div className={cn(section1Styles.group, section1Styles.group_layout12)}>
                  <div className={cn(section1Styles.flex, section1Styles.flex_layout5)}>
                    <img
                      src={require('assets/65a7f083f0d5cb4514207821989abb76.png').default}
                      alt=""
                      className={cn(section1Styles.image42, section1Styles.image42_layout)}
                    />
                    <h2 className={cn(section1Styles.medium_title21, section1Styles.medium_title21_layout)}>
                      “BSCDAO is a platform that helps you convert tokens, be a liquidity provider and earn yield In
                      High APY.”
                    </h2>
                    <div className={cn(section1Styles.box11, section1Styles.box11_layout)} />
                    <h1 className={cn(section1Styles.hero_title6, section1Styles.hero_title6_layout1)} style={{fontSize:30}}><center>Learn more</center></h1>
                  </div>
                </div>

                <div className={cn(section1Styles.flex1, section1Styles.flex1_layout14)}>
                  <div className={section1Styles.flex1__item45}>
                    <hr size={1} className={cn(section1Styles.line1, section1Styles.line1_layout3)} />
                  </div>
                  <div className={section1Styles.flex1__spacer21} />
                  <div className={section1Styles.flex1__item46}>
                    <h4 className={cn(section1Styles.highlights2, section1Styles.highlights2_layout2)}>Bloomberg</h4>
                  </div>
                  <div className={section1Styles.flex1__spacer22} />
                  <div className={section1Styles.flex1__item45}>
                    <hr size={1} className={cn(section1Styles.line1, section1Styles.line1_layout3)} />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className={cn(section1Styles.flex, section1Styles.flex_layout14)}>
            <div className={cn(section1Styles.group1, section1Styles.group1_layout3)}>
              <img
                src={require('assets/346a2be1a2c6f898e9fcb46445e9dd85.png').default}
                alt=""
                className={cn(section1Styles.decorator, section1Styles.decorator_layout1)}
              />

              <div className={cn(section1Styles.group1, section1Styles.group1_layout)}>
                <h1 className={cn(section1Styles.hero_title2, section1Styles.hero_title2_layout)}>ABOUT</h1>
                <img
                  src={require('assets/9bdfa9b7bb9e185fac5b1b7e9b52a12e.png').default}
                  alt=""
                  className={cn(section1Styles.decorator13, section1Styles.decorator13_layout)}
                />
                <img
                  src={require('assets/9f58c204050efa27c619e704aa84f429.png').default}
                  alt=""
                  className={cn(section1Styles.decorator13, section1Styles.decorator13_layout1)}
                />
              </div>
            </div>

            <div className={cn(section1Styles.flex1, section1Styles.flex1_layout15)}>
              <div className={section1Styles.flex1__item47}>
                <div className={cn(section1Styles.group1, section1Styles.group1_layout)}>
                  <img
                    src={require('assets/a565618785c9be55508a40e32463b44d.png').default}
                    alt=""
                    className={cn(section1Styles.image47, section1Styles.image47_layout)}
                  />
                  <div
                    style={{ '--src': `url(${require('assets/d2376def870eb1a03fe35d86b408561c.png').default})` }}
                    className={cn(section1Styles.image49, section1Styles.image49_layout)}
                  />
                </div>
              </div>
              <div className={section1Styles.flex1__spacer23} />
              <div className={section1Styles.flex1__item48}>
                <div className={cn(section1Styles.flex, section1Styles.flex_layout13)}>
                  <div
                    style={{ '--src': `url(${require('assets/ca837cf5e17b90495ffe699d87bdd40b.png').default})` }}
                    className={cn(section1Styles.block23, section1Styles.block23_layout)}>
                    <div className={cn(section1Styles.flex, section1Styles.flex_layout11)}>
                      <h1 className={cn(section1Styles.hero_title7, section1Styles.hero_title7_layout)}>
                        BSCDAO is a decentralized <br />
                        {'autonomous organization, that '}
                        <br />
                        {'Develops, Governs, and Grows '}
                        <br />
                        {'Defi products with high apy '}
                        <br />
                        {'yeild.'}
                      </h1>
                      <h1 className={cn(section1Styles.big_title2, section1Styles.big_title2_layout)}>
                        BSCDAO does not run its own Frontend. To interact with the protocol, users may consider
                        connecting to any front end hosted by members of the BSCDAO community.
                      </h1>
                    </div>
                  </div>

                  <div
                    style={{ '--src': `url(${require('assets/fa0865eb43c6b7cd5d557be366adcd06.png').default})` }}
                    className={cn(section1Styles.contain_block6, section1Styles.contain_block6_layout)}>
                    <div className={cn(section1Styles.flex, section1Styles.flex_layout12)}>
                      <h1 className={cn(section1Styles.hero_title7, section1Styles.hero_title7_layout1)}>
                        Seamless ON BINANCE SMART <br />
                        {'CHAIN, Automated Liquidity '}
                        <br />
                        {'Mining, DAO Treasury'}
                      </h1>
                      <h1 className={cn(section1Styles.big_title2, section1Styles.big_title2_layout)}>
                        Bscdao is a blockchain-based decentralized financial centre that provides optimal liquidity
                        solutions for different digital asset categories by adaptive bonding curve. It not only provides
                        a user-centred decentralized exchange but also it is an aggregated liquidity pool that supports
                        order smart routing.
                      </h1>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className={cn(section1Styles.group1, section1Styles.group1_layout4)}>
            <img
              src={require('assets/11dfb1a7052adaf680389f6f154b84f4.png').default}
              alt=""
              className={cn(section1Styles.decorator19, section1Styles.decorator19_layout)}
            />

            <div className={cn(section1Styles.flex1, section1Styles.flex1_layout1)}>
              <div className={section1Styles.flex1__item49}>
                <img
                  src={require('assets/9f76176a515435df0c4256c3c2e3738c.png').default}
                  alt=""
                  className={cn(section1Styles.image17, section1Styles.image17_layout)}
                />
              </div>
              <div className={section1Styles.flex1__spacer24} />
              <div className={section1Styles.flex1__item50}>
                <h1 className={cn(section1Styles.hero_title5, section1Styles.hero_title5_layout)}>
                  Liquidity Optimiser
                </h1>
              </div>
              <div className={section1Styles.flex1__spacer24} />
              <div className={section1Styles.flex1__item49}>
                <img
                  src={require('assets/9f76176a515435df0c4256c3c2e3738c.png').default}
                  alt=""
                  className={cn(section1Styles.image17, section1Styles.image17_layout)}
                />
              </div>
              <div className={section1Styles.flex1__spacer25} />
              <div className={section1Styles.flex1__item49}>
                <img
                  src={require('assets/9f76176a515435df0c4256c3c2e3738c.png').default}
                  alt=""
                  className={cn(section1Styles.image17, section1Styles.image17_layout)}
                />
              </div>
              <div className={section1Styles.flex1__spacer24} />
              <div className={section1Styles.flex1__item51}>
                <h1 className={cn(section1Styles.hero_title5, section1Styles.hero_title5_layout)}>bscdao ecosystem</h1>
              </div>
              <div className={section1Styles.flex1__spacer24} />
              <div className={section1Styles.flex1__item49}>
                <img
                  src={require('assets/9f76176a515435df0c4256c3c2e3738c.png').default}
                  alt=""
                  className={cn(section1Styles.image17, section1Styles.image17_layout)}
                />
              </div>
            </div>
          </div>

          <div className={cn(section1Styles.flex, section1Styles.flex_layout15)}>
            <div className={cn(section1Styles.group1, section1Styles.group1_layout6)}>
              <div className={cn(section1Styles.group1, section1Styles.group1_layout5)}>
                <img
                  src={require('assets/346a2be1a2c6f898e9fcb46445e9dd85.png').default}
                  alt=""
                  className={cn(section1Styles.decorator, section1Styles.decorator_layout2)}
                />
                <img
                  src={require('assets/346a2be1a2c6f898e9fcb46445e9dd85.png').default}
                  alt=""
                  className={cn(section1Styles.decorator, section1Styles.decorator_layout3)}
                />
              </div>

              <div className={cn(section1Styles.group1, section1Styles.group1_layout)}>
                <img
                  src={require('assets/aa609855ac709f711753181886d76bab.png').default}
                  alt=""
                  className={cn(section1Styles.decorator14, section1Styles.decorator14_layout)}
                />

                <div className={cn(section1Styles.group1, section1Styles.group1_layout)}>
                  <img
                    src={require('assets/984f7d95272bf4dcdd93ef74e977ba0a.png').default}
                    alt=""
                    className={cn(section1Styles.decorator14, section1Styles.decorator14_layout1)}
                  />
                  <h1 className={cn(section1Styles.hero_title2, section1Styles.hero_title2_layout)}>How it works</h1>
                </div>
              </div>
            </div>

            <img
              src={require('assets/cb50df85b9a344a8e529653b28620b54.png').default}
              alt=""
              className={cn(section1Styles.image87, section1Styles.image87_layout)}
            />
          </div>

          <div className={cn(section1Styles.flex, section1Styles.flex_layout16)}>
            <h1 className={cn(section1Styles.hero_title2, section1Styles.hero_title2_layout1)}>
              THE MOST POWERFUL YIELD GENERATION Protocol IN DEFI
            </h1>

            <div className={cn(section1Styles.flex1, section1Styles.flex1_layout16)}>
              <div className={section1Styles.flex1__item52}>
                <div
                  style={{ '--src': `url(${require('assets/1c3b2e8ac430e37e35bca0736fa6ded3.png').default})` }}
                  className={cn(section1Styles.contain_block7, section1Styles.contain_block7_layout)}>
                  <h1 className={cn(section1Styles.hero_title8, section1Styles.hero_title8_layout)}>
                    Our mission is to bring together all the best yield sources in Defi into one tool. To not only
                    provide a unified interface but also to automate, verify and maximize your yield generation. To let
                    you earn more and be safer than you could ever do.
                  </h1>
                </div>
              </div>
              <div className={section1Styles.flex1__spacer26} />
              <div className={section1Styles.flex1__item53}>
                <img
                  src={require('assets/6c2f1996d3862e023b5903b7c7dd7e92.png').default}
                  alt=""
                  className={cn(section1Styles.image78, section1Styles.image78_layout)}
                />
              </div>
            </div>

            <h1 className={cn(section1Styles.hero_title2, section1Styles.hero_title2_layout2)}>
              ZK ROLL UP InfrastructureI
            </h1>
          </div>

          <div className={cn(section1Styles.flex, section1Styles.flex_layout18)}>
            <h1 className={cn(section1Styles.hero_title9, section1Styles.hero_title9_layout)}>
              Investing in the foundation of L1 ecosystem and promising new L2 solutions.
            </h1>
            <h1 className={cn(section1Styles.big_title4, section1Styles.big_title4_layout)}>
              Welcome to the omnichannel future
            </h1>

            <div className={cn(section1Styles.flex1, section1Styles.flex1_layout17)}>
              <div className={section1Styles.flex1__item54}>
                <img
                  src={require('assets/db848a60450e96a9a5e88375fc76d3cd.png').default}
                  alt=""
                  className={cn(section1Styles.block53, section1Styles.block53_layout)}
                />
              </div>
              <div className={section1Styles.flex1__spacer27} />
              <div className={section1Styles.flex1__item55}>
                <div
                  style={{ '--src': `url(${require('assets/3037a2f4e20a8639fd66d43bde1acc63.png').default})` }}
                  className={cn(section1Styles.contain_block8, section1Styles.contain_block8_layout)}>
                  <div className={cn(section1Styles.flex, section1Styles.flex_layout17)}>
                    <h1 className={cn(section1Styles.hero_title8, section1Styles.hero_title8_layout1)}>
                      BSCDAO is a fully composable liquidity transport protocol that lives at the heart of Omnichain
                      DeFi
                    </h1>
                    <h1 className={cn(section1Styles.hero_title8, section1Styles.hero_title8_layout2)}>
                      With BSCDAO PROTOCOL, users & dApps can transfer native assets ON BSC CHAIN while accessing the
                      protocol’s unified liquidity pools with instantly guaranteed finality. The universe is infinite
                      with bscdao.
                    </h1>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className={cn(section1Styles.group1, section1Styles.group1_layout8)}>
            <div className={cn(section1Styles.group1, section1Styles.group1_layout7)}>
              <img
                src={require('assets/60f0aa5cd1be58b9360d01c7d593600b.png').default}
                alt=""
                className={cn(section1Styles.decorator2, section1Styles.decorator2_layout)}
              />
              <img
                src={require('assets/9f26e051b3b2cde64d2a0890c82eaf7b.png').default}
                alt=""
                className={cn(section1Styles.decorator4, section1Styles.decorator4_layout)}
              />
            </div>

            <div className={cn(section1Styles.flex, section1Styles.flex_layout5)}>
              <div className={cn(section1Styles.contain_block5, section1Styles.contain_block5_layout1)}>
                <div className={cn(section1Styles.contain_block5, section1Styles.contain_block5_layout)}>
                  <div className={cn(section1Styles.contain_block5, section1Styles.contain_block5_layout)}>
                    <div className={cn(section1Styles.contain_block5, section1Styles.contain_block5_layout)}>
                      <div className={cn(section1Styles.contain_block5, section1Styles.contain_block5_layout)}>
                        <div className={cn(section1Styles.contain_block5, section1Styles.contain_block5_layout)}>
                          <div className={cn(section1Styles.contain_block5, section1Styles.contain_block5_layout)}>
                            <div className={cn(section1Styles.contain_block5, section1Styles.contain_block5_layout)}>
                              <div className={cn(section1Styles.group, section1Styles.group_layout16)}>
                                <div className={cn(section1Styles.box3, section1Styles.box3_layout)} />
                                <h1 className={cn(section1Styles.hero_title2, section1Styles.hero_title2_layout3)}>
                                  Feature
                                </h1>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <h1 className={cn(section1Styles.hero_title9, section1Styles.hero_title9_layout1)}>
                DeFi made fast, seamless, and easy
              </h1>
              <h1 className={cn(section1Styles.big_title4, section1Styles.big_title4_layout1)}>
                High transaction throughput. Ultra low fees. Low latency. Capital efficiency. made for builders.
              </h1>

              <div className={cn(section1Styles.flex1, section1Styles.flex1_layout18)}>
                <div className={section1Styles.flex1__item56}>
                  <div className={cn(section1Styles.block29, section1Styles.block29_layout)}>
                    <div className={cn(section1Styles.flex, section1Styles.flex_layout19)}>
                      <div
                        style={{ '--src': `url(${require('assets/a455724b730af793b4dfac13624d7974.png').default})` }}
                        className={cn(section1Styles.block30, section1Styles.block30_layout)}>
                        <div
                          style={{ '--src': `url(${require('assets/1d6d1b366fe03358731b07d3606e2464.png').default})` }}
                          className={cn(section1Styles.block31, section1Styles.block31_layout)}>
                          <img
                            src={require('assets/da13bdb27f80465bf07064a905a29f2b.png').default}
                            alt=""
                            className={cn(section1Styles.icon17, section1Styles.icon17_layout)}
                          />
                        </div>
                      </div>

                      <h1 className={cn(section1Styles.big_title3, section1Styles.big_title3_layout)}>
                        GENERATE LIQUIDITY
                      </h1>
                      <h2 className={cn(section1Styles.medium_title3, section1Styles.medium_title3_layout)}>
                        DAO’s and their token holders
                        <br />
                        {'deposit only their token into a '}
                        <br />
                        {'Token DEFI to create market '}
                        <br />
                        {'liquidity with protection against '}
                        <br />
                        {'impermanent loss.'}
                      </h2>
                    </div>
                  </div>
                </div>
                <div className={section1Styles.flex1__spacer28} />
                <div className={section1Styles.flex1__item56}>
                  <div className={cn(section1Styles.block32, section1Styles.block32_layout)}>
                    <div className={cn(section1Styles.flex, section1Styles.flex_layout20)}>
                      <div
                        style={{ '--src': `url(${require('assets/a455724b730af793b4dfac13624d7974.png').default})` }}
                        className={cn(section1Styles.block33, section1Styles.block33_layout)}>
                        <div
                          style={{ '--src': `url(${require('assets/5fdc43610a12ceaf21400bc1ee8e3605.png').default})` }}
                          className={cn(section1Styles.block34, section1Styles.block34_layout)}>
                          <img
                            src={require('assets/d5eedf1987c00d073693a95defd4a88b.png').default}
                            alt=""
                            className={cn(section1Styles.icon18, section1Styles.icon18_layout)}
                          />
                        </div>
                      </div>

                      <h1 className={cn(section1Styles.big_title3, section1Styles.big_title3_layout1)}>
                        CONTROL LIQUIDITY
                      </h1>
                      <h2 className={cn(section1Styles.medium_title3, section1Styles.medium_title3_layout)}>
                        Tokens in Token Reactors are <br />
                        {'paired with assets from Pair '}
                        <br />
                        {'DEFI (e.g. ETH) and '}
                        <br />
                        {'deployed to DEXs based on '}
                        <br />
                        {'the votes of Liquidity '}
                        <br />
                        {'Directors.'}
                      </h2>
                    </div>
                  </div>
                </div>
                <div className={section1Styles.flex1__spacer28} />
                <div className={section1Styles.flex1__item56}>
                  <div className={cn(section1Styles.block24, section1Styles.block24_layout)}>
                    <div className={cn(section1Styles.flex, section1Styles.flex_layout21)}>
                      <div
                        style={{ '--src': `url(${require('assets/a455724b730af793b4dfac13624d7974.png').default})` }}
                        className={cn(section1Styles.block25, section1Styles.block25_layout)}>
                        <div
                          style={{ '--src': `url(${require('assets/bd9cbcc5b4349aee32e51f9caa005ebb.png').default})` }}
                          className={cn(section1Styles.block26, section1Styles.block26_layout)}>
                          <div className={cn(section1Styles.block27, section1Styles.block27_layout)}>
                            <div
                              style={{
                                '--src': `url(${require('assets/a0ae2d907901abcea6a28f9b3390928e.png').default})`
                              }}
                              className={cn(section1Styles.block28, section1Styles.block28_layout)}>
                              <div
                                style={{
                                  '--src': `url(${require('assets/91334e3ded4f2d966c2efd8d07670870.png').default})`
                                }}
                                className={cn(section1Styles.contain_block36, section1Styles.contain_block36_layout)}>
                                <img
                                  src={require('assets/58bd019aabea196bf59e1423178bb44b.png').default}
                                  alt=""
                                  className={cn(section1Styles.image58, section1Styles.image58_layout)}
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <h1 className={cn(section1Styles.big_title3, section1Styles.big_title3_layout2)}>EARN YIELD</h1>
                      <h2 className={cn(section1Styles.medium_title3, section1Styles.medium_title3_layout)}>
                        Liquidity Providers and Liquidity <br />
                        {'Directors earn rewards for '}
                        <br />
                        {'depositing assets into DEFI '}
                        <br />
                        {'or voting TOKE to direct liquidity.'}
                      </h2>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className={cn(section1Styles.group1, section1Styles.group1_layout11)}>
            <img
              src={require('assets/346a2be1a2c6f898e9fcb46445e9dd85.png').default}
              alt=""
              className={cn(section1Styles.decorator, section1Styles.decorator_layout4)}
            />

            <div className={cn(section1Styles.group1, section1Styles.group1_layout)}>
              <img
                src={require('assets/9f26e051b3b2cde64d2a0890c82eaf7b.png').default}
                alt=""
                className={cn(section1Styles.decorator4, section1Styles.decorator4_layout1)}
              />

              <div className={cn(section1Styles.flex, section1Styles.flex_layout5)}>
                <div className={cn(section1Styles.contain_block5, section1Styles.contain_block5_layout)}>
                  <div className={cn(section1Styles.contain_block5, section1Styles.contain_block5_layout)}>
                    <div className={cn(section1Styles.group, section1Styles.group_layout16)}>
                      <div className={cn(section1Styles.box3, section1Styles.box3_layout)} />
                      <h1 className={cn(section1Styles.hero_title2, section1Styles.hero_title2_layout4)}>Products</h1>
                    </div>
                  </div>
                </div>

                <div className={cn(section1Styles.flex1, section1Styles.flex1_layout19)}>
                  <div className={section1Styles.flex1__item57}>
                    <div className={cn(section1Styles.group1, section1Styles.group1_layout9)}>
                      <div
                        style={{ '--src': `url(${require('assets/b0c2241becc40a5ff66e99e941c58991.png').default})` }}
                        className={cn(section1Styles.cover8, section1Styles.cover8_layout)}
                      />

                      <div className={cn(section1Styles.flex1, section1Styles.flex1_layout1)}>
                        <div className={section1Styles.flex1__item58}>
                          <div className={cn(section1Styles.box20, section1Styles.box20_layout)} />
                        </div>
                        <div className={section1Styles.flex1__spacer29} />
                        <div className={section1Styles.flex1__item59}>
                          <div className={cn(section1Styles.flex, section1Styles.flex_layout22)}>
                            <h1 className={cn(section1Styles.big_title3, section1Styles.big_title3_layout3)}>
                              AI Staking
                            </h1>
                            <h2 className={cn(section1Styles.medium_title31, section1Styles.medium_title31_layout)}>
                              The switch is a ZK-Rollup-based automated LIQUIDITY OPTIMISER, farming platform. Platform
                              revenue goes towards treasury and makes initiatives towards BSCDAO which is used to fuel
                              the growth of the ecosystem.
                            </h2>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={section1Styles.flex1__spacer30} />
                  <div className={section1Styles.flex1__item57}>
                    <div className={cn(section1Styles.group1, section1Styles.group1_layout)}>
                      <div
                        style={{ '--src': `url(${require('assets/b0c2241becc40a5ff66e99e941c58991.png').default})` }}
                        className={cn(section1Styles.cover8, section1Styles.cover8_layout)}
                      />

                      <div className={cn(section1Styles.flex1, section1Styles.flex1_layout1)}>
                        <div className={section1Styles.flex1__item60}>
                          <div className={cn(section1Styles.box20, section1Styles.box20_layout1)} />
                        </div>
                        <div className={section1Styles.flex1__spacer31} />
                        <div className={section1Styles.flex1__item61}>
                          <div className={cn(section1Styles.flex, section1Styles.flex_layout5)}>
                            <h1 className={cn(section1Styles.big_title3, section1Styles.big_title3_layout4)}>
                              Auto compounding yield farming
                            </h1>
                            <h2 className={cn(section1Styles.medium_title31, section1Styles.medium_title31_layout1)}>
                              BSCDAO is the gas that powers the growth of the entire ecosystem via the BSC DAO &
                              revenue-based funding Treasury. The BSCDAO ecosystem benefits directly through
                              revenue-based Treasury and make initiatives used to fuel ecosystem growth.
                            </h2>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className={cn(section1Styles.flex1, section1Styles.flex1_layout20)}>
                  <div className={section1Styles.flex1__item62}>
                    <div className={cn(section1Styles.group1, section1Styles.group1_layout9)}>
                      <div
                        style={{ '--src': `url(${require('assets/b0c2241becc40a5ff66e99e941c58991.png').default})` }}
                        className={cn(section1Styles.cover8, section1Styles.cover8_layout)}
                      />

                      <div className={cn(section1Styles.flex1, section1Styles.flex1_layout1)}>
                        <div className={section1Styles.flex1__item63}>
                          <div className={cn(section1Styles.box20, section1Styles.box20_layout)} />
                        </div>
                        <div className={section1Styles.flex1__spacer32} />
                        <div className={section1Styles.flex1__item64}>
                          <div className={cn(section1Styles.flex, section1Styles.flex_layout22)}>
                            <h1 className={cn(section1Styles.big_title3, section1Styles.big_title3_layout5)}>
                              Defi lending services
                            </h1>
                            <h2 className={cn(section1Styles.medium_title31, section1Styles.medium_title31_layout)}>
                              The switch is a ZK-Rollup-based automated LIQUIDITY OPTIMISER, farming platform. Platform
                              revenue goes towards treasury and makes initiatives towards BSCDAO which is used to fuel
                              the growth of the ecosystem.
                            </h2>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={section1Styles.flex1__spacer33} />
                  <div className={section1Styles.flex1__item65}>
                    <div className={cn(section1Styles.group1, section1Styles.group1_layout)}>
                      <div
                        style={{ '--src': `url(${require('assets/b0c2241becc40a5ff66e99e941c58991.png').default})` }}
                        className={cn(section1Styles.cover8, section1Styles.cover8_layout1)}
                      />

                      <div className={cn(section1Styles.flex1, section1Styles.flex1_layout1)}>
                        <div className={section1Styles.flex1__item66}>
                          <div className={cn(section1Styles.box20, section1Styles.box20_layout1)} />
                        </div>
                        <div className={section1Styles.flex1__spacer34} />
                        <div className={section1Styles.flex1__item67}>
                          <div className={cn(section1Styles.flex, section1Styles.flex_layout5)}>
                            <h1 className={cn(section1Styles.big_title3, section1Styles.big_title3_layout6)}>
                              Governance right
                            </h1>
                            <h2 className={cn(section1Styles.medium_title31, section1Styles.medium_title31_layout)}>
                              Governance tokens are the first cryptocurrencies to represent voting on a blockchain by
                              distributing the power of making major platform decisions from a centralized structure to
                              an entire community . This is because token holders are not only users, but also owners of
                              the protocol.
                            </h2>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className={cn(section1Styles.group1, section1Styles.group1_layout10)}>
                  <div
                    style={{ '--src': `url(${require('assets/4918bbc58d64410fd7f8803fae5978c9.png').default})` }}
                    className={cn(section1Styles.cover9, section1Styles.cover9_layout)}
                  />

                  <div className={cn(section1Styles.flex1, section1Styles.flex1_layout1)}>
                    <div className={section1Styles.flex1__item68}>
                      <div className={cn(section1Styles.box20, section1Styles.box20_layout2)} />
                    </div>
                    <div className={section1Styles.flex1__spacer35} />
                    <div className={section1Styles.flex1__item69}>
                      <div className={cn(section1Styles.flex, section1Styles.flex_layout5)}>
                        <h1 className={cn(section1Styles.big_title3, section1Styles.big_title3_layout7)}>
                          Interpolation
                        </h1>
                        <h2 className={cn(section1Styles.medium_title31, section1Styles.medium_title31_layout)}>
                          Blockchain interoperability” refers to the ability of different blockchain networks to
                          exchange and leverage data between one another and to move unique types of digital assets
                          between the networks’ respective blockchains. In an interoperable system, once disparate
                          blockchain networks and assets can easily plug into and be combined with one another.
                        </h2>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className={cn(section1Styles.contain_block5, section1Styles.contain_block5_layout2)}>
            <div className={cn(section1Styles.contain_block5, section1Styles.contain_block5_layout)}>
              <div className={cn(section1Styles.contain_block5, section1Styles.contain_block5_layout)}>
                <div className={cn(section1Styles.group, section1Styles.group_layout16)}>
                  <div className={cn(section1Styles.box3, section1Styles.box3_layout)} />
                  <h1 className={cn(section1Styles.hero_title2, section1Styles.hero_title2_layout5)}>
                    Protocol intregation
                  </h1>
                </div>
              </div>
            </div>
          </div>

          <img
            src={require('assets/2086c0aae8ef0cc5f97ba8d70b6c7810.png').default}
            alt=""
            className={cn(section1Styles.img, section1Styles.img_layout)}
          />

          <div className={cn(section1Styles.group1, section1Styles.group1_layout13)}>
            <img
              src={require('assets/01448e0e8e58e5f437ea141cc462409c.png').default}
              alt=""
              className={cn(section1Styles.decorator2, section1Styles.decorator2_layout1)}
            />

            <div className={cn(section1Styles.flex, section1Styles.flex_layout5)}>
              <div className={cn(section1Styles.group1, section1Styles.group1_layout12)}>
                <img
                  src={require('assets/9f26e051b3b2cde64d2a0890c82eaf7b.png').default}
                  alt=""
                  className={cn(section1Styles.decorator4, section1Styles.decorator4_layout2)}
                />

                <div className={cn(section1Styles.group1, section1Styles.group1_layout)}>
                  <img
                    src={require('assets/fe861f927b5ca9f723db61052dd7ce5b.png').default}
                    alt=""
                    className={cn(section1Styles.decorator15, section1Styles.decorator15_layout)}
                  />
                  <img
                    src={require('assets/cf0d7c947cb96c849bccc21e4f52963e.png').default}
                    alt=""
                    className={cn(section1Styles.decorator15, section1Styles.decorator15_layout1)}
                  />
                  <h1 className={cn(section1Styles.hero_title21, section1Styles.hero_title21_layout)}>Tokenomics</h1>
                </div>
              </div>

              <img
                src={require('assets/3225d994ed05944b7d0daf565ae9675b.png').default}
                alt=""
                className={cn(section1Styles.image67, section1Styles.image67_layout)}
              />

              <div className={cn(section1Styles.flex1, section1Styles.flex1_layout21)}>
                <div className={section1Styles.flex1__item70}>
                  <div className={cn(section1Styles.contain_block13, section1Styles.contain_block13_layout)}>
                    <h3 className={cn(section1Styles.subtitle3, section1Styles.subtitle3_layout1)}>
                      0xc9dbcff0448d330aaf1dd78fc204370e5e54a797
                    </h3>
                  </div>
                </div>
                <div className={section1Styles.flex1__spacer36} />
                <div className={section1Styles.flex1__item71}>
                  <div className={cn(section1Styles.contain_block14, section1Styles.contain_block14_layout)}>
                    <div className={cn(section1Styles.group, section1Styles.group_layout17)}>
                      <img
                        src={require('assets/233d27197f17c800e5bab50c7754d36c.png').default}
                        alt=""
                        className={cn(section1Styles.icon5, section1Styles.icon5_layout)}
                      />
                      <img
                        src={require('assets/de6f6a1359983d58e7ffe31495f4004e.png').default}
                        alt=""
                        className={cn(section1Styles.icon6, section1Styles.icon6_layout)}
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className={cn(section1Styles.flex1, section1Styles.flex1_layout22)}>
                <div className={section1Styles.flex1__item72}>
                  <div className={cn(section1Styles.box7, section1Styles.box7_layout)} />
                </div>
                <div className={section1Styles.flex1__spacer37} />
                <div className={section1Styles.flex1__item72}>
                  <div className={cn(section1Styles.box7, section1Styles.box7_layout)} />
                </div>
              </div>
            </div>
          </div>

          <div className={cn(section1Styles.group1, section1Styles.group1_layout11)}>
            <img
              src={require('assets/292788712afa6703c148aac469aa20e4.png').default}
              alt=""
              className={cn(section1Styles.decorator1, section1Styles.decorator1_layout)}
            />

            <div className={cn(section1Styles.group1, section1Styles.group1_layout)}>
              <img
                src={require('assets/292788712afa6703c148aac469aa20e4.png').default}
                alt=""
                className={cn(section1Styles.decorator1, section1Styles.decorator1_layout)}
              />

              <div className={cn(section1Styles.group1, section1Styles.group1_layout)}>
                <img
                  src={require('assets/7ff5451091eed0acc39b481d825bd394.png').default}
                  alt=""
                  className={cn(section1Styles.decorator3, section1Styles.decorator3_layout)}
                />

                <div className={cn(section1Styles.group1, section1Styles.group1_layout)}>
                  <img
                    src={require('assets/01448e0e8e58e5f437ea141cc462409c.png').default}
                    alt=""
                    className={cn(section1Styles.decorator2, section1Styles.decorator2_layout2)}
                  />

                  <div className={cn(section1Styles.flex, section1Styles.flex_layout5)}>
                    <div className={cn(section1Styles.contain_block5, section1Styles.contain_block5_layout1)}>
                      <div className={cn(section1Styles.contain_block5, section1Styles.contain_block5_layout)}>
                        <div className={cn(section1Styles.contain_block5, section1Styles.contain_block5_layout)}>
                          <div className={cn(section1Styles.contain_block5, section1Styles.contain_block5_layout)}>
                            <div className={cn(section1Styles.contain_block5, section1Styles.contain_block5_layout)}>
                              <div className={cn(section1Styles.group, section1Styles.group_layout16)}>
                                <div className={cn(section1Styles.group1, section1Styles.group1_layout2)}>
                                  <img
                                    src={require('assets/292788712afa6703c148aac469aa20e4.png').default}
                                    alt=""
                                    className={cn(section1Styles.decorator1, section1Styles.decorator1_layout1)}
                                  />
                                  <div className={cn(section1Styles.box3, section1Styles.box3_layout1)} />
                                </div>

                                <h1 className={cn(section1Styles.hero_title2, section1Styles.hero_title2_layout6)}>
                                  Roadmap
                                </h1>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <img
                      src={require('assets/79f827710b4899de4591d98695e0c48b.png').default}
                      alt=""
                      className={cn(section1Styles.image441, section1Styles.image441_layout)}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className={cn(section1Styles.group, section1Styles.group_layout18)}>
            <div className={cn(section1Styles.flex, section1Styles.flex_layout5)}>
              <div className={cn(section1Styles.contain_block5, section1Styles.contain_block5_layout3)}>
                <div className={cn(section1Styles.contain_block5, section1Styles.contain_block5_layout)}>
                  <div className={cn(section1Styles.contain_block5, section1Styles.contain_block5_layout)}>
                    <div className={cn(section1Styles.group, section1Styles.group_layout16)}>
                      <div className={cn(section1Styles.box3, section1Styles.box3_layout)} />
                      <h1 className={cn(section1Styles.hero_title2, section1Styles.hero_title2_layout7)}>
                        Powered by{' '}
                      </h1>
                    </div>
                  </div>
                </div>
              </div>

              <div className={cn(section1Styles.group1, section1Styles.group1_layout14)}>
                <img
                  src={require('assets/b1a5265b860ea96f3333576b4c293f77.png').default}
                  alt=""
                  className={cn(section1Styles.contain_block16, section1Styles.contain_block16_layout)}
                />
                <img
                  src={require('assets/7ff5451091eed0acc39b481d825bd394.png').default}
                  alt=""
                  className={cn(section1Styles.decorator3, section1Styles.decorator3_layout1)}
                />
              </div>
            </div>
          </div>

          <div className={cn(section1Styles.flex, section1Styles.flex_layout24)}>
            <div className={cn(section1Styles.group1, section1Styles.group1_layout15)}>
              <img
                src={require('assets/7506ba4ca28ce645563e1f94a5e1f269.png').default}
                alt=""
                className={cn(section1Styles.decorator1, section1Styles.decorator1_layout2)}
              />

              <div className={cn(section1Styles.group1, section1Styles.group1_layout)}>
                <h1 className={cn(section1Styles.hero_title2, section1Styles.hero_title2_layout)} style={{fontSize:55}}>
                <center>Partners and Integrations</center>
                </h1>
                <img
                  src={require('assets/77446b9a6785751c99e205d4ae472dca.png').default}
                  alt=""
                  className={cn(section1Styles.decorator16, section1Styles.decorator16_layout)}
                />
                <img
                  src={require('assets/4f5a0cdf0f454631650e4b3c78a8cadd.png').default}
                  alt=""
                  className={cn(section1Styles.decorator16, section1Styles.decorator16_layout1)}
                />
              </div>
            </div>

            <div className={cn(section1Styles.flex1, section1Styles.flex1_layout23)}>
              <div className={section1Styles.flex1__item73}>
                <div className={cn(section1Styles.flex, section1Styles.flex_layout5)}>
                  <div
                    style={{ '--src': `url(${require('assets/c2bcc7ea1c3b6757f3953ea368153707.png').default})` }}
                    className={cn(section1Styles.contain_block18, section1Styles.contain_block18_layout)}>
                    <img
                      src={require('assets/8c070d39f66cda37713a395006df14d1.png').default}
                      alt=""
                      className={cn(section1Styles.image7, section1Styles.image7_layout)}
                    />
                  </div>

                  <h2 className={cn(section1Styles.medium_title, section1Styles.medium_title_layout1)}>Pancakeswap</h2>
                </div>
              </div>
              <div className={section1Styles.flex1__spacer38} />
              <div className={section1Styles.flex1__item73}>
                <div className={cn(section1Styles.flex, section1Styles.flex_layout5)}>
                  <div
                    style={{ '--src': `url(${require('assets/c2bcc7ea1c3b6757f3953ea368153707.png').default})` }}
                    className={cn(section1Styles.contain_block19, section1Styles.contain_block19_layout)}>
                    <img
                      src={require('assets/33e03e846ea8387dbf46e1c13ac44793.png').default}
                      alt=""
                      className={cn(section1Styles.image8, section1Styles.image8_layout)}
                    />
                  </div>

                  <h2 className={cn(section1Styles.medium_title, section1Styles.medium_title_layout2)}>
                    Coinbase venture
                  </h2>
                </div>
              </div>
              <div className={section1Styles.flex1__spacer38} />
              <div className={section1Styles.flex1__item73}>
                <div className={cn(section1Styles.flex, section1Styles.flex_layout5)}>
                  <div
                    style={{ '--src': `url(${require('assets/c2bcc7ea1c3b6757f3953ea368153707.png').default})` }}
                    className={cn(section1Styles.contain_block20, section1Styles.contain_block20_layout)}>
                    <div className={cn(section1Styles.flex, section1Styles.flex_layout23)}>
                      <img
                        src={require('assets/4b2faa14beba1c27c8ddc7f67af31e71.png').default}
                        alt=""
                        className={cn(section1Styles.image10, section1Styles.image10_layout)}
                      />
                      <img
                        src={require('assets/ef0fc1ce393b2bbf6052b10418d8dc50.png').default}
                        alt=""
                        className={cn(section1Styles.image11, section1Styles.image11_layout)}
                      />
                    </div>
                  </div>

                  <h2 className={cn(section1Styles.medium_title, section1Styles.medium_title_layout3)}>Amazon</h2>
                </div>
              </div>
              <div className={section1Styles.flex1__spacer38} />
              <div className={section1Styles.flex1__item73}>
                <div className={cn(section1Styles.flex, section1Styles.flex_layout5)}>
                  <div
                    style={{ '--src': `url(${require('assets/c2bcc7ea1c3b6757f3953ea368153707.png').default})` }}
                    className={cn(section1Styles.contain_block21, section1Styles.contain_block21_layout)}>
                    <img
                      src={require('assets/21e3b47d5e74b0e1360ed85b21b204c4.png').default}
                      alt=""
                      className={cn(section1Styles.image13, section1Styles.image13_layout)}
                    />
                  </div>

                  <h2 className={cn(section1Styles.medium_title, section1Styles.medium_title_layout4)}>
                    Digital ocean
                  </h2>
                </div>
              </div>
              <div className={section1Styles.flex1__spacer38} />
              <div className={section1Styles.flex1__item73}>
                <div className={cn(section1Styles.flex, section1Styles.flex_layout5)}>
                  <div
                    style={{ '--src': `url(${require('assets/c2bcc7ea1c3b6757f3953ea368153707.png').default})` }}
                    className={cn(section1Styles.contain_block22, section1Styles.contain_block22_layout)}>
                    <img
                      src={require('assets/8cbef3053449e342a0e0fe7e9d75792a.png').default}
                      alt=""
                      className={cn(section1Styles.image15, section1Styles.image15_layout)}
                    />
                  </div>

                  <h2 className={cn(section1Styles.medium_title, section1Styles.medium_title_layout5)}>Binance</h2>
                </div>
              </div>
            </div>

            <div className={cn(section1Styles.flex1, section1Styles.flex1_layout24)}>
              <div className={section1Styles.flex1__item74}>
                <div className={cn(section1Styles.flex, section1Styles.flex_layout5)}>
                  <div
                    style={{ '--src': `url(${require('assets/c2bcc7ea1c3b6757f3953ea368153707.png').default})` }}
                    className={cn(section1Styles.contain_block23, section1Styles.contain_block23_layout)}>
                    <img
                      src={require('assets/8012ee05359f563234684fe492bd4707.png').default}
                      alt=""
                      className={cn(section1Styles.image9, section1Styles.image9_layout)}
                    />
                  </div>

                  <h2 className={cn(section1Styles.medium_title, section1Styles.medium_title_layout6)}>Antler</h2>
                </div>
              </div>
              <div className={section1Styles.flex1__spacer39} />
              <div className={section1Styles.flex1__item74}>
                <div className={cn(section1Styles.flex, section1Styles.flex_layout5)}>
                  <div
                    style={{ '--src': `url(${require('assets/c2bcc7ea1c3b6757f3953ea368153707.png').default})` }}
                    className={cn(section1Styles.contain_block24, section1Styles.contain_block24_layout)}>
                    <img
                      src={require('assets/bb878df1959a4673b8390fee9bf9f628.png').default}
                      alt=""
                      className={cn(section1Styles.image12, section1Styles.image12_layout)}
                    />
                  </div>

                  <h2 className={cn(section1Styles.medium_title, section1Styles.medium_title_layout7)}>
                    Sequoia capital
                  </h2>
                </div>
              </div>
              <div className={section1Styles.flex1__spacer39} />
              <div className={section1Styles.flex1__item74}>
                <div className={cn(section1Styles.flex, section1Styles.flex_layout5)}>
                  <div
                    style={{ '--src': `url(${require('assets/c2bcc7ea1c3b6757f3953ea368153707.png').default})` }}
                    className={cn(section1Styles.contain_block25, section1Styles.contain_block25_layout)}>
                    <img
                      src={require('assets/cb3268bf9f7d178ae79e62e4169800df.png').default}
                      alt=""
                      className={cn(section1Styles.image14, section1Styles.image14_layout)}
                    />
                  </div>

                  <h2 className={cn(section1Styles.medium_title, section1Styles.medium_title_layout8)}>
                    Hashed Emergent
                  </h2>
                </div>
              </div>
            </div>
          </div>

          <div className={cn(section1Styles.flex1, section1Styles.flex1_layout25)}>
            <div className={section1Styles.flex1__item75}>
              <div className={cn(section1Styles.group, section1Styles.group_layout19)}>
                <img
                  src={require('assets/55413e3c954e434eb564de0f8e66838b.png').default}
                  alt=""
                  className={cn(section1Styles.cover11, section1Styles.cover11_layout)}
                />

                <div className={cn(section1Styles.flex, section1Styles.flex_layout25)}>
                  <h1 className={cn(section1Styles.big_title3, section1Styles.big_title3_layout8)}>Guided by</h1>
                  <h2 className={cn(section1Styles.medium_title3, section1Styles.medium_title3_layout)}>
                    Our cloud and infra security is powerfully guided by pingsafe. it maintauns a watch 24x7 and detects
                    even the most minute vulnerabilities in time to prevent harm to our security keys and systems.
                  </h2>
                </div>

                <img
                  src={require('assets/1fb3650d50e391220620300bc1c507c8.png').default}
                  alt=""
                  className={cn(section1Styles.image94, section1Styles.image94_layout)}
                />
              </div>
            </div>
            <div className={section1Styles.flex1__spacer40} />
            <div className={section1Styles.flex1__item75}>
              <div className={cn(section1Styles.group, section1Styles.group_layout19)}>
                <img
                  src={require('assets/55413e3c954e434eb564de0f8e66838b.png').default}
                  alt=""
                  className={cn(section1Styles.cover11, section1Styles.cover11_layout)}
                />

                <div className={cn(section1Styles.flex, section1Styles.flex_layout25)}>
                  <h1 className={cn(section1Styles.big_title3, section1Styles.big_title3_layout9)}>Secured by</h1>
                  <h2 className={cn(section1Styles.medium_title3, section1Styles.medium_title3_layout)}>
                    We use the most secure and reliable infrastructureprovided by AWS. All of Flint’s data exchange
                    happens through SSL using TLS 1.2 and your sensitive data is securely stored with AES-256
                    encryption.
                  </h2>
                </div>

                <div
                  style={{ '--src': `url(${require('assets/bb7d5b8dfd855d2ddc070b0e2af311f2.png').default})` }}
                  className={cn(section1Styles.block64, section1Styles.block64_layout)}>
                  <div className={cn(section1Styles.flex, section1Styles.flex_layout26)}>
                    <img
                      src={require('assets/cbbe406c18206db1850a51361f0a1ccc.png').default}
                      alt=""
                      className={cn(section1Styles.image96, section1Styles.image96_layout)}
                    />
                    <img
                      src={require('assets/e234a542c10ac1bc4156682e12f399cf.png').default}
                      alt=""
                      className={cn(section1Styles.image97, section1Styles.image97_layout)}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className={cn(section1Styles.group, section1Styles.group_layout20)}>
            <div
              style={{ '--src': `url(${require('assets/f097e2e0b6efec5a4a284ecf78f88601.png').default})` }}
              className={cn(section1Styles.block35, section1Styles.block35_layout)}>
              <img
                src={require('assets/60f0aa5cd1be58b9360d01c7d593600b.png').default}
                alt=""
                className={cn(section1Styles.decorator2, section1Styles.decorator2_layout3)}
              />
              <img
                src={require('assets/3c283fcd7f7306df7b7117c0b9277f21.png').default}
                alt=""
                className={cn(section1Styles.decorator4, section1Styles.decorator4_layout3)}
              />

              <div className={cn(section1Styles.group1, section1Styles.group1_layout16)}>
                <img
                  src={require('assets/346a2be1a2c6f898e9fcb46445e9dd85.png').default}
                  alt=""
                  className={cn(section1Styles.decorator4, section1Styles.decorator4_layout4)}
                />
                <img
                  src={require('assets/7ff5451091eed0acc39b481d825bd394.png').default}
                  alt=""
                  className={cn(section1Styles.decorator3, section1Styles.decorator3_layout2)}
                />
              </div>

              <img
                src={require('assets/e4bf0b3f4b07725cacee179fac29d988.png').default}
                alt=""
                className={cn(section1Styles.contain_block26, section1Styles.contain_block26_layout)}
              />

              <div className={cn(section1Styles.flex1, section1Styles.flex1_layout26)}>
                <div className={section1Styles.flex1__item76}>
                  <img
                    src={require('assets/1b4f95e14cd0feb6279f29616b5cbd74.png').default}
                    alt=""
                    className={cn(section1Styles.image72, section1Styles.image72_layout)}
                  />
                </div>
                <div className={section1Styles.flex1__spacer41} />
                <div className={section1Styles.flex1__item77}>
                  <img
                    src={require('assets/e54d20a83eb26baed083034e692f5f92.png').default}
                    alt=""
                    className={cn(section1Styles.image70, section1Styles.image70_layout)}
                  />
                </div>
              </div>

              <div
                style={{ '--src': `url(${require('assets/1793b533521ae23317839d3d57c4500d.png').default})` }}
                className={cn(section1Styles.image71, section1Styles.image71_layout)}
              />
            </div>

            <h1 className={cn(section1Styles.hero_title11, section1Styles.hero_title11_layout)}>
              Join us to make the world A <br />
              {'better place'}
            </h1>
          </div>

          <div className={cn(section1Styles.group, section1Styles.group_layout21)}>
            <div
              style={{ '--src': `url(${require('assets/04cea9e715d3a2d423effdbeae4d213d.png').default})` }}
              className={cn(section1Styles.block40, section1Styles.block40_layout)}>
              <div className={cn(section1Styles.flex, section1Styles.flex_layout27)}>
                <div className={cn(section1Styles.flex1, section1Styles.flex1_layout)}>
                  <div className={section1Styles.flex1__item78}>
                    <h1 className={cn(section1Styles.big_title5, section1Styles.big_title5_layout)}>Whitepaper</h1>
                  </div>
                  <div className={section1Styles.flex1__spacer42} />
                  <div className={section1Styles.flex1__item79}>
                    <h1 className={cn(section1Styles.big_title5, section1Styles.big_title5_layout)}>BSCDAO PROTOCOL</h1>
                  </div>
                  <div className={section1Styles.flex1__spacer43} />
                  <div className={section1Styles.flex1__item80}>
                    <h1 className={cn(section1Styles.big_title5, section1Styles.big_title5_layout)}>PRESALE</h1>
                  </div>
                </div>

                <div className={cn(section1Styles.flex1, section1Styles.flex1_layout27)}>
                  <div className={section1Styles.flex1__item81}>
                    <h1 className={cn(section1Styles.big_title5, section1Styles.big_title5_layout)}>About us</h1>
                  </div>
                  <div className={section1Styles.flex1__spacer44} />
                  <div className={section1Styles.flex1__item82}>
                    <h1 className={cn(section1Styles.big_title5, section1Styles.big_title5_layout)}>DAAP</h1>
                  </div>
                  <div className={section1Styles.flex1__spacer45} />
                  <div className={section1Styles.flex1__item83}>
                    <h1 className={cn(section1Styles.big_title5, section1Styles.big_title5_layout)}>WHITEPAPPER</h1>
                  </div>
                </div>

                <div className={cn(section1Styles.flex1, section1Styles.flex1_layout27)}>
                  <div className={section1Styles.flex1__item84}>
                    <h1 className={cn(section1Styles.big_title5, section1Styles.big_title5_layout)}>Contact us</h1>
                  </div>
                  <div className={section1Styles.flex1__spacer46} />
                  <div className={section1Styles.flex1__item85}>
                    <h1 className={cn(section1Styles.big_title5, section1Styles.big_title5_layout)}>PRODUCTS</h1>
                  </div>
                  <div className={section1Styles.flex1__spacer47} />
                  <div className={section1Styles.flex1__item86}>
                    <h1 className={cn(section1Styles.big_title5, section1Styles.big_title5_layout)}>Tokenomics</h1>
                  </div>
                </div>
              </div>
            </div>

            <div
              style={{ '--src': `url(${require('assets/4e9a4a9a6ffb6a2782061ca57ccbeeb3.png').default})` }}
              className={cn(section1Styles.block41, section1Styles.block41_layout)}>
              <div className={cn(section1Styles.flex, section1Styles.flex_layout29)}>
                <div className={cn(section1Styles.flex, section1Styles.flex_layout28)}>
                  <div className={cn(section1Styles.block42, section1Styles.block42_layout)}>
                    <div
                      style={{ '--src': `url(${require('assets/fc83d25bdaafed57554e508ac91e7246.png').default})` }}
                      className={cn(section1Styles.block43, section1Styles.block43_layout)}>
                      <img
                        src={require('assets/4542e490f807aa4d493b826e19c8a117.png').default}
                        alt=""
                        className={cn(section1Styles.image66, section1Styles.image66_layout)}
                      />
                    </div>
                  </div>

                  <h1 className={cn(section1Styles.hero_title10, section1Styles.hero_title10_layout)}>BSCDAO</h1>
                </div>

                <div className={cn(section1Styles.flex1, section1Styles.flex1_layout28)}>
                  <div className={section1Styles.flex1__item87}>
                    <div className={cn(section1Styles.block47, section1Styles.block47_layout)}>
                      <img
                        src={require('assets/4289dcdb9412efd2aec3692d46e3bbb4.png').default}
                        alt=""
                        className={cn(section1Styles.image69, section1Styles.image69_layout)}
                      />
                    </div>
                  </div>
                  <div className={section1Styles.flex1__spacer48} />
                  <div className={section1Styles.flex1__item87}>
                    <div className={cn(section1Styles.block46, section1Styles.block46_layout)}>
                      <img
                        src={require('assets/0c00db8b41a6e964c366788255661621.png').default}
                        alt=""
                        className={cn(section1Styles.icon11, section1Styles.icon11_layout1)}
                      />
                    </div>
                  </div>
                  <div className={section1Styles.flex1__spacer48} />
                  <div className={section1Styles.flex1__item87}>
                    <div className={cn(section1Styles.block44, section1Styles.block44_layout)}>
                      <img
                        src={require('assets/6d9f158787b16d59549f780fbebec563.png').default}
                        alt=""
                        className={cn(section1Styles.image671, section1Styles.image671_layout)}
                      />
                    </div>
                  </div>
                  <div className={section1Styles.flex1__spacer48} />
                  <div className={section1Styles.flex1__item87}>
                    <div className={cn(section1Styles.block45, section1Styles.block45_layout)}>
                      <img
                        src={require('assets/693bba8c60ef0ba1952fab26623809f2.png').default}
                        alt=""
                        className={cn(section1Styles.image68, section1Styles.image68_layout)}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className={cn(section1Styles.group1, section1Styles.group1_layout17)}>
            <img
              src={require('assets/7506ba4ca28ce645563e1f94a5e1f269.png').default}
              alt=""
              className={cn(section1Styles.decorator1, section1Styles.decorator1_layout3)}
            />

            <div className={cn(section1Styles.flex, section1Styles.flex_layout5)}>
              <h1 className={cn(section1Styles.hero_title12_box, section1Styles.hero_title12_box_layout)}>
                <div className={section1Styles.hero_title12}>
                  <span className={section1Styles.hero_title12_span0}>
                    Disclamier
                    <br />
                  </span>
                  <span className={section1Styles.hero_title12_span1}>
                    Cryptocurrency may be unregulated in your jurisdiction. The value of cryptocurrencies may go down as
                    well as up. <br />
                    {'Profits may be subject to capital gains or other taxes applicable in your jurisdiction.'}
                  </span>
                </div>
              </h1>

              <div className={cn(section1Styles.flex1, section1Styles.flex1_layout27)}>
                <div className={section1Styles.flex1__item88}>
                  <hr size={1} className={cn(section1Styles.line2, section1Styles.line2_layout)} />
                </div>
                <div className={section1Styles.flex1__spacer49} />
                <div className={section1Styles.flex1__item89}>
                  <h3 className={cn(section1Styles.subtitle41, section1Styles.subtitle41_layout)}>
                    © 2022 - All rights reserved by BCSDAO PROTOCOL.
                  </h3>
                </div>
                <div className={section1Styles.flex1__spacer49} />
                <div className={section1Styles.flex1__item90}>
                  <hr size={1} className={cn(section1Styles.line3, section1Styles.line3_layout)} />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          style={{ '--src': `url(${require('assets/47fd319525441ffa762f2aaefa7e8ce4.png').default})` }}
          className={cn(section1Styles.block3, section1Styles.block3_layout)}>
          <div
            style={{ '--src': `url(${require('assets/0b94bb63ea9a47035d7616ad0fcae6e2.png').default})` }}
            className={cn(section1Styles.block4, section1Styles.block4_layout)}>
            <img
              src={require('assets/31328cc558c106b7c6d661c97a4dbf93.png').default}
              alt=""
              className={cn(section1Styles.image431, section1Styles.image431_layout)}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Page1(props) {
  return (
    <main className={cn('page1', styles.main, styles.main_layout)}>
      <img
        src={require('assets/346a2be1a2c6f898e9fcb46445e9dd85.png').default}
        alt=""
        className={cn(styles.decorator, styles.decorator_layout)}
      />
      {renderSection1(props)}
    </main>
  );
}

Page1.inStorybook = true;
