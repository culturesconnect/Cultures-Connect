/* Cultures Connect: shared script for every page.
   To change the fortnight, scroll to the FORTNIGHT block below.
   It now lives here instead of index.html, so you edit it in one place. */

/* Flag data URIs (square SVGs, lipis/flag-icons, public domain). Bundled so the site has no external image dependency, which matters on locked-down school networks. */
const FLAGS = {
  fr: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGlkPSJmbGFnLWljb25zLWZyIiB2aWV3Qm94PSIwIDAgNTEyIDUxMiI+CiAgPHBhdGggZmlsbD0iI2ZmZiIgZD0iTTAgMGg1MTJ2NTEySDB6Ii8+CiAgPHBhdGggZmlsbD0iIzAwMDA5MSIgZD0iTTAgMGgxNzAuN3Y1MTJIMHoiLz4KICA8cGF0aCBmaWxsPSIjZTEwMDBmIiBkPSJNMzQxLjMgMEg1MTJ2NTEySDM0MS4zeiIvPgo8L3N2Zz4K",
  cn: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiBpZD0iZmxhZy1pY29ucy1jbiIgdmlld0JveD0iMCAwIDUxMiA1MTIiPgogIDxkZWZzPgogICAgPHBhdGggaWQ9ImNuLWEiIGZpbGw9IiNmZjAiIGQ9Ik0xLS4zLS43LjggMC0xIC42LjgtMS0uM3oiLz4KICA8L2RlZnM+CiAgPHBhdGggZmlsbD0iI2VlMWMyNSIgZD0iTTAgMGg1MTJ2NTEySDB6Ii8+CiAgPHVzZSB4bGluazpocmVmPSIjY24tYSIgd2lkdGg9IjMwIiBoZWlnaHQ9IjIwIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxMjggMTI4KXNjYWxlKDc2LjgpIi8+CiAgPHVzZSB4bGluazpocmVmPSIjY24tYSIgd2lkdGg9IjMwIiBoZWlnaHQ9IjIwIiB0cmFuc2Zvcm09InJvdGF0ZSgtMTIxIDE0Mi42IC00NylzY2FsZSgyNS41ODI3KSIvPgogIDx1c2UgeGxpbms6aHJlZj0iI2NuLWEiIHdpZHRoPSIzMCIgaGVpZ2h0PSIyMCIgdHJhbnNmb3JtPSJyb3RhdGUoLTk4LjEgMTk4IC04MilzY2FsZSgyNS42KSIvPgogIDx1c2UgeGxpbms6aHJlZj0iI2NuLWEiIHdpZHRoPSIzMCIgaGVpZ2h0PSIyMCIgdHJhbnNmb3JtPSJyb3RhdGUoLTc0IDI3Mi40IC0xMTQpc2NhbGUoMjUuNjEzNykiLz4KICA8dXNlIHhsaW5rOmhyZWY9IiNjbi1hIiB3aWR0aD0iMzAiIGhlaWdodD0iMjAiIHRyYW5zZm9ybT0ibWF0cml4KDE2IC0xOS45NjggMTkuOTY4IDE2IDI1NiAyMzAuNCkiLz4KPC9zdmc+Cg==",
  jp: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGlkPSJmbGFnLWljb25zLWpwIiB2aWV3Qm94PSIwIDAgNTEyIDUxMiI+CiAgPGRlZnM+CiAgICA8Y2xpcFBhdGggaWQ9ImpwLWEiPgogICAgICA8cGF0aCBmaWxsLW9wYWNpdHk9Ii43IiBkPSJNMTc3LjIgMGg3MDguNnY3MDguN0gxNzcuMnoiLz4KICAgIDwvY2xpcFBhdGg+CiAgPC9kZWZzPgogIDxnIGZpbGwtcnVsZT0iZXZlbm9kZCIgc3Ryb2tlLXdpZHRoPSIxcHQiIGNsaXAtcGF0aD0idXJsKCNqcC1hKSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTEyOClzY2FsZSguNzIyNDkpIj4KICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0wIDBoMTA2M3Y3MDguN0gweiIvPgogICAgPGNpcmNsZSBjeD0iNTIzLjEiIGN5PSIzNDQuMSIgcj0iMTk0LjkiIGZpbGw9IiNiYzAwMmQiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC01OS43IC0zNC41KXNjYWxlKDEuMTMwMikiLz4KICA8L2c+Cjwvc3ZnPgo=",
  kr: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiBpZD0iZmxhZy1pY29ucy1rciIgdmlld0JveD0iMCAwIDUxMiA1MTIiPgogIDxwYXRoIGZpbGw9IiNmZmYiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTAgMGg1MTJ2NTEySDBaIi8+CiAgPGcgZmlsbC1ydWxlPSJldmVub2RkIiB0cmFuc2Zvcm09InJvdGF0ZSgtNTYuMyAzNjcuMiAtMTExLjIpc2NhbGUoOS4zNzUpIj4KICAgIDxnIGlkPSJrci1iIj4KICAgICAgPHBhdGggaWQ9ImtyLWEiIGZpbGw9IiMwMDAwMDEiIGQ9Ik0tNi0yNkg2djJILTZabTAgM0g2djJILTZabTAgM0g2djJILTZaIi8+CiAgICAgIDx1c2UgeGxpbms6aHJlZj0iI2tyLWEiIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIHk9IjQ0Ii8+CiAgICA8L2c+CiAgICA8cGF0aCBzdHJva2U9IiNmZmYiIGQ9Ik0wIDE3djEwIi8+CiAgICA8cGF0aCBmaWxsPSIjY2QyZTNhIiBkPSJNMC0xMmExMiAxMiAwIDAgMSAwIDI0WiIvPgogICAgPHBhdGggZmlsbD0iIzAwNDdhMCIgZD0iTTAtMTJhMTIgMTIgMCAwIDAgMCAyNEE2IDYgMCAwIDAgMCAwWiIvPgogICAgPGNpcmNsZSBjeT0iLTYiIHI9IjYiIGZpbGw9IiNjZDJlM2EiLz4KICA8L2c+CiAgPGcgZmlsbC1ydWxlPSJldmVub2RkIiB0cmFuc2Zvcm09InJvdGF0ZSgtMTIzLjcgMTk2LjUgNTkuNSlzY2FsZSg5LjM3NSkiPgogICAgPHVzZSB4bGluazpocmVmPSIja3ItYiIgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIvPgogICAgPHBhdGggc3Ryb2tlPSIjZmZmIiBkPSJNMC0yMy41djNNMCAxN3YzLjVtMCAzdjMiLz4KICA8L2c+Cjwvc3ZnPgo=",
  in: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiBpZD0iZmxhZy1pY29ucy1pbiIgdmlld0JveD0iMCAwIDUxMiA1MTIiPgogIDxwYXRoIGZpbGw9IiNmOTMiIGQ9Ik0wIDBoNTEydjE3MC43SDB6Ii8+CiAgPHBhdGggZmlsbD0iI2ZmZiIgZD0iTTAgMTcwLjdoNTEydjE3MC42SDB6Ii8+CiAgPHBhdGggZmlsbD0iIzEyODgwNyIgZD0iTTAgMzQxLjNoNTEyVjUxMkgweiIvPgogIDxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDI1NiAyNTYpc2NhbGUoMy40MTMzMykiPgogICAgPGNpcmNsZSByPSIyMCIgZmlsbD0iIzAwOCIvPgogICAgPGNpcmNsZSByPSIxNy41IiBmaWxsPSIjZmZmIi8+CiAgICA8Y2lyY2xlIHI9IjMuNSIgZmlsbD0iIzAwOCIvPgogICAgPGcgaWQ9ImluLWQiPgogICAgICA8ZyBpZD0iaW4tYyI+CiAgICAgICAgPGcgaWQ9ImluLWIiPgogICAgICAgICAgPGcgaWQ9ImluLWEiIGZpbGw9IiMwMDgiPgogICAgICAgICAgICA8Y2lyY2xlIHI9Ii45IiB0cmFuc2Zvcm09InJvdGF0ZSg3LjUgLTguOCAxMzMuNSkiLz4KICAgICAgICAgICAgPHBhdGggZD0iTTAgMTcuNS42IDcgMCAyLS42IDV6Ii8+CiAgICAgICAgICA8L2c+CiAgICAgICAgICA8dXNlIHhsaW5rOmhyZWY9IiNpbi1hIiB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB0cmFuc2Zvcm09InJvdGF0ZSgxNSkiLz4KICAgICAgICA8L2c+CiAgICAgICAgPHVzZSB4bGluazpocmVmPSIjaW4tYiIgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgdHJhbnNmb3JtPSJyb3RhdGUoMzApIi8+CiAgICAgIDwvZz4KICAgICAgPHVzZSB4bGluazpocmVmPSIjaW4tYyIgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgdHJhbnNmb3JtPSJyb3RhdGUoNjApIi8+CiAgICA8L2c+CiAgICA8dXNlIHhsaW5rOmhyZWY9IiNpbi1kIiB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgICA8dXNlIHhsaW5rOmhyZWY9IiNpbi1kIiB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB0cmFuc2Zvcm09InJvdGF0ZSgtMTIwKSIvPgogIDwvZz4KPC9zdmc+Cg==",
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
    idiom:"“Many hands make light work”",
    cards:[
      { lang:"French",   flag:"fr", phrase:"“Union makes strength”", gloss:"L'union fait la force" },
      { lang:"Chinese",  flag:"cn", phrase:"“When everyone gathers firewood, the flames rise high”", gloss:"众人拾柴火焰高" },
      { lang:"Japanese", flag:"jp", phrase:"“When three people gather, the wisdom of a sage appears”", gloss:"三人寄れば文殊の知恵" },
      { lang:"Korean",   flag:"kr", phrase:"“Even a sheet of paper is lighter when lifted together”", gloss:"백지장도 맞들면 낫다" },
      { lang:"Hindi",    flag:"in", phrase:"“One and one make eleven”", gloss:"एक और एक ग्यारह" },
      { lang:"Mongolian",flag:"mn", phrase:"“One branch can't make a fire, one person can't make a family”",
        gloss:"Ганц мод гал болохгүй, ганц хүн айл болохгүй",
        roman:"Gants mod gal bolokhgui, gants khun ail bolokhgui", objPos:"left center" }
    ]
  },
  {
    value:"Critical thinking", weeks:"3 to 4",
    idiom:"“Think it through before you act”",
    cards:[
      { lang:"French",   flag:"fr", phrase:"“Caution is the mother of safety”", gloss:"La prudence est mère de sûreté" },
      { lang:"Chinese",  flag:"cn", phrase:"“Think three times, then act”", gloss:"三思而后行", roman:"sān sī ér hòu xíng" },
      { lang:"Japanese", flag:"jp", phrase:"“Tap the stone bridge before you cross it”", gloss:"石橋を叩いて渡る", roman:"ishibashi o tataite wataru" },
      { lang:"Korean",   flag:"kr", phrase:"“Even a stone bridge, tap it before you cross”", gloss:"돌다리도 두들겨 보고 건너라", roman:"doldarido dudeulgyeo bogo geonneora" },
      { lang:"Hindi",    flag:"in", phrase:"“Act without thinking and you regret it later”", gloss:"बिना विचारे जो करे सो पाछे पछताए", roman:"bina vichaare jo kare so paachhe pachhtaae" },
      { lang:"Mongolian",flag:"mn", phrase:"“Measure seven times, cut once”",
        gloss:"Долоо хэмжиж, нэг огтол",
        roman:"Doloo khemjij, neg ogtol", objPos:"left center" }
    ]
  },
  {
    value:"Creativity", weeks:"5 to 6",
    idiom:"“Necessity is the mother of invention”",
    cards:[
      { lang:"French",   flag:"fr", phrase:"“For want of thrushes, you eat blackbirds”", gloss:"Faute de grives, on mange des merles" },
      { lang:"Chinese",  flag:"cn", phrase:"“When stuck, change; change opens a way”", gloss:"穷则变，变则通", roman:"qióng zé biàn, biàn zé tōng" },
      { lang:"Japanese", flag:"jp", phrase:"“Pushed to the limit, a way opens”", gloss:"窮すれば通ず", roman:"kyū sureba tsūzu" },
      { lang:"Korean",   flag:"kr", phrase:"“When desperate, a way opens”", gloss:"궁하면 통한다", roman:"gunghamyeon tonghanda" },
      { lang:"Hindi",    flag:"in", phrase:"“Necessity is the mother of invention”", gloss:"आवश्यकता ही आविष्कार की जननी है", roman:"aavashyakta hi aavishkaar ki janani hai" },
      { lang:"Mongolian",flag:"mn", phrase:"“There is no such thing as no way out; find the method and the road appears”",
        gloss:"Гарцгүй гэж үгүй, аргыг нь олвол зам нь олдоно",
        roman:"Gartsgüi gej ügüi, argyg ni olvol zam ni oldono", objPos:"left center" }
    ]
  },
  {
    value:"Communication", weeks:"7 to 8",
    idiom:"“A kind word goes a long way”",
    cards:[
      { lang:"French",   flag:"fr", phrase:"“Gentleness achieves more than force”", gloss:"Plus fait douceur que violence" },
      { lang:"Chinese",  flag:"cn", phrase:"“One kind word warms three winters”", gloss:"良言一句三冬暖", roman:"liángyán yī jù sān dōng nuǎn" },
      { lang:"Japanese", flag:"jp", phrase:"“A gentle face and kind words”", gloss:"和顔愛語", roman:"wagen aigo" },
      { lang:"Korean",   flag:"kr", phrase:"“Kind words going out bring kind words back”", gloss:"가는 말이 고와야 오는 말이 곱다", roman:"ganeun mari gowaya oneun mari gopda" },
      { lang:"Hindi",    flag:"in", phrase:"“Sweet speech is dear to everyone”", gloss:"मीठी बोली सबको प्यारी लगती है", roman:"meethi boli sabko pyaari lagti hai" },
      { lang:"Mongolian",flag:"mn", phrase:"“A blessing of the mouth is a blessing forever”",
        gloss:"Амны билгээс ашдын билэг",
        roman:"Amny bilgees ashdyn bileg", objPos:"left center" }
    ]
  },
  {
    value:"Citizenship", weeks:"9 to 10",
    idiom:"“It takes a village to raise a child”",
    cards:[
      { lang:"French",   flag:"fr", phrase:"“One for all, all for one”", gloss:"Un pour tous, tous pour un" },
      { lang:"Chinese",  flag:"cn", phrase:"“Every ordinary person shares responsibility for all”", gloss:"天下兴亡，匹夫有责", roman:"tiānxià xīngwáng, pǐfū yǒu zé" },
      { lang:"Japanese", flag:"jp", phrase:"“Kindness to others is never wasted, it comes back to you”", gloss:"情けは人の為ならず", roman:"nasake wa hito no tame narazu" },
      { lang:"Korean",   flag:"kr", phrase:"“A close neighbour beats a distant relative”", gloss:"이웃이 사촌보다 낫다", roman:"iusi sachonboda natda" },
      { lang:"Hindi",    flag:"in", phrase:"“The whole world is one family”", gloss:"वसुधैव कुटुम्बकम्", roman:"vasudhaiva kutumbakam" },
      { lang:"Mongolian",flag:"mn", phrase:"“A near neighbour is better than a distant relative”",
        gloss:"Ойрын хөрш холын садангаас дээр",
        roman:"Oiryn khörsh kholyn sadangaas deer", objPos:"left center" }
    ]
  }
];
const CURRENT = 2;
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
      ? "This fortnight's C · "+fn.value
      : "Weeks "+fn.weeks+" · "+fn.value;

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
      var locked = false;  // all five C's unlocked
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

/* ===== POPUPS (intro + survey), injected so they appear on every page ===== */
(function(){
  if(!document.getElementById("introModal")){
    var im=document.createElement("div");
    im.className="modal-overlay"; im.id="introModal";
    im.setAttribute("role","dialog"); im.setAttribute("aria-modal","true"); im.setAttribute("aria-labelledby","introTitle");
    im.hidden=true;
    im.innerHTML='<div class="modal-card">'
      +'<button class="modal-close" id="introClose" aria-label="Close">&times;</button>'
      +'<p class="modal-scene">Two students walk out of their final exam. &ldquo;That was a piece of cake,&rdquo; one says. &ldquo;Chocolate or vanilla?&rdquo; the other replies.</p>'
      +'<p class="modal-point" id="introTitle">It sounds like a simple mix up. But it&rsquo;s a small window into something bigger. Every culture is full of sayings that only make sense from the inside. Learning each other&rsquo;s is how we actually start to understand each other.</p>'
      +'<button class="modal-enter" id="introEnter">Enter</button>'
      +'</div>';
    document.body.appendChild(im);
  }
  if(!document.getElementById("svModal")){
    var sm=document.createElement("div");
    sm.className="sv-overlay"; sm.id="svModal";
    sm.setAttribute("role","dialog"); sm.setAttribute("aria-modal","true"); sm.setAttribute("aria-labelledby","svTitle");
    sm.hidden=true;
    sm.innerHTML='<div class="sv-card" id="svCard">'
      +'<div class="sv-title" id="svTitle">Quick question</div>'
      +'<p class="sv-text">Have you filled in the Cultures Connect survey yet? It only takes a couple of minutes and it really helps.</p>'
      +'<div class="sv-btns"><button class="sv-btn sv-yes" id="svYes">Yes, I have</button>'
      +'<button class="sv-btn sv-no" id="svNo">Not yet</button></div>'
      +'</div>';
    document.body.appendChild(sm);
  }

  /* intro */
  (function(){
    var modal=document.getElementById("introModal"); if(!modal) return;
    var SEEN="cc_intro_seen";
    function open(){ modal.hidden=false; requestAnimationFrame(function(){ modal.classList.add("show"); }); document.body.style.overflow="hidden"; }
    function close(r){ modal.classList.remove("show"); document.body.style.overflow=""; if(r){ try{ localStorage.setItem(SEEN,"1"); }catch(e){} } setTimeout(function(){ modal.hidden=true; },350); }
    document.getElementById("introClose").addEventListener("click",function(){ close(true); });
    document.getElementById("introEnter").addEventListener("click",function(){ close(true); });
    modal.addEventListener("click",function(e){ if(e.target===modal) close(true); });
    document.addEventListener("keydown",function(e){ if(e.key==="Escape" && !modal.hidden) close(true); });
    Array.prototype.forEach.call(document.querySelectorAll("#introReplay, .js-replay-intro"),function(l){
      l.addEventListener("click",function(e){ e.preventDefault(); open(); });
    });
    var seen; try{ seen=localStorage.getItem(SEEN); }catch(e){ seen=null; }
    if(!seen) open();
  })();

  /* survey */
  (function(){
    var FORM="https://forms.gle/LAf6DGw7UE8hu4jCA";
    var KEY="cc_survey_asked";
    var modal=document.getElementById("svModal"); if(!modal) return;
    var card=document.getElementById("svCard");
    var QUESTION=card.innerHTML;
    function remember(){ try{ localStorage.setItem(KEY,"1"); }catch(e){} }
    function bind(){
      document.getElementById("svYes").addEventListener("click",function(){
        remember();
        card.innerHTML='<div class="sv-title">Thank you!</div><p class="sv-text" style="margin-bottom:0;">Welcome back — enjoy exploring Cultures Connect.</p>';
        setTimeout(function(){ close(); },1800);
      });
      document.getElementById("svNo").addEventListener("click",function(){
        remember(); window.open(FORM,"_blank","noopener"); close();
      });
    }
    function open(){ card.innerHTML=QUESTION; bind(); modal.hidden=false; requestAnimationFrame(function(){ modal.classList.add("show"); }); }
    function close(){ modal.classList.remove("show"); setTimeout(function(){ modal.hidden=true; },300); }
    bind();
    modal.addEventListener("click",function(e){ if(e.target===modal){ remember(); close(); } });
    document.addEventListener("keydown",function(e){ if(e.key==="Escape" && !modal.hidden){ remember(); close(); } });
    Array.prototype.forEach.call(document.querySelectorAll("#svReopen, .js-open-survey"),function(l){
      l.addEventListener("click",function(e){ e.preventDefault(); open(); });
    });
    var seen; try{ seen=localStorage.getItem(KEY); }catch(e){ seen=null; }
    if(!seen){ setTimeout(open, 10000); }
  })();
})();
