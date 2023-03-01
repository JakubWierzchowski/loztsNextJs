import styled from "styled-components";
export const theme = {
  colorsCategoryCalendar: {
    zacy: "rgb(84, 169, 87)",
    skrzaci: "rgb(106, 72, 186)",
    mlodzicyMlodsi: "rgb(97, 191, 210)",
    mlodzicy: "rgb(81, 158, 174)",
    kadeci: "rgb(62, 106, 168)",
    juniorzy: "rgb(208, 87, 26)",
    mlodziezowcy: "rgba(53, 2, 129, 0505)",
    seniorzy: "rgb(193, 174, 72)",
    liga: "rgb(201, 174, 117)",
  },
};

export const ColorsCategory = styled.span`
  color: #ffffff;
  border-radius: 20px 20px 20px 20px;
  text-align: center;
  font-weight: 500;
  white-space: nowrap;
  font-size: 16px;
  padding: 8px;
  background: ${({ theme, categories }) => {
    switch (categories) {
      case "Żacy":
        return theme.colorsCategoryCalendar.zacy;
      case "Skrzaci":
        return theme.colorsCategoryCalendar.skrzaci;
      case "Młodzicy Młodsi":
        return theme.colorsCategoryCalendar.mlodzicyMlodsi;
      case "Młodzicy":
        return theme.colorsCategoryCalendar.mlodzicy;
      case "Kadeci":
        return theme.colorsCategoryCalendar.kadeci;
      case "Juniorzy":
        return theme.colorsCategoryCalendar.juniorzy;
      case "Młodzieżowcy":
        return theme.colorsCategoryCalendar.mlodziezowcy;
      case "Seniorzy":
        return theme.colorsCategoryCalendar.seniorzy;
      case "Liga":
        return theme.colorsCategoryCalendar.liga;
      default:
        return "";
    }
  }};
`;

export const DivCategory = styled.div`
  text-align: center;
  line-height: 45px;
  @media (min-width: 320px) {
    line-height: 0px;
  }
`;
