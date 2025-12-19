import { fadeInHero } from './fadeInHero.js';
import { fadeInAbout } from './fadeInAbout.js';
import { fadeInHowItWorks } from './fadeInHowItWorks.js';
import { scrollSmooth } from './scrollSmooth.js';
import { fadeInEducation } from './fadeInEducation.js';
import { fadeInCeo } from './fadeInCeo.js';

document.addEventListener("DOMContentLoaded", function() {
    fadeInHero();
    fadeInAbout();
    fadeInHowItWorks();
    scrollSmooth();
    fadeInEducation();
    fadeInCeo();
});