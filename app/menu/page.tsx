import { HeaderNav } from "@/components/header-nav";
import { Metadata } from "next";
import Image from "next/image";
import { Lilita_One } from "next/font/google";
const lilita = Lilita_One({ weight: ["400"], subsets: ["latin"] });
import classes from "./menu.module.css";
import headerImage from "@/public/img/IMG_1183.webp";
import React from "react";

export const metadata: Metadata = {
  title: "GorettiFest Food & Drinks Menu",
  description:
    "Don't miss the amazing food at GorettiFest! From Fair classics like burgers and bratwursts to cultural favorites like homemade fajitas and pandan coconut pancakes, there's a dish for every palate at GorettiFest!",
};

type Menu = {
  sections: {
    title: React.ReactNode;
    items: {
      title: React.ReactNode;
      description: React.ReactNode;
    }[];
  }[];
};

const menu: Menu = {
  sections: [
    {
      title: "Fair Classics",
      items: [
        {
          title: "Hamburger",
          description:
            "A flame-grilled burger served on a classic sesame-crusted bun. Add cheese and all your favorite garnishes and condiments.",
        },
        {
          title: "French Fries",
          description:
            "Perfectly fried russet potatoes, lightly salted. Enjoy them on their own or to complement your full meal.",
        },
        {
          title: "Turkey Leg",
          description:
            "The quintessential fair classic, an enormous and juicy turkey leg smoked to perfection.",
        },
        {
          title: "Texas Tornado",
          description:
            "A giant russet potato spiral-cut from end-to-end, seasoned with our spicy, smokey blend and deep fried for an irresistible, shareable snack.",
        },
        {
          title: "Roasted Corn",
          description:
            "A whole cob of corn seasoned with our house-made spice rub and slow-roasted for a juicy, slightly-charred crunch.",
        },
      ],
    },
    {
      title: "German",
      items: [
        {
          title: "Bratwurst",
          description:
            "Enjoy a juicy, savory, grilled bratwurst. Have it in a bun or on a skewer. Don't forget the Dusseldorf mustard!",
        },
        {
          title: "Fried Potatoes",
          description:
            "A bratwurst's best friend: thinly sliced and seasoned russet potatoes cooked to perfection.",
        },
        {
          title: "Sauerkraut",
          description:
            "Finely sliced and fermented cabbage, the perfect tangy addition to a juicy bratwurst!",
        },
        {
          title: "Red Cabbage",
          description:
            "Perfectly sweet, shredded, seasoned, and braised red cabbage will transport you to Deutschland with every bite.",
        },
      ],
    },
    {
      title: "Tex-Mex",
      items: [
        {
          title: "Street Tacos",
          description:
            "Grilled chicken or beef seasoned with a house marinade, flame-grilled, diced, and served on a piping-hot flour tortilla. Top with all your favorites like pico de gallo, salsa, and sour cream.",
        },
        {
          title: "Nachos",
          description:
            "Tortilla chips and melted cheese. A match made in heaven!",
        },
        {
          title: "Davo Supremo Nachos",
          description:
            "Famous for a reason, you can get the job done on this kind of meal! Classic nachos loaded with every topping imaginable.",
        },
        {
          title: "Breakfast Burritos (Sunday only)",
          description:
            "Peppers, onions, potatoes and cheese folded together with fluffy scrambled eggs and wrapped in a steamy flour tortilla.",
        },
      ],
    },
    {
      title: "Afro-Caribbean",
      items: [
        {
          title: "Jerk Chicken",
          description:
            "The Jamaican classic! Morsels of perfectly-spiced chicken flame-grilled and served on a skewer.",
        },
        {
          title: "Beignets",
          description:
            'Homemade "puff puff" pastry balls fried for a flaky shell and a tender center, tossed in our special mix of powdered sugar and cinnamon.',
        },
        {
          title: "Grio",
          description:
            "Juicy pork shoulder bites braised until fork-tender, then quickly fried to add a thin, crispy shell.",
        },
        {
          title: "Fried Plantains",
          description:
            "Get your daily dose of fruits with these mature plaintain slices, slowly fried until they achieve a toothsome, caramelized glaze.",
        },
      ],
    },
    {
      title: "Asian",
      items: [
        {
          title: "Egg Rolls",
          description:
            "Bite into a takeout classic: everyone's favorite crispy shell surrounding a blend of savory spiced pork and crunchy cabbage.",
        },
        {
          title: "Teriyaki Chicken Skewer",
          description:
            "Juicy chicken bites tossed in a classic sweet and tangy teriyake glaze.",
        },
        {
          title: "Vegetable Fried Rice",
          description:
            "Classic fried rice, tossed with stir-fried vegetables, eggs, and a splash of soy sauce.",
        },
        {
          title: "Pandan Coconut Milk Waffles",
          description:
            "An unforgettable sweet treat! Coconut milk waffles with an aromatic, slightly-sweet hint of pandan leaves.",
        },
      ],
    },
    {
      title: "Texas BBQ",
      items: [
        {
          title: "Brisket Plate",
          description:
            "Texas-style smoked brisket sliced or chopped, with your choice of classic BBQ sides.",
        },
        {
          title: "Sausage Plate",
          description:
            "Peppery, savory gourmet sausage, with your choice of classic BBQ sides.",
        },
        {
          title: "Texas Twinkie",
          description:
            "A jalapeno pepper wrapped in bacon and roasted to create the perfect smoky snack with just a hint of heat.",
        },
        {
          title: "Brisket Mac and Cheese",
          description:
            "The only thing better than the creamy comfort of classic Mac and Cheese is to add a kick of smoked brisket!",
        },
      ],
    },
    {
      title: "Italian",
      items: [
        {
          title: "Pizza",
          description:
            "Enjoy a classic slice topped with your choice of cheese, pepperoni, or sausage.",
        },
        {
          title: "Meatball Sub",
          description:
            "It's everybody's favorite sandwich for a reason! Homemade pork meatballs bathed in marinara sauce, all atop a bun of white Italian bread.",
        },
        {
          title: "Garlic Bread",
          description:
            "Crusty Italian bread spread with butter and our signature garlic spice blend, broiled until golden and crunchy.",
        },
      ],
    },
    {
      title: "Sweets & Drinks",
      items: [
        { title: "Paletas", description: "" },
        { title: "Popcorn", description: "" },
        { title: "Jumbo Lollipop", description: "" },
        { title: "Brownie", description: "" },
        { title: "Gluten-free Brownie", description: "" },
        { title: "Soft Drinks", description: "" },
        { title: "Gatorade", description: "" },
        { title: "Water", description: "" },
      ],
    },
  ],
};

export default function MenuPage() {
  return (
    <>
      <HeaderNav logo />
      <div className="relative max-h-[90vh] md:h-[90vh]">
        <div className="hidden md:block absolute h-full w-full overflow-hidden">
          <Image
            className="h-full w-full object-cover"
            src={headerImage.src}
            alt="GorettiFest volunteer preparing food"
            priority
            width={1800}
            height={1800}
            loading="eager"
            placeholder="blur"
            blurDataURL={headerImage.blurDataURL}
          />
        </div>
        <div className="absolute top-0 left-0 h-full w-full mix-blend-multiply bg-slate-800 md:bg-slate-900/70"></div>
        <div className="md:py-16">
          <div className="bg-white relative md:max-w-[67vw] lg:max-w-[50vw] mx-auto md:rounded-3xl p-8 md:drop-shadow-xl">
            <h2 className={lilita.className + " text-balance mb-8"}>
              GorettiFest Menu
            </h2>
            <div className={classes.menu}>
              {menu.sections.map((section, si) => (
                <div key={si} className={classes.menuSection}>
                  <h3 className={lilita.className}>{section.title}</h3>
                  <dl>
                    {section.items.map((item, ii) => (
                      <React.Fragment key={ii}>
                        <dt>{item.title}</dt>
                        <dd>{item.description}</dd>
                      </React.Fragment>
                    ))}
                  </dl>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
