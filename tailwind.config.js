module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./component/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      textColor: {
        primary: "#010069",
        deepBlue: "#216594",
        orange: "##FF9F00",
        brown: "#AC8540",
        optional: "#233962",
        greenLigth: "#5CC2BA",
        golden: "#DFC07C",
        titleCar: "#294634",
        grey: {
          DEFAULT: "#444444",
          light: "#707070",
          Dark: "#4B4B4B",
          product: "#2F3336",
          social: "#323232",
          placeholder: "#AEADB3",
          line: "#333333",
          derechos: "#606060"
        },
        purple: {
          DEFAULT: "#60375F",
          light: "#913271",
        },
        white: "#FFF",
        black: "#000",
      },
      colors: {
        primary: "#010069",
        greenLigth: "#5CC2BA",
        golden: "#DFC07C",
        KingBlue:"#263D8F",
        redLine:"#ED1F24",
        optional: "#233962",
        grey: {
          DEFAULT: "#444444",
          light: "#707070",
          line: "#333333",
          cart: "#DBDBDBF2",
          Dark: "#4B4B4B",
        },
        redFooter: "#EC1E24"
      },
      width: {
        play: "137px",
        playCBD: "6px",
        text: "800px",
        contentResponsive: "255px",
        contentResponsiveAlt: "265px",
        bigLogo: "313px",
        image: "343px",
        benefits: "140px",
        110: "160px",
        279: "279px",
        84: "84px",
        25: "25px",
        button: "250px",
        terminos: "280px",
        derechos: "290px",
        menuMobil: "310px",
        contact: "280px"
      },
      height: {
        banner: "475px",
        play: "137px",
        banner2: "360px",
        bigLogo: "313px",
        image: "343px",
        benefits: "140px",
        110: "160px",
        log: "0px",
        25: "25px",
        line: "0.5px",
        itemCart: "90px",
        30: "30px",
        25: "25px",
        menu:"800px",

      },
      maxWidth: {
        xs: '400px'
      },
      margin: {
        cosmetic: "75px",
        textDescriptions: "72px",
        18: "18px",
        33: "33px",
        34: "34px",
        117: "117px",
        37: "37px",
        logo: "37px",
        27: "27px",
        78: "92px",
        menu: "3000px",
        114: "114px"
      },
      fontSize: {
        text: "22px",
        cart: "13px",
        name: "14px",
        title: "28px",
        subcription: "15px",
        red: "14px",
        textResponsive: "12px",
        subtitle: "18px",
        titlePrimary: "37px",
        terminos: "10px"
      },
      borderRadius: {
        border: "40px"
      },
      borderWidth: {
        3: "3px"
      },
      container: {

        xs: '400px'

      }


    },
  },
  plugins: [

  ],
}
