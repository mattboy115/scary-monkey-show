import banner from "../images/index/site_banner.png";

export default function Header() {
    return (
        <>
            <img className="site_banner" src={banner} alt="site banner"/>
            <nav className='navbar navbar-inverse'>
                <div className='container'>
                    <div className='navbar-header'>
                        <button type='button' className='navbar-toggle' data-toggle='collapse' data-target='#navbar-collapse'>
                            <span className='icon-bar'></span>
                            <span className='icon-bar'></span>
                            <span className='icon-bar'></span>
                            <span className='icon-bar'></span>
                        </button>
                    </div>
                    {/* <!--End Navbar Header--> */}
                    <div className=' collapse navbar-collapse' id='navbar-collapse'>
                        <ul className='nav navbar-nav'>
                            <li><a href="index.html">Home</a></li>
                            <li><a href="show_info.html">Show Info</a>
                                <div className="nav-content">
                                    <div className="nav-sub">
                                        <ul>
                                            <li><a href="show_info/history.html">History</a></li>
                                            <li><a href="show_info/episode_guide.html">Episode Guide</a></li>
                                            <li><a href="show_info/cast_and_crew.html">Cast and Crew</a></li>
                                            <li><a href="show_info/canceled_episodes.html">Canceled Episodes</a></li>
                                            <li><a href="show_info/easter_eggs.html">Easter Eggs/Cameos</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </li>
                            <li><a href="lore.html">Lore</a>
                                <div className="nav-content">
                                    <div className="nav-sub">
                                        <ul>
                                            <li><a href="lore/alien_guide.html">Alien Guide</a></li>
                                            <li><a href="lore/earth_locations.html">Earth Locations</a></li>
                                            <li><a href="lore/character_bios.html">Character Bios</a></li>
                                            <li><a href="lore/planet_guide.html">Planet Guide</a></li>
                                            <li><a href="lore/irken_guide.html">Irken Guide</a></li>
                                            <li><a href="lore/spaceships.html">Ships/Vehicles</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </li>
                            <li><a href="resources.html">Zim Resources</a>
                                <div className="nav-content">
                                    <div className="nav-sub">
                                        <ul>
                                            <li><a href="resources/other_fan_sites.html">Other Fan Sites</a></li>
                                            <li><a href="resources/forums.html">Forums</a></li>
                                            <li><a href="resources/social_media.html">Social Media</a></li>
                                            <li><a href="resources/other_resources.html">Other</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </li>
                            <li><a href="faq.html">FAQ</a></li>
                            <li><a href="contact.html">Contact</a></li>
                        </ul>
                    </div>
                </div>
                {/* <!--End Container--> */}
            </nav>
        </>
    )
}