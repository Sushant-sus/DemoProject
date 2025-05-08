import logo from "./image/logo2.png";
import advertisement from "./image/Header_-Food-ads.webp";
import ad2 from "./image/Screenshot 2024-02-28 174131.png";


export const homepageData = {
    header: {
        logo: logo,
        actions: [
          { label: "Home", href: "/" },
          { label: "About", href: "/about" },
          {
            label: "Services",
            dropdown: [
              { label: "Fast Delivery", href: "/services/delivery" },
              { label: "Top Restaurants", href: "/services/restaurants" },
              { label: "Exclusive Offers", href: "/services/offers" },
            ],
          },
          { label: "Contact", href: "/contact" },
          { label: "Login", href: "/login", isPrimary: true },
        ],
      },
    hero:{
        image: advertisement,
    },
    promotionalBanner: {
      bannerId: 1,
      title: "FOODSTALL",
      description: "Discover the best food from your favorite restaurants.",
      bannerImage: ad2
    },
    services: [
      {
        layoutId: 1,
        images: [
          "https://fmdadmin.foodmandu.com//Images/Product/465778/Item//Orion_ChocoPie_Original_300_Gms_20250430084121.png",
          "https://fmdadminstg.foodmandu.com//Images/Product/189447/Item//pomogrNWE_SMALL.webp"
        ],
        title: "Fast Delivery",
        description: "Get your food delivered in record time."
      },
      {
        layoutId: 2,
        images: [
          "https://fmdadmin.foodmandu.com//Images/Product/424476/Item//VCS_Garlic_Pepper_Sausage_500gm__20250310101216.png",
          "https://fmdadmin.foodmandu.com//Images/Product/432122/Item//34.jpg"
        ],
        title: "Wide Selection",
        description: "Choose from a variety of cuisines and dishes."
      },
      {
        layoutId: 3,
        images: [
          "https://fmdadmin.foodmandu.com//Images/Product/465884/Item//NDS_Paneer_500_gms_20250502105728.png",
          "https://fmdadminstg.foodmandu.com//Images/Product/189447/Item//pomogrNWE_SMALL.webp"
        ],
        title: "Top Restaurants",
        description: "Partnered with the best restaurants in town."
      },
      {
        layoutId: 4,
        images: [
          "https://fmdadmin.foodmandu.com//Images/Product/432122/Item//34.jpg",
          "https://fmdadmin.foodmandu.com//Images/Product/465778/Item//Orion_ChocoPie_Original_300_Gms_20250430084121.png"
        ],
        title: "Exclusive Offers",
        description: "Enjoy special deals and discounts."
      },
      {
        layoutId: 5,
        images: [
          "https://fmdadmin.foodmandu.com//Images/Product/465884/Item//NDS_Paneer_500_gms_20250502105728.png",
          "https://fmdadmin.foodmandu.com//Images/Product/424476/Item//VCS_Garlic_Pepper_Sausage_500gm__20250310101216.png"
        ],
        title: "Limited Offers",
        description: "Grab time-sensitive deals before they expire."
      },
      {
        layoutId: 6,
        images: [
          "https://fmdadminstg.foodmandu.com//Images/Product/189447/Item//pomogrNWE_SMALL.webp",
          "https://fmdadmin.foodmandu.com//Images/Product/432122/Item//34.jpg"
        ],
        title: "Unlimited Offers",
        description: "Unlock endless savings with our premium plans."
      }
    ],
    aboutUs: {
      title: "About Us",
      description: [
        "MarkFandu is the fastest, easiest, and most convenient way to enjoy the best food from your favorite restaurants at home, at the office, or wherever you want.",
        "We know your time is valuable, and sometimes every minute counts. That’s why we deliver, so you can spend more time doing the things you love."
      ],
      cta: "Learn More"
    }
  };