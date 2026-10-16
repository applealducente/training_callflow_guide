// public/pixel-icons.js
// Original 12x12 pixel-art icons for the retro platformer theme.
// Each icon is a grid of letters; each letter is a color from PALETTE and "." is empty.
// window.PIXEL.svg(name, size) returns an <svg> element; PIXEL.url(name) a data: URL.
// A few icons are also exposed as CSS variables (--px-coin, --px-star, ...).

(function () {
  var PALETTE = {
    K: '#1d1b2c', // outline
    W: '#ffffff',
    Y: '#ffcc1a', // coin yellow
    O: '#c27a12', // coin shade
    R: '#e03c28', // red
    r: '#a82314',
    B: '#d0532a', // brick
    D: '#8f2f12', // brick mortar
    G: '#2fb34a', // pipe green
    g: '#18752b',
    L: '#8fd0ff', // glass blue
    C: '#39a8e8', // gem / shield blue
    N: '#7a3e10', // wood
    T: '#f6d7a8', // parchment / stem
    P: '#9b5de5', // mushroom cap
    A: '#9aa3b5'  // grey metal
  };

  var ICONS = {
    coin: [
      '....KKKK....', '..KKYYYYKK..', '.KYYWWYYYOK.', '.KYWYYYYYOK.',
      'KYYWYYYYYYOK', 'KYYWYYYYYYOK', 'KYYWYYYYYYOK', 'KYYYYYYYYYOK',
      '.KYYYYYYYOK.', '.KYYYYYYOOK.', '..KKOOOOKK..', '....KKKK....'
    ],
    qblock: [
      'KKKKKKKKKKKK', 'KOYYYYYYYYOK', 'KYYYWWWWYYYK', 'KYYWWYYWWYYK',
      'KYYYYYYWWYYK', 'KYYYYYWWYYYK', 'KYYYYWWYYYYK', 'KYYYYWWYYYYK',
      'KYYYYYYYYYYK', 'KYYYYWWYYYYK', 'KOYYYYYYYYOK', 'KKKKKKKKKKKK'
    ],
    brick: [
      'KKKKKKKKKKKK', 'KBBBBBDBBBBK', 'KBBBBBDBBBBK', 'KDDDDDDDDDDK',
      'KBBDBBBBBDBK', 'KBBDBBBBBDBK', 'KDDDDDDDDDDK', 'KBBBBBDBBBBK',
      'KBBBBBDBBBBK', 'KDDDDDDDDDDK', 'KBBDBBBBBDBK', 'KKKKKKKKKKKK'
    ],
    bang: [
      'KKKKKKKKKKKK', 'KrRRRRRRRRrK', 'KRRRRWWRRRRK', 'KRRRRWWRRRRK',
      'KRRRRWWRRRRK', 'KRRRRWWRRRRK', 'KRRRRWWRRRRK', 'KRRRRRRRRRRK',
      'KRRRRWWRRRRK', 'KRRRRWWRRRRK', 'KrRRRRRRRRrK', 'KKKKKKKKKKKK'
    ],
    star: [
      '.....KK.....', '....KYYK....', '....KYYK....', 'KKKKYYYYKKKK',
      'KYYYYYYYYYYK', '.KYYYYYYYYK.', '..KYYYYYYK..', '..KYYYYYYK..',
      '.KYYYKKYYYK.', '.KYYK..KYYK.', 'KYYK....KYYK', 'KKK......KKK'
    ],
    mushroom: [
      '....KKKK....', '..KKPPPPKK..', '.KPWWPPWWPK.', '.KPWWPPWWPK.',
      'KPPPPPPPPPPK', 'KPWWPPPPWWPK', 'KKKKKKKKKKKK', '..KTTTTTTK..',
      '..KTKTTKTK..', '..KTTTTTTK..', '..KTTTTTTK..', '...KKKKKK...'
    ],
    heart: [
      '............', '.KKK....KKK.', 'KRRRK..KRRRK', 'KRWRRKKRRRRK',
      'KRWRRRRRRRRK', 'KRRRRRRRRRRK', '.KRRRRRRRRK.', '..KRRRRRRK..',
      '...KRRRRK...', '....KRRK....', '.....KK.....', '............'
    ],
    flag: [
      '..KK........', '..KAKKKKKK..', '..KAGGGGGK..', '..KAGWWGK...',
      '..KAGGGK....', '..KAGKK.....', '..KAK.......', '..KAK.......',
      '..KAK.......', '..KAK.......', 'KKKKKKK.....', 'KBBBBBK.....'
    ],
    castle: [
      'KKK.KKKK.KKK', 'KBK.KBBK.KBK', 'KBKKKBBKKKBK', 'KBBBBBBBBBBK',
      'KBBKBBBBKBBK', 'KBBBBBBBBBBK', 'KBBBBKKBBBBK', 'KBBBKNNKBBBK',
      'KBBBKNNKBBBK', 'KBBBKNNKBBBK', 'KBBBKNNKBBBK', 'KKKKKKKKKKKK'
    ],
    speech: [
      '............', '.KKKKKKKKKK.', 'KWWWWWWWWWWK', 'KWWWWWWWWWWK',
      'KWKKWKKWKKWK', 'KWWWWWWWWWWK', '.KKKKWWKKKK.', '....KWK.....',
      '....KK......', '............', '............', '............'
    ],
    magnifier: [
      '..KKKK......', '.KLLLLK.....', 'KLWLLLLK....', 'KLWLLLLK....',
      'KLLLLLLK....', 'KLLLLLLK....', '.KLLLLK.....', '..KKKKNK....',
      '......KNK...', '.......KNK..', '........KNK.', '.........KK.'
    ],
    house: [
      '.....KK.....', '....KRRK....', '...KRRRRK...', '..KRRRRRRK..',
      '.KRRRRRRRRK.', 'KKKKKKKKKKKK', '.KTTTTTTTTK.', '.KTLLTTNNTK.',
      '.KTLLTTNNTK.', '.KTTTTTNNTK.', '.KTTTTTNNTK.', '.KKKKKKKKKK.'
    ],
    clock: [
      '...KKKKKK...', '..KWWWWWWK..', '.KWWWKWWWWK.', 'KWWWWKWWWWWK',
      'KWWWWKWWWWWK', 'KWWWWKKKKWWK', 'KWWWWWWWWWWK', 'KWWWWWWWWWWK',
      '.KWWWWWWWWK.', '..KWWWWWWK..', '...KKKKKK...', '............'
    ],
    key: [
      '............', '............', '..KKKK......', '.KYYYYK.....',
      'KYYKKYYK....', 'KYYKKYYK....', '.KYYYYYKKKKK', '..KKKKYYYYYK',
      '......KYKYK.', '......KK.KK.', '............', '............'
    ],
    gem: [
      '............', '...KKKKKK...', '..KCWCCCCK..', '.KCWCCCCCCK.',
      'KKKKKKKKKKKK', '.KCCCCCCLCK.', '..KCCCCLCK..', '...KCCLCK...',
      '....KCCK....', '.....KK.....', '............', '............'
    ],
    shield: [
      'KKKKKKKKKKKK', 'KCCCCYYCCCCK', 'KCCCCYYCCCCK', 'KYYYYYYYYYYK',
      'KCCCCYYCCCCK', 'KCCCCYYCCCCK', '.KCCCYYCCCK.', '.KCCCYYCCCK.',
      '..KCCYYCCK..', '...KCYYCK...', '....KYYK....', '.....KK.....'
    ],
    pipe: [
      'KKKKKKKKKKKK', 'KWGGGGGGGGgK', 'KWGGGGGGGGgK', 'KKKKKKKKKKKK',
      '.KWGGGGGGgK.', '.KWGGGGGGgK.', '.KWGGGGGGgK.', '.KWGGGGGGgK.',
      '.KWGGGGGGgK.', '.KWGGGGGGgK.', '.KWGGGGGGgK.', '.KKKKKKKKKK.'
    ],
    bell: [
      '.....KK.....', '....KYYK....', '...KYYYYK...', '..KYWYYYYK..',
      '..KYWYYYYK..', '..KYYYYYYK..', '.KYYYYYYYYK.', 'KYYYYYYYYYYK',
      'KKKKKKKKKKKK', '.....KK.....', '............', '............'
    ],
    scroll: [
      '.KKKKKKKKKK.', 'KTTTTTTTTTTK', '.KTKKKKKKTK.', '.KTTTTTTTTK.',
      '.KTKKKKKTTK.', '.KTTTTTTTTK.', '.KTKKKKKKTK.', '.KTTTTTTTTK.',
      '.KTKKKKTTTK.', '.KTTTTTTTTK.', 'KTTTTTTTTTTK', '.KKKKKKKKKK.'
    ]
  };

  function markup(name) {
    var rows = ICONS[name];
    if (!rows) return null;
    var rects = '';
    rows.forEach(function (row, y) {
      // merge horizontal runs of the same color into one rect
      var x = 0;
      while (x < row.length) {
        var ch = row[x], start = x;
        while (x < row.length && row[x] === ch) x++;
        if (ch !== '.' && PALETTE[ch]) {
          rects += '<rect x="' + start + '" y="' + y + '" width="' + (x - start) + '" height="1" fill="' + PALETTE[ch] + '"/>';
        }
      }
    });
    return '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 12" shape-rendering="crispEdges">' + rects + '</svg>';
  }

  function url(name) {
    var m = markup(name);
    return m ? 'url("data:image/svg+xml,' + encodeURIComponent(m) + '")' : 'none';
  }

  function svg(name, size) {
    var m = markup(name);
    if (!m) return null;
    var wrap = document.createElement('span');
    wrap.innerHTML = m;
    var el = wrap.firstChild;
    el.setAttribute('width', size || 24);
    el.setAttribute('height', size || 24);
    el.setAttribute('aria-hidden', 'true');
    el.classList.add('px-icon');
    return el;
  }

  window.PIXEL = { svg: svg, url: url, has: function (n) { return !!ICONS[n]; } };

  // CSS hooks for decorations
  ['coin', 'qblock', 'brick', 'star', 'bang', 'pipe', 'flag', 'mushroom', 'heart', 'shield', 'gem', 'castle'].forEach(function (n) {
    document.documentElement.style.setProperty('--px-' + n, url(n));
  });
})();
