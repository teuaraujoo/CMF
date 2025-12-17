import { fadeInHero } from './fadeInHero.js';
import { fadeInAbout } from './fadeInAbout.js';
import { fadeInHowItWorks } from './fadeInHowItWorks.js';
import { scrollSmooth } from './scrollSmooth.js';

document.addEventListener("DOMContentLoaded", function() {
    fadeInHero();
    fadeInAbout();
    fadeInHowItWorks();
    scrollSmooth();
});