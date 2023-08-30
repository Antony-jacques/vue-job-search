import { render, screen } from "@testing-library/vue";

import MainNav from "@/components/MainNav.vue";

describe("MainNav", () => {
  it("displays company name", () => {
    render(MainNav);
    const companyName = screen.getByText("Vuejs Careers");
    expect(companyName).toBeInTheDocument();
  });
  it("Displays menu item for navigation", () => {
    render(MainNav);
    const navigationMenuItems = screen.getAllByRole("listitem");

    const navigationMenuTexts = navigationMenuItems.map(
      (item) => item.textContent
    );
    expect(navigationMenuTexts).toEqual([
      "Teams",
      "Location",
      "Life at our Corp",
      "Student",
      "Job",
    ]); // with array we use toEqual
    console.log(
      "🚀 ~ file: MainNav.test.js:21 ~ it ~ navigationMenuText:",
      navigationMenuTexts
    );
  });
  describe("When the user logs in", () => {
    it("displays user profile image", () => {
      render(MainNav);

      //screen.getByRole("img"); // getByRole fail si il ne trouve pas img -> pb rendu conditionnel

      // queryByRole renvoie le node ou null mais ne fail pas
      const profileImage = screen.queryByRole("img", {
        name: /user profile image/i, // name varie selon l'element html. Pour une img -> alt. | regex
      });
      // on verifie que l'img n'est pas dans le document au 1er chargement
      expect(profileImage).not.toBeInTheDocument();
    });
  });
});
