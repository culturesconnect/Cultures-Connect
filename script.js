/* Cultures Connect: shared script for every page.
   To change the fortnight, scroll to the FORTNIGHT block below.
   It now lives here instead of index.html, so you edit it in one place. */

/* Flag data URIs (square SVGs, lipis/flag-icons, public domain). Bundled so the site has no external image dependency, which matters on locked-down school networks. */
const FLAGS = {
  fr: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGlkPSJmbGFnLWljb25zLWZyIiB2aWV3Qm94PSIwIDAgNTEyIDUxMiI+CiAgPHBhdGggZmlsbD0iI2ZmZiIgZD0iTTAgMGg1MTJ2NTEySDB6Ii8+CiAgPHBhdGggZmlsbD0iIzAwMDA5MSIgZD0iTTAgMGgxNzAuN3Y1MTJIMHoiLz4KICA8cGF0aCBmaWxsPSIjZTEwMDBmIiBkPSJNMzQxLjMgMEg1MTJ2NTEySDM0MS4zeiIvPgo8L3N2Zz4K",
  cn: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiBpZD0iZmxhZy1pY29ucy1jbiIgdmlld0JveD0iMCAwIDUxMiA1MTIiPgogIDxkZWZzPgogICAgPHBhdGggaWQ9ImNuLWEiIGZpbGw9IiNmZjAiIGQ9Ik0xLS4zLS43LjggMC0xIC42LjgtMS0uM3oiLz4KICA8L2RlZnM+CiAgPHBhdGggZmlsbD0iI2VlMWMyNSIgZD0iTTAgMGg1MTJ2NTEySDB6Ii8+CiAgPHVzZSB4bGluazpocmVmPSIjY24tYSIgd2lkdGg9IjMwIiBoZWlnaHQ9IjIwIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxMjggMTI4KXNjYWxlKDc2LjgpIi8+CiAgPHVzZSB4bGluazpocmVmPSIjY24tYSIgd2lkdGg9IjMwIiBoZWlnaHQ9IjIwIiB0cmFuc2Zvcm09InJvdGF0ZSgtMTIxIDE0Mi42IC00NylzY2FsZSgyNS41ODI3KSIvPgogIDx1c2UgeGxpbms6aHJlZj0iI2NuLWEiIHdpZHRoPSIzMCIgaGVpZ2h0PSIyMCIgdHJhbnNmb3JtPSJyb3RhdGUoLTk4LjEgMTk4IC04MilzY2FsZSgyNS42KSIvPgogIDx1c2UgeGxpbms6aHJlZj0iI2NuLWEiIHdpZHRoPSIzMCIgaGVpZ2h0PSIyMCIgdHJhbnNmb3JtPSJyb3RhdGUoLTc0IDI3Mi40IC0xMTQpc2NhbGUoMjUuNjEzNykiLz4KICA8dXNlIHhsaW5rOmhyZWY9IiNjbi1hIiB3aWR0aD0iMzAiIGhlaWdodD0iMjAiIHRyYW5zZm9ybT0ibWF0cml4KDE2IC0xOS45NjggMTkuOTY4IDE2IDI1NiAyMzAuNCkiLz4KPC9zdmc+Cg==",
  jp: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGlkPSJmbGFnLWljb25zLWpwIiB2aWV3Qm94PSIwIDAgNTEyIDUxMiI+CiAgPGRlZnM+CiAgICA8Y2xpcFBhdGggaWQ9ImpwLWEiPgogICAgICA8cGF0aCBmaWxsLW9wYWNpdHk9Ii43IiBkPSJNMTc3LjIgMGg3MDguNnY3MDguN0gxNzcuMnoiLz4KICAgIDwvY2xpcFBhdGg+CiAgPC9kZWZzPgogIDxnIGZpbGwtcnVsZT0iZXZlbm9kZCIgc3Ryb2tlLXdpZHRoPSIxcHQiIGNsaXAtcGF0aD0idXJsKCNqcC1hKSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTEyOClzY2FsZSguNzIyNDkpIj4KICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0wIDBoMTA2M3Y3MDguN0gweiIvPgogICAgPGNpcmNsZSBjeD0iNTIzLjEiIGN5PSIzNDQuMSIgcj0iMTk0LjkiIGZpbGw9IiNiYzAwMmQiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC01OS43IC0zNC41KXNjYWxlKDEuMTMwMikiLz4KICA8L2c+Cjwvc3ZnPgo=",
  kr: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiBpZD0iZmxhZy1pY29ucy1rciIgdmlld0JveD0iMCAwIDUxMiA1MTIiPgogIDxwYXRoIGZpbGw9IiNmZmYiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTAgMGg1MTJ2NTEySDBaIi8+CiAgPGcgZmlsbC1ydWxlPSJldmVub2RkIiB0cmFuc2Zvcm09InJvdGF0ZSgtNTYuMyAzNjcuMiAtMTExLjIpc2NhbGUoOS4zNzUpIj4KICAgIDxnIGlkPSJrci1iIj4KICAgICAgPHBhdGggaWQ9ImtyLWEiIGZpbGw9IiMwMDAwMDEiIGQ9Ik0tNi0yNkg2djJILTZabTAgM0g2djJILTZabTAgM0g2djJILTZaIi8+CiAgICAgIDx1c2UgeGxpbms6aHJlZj0iI2tyLWEiIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIHk9IjQ0Ii8+CiAgICA8L2c+CiAgICA8cGF0aCBzdHJva2U9IiNmZmYiIGQ9Ik0wIDE3djEwIi8+CiAgICA8cGF0aCBmaWxsPSIjY2QyZTNhIiBkPSJNMC0xMmExMiAxMiAwIDAgMSAwIDI0WiIvPgogICAgPHBhdGggZmlsbD0iIzAwNDdhMCIgZD0iTTAtMTJhMTIgMTIgMCAwIDAgMCAyNEE2IDYgMCAwIDAgMCAwWiIvPgogICAgPGNpcmNsZSBjeT0iLTYiIHI9IjYiIGZpbGw9IiNjZDJlM2EiLz4KICA8L2c+CiAgPGcgZmlsbC1ydWxlPSJldmVub2RkIiB0cmFuc2Zvcm09InJvdGF0ZSgtMTIzLjcgMTk2LjUgNTkuNSlzY2FsZSg5LjM3NSkiPgogICAgPHVzZSB4bGluazpocmVmPSIja3ItYiIgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIvPgogICAgPHBhdGggc3Ryb2tlPSIjZmZmIiBkPSJNMC0yMy41djNNMCAxN3YzLjVtMCAzdjMiLz4KICA8L2c+Cjwvc3ZnPgo=",
  in: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiBpZD0iZmxhZy1pY29ucy1pbiIgdmlld0JveD0iMCAwIDUxMiA1MTIiPgogIDxwYXRoIGZpbGw9IiNmOTMiIGQ9Ik0wIDBoNTEydjE3MC43SDB6Ii8+CiAgPHBhdGggZmlsbD0iI2ZmZiIgZD0iTTAgMTcwLjdoNTEydjE3MC42SDB6Ii8+CiAgPHBhdGggZmlsbD0iIzEyODgwNyIgZD0iTTAgMzQxLjNoNTEyVjUxMkgweiIvPgogIDxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDI1NiAyNTYpc2NhbGUoMy40MTMzMykiPgogICAgPGNpcmNsZSByPSIyMCIgZmlsbD0iIzAwOCIvPgogICAgPGNpcmNsZSByPSIxNy41IiBmaWxsPSIjZmZmIi8+CiAgICA8Y2lyY2xlIHI9IjMuNSIgZmlsbD0iIzAwOCIvPgogICAgPGcgaWQ9ImluLWQiPgogICAgICA8ZyBpZD0iaW4tYyI+CiAgICAgICAgPGcgaWQ9ImluLWIiPgogICAgICAgICAgPGcgaWQ9ImluLWEiIGZpbGw9IiMwMDgiPgogICAgICAgICAgICA8Y2lyY2xlIHI9Ii45IiB0cmFuc2Zvcm09InJvdGF0ZSg3LjUgLTguOCAxMzMuNSkiLz4KICAgICAgICAgICAgPHBhdGggZD0iTTAgMTcuNS42IDcgMCAybC0uNiA1eiIvPgogICAgICAgICAgPC9nPgogICAgICAgICAgPHVzZSB4bGluazpocmVmPSIjaW4tYSIgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgdHJhbnNmb3JtPSJyb3RhdGUoMTUpIi8+CiAgICAgICAgPC9nPgogICAgICAgIDx1c2UgeGxpbms6aHJlZj0iI2luLWIiIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIHRyYW5zZm9ybT0icm90YXRlKDMwKSIvPgogICAgICA8L2c+CiAgICAgIDx1c2UgeGxpbms6aHJlZj0iI2luLWMiIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPC9nPgogICAgPHVzZSB4bGluazpocmVmPSIjaW4tZCIgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgdHJhbnNmb3JtPSJyb3RhdGUoMTIwKSIvPgogICAgPHVzZSB4bGluazpocmVmPSIjaW4tZCIgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgdHJhbnNmb3JtPSJyb3RhdGUoLTEyMCkiLz4KICA8L2c+Cjwvc3ZnPgo=",
  mn: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9IiNmZmQ5MDAiIGlkPSJmbGFnLWljb25zLW1uIiB2aWV3Qm94PSIwIDAgNTEyIDUxMiI+CiAgPHBhdGggZmlsbD0iI2RhMjAzMiIgZD0iTTAgMGg1MTJ2NTEySDBaIi8+CiAgPHBhdGggZmlsbD0iIzAwNjZiMyIgZD0iTTE3MC43IDBoMTcwLjZ2NTEySDE3MC43WiIvPgogIDxjaXJjbGUgY3g9Ijg1LjMiIGN5PSIxOTYuNiIgcj0iMzUiLz4KICA8Y2lyY2xlIGN4PSI4NS4zIiBjeT0iMTgwLjciIHI9IjM4LjIiIGZpbGw9IiNkYTIwMzIiLz4KICA8Y2lyY2xlIGN4PSI4NS4zIiBjeT0iMTg3IiByPSIyNS41Ii8+CiAgPHBhdGggZD0iTTg4IDEwNC4zYTggOCAwIDAgMC00LjYgNi42Yy0uMiAyLjIuOCA0LjYuOSA2LjcgMCAzLjctMy44IDQuOS0zLjggMTAuMSAwIDEuOCAxLjcgMy44IDEuNyA4LjQtLjMgMi41LTEuNyAzLTMuMiAzLjJhMyAzIDAgMCAxLTMuMi0zLjIgMyAzIDAgMCAxIC45LTIuMmwuMy0uM2MuNy0uNyAxLjctMSAxLjctMyAwLTEtLjYtMS44LTEuMi0zLjZhNyA3IDAgMCAxIDEuMi02LjJjLTIuMi44LTMuNiAzLTQuMyA0LjktLjcgMi4zLS4xIDMuNy0xLjEgNS43LS42IDEuMi0xLjQgMS43LTIgMi44LS45IDEuMi0xLjggMy44LTEuOCA1LjFhMTYgMTYgMCAwIDAgMzEuOCAwYzAtMS4zLTEtNC0xLjgtNS4xLS43LTEtMS41LTEuNi0yLTIuOC0xLTItLjQtMy40LTEuMi01LjctLjctMi0yLTQtNC4zLTVhNyA3IDAgMCAxIDEuMyA2LjNjLS43IDEuOC0xLjMgMi43LTEuMyAzLjcgMCAxLjkgMSAyLjIgMS43IDNsLjMuMmEzIDMgMCAwIDEgMSAyLjIgMyAzIDAgMCAxLTMuMyAzLjJxLTIuNy0uMS0zLjItMy4yYzAtNi4xIDIuNy02LjUgMi43LTExIDAtNi41LTUuOC05LjYtNS44LTE0LjMgMC0xLjYuMy00LjMgMi42LTYuNU0xNS4zIDIzNy45aDMxLjl2MTUyLjhIMTUuM1ptMTA4LjIgMGgzMS44djE1Mi44aC0zMS44em0tNzAgMGg2My43TDg1LjMgMjU3Wm0wIDI1LjVoNjMuN1YyNzZINTMuNVptMCA4OWg2My43djEyLjhINTMuNVptMCAxOS4yaDYzLjdsLTMxLjkgMTlaIi8+CiAgPGNpcmNsZSBjeD0iODUuMyIgY3k9IjMxNC4zIiByPSIzMS44Ii8+CiAgPGcgZmlsbD0iI2RhMjAzMiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTQyIDY2LjEpc2NhbGUoLjYzNjM2KSI+CiAgICA8Y2lyY2xlIGN4PSIyMDAiIGN5PSIzNjMuNSIgcj0iMTAiLz4KICAgIDxjaXJjbGUgY3g9IjIwMCIgY3k9IjQxNi41IiByPSIxMCIvPgogICAgPHBhdGggZD0iTTIwMCAzMzRhMjkuNSAyOS41IDAgMCAxIDAgNTkgMjMuNSAyMy41IDAgMCAwIDAgNDd2NmEyOS41IDI5LjUgMCAwIDEgMC01OSAyMy41IDIzLjUgMCAwIDAgMC00N3oiLz4KICA8L2c+Cjwvc3ZnPgo=",
};
/* ===== EDIT EACH FORTNIGHT HERE =====
   value + idiom drive the hero and the faded backdrop word.
   Each card: lang, flag (country code), phrase (the big English line),
   gloss (the saying in its own script), optional roman (romanisation),
   and optional objPos to keep a hoist-side symbol in frame when the
   square flag is cropped into the card.
   The 7th invitation card is added automatically below, so you never edit it. */
const TERM = [
  {
    value:"Collaboration", weeks:"1 to 2",
    idiom:"\u201CMany hands make light work\u201D",
    cards:[
      { lang:"French",   flag:"fr", phrase:"\u201CUnion makes strength\u201D", gloss:"L'union fait la force" },
      { lang:"Chinese",  flag:"cn", phrase:"\u201CWhen everyone gathers firewood, the flames rise high\u201D", gloss:"\u4F17\u4EBA\u62FE\u67F4\u706B\u7130\u9AD8" },
      { lang:"Japanese", flag:"jp", phrase:"\u201CWhen three people gather, the wisdom of a sage appears\u201D", gloss:"\u4E09\u4EBA\u5BC4\u308C\u3070\u6587\u6B8A\u306E\u77E5\u6075" },
      { lang:"Korean",   flag:"kr", phrase:"\u201CEven a sheet of paper is lighter when lifted together\u201D", gloss:"\uBC31\uC9C0\uC7A5\uB3C4 \uB9DE\uB4E4\uBA74 \uB0AB\uB2E4" },
      { lang:"Hindi",    flag:"in", phrase:"\u201COne and one make eleven\u201D", gloss:"\u090F\u0915 \u0914\u0930 \u090F\u0915 \u0917\u094D\u092F\u093E\u0930\u0939" },
      { lang:"Mongolian",flag:"mn", phrase:"\u201COne branch can't make a fire, one person can't make a family\u201D",
        gloss:"\u0413\u0430\u043D\u0446 \u043C\u043E\u0434 \u0433\u0430\u043B \u0431\u043E\u043B\u043E\u0445\u0433\u04AF\u0439, \u0433\u0430\u043D\u0446 \u0445\u04AF\u043D \u0430\u0439\u043B \u0431\u043E\u043B\u043E\u0445\u0433\u04AF\u0439",
        roman:"Gants mod gal bolokhgui, gants khun ail bolokhgui", objPos:"left center" }
    ]
  },
  {
    value:"Critical thinking", weeks:"3 to 4",
    idiom:"\u201CThink it through before you act\u201D",
    cards:[
      { lang:"French",   flag:"fr", phrase:"\u201CCaution is the mother of safety\u201D", gloss:"La prudence est m\u00E8re de s\u00FBret\u00E9" },
      { lang:"Chinese",  flag:"cn", phrase:"\u201CThink three times, then act\u201D", gloss:"\u4E09\u601D\u800C\u540E\u884C", roman:"s\u0101n s\u012B \u00E9r h\u00F2u x\u00EDng" },
      { lang:"Japanese", flag:"jp", phrase:"\u201CTap the stone bridge before you cross it\u201D", gloss:"\u77F3\u6A4B\u3092\u53E9\u3044\u3066\u6E21\u308B", roman:"ishibashi o tataite wataru" },
      { lang:"Korean",   flag:"kr", phrase:"\u201CEven a stone bridge, tap it before you cross\u201D", gloss:"\uB3CC\uB2E4\uB9AC\uB3C4 \uB450\uB4E4\uACA8 \uBCF4\uACE0 \uAC74\uB108\uB77C", roman:"doldarido dudeulgyeo bogo geonneora" },
      { lang:"Hindi",    flag:"in", phrase:"\u201CAct without thinking and you regret it later\u201D", gloss:"\u092C\u093F\u0928\u093E \u0935\u093F\u091A\u093E\u0930\u0947 \u091C\u094B \u0915\u0930\u0947 \u0938\u094B \u092A\u093E\u091B\u0947 \u092A\u091B\u0924\u093E\u090F", roman:"bina vichaare jo kare so paachhe pachhtaae" },
      { lang:"Mongolian",flag:"mn", phrase:"\u201CMeasure seven times, cut once\u201D",
        gloss:"\u0414\u043E\u043B\u043E\u043E \u0445\u044D\u043C\u0436\u0438\u0436, \u043D\u044D\u0433 \u043E\u0433\u0442\u043E\u043B",
        roman:"Doloo khemjij, neg ogtol", objPos:"left center" }
    ]
  },
  { value:"Creativity",    weeks:"5 to 6",  idiom:null, cards:null },
  { value:"Communication", weeks:"7 to 8",  idiom:null, cards:null },
  { value:"Citizenship",   weeks:"9 to 10", idiom:null, cards:null }
];
const CURRENT = 1;
/* nav scroll bg */
var nav = document.getElementById("nav");
if(nav){ addEventListener("scroll", function(){ nav.classList.toggle("scrolled", scrollY>20); }, {passive:true}); }
/* The contribute form posts straight to Formspree, set in contribute.html.
   Nothing to intercept here, so the browser handles the submit itself. */
/* ===== CAROUSEL + FIVE C's SWITCHER (home) ===== */
(function carousel(){
  var track = document.getElementById("track");
  if(!track) return;

  var ADD_CARD = { add:true, lang:"Your culture", face:"Missing yours?", faceSub:"tap to add",
                   phrase:"We haven't heard yours yet.", gloss:"Tell us the saying your family uses." };

  var eyebrowEl = document.getElementById("eyebrow");
  var idiomEl   = document.getElementById("idiom");
  var wordEl    = document.getElementById("value-name");
  var dotsWrap  = document.getElementById("dots");
  var info   = document.querySelector(".member-info");
  var miLang = document.getElementById("mi-lang");
  var miSay  = document.getElementById("mi-saying");
  var miMean = document.getElementById("mi-meaning");
  var miRom  = document.getElementById("mi-roman");
  var slide  = document.getElementById("cSlide");

  var viewIdx = CURRENT;
  var ITEMS = [], LANGS = 0;
  var cur = 0, anim = false, seen = {}, seenCount = 0, unlocked = false;

  function count(){ return unlocked ? ITEMS.length : LANGS; }

  function paint(){
    var N = count();
    cur = (cur % N + N) % N;
    track.querySelectorAll(".card").forEach(function(card,i){
      card.classList.remove("center","left-1","left-2","right-1","right-2","hidden");
      if(i>=N){ card.classList.add("hidden"); return; }
      var off=(i-cur+N)%N;
      if(off===0) card.classList.add("center");
      else if(off===1) card.classList.add("right-1");
      else if(off===2) card.classList.add("right-2");
      else if(off===N-1) card.classList.add("left-1");
      else if(off===N-2) card.classList.add("left-2");
      else card.classList.add("hidden");
    });
    dotsWrap.querySelectorAll(".cdot").forEach(function(d,i){
      d.classList.toggle("active", i===cur);
      d.classList.toggle("cdot-locked", i>=N);
    });
  }

  function fillInfo(){
    var c=ITEMS[cur];
    miLang.textContent=c.lang; miSay.textContent=c.phrase; miMean.textContent=c.gloss;
    if(c.roman){ miRom.textContent=c.roman; miRom.style.display=""; }
    else { miRom.textContent=""; miRom.style.display="none"; }
  }

  function update(n){
    if(anim) return; anim=true;
    cur=n; paint();
    info.style.opacity="0";
    setTimeout(function(){ fillInfo(); info.style.opacity="1"; },300);
    if(!unlocked && !ITEMS[cur].add && !seen[cur]){
      seen[cur]=true; seenCount++;
      if(seenCount===LANGS) unlocked=true;
    }
    setTimeout(function(){ anim=false; },800);
  }

  var softScroll = matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth";
  function goToInvite(){ var b=document.querySelector(".band"); if(b) b.scrollIntoView({behavior:softScroll, block:"center"}); }

  function activate(i){
    if(ITEMS[i].add){ if(i!==cur){ update(i); setTimeout(goToInvite,420); } else goToInvite(); }
    else update(i);
  }

  function load(fnIndex){
    var fn = TERM[fnIndex];
    if(!fn.cards) return;
    viewIdx = fnIndex;
    ITEMS = fn.cards.concat([ADD_CARD]);
    LANGS = fn.cards.length;
    cur=0; seen={}; seenCount=0; unlocked=false;

    track.innerHTML=""; dotsWrap.innerHTML="";
    ITEMS.forEach(function(c,i){
      var card=document.createElement("div");
      card.className="card"+(c.add?" card-add":"");
      card.dataset.index=i; card.tabIndex=0; card.setAttribute("role","button");
      if(c.add){
        card.setAttribute("aria-label","Add a saying from your culture");
        card.innerHTML='<span class="add-plus">+</span><span class="add-title">'+c.face+'</span><span class="add-sub">'+c.faceSub+'</span>';
      } else {
        card.setAttribute("aria-label", c.lang+" flag, show its saying");
        var img=document.createElement("img"); img.src=FLAGS[c.flag]||""; img.alt=c.lang+" flag";
        if(c.objPos) img.style.objectPosition=c.objPos;
        card.appendChild(img);
      }
      card.addEventListener("click", function(){ activate(i); });
      card.addEventListener("keydown", function(e){ if(e.key==="Enter"||e.key===" "){ e.preventDefault(); activate(i); } });
      track.appendChild(card);

      var d=document.createElement("div");
      d.className="cdot"+(c.add?" cdot-add":"")+(i===0?" active":"");
      d.dataset.index=i; d.tabIndex=0; d.setAttribute("role","button");
      d.setAttribute("aria-label", c.add?"Add your own saying":"Show "+c.lang);
      d.addEventListener("click", function(){ activate(i); });
      d.addEventListener("keydown", function(e){ if(e.key==="Enter"||e.key===" "){ e.preventDefault(); activate(i); } });
      dotsWrap.appendChild(d);
    });

    paint(); fillInfo(); info.style.opacity="1";

    if(wordEl)  wordEl.textContent = fn.value;
    if(idiomEl){
      idiomEl.innerHTML = fn.idiom.split(" ").map(function(w,i,a){
        return '<span class="w"><span>'+w+'</span></span>'+(i<a.length-1?"&nbsp;":""); }).join("");
      idiomEl.querySelectorAll(".w>span").forEach(function(s){ s.style.transform="none"; });
    }
    if(eyebrowEl) eyebrowEl.textContent = (fnIndex===CURRENT)
      ? "This fortnight's C \u00B7 "+fn.value
      : "Weeks "+fn.weeks+" \u00B7 "+fn.value;

    markTabs();
  }

  var tabsWrap = document.getElementById("cTabs");
  var tabs = [];
  function markTabs(){
    tabs.forEach(function(t,i){ t.classList.toggle("is-viewing", i===viewIdx && viewIdx!==CURRENT); });
  }
  function buildTabs(){
    if(!tabsWrap) return;
    TERM.forEach(function(fn,i){
      var b=document.createElement("button");
      b.type="button"; b.className="c-tab";
      var locked = i>CURRENT;
      if(i===CURRENT) b.classList.add("is-now");
      else if(locked) b.classList.add("is-lock");
      else b.classList.add("is-open");
      b.innerHTML = (locked?'<i class="ti ti-lock" aria-hidden="true"></i>':'')+fn.value;
      if(locked){
        b.setAttribute("aria-label", fn.value+", locked, runs in weeks "+fn.weeks);
        b.addEventListener("click", function(){ showTip(b, "Not out yet. "+fn.value+" runs in Weeks "+fn.weeks+"."); });
      } else {
        b.addEventListener("click", function(){ switchTo(i); });
      }
      tabsWrap.appendChild(b); tabs.push(b);
    });
    markTabs();
  }

  var tip=document.getElementById("cTip"), tipT=null;
  function placeTip(el){ var r=el.getBoundingClientRect();
    tip.style.left=(r.left+r.width/2)+"px"; tip.style.top=(r.top-10)+"px"; tip.style.transform="translate(-50%,-100%)"; }
  function showTip(el, text){ if(!tip) return; tip.textContent=text; placeTip(el);
    tip.classList.add("show"); clearTimeout(tipT); tipT=setTimeout(hideTip,2800); }
  function hideTip(){ if(tip) tip.classList.remove("show"); }
  addEventListener("scroll", hideTip, {passive:true});
  addEventListener("resize", hideTip);

  function switchTo(fnIndex){
    if(fnIndex===viewIdx || anim || !TERM[fnIndex].cards) return;
    hideTip();
    var forward = fnIndex>viewIdx;
    anim=true;
    if(window.gsap && slide){
      if(wordEl) gsap.to(wordEl,{ opacity:0, duration:.24, ease:"power1.in" });
      gsap.to(slide,{ x: forward?-46:46, opacity:0, duration:.26, ease:"power2.in", onComplete:function(){
        load(fnIndex);
        if(wordEl) gsap.fromTo(wordEl,{ opacity:0 },{ opacity:1, duration:.5, ease:"power2.out" });
        gsap.fromTo(slide,{ x: forward?46:-46, opacity:0 },{ x:0, opacity:1, duration:.34, ease:"power3.out",
          onComplete:function(){ gsap.set(slide,{ clearProps:"transform" }); anim=false; } });
      }});
    } else {
      load(fnIndex); anim=false;
    }
  }

  document.querySelector(".nav-arrow.left").addEventListener("click", function(){ update(cur-1); });
  document.querySelector(".nav-arrow.right").addEventListener("click", function(){ update(cur+1); });
  document.addEventListener("keydown", function(e){ if(e.key==="ArrowLeft") update(cur-1); else if(e.key==="ArrowRight") update(cur+1); });
  var sec=document.querySelector(".carousel-section"), sx=0, sy=0;
  sec.addEventListener("touchstart", function(e){ sx=e.changedTouches[0].screenX; sy=e.changedTouches[0].screenY; }, {passive:true});
  sec.addEventListener("touchend", function(e){
    var dx=sx-e.changedTouches[0].screenX, dy=sy-e.changedTouches[0].screenY;
    if(Math.abs(dx)>50 && Math.abs(dx)>Math.abs(dy)){ dx>0?update(cur+1):update(cur-1); }
  }, {passive:true});

  buildTabs();
  load(CURRENT);
})();
/* ===== MOTION (hero text + reveals) ===== */
var reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
if(window.gsap && !reduce){
  gsap.registerPlugin(ScrollTrigger);
  document.body.classList.add("is-animating");
  gsap.set("#nav",{y:-20,opacity:0});
  gsap.to("#nav",{y:0,opacity:1,duration:.7,ease:"power3.out",delay:.05});
  gsap.utils.toArray(".reveal").forEach(function(el){
    gsap.from(el,{ y:22,opacity:0,duration:.8,ease:"power3.out", scrollTrigger:{ trigger:el, start:"top 88%" } });
  });
  if(document.getElementById("track")){
    gsap.set(".eyebrow",{y:12,opacity:0});
    gsap.set(".idiom .w>span",{y:"110%"});
    gsap.set(".sub",{y:14,opacity:0});
    gsap.set(".carousel-container",{y:30,opacity:0});
    gsap.set(".member-info",{opacity:0});
    gsap.set(".dots",{opacity:0});
    gsap.set(".verify",{y:12,opacity:0});
    var tl=gsap.timeline({defaults:{ease:"power3.out"}});
    tl.to(".eyebrow",{y:0,opacity:1,duration:.6},.15)
      .to(".idiom .w>span",{y:"0%",duration:.85,stagger:.06},.28)
      .to(".sub",{y:0,opacity:1,duration:.7},.6)
      .to(".carousel-container",{y:0,opacity:1,duration:.9},.75)
      .to(".member-info",{opacity:1,duration:.6},1.2)
      .to(".dots",{opacity:1,duration:.5},1.3)
      .to(".verify",{y:0,opacity:1,duration:.6},1.4);
  }
  var band=document.querySelector(".band-inner");
  if(band){ gsap.from(band,{ y:60,scale:.98,opacity:0,duration:1.05,ease:"power3.out", scrollTrigger:{ trigger:".band", start:"top 84%" } }); }
  gsap.from(".foot p",{ y:16,opacity:0,duration:.7,stagger:.08,ease:"power3.out", scrollTrigger:{ trigger:".foot", start:"top 94%" } });
}

/* ===== INTRO POPUP (home page only) ===== */
(function(){
  var modal = document.getElementById("introModal");
  if(!modal) return;

  var SEEN_KEY = "cc_intro_seen";
  var closeBtn = document.getElementById("introClose");
  var enterBtn = document.getElementById("introEnter");
  var replay   = document.getElementById("introReplay");

  function open(){
    modal.hidden = false;
    requestAnimationFrame(function(){ modal.classList.add("show"); });
    document.body.style.overflow = "hidden";
  }
  function close(remember){
    modal.classList.remove("show");
    document.body.style.overflow = "";
    if(remember){ try { window.localStorage.setItem(SEEN_KEY, "1"); } catch(e) {} }
    setTimeout(function(){ modal.hidden = true; }, 350);
  }

  /* closing the intro always remembers, so it does not auto show again */
  closeBtn.addEventListener("click", function(){ close(true); });
  enterBtn.addEventListener("click", function(){ close(true); });
  modal.addEventListener("click", function(e){ if(e.target === modal){ close(true); } });
  document.addEventListener("keydown", function(e){ if(e.key === "Escape" && !modal.hidden){ close(true); } });

  /* the footer link reopens it any time, on purpose */
  if(replay){
    replay.addEventListener("click", function(e){ e.preventDefault(); open(); });
  }

  /* auto show only on the first ever visit */
  var seen;
  try { seen = window.localStorage.getItem(SEEN_KEY); } catch(e) { seen = null; }
  if(!seen){ open(); }
})();
