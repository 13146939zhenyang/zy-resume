const Portfolio = ()=> {
	return (
    <>
      <div className="page-title">
        <h2>Portfolio</h2>
      </div>
      <div>
        <div class="row">
          <div class="col-xs-12 col-sm-12">
            <div class="portfolio-content">
              <ul class="portfolio-filters">
                <li class="active">
                  <a
                    class="filter btn btn-sm btn-link"
                    data-group="category_all"
                  >
                    All
                  </a>
                </li>
                <li class="">
                  <a
                    class="filter btn btn-sm btn-link"
                    data-group="category_detailed"
                  >
                    Detailed
                  </a>
                </li>
                <li class="">
                  <a
                    class="filter btn btn-sm btn-link"
                    data-group="category_mockups"
                  >
                    Mockups
                  </a>
                </li>
                <li class="">
                  <a
                    class="filter btn btn-sm btn-link"
                    data-group="category_soundcloud"
                  >
                    SoundCloud
                  </a>
                </li>
                <li class="">
                  <a
                    class="filter btn btn-sm btn-link"
                    data-group="category_vimeo-videos"
                  >
                    Vimeo Videos
                  </a>
                </li>
                <li class="">
                  <a
                    class="filter btn btn-sm btn-link"
                    data-group="category_youtube-videos"
                  >
                    YouTube Videos
                  </a>
                </li>
              </ul>

              <div
                class="portfolio-grid three-columns shuffle"
                style={{
                  position: "relative",
                  overflow: "hidden",
                  height: "552.812px",
                  transition: "height 450ms ease-out 0s",
                }}
              >
                <figure
                  class="item lbaudio shuffle-item filtered"
                  data-groups='["category_all", "category_soundcloud"]'
                  style={{
                    position: "absolute",
                    top: "0px",
                    left: "0px",
                    visibility: "visible",
                    transition:
                      "transform 450ms ease-out 0s, opacity 450ms ease-out 0s",
                    opacity: "1",
                    transform: "translate3d(0px, 0px, 0px) scale3d(1, 1, 1)",
                  }}
                >
                  <div class="portfolio-item-img">
                    <img
                      src="img/portfolio/1.jpg"
                      alt="SoundCloud Audio"
                      title=""
                    />
                    <a
                      href="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/221650664&amp;color=%23ff5500&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;show_teaser=true&amp;visual=true"
                      class="lightbox mfp-iframe"
                      title="SoundCloud Audio"
                    ></a>
                  </div>

                  <i class="fa fa-volume-up"></i>
                  <h4 class="name">SoundCloud Audio</h4>
                  <span class="category">SoundCloud</span>
                </figure>

                <figure
                  class="item standard shuffle-item filtered"
                  data-groups='["category_all", "category_detailed"]'
                  style={{
                    position: "absolute",
                    top: "0px",
                    left: "0px",
                    visibility: "visible",
                    opacity: "1",
                    transform: "translate3d(222px, 0px, 0px) scale3d(1, 1, 1)",
                    transition:
                      "transform 450ms ease-out 0s, opacity 450ms ease-out 0s",
                  }}
                >
                  <div class="portfolio-item-img">
                    <img
                      src="img/portfolio/2.jpg"
                      alt="Media Project 2"
                      title=""
                    />
                    <a href="portfolio-1.html" class="ajax-page-load"></a>
                  </div>

                  <i class="far fa-file-alt"></i>
                  <h4 class="name">Detailed Project 2</h4>
                  <span class="category">Detailed</span>
                </figure>

                <figure
                  class="item lbvideo shuffle-item filtered"
                  data-groups='["category_all", "category_vimeo-videos"]'
                  style={{
                    position: "absolute",
                    top: "0px",
                    left: "0px",
                    visibility: "visible",
                    opacity: "1",
                    transform: "translate3d(443px, 0px, 0px) scale3d(1, 1, 1)",
                    transition:
                      "transform 450ms ease-out 0s, opacity 450ms ease-out 0s",
                  }}
                >
                  <div class="portfolio-item-img">
                    <img
                      src="img/portfolio/3.jpg"
                      alt="Vimeo Video 1"
                      title=""
                    />
                    <a
                      href="https://player.vimeo.com/video/158284739"
                      class="lightbox mfp-iframe"
                      title="Vimeo Video 1"
                    ></a>
                  </div>

                  <i class="fas fa-video"></i>
                  <h4 class="name">Vimeo Video 1</h4>
                  <span class="category">Vimeo Videos</span>
                </figure>

                <figure
                  class="item standard shuffle-item filtered"
                  data-groups='["category_all", "category_detailed"]'
                  style={{
                    position: "absolute",
                    top: "0px",
                    left: "0px",
                    visibility: "visible",
                    opacity: "1",
                    transform: "translate3d(0px, 276px, 0px) scale3d(1, 1, 1)",
                    transition:
                      "transform 450ms ease-out 0s, opacity 450ms ease-out 0s",
                  }}
                >
                  <div class="portfolio-item-img">
                    <img
                      src="img/portfolio/4.jpg"
                      alt="Media Project 1"
                      title=""
                    />
                    <a href="portfolio-1.html" class="ajax-page-load"></a>
                  </div>

                  <i class="far fa-file-alt"></i>
                  <h4 class="name">Detailed Project 1</h4>
                  <span class="category">Detailed</span>
                </figure>

                <figure
                  class="item lbimage shuffle-item filtered"
                  data-groups='["category_all", "category_mockups"]'
                  style={{
                    position: "absolute",
                    top: "0px",
                    left: "0px",
                    visibility: "visible",
                    opacity: "1",
                    transform:
                      "translate3d(222px, 276px, 0px) scale3d(1, 1, 1)",
                    transition:
                      "transform 450ms ease-out 0s, opacity 450ms ease-out 0s",
                  }}
                >
                  <div class="portfolio-item-img">
                    <img
                      src="img/portfolio/5.jpg"
                      alt="Mockup Design 1"
                      title=""
                    />
                    <a
                      class="lightbox"
                      title="Mockup Design 1"
                      href="img/portfolio/full/5.jpg"
                    ></a>
                  </div>

                  <i class="far fa-image"></i>
                  <h4 class="name">Mockup Design 1</h4>
                  <span class="category">Mockups</span>
                </figure>

                <figure
                  class="item lbvideo shuffle-item filtered"
                  data-groups='["category_all", "category_youtube-videos"]'
                  style={{
                    position: "absolute",
                    top: "0px",
                    left: "0px",
                    visibility: "visible",
                    opacity: "1",
                    transform:
                      "translate3d(443px, 276px, 0px) scale3d(1, 1, 1)",
                    transition:
                      "transform 450ms ease-out 0s, opacity 450ms ease-out 0s",
                  }}
                >
                  <div class="portfolio-item-img">
                    <img
                      src="img/portfolio/6.jpg"
                      alt="YouTube Video 1"
                      title=""
                    />
                    <a
                      href="https://www.youtube.com/embed/bg0gv2YpIok"
                      class="lightbox mfp-iframe"
                      title="YouTube Video 1"
                    ></a>
                  </div>

                  <i class="fas fa-video"></i>
                  <h4 class="name">YouTube Video 1</h4>
                  <span class="category">YouTube Videos</span>
                </figure>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Portfolio;