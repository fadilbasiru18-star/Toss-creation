/* ---- Owner settings: fill these in, then every request can be sent straight to you ---- */
const CONFIG = {
  whatsapp: '2348023590664',   // country code + number, digits only, e.g. '2348012345678'
  email: '',      // e.g. 'orders@yourdomain.com'
  address: ''     // shop or studio address (shown in the footer)
};

const ITEMS = [
  {id:'monk-strap',name:'Burgundy double monk strap',tags:['men'],alt:'Burgundy glossy double monk strap shoes with a brogue toe cap'},
  {id:'holo-loafer',name:'Holographic tassel loafer',tags:['men'],alt:'Black snake-print loafers with a holographic front panel and gold tassel trim'},
  {id:'tassel-loafer',name:'Black tassel loafer, chunky sole',tags:['men'],alt:'Black leather tassel loafers on a chunky sole'},
  {id:'woven-mule',name:'Woven leather tassel mule',tags:['men'],alt:'Black woven leather mules with tassels and a mustard insole'},
  {id:'cross-slide-brown',name:'Textured cross-strap slide',tags:['men'],alt:'Brown and black cross-strap leather slides with a textured band'},
  {id:'cross-slide-black',name:'Cross-strap slide, tan footbed',tags:['men'],alt:'Black cross-strap slides with a tan cushioned footbed'},
  {id:'croc-mule',name:'Croc-embossed leather mule',tags:['men'],alt:'Dark croc-embossed leather mules with a burgundy lining'},
  {id:'derby',name:'Patent derby, chunky sole',tags:['students','men'],alt:'Black patent derby shoes with contrast stitching and a chunky sole'},
  {id:'penny-loafer',name:'Black and white penny loafer',tags:['students','men'],alt:'Black leather penny loafers with a white centre panel'},
  {id:'red-sneaker',name:'Ankara print lace-up sneaker',tags:['students'],alt:'Black, red and white dotted print sneakers with red laces'},
  {id:'brogue-platform',name:'Brogue oxford, platform sole',tags:['women'],alt:'Black leather brogue oxfords on a platform lug sole'},
  {id:'tassel-wedge',name:'Tassel wedge slide',tags:['women'],alt:'Brown wedge slides with tassels and a rope-style sole'},
  {id:'wedge-sandal',name:'Patent wedge thong sandal',tags:['women','heels'],alt:'Black patent wedge sandals with a thong strap and ankle strap'},
  {id:'maroon-slingback',name:'Burgundy block-heel slingback',tags:['women','heels'],alt:'Burgundy leather slingback shoes with a block heel and gold buckle'},
  {id:'bow-kitten',name:'Black bow kitten-heel slingback',tags:['women','heels'],alt:'Black patent slingback kitten heels with a bow on the toe'},
  {id:'rhinestone-block',name:'Rhinestone block-heel slide',tags:['women','heels'],alt:'Black suede block-heel slides with a braided rhinestone band'},
  {id:'bag-navy',name:'Navy and black leather bag',tags:['bags'],alt:'Structured leather bag in black and navy with gold buckles'},
  {id:'bag-green-ankara',name:'Olive leather bag, Ankara panel',tags:['bags'],alt:'Olive green leather bag with a bright Ankara print panel'},
  {id:'bag-black-ankara',name:'Black bag, teal Ankara panel',tags:['bags'],alt:'Black leather bag with a teal and multicolour Ankara print panel'},
  {id:'bag-orange-ankara',name:'Black bag, orange Ankara panel',tags:['bags'],alt:'Black leather bag with an orange and multicolour Ankara print panel'},
  {id:'bag-snake-ankara',name:'Black snake-print bag, Ankara panel',tags:['bags'],alt:'Black snake-print leather bag with yellow and blue Ankara panels and gold buckles'},
  {id:'clutch-copper',name:'Copper envelope clutch with tassel',tags:['bags'],alt:'Copper shimmer envelope clutch with a gold peacock clasp, tassel and gold chain'},
  {id:'yellow-lace-sneaker',name:'Ankara print sneaker, yellow laces',tags:['students','men','women'],alt:'Black suede sneakers with Ankara print sides and yellow laces'},
  {id:'stripe-mule',name:'Woven stripe leather mule',tags:['men'],alt:'Black leather mules with a red, white and green woven stripe front and a strap'},
  {id:'set-wine-slingback',name:'Wine brocade heels and bag set',tags:['women','heels'],alt:'Wine and gold brocade block-heel slingbacks with a matching bag and rhinestone buckle'},
  {id:'set-gold-peeptoe',name:'Gold peep-toe heels and clutch set',tags:['women','heels'],alt:'Gold swirl peep-toe heels with a matching clutch and gold chain'},
  {id:'set-fuchsia-flat',name:'Fuchsia croc slingbacks and bag set',tags:['women','heels'],alt:'Fuchsia croc-print low-heel slingbacks with a matching bag and jewelled buckle'},
  {id:'set-burgundy-block',name:'Burgundy croc block heels and bag set',tags:['women','heels'],alt:'Burgundy croc-print block-heel slingbacks with a matching bag and crystal buckle'}
];
const byId = Object.fromEntries(ITEMS.map(i=>[i.id,i]));
const WHO = [
  {k:'students',label:'Student',title:'Students',text:'School shoes, loafers and sneakers made to your size.',img:'derby',kind:'shoe'},
  {k:'men',label:'Working man',title:'Working men',text:'Oxfords, monk straps, loafers and slides for the office and after.',img:'monk-strap',kind:'shoe'},
  {k:'women',label:'Working woman',title:'Working women',text:'Brogues, wedges and sandals that stay comfortable all day.',img:'brogue-platform',kind:'shoe'},
  {k:'heels',label:'Heels',title:'Heels',text:'Block heels, kitten heels and slingbacks in the colour you choose.',img:'',kind:'shoe'},
  {k:'bags',label:'Bag',title:'Bags',text:'Leather bags with Ankara print panels, in the colours you choose.',img:'bag-green-ankara',kind:'bag'}
];
const COLOURS=[['Black','#111'],['Brown','#5a3a22'],['Burgundy','#5b1424'],['Navy','#14234d'],['Tan','#c08a52'],['White','#f4f4f4'],['Olive','#5c6a22'],['Red','#b31b1b'],['Another colour','conic-gradient(#d33,#dd3,#3d3,#3dd,#33d,#d3d,#d33)']];
const ACCENTS=['Gold','Silver','Same as main colour','None'];
const MATERIALS={shoe:['Smooth leather','Patent leather','Suede','Woven leather','Croc-embossed','Ankara print fabric','Not sure, advise me'],bag:['Smooth leather','Leather with Ankara panel','Suede','Croc-embossed','Not sure, advise me']};
const SOLES={flat:['Flat leather sole','Chunky lug sole','Gum sole','White sneaker sole','Wedge sole'],heels:['Block heel','Kitten heel','Wedge heel','Stiletto','Flat']};
const CLOSURES=['Lace-up','Slip-on','Buckle strap','Open slide'];
const BAGTYPES=['Handbag','Work bag','School backpack','Tote'];
const BAGSIZES=['Small','Medium','Large'];
const STRAPS=['Short handles','Long strap','Both'];
const FIT=['Visit for a fitting','Send my foot length','I already know my size'];
const DELIV=['I will collect','Deliver to me'];

const $=s=>document.querySelector(s);
const S={who:'',style:'',colour:'',accent:'',material:'',sole:'',closure:'',bagtype:'',bagsize:'',strap:'',fit:'',deliv:'',refimg:''};
const kindOf=w=>w==='bags'?'bag':'shoe';

$('#yr').textContent=new Date().getFullYear();
$('#menu').addEventListener('click',e=>{const o=$('#nav').classList.toggle('open');e.currentTarget.setAttribute('aria-expanded',o)});
$('#nav').addEventListener('click',e=>{if(e.target.tagName==='A'){$('#nav').classList.remove('open');$('#menu').setAttribute('aria-expanded','false')}});
/* contact lines only appear once you fill in CONFIG */
{const c=[];if(CONFIG.whatsapp)c.push(`<li><a href="https://wa.me/${CONFIG.whatsapp}">WhatsApp us</a></li>`);if(CONFIG.email)c.push(`<li><a href="mailto:${CONFIG.email}">${CONFIG.email}</a></li>`);if(CONFIG.address)c.push(`<li>${CONFIG.address}</li>`);
 if(c.length)$('#contact').innerHTML=c.join('')+'<li><a href="#order">Send an order request</a></li>'}



