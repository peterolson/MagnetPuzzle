import { PieceType } from './../lib/Board';

const images: { [key: string]: any } = {
    [PieceType.Block]: require("./block.png"),
    [PieceType.Start]: require("./start.png"),
    [PieceType.Home]: require("./home.png"),
    [PieceType.Blank]: require("./blank.png"),
    logo: require("./logo.png"),
    goldSmall: require("./goldsmall.png"),
    silverSmall: require("./silversmall.png"),
    bronzeSmall: require("./bronzesmall.png"),
    gold: require("./gold.png"),
    silver: require("./silver.png"),
    bronze: require("./bronze.png"),
    up: require("./up.png"),
    restart: require("./restart.png"),
    next: require("./next.png"),
    undo: require("./undo.png"),
    reset: require("./reset.png")
}

export default images;