import { PortCard } from "../Interface/port-card";

export const PORT_CARDS: Array<PortCard> = [
    {
        // <p>Toiture</p>
        img_src: "assets/toiture.jpg",
        title: "Roofing",
        sub_title: "Update your roof",
    },
    {
        // <p>Peinture</p>
        img_src: "assets/painter.jpg",
        title: "House painter",
        sub_title: "Fresh new paint",
    },
    {
        // <p>Plumber</p>
        img_src: "assets/plumber.jpg",
        title: "Plumbing",
        sub_title: "Leaks",
    },
    {
        // <p>Plancher</p>
        img_src: "assets/plancher.jpg",
        title: "Flooring",
        sub_title: "Redo your floors",
    },
    {
        // <p>Cuisine</p>
        img_src: "assets/kitchen.jpg",
        title: "Change your kitchen",
        sub_title: "Kitchen",
    },
    {
        // <p>Salle de bain</p>
        img_src: "assets/bathroom.jpg",
        title: "Bathroom",
        sub_title: "Change your bathroom",
    },
    {
        // <p>Soudure</p>
        img_src: "assets/weld.jpg",
        title: "Wielding",
        sub_title: "Wield",
    },
    {
        // <p>Ciment</p>
        img_src: "assets/cement.jpg",
        title: "Cement",
        sub_title: "Reinforcement job",
    },
    {
        // <p>Pavé uni</p>
        img_src: "assets/pave_uni.jpg",
        title: "Cement flooring",
        sub_title: "Front house flooring",
        
    },
    {
        // <p>Contracteur général</p>
        img_src: "assets/contractor.jpg",
        title: "Contractor",
        sub_title: "General jobs construction",
    },
    {
        // <p>Homme à tout faire</p>
        img_src: "assets/handyman.jpg",
        title: "Handyman",
        sub_title: "Unlicensed",
    },
    {
        // <!-- <p>Jardinage</p> -->
        img_src: "assets/gardening.jpg",
        title: "Gardening",
        sub_title: "Decoration and botanic",
    },
];


export enum tags {
    Roof,
    Painting,
    Plumber,
    Flooring,
    Kitchen,
    Bathroom,
    Electrician,
    Welding,
    Cement,
    PavingStone,
    GeneralContractor,
    Handyman,
    Gardening
}