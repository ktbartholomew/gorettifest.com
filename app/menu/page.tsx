import { HeaderNav } from "@/components/header-nav";
import { Metadata } from "next";
import Image from "next/image";
import { lilita } from "@/components/font";
import classes from "./menu.module.css";
import headerImage from "@/public/img/IMG_2256.webp";
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
            "Perfectly fried russet potatoes, lightly salted. Top them with chili for an extra-special treat!",
        },
        {
          title: "Turkey Leg",
          description:
            "The quintessential fair classic, an enormous and juicy turkey leg smoked to perfection.",
        },
        {
          title: "Texas Tornado",
          description:
            "A giant russet potato spiral-cut from end-to-end, seasoned with our spicy, smokey spice blend and deep fried for an irresistible, shareable snack. Try it with our sweet powdered sugar topping for dessert!",
        },
        {
          title: "Roasted Corn",
          description:
            "A whole ear of corn seasoned with our house-made spice rub and slow-roasted for a juicy, slightly-charred crunch.",
        },
      ],
    },
    {
      title: "German",
      items: [
        {
          title: "German Feast",
          description: "",
        },
        {
          title: "Bratwurst Sandwich",
          description:
            "Savory, grilled bratwurst straight from Muenster! Served on a warm hoagie roll and topped with a generous topping of sauerkraut.",
        },
        {
          title: "“Bratsicle”",
          description:
            "Our famous bratwurst, on a stick. Sometimes simpler is better.",
        },
        {
          title: "Soft Pretzel",
          description:
            "A classic salted soft pretzel, straight from our oven to you!",
        },
      ],
    },
    {
      title: "Tex-Mex",
      items: [
        {
          title: "Fajita Taco Plate",
          description:
            "Strips of flame-grilled fajita chicken or beef served on a piping-hot flour tortilla and your choice of fresh topping. Served with rice and beans.",
        },
        {
          title: "Cheese Nachos",
          description:
            "The stadium classic: tortilla chips and melted cheese. A match made in heaven!",
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
          title: "Jerk Chicken Kabob",
          description:
            "The Jamaican classic! Morsels of perfectly-spiced chicken flame-grilled and served alongside grilled vegetables on a skewer.",
        },
        {
          title: "Beignets",
          description:
            'Homemade "puff puff" pastry balls fried for a flaky shell and a tender center, tossed in our special mix of powdered sugar and cinnamon.',
        },
        {
          title: "Grio",
          description:
            "Juicy pork shoulder bites braised until fork-tender, then quickly fried to add a thin, deliciously crispy shell.",
        },
        {
          title: "Jollof Rice",
          description:
            "Hearty, spiced basmati rice with diced vegetables and bits of jerk chicken.",
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
          title: "Chicken Skewer",
          description: "Juicy chicken bites cured in our top secret marinade.",
        },
        {
          title: "Vegetable Fried Rice",
          description:
            "Classic fried rice, tossed with stir-fried vegetables, eggs, and a splash of soy sauce.",
        },
        {
          title: "Gyoza",
          description:
            "Classic handmade dumplings with a savory filling. Perfect with a splash of sweet and spicy sauce!",
        },
      ],
    },
    {
      title: "Texas BBQ",
      items: [
        {
          title: "Goretti FEAST BBQ Plate",
          description:
            "Texas-style smoked brisket, perfectly peppery smoked sausage, mac and cheese, and cole slaw.",
        },
        {
          title: "Mini Feast BBQ Plate",
          description:
            "One choice of brisket or sausage, mac and cheese, and cole slaw.",
        },
        {
          title: "Brisket Mac and Cheese",
          description:
            "The only thing better than the creamy comfort of classic mac and cheese is to add a kick of smoked brisket!",
        },
        {
          title: "Texas Twinkie",
          description:
            "A jumbo roasted jalapeño pepper stuffed with brisket and wrapped in bacon to create the perfect smoky snack with just a hint of heat.",
        },
        {
          title: "Baked Beans",
          description:
            "(a la carte only) A BBQ classic, our smoked beans are the perfect companion to any of our main dishes.",
        },
      ],
    },
    {
      title: "Corn Dogs and Lemonade",
      items: [
        {
          title: "Corn Dogs",
          description: (
            <>
              Nothing says &ldquo;Festival&rdquo; like a piping hot corn dog.
              Come try our homemade, freshly battered and fried classic with
              mustard or ketchup!
            </>
          ),
        },
        {
          title: "Fresh-Squeezed Lemonade",
          description:
            "Cool off with a sip of perfectly tart, freshly-made lemonade.",
        },
      ],
    },
    {
      title: "Italian",
      items: [
        {
          title: "Meatball Sub",
          description:
            "It's everybody's favorite sandwich for a reason! Homemade pork meatballs bathed in marinara sauce, all atop a bun of white Italian bread.",
        },
        {
          title: "Pizza",
          description:
            "Enjoy a classic slice topped with your choice of cheese or pepperoni.",
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
