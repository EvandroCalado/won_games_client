export const dynamicParams = false;
import { mock as galleryMock } from '@/components/Gallery/mock';
import { mock as gameMock } from '@/components/GameCardSlider/mock';
import { mock as detailsMock } from '@/components/GameDetails/mock';
import { mock as gameInfoMock } from '@/components/GameInfo/mock';
import { mock as highlightMock } from '@/components/Highlight/mock';
import { Game } from '@/templates';

export const generateStaticParams = async () => {
  return [{ slug: 'cyberpunk-2077' }];
};

export const getGame = async () => {
  return {
    cover: '/img/bg-game.jpg',
    gameInfo: gameInfoMock,
    gallery: galleryMock,
    description: `
     <div class="description"><div class="banner welcome-offer-banner ng-scope ng-hide" welcome-offer-banner="" timer="0" ng-show="welcomeOfferBanner.isCounterReady &amp;&amp; !timer.finished"><div class="banner__header">
    </div><div class="welcome-offer-banner__description">
        </div><div class="welcome-offer-banner__timer"><div class="welcome-offer-banner__timer-section ng-binding" ng-bind="timer.hoursLeft"></div>
        <div class="welcome-offer-banner__timer-section ng-binding" ng-bind="timer.minutesLeft"></div>
        <div class="welcome-offer-banner__timer-section ng-binding" ng-bind="timer.secondsLeft"></div></div></div><a href="https://www.gog.com/game/cyberpunk_2077_ultimate_edition"><img src="https://items.gog.com/not_a_cp_pl/ENG_1540X400_bundle_banner_cyberpunk_phantom_liberty.png"></a><br><hr><img src="https://items.gog.com/not_a_cp/addon_en.png"><hr><br><video muted="" preload="auto" loop="" autoplay="autoplay" style="margin: auto;display:block;width:100%"><source src="https://items.gog.com/not_a_cp/action.mp4"></video><br><b>Cyberpunk 2077</b> is an open-world, action-adventure RPG set in the megalopolis of Night City, where you play as a cyberpunk mercenary wrapped up in a do-or-die fight for survival. Improved and featuring all-new free additional content, customize your character and playstyle as you take on jobs, build a reputation, and unlock upgrades. The relationships you forge and the choices you make will shape the story and the world around you. Legends are made here. What will yours be?
<br><br><a target="“_blank”" href="https://www.cyberpunk.net/news/49597/update-2-1-patch-notes"><img alt="" src="https://items.gog.com/not_a_cp/update/2-1_Update_Panel_610x250_EN.png"></a><br><br><h4>IMMERSE YOURSELF WITH UPDATE 2.1</h4>
Night City feels more alive than ever with the free Update 2.1! Take a ride on the fully functional NCART metro system, listen to music as you explore the city with the Radioport, hang out with your partner in V’s apartment, compete in replayable races, ride new vehicles, enjoy improved bike combat and handling, discover hiddens secrets and much, much more!

<br><br><video muted="" preload="auto" loop="" autoplay="autoplay" style="margin: auto;display:block;width:100%"><source src="https://items.gog.com/not_a_cp/character.mp4"></video><br><h4>CREATE YOUR OWN CYBERPUNK</h4>
Become an urban outlaw equipped with cybernetic enhancements and build your legend on the streets of Night City.

<br><br><video muted="" preload="auto" loop="" autoplay="autoplay" style="margin: auto;display:block;width:100%"><source src="https://items.gog.com/not_a_cp/world.mp4"></video><br><h4>EXPLORE THE CITY OF THE FUTURE</h4>
Night City is packed to the brim with things to do, places to see, and people to meet. And it’s up to you where to go, when to go, and how to get there.

<br><br><video muted="" preload="auto" loop="" autoplay="autoplay" style="margin: auto;display:block;width:100%"><source src="https://items.gog.com/not_a_cp/tech.mp4"></video><br><h4>BUILD YOUR LEGEND</h4>
Go on daring adventures and build relationships with unforgettable characters whose fates are shaped by the choices you make.

<br><br><video muted="" preload="auto" loop="" autoplay="autoplay" style="margin: auto;display:block;width:100%"><source src="https://items.gog.com/not_a_cp/music.mp4"></video><br><h4>CLAIM EXCLUSIVE ITEMS</h4>
Claim in-game swag &amp; digital goodies inspired by CD PROJEKT RED games as part of the My Rewards program.

<br><br><hr><a target="“_blank”" href="https://www.gog.com/promo/cyberpunk_hub"><img alt="" src="https://items.gog.com/not_a_cp/learn_more.png"></a><hr><center><img alt="" width="32%" height="32%" src="https://items.gog.com/not_a_cp/awards/TGA.png"><img alt="" width="32%" height="32%" src="https://items.gog.com/not_a_cp/awards/BAFTA_2.png"><br><img alt="" width="32%" height="32%" src="https://items.gog.com/not_a_cp/awards/awardscp1.png"><img alt="" width="32%" height="32%" src="https://items.gog.com/not_a_cp/awards/awardscp2.png"><hr>

* Exclusive Digital Comic - Cyberpunk 2077: Big City Dreams is available in English only.

            <p class="description__copyrights">
            CD PROJEKT®, Cyberpunk®, Cyberpunk 2077® are registered trademarks of CD PROJEKT S.A. © 2019
CD PROJEKT S.A. All rights reserved. All other copyrights and trademarks are the property of their
respective owners.
        </p></center></div>
    `,
    details: detailsMock,
    upcomingGames: gameMock,
    upcomingHighlight: highlightMock,
    recommendedGames: gameMock,
  };
};

const GamePage = async () => {
  const game = await getGame();

  return <Game {...game} />;
};

export default GamePage;
