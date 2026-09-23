import { HeaderNav } from "@/components/header-nav";
import { Metadata } from "next";
import Image from "next/image";
import classes from "./menu.module.css";
import headerImage from "@/public/img/IMG_2256.webp";
import React from "react";

export const metadata: Metadata = {
  title: "GorettiFest Food & Drinks Menu",
  description:
    "Don't miss the amazing food at GorettiFest! From Fair classics like burgers and bratwursts to cultural favorites like chicken fajitas and jollof rice, there's a dish for every palate at GorettiFest!",
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
      title: "Afro-Caribbean",
      items: [
        {
          title: "Island Crispy Chicken Tenders",
          description:
            "Hand-battered, freshly fried chicken tenderloins with an incredible crunch and juicy center and served with a tangy, sweet & spicy sauce.",
        },
        {
          title: "Beignets",
          description:
            "Golden, airy dough bites, fresh-fried on-site! With your choice of powdered sugar, cinnamon, caramel, or chocolate.",
        },
        {
          title: "Grio & Pikliz",
          description:
            "Crispy pork bites with sweet & spicy sauce and zesty pickled slaw.",
        },
        {
          title: "Fried Plantains",
          description:
            "Caramelized ripe plantains; sweet & lightly salted.",
        },
        {
          title: "Jollof Rice",
          description:
            "Fluffy, golden-herbed basmati rice, gently spiced and not fried.",
        },
        {
          title: "Combo Plate",
          description:
            "Island Crispy Chicken Tenders or Grio with Fried Plantains and Jollof Rice.",
        },
      ],
    },
    {
      title: "Asian",
      items: [
        {
          title: "Egg Rolls",
          description:
            "Two (2) egg rolls in a crispy shell surrounding a blend of savory spiced pork and crunchy cabbage.",
        },
        {
          title: "Chicken Skewer",
          description:
            "Juicy chicken bites tossed in a classic sweet and tangy teriyaki glaze.",
        },
        {
          title: "Fried Rice",
          description:
            "Classic fried rice, tossed with stir-fried vegetables, eggs, and a splash of soy sauce.",
        },
        {
          title: "Pork Dumplings",
          description:
            "Classic grilled dumplings with a savory pork filling.",
        },
      ],
    },
    {
      title: "Texas BBQ",
      items: [
        {
          title: "Goretti FEAST",
          description:
            "2 proteins (brisket & sausage) with 2 sides (mac & cheese & green bean casserole).",
        },
        {
          title: "Mini FEAST",
          description:
            "Choice of 1 protein (brisket or sausage) with 2 sides (mac & cheese & green bean casserole).",
        },
        {
          title: "Brisket Sandwich",
          description:
            "Sliced, smoked brisket on a toasted bun.",
        },
        {
          title: "Brisket Mac & Cheese",
          description:
            "Creamy classic mac and cheese with a kick of smoked brisket.",
        },
        { title: "Mac & Cheese (A La Carte)", description: "" },
        { title: "Green Bean Casserole (A La Carte)", description: "" },
        { title: "Sausage (A La Carte)", description: "" },
        { title: "Sliced Brisket (A La Carte)", description: "" },
        {
          title: "Texas Twinkie (A La Carte)",
          description:
            "Jumbo brisket stuffed jalapeno pepper wrapped in bacon.",
        },
        { title: "Burnt Ends (A La Carte)", description: "" },
        { title: "Banana Pudding", description: "" },
        { title: "HTeaO Tea", description: "" },
      ],
    },
    {
      title: "Corn Dogs",
      items: [
        {
          title: "Corn Dog",
          description:
            "Nothing says “Festival” like a piping hot corn dog. Come try our homemade, freshly battered and fried classic with mustard or ketchup!",
        },
        {
          title: "Fresh Squeezed Lemonade",
          description:
            "Cool off with a sip of perfectly tart, freshly-made lemonade.",
        },
      ],
    },
    {
      title: "Fair Classics",
      items: [
        {
          title: "Turkey Leg",
          description:
            "The quintessential fair classic, an enormous and juicy turkey leg smoked to perfection.",
        },
        {
          title: "Texas Tornado",
          description:
            "A giant potato spiral-cut from end to end, seasoned and deep fried for an irresistible, shareable snack. Get it sweet or regular!",
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
          title: "The Feast",
          description:
            "Bratwurst sandwich, potatoes, sauerkraut, and red cabbage.",
        },
        {
          title: "Bratwurst Sandwich",
          description:
            "Enjoy a juicy, savory grilled bratwurst in a bun with or without a bed of mouth-watering sauerkraut. Don’t forget the Dusseldorf Mustard!",
        },
        {
          title: "Veggie Plate",
          description:
            "Potatoes, sauerkraut, and red cabbage.",
        },
        {
          title: "Bratsicle",
          description:
            "Bratwurst on a stick!",
        },
        {
          title: "Soft Pretzel",
          description:
            "Dusted with sweet cinnamon sugar or classic salty.",
        },
      ],
    },
    {
      title: "Hamburgers",
      items: [
        { title: "Hamburger", description: "" },
        { title: "Cheeseburger", description: "" },
        { title: "French Fries", description: "" },
        { title: "Chili Fries", description: "" },
        { title: "Burger & Fries", description: "" },
        { title: "Cheeseburger & Fries", description: "" },
      ],
    },
    {
      title: "Italian",
      items: [
        {
          title: "Slice of Pizza",
          description:
            "Cheese or pepperoni.",
        },
        {
          title: "Meatball Sub",
          description:
            "Pork meatballs bathed in marinara sauce, all atop a bun of white Italian bread.",
        },
        {
          title: "Meatball Six-Pack",
          description:
            "Pork meatballs bathed in marinara sauce.",
        },
        {
          title: "Garlic Bread",
          description:
            "Crusty Italian bread spread with butter and our signature garlic spice blend, broiled until golden and crunchy.",
        },
      ],
    },
    {
      title: "Mexican",
      items: [
        {
          title: "Chicken Fajita Plate",
          description:
            "Flame-grilled chicken, diced and served on a hot tortilla and topped with pico de gallo and salsa. Served with rice and beans.",
        },
        {
          title: "Costillas en Salsa Plate",
          description:
            "Baby back pork ribs braised with salsa verde and served with rice and beans.",
        },
        {
          title: "Cheese Nachos",
          description:
            "Tortilla chips and melted cheese. A match made in heaven!",
        },
        {
          title: "Davo Supremo Nachos",
          description:
            "Famous for a reason! Nachos “loaded” with pico, sour cream, beef, beans, & cheese.",
        },
        {
          title: "Fruta en Vaso",
          description:
            "Fresh fruit cup with pineapple, cantaloupe, watermelon, and cucumber topped with spicy chamoy and tajin.",
        },
        { title: "Breakfast Burrito (Sunday only)", description: "" },
      ],
    },
    {
      title: "Drinks",
      items: [
        {
          title: "Soft Drink",
          description:
            "Coke, Diet Coke, Dr Pepper, Diet Dr Pepper, Sprite.",
        },
        { title: "Sports Drink", description: "" },
        { title: "Water", description: "" },
      ],
    },
    {
      title: "Desserts",
      items: [
        { title: "Paletas", description: "" },
        { title: "Cotton Candy", description: "" },
        { title: "Snow Cones", description: "" },
        { title: "Pickles", description: "" },
        {
          title: "Brownie",
          description:
            "Gluten-free option available.",
        },
        { title: "Rice Krispy Treat", description: "" },
        { title: "Coffee (Sunday only)", description: "" },
        { title: "Donuts (Sunday only)", description: "" },
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
            <h2 className="text-balance mb-8">
              GorettiFest Menu
            </h2>
            <div className={classes.menu}>
              {menu.sections.map((section, si) => (
                <div key={si} className={classes.menuSection}>
                  <h3>{section.title}</h3>
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
