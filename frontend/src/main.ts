import './style.css'
import avatar from './assets/avatar-michelle.jpg'
import drawers from './assets/drawers.jpg'
import facebookIcon from './assets/icon-facebook.svg'
import pinterestIcon from './assets/icon-pinterest.svg'
import shareIcon from './assets/icon-share.svg'
import twitterIcon from './assets/icon-twitter.svg'
import { createShareUrls, setupShareDisclosure } from './share.ts'

const title = 'Shift the overall look and feel by adding these wonderful touches to furniture in your home'
const description = 'Ever been in a room and felt like something was missing? Perhaps it felt slightly bare and uninviting. I’ve got some simple tips to help you make any room feel complete.'
const pageUrl = window.location.href
const imageUrl = new URL(drawers, pageUrl).href
const shareUrls = createShareUrls({ pageUrl, title, imageUrl, description })

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <main class="main-content" id="content">
    <article class="article" aria-labelledby="article-title">
      <div class="article__media">
        <img class="article__image" src="${drawers}" width="660" height="528" alt="Green dresser with framed art and a vase of dried flowers against a white brick wall." fetchpriority="high">
      </div>
      <div class="article__content">
        <h1 class="article__title" id="article-title">${title}</h1>
        <p class="article__summary">${description}</p>
        <footer class="article__footer">
          <div class="article__author">
            <img class="article__avatar" src="${avatar}" width="175" height="175" alt="">
            <div>
              <p class="article__author-name">Michelle Appleton</p>
              <time class="article__date" datetime="2020-06-28">28 Jun 2020</time>
            </div>
          </div>
          <div class="article__share-region">
            <button class="article__share-button" id="share-trigger" type="button" aria-expanded="false" aria-controls="share-panel">
              <img src="${shareIcon}" width="15" height="13" alt="">
              <span class="visually-hidden">Share this article</span>
            </button>
            <div class="article__share-panel" id="share-panel" hidden>
              <p class="article__share-label">Share</p>
              <ul class="article__share-links" role="list">
                <li><a href="${shareUrls.facebook}" target="_blank" rel="noopener noreferrer" aria-label="Share on Facebook"><img src="${facebookIcon}" width="20" height="20" alt=""></a></li>
                <li><a href="${shareUrls.x}" target="_blank" rel="noopener noreferrer" aria-label="Share on X"><img src="${twitterIcon}" width="20" height="17" alt=""></a></li>
                <li><a href="${shareUrls.pinterest}" target="_blank" rel="noopener noreferrer" aria-label="Share on Pinterest"><img src="${pinterestIcon}" width="20" height="20" alt=""></a></li>
              </ul>
            </div>
          </div>
        </footer>
      </div>
    </article>
  </main>
`

setupShareDisclosure({
  region: document.querySelector<HTMLElement>('.article__share-region')!,
  trigger: document.querySelector<HTMLButtonElement>('#share-trigger')!,
  panel: document.querySelector<HTMLElement>('#share-panel')!,
})