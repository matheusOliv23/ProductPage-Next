import { styled } from "..";

export const HomeContainer = styled("main", {
  display: "flex",
  // gap: "3rem",
  width: "100%",
  maxWidth: "90vw",
  margin: "0 auto",
  // marginLeft: "auto",
  // minHeight: 656,
});

export const Product = styled("div", {
  background: "linear-gradient(180deg, #1ea483 0%, #7465d4 100%)",
  borderRadius: 8,
  cursor: "pointer",
  // padding: "0.25rem",
  position: "relative",
  overflow: "hidden",

  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  img: {
    objectFit: "cover",
    backgroundPosition: "center",
    height: 600,
  },

  footer: {
    position: "absolute",
    bottom: "0.25rem",
    left: "0.25rem",
    right: "0.25rem",
    padding: "2rem",

    borderRadius: 6,
    transform: "translateY(110%)",
    opacity: 0,
    transition: "all 0.2s ease-in-out",

    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",

    background: "rgba(0,0,0,0.6)",

    strong: {
      fontSize: "$lg",
    },
    span: {
      fontSize: "$xl",
      fontWeight: "bold",
      color: "$green300",
    },
  },

  "&:hover": {
    footer: {
      transform: "translateY(0%)",
      opacity: 1,
    },
  },
});
