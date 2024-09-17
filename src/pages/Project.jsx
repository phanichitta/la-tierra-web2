import React, { useState } from 'react';

function Project() {
  const [activeFilter, setActiveFilter] = useState('*');

  // Handler to update the active filter state
  const handleFilterClick = (filter) => {
    setActiveFilter(filter);
  };

  const projects = [
    { id: 1, category: 'cat-1', image: 'images/Webimgs/51.jpg', title: 'Life style building', description: "We are so busy watching out for what's just ahead of us that we don't take the time to enjoy where we are." },
    { id: 2, category: 'cat-2', image: 'images/Webimgs/52.jpg', title: 'Central City Building', description: "We are so busy watching out for what's just ahead of us that we don't take the time to enjoy where we are." },
    { id: 3, category: 'cat-3', image: 'images/Webimgs/53.jpg', title: 'Nathan Brooke House', description: "We are so busy watching out for what's just ahead of us that we don't take the time to enjoy where we are." },
    { id: 4, category: 'cat-4', image: 'images/Webimgs/54.jpg', title: 'Metropolitan Museum', description: "We are so busy watching out for what's just ahead of us that we don't take the time to enjoy where we are." },
    { id: 5, category: 'cat-5', image: 'images/Webimgs/55.jpg', title: 'Art Family Residence', description: "We are so busy watching out for what's just ahead of us that we don't take the time to enjoy where we are." },
    { id: 6, category: 'cat-4', image: 'images/Webimgs/57.jpg', title: 'Office Partition Walls', description: "We are so busy watching out for what's just ahead of us that we don't take the time to enjoy where we are." },
    { id: 7, category: 'cat-3', image: 'images/projects/portrait/pic7.jpg', title: 'Glass Office Screen', description: "We are so busy watching out for what's just ahead of us that we don't take the time to enjoy where we are." },
    { id: 8, category: 'cat-2', image: 'images/projects/portrait/pic8.jpg', title: 'State Hermitage Museum', description: "We are so busy watching out for what's just ahead of us that we don't take the time to enjoy where we are." },
    { id: 9, category: 'cat-1', image: 'images/projects/portrait/pic9.jpg', title: 'Central Florida University', description: "We are so busy watching out for what's just ahead of us that we don't take the time to enjoy where we are." },
  ];

  // Inline styles
  const linkStyle = {
    position: 'relative',
    transition: 'color 0.3s ease, transform 0.3s ease',
  };

  const activeLinkStyle = {
    ...linkStyle,
    color: '#ff6a00',
    fontWeight: 'bold',
  };

  const hoverStyle = {
    transform: 'scale(1.1)',
  };

  const projectHoverStyle = {
    transform: 'scale(1.05)',
    transition: 'transform 0.3s ease',
  };

  return (
    <div>
      {/* CONTENT START */}
      <div className="page-content">
        {/* INNER PAGE BANNER */}
        <div className="mt-bnr-inr overlay-wraper bg-parallax bg-top-center" data-stellar-background-ratio="0.5" style={{ backgroundImage: "url('images/Webimgs/41.jpg')" }}>
          <div className="overlay-main bg-black opacity-07"></div>
          <div className="container">
            <div className="mt-bnr-inr-entry">
              <div className="banner-title-outer">
                <div className="banner-title-name">
                  <h2 className="m-b0">Always dedicated and devoted</h2>
                </div>
              </div>
              <div>
                <ul className="mt-breadcrumb breadcrumb-style-2">
                  <li><a href="/">Home</a></li>
                  <li>Project Grid</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        {/* INNER PAGE BANNER END */}

        {/* SECTION CONTENT START */}
        <div className="section-full p-tb80 inner-page-padding">
          <div className="container">
            {/* PAGINATION START */}
            <div className="filter-wrap p-b30 text-center">
              <ul className="filter-navigation inline-navigation masonry-filter link-style text-uppercase">
                <li className={activeFilter === '*' ? 'active' : ''} onClick={() => handleFilterClick('*')}>
                  <a 
                    href="javascript:void(0);" 
                    style={activeFilter === '*' ? activeLinkStyle : linkStyle}
                    onMouseOver={(e) => e.target.style.transform = hoverStyle.transform}
                    onMouseOut={(e) => e.target.style.transform = 'scale(1)'}
                  >
                    All
                  </a>
                </li>
                <li className={activeFilter === 'cat-1' ? 'active' : ''} onClick={() => handleFilterClick('cat-1')}>
                  <a 
                    href="javascript:void(0);" 
                    style={activeFilter === 'cat-1' ? activeLinkStyle : linkStyle}
                    onMouseOver={(e) => e.target.style.transform = hoverStyle.transform}
                    onMouseOut={(e) => e.target.style.transform = 'scale(1)'}
                  >
                    Construction
                  </a>
                </li>
                <li className={activeFilter === 'cat-2' ? 'active' : ''} onClick={() => handleFilterClick('cat-2')}>
                  <a 
                    href="javascript:void(0);" 
                    style={activeFilter === 'cat-2' ? activeLinkStyle : linkStyle}
                    onMouseOver={(e) => e.target.style.transform = hoverStyle.transform}
                    onMouseOut={(e) => e.target.style.transform = 'scale(1)'}
                  >
                    Renovation
                  </a>
                </li>
                <li className={activeFilter === 'cat-3' ? 'active' : ''} onClick={() => handleFilterClick('cat-3')}>
                  <a 
                    href="javascript:void(0);" 
                    style={activeFilter === 'cat-3' ? activeLinkStyle : linkStyle}
                    onMouseOver={(e) => e.target.style.transform = hoverStyle.transform}
                    onMouseOut={(e) => e.target.style.transform = 'scale(1)'}
                  >
                    Outdoor
                  </a>
                </li>
                <li className={activeFilter === 'cat-4' ? 'active' : ''} onClick={() => handleFilterClick('cat-4')}>
                  <a 
                    href="javascript:void(0);" 
                    style={activeFilter === 'cat-4' ? activeLinkStyle : linkStyle}
                    onMouseOver={(e) => e.target.style.transform = hoverStyle.transform}
                    onMouseOut={(e) => e.target.style.transform = 'scale(1)'}
                  >
                    Interiors
                  </a>
                </li>
                <li className={activeFilter === 'cat-5' ? 'active' : ''} onClick={() => handleFilterClick('cat-5')}>
                  <a 
                    href="javascript:void(0);" 
                    style={activeFilter === 'cat-5' ? activeLinkStyle : linkStyle}
                    onMouseOver={(e) => e.target.style.transform = hoverStyle.transform}
                    onMouseOut={(e) => e.target.style.transform = 'scale(1)'}
                  >
                    Consulting
                  </a>
                </li>
              </ul>
            </div>
            {/* PAGINATION END */}

            {/* GALLERY CONTENT START */}
            <div className="portfolio-wrap mfp-gallery work-grid row clearfix">
              {projects.map((project) => (
                <div key={project.id} className={`masonry-item ${project.category} col-lg-4 col-md-6 m-b30 ${activeFilter === '*' || activeFilter === project.category ? '' : 'd-none'}`}>
                  <div className="image-effect-two hover-shadow" style={projectHoverStyle} onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.05)'} onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}>
                    <img src={project.image} alt="" />
                    <div className="figcaption">
                      <h4 className="mt-tilte">{project.title}</h4>
                      <p>{project.description}</p>
                      <a href="project-detail.html" className="read-more site-button btn-effect">Read More</a>
                      <a className="mfp-link" href={project.image}>
                        <i className="fa fa-arrows-alt"></i>
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            {/* GALLERY CONTENT END */}

            <div className="m-t50 text-center">
              <a href="project-detail.html" className="site-button btn-effect">Load More</a>
            </div>
          </div>
        </div>
        {/* SECTION CONTENT END */}
      </div>
    </div>
  );
}

export default Project;
