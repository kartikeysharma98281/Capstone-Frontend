/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./public/index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
    theme: {
      extend: {
        colors: {
          fafafa: "#fefefe",
          color: "#213555",
          e5d283: "#e5d283",
          darkkhaki: "#ccb869",
          slategray: "#546987",
          f709c: "#4f709c",
          "celestial-hue-celestial-light": "#fff",
          "celestial-red-cr-600": "#df2c1d",
          "celestial-grey-cg-700": "#333",
          "celestial-grey-cg-500": "#666",
          "celestial-grey-cg-900": "#222",
          gray: {
            "100": "#fafafa",
            "200": "rgba(0, 0, 0, 0.5)",
          },
          "celestial-grey-cg-400": "#858585",
          "celestial-blue-cb-900": "#003145",
          "celestial-grey-cg-50": "#f5f5f5",
          "celestial-green-cg-600": "#44924c",
          "miscellaneous-m-4": "#f8f9fd",
          gainsboro: {
            "100": "#e6e6e6",
            "200": "#d9d9d9",
          },
          silver: {
            "100": "#bababa",
            "200": "#b7b7b7",
          },
          whitesmoke: "#f8f8f8",
          sandybrown: "#f2994a",
          "celestial-grey-cg-200": "#ccc",
          darkslategray: "#255973",
          "celestial-green-cg-50": "#e3f2e5",
          limegreen: "#1ec51a",
        },
        spacing: {},
        fontFamily: {
          font: "'Segoe UI'",
          "desktop-heading-3-h3-500": "Poppins",
          "desktop-body-2-b2-600": "Inter",
        },
        borderRadius: {
          "9xs-2": "3.2px",
          "3xs": "10px",
          "81xl": "100px",
          "8xs": "5px",
          "9xs": "4px",
          mini: "15px",
          "6xs-2": "6.2px",
        },
      },
      fontSize: {
        "sm-4": "13.4px",
        mid: "17px",
        base: "16px",
        sm: "14px",
        xl: "20px",
        "23xl": "42px",
        "5xl": "24px",
        "10xl": "29px",
        "smi-7": "12.7px",
        "lg-6": "18.6px",
        "base-3": "16.3px",
        "base-7": "16.7px",
        "sm-5": "13.5px",
        "lgi-5": "19.5px",
        "base-6": "16.6px",
        "72xl-3": "91.3px",
        "27xl": "46px",
        "8xl": "27px",
        "7xl-9": "26.9px",
        "3xl": "22px",
        "mini-8": "14.8px",
        "xl-5": "20.5px",
        "2xs-4": "10.4px",
        inherit: "inherit",
      },
      screens: {
        mq1350: {
          raw: "screen and (max-width: 1350px)",
        },
        mq1150: {
          raw: "screen and (max-width: 1150px)",
        },
        mq900: {
          raw: "screen and (max-width: 900px)",
        },
        mq800: {
          raw: "screen and (max-width: 800px)",
        },
        mq750: {
          raw: "screen and (max-width: 750px)",
        },
        mq675: {
          raw: "screen and (max-width: 675px)",
        },
        mq498: {
          raw: "screen and (max-width: 498px)",
        },
        mq450: {
          raw: "screen and (max-width: 450px)",
        },
      },
    },
    corePlugins: {
      preflight: false,
    },
  };
  