# Toss Creation

Custom-made shoes and bags. *Style two notches higher.*

Created by **Bashiru Fadill Oluwashubomi** · 09078097713 · fadilbasiru18@gmail.com

A black and gold booking site. Customers pick a style, change the colour, material, sole and size, book a fitting, and send the order straight to WhatsApp. Price and payment are agreed on WhatsApp.

## What is in the folder

```
toss-site/
  index.html     the website (all code in one file)
  admin.html     the owner's order tracker
  README.md      this file
  img/           product photos on white backgrounds, and the logo
```

There is nothing to install and no build step. Keep the three items together in one folder so the photos load.

## Open it on your computer

Double-click `index.html`. If you use VS Code, you can also right-click it and choose Open with Live Server.

## Put it online (GitHub Pages, free)

1. Make a free account at github.com and create a new **Public** repository.
2. Choose "uploading an existing file", then drag in the contents of this folder (`index.html`, `admin.html`, `README.md` and the `img` folder). `index.html` must sit at the top level of the repository, not inside another folder.
3. Commit the files.
4. Go to Settings, then Pages. Set Source to "Deploy from a branch", branch `main`, folder `/ (root)`, and Save.
5. After a minute or two the link appears: `yourusername.github.io/repository-name`.

When you buy a domain, type it into the Custom domain box on the same Pages screen and add the DNS records GitHub shows you where you bought the domain.

## How an order works

1. The customer chooses who it is for (students, working men, working women, heels, or bags) and a style, then colour, material, sole, size and how you should take measurements.
2. They give their name and phone number and press **Send my order on WhatsApp**.
3. WhatsApp opens to your number with the whole order written out. The order is only sent when the customer presses send in the chat.
4. You reply there and agree the price, the payment and the date.

A customer's reference photo cannot be attached automatically, so the page asks them to attach it in the chat.

## Change the WhatsApp number or details

Open `index.html` and search for `CONFIG`. It looks like this:

```js
const CONFIG = {
  whatsapp: '2348023590664',   // country code + number, digits only
  email: '',                   // optional, shown in the footer
  address: ''                  // optional, shown in the footer
};
```

Use the country code and no spaces or plus sign. For example, 0802 359 0664 becomes `2348023590664`.

## Add, rename or remove a product

1. Put the photo in `img/`. A 1200 by 1000 picture on a plain white background looks best.
2. In `index.html`, search for `const ITEMS`. Add a line in the same style as the others:

```js
{id:'my-new-shoe', name:'Name shown on the site', tags:['men'], alt:'Short description of the photo'},
```

- `id` must match the photo file name without `.jpg`.
- `tags` decides where it shows up: `students`, `men`, `women`, `heels`, `bags`. You can use more than one.
- To remove a product, delete its line. You can delete its photo from `img/` too.

## The admin page

Open `admin.html`, or use the small "Admin" link at the bottom of the website.

- The first time, you create a passcode. After that you need it to open the page.
- It lists orders placed on that device, and you can paste in any order message that arrives on WhatsApp ("Add an order"). The name and phone number are read from it.
- For each order you can set the status (New, Price agreed, Deposit paid, In production, Ready, Delivered, Cancelled), the agreed price, the amount received and your notes. There is a "Reply on WhatsApp" button for each customer.
- Download CSV gives you a spreadsheet. **Back up** saves a copy of everything, and **Restore** loads it again.

**Important limits.** There is no server behind this site, so the admin page keeps everything inside the browser you use. Orders placed on a customer's phone do not appear on your admin page by themselves. They reach you on WhatsApp, and you paste them in. The passcode only locks the page in that one browser. Back up regularly, and do not clear your browser data without a backup.

## What this version does not have

No shopping cart, card payments, customer accounts, or shared admin database. Payment is agreed on WhatsApp. If you later want these, the site will need a server (for example a small backend and a payment provider), and I can help plan that.

## Fonts

The site loads the fonts Bodoni Moda and Jost from Google Fonts. Without an internet connection it falls back to standard fonts and still works.

## Credits

Created by Bashiru Fadill Oluwashubomi. Phone 09078097713, email fadilbasiru18@gmail.com.
