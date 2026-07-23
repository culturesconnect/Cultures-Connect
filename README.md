# Cultures Connect Hakaton Website

## What is in this folder

    index.html         home page, the fortnight's idiom and the flag carousel
    events.html        cultural events calendar, still under construction
    contribute.html    the form where people send in their own sayings
    about.html         what the site is, why it exists, who made it
    style.css          all the styling for every page
    script.js          all the behaviour for every page
    logo-mark.png      the round logo in the top left of every page
    favicon.png        the small icon in the browser tab
    logo-wordmark.png  full logo with the name, for the competition submission

## What changed in this version

**One stylesheet, one script.** Every page used to carry its own copy of the
same 32KB of CSS and JavaScript, four copies in total. They are now in
style.css and script.js, and every page links to them. Each page went from
about 35KB down to 2 to 4KB. More importantly, a change now only has to be
made once instead of four times.

**The logo is local now.** The old one was loading from an outside website,
e360.mn, which is not yours and could disappear or change at any time. The
new mark is in Photos and uses the site's own colours.

**Favicon.** The tab icon is set on all four pages.

**The contribute form works.** It was a placeholder that showed a thank you
message and sent nothing. It now posts to your Formspree form.

## Changing the fortnight

This used to be in index.html. It is now in **script.js**, near the top, under:

    /* ===== EDIT EACH FORTNIGHT HERE ===== */
    const FORTNIGHT = { ... }

Change three things and every page updates itself.

1. `value` is the name of the C, for example "Critical Thinking"
2. `idiom` is the English saying at the top
3. `cards` is the six languages. For each one:
   - `lang` the name under the flag
   - `flag` the country code: fr, cn, jp, kr, in, mn
   - `phrase` the saying in English
   - `gloss` the saying in its own writing
   - `roman` optional, how to say it out loud

The "Missing yours?" card is built into the code and adds itself. Leave it alone.

## Uploading

Every file sits at the top level, with no folders. That is deliberate: GitHub's
web uploader often drops folders, which is what broke the logo the first time.

GitHub: upload all of these files into the top level of the repository.
Netlify: or drag this whole folder onto your site's Deploys page.

The three PNG files must go up with everything else, or the logo will not show.

## Still to do

- The events page is a placeholder.
- Only Collaboration has all six languages filled in. The other four
  fortnights still need theirs.
- Check the 5 C's against the school's own wording before launch. The About
  page lists Collaboration, Critical Thinking, Creativity, Communication and
  Citizenship. If the school counts Critical and Creative Thinking as one and
  includes Character instead, the list on the About page needs to change, and
  so does the two weeks each plan.
