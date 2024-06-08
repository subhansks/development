// components/Slider.js
import React from "react";

const Slider = () => {
  return (
    <main id="main" className="flex--expand-v width--all-12 bg--off">
      <div>
        <div className="groupPromo--bg">
          <div
            className="page-navigation page-center page-space--v-m"
            data-t="groupsPromotionWidget"
          >
            <div className="scrollBox-space--s-s scrollBox-space--fromW3-m-s scrollBox-space--fromMaxPageWidth-remove flex width--all-12 boxAlign-ai--all-c">
              <button
                type="button"
                className="space--mr-1 hide--touch-on button button--shape-circle button--type-tertiary button--mode-white button--size-s button--disabled button--square"
              >
                <span className="flex--inline boxAlign-ai--all-c">
                  <svg width="10" height="10" className="icon icon--left">
                    <use xlinkHref="/assets/img/ico_e4ffe.svg#left"></use>
                  </svg>
                </span>
              </button>
              <div className="scrollBox-container overflow--avoid-vClip flex flex--grow-1 overflow--scrollX-raw hide-scrollbar carousel--isNext">
                {[
                  {
                    href: "https://www.hotukdeals.com/tag/home",
                    title: "Home & Living",
                    icon: "home",
                    label: "Home & Living",
                  },
                  {
                    href: "https://www.hotukdeals.com/tag/electronics",
                    title: "Electronics",
                    icon: "electronic",
                    label: "Electronics",
                  },
                  {
                    href: "https://www.hotukdeals.com/tag/kids",
                    title: "Family & Kids",
                    icon: "family",
                    label: "Family & Kids",
                  },
                  {
                    href: "https://www.hotukdeals.com/tag/fashion",
                    title: "Fashion & Accessories",
                    icon: "fashion",
                    label: "Fashion & Accessories",
                  },
                  {
                    href: "https://www.hotukdeals.com/tag/garden-diy",
                    title: "Garden & Do It Yourself",
                    icon: "garden",
                    label: "Garden & Do It Yourself",
                  },
                  {
                    href: "https://www.hotukdeals.com/tag/entertainment",
                    title: "Culture & Leisure",
                    icon: "culture",
                    label: "Culture & Leisure",
                  },
                  {
                    href: "https://www.hotukdeals.com/tag/groceries",
                    title: "Groceries",
                    icon: "food",
                    label: "Groceries",
                  },
                  {
                    href: "https://www.hotukdeals.com/tag/services-contracts",
                    title: "Services & Contracts",
                    icon: "service",
                    label: "Services & Contracts",
                  },
                  {
                    href: "https://www.hotukdeals.com/tag/travel",
                    title: "Travel",
                    icon: "travel",
                    label: "Travel",
                  },
                  {
                    href: "https://www.hotukdeals.com/tag/beauty",
                    title: "Health & Beauty",
                    icon: "beauty",
                    label: "Health & Beauty",
                  },
                  {
                    href: "https://www.hotukdeals.com/tag/sports-fitness",
                    title: "Sports & Outdoors",
                    icon: "sports",
                    label: "Sports & Outdoors",
                  },
                  {
                    href: "https://www.hotukdeals.com/tag/gaming",
                    title: "Gaming",
                    icon: "gaming",
                    label: "Gaming",
                  },
                  {
                    href: "https://www.hotukdeals.com/tag/broadband-phone-service",
                    title: "Broadband & Phone Contracts",
                    icon: "telephone",
                    label: "Broadband & Phone Contracts",
                  },
                  {
                    href: "https://www.hotukdeals.com/tag/car-motorcycle",
                    title: "Car & Motorcycle",
                    icon: "car",
                    label: "Car & Motorcycle",
                  },
                  {
                    href: "https://www.hotukdeals.com/tag/personal-finance",
                    title: "Finance & Insurance",
                    icon: "insurance",
                    label: "Finance & Insurance",
                  },
                ].map((item, index) => (
                  <div key={index} className="scrollBox-item space--v-1">
                    <a
                      href={item.href}
                      className="button button--type-tag button--mode-dark"
                      title={item.title}
                      data-t-click
                      data-t="groupLink"
                    >
                      <span className="flex--inline boxAlign-ai--all-c">
                        <svg width="16" height="16">
                          <use
                            href={`/assets/img/components/groups-promo/icons_0ddd1.svg#${item.icon}`}
                          ></use>
                        </svg>
                        <span className="space--ml-2"> {item.label} </span>
                      </span>
                    </a>
                  </div>
                ))}
              </div>
              <button
                type="button"
                className="size--all-m space--ml-1 hide--touch-on button button--shape-circle button--type-tertiary button--mode-white button--size-s button--square"
              >
                <span className="flex--inline boxAlign-ai--all-c">
                  <svg width="10" height="10" className="icon icon--right">
                    <use xlinkHref="/assets/img/ico_e4ffe.svg#right"></use>
                  </svg>
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Slider;
