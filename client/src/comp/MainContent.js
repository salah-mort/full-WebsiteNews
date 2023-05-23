import React from "react";
import "./MainContent.css";
import { Helmet } from "react-helmet-async";

const MainContent = ({ pageName }) => {

  return (


<main>
  <div className="wrapper">
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-5  ">
          <article className="main-article">
            <h1>
              William Bird <br /> Web Developer
            </h1>
            <div className="image-main">
              <img src="images/code.jpg" id="hero-image" alt="Billy Bird" />
              <p className="image-caption">William Bird</p>
            </div>
            <h3 id="hero-title">
              Why this candidate is the better option than the rest, and why you
              should hire him today.
            </h3>
            <hr />
            <p>
              <a href="#">
                Why previous employers hate themselves for not hiring Billy
                Bird...
              </a>
            </p>
            {/* <hr>
							<p><a href="#">Billy made this site himself... CNN hates him</a></p> */}
          </article>
        </div>
        <div className="col  ">
          <article>
            <div className="article-image">
              <img src="images/marvel.jpg" alt="Marvel Image" />
            </div>
            <p className="title-overlap">
              <a href="#">Why Marvel movies are the best movies EVER!</a>
            </p>
            <div className="article-image">
              <img src="images/snyder-cut.jpeg" alt="Snyder-cut" />
            </div>
            <p className="title-overlap">
              <a href="#">The Snyder Cut was the better movie</a>
            </p>
          </article>
        </div>
        <div className="col  ">
          <article>
            <p className="image-title">Top stories</p>
            <div className="article-image">
              <img src="images/extended-warranty.png" alt="Extended Warranty" />
            </div>
            <h3>
              We have been trying to contact you about your vehicles extended
              warranty
            </h3>
            <hr />
            <p>
              <a href="#">Does anyone ever call these people back?</a>
            </p>
            <hr />
            <p>
              <a href="#">What if the extended warranty is actually legit?</a>
            </p>
            <hr />
            <p>
              <a href="#">
                I still never got my $6 mil from the prince who emailed me for
                help so im a little hesitant to try it
              </a>
            </p>
            <hr />
            <p>
              <a href="#">No one answered when I just tried to call</a>
            </p>
            <hr />
            <p>
              <a href="#">
                Just answer and ask them to hold and compare hold times with
                other peple in the office
              </a>
            </p>
          </article>
        </div>
      </div>
      <div className="row">
        <div className="col-md-4  ">
          <article>
            <p className="image-title">Tennis Art Photo</p>
            <div className="article-image">
              <img src="images/tennis.jpg" alt="" />
            </div>
            <h3>Do this one trick and nothing will happen</h3>
            <hr />
            <p>
              <a href="#">Whats the point of this photo?</a>
            </p>
            <hr />
            <p>
              <a href="#">
                I dont play tennis but I fell like this has nothing to do with
                actual tennis
              </a>
            </p>
            <hr />
            <p>
              <a href="#">
                Who comes up with these weird totally off photos of sports?
              </a>
            </p>
            <hr />
            <p>
              <a href="#">
                I can imagine this person sitting in a yoga position on a
                football
              </a>
            </p>
            <hr />
            <p>
              <a href="#">And that has nothing to do with football.</a>
            </p>
          </article>
        </div>
        <div className="col-md-5  ">
          <article>
            <p className="image-title">Featured</p>
            <div className="article-image">
              <img src="images/tgs.jpeg" alt="" />
              <p className="image-title banner">
                The Greatest Showman - Featuring Wolverine
              </p>
            </div>
            <div className="media-object">
              <div className="object-image">
                <img src="images/wolverine.jpg" alt="" />
              </div>
              <div className="object-content">
                <p>
                  <a href="#">Ya... This is the same person. Crazy huh?</a>
                </p>
              </div>
            </div>
            <hr />
            <div className="media-object">
              <div className="object-image">
                <img src="images/ryan.jpeg" alt="" />
              </div>
              <div className="object-content">
                <p>
                  <a href="#">Can you guess who this person is?</a>
                </p>
              </div>
            </div>
          </article>
        </div>
        <div className="col-md-3  ">
          <article>
            <p className="image-title">Spotlight</p>
            <div className="row border-top">
              <div className="col-md-4   ">
                <img src="images/article-9.jpg" alt="" />
              </div>
              <div className="col-md-8  ">
                <p>Sharapova in deep thought</p>
              </div>
            </div>
            <div className="row">
              <div className="col-md-4   border-top">
                <img src="images/article-10.jpg" alt="" />
              </div>
              <div className="col-md-8  ">
                <p>Why this sign was so important to stop and take a picture</p>
              </div>
            </div>
          </article>
        </div>
      </div>
      <div className="row">
        <div className="col-4  ">
          <article>
            <p className="image-title">Take a closer look</p>
            <div className="media-object">
              <div className="object-image">
                <img src="images/article-11.jpg" alt="" />
              </div>
            </div>
            <h3>'Wonder Woman' soars, 'The Mummy' staggers</h3>
            <div className="row border-top">
              <div className="col-3  ">
                <img src="images/article-12.jpg" alt="" />
              </div>
              <div className="col-9">
                <p>
                  <a href="">Hamilton gets sixth Canadian Grand Prix win</a>
                </p>
              </div>
            </div>
            <div className="row border-top">
              <div className="col-3">
                <img src="images/article-13.jpg" alt="" />
              </div>
              <div className="col-9">
                <p>
                  <a href="#">Orlando's new 'culture of compassion'</a>
                </p>
              </div>
            </div>
            <div className="row border-top">
              <div className="col-3">
                <img src="images/article-14.jpg" alt="" />
              </div>
              <div className="col-9">
                <p>
                  <a href="#">
                    Want to be happy and succesfull? Try compassion
                  </a>
                </p>
              </div>
            </div>
          </article>
        </div>
        <div className="col-4  ">
          <article>
            <p className="image-title">What do you think she is looking at?</p>
            <div className="article-image" id="overlay-banner">
              <img src="images/article-1.jpg" alt="" />
              <p className="image-title banner" id="overlay-content">
                British Prime Minister
              </p>
            </div>
            <div className="row border-top">
              <div className="col-8">
                <img src="images/article-16.jpg" alt="" />
              </div>
              <div className="col-4">
                <p className="thumbnail-content">
                  Why this lake will make you millions
                </p>
              </div>
            </div>
            <div className="row border-top">
              <div className="col-8">
                <img src="images/article-17.jpg" alt="" />
              </div>
              <div className="col-4">
                <p className="thumbnail-content">
                  'Lost' photos of ancient tribe uncovered
                </p>
              </div>
            </div>
          </article>
        </div>
        <div className="col-4  ">
          <article>
            <p className="image-title">Opinion</p>
            <div className="article-image">
              <img src="images/article-18.jpg" alt="" />
              <h3>
                <span className="bold">David A. Andelman:</span> "Macron, the
                strongman Europe needs"
              </h3>
            </div>
            <div className="row border-top">
              <div className="col-3">
                <img src="images/article-19.jpg" alt="" />
              </div>
              <div className="col-9">
                <p className="thumbnail-content-small">
                  <span className="bold">Oma Seddiq </span>My life as a student
                  in Qatar
                </p>
              </div>
            </div>
            <div className="row border-top">
              <div className="col-3">
                <img src="images/article-20.jpg" alt="" />
              </div>
              <div className="col-9">
                <p className="thumbnail-content-small">
                  <span className="bold">Laura Beers </span>History says Theresa
                  May must go
                </p>
              </div>
            </div>
            <div className="row border-top">
              <div className="col-3">
                <img src="images/article-21.jpg" alt="" />
              </div>
              <div className="col-9">
                <p className="thumbnail-content-small">
                  <span className="bold">James Bloodworth</span>Rise of the
                  left-wing shakes UK politics
                </p>
              </div>
            </div>
          </article>
        </div>
      </div>
      <div className="row featured">
        <div className="col-12">
          <article>
            <h3 className="header-divider">Featured Section</h3>
          </article>
        </div>
      </div>
      <div className="row">
        <div className="col-4  ">
          <article>
            <div className="image-title">Sport</div>
            <div className="article-image">
              <img src="images/article-22.jpg" alt="" />
            </div>
            <h3>
              What happens in the 21 hours when soccer stars aren't training
            </h3>
            <hr />
            <p>
              <a href="#">Red clay goes 'green' in $400M refurb</a>
            </p>
            <hr />
            <p>
              <a href="#">
                Grapes of success: Buffon ventures into wine business
              </a>
            </p>
            <hr />
            <p>
              <a href="#">Bryan Habana: Rugby star's surprise DNA discovery</a>
            </p>
            <hr />
            <p>
              <a href="#">Mario Balotelli isn't trouble, 'he's a good guy'</a>
            </p>
          </article>
        </div>
        <div className="col-4  ">
          <article>
            <div className="image-title">Travel</div>
            <div className="article-image">
              <img src="images/article-23.jpg" alt="" />
            </div>
            <h3>A volcano on an island within a lake within an island</h3>
            <hr />
            <p>
              <a href="#">The best maple syrup taffy in Montreal</a>
            </p>
            <hr />
            <p>
              <a href="#">Lantau: Exploring Hong Kong's greenest island</a>
            </p>
            <hr />
            <p>
              <a href="#">Secrets of the ancient Silk Road</a>
            </p>
            <hr />
            <p>
              <a href="#">Shopping in Barcelona: A fashion stylist's guide</a>
            </p>
          </article>
        </div>
        <div className="col-4  ">
          <article>
            <div className="image-title">Style</div>
            <div className="article-image">
              <img src="images/article-24.jpg" alt="" />
            </div>
            <h3>Incredible photos show the world as you've never seen it</h3>
            <hr />
            <p>
              <a href="#">The terrifying symptoms of sleep paralysis</a>
            </p>
            <hr />
            <p>
              <a href="#">US embassy sparks controversy</a>
            </p>
            <hr />
            <p>
              <a href="#">The new carbon-eating tower rising in the East</a>
            </p>
            <hr />
            <p>
              <a href="#">Touching tribute to 'hipster' grandpa goes viral</a>
            </p>
          </article>
        </div>
        <div className="col-4  ">
          <article>
            <div className="image-title">CNN Money</div>
            <div className="article-image">
              <img src="images/article-25.jpg" alt="" />
            </div>
            <h3>Trump is hurting American tourism</h3>
            <hr />
            <p>
              <a href="#">Australia extends epic recession-free run</a>
            </p>
            <hr />
            <p>
              <a href="#">10 top-paid CEOs</a>
            </p>
            <hr />
            <p>
              <a href="#">Watch 350 balls of cotton turn into a shirt</a>
            </p>
            <hr />
            <p>
              <a href="#">How Russia's economy is staying resilient</a>
            </p>
          </article>
        </div>
        <div className="col-4  ">
          <article>
            <div className="image-title">Health</div>
            <div className="article-image">
              <img src="images/article-26.jpg" alt="" />
            </div>
            <h3>Fruits and veggies that could poison you</h3>
            <hr />
            <p>
              <a href="#">'Stealthing,': others call it sexual assault</a>
            </p>
            <hr />
            <p>
              <a href="#">Weight loss tied to when, not what, you eat</a>
            </p>
            <hr />
            <p>
              <a href="#">Your kids want to talk to you about sex</a>
            </p>
            <hr />
            <p>
              <a href="#">Man dies after swimming with new tattoo</a>
            </p>
          </article>
        </div>
      </div>
    </div>
  </div>
  <section className="exclusive-content">
    <div className="wrapper">
      <div className="container-fluid">
        <div className="row featured">
          <div className="col-12">
            <article>
              <h3 className="header-divider">In case you missed it</h3>
            </article>
          </div>
        </div>
        <div className="row">
          <div className="col-8  ">
            <article>
              <div className="article-image" id="overlay-banner">
                <img
                  src="images/article-27.jpg"
                  id="main-exclusive-image"
                  alt=""
                />
                <p className="image-caption">CNN Exclusive</p>
                <p className="image-title banner" id="overlay-content">
                  Harrowing video shows Syria's war on its own children
                </p>
              </div>
            </article>
          </div>
          <div className="col-4  ">
            <article>
              <img
                src="images/article-28.jpg"
                className="exclusive-thumbnail"
                alt=""
              />
              <h3>Which European leader are you?</h3>
            </article>
            <article>
              <img
                src="images/article-29.jpg"
                className="exclusive-thumbnail"
                alt=""
              />
              <h3>Venezuela: How paradise got lost </h3>
            </article>
          </div>
        </div>
      </div>
    </div>
  </section>
</main>

  )
};

{/* Tab News Start*/}
{/* <div className="tab-news">
  <div className="container">
    <div className="row">
      <div className="col-md-6">
        <ul className="nav nav-pills nav-justified">
          <li className="nav-item">
            <a
              className="nav-link active"
              data-toggle="pill"
              href="#featured"
            >
              Featured News
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" data-toggle="pill" href="#popular">
              Popular News
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" data-toggle="pill" href="#latest">
              Latest News
            </a>
          </li>
        </ul>
        <div className="tab-content">
          <div id="featured" className="container tab-pane active">
            <div className="tn-news">
              <div className="tn-img">
                <img src="img/news-350x223-1.jpg" />
              </div>
              <div className="tn-title">
                <a href="">Lorem ipsum dolor sit amet</a>
              </div>
            </div>
            <div className="tn-news">
              <div className="tn-img">
                <img src="img/news-350x223-2.jpg" />
              </div>
              <div className="tn-title">
                <a href="">Lorem ipsum dolor sit amet</a>
              </div>
            </div>
            <div className="tn-news">
              <div className="tn-img">
                <img src="img/news-350x223-3.jpg" />
              </div>
              <div className="tn-title">
                <a href="">Lorem ipsum dolor sit amet</a>
              </div>
            </div>
          </div>
          <div id="popular" className="container tab-pane fade">
            <div className="tn-news">
              <div className="tn-img">
                <img src="img/news-350x223-4.jpg" />
              </div>
              <div className="tn-title">
                <a href="">Lorem ipsum dolor sit amet</a>
              </div>
            </div>
            <div className="tn-news">
              <div className="tn-img">
                <img src="img/news-350x223-5.jpg" />
              </div>
              <div className="tn-title">
                <a href="">Lorem ipsum dolor sit amet</a>
              </div>
            </div>
            <div className="tn-news">
              <div className="tn-img">
                <img src="img/news-350x223-1.jpg" />
              </div>
              <div className="tn-title">
                <a href="">Lorem ipsum dolor sit amet</a>
              </div>
            </div>
          </div>
          <div id="latest" className="container tab-pane fade">
            <div className="tn-news">
              <div className="tn-img">
                <img src="img/news-350x223-2.jpg" />
              </div>
              <div className="tn-title">
                <a href="">Lorem ipsum dolor sit amet</a>
              </div>
            </div>
            <div className="tn-news">
              <div className="tn-img">
                <img src="img/news-350x223-3.jpg" />
              </div>
              <div className="tn-title">
                <a href="">Lorem ipsum dolor sit amet</a>
              </div>
            </div>
            <div className="tn-news">
              <div className="tn-img">
                <img src="img/news-350x223-4.jpg" />
              </div>
              <div className="tn-title">
                <a href="">Lorem ipsum dolor sit amet</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-md-6">
        <ul className="nav nav-pills nav-justified">
          <li className="nav-item">
            <a
              className="nav-link active"
              data-toggle="pill"
              href="#m-viewed"
            >
              Most Viewed
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" data-toggle="pill" href="#m-read">
              Most Read
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" data-toggle="pill" href="#m-recent">
              Most Recent
            </a>
          </li>
        </ul>
        <div className="tab-content">
          <div id="m-viewed" className="container tab-pane active">
            <div className="tn-news">
              <div className="tn-img">
                <img src="img/news-350x223-5.jpg" />
              </div>
              <div className="tn-title">
                <a href="">Lorem ipsum dolor sit amet</a>
              </div>
            </div>
            <div className="tn-news">
              <div className="tn-img">
                <img src="img/news-350x223-4.jpg" />
              </div>
              <div className="tn-title">
                <a href="">Lorem ipsum dolor sit amet</a>
              </div>
            </div>
            <div className="tn-news">
              <div className="tn-img">
                <img src="img/news-350x223-3.jpg" />
              </div>
              <div className="tn-title">
                <a href="">Lorem ipsum dolor sit amet</a>
              </div>
            </div>
          </div>
          <div id="m-read" className="container tab-pane fade">
            <div className="tn-news">
              <div className="tn-img">
                <img src="img/news-350x223-2.jpg" />
              </div>
              <div className="tn-title">
                <a href="">Lorem ipsum dolor sit amet</a>
              </div>
            </div>
            <div className="tn-news">
              <div className="tn-img">
                <img src="img/news-350x223-1.jpg" />
              </div>
              <div className="tn-title">
                <a href="">Lorem ipsum dolor sit amet</a>
              </div>
            </div>
            <div className="tn-news">
              <div className="tn-img">
                <img src="img/news-350x223-3.jpg" />
              </div>
              <div className="tn-title">
                <a href="">Lorem ipsum dolor sit amet</a>
              </div>
            </div>
          </div>
          <div id="m-recent" className="container tab-pane fade">
            <div className="tn-news">
              <div className="tn-img">
                <img src="img/news-350x223-4.jpg" />
              </div>
              <div className="tn-title">
                <a href="">Lorem ipsum dolor sit amet</a>
              </div>
            </div>
            <div className="tn-news">
              <div className="tn-img">
                <img src="img/news-350x223-5.jpg" />
              </div>
              <div className="tn-title">
                <a href="">Lorem ipsum dolor sit amet</a>
              </div>
            </div>
            <div className="tn-news">
              <div className="tn-img">
                <img src="img/news-350x223-1.jpg" />
              </div>
              <div className="tn-title">
                <a href="">Lorem ipsum dolor sit amet</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div> */}



{/* Tab News Start*/}

{/* Main News Start*/}
{/* <div className="main-news">
  <div className="container">
    <div className="row">
      <div className="col-lg-9">
        <div className="row">
          <div className="col-md-4">
            <div className="mn-img">
              <img src="img/news-350x223-1.jpg" />
              <div className="mn-title">
                <a href="">Lorem ipsum dolor sit</a>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="mn-img">
              <img src="img/news-350x223-2.jpg" />
              <div className="mn-title">
                <a href="">Lorem ipsum dolor sit</a>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="mn-img">
              <img src="img/news-350x223-3.jpg" />
              <div className="mn-title">
                <a href="">Lorem ipsum dolor sit</a>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="mn-img">
              <img src="img/news-350x223-4.jpg" />
              <div className="mn-title">
                <a href="">Lorem ipsum dolor sit</a>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="mn-img">
              <img src="img/news-350x223-5.jpg" />
              <div className="mn-title">
                <a href="">Lorem ipsum dolor sit</a>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="mn-img">
              <img src="img/news-350x223-1.jpg" />
              <div className="mn-title">
                <a href="">Lorem ipsum dolor sit</a>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="mn-img">
              <img src="img/news-350x223-2.jpg" />
              <div className="mn-title">
                <a href="">Lorem ipsum dolor sit</a>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="mn-img">
              <img src="img/news-350x223-3.jpg" />
              <div className="mn-title">
                <a href="">Lorem ipsum dolor sit</a>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="mn-img">
              <img src="img/news-350x223-4.jpg" />
              <div className="mn-title">
                <a href="">Lorem ipsum dolor sit</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-3">
        <div className="mn-list">
          <h2>Read More</h2>
          <ul>
            <li>
              <a href="">Lorem ipsum dolor sit amet</a>
            </li>
            <li>
              <a href="">Pellentesque tincidunt enim libero</a>
            </li>
            <li>
              <a href="">Morbi id finibus diam vel pretium enim</a>
            </li>
            <li>
              <a href="">Duis semper sapien in eros euismod sodales</a>
            </li>
            <li>
              <a href="">Vestibulum cursus lorem nibh</a>
            </li>
            <li>
              <a href="">Morbi ullamcorper vulputate metus non eleifend</a>
            </li>
            <li>
              <a href="">Etiam vitae elit felis sit amet</a>
            </li>
            <li>
              <a href="">Nullam congue massa vitae quam</a>
            </li>
            <li>
              <a href="">Proin sed ante rutrum</a>
            </li>
            <li>
              <a href="">Curabitur vel lectus</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</div> */}
{/* Main News End*/}

export default MainContent;
